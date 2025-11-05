import HostDashboard from "@/components/HostDashboard";
import { getSortedMenus } from "@/data/menus";

export default function AdminPage() {
  const menus = getSortedMenus();
  return <HostDashboard menus={menus} />;
}
