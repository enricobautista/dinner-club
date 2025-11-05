import { list } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

type Guest = { id?: string; name: string; plusOne?: boolean; dietary?: string; history?: any[] };

const keyFor = (slug: string) => `guestlists/${slug}.json`;

function toTsGuestArray(guests: Guest[]) {
  const lines: string[] = [];
  lines.push("guests: [");
  for (const g of guests) {
    const parts: string[] = [
      `name: ${JSON.stringify(g.name)}`,
    ];
    if (g.plusOne) parts.push("plusOne: true");
    if (g.dietary) parts.push(`dietary: ${JSON.stringify(g.dietary)}`);
    lines.push("  { " + parts.join(", ") + " },");
  }
  lines.push("]");
  return lines.join("\n");
}

export async function GET(req: NextRequest, ctx: { params: Promise<{ slug: string }> }) {
  const { slug } = await ctx.params;
  const s = String(slug || "").trim();

  const token = req.headers.get("x-admin-token") || req.headers.get("x-api-key");
  const expected = process.env.ADMIN_TOKEN;
  if (!expected || token !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let guests: Guest[] = [];
  const items = await list({ prefix: keyFor(s) });
  if (items.blobs?.length) {
    const sorted = items.blobs
      .slice()
      .sort((a: any, b: any) => new Date(a.uploadedAt).getTime() - new Date(b.uploadedAt).getTime());
    const res = await fetch(sorted[sorted.length - 1].url, { cache: "no-store" });
    if (res.ok) {
      guests = (await res.json().catch(() => [])) || [];
    }
  }
  if (guests.length === 0) {
    return NextResponse.json({ slug: s, count: 0, guests: [], tsArray: "guests: []" }, { status: 200 });
  }
  const arraySnippet = toTsGuestArray(guests);
  return NextResponse.json({
    slug: s,
    count: guests.length,
    guests,
    tsArray: arraySnippet,
    instructions: "In data/menus.ts, locate the menu with this slug and replace its guests: [] with the tsArray value.",
  }, { status: 200 });
}
export const dynamic = "force-dynamic";
