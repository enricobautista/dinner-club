"use client";

import { useEffect, useRef, useState } from "react";
import type { Course, Guest } from "@/data/menus";
import DishChecklist from "./DishChecklist";
export type { Guest, GuestEdit } from "@/data/menus";

const EMPTY_GUESTS: Guest[] = [];
const EMPTY_COURSES: Course[] = [];
type Props = {
  slug: string; limit: number; seedGuests?: Guest[]; open: boolean; onClose: () => void;
  cost?: number; potluck?: boolean; courses?: Course[];
};

export default function GuestListModal({ slug, limit, seedGuests = EMPTY_GUESTS, open, onClose, cost,
  potluck = false, courses = EMPTY_COURSES }: Props) {
  const [guests, setGuests] = useState<Guest[]>(seedGuests);
  const [name, setName] = useState("");
  const [plusOne, setPlusOne] = useState(false);
  const [dietary, setDietary] = useState("");
  const [dishes, setDishes] = useState<string[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [confirmRemoval, setConfirmRemoval] = useState(false);
  const [editName, setEditName] = useState("");
  const [editPlusOne, setEditPlusOne] = useState(false);
  const [editDietary, setEditDietary] = useState("");
  const [editDishes, setEditDishes] = useState<string[]>([]);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const [saving, setSaving] = useState(false);
  const card = useRef<HTMLDivElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    let active = true;
    setReady(false);
    async function refresh() {
      try {
        const res = await fetch(`/api/guests/${encodeURIComponent(slug)}`, { cache: "no-store" });
        if (!res.ok) throw new Error("Unable to load the guest list. Please reopen it to try again.");
        const data = await res.json();
        if (active) { setGuests(data.guests); setReady(true); }
      } catch (err) {
        if (active) { setError(err instanceof Error ? err.message : "Unable to load guest list."); setReady(false); }
      }
    }
    refresh();
    const interval = window.setInterval(refresh, 15000);
    window.addEventListener("focus", refresh);
    return () => { active = false; clearInterval(interval); window.removeEventListener("focus", refresh); };
  }, [open, slug]);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    return () => { document.body.style.overflow = overflow; previous?.focus(); };
  }, [open]);

  const usedSpots = guests.reduce((sum, g) => sum + 1 + (g.plusOne ? 1 : 0), 0);
  const remaining = limit - usedSpots;
  const selectedDishes = dishes.filter(d => !guests.some(g => g.dishes?.includes(d)));
  const selectedEditDishes = editDishes.filter(d => !guests.some(g => g.id !== editingId && g.dishes?.includes(d)));

  async function save(body: Record<string, unknown>) {
    setSaving(true); setError(null); setMessage(null);
    try {
      const res = await fetch(`/api/guests/${encodeURIComponent(slug)}`, {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) {
        if (res.status === 409) {
          const latest = await fetch(`/api/guests/${encodeURIComponent(slug)}`, { cache: "no-store" });
          if (latest.ok) setGuests((await latest.json()).guests);
        }
        throw new Error(data.error || "Could not save guest.");
      }
      setGuests(data.guests);
      window.dispatchEvent(new CustomEvent("guestlist:updated", { detail: { slug } }));
      setMessage(body.action === "add" ? "Saved! You're on the list." : body.action === "remove" ? "Guest removed." : "Guest updated.");
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not save guest. Please try again.");
      return false;
    } finally { setSaving(false); }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!ready || saving || !name.trim() || (potluck && !selectedDishes.length)) return;
    if (await save({ action: "add", name: name.trim(), plusOne, dietary: dietary.trim(), ...(potluck ? { dishes: selectedDishes } : {}) })) {
      setName(""); setPlusOne(false); setDietary(""); setDishes([]);
    }
  }

  function startEdit(g: Guest) {
    setConfirmRemoval(false);
    setEditingId(g.id || null); setEditName(g.name); setEditPlusOne(!!g.plusOne);
    setEditDietary(g.dietary || ""); setEditDishes(g.dishes || []); setError(null); setMessage(null);
  }

  async function saveEdit() {
    if (!editingId || !editName.trim() || (potluck && !selectedEditDishes.length)) return;
    if (await save({ action: "edit", id: editingId, name: editName.trim(), plusOne: editPlusOne,
      dietary: editDietary.trim(), ...(potluck ? { dishes: selectedEditDishes } : {}) })) setEditingId(null);
  }

  async function removeGuest() {
    if (!editingId || !ready || saving) return;
    if (await save({ action: "remove", id: editingId })) {
      setEditingId(null);
      setConfirmRemoval(false);
    }
  }

  if (!open) return null;
  return (
    <div className="guest-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="guest-modal-title"
      onKeyDown={e => {
        if (e.key === "Escape" && !saving) onClose();
        if (e.key === "Tab") {
          const elements = card.current?.querySelectorAll<HTMLElement>('button:not(:disabled), input:not(:disabled)');
          const first = elements?.[0], last = elements?.[elements.length - 1];
          if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
          else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
        }
      }}>
      <div className="guest-modal-card menu" ref={card}>
        <button ref={closeButton} onClick={onClose} disabled={saving} aria-label="Close guest list" className="guest-btn ghost">✕</button>
        <h2 id="guest-modal-title" className="smallcaps centered">{potluck ? "Potluck guest list" : "Guest list"}</h2>
        <p className="smallcaps centered" style={{ marginTop: 6 }}>
          {typeof cost === "number" ? <>PREZZO FISSO <strong>${cost}</strong> · </> : null}
          <strong className="guest-fraction">{usedSpots}/{limit}</strong>
        </p>
        {potluck ? <p className="centered" style={{ marginTop: 8 }}>Bring something to the table. Choose your dishes below, and edit your signup anytime.</p> : null}
        {message ? <p role="status" className="guest-feedback">{message}</p> : null}
        {error ? <p role="alert" className="guest-feedback error">{error}</p> : null}
        {!ready ? <p role="status">Loading the guest list…</p> : null}
        <ul className="guest-entries">
          {!guests.length && ready ? <li>No one yet. Be the first to join!</li> : null}
          {guests.map(g => (
            <li key={g.id || g.name}>
              {editingId === g.id ? (
                <fieldset className="guest-edit" disabled={saving || !ready}>
                  <input className="guest-input underline" value={editName} onChange={e => setEditName(e.target.value)} aria-label="Edit name" required />
                  <label className="guest-inline"><input className="guest-checkbox" type="checkbox" checked={editPlusOne} onChange={e => setEditPlusOne(e.target.checked)} />Plus one</label>
                  <input className="guest-input underline grow" value={editDietary} onChange={e => setEditDietary(e.target.value)} aria-label="Edit dietary" placeholder="Dietary (optional)" />
                  {potluck ? <DishChecklist courses={courses} guests={guests} selected={selectedEditDishes} onChange={setEditDishes} editingId={editingId} /> : null}
                  <button className="guest-btn primary" type="button" disabled={!editName.trim() || (potluck && !selectedEditDishes.length)} onClick={saveEdit}>Save</button>
                  <button className="guest-btn ghost" type="button" onClick={() => { setEditingId(null); setConfirmRemoval(false); }}>Cancel</button>
                  {confirmRemoval ? (
                    <div style={{ flexBasis: "100%" }}>
                      <p>Remove {g.name}{g.plusOne ? " and their plus one" : ""} from the guest list?{g.dishes?.length ? " Their dishes will become available again." : ""}</p>
                      <button className="guest-btn ghost" type="button" onClick={removeGuest} aria-label={`Confirm removal of ${g.name}`}>Confirm removal</button>
                      <button className="guest-btn ghost" type="button" onClick={() => setConfirmRemoval(false)}>Keep guest</button>
                    </div>
                  ) : (
                    <button className="guest-btn ghost" type="button" onClick={() => setConfirmRemoval(true)} aria-label={`Remove ${g.name}`}>Remove guest</button>
                  )}
                </fieldset>
              ) : (
                <div>
                  <strong>{g.name}</strong>{g.plusOne ? " +1" : ""}{g.dietary ? ` — ${g.dietary}` : ""}
                  <button className="guest-btn ghost" disabled={saving || !ready} type="button" onClick={() => startEdit(g)} aria-label={`Edit ${g.name}`}>Edit</button>
                  {g.dishes?.length ? <p className="guest-dishes">Bringing: {g.dishes.join(", ")}</p> : null}
                </div>
              )}
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit} style={{ marginTop: 12 }}>
          <fieldset className="guest-edit" disabled={!ready || saving || remaining <= 0}>
            <input aria-label="Your name" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} className="guest-input underline" required />
            <label className="guest-inline"><input className="guest-checkbox" type="checkbox" checked={plusOne} onChange={e => setPlusOne(e.target.checked)} />Bringing a plus one</label>
            <input aria-label="Dietary restrictions or allergies" placeholder="Dietary restrictions/allergies (optional)" value={dietary} onChange={e => setDietary(e.target.value)} className="guest-input underline grow" />
            {potluck ? <DishChecklist courses={courses} guests={guests} selected={selectedDishes} onChange={setDishes} /> : null}
            <button type="submit" className="guest-btn primary" disabled={!name.trim() || (potluck && !selectedDishes.length) || 1 + (plusOne ? 1 : 0) > remaining}>{saving ? "Saving…" : "Join"}</button>
          </fieldset>
          {remaining <= 0 ? <p className="guest-feedback error">Guest list is full. Existing signups can still be edited.</p> :
            plusOne && remaining < 2 ? <p className="guest-feedback error">Only one spot remains; there isn&apos;t room for a plus one.</p> : null}
        </form>
        <p className="dish-help" style={{ marginTop: 12 }}>
          {potluck ? "You can edit any signup above to update names, plus ones, or dishes. Changing a dish makes it available for someone else." : "Kindly note: the cover charge will be collected after the meal. Grazie!"}
        </p>
      </div>
    </div>
  );
}
