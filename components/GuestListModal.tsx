"use client";

import { useEffect, useMemo, useState } from "react";

export type GuestEdit = { ts: number; field: "name"|"dietary"|"plusOne"; from: any; to: any };
export type Guest = {
  id?: string;
  name: string;
  plusOne?: boolean;
  dietary?: string;
  history?: GuestEdit[];
};

type Props = {
  slug: string;
  limit: number;
  seedGuests?: Guest[];
  open: boolean;
  onClose: () => void;
  cost?: number;
};

function uuid() {
  if (typeof crypto !== "undefined" && (crypto as any).randomUUID) return (crypto as any).randomUUID();
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

function normalizeGuests(arr: Guest[]): Guest[] {
  return (arr || []).map(g => ({ ...g, id: g.id || uuid(), history: g.history || [] }));
}

async function apiFetchGuests(slug: string, seed: Guest[] = []): Promise<Guest[]> {
  try {
    const res = await fetch(`/api/guests/${encodeURIComponent(slug)}`, { cache: "no-store" });
    if (!res.ok) return normalizeGuests(seed);
    const data = await res.json();
    const guests = Array.isArray(data?.guests) ? (data.guests as Guest[]) : seed;
    return normalizeGuests(guests);
  } catch {
    return normalizeGuests(seed);
  }
}

async function apiAddGuest(slug: string, g: { name: string; plusOne?: boolean; dietary?: string }) {
  const res = await fetch(`/api/guests/${encodeURIComponent(slug)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "add", ...g }),
  });
  if (!res.ok) throw new Error("Add failed");
  return res.json();
}

async function apiEditGuest(slug: string, g: { id: string; name?: string; plusOne?: boolean; dietary?: string }) {
  const res = await fetch(`/api/guests/${encodeURIComponent(slug)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "edit", ...g }),
  });
  if (!res.ok) throw new Error("Edit failed");
  return res.json();
}

