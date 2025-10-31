"use client";

import { useParams } from "next/navigation";
import DinnerMenu from "@/components/DinnerMenu";
import { getMenu, getSortedMenus } from "@/data/menus";

export default function MenuPage() {
  const params = useParams<{ slug?: string | string[] }>();
  const slug = Array.isArray(params?.slug) ? params?.slug?.[0] : params?.slug || "";
  const menu = getMenu(slug);
  if (!menu) {
    const slugs = getSortedMenus().map(m => m.slug).join(", ");
    return (
      <section className="menu centered">
        <p>Menu not found.</p>
        <p style={{ opacity:.8, marginTop: 8 }}>Requested: <code>{String(slug)}</code></p>
        <p style={{ opacity:.8 }}>Available: <code>{slugs}</code></p>
      </section>
    );
  }
  return (
    <DinnerMenu
      location={menu.location}
      dateISO={menu.dateISO}
      time={menu.time}
      hosts={menu.hosts}
      note={menu.note}
      courses={menu.courses}
    />
  );
}
