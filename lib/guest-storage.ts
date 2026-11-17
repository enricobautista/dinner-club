import { BlobNotFoundError, get, head } from "@vercel/blob";
import type { Guest, Menu } from "@/data/menus";

export const guestKey = (slug: string) => `guestlists/${slug}.json`;
const withIds = (guests: Guest[]) => guests.map((g, index) => ({ ...g, id: g.id || `seed-${index}` }));
const comparableEtag = (etag: string) => etag.replace(/^W\//, "").replace(/^"|"$/g, "");

export async function readGuestList(menu: Menu, token?: string) {
  const seed = { guests: withIds(menu.guests || []), etag: undefined };
  if (!token) return seed;
  for (let attempt = 0; attempt < 3; attempt++) {
    let metadata;
    try { metadata = await head(guestKey(menu.slug), { token }); }
    catch (error) { if (error instanceof BlobNotFoundError) return seed; throw error; }
    if (!metadata.etag) throw new Error("Guest list storage did not return a version.");
    // Public get() ignores useCache:false. A versioned URL avoids stale CDN content;
    // conditional writes must use the storage API ETag, not the CDN's HTTP ETag.
    const url = new URL(metadata.url);
    url.searchParams.set("v", metadata.etag);
    const blob = await get(url.toString(), { access: "public", token });
    if (!blob || blob.statusCode !== 200) continue;
    if (comparableEtag(blob.blob.etag) !== comparableEtag(metadata.etag)) {
      await blob.stream.cancel();
      continue;
    }
    const guests: unknown = await new Response(blob.stream).json();
    if (!Array.isArray(guests)) throw new Error("Invalid guest list data.");
    return { guests: withIds(guests as Guest[]), etag: metadata.etag };
  }
  throw new Error("Unable to read a current version of the guest list.");
}
