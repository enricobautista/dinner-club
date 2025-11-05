import { list } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

type Guest = { id?: string; name: string; plusOne?: boolean; dietary?: string; history?: any[] };

const keyFor = (slug: string) => `guestlists/${slug}.json`;

function toTsGuestArray(guests: Guest[]) {
  const lines: string[] = [];
  lines.push("guests: [");
  for (const g of guests) {
    const parts: string[] = [`name: ${JSON.stringify(g.name)}`];
    if (g.plusOne) parts.push("plusOne: true");
    if (g.dietary) parts.push(`dietary: ${JSON.stringify(g.dietary)}`);
    lines.push("  { " + parts.join(", ") + " },");
  }
  lines.push("]");
  return lines.join("\n");
}

function toCsv(guests: Guest[]) {
  const header = ["Name", "Plus One", "Dietary Notes"];
  const rows = guests.map(g => [
    g.name,
    g.plusOne ? "Yes" : "No",
    g.dietary ? g.dietary : "",
  ]);
  const encode = (value: string) => {
    const needsQuotes = /[",\n]/.test(value);
    const escaped = value.replace(/"/g, '""');
    return needsQuotes ? `"${escaped}"` : escaped;
  };
  return [header, ...rows].map(cols => cols.map(c => encode(String(c))).join(",")).join("\n");
}

export async function GET(req: NextRequest, ctx: { params: Promise<{ slug: string }> }) {
  const { slug } = await ctx.params;
  const s = String(slug || "").trim();

  const token = req.headers.get("x-admin-token") || req.headers.get("x-api-key");
  const expected = process.env.ADMIN_TOKEN;
  if (!expected || token !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const blobToken = process.env.BLOB_READ_WRITE_TOKEN || process.env.BLOB_READ_TOKEN || undefined;

  let guests: Guest[] = [];
  const items = await list({ prefix: keyFor(s), token: blobToken });
  if (items.blobs?.length) {
    const sorted = items.blobs
      .slice()
      .sort((a: any, b: any) => new Date(a.uploadedAt).getTime() - new Date(b.uploadedAt).getTime());
    const res = await fetch(sorted[sorted.length - 1].url, { cache: "no-store" });
    if (res.ok) {
      guests = (await res.json().catch(() => [])) || [];
    }
  }

  const plusOneCount = guests.reduce((acc, g) => acc + (g.plusOne ? 1 : 0), 0);
  const headcount = guests.length + plusOneCount;
  const dietaryCounts = guests.reduce<Record<string, number>>((acc, g) => {
    const key = (g.dietary || "Unspecified").trim() || "Unspecified";
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
  const historyEntries = guests
    .flatMap((g) =>
      Array.isArray(g.history)
        ? g.history.map((h: any) => ({
            guestId: g.id,
            guestName: g.name,
            field: h.field,
            from: h.from,
            to: h.to,
            ts: h.ts,
          }))
        : [],
    )
    .sort((a, b) => Number(b.ts || 0) - Number(a.ts || 0));

  const format = req.nextUrl.searchParams.get("format");
  if (format === "csv") {
    const csv = toCsv(guests);
    return new NextResponse(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Cache-Control": "no-store",
        "Content-Disposition": `attachment; filename="guestlist-${s || "unknown"}.csv"`,
      },
    });
  }

  const arraySnippet = guests.length ? toTsGuestArray(guests) : "guests: []";
  return NextResponse.json({
    slug: s,
    count: guests.length,
    headcount,
    plusOneCount,
    dietaryCounts,
    guests,
    history: historyEntries,
    tsArray: arraySnippet,
    instructions: guests.length
      ? "In data/menus.ts, locate the menu with this slug and replace its guests: [] with the tsArray value."
      : "No guests yet—no export needed.",
  }, { status: 200, headers: { "Cache-Control": "no-store" } });
}
export const dynamic = "force-dynamic";
