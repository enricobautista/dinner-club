"use client";

import { useEffect, useMemo, useState } from "react";
import type { Menu } from "@/data/menus";

type ApiGuest = {
  id?: string;
  name: string;
  plusOne?: boolean;
  dietary?: string;
  history?: { ts: number; field: string; from: any; to: any }[];
};

type DashboardData = {
  slug: string;
  count: number;
  headcount: number;
  plusOneCount: number;
  dietaryCounts: Record<string, number>;
  guests: ApiGuest[];
  history: { guestId?: string; guestName: string; field: string; from: any; to: any; ts?: number }[];
  tsArray: string;
  instructions: string;
};

type Props = {
  menus: Menu[];
};

const STORAGE_KEY = "dinnerclub_admin_token";

function formatDate(iso: string) {
  if (!iso) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function HostDashboard({ menus }: Props) {
  const [tokenInput, setTokenInput] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [selectedSlug, setSelectedSlug] = useState<string>(menus[0]?.slug || "");
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.sessionStorage.getItem(STORAGE_KEY);
    if (saved) {
      setToken(saved);
      setTokenInput(saved);
    }
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!token || !selectedSlug) {
      setData(null);
      return;
    }
    let cancelled = false;
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/admin/guests/${encodeURIComponent(selectedSlug)}/export`, {
          headers: {
            "x-admin-token": token,
            "Cache-Control": "no-store",
          },
        });
        if (!res.ok) {
          if (res.status === 401) throw new Error("Unauthorized. Check your admin token.");
          throw new Error(`Failed to load data (status ${res.status}).`);
        }
        const json = (await res.json()) as DashboardData;
        if (!cancelled) setData(json);
      } catch (err: any) {
        if (!cancelled) setError(err?.message || "Unable to load dashboard.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [token, selectedSlug]);

  const menuOptions = useMemo(() => {
    return menus.map((m) => ({
      slug: m.slug,
      label: `${m.location} — ${formatDate(m.dateISO)}`,
      guestLimit: m.guestLimit,
    }));
  }, [menus]);

  const activeMenu = menus.find((m) => m.slug === selectedSlug) || null;
  const limit = activeMenu?.guestLimit || 12;

  const remainingSpots = data ? Math.max(0, limit - data.headcount) : limit;
  const guestsWithPlusOne = data?.guests.filter((g) => g.plusOne) ?? [];
  const guestsSolo = data?.guests.filter((g) => !g.plusOne) ?? [];

  async function handleDownloadCsv() {
    if (!token || !selectedSlug) return;
    try {
      const res = await fetch(`/api/admin/guests/${encodeURIComponent(selectedSlug)}/export?format=csv`, {
        headers: {
          "x-admin-token": token,
          "Cache-Control": "no-store",
        },
      });
      if (!res.ok) {
        if (res.status === 401) throw new Error("Unauthorized. Check your admin token.");
        throw new Error(`Download failed (status ${res.status}).`);
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `guestlist-${selectedSlug}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err: any) {
      setError(err?.message || "Could not download CSV.");
    }
  }

  function handleSubmitToken(e: React.FormEvent) {
    e.preventDefault();
    if (!tokenInput.trim()) {
      setError("Enter a token.");
      return;
    }
    const cleaned = tokenInput.trim();
    setToken(cleaned);
    if (typeof window !== "undefined") window.sessionStorage.setItem(STORAGE_KEY, cleaned);
    setError(null);
  }

  function handleResetToken() {
    setToken(null);
    if (typeof window !== "undefined") window.sessionStorage.removeItem(STORAGE_KEY);
  }

  if (!isReady) return null;

  if (!token) {
    return (
      <main className="menu" style={{ maxWidth: 640, margin: "5rem auto", padding: "2rem" }}>
        <h1 className="smallcaps centered">Host Dashboard</h1>
        <p style={{ textAlign: "center", opacity: 0.8 }}>
          Enter the admin token to view RSVP details.
        </p>
        <form onSubmit={handleSubmitToken} style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }}>
          <input
            className="guest-input underline"
            type="password"
            placeholder="Admin token"
            value={tokenInput}
            onChange={(e) => setTokenInput(e.target.value)}
            autoFocus
          />
          <button type="submit" className="guest-btn primary">Unlock</button>
          {error ? <p style={{ color: "#b00", margin: 0 }}>{error}</p> : null}
        </form>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: 960, margin: "3rem auto", padding: "0 1.25rem 3rem" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
        <div>
          <h1 className="smallcaps" style={{ marginBottom: 4 }}>Host Dashboard</h1>
          {activeMenu ? (
            <p style={{ margin: 0, opacity: 0.7 }}>
              {activeMenu.location} · {new Date(activeMenu.dateISO).toLocaleDateString()} · limit {limit}
            </p>
          ) : null}
        </div>
        <button className="guest-btn ghost" onClick={handleResetToken}>Change token</button>
      </header>

      <section style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
        <label className="smallcaps" style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          Dinner
          <select
            value={selectedSlug}
            onChange={(e) => setSelectedSlug(e.target.value)}
            className="guest-input underline"
            style={{ minWidth: 260 }}
          >
            {menuOptions.map((m) => (
              <option key={m.slug} value={m.slug}>
                {m.label}
              </option>
            ))}
          </select>
        </label>
        <button className="guest-btn primary" onClick={handleDownloadCsv} disabled={!data || loading}>
          Download CSV
        </button>
      </section>

      {error ? <p style={{ color: "#b00", marginTop: 16 }}>{error}</p> : null}

      {loading ? <p style={{ marginTop: 24 }}>Loading…</p> : null}

      {data ? (
        <>
          <section style={{ marginTop: 24, display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}>
            <div className="menu" style={{ padding: "1rem" }}>
              <p className="smallcaps" style={{ margin: 0, opacity: 0.7 }}>RSVPs</p>
              <p style={{ fontSize: 28, margin: "0.25rem 0" }}>{data.count}</p>
            </div>
            <div className="menu" style={{ padding: "1rem" }}>
              <p className="smallcaps" style={{ margin: 0, opacity: 0.7 }}>Headcount</p>
              <p style={{ fontSize: 28, margin: "0.25rem 0" }}>{data.headcount}</p>
              <p style={{ margin: 0, opacity: 0.6 }}>{remainingSpots} spots left</p>
            </div>
            <div className="menu" style={{ padding: "1rem" }}>
              <p className="smallcaps" style={{ margin: 0, opacity: 0.7 }}>Plus Ones</p>
              <p style={{ fontSize: 28, margin: "0.25rem 0" }}>{data.plusOneCount}</p>
            </div>
          </section>

          <section className="menu" style={{ marginTop: 24, padding: "1.25rem" }}>
            <h2 className="smallcaps" style={{ marginTop: 0 }}>Guests</h2>
            <div style={{ display: "grid", gap: 24, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
              <div>
                <h3 style={{ marginTop: 0, marginBottom: 8, fontSize: 16 }}>With Plus Ones</h3>
                <ul style={{ margin: 0, paddingLeft: 16 }}>
                  {guestsWithPlusOne.length === 0 ? <li style={{ opacity: 0.6 }}>None</li> : null}
                  {guestsWithPlusOne.map((g) => (
                    <li key={g.id || g.name}>
                      <strong>{g.name}</strong>
                      {g.dietary ? <span style={{ opacity: 0.7 }}> · {g.dietary}</span> : null}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ marginTop: 0, marginBottom: 8, fontSize: 16 }}>Solo Guests</h3>
                <ul style={{ margin: 0, paddingLeft: 16 }}>
                  {guestsSolo.length === 0 ? <li style={{ opacity: 0.6 }}>None</li> : null}
                  {guestsSolo.map((g) => (
                    <li key={g.id || g.name}>
                      <strong>{g.name}</strong>
                      {g.dietary ? <span style={{ opacity: 0.7 }}> · {g.dietary}</span> : null}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="menu" style={{ marginTop: 24, padding: "1.25rem" }}>
            <h2 className="smallcaps" style={{ marginTop: 0 }}>Dietary Notes</h2>
            <ul style={{ margin: 0, paddingLeft: 16, columns: 2, columnGap: "2rem" }}>
              {Object.entries(data.dietaryCounts).map(([label, count]) => (
                <li key={label}>
                  <strong>{label}</strong>: {count}
                </li>
              ))}
            </ul>
          </section>

          <section className="menu" style={{ marginTop: 24, padding: "1.25rem" }}>
            <h2 className="smallcaps" style={{ marginTop: 0 }}>Activity</h2>
            {data.history.length === 0 ? (
              <p style={{ margin: 0, opacity: 0.7 }}>No edits recorded yet.</p>
            ) : (
              <ul style={{ margin: 0, paddingLeft: 16, display: "grid", gap: 8 }}>
                {data.history.map((h, idx) => (
                  <li key={idx}>
                    <strong>{h.guestName}</strong> updated <em>{h.field}</em>{" "}
                    {h.ts ? (
                      <span style={{ opacity: 0.7 }}>
                        on {new Date(h.ts).toLocaleString()}
                      </span>
                    ) : null}
                    <div style={{ opacity: 0.75 }}>
                      {String(h.from ?? "—")} → {String(h.to ?? "—")}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </>
      ) : null}
    </main>
  );
}
