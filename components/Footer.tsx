"use client";
import Flourish from "./Flourish";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getSortedMenus, parseMenuDate } from "@/data/menus";

export default function Footer() {
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
  const showFooterFlourish = !isMenuContext && !(isHome && !hasUpcoming); // hide when menu context or home+Welcome
  return (
    <footer className="centered" role="contentinfo" style={{ marginTop: "1.25rem" }}>
      {showFooterFlourish && <Flourish />}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          justifyContent: "center",
          marginTop: 12,
          flexWrap: "wrap",
        }}
      >
        <Image
          src="/logo.png"
          alt="Table Rounds Dinner Club logo"
          width={64}
          height={64}
          style={{ height: 40, width: "auto" }}
          priority={false}
        />
        <div style={{ textAlign: "left" }}>
          <p className="smallcaps" style={{ fontSize: 14, opacity: .85, margin: 0 }}>
            {new Date().getFullYear()} Table Rounds Dinner Club
          </p>
          <nav
            className="smallcaps"
            style={{
              fontSize: 13,
              opacity: .8,
              marginTop: 4,
              display: "flex",
              gap: 12,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/menus" style={{ color: "inherit" }}>
              All Menus
            </Link>
            <span aria-hidden>•</span>
            <Link href="/recipes" style={{ color: "inherit" }}>
              Recipe Repository
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
