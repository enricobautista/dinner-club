"use client";
import Flourish from "./Flourish";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getSortedMenus } from "@/data/menus";

export default function Footer() {
  const pathname = usePathname();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const hasUpcoming = getSortedMenus().some(m => {
    const d = new Date(m.dateISO);
    d.setHours(0, 0, 0, 0);
    return d.getTime() >= today.getTime();
  });
  const isHome = pathname === "/";
  const isMenuContext = pathname?.startsWith("/menus") || (isHome && hasUpcoming);
  const showFooterFlourish = !isMenuContext && !(isHome && !hasUpcoming); // hide when menu context or home+Welcome
  return (
    <footer className="centered" role="contentinfo" style={{ marginTop: "1.25rem" }}>
      {showFooterFlourish && <Flourish />}
      <p className="smallcaps" style={{ fontSize: 14, opacity: .85, marginTop: 10 }}>
        {new Date().getFullYear()} Break Bread Dinner Club
      </p>
      <nav className="smallcaps" style={{ fontSize: 13, opacity:.8, marginTop: 8, display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
        <Link href="/menus" style={{ textDecoration:"none", color:"inherit" }}>All Menus</Link>
        <span aria-hidden>•</span>
        <Link href="/recipes" style={{ textDecoration:"none", color:"inherit" }}>Recipe Repository</Link>
      </nav>
    </footer>
  );
}
