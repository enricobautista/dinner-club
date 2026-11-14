"use client";

import { useEffect, useMemo, useState } from "react";
import type { Guest } from "@/data/menus";
export type { Guest } from "@/data/menus";
const EMPTY_GUESTS: Guest[] = [];

type Props = {
  slug: string;
  limit: number;
  seedGuests?: Guest[];
  showJoinButton?: boolean;
  onJoinClick?: () => void;
  heading?: string;
};

async function fetchGuests(slug: string, seed: Guest[] = []): Promise<Guest[]> {
  try {
    const res = await fetch(`/api/guests/${encodeURIComponent(slug)}`, { cache: "no-store" });
    if (!res.ok) return seed;
    const data = await res.json();
    return Array.isArray(data?.guests) ? (data.guests as Guest[]) : seed;
  } catch {
    return seed;
  }
}

export default function GuestListDisplay({ slug, limit, seedGuests = EMPTY_GUESTS, showJoinButton, onJoinClick, heading = "Guest List" }: Props) {
  const [guests, setGuests] = useState<Guest[]>(seedGuests);

  useEffect(() => {
    fetchGuests(slug, seedGuests).then(setGuests);
    const onUpdated = (e: Event) => {
      const anyE = e as CustomEvent<{ slug: string }>;
      if (anyE?.detail?.slug === slug) fetchGuests(slug, seedGuests).then(setGuests);
    };
    if (typeof window !== "undefined") window.addEventListener("guestlist:updated", onUpdated as EventListener);
    return () => {
      if (typeof window !== "undefined") window.removeEventListener("guestlist:updated", onUpdated as EventListener);
    };
  }, [slug, seedGuests]);

  const usedSpots = useMemo(() => guests.reduce((acc, g) => acc + 1 + (g.plusOne ? 1 : 0), 0), [guests]);

  const title = String(heading || "Guest List").toUpperCase();
  return (
    <section className="menu centered" aria-label="Guest list">
      <h2 className="smallcaps" style={{ marginBottom: ".25rem" }}>
        {title} <span className="guest-fraction">{usedSpots}/{limit}</span>
      </h2>
      <ul style={{ listStyle: "none", padding: 0, marginTop: 8, textAlign:"left" }}>
        {guests.length === 0 && <li style={{ opacity:.8 }}>No guests recorded.</li>}
        {guests.map((g, i) => (
          <li key={i} style={{ margin: ".25rem 0" }}>
            <span style={{ fontWeight: 600 }}>{g.name}</span>
            {g.plusOne ? <span style={{ opacity:.8 }}> +1</span> : null}
            {g.dietary ? <span style={{ opacity:.8 }}> — {g.dietary}</span> : null}
            {g.dishes?.length ? <p className="guest-dishes">Bringing: {g.dishes.join(", ")}</p> : null}
          </li>
        ))}
      </ul>
      {showJoinButton ? (
        <div style={{ marginTop: 8 }}>
          <button className="guest-btn primary" onClick={onJoinClick}>Join Guest List</button>
        </div>
      ) : null}
    </section>
  );
}
