import type { CustomDish, Guest, GuestEdit, Menu } from "../data/menus";

import { DISH_COURSES, normalizedDishName } from "./potluck.ts";

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
    const dishes = body.dishes === undefined ? existing?.dishes || [] : body.dishes;
    if (!Array.isArray(dishes) || dishes.some(d => typeof d !== "string")) {
      throw new GuestListError("Choose dishes from the list or add your own dish.");
    }
    const customInput = body.customDishes === undefined ? existing?.customDishes || [] : body.customDishes;
    if (!Array.isArray(customInput) || customInput.length > 20) throw new GuestListError("Please check your custom dishes.");
    const customDishes: CustomDish[] = customInput.map(dish => {
      if (!dish || typeof dish !== "object" || typeof dish.name !== "string" || typeof dish.description !== "string" || typeof dish.course !== "string") {
        throw new GuestListError("Enter a name, description, and course for each custom dish.");
      }
      const d = { name: dish.name.trim(), description: dish.description.trim(), course: dish.course.trim() };
      if (!d.name || d.name.length > 150 || !d.description || d.description.length > 1000 || !DISH_COURSES.includes(d.course as typeof DISH_COURSES[number])) {
        throw new GuestListError("Enter a dish name (up to 150 characters), description (up to 1,000 characters), and course.");
      }
      return d;
    });
    if (!dishes.length && !customDishes.length) throw new GuestListError("Choose at least one dish from the list or add your own dish to sign up.");
    const available = new Set(menu.courses.flatMap(c => c.items.map(item => item.name)));
    const selected = [...new Set(dishes as string[])];
    if (selected.some(d => !available.has(d))) throw new GuestListError("Choose dishes from this menu.");
    const claimed = new Set(current.filter(g => g !== existing).flatMap(g => g.dishes || []));
    const conflict = selected.find(d => claimed.has(d));
    if (conflict) throw new GuestListError(`${conflict} has already been selected. Please choose another dish.`, 409);
    const menuNames = new Set([...available].map(normalizedDishName));
    const otherCustomNames = new Set(current.filter(g => g !== existing).flatMap(g => g.customDishes || []).map(d => normalizedDishName(d.name)));
    const ownNames = new Set<string>();
    for (const dish of customDishes) {
      const key = normalizedDishName(dish.name);
      if (menuNames.has(key)) throw new GuestListError(`${dish.name} is already on the menu. Please select it from the checklist.`);
      if (otherCustomNames.has(key)) throw new GuestListError(`${dish.name} has already been added by another guest. Please choose a different dish.`, 409);
      if (ownNames.has(key)) throw new GuestListError("Each custom dish needs a different name.");
      ownNames.add(key);
    }
    next.dishes = selected;
    next.customDishes = customDishes;
  }
  const history = [...(existing?.history || [])];
  if (existing) {
    for (const field of ["name", "plusOne", "dietary", "dishes", "customDishes"] as const) {
      const from = existing[field] ?? ((field === "dishes" || field === "customDishes") ? [] : field === "plusOne" ? false : "");
      const to = next[field] ?? ((field === "dishes" || field === "customDishes") ? [] : field === "plusOne" ? false : "");
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


export type GuestStore = {
  read: () => Promise<{ guests: Guest[]; etag?: string }>;
  write: (guests: Guest[], etag?: string) => Promise<boolean>;
};

export async function saveGuestList(store: GuestStore, menu: Menu, limit: number, body: Record<string, unknown>, canDelete: boolean) {
  for (let attempt = 0; attempt < 6; attempt++) {
    const { guests, etag } = await store.read();
    const updated = updateGuestList(guests, menu, limit, body, canDelete);
    if (await store.write(updated, etag)) return updated;
    // Only a rejected conditional write is retried; never repeat an uncertain successful write.
    if (attempt < 5) await new Promise(resolve => setTimeout(resolve, 25 * 2 ** attempt + Math.random() * 25));
  }
  throw new GuestListError("Your signup hasn't been saved yet. Your details are still here; please try saving again in a moment.", 503);
}
