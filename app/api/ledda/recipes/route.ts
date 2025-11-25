import { NextResponse } from "next/server";
import { recipes } from "@/data/ledda_recipes";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function tokensMatch(expected: string | undefined, provided?: string) {
  return Boolean(expected) && provided === expected;
}

export async function GET(req: Request) {
  const token = process.env.LEDDA_TOKEN;
  const provided = req.headers.get("x-ledda-token") || req.headers.get("x-api-key") || "";
  if (!tokensMatch(token, provided)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json({ recipes });
}

export async function POST(req: Request) {
  const token = process.env.LEDDA_TOKEN;
  let provided = req.headers.get("x-ledda-token") || req.headers.get("x-api-key") || "";
  if (!provided) {
    try {
      const body = await req.json();
      provided = String(body?.token || body?.password || "").trim();
    } catch {
      // ignore JSON parse errors; will fall through to unauthorized
    }
  }
  if (!tokensMatch(token, provided)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json({ recipes });
}
