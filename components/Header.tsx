"use client";
import Flourish from "./Flourish";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getSortedMenus, parseMenuDate } from "@/data/menus";

export default function Header() {
  const pathname = usePathname();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const hasUpcoming = getSortedMenus().some(m => {
    const d = parseMenuDate(m.dateISO);
    d.setHours(0, 0, 0, 0);
    return d.getTime() >= today.getTime();
  });
  const isHome = pathname === "/";
  const isMenuContext = pathname?.startsWith("/menus") || (isHome && hasUpcoming);
  const showHeaderFlourish = !isMenuContext && !(isHome && !hasUpcoming); // hide when menu context or home+Welcome

  return (
    <header className="centered">
      <h1 className="smallcaps" style={{ fontWeight: 600 }}>
        <Link href="/" className="link-no-underline" style={{ color: "inherit" }}>Break Bread Dinner Club</Link>
      </h1>
      {isHome && hasUpcoming ? (
        <p className="smallcaps" style={{ margin: ".35rem 0 0", opacity: .9 }}>Upcoming Dinner Menu</p>
      ) : null}
      {showHeaderFlourish && (
        <div style={{ marginTop: isHome && hasUpcoming ? 6 : 8 }}>
          <Flourish />
        </div>
      )}
    </header>
  );
}
