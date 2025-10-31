import type { Recipe } from "./recipes";

type Item = { name: string; recipeSlug?: string; blurb?: string };
export type Course = { heading: string; items: Item[] };
export type Menu = {
  slug: string;
  location: string;
  dateISO: string;
  time?: string;
  hosts: string[];
  note?: string;
  courses: Course[];
};

export const menus: Menu[] = [
  {
    slug: "holiday-2025",
    location: "Park Slope, Brooklyn",
    dateISO: "2025-12-06",
    time: "7:00 PM",
    hosts: ["Enrico", "Alice"],
    note: "Barolo; Amari digestivi",
    courses: [
      { heading: "Aperitivo", items: [
        { name: "Aperol Spritz", blurb: "bitter, bubbly, bright", recipeSlug: "aperol-spritz" },
      ]},
      { heading: "Antipasti", items: [
        { name: "Crostini Ricotta e Miele", blurb: "ricotta, honey, thyme", recipeSlug: "ricotta-honey-crostini" },
      ]},
      { heading: "Primo", items: [
        { name: "Tagliatelle ai Funghi Porcini", recipeSlug: "tagliatelle-ai-porcini" },
      ]},
      { heading: "Secondi", items: [
        { name: "Pollo al Limone e Capperi", recipeSlug: "pollo-limone-capperi" },
        { name: "Branzino al Forno", recipeSlug: "branzino-al-forno" },
      ]},
      { heading: "Dolce", items: [
        { name: "Panna Cotta alla Vaniglia", recipeSlug: "vanilla-panna-cotta" },
      ]},
    ],
  },
  {
    slug: "test",
    location: "West Village, NYC",
    dateISO: "2025-10-18",
    time: "7:30 PM",
    hosts: ["Enrico", "Friend"],
    note: "Nebbiolo; Amaro Nonino",
    courses: [
      { heading: "Aperitivo", items: [{ name: "Negroni Sbagliato", blurb: "Campari, prosecco, orange", recipeSlug: "negroni-sbagliato" }] },
      { heading: "Antipasti", items: [{ name: "Insalata di Finocchi e Parmigiano", blurb: "limone, olio", recipeSlug: "shaved-fennel-parm" }] },
      { heading: "Primo", items: [{ name: "Gnocchi al Burro e Salvia", recipeSlug: "brown-butter-sage-gnocchi" }] },
      { heading: "Secondo", items: [{ name: "Bistecca al Porcini", recipeSlug: "porcini-hanger-steak" }] },
      { heading: "Dolce", items: [{ name: "Torta all'Olio d'Oliva", recipeSlug: "olive-oil-cake" }] },
    ],
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
