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
  venmoTag?: string;   // optional Venmo handle for payments
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
  {
  slug: "thanksgiving-2025",
  location: "19509 South Coquina Way, Weston, FL",
  dateISO: "2025-11-27",
  time: "12:00 PM",
  hosts: ["Bautista Family"],
  guestLimit: 25,
  guests: [],
  cost: 0,
  courses: [
    {
        heading: "Aperitivi",
        items: [
          {
            name: "Gin and Tonic",
            recipeSlug: "gin-and-tonic",
            blurb: "Classic gin highball with tonic and lime."
          },
          {
            name: "Old Fashioned",
            recipeSlug: "old-fashioned",
            blurb: "Whiskey, sugar, bitters, and orange peel."
          },
          {
            name: "French 75",
            recipeSlug: "french-75",
            blurb: "Gin, lemon, simple syrup, and Champagne."
          },
          {
            name: "Red Wine, Japanese Yuzu Sake, and Imported Beer",
          }
        ]
      },
      {
        heading: "Secondi",
        items: [
          {
            name: "Smoked Turkey",
            blurb: "Slow-smoked turkey served with pan gravy and tart cranberry sauce."
          },
          {
            name: "Small Ham",
            blurb: "Baked ham with a simple savory-sweet glaze."
          },
          {
            name: "Pot Roast",
            blurb: "Braised beef roast with vegetables."
          },
          {
            name: "Eggplant Parmigiana",
            blurb: "Layers of eggplant, tomato sauce, and melted cheese."
          },
          {
            name: "Samgyeopsal",
            recipeSlug: "samgyeopsal",
            blurb: "Grilled Korean pork belly with lettuce wraps and condiments."
          }
        ]
      },
      {
        heading: "Contorni",
        items: [
          {
            name: "Home Made Mac & Cheese",
          },
          {
            name: "Stuffing",
            blurb: "Herbed bread stuffing."
          },
          {
            name: "Biscuits",
            blurb: "Warm, flaky biscuits for the table."
          },
          {
            name: "Tossed Salad",
          }
        ]
      },
      {
        heading: "Dolci",
        items: [
          {
            name: "Seadas",
            blurb: "Sardinian cheese-filled pastries with sugar."
          },
          {
            name: "Dessert from Ricardo",
            blurb: "Chef Ricardo's special dessert selection."
          },
          {
            name: "Apple Pie and Vanilla Ice Cream",
          },
          {
            name: "Fruit Salad",
          }
        ]
      }
    ]
  },
  {
    slug: "winter-send-off-2025",
    location: "2217 38th St NW, Washington, DC",
    dateISO: "2025-12-13",
    time: "6:00 PM",
    hosts: ["Enrico Bautista", "Yumin Gao", "Aarshi Kibria", "Madhu Saravanan"],
    guestLimit: 20,
    guests: [],
    cost: 15,
    venmoTag: "@Yumin-Gao",
    courses: [
      {
        heading: "Aperitivi",
        items: [
          {
            name: "Propo-falala",
            recipeSlug: "propo-falala",
            blurb: "Crème de menthe, white rum, pandan, and coconut cream."
          }
        ]
      },
      {
        heading: "Antipasti",
        items: [
          {
            name: "Gochujang Tomato Soup and Grilled Cheese",
            blurb: "Caramelized gochujang with slowly simmered vine tomatoes served with gruyere and pear chutney on housemade sourdough."
          }
        ]
      },
      {
        heading: "Primi",
        items: [
          {
            name: "Braised Beef Udon",
            recipeSlug: "braised-beef-udon",
            blurb: "Soy-braised beef shank and aromatics served over udon noodles."
          }
        ]
      },
      {
        heading: "Contorni",
        items: [
          {
            name: "Typhoon Shelter Lotus Root",
            blurb: "Crisp lotus root inspired by typhoon shelter flavors."
          }
        ]
      },
      {
        heading: "Secondi",
        items: [
          {
            name: "Typhoon Shelter Shrimp",
            blurb: "Garlic- and chili-loaded shrimp in the typhoon shelter style."
          },
          {
            name: "Lemongrass Pork",
            recipeSlug: "lemongrass-pork",
            blurb: "Vietnamese grilled pork marinated with lemongrass, garlic, and fish sauce."
          }
        ]
      },
      {
        heading: "Dolce",
        items: [
          {
            name: "Strawberry Matcha Chiffon Cake",
            blurb: "Light dessert cake."
          }
        ]
      }
    ]
  },
  {
    slug: "tahoe-2025",
    location: "378 Winding Way, Incline Village, NV",
    dateISO: "2025-12-19",
    time: "5:00 PM",
    hosts: ["Francis Arellano", "Enrico Bautista", "Leo Li", "Yumin Gao", "Abe Guo", "Sai Kathika", "Rohan Rani", "Dylan Ratnarajah"],
    courses: [
      {
        heading: "Aperitivi",
        items: [
          {
            name: "Pineapple Daiquiri",
            recipeSlug: "pineapple-daiquiri",
            blurb: "White rum, pineapple juice, lime, and simple syrup."
          },
          {
            name: "Pineapple Whiskey Sour",
            recipeSlug: "pineapple-whiskey-sour",
            blurb: "Whiskey sour with pineapple and citrus."
          }
        ]
      },
      {
        heading: "Antipasto",
        items: [
          {
            name: "Steamed Egg",
            recipeSlug: "steamed-egg",
            blurb: "Silky savory steamed egg custard with soy and sesame oil."
          }
        ]
      },
      {
        heading: "Primi",
        items: [
          {
            name: "Moules Marinières",
            recipeSlug: "moules-marinieres",
            blurb: "Steamed mussels in white wine with garlic, shallot, and herbs."
          },
          {
            name: "Zuppa di Pesce",
            recipeSlug: "zuppa-di-pesce",
            blurb: "Branzino, mussels, and shrimp in a tomato-wine fish broth."
          }
        ]
      },
      {
        heading: "Contorno",
        items: [
          {
            name: "Roasted Zucchini and Asparagus",
            blurb: "Simple roasted seasonal vegetables."
          }
        ]
      },
      {
        heading: "Secondi",
        items: [
          {
            name: "Steak with Chimichurri",
            recipeSlug: "steak-with-chimichurri",
            blurb: "Grilled steak with fresh herb chimichurri."
          },
          {
            name: "Baked Salmon",
            blurb: "Oven-baked salmon."
          }
        ]
      },
      {
        heading: "Dolce",
        items: [
          {
            name: "Pecan Pie with Ice Cream",
            blurb: "Classic pecan pie served with vanilla ice cream."
          }
        ]
      }
    ]
  },
  {
    slug: "winter-braise-provencal-dinner",
    location: "2755 Ordway St NW, Washington, DC",
    dateISO: "2026-01-27",
    time: "8:30 PM",
    hosts: ["Enrico Bautista"],
    guestLimit: 1,
    guests: [],
    courses: [
      {
        heading: "Primo",
        items: [
          {
            name: "Pasta Provençale",
            recipeSlug: "pasta-provencale",
            blurb: "Tomatoes, olive oil, garlic, herbs, olives, and capers."
          }
        ]
      },
      {
        heading: "Secondo",
        items: [
          {
            name: "White Wine-Braised Oxtail, Osso Buco Style",
            recipeSlug: "white-wine-braised-oxtail-osso-buco-style",
            blurb: "Slow-braised oxtail with white wine and aromatics."
          }
        ]
      },
      {
        heading: "Contorno",
        items: [
          {
            name: "Garlic-Lemon Broccolini",
            recipeSlug: "garlic-lemon-broccolini",
            blurb: "Sautéed broccolini finished with lemon."
          }
        ]
      },
      {
        heading: "Dolce",
        items: [
          {
            name: "Seada",
            blurb: "Traditional Sardinian cheese-filled dessert with sugar."
          }
        ]
      }
    ]
  },
  {
    slug: "south-asian-dinner-club-2026-02-22",
    location: "2217 38th St NW, Washington, DC",
    dateISO: "2026-02-22",
    time: "6:00 PM",
    hosts: ["Anushka Desai", "Shankar Thiru", "Kajal Desai", "Dylan Ratnarajah", "Rohan Rani", "Enrico Bautista", "Auntie Desai"],
    guestLimit: 25,
    guests: [],
    cost: 16,
    venmoTag: "@EricBautista",
    courses: [
      {
        heading: "Aperitivi",
        items: [
          {
            name: "Chai Martini",
            recipeSlug: "chai-martini",
            blurb: "Chai-infused vodka with warm spices."
          },
          {
            name: "Rum Mango Lassi",
            recipeSlug: "rum-mango-lassi",
            blurb: "Mango, yogurt, rum, saffron, and cardamom."
          }
        ]
      },
      {
        heading: "Antipasti",
        items: [
          {
            name: "Green Goddess Salad with Spiced Smashed Potatoes",
            recipeSlug: "green-goddess-salad-smashed-potatoes",
            blurb: "Herbed dressing, crisp romaine, and roasted smashed potatoes."
          },
          {
            name: "Pani Puri",
            blurb: "Crisp puris filled with spiced water and chutneys."
          }
        ]
      },
      {
        heading: "Primo",
        items: [
          {
            name: "Pav Bhaji",
            blurb: "Spiced vegetable mash served with buttered bread rolls."
          }
        ]
      },
      {
        heading: "Secondi",
        items: [
          {
            name: "Butter Chicken",
            blurb: "Creamy tomato-based chicken curry."
          },
          {
            name: "Jaffna Prawn Curry",
            recipeSlug: "jaffna-prawn-curry",
            blurb: "Sri Lankan prawn curry with coconut rice."
          }
        ]
      },
      {
        heading: "Dolci",
        items: [
          {
            name: "Gajjar Halwa Cake",
            blurb: "Indian carrot halwa-inspired cake with pistachio frosting."
          }
        ]
      }
    ]
  },
];

function normalizeSlug(input: string) {
  return decodeURIComponent(String(input))
    .normalize("NFKC")
    .replace(/[\u200B-\u200D\uFEFF]/g, "") // strip zero-widths
    .replace(/[-—−]/g, "-") // various dashes to hyphen
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
