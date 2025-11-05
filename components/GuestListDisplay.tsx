"use client";

import { useEffect, useMemo, useState } from "react";

export type Guest = {
  id?: string;
  name: string;
  plusOne?: boolean;
  dietary?: string;
  history?: { ts: number; field: "name"|"dietary"|"plusOne"; from: any; to: any }[];
};

type Props = {
  slug: string;
  limit: number;
  seedGuests?: Guest[];
  showJoinButton?: boolean;
  onJoinClick?: () => void;
  heading?: string;
};

function loadGuests(slug: string, seed: Guest[] = []): Guest[] {
  if (typeof window === "undefined") return seed;
  try {
    const raw = localStorage.getItem(`guestlist:${slug}`);
    if (!raw) return seed;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed as Guest[];
    return seed;
  } catch {
    return seed;
  }
}

export default function GuestListDisplay({ slug, limit, seedGuests = [], showJoinButton, onJoinClick, heading = "Guest List" }: Props) {
  const [guests, setGuests] = useState<Guest[]>(seedGuests);

  useEffect(() => {
    setGuests(loadGuests(slug, seedGuests));
  }, [slug]);

  const usedSpots = useMemo(() => guests.reduce((acc, g) => acc + 1 + (g.plusOne ? 1 : 0), 0), [guests]);
  const remaining = Math.max(0, limit - usedSpots);

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
