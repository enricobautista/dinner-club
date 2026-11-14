"use client";

import { useParams } from "next/navigation";
import DinnerMenu from "@/components/DinnerMenu";
import GuestListDisplay from "@/components/GuestListDisplay";
import GuestListModal from "@/components/GuestListModal";
import { getGuestLimit, getMenu, getSortedMenus, parseMenuDate } from "@/data/menus";
import { useState } from "react";

export default function MenuPage() {
  const params = useParams<{ slug?: string | string[] }>();
  const slug = Array.isArray(params?.slug) ? params?.slug?.[0] : params?.slug || "";
  const menu = getMenu(slug);
  const [showList, setShowList] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
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
  const isPast = (() => {
    const today = new Date(); today.setHours(0,0,0,0);
    const d = parseMenuDate(menu.dateISO); d.setHours(0,0,0,0);
    return d.getTime() < today.getTime();
  })();

  const limit = getGuestLimit(menu);

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
          {!isPast ? <button className="guest-btn primary" onClick={() => setModalOpen(true)}>Join the guest list</button> : null}
          <button className="guest-btn ghost" onClick={() => setShowList(s => !s)} aria-expanded={showList} aria-controls="guest-list">
            {showList ? "Hide guest list" : "Guest list"}
          </button>
          {!isPast ? <button className="guest-btn ghost" onClick={() => setModalOpen(true)}>Edit guest list</button> : null}
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
      <GuestListModal slug={menu.slug} limit={limit} seedGuests={menu.guests || []}
        open={modalOpen} onClose={() => setModalOpen(false)} cost={menu.cost}
        potluck={menu.potluck} courses={menu.courses} />
    </>
  );
}
