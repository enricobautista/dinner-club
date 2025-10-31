import Link from "next/link";
import { getSortedMenus } from "@/data/menus";

export default function MenusIndex() {
  const menus = getSortedMenus();
  return (
    <section className="menu centered" aria-label="Past menus">
      <h2 className="smallcaps" style={{ marginBottom: ".25rem" }}>Menus</h2>
      <p style={{ opacity:.85, marginBottom: ".5rem" }}>Browse past dinners</p>
      <div className="hair" aria-hidden />
      <ul>
        {menus.map(m => (
          <li key={m.slug}>
            <Link href={`/menus/${m.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
              {new Date(m.dateISO).toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" })}
            </Link>
            <span style={{ opacity:.8 }}> – {m.location} – Hosts: {m.hosts.join(" & ")}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
