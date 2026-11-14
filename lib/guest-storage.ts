import { get } from "@vercel/blob";
import type { Guest, Menu } from "@/data/menus";

export const guestKey = (slug: string) => `guestlists/${slug}.json`;
const withIds = (guests: Guest[]) => guests.map((g, index) => ({ ...g, id: g.id || `seed-${index}` }));

export async function readGuestList(menu: Menu, token?: string) {
  if (!token) return { guests: withIds(menu.guests || []), etag: undefined };
  const blob = await get(guestKey(menu.slug), { access: "public", useCache: false, token });
  if (!blob) return { guests: withIds(menu.guests || []), etag: undefined };
  if (blob.statusCode !== 200) throw new Error("Unable to read guest list.");
  const guests: unknown = await new Response(blob.stream).json();
  if (!Array.isArray(guests)) throw new Error("Invalid guest list data.");
  return { guests: withIds(guests as Guest[]), etag: blob.blob.etag };
}
