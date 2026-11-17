"use client";

import { useEffect, useState } from "react";
import Flourish from "./Flourish";
import Link from "next/link";
import { parseMenuDate } from "@/data/menus";
import type { Guest } from "@/data/menus";
import { hideUnclaimedDishes, potluckCourses } from "@/lib/potluck";
const EMPTY_GUESTS: Guest[] = [];

type Item = { name: string; recipeSlug?: string; blurb?: string };
type Course = { heading: string; items: Item[] };
export type DinnerMenuProps = {
  location: string;
  dateISO: string;
  time?: string;
  hosts: string[];
  courses: Course[];
  note?: string;
  potluck?: boolean;
  slug?: string;
  seedGuests?: Guest[];
};

const COURSE_HEADING_RANK: Record<string, number> = [
  ["aperitivo", "aperitivi", "drinks"],
  ["antipasto", "antipasti", "appetizer"],
  ["primo", "primi", "first course"],
  ["contorno", "contorni", "side dish"],
  ["secondo", "secondi", "main course"],
  ["dolce", "dolci", "dessert"],
].reduce<Record<string, number>>((acc, group, index) => {
  group.forEach(label => {
    acc[label] = index + 1;
  });
  return acc;
}, {});

export default function DinnerMenu({ location, dateISO, time, hosts, courses, note, potluck = false, slug, seedGuests = EMPTY_GUESTS }: DinnerMenuProps) {
  const [guests, setGuests] = useState(seedGuests);
  const [now, setNow] = useState<Date | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);
  useEffect(() => {
    if (!potluck || !slug) return;
    let active = true;
    async function refresh() {
      try {
        const res = await fetch(`/api/guests/${encodeURIComponent(slug!)}`, { cache: "no-store" });
        if (!res.ok) throw new Error("Guest list unavailable");
        const data = await res.json();
        if (active) { setGuests(data.guests); setLoaded(true); setLoadError(false); }
      } catch { if (active) setLoadError(true); }
      if (active) setNow(new Date());
    }
    refresh();
    const onUpdate = (event: Event) => { if ((event as CustomEvent<{ slug: string }>).detail?.slug === slug) refresh(); };
    window.addEventListener("guestlist:updated", onUpdate);
    window.addEventListener("focus", refresh);
    const interval = window.setInterval(refresh, 30000);
    return () => { active = false; clearInterval(interval); window.removeEventListener("guestlist:updated", onUpdate); window.removeEventListener("focus", refresh); };
  }, [potluck, slug]);
  const claimedOnly = potluck && now !== null && hideUnclaimedDishes(dateISO, now);
  const displayCourses = potluck ? potluckCourses(courses, guests, claimedOnly) : courses;
  const dateObj = parseMenuDate(dateISO);
  const date = dateObj.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
  const timeFromISO = /T\d{2}:?\d{2}/.test(dateISO) ? dateObj.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" }) : undefined;
  const timeText = time && time.trim() ? time : timeFromISO;
  const pendingMenu = potluck && now === null;
  const visibleCourses = (pendingMenu || (claimedOnly && !loaded && !seedGuests.length) ? [] : displayCourses || [])
    .filter(c => Array.isArray(c.items) && c.items.length > 0)
    .slice()
    .sort((a, b) => {
      const rank = (h: string) => {
        const key = String(h || "").trim().toLowerCase();
        return COURSE_HEADING_RANK[key] ?? 99;
      };
      return rank(a.heading) - rank(b.heading);
    });

  return (
    <article aria-label="Dinner menu" className="menu centered">
      <p className="smallcaps meta">
        {location} <time dateTime={dateISO}>{date}</time>{timeText ? <> <time>{timeText}</time></> : null}
      </p>
      <div style={{ marginTop: 8 }}>
        <Flourish />
      </div>

      {claimedOnly ? <p className="dish-help" style={{ margin: "12px 0" }}>Showing dishes guests are bringing. All dish options are still available on the signup sheet.</p> : null}
      {pendingMenu || (claimedOnly && !loaded && !seedGuests.length) ? <p role="status">{loadError ? "The potluck menu is temporarily unavailable. Please check again shortly." : "Loading the potluck menu…"}</p> :
        claimedOnly && !visibleCourses.length ? <p>No dishes have been claimed yet. Sign up to add yours to the menu.</p> : null}

      {visibleCourses.map((c, i) => (
        <section key={c.heading} className="course" aria-labelledby={c.heading}>
          <h2 className="smallcaps">{c.heading}</h2>
          <ul>
            {c.items.map(item => (
              <li key={item.name}>
                {item.recipeSlug ? (
                  <Link href={`/recipes/${item.recipeSlug}`} style={{ color:"inherit" }}>
                    {item.name}
                  </Link>
                ) : item.name}
                {item.blurb ? <span style={{ opacity:.8 }}> - {item.blurb}</span> : null}
              </li>
            ))}
          </ul>
          {i < visibleCourses.length - 1 && <div className="hair" aria-hidden />}
        </section>
      ))}
      <div style={{ marginTop: 10 }}>
        <Flourish />
      </div>

      <p className="smallcaps" style={{ opacity:.9 }}>
        Hosts: {hosts.join(" & ")}{note ? ` • Notes: ${note}` : ""}
      </p>
    </article>
  );
}
