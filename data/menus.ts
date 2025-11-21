import type { Recipe } from "./recipes";

type Item = { name: string; recipeSlug?: string; blurb?: string };
export type Course = { heading: string; items: Item[] };
export type GuestEdit = { ts: number; field: "name"|"dietary"|"plusOne"; from: any; to: any };
export type Guest = {
  id?: string;
  name: string;
  plusOne?: boolean;
  dietary?: string;
  history?: GuestEdit[];
};

export type Menu = {
  slug: string;
  location: string;
  dateISO: string;
  time?: string;
  hosts: string[];
  note?: string;
  courses: Course[];
  guestLimit?: number; // optional per-menu override (default 12)
  guests?: Guest[];    // optional archived/seed guest list
  cost?: number;       // optional prezzo fisso in USD
};

export const menus: Menu[] = [
  {
    slug: "dc-dinner-2025-11-08",
    location: "2217 38th St NW, Washington, DC",
    dateISO: "2025-11-08",
    time: "7:00 PM",
    hosts: ["Enrico Bautista", "Yumin Gao", "Francis Arellano"],
    guests: [],
    cost: 18,
    courses: [
      {
        heading: "Aperitivi",
        items: [
          { name: "Negroni Sbagliato", recipeSlug: "negroni-sbagliato", blurb: "bittersweet, citrusy, and lightly effervescent" },
          { name: "Apricot Blossom", recipeSlug: "apricot-blossom", blurb: "gin, apricot, Lillet/Cocchi, orange blossom" },
        ]
      },
      {
        heading: "Antipasto",
        items: [
          { name: "Oi-Muchim (Korean Cucumber Salad)", recipeSlug: "oi-muchim", blurb: "crisp cucumbers with gochugaru, sesame, vinegar" },
        ]
      },
      {
        heading: "Primo",
        items: [
          { name: "Red Oil Wontons", recipeSlug: "red-oil-wontons", blurb: "Sichuan-style wontons with chili oil and pea shoots" },
        ]
      },
      {
        heading: "Contorno",
        items: [
          { name: "Roasted Butternut Squash", recipeSlug: "roasted-butternut-squash", blurb: "garlic & herb roasted squash" },
        ]
      },
      {
        heading: "Secondi",
        items: [
          { name: "Samgyeopsal", recipeSlug: "samgyeopsal", blurb: "Korean grilled pork belly with lettuce wraps." },
          { name: "Grilled Octopus", recipeSlug: "grilled-octopus", blurb: "Mediterranean-style with lemon, parsley, olive oil." },
        ]
      },
      {
        heading: "Dolce",
        items: [
          { name: "Cheesecake", blurb: "simple, classic slice" },
        ]
      }
    ]
  },
  {
    slug: "divorce-party-2025",
    location: "2217 38th St NW, Washington, DC",
    dateISO: "2025-11-23",
    time: "6:00 PM",
    hosts: ["Enrico Bautista", "Yumin Gao", "Francis Arellano", "Winnie Li", "Jae Min"],
    guestLimit: 20,
    guests: [],
    cost: 15,
    courses: [
      {
        heading: "Aperitivo",
        items: [
          {
            name: "ABG (Aromatic Butter Gin)",
            recipeSlug: "abg-aromatic-butter-gin",
            blurb: "Brown-butter gin with pistachio, lemon, and egg white."
          }
        ]
      },
      {
        heading: "Antipasto",
        items: [
          {
            name: "Hummus with Vegetables",
            recipeSlug: "hummus-with-vegetables",
            blurb: "Classic hummus with crisp seasonal vegetables."
          }
        ]
      },
      {
        heading: "Contorno",
        items: [
          {
            name: "Pork Okra",
            recipeSlug: "smoked-pork-okra",
            blurb: "Steam-fried okra with smoky cured pork, garlic, and shiitake."
          }
        ]
      },
      {
        heading: "Primo",
        items: [
          {
            name: "Rigatoni alla Marinara",
            recipeSlug: "marinara",
            blurb: "Light marinara with rigatoni made from cherry tomatoes."
          }
        ]
      },
      {
        heading: "Secondi",
        items: [
          {
            name: "Pan-Seared Lamb Chops",
            recipeSlug: "pan-seared-lamb-chops",
            blurb: "Italian lamb chops with rosemary and garlic."
          },
          {
            name: "Za'atar Chicken",
            recipeSlug: "zaatar-chicken",
            blurb: "Lemon and garlic grilled chicken with Lebanese za'atar."
          },
        ]
      },
      {
        heading: "Dolce",
        items: [
          {
            name: "Earl Grey Tiramisu",
            recipeSlug: "earl-grey-tiramisu",
            blurb: "Layered tiramisu with Earl Grey mascarpone and matcha-dipped ladyfingers."
          }
        ]
      },
    ]
  },
  
];

function normalizeSlug(input: string) {
  return decodeURIComponent(String(input))
    .normalize("NFKC")
    .replace(/[\u200B-\u200D\uFEFF]/g, "") // strip zero-widths
    .replace(/[–—−]/g, "-") // various dashes to hyphen
    .replace(/^\/+|\/+$/g, "") // trim leading/trailing slashes
    .trim()
    .toLowerCase();
}

export function getMenu(slug?: string) {
  if (!slug) return undefined;
  const normalizeSlugSafe = (input: string) =>
    decodeURIComponent(String(input))
      .normalize("NFKC")
      .replace(/[\u200B-\u200D\uFEFF]/g, "")
      .replace(/[\u2010\u2011\u2012\u2013\u2014\u2212]/g, "-")
      .replace(/^\/+|\/+$/g, "")
      .trim()
      .toLowerCase();
  const key = normalizeSlugSafe(slug);
  return menus.find(m => normalizeSlugSafe(m.slug) === key);
}

export function getSortedMenus() {
  return [...menus].sort((a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime());
}

export function getGuestLimit(menu?: Partial<Menu>) {
  const limit = Number(menu?.guestLimit);
  return Number.isFinite(limit) && limit > 0 ? limit : 12;
}

// Parse a menu date string. If it's a bare YYYY-MM-DD, treat as local date (not UTC)
// so that 2025-11-08 renders as Nov 8 in local timezones.
export function parseMenuDate(input: string) {
  if (!input) return new Date(NaN);
  if (/T\d{2}:?\d{2}/.test(input)) return new Date(input);
  const parts = String(input).split("-");
  const y = Number(parts[0]);
  const m = Number(parts[1] || 1);
  const d = Number(parts[2] || 1);
  return new Date(y, m - 1, d);
}