export default function GuestListModal({ slug, limit, seedGuests = [], open, onClose, cost }: Props) {
  const [guests, setGuests] = useState<Guest[]>(seedGuests);
  const [name, setName] = useState("");
  const [plusOne, setPlusOne] = useState(false);
  const [dietary, setDietary] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [editPlusOne, setEditPlusOne] = useState(false);
  const [editDietary, setEditDietary] = useState("");

  useEffect(() => {
    if (!open) return;
    apiFetchGuests(slug, seedGuests).then(setGuests);
  }, [open, slug]);

  // Broadcast updates to other components/tabs when local state changes due to API success
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("guestlist:updated", { detail: { slug } }));
    }
  }, [guests, slug]);

  const usedSpots = useMemo(() => guests.reduce((acc, g) => acc + 1 + (g.plusOne ? 1 : 0), 0), [guests]);
  const remaining = Math.max(0, limit - usedSpots);
  const isFull = remaining <= 0;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    const willUse = 1 + (plusOne ? 1 : 0);
    if (willUse > remaining) return; // over limit
    // Attempt server add first; fall back to optimistic update on failure
    try {
      await apiAddGuest(slug, { name: name.trim(), plusOne, dietary: dietary.trim() || undefined });
      const latest = await apiFetchGuests(slug, seedGuests);
      setGuests(latest);
    } catch {
      const entry: Guest = { id: uuid(), name: name.trim(), plusOne, dietary: dietary.trim() || undefined, history: [] };
      setGuests(prev => [...prev, entry]);
    }
    setName("");
    setPlusOne(false);
    setDietary("");
  }

  function startEdit(id: string) {
    const g = guests.find(x => x.id === id);
    if (!g) return;
    setEditingId(id);
    setEditName(g.name);
    setEditPlusOne(!!g.plusOne);
    setEditDietary(g.dietary || "");
  }

  function cancelEdit() {
    setEditingId(null);
  }

  async function saveEdit() {
    if (!editingId) return;
    try {
      await apiEditGuest(slug, { id: editingId, name: editName.trim(), plusOne: !!editPlusOne, dietary: editDietary.trim() || "" });
      const latest = await apiFetchGuests(slug, seedGuests);
      setGuests(latest);
    } catch {
      setGuests(prev => prev.map(g => {
        if (g.id !== editingId) return g;
        const history = g.history ? [...g.history] : [];
        const now = Date.now();
        if (g.name !== editName.trim()) history.push({ ts: now, field: "name", from: g.name, to: editName.trim() });
        if (!!g.plusOne !== !!editPlusOne) history.push({ ts: now, field: "plusOne", from: !!g.plusOne, to: !!editPlusOne });
        if ((g.dietary || "") !== (editDietary.trim() || "")) history.push({ ts: now, field: "dietary", from: g.dietary || "", to: editDietary.trim() || "" });
        return { ...g, name: editName.trim(), plusOne: !!editPlusOne, dietary: editDietary.trim() || undefined, history };
      }));
    }
    setEditingId(null);
  }

  if (!open) return null;

  return (
    <div className="guest-modal-overlay" role="dialog" aria-modal>
      <div className="guest-modal-card menu">
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <button onClick={onClose} aria-label="Close guest list" className="guest-btn ghost">✕</button>
        </div>
        <h2 className="smallcaps centered" style={{ margin: 0 }}>
          GUEST LIST
        </h2>
        <div className="hair" aria-hidden />

        {(typeof cost === "number" || true) ? (
          <p className="smallcaps centered" style={{ marginTop: 6 }}>
            {typeof cost === "number" ? <>PREZZO FISSO <strong>${cost}</strong> <span aria-hidden>•</span> </> : null}
            <strong className="guest-fraction">{usedSpots}/{limit}</strong>
          </p>
        ) : null}

        <ul style={{ listStyle: "none", padding: 0, marginTop: 8, textAlign:"left" }}>
          {guests.length === 0 && <li style={{ opacity:.8 }}>No one yet. Be the first to join!</li>}
          {guests.map((g) => (
            <li key={g.id || g.name} style={{ margin: ".35rem 0" }}>
              {editingId === g.id ? (
                <div style={{ display:"flex", gap: 8, alignItems:"center", flexWrap:"wrap" }}>
                  <input className="guest-input underline" value={editName} onChange={e => setEditName(e.target.value)} aria-label="Edit name" />
                  <label style={{ display:"flex", alignItems:"center", gap: 6 }}>
                    <input className="guest-checkbox" type="checkbox" checked={editPlusOne} onChange={e => setEditPlusOne(e.target.checked)} />
                    Plus one
                  </label>
                  <input className="guest-input underline grow" value={editDietary} onChange={e => setEditDietary(e.target.value)} aria-label="Edit dietary" placeholder="Dietary (optional)" />
                  <button className="guest-btn primary" type="button" onClick={saveEdit}>Save</button>
                  <button className="guest-btn ghost" type="button" onClick={cancelEdit}>Cancel</button>
                </div>
              ) : (
                <div style={{ display:"flex", alignItems:"center", gap: 8, flexWrap:"wrap" }}>
                  <span style={{ fontWeight: 600 }}>{g.name}</span>
                  {g.plusOne ? <span style={{ opacity:.8 }}> +1</span> : null}
                  {g.dietary ? <span style={{ opacity:.8 }}> — {g.dietary}</span> : null}
                  <button className="guest-btn ghost" type="button" onClick={() => startEdit(g.id!)} aria-label={`Edit ${g.name}`}>Edit</button>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="hair" aria-hidden />

        <form onSubmit={handleSubmit} style={{ marginTop: 8 }}>
          <div style={{ display:"flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
            <input
              aria-label="Your name"
              placeholder="Your name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="guest-input underline"
              required
            />
            <label style={{ display:"flex", alignItems:"center", gap: 6 }}>
              <input className="guest-checkbox" type="checkbox" checked={plusOne} onChange={e => setPlusOne(e.target.checked)} />
              Bringing a plus one
            </label>
            <input
              aria-label="Dietary restrictions or allergies"
              placeholder="Dietary restrictions/allergies (optional)"
              value={dietary}
              onChange={e => setDietary(e.target.value)}
              className="guest-input underline grow"
            />
            <button type="submit" className="guest-btn primary" disabled={!name.trim() || isFull}>Join</button>
          </div>
          {isFull ? <p style={{ color: "#b00", marginTop: 6 }}>Guest list is full.</p> : null}
        </form>

        <p style={{ opacity:.75, marginTop: 10, fontSize: 13 }}>
          Kindly note: the cover charge will be collected after the meal. Grazie!
        </p>
      </div>
    </div>
  );
}
