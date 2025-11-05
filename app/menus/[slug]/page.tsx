"use client";

import { useParams } from "next/navigation";
import DinnerMenu from "@/components/DinnerMenu";
import GuestListDisplay from "@/components/GuestListDisplay";
import { getGuestLimit, getMenu, getSortedMenus, parseMenuDate } from "@/data/menus";
import { useMemo, useState } from "react";

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
  const isPast = useMemo(() => {
    const today = new Date(); today.setHours(0,0,0,0);
    const d = parseMenuDate(menu.dateISO); d.setHours(0,0,0,0);
    return d.getTime() < today.getTime();
  }, [menu.dateISO]);

  const limit = getGuestLimit(menu);

  const [showList, setShowList] = useState(false);

  return (
    <>
      <DinnerMenu
        location={menu.location}
        dateISO={menu.dateISO}
        time={menu.time}
        hosts={menu.hosts}
        note={menu.note}
        courses={menu.courses}
      />
      <div className="menu" style={{ marginTop: 12 }}>
        <div style={{ display:"flex", gap:12, alignItems:"center", justifyContent:"center", flexWrap:"wrap" }}>
          <button className="guest-btn ghost" onClick={() => setShowList(s => !s)} aria-expanded={showList} aria-controls="guest-list">
            {showList ? "Hide guest list" : "Guest list"}
          </button>
        </div>
        {showList && (
          <div id="guest-list" style={{ marginTop: 10 }}>
            <div className="guest-list-box">
              <GuestListDisplay
                slug={menu.slug}
                limit={limit}
                seedGuests={menu.guests || []}
                heading={"Guest List"}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
