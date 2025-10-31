import DinnerMenu from "../components/DinnerMenu";
import { getSortedMenus } from "@/data/menus";

export default function Home() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const upcoming = getSortedMenus().filter(m => {
    const d = new Date(m.dateISO);
    d.setHours(0, 0, 0, 0);
    return d.getTime() >= today.getTime();
  });
  const next = upcoming[0];
  return (
    <div>
      {next ? (
        <DinnerMenu
          location={next.location}
          dateISO={next.dateISO}
          time={next.time}
          hosts={next.hosts}
          note={next.note}
          courses={next.courses}
        />
      ) : (
        <p className="centered" style={{ fontSize: 20, fontWeight: 600 }}>Welcome</p>
      )}
    </div>
  );
}
