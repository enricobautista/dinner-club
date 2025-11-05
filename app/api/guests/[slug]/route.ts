import { put, list } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";
import { getGuestLimit, getMenu } from "@/data/menus";

type GuestEdit = { ts: number; field: "name" | "dietary" | "plusOne"; from: any; to: any };
type Guest = { id: string; name: string; plusOne?: boolean; dietary?: string; history?: GuestEdit[] };

const keyFor = (slug: string) => `guestlists/${slug}.json`; // Blob path

function uuid() {
  // Prefer crypto.randomUUID when available
  // @ts-ignore
  if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

export async function GET(_: NextRequest, ctx: { params: Promise<{ slug: string }> }) {
  const { slug } = await ctx.params;
  const s = String(slug || "").trim();
  try {
    const menu = getMenu(s);
    const limit = getGuestLimit(menu || {});
    // Try to find a blob for this slug
    const items = await list({ prefix: keyFor(s) });
    let guests: Guest[] = (menu?.guests as Guest[] | undefined) || [];
    if (items.blobs?.length) {
      const sorted = items.blobs
        .slice()
        .sort((a: any, b: any) => new Date(a.uploadedAt).getTime() - new Date(b.uploadedAt).getTime());
      const url = sorted[sorted.length - 1].url;
      const res = await fetch(url, { cache: "no-store" });
      if (res.ok) {
        const data = await res.json().catch(() => null);
        if (Array.isArray(data)) guests = data as Guest[];
      }
    }
    return NextResponse.json({ guests, limit }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: "Failed to load guest list" }, { status: 500 });
  }
}

export async function POST(req: NextRequest, ctx: { params: Promise<{ slug: string }> }) {
  const { slug } = await ctx.params;
  const s = String(slug || "").trim();
  try {
    const menu = getMenu(s);
    const limit = getGuestLimit(menu || {});
    const key = keyFor(s);
    const body = await req.json().catch(() => ({}));
    const action = String(body?.action || "");
    // Load current from blob (or fallback to menu guests)
    let current: Guest[] = [];
    const items = await list({ prefix: key });
    if (items.blobs?.length) {
      const res = await fetch(items.blobs[0].url, { cache: "no-store" });
      current = (await res.json().catch(() => [])) || [];
    } else if (Array.isArray(menu?.guests)) {
      current = (menu!.guests as Guest[]) || [];
    }

    if (action === "add") {
      const name = String(body?.name || "").trim();
      const plusOne = !!body?.plusOne;
      const dietary = String(body?.dietary || "").trim() || undefined;
      if (!name) return NextResponse.json({ error: "Name required" }, { status: 400 });
      const used = current.reduce((acc, g) => acc + 1 + (g.plusOne ? 1 : 0), 0);
      const willUse = 1 + (plusOne ? 1 : 0);
      if (used + willUse > limit) return NextResponse.json({ error: "Guest list full" }, { status: 409 });
      const entry: Guest = { id: uuid(), name, plusOne, dietary, history: [] };
      const next = [...current, entry];
      await put(key, JSON.stringify(next), { access: "public", contentType: "application/json", addRandomSuffix: false });
      return NextResponse.json({ ok: true, guests: next }, { status: 200 });
    }

    if (action === "edit") {
      const id = String(body?.id || "").trim();
      if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });
      const name = typeof body?.name === "string" ? String(body.name) : undefined;
      const dietary = typeof body?.dietary === "string" ? String(body.dietary) : undefined;
      const plusOne = typeof body?.plusOne === "boolean" ? !!body.plusOne : undefined;

      let updated: Guest[] = current.slice();
      updated = updated.map((g) => {
        if (g.id !== id) return g;
        const history = Array.isArray(g.history) ? g.history.slice() : [];
        const now = Date.now();
        const next: Guest = { ...g };
        if (typeof name === "string" && name.trim() !== g.name) {
          history.push({ ts: now, field: "name", from: g.name, to: name.trim() });
          next.name = name.trim();
        }
        if (typeof plusOne === "boolean" && !!plusOne !== !!g.plusOne) {
          history.push({ ts: now, field: "plusOne", from: !!g.plusOne, to: !!plusOne });
          next.plusOne = !!plusOne;
        }
        if (typeof dietary === "string" && (g.dietary || "") !== (dietary.trim() || "")) {
          history.push({ ts: now, field: "dietary", from: g.dietary || "", to: dietary.trim() || "" });
          next.dietary = dietary.trim() || undefined;
        }
        next.history = history;
        return next;
      });
      // Optional: enforce capacity on edit when toggling plusOne
      const used = updated.reduce((acc, g) => acc + 1 + (g.plusOne ? 1 : 0), 0);
      if (used > limit) return NextResponse.json({ error: "Guest list full" }, { status: 409 });
      await put(key, JSON.stringify(updated), { access: "public", contentType: "application/json", addRandomSuffix: false });
      return NextResponse.json({ ok: true, guests: updated }, { status: 200 });
    }

    return NextResponse.json({ error: "Unsupported action" }, { status: 400 });
  } catch (e) {
    return NextResponse.json({ error: "Failed to update guest list" }, { status: 500 });
  }
}
