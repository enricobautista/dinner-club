"use client";

import DinnerMenu from "../components/DinnerMenu";
import GuestListDisplay from "@/components/GuestListDisplay";
import GuestListModal from "@/components/GuestListModal";
import { getGuestLimit, getSortedMenus, parseMenuDate } from "@/data/menus";
import { useState } from "react";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [showList, setShowList] = useState(false);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const upcoming = getSortedMenus().filter(m => {
    const d = parseMenuDate(m.dateISO);
    d.setHours(0, 0, 0, 0);
    return d.getTime() >= today.getTime();
  });
  const next = upcoming
    .slice()
    .sort((a, b) => parseMenuDate(a.dateISO).getTime() - parseMenuDate(b.dateISO).getTime())[0];
  return (
    <div>
      {next ? (
        <>
          <DinnerMenu
            location={next.location}
            dateISO={next.dateISO}
            time={next.time}
            hosts={next.hosts}
            note={next.note}
            courses={next.courses}
          />
          <div className="menu" style={{ marginTop: 12 }}>
            <div style={{ display:"flex", gap:12, alignItems:"center", justifyContent:"center", flexWrap:"wrap" }}>
              <button className="guest-btn primary" onClick={() => setModalOpen(true)}>
                Join the guest list
              </button>
              <button className="guest-btn ghost" onClick={() => setShowList(s => !s)} aria-expanded={showList} aria-controls="guest-list">
                {showList ? "Hide guest list" : "Guest list"}
              </button>
            </div>
            {showList && (
              <div id="guest-list" style={{ marginTop: 10 }}>
                <div className="guest-list-box">
                  <GuestListDisplay
                    slug={next.slug}
                    limit={getGuestLimit(next)}
                    seedGuests={next.guests || []}
                    heading="Guest List"
                  />
                </div>
              </div>
            )}
          </div>
          <GuestListModal
            slug={next.slug}
            limit={getGuestLimit(next)}
            seedGuests={next.guests || []}
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            cost={next.cost}
          />
        </>
      ) : (
        <p className="centered" style={{ fontSize: 20, fontWeight: 600 }}>Welcome</p>
      )}
    </div>
  );
}
