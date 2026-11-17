import { put, BlobPreconditionFailedError } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";
import { getGuestLimit, getMenu } from "@/data/menus";
import { GuestListError, saveGuestList } from "@/lib/guest-list";
import { guestKey, readGuestList } from "@/lib/guest-storage";

const headers = { "Cache-Control": "no-store, no-cache, must-revalidate" };
type Context = { params: Promise<{ slug: string }> };

export async function GET(_: NextRequest, ctx: Context) {
  const { slug } = await ctx.params;
  const menu = getMenu(slug);
  if (!menu) return NextResponse.json({ error: "Menu not found" }, { status: 404 });
  try {
    const { guests } = await readGuestList(menu, process.env.BLOB_READ_WRITE_TOKEN);
    return NextResponse.json({ guests, limit: getGuestLimit(menu) }, { headers });
  } catch (error) {
    console.error("Guest list read failed", { slug: menu.slug, message: error instanceof Error ? error.message : "Unknown storage error" });
    return NextResponse.json({ error: "Failed to load guest list" }, { status: 500, headers });
  }
}

export async function POST(req: NextRequest, ctx: Context) {
  const { slug } = await ctx.params;
  const menu = getMenu(slug);
  if (!menu) return NextResponse.json({ error: "Menu not found" }, { status: 404 });
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) return NextResponse.json({ error: "Guest list storage is unavailable." }, { status: 503 });
  try {
    const body = await req.json();
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      throw new GuestListError("Invalid request");
    }
    const adminToken = req.headers.get("x-admin-token") || req.headers.get("x-api-key");
    const canDelete = !!process.env.ADMIN_TOKEN && adminToken === process.env.ADMIN_TOKEN;
    const guests = await saveGuestList({
      read: () => readGuestList(menu, token),
      write: async (updated, etag) => {
        try {
          await put(guestKey(menu.slug), JSON.stringify(updated), {
            access: "public", contentType: "application/json", addRandomSuffix: false,
            allowOverwrite: !!etag, ...(etag ? { ifMatch: etag } : {}),
            cacheControlMaxAge: 60, token,
          });
          return true;
        } catch (error) {
          const creationConflict = !etag && error instanceof Error && /already exists/i.test(error.message);
          if (error instanceof BlobPreconditionFailedError || creationConflict) return false;
          throw error;
        }
      },
    }, menu, getGuestLimit(menu), body, canDelete);
    return NextResponse.json({ ok: true, guests }, { headers });
  } catch (error) {
    if (error instanceof GuestListError) {
      return NextResponse.json({ error: error.message }, { status: error.status, headers });
    }
    console.error("Guest list update failed", error);
    return NextResponse.json({ error: "Could not save the guest list. Please try again." }, { status: 500, headers });
  }
}
export const dynamic = "force-dynamic";
