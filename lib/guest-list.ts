import type { Guest, GuestEdit, Menu } from "../data/menus";

export class GuestListError extends Error {
  status: number;
  constructor(message: string, status = 400) { super(message); this.status = status; }
}

export function updateGuestList(
  current: Guest[], menu: Menu, limit: number, body: Record<string, unknown>, canDelete: boolean,
): Guest[] {
  if (body.action === "delete" || body.action === "remove") {
    if (body.action === "delete" && !canDelete) throw new GuestListError("Unauthorized", 401);
    // Public removal uses an exact signup ID; the admin tool retains its name fallback.
    if (body.action === "remove" && (typeof body.id !== "string" || !body.id.trim())) {
      throw new GuestListError("Guest id required");
    }
    const index = current.findIndex(g => body.id ? g.id === body.id :
      typeof body.name === "string" && g.name.toLowerCase() === body.name.trim().toLowerCase());
    if (index < 0) throw new GuestListError("Guest not found", 404);
    return current.filter((_, i) => i !== index);
  }
  if (body.action !== "add" && body.action !== "edit") throw new GuestListError("Unsupported action");
  const existing = body.action === "edit" ? current.find(g => g.id === body.id) : undefined;
  if (body.action === "edit" && !existing) throw new GuestListError("Guest not found", 404);
  const name = typeof body.name === "string" ? body.name.trim() : existing?.name || "";
  if (!name) throw new GuestListError("Name required");
  const next: Guest = {
    ...existing,
    id: existing?.id || crypto.randomUUID(),
    name,
    plusOne: typeof body.plusOne === "boolean" ? body.plusOne : !!existing?.plusOne,
    dietary: typeof body.dietary === "string" ? body.dietary.trim() : existing?.dietary,
  };
  if (menu.potluck) {
    const dishes = body.dishes === undefined ? existing?.dishes : body.dishes;
    if (!Array.isArray(dishes) || !dishes.length || dishes.some(d => typeof d !== "string")) {
      throw new GuestListError("Select at least one dish to sign up.");
    }
    const available = new Set(menu.courses.flatMap(c => c.items.map(item => item.name)));
    const selected = [...new Set(dishes as string[])];
    if (selected.some(d => !available.has(d))) throw new GuestListError("Choose dishes from this menu.");
    const claimed = new Set(current.filter(g => g !== existing).flatMap(g => g.dishes || []));
    const conflict = selected.find(d => claimed.has(d));
    if (conflict) throw new GuestListError(`${conflict} has already been selected. Please choose another dish.`, 409);
    next.dishes = selected;
  }
  const history = [...(existing?.history || [])];
  if (existing) {
    for (const field of ["name", "plusOne", "dietary", "dishes"] as const) {
      const from = existing[field] ?? (field === "dishes" ? [] : field === "plusOne" ? false : "");
      const to = next[field] ?? (field === "dishes" ? [] : field === "plusOne" ? false : "");
      if (JSON.stringify(from) !== JSON.stringify(to)) {
        history.push({ ts: Date.now(), field, from, to } satisfies GuestEdit);
      }
    }
  }
  next.history = history;
  const updated = existing ? current.map(g => g === existing ? next : g) : [...current, next];
  if (updated.reduce((sum, g) => sum + 1 + (g.plusOne ? 1 : 0), 0) > limit) {
    throw new GuestListError("Guest list full", 409);
  }
  return updated;
}
