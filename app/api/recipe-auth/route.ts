import crypto from "crypto";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const COOKIE_NAME = "recipe-auth";

const hash = (input: string) =>
  crypto.createHash("sha256").update(String(input)).digest("hex");

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const token = process.env.RECIPE_TOKEN;
  if (!token) return NextResponse.json({ authorized: false });
  const cookie = cookies().get(COOKIE_NAME)?.value;
  const authorized = cookie === hash(token);
  return NextResponse.json({ authorized });
}

export async function POST(request: Request) {
  const token = process.env.RECIPE_TOKEN;
  if (!token) {
    return NextResponse.json({ authorized: false, error: "Recipe password not configured." }, { status: 400 });
  }
  let body: { password?: string } | null = null;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ authorized: false, error: "Invalid request." }, { status: 400 });
  }
  const provided = String(body?.password || "").trim();
  if (!provided) {
    return NextResponse.json({ authorized: false, error: "Enter a password." }, { status: 400 });
  }
  if (hash(provided) !== hash(token)) {
    return NextResponse.json({ authorized: false, error: "Incorrect password." }, { status: 401 });
  }
  const res = NextResponse.json({ authorized: true });
  res.cookies.set({
    name: COOKIE_NAME,
    value: hash(token),
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });
  return res;
}
