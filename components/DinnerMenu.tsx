import Flourish from "./Flourish";
import Link from "next/link";

type Item = { name: string; recipeSlug?: string; blurb?: string };
type Course = { heading: string; items: Item[] };
export type DinnerMenuProps = {
  location: string;
  dateISO: string;
  time?: string;
  hosts: string[];
  courses: Course[];
  note?: string;
};

export default function DinnerMenu({ location, dateISO, time, hosts, courses, note }: DinnerMenuProps) {
  const dateObj = new Date(dateISO);
  const date = dateObj.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
  const timeFromISO = /T\d{2}:?\d{2}/.test(dateISO) ? dateObj.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" }) : undefined;
  const timeText = time && time.trim() ? time : timeFromISO;
  const visibleCourses = (courses || []).filter(c => Array.isArray(c.items) && c.items.length > 0);

  return (
    <article aria-label="Dinner menu" className="menu centered">
      <p className="smallcaps meta">
        {location} <time dateTime={dateISO}>{date}</time>{timeText ? <> <time>{timeText}</time></> : null}
      </p>
      <div style={{ marginTop: 8 }}>
        <Flourish />
      </div>

      {visibleCourses.map((c, i) => (
        <section key={c.heading} className="course" aria-labelledby={c.heading}>
          <h2 className="smallcaps">{c.heading}</h2>
          <ul>
            {c.items.map(item => (
              <li key={item.name}>
                {item.recipeSlug ? (
                  <Link href={`/recipes/${item.recipeSlug}`} style={{ textDecoration:"none", color:"inherit" }}>
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
