export type Recipe = {
  slug: string;
  title: string;
  course: string; // Aperitivo, Antipasti, Primo, Secondo, Dolce
  type: string;   // pasta, salad, meat, dessert, drink, etc.
  blurb?: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    slug: "shaved-fennel-parm",
    title: "Insalata di Finocchi e Parmigiano",
    course: "Antipasti",
    type: "salad",
    blurb: "Shaved fennel with lemon, olive oil, and parmigiano",
    ingredients: [
      "2 medium fennel bulbs, trimmed and cored",
      "1 large lemon (zest and juice)",
      "1/4 cup extra-virgin olive oil",
      "2 oz Parmigiano-Reggiano, shaved",
      "Sea salt",
      "Freshly ground black pepper",
      "Small handful fennel fronds (optional)",
    ],
    steps: [
      "Very thinly slice fennel using a mandoline or knife; place in a bowl of cold water 5 minutes to crisp, then drain and pat dry.",
      "Whisk lemon juice, a bit of zest, and olive oil with a pinch of salt.",
      "Toss fennel with dressing; season with salt and pepper to taste.",
      "Plate and finish with shaved parmigiano and fennel fronds.",
    ],
  },
  {
    slug: "brown-butter-sage-gnocchi",
    title: "Gnocchi al Burro e Salvia",
    course: "Primo",
    type: "pasta",
    blurb: "Potato gnocchi with brown butter and sage",
    ingredients: [
      "1 lb potato gnocchi (fresh or packaged)",
      "6 tbsp unsalted butter",
      "12 fresh sage leaves",
      "Kosher salt",
      "Freshly ground black pepper",
      "Parmigiano-Reggiano, finely grated, for serving",
    ],
    steps: [
      "Bring a large pot of salted water to a boil.",
      "In a wide skillet over medium heat, melt butter; add sage and cook until butter turns nutty brown and sage crisps (3–5 minutes). Remove from heat.",
      "Cook gnocchi until they float; transfer directly to the brown butter with a splash of pasta water.",
      "Toss over medium heat to glaze; season with salt and pepper. Serve with grated parmigiano.",
    ],
  },
  {
    slug: "porcini-hanger-steak",
    title: "Bistecca al Porcini",
    course: "Secondo",
    type: "meat",
    blurb: "Hanger steak with porcini crust",
    ingredients: [
      "1.5 lb hanger steak, trimmed",
      "1/2 oz dried porcini, finely ground to powder",
      "1 tbsp olive oil",
      "Kosher salt",
      "Freshly ground black pepper",
      "Butter and thyme (optional, for basting)",
    ],
    steps: [
      "Pat steak dry; rub with olive oil and coat evenly with porcini powder. Season generously with salt and pepper.",
      "Sear in a hot cast-iron skillet 2–3 minutes per side; lower heat and baste with butter and thyme if desired until medium-rare.",
      "Rest 8–10 minutes; slice against the grain and serve.",
    ],
  },
  {
    slug: "olive-oil-cake",
    title: "Torta all'Olio d'Oliva",
    course: "Dolce",
    type: "dessert",
    blurb: "Moist olive oil cake",
    ingredients: [
      "1 1/2 cups all-purpose flour",
      "1 cup sugar",
      "1/2 tsp baking powder",
      "1/2 tsp baking soda",
      "1/2 tsp kosher salt",
      "3 large eggs",
      "3/4 cup extra-virgin olive oil",
      "3/4 cup whole milk or buttermilk",
      "Zest of 1 orange or lemon",
    ],
    steps: [
      "Heat oven to 350°F/175°C. Grease and line a 9-inch pan.",
      "Whisk dry ingredients; in another bowl whisk eggs, oil, milk, and zest.",
      "Combine wet and dry just until smooth. Pour into pan and bake 30–40 minutes until a tester comes out clean.",
      "Cool 10 minutes; unmold and cool completely.",
    ],
  },
  {
    slug: "negroni-sbagliato",
    title: "Negroni Sbagliato",
    course: "Aperitivo",
    type: "drink",
    blurb: "Campari, sweet vermouth, prosecco",
    ingredients: [
      "1 oz Campari",
      "1 oz sweet vermouth",
      "3 oz chilled prosecco",
      "Orange slice or peel",
      "Ice",
    ],
    steps: [
      "Fill a rocks glass with ice.",
      "Add Campari and sweet vermouth; stir briefly.",
      "Top with prosecco and garnish with orange.",
    ],
  },
  {
    slug: "aperol-spritz",
    title: "Aperol Spritz",
    course: "Aperitivo",
    type: "drink",
    blurb: "Aperol, prosecco, splash of soda",
    ingredients: [
      "3 oz prosecco, chilled",
      "2 oz Aperol",
      "1 oz soda water",
      "Ice",
      "Orange slice for garnish",
    ],
    steps: [
      "Fill a large wine glass with ice.",
      "Add Aperol, then prosecco; top with a splash of soda.",
      "Garnish with an orange slice.",
    ],
  },
  {
    slug: "ricotta-honey-crostini",
    title: "Crostini Ricotta e Miele",
    course: "Antipasti",
    type: "crostini",
    blurb: "Toasted baguette with whipped ricotta, honey, and thyme",
    ingredients: [
      "1 baguette, sliced 1/2-inch on a bias",
      "1 1/2 cups whole-milk ricotta",
      "2–3 tbsp honey, plus more to finish",
      "2 tbsp extra-virgin olive oil",
      "Leaves from 3–4 sprigs fresh thyme",
      "Kosher salt",
      "Freshly ground black pepper",
    ],
    steps: [
      "Heat oven to 400 F. Brush baguette slices lightly with olive oil and toast until golden at edges.",
      "In a bowl, whisk ricotta with a pinch of salt and a drizzle of olive oil until smooth and creamy.",
      "Spread ricotta on warm crostini; drizzle with honey and sprinkle with thyme and black pepper. Serve immediately.",
    ],
  },
  {
    slug: "tagliatelle-ai-porcini",
    title: "Tagliatelle ai Funghi Porcini",
    course: "Primo",
    type: "pasta",
    blurb: "Fresh mushrooms in a glossy butter sauce",
    ingredients: [
      "12 oz tagliatelle (fresh or dried)",
      "12 oz mixed porcini or cremini mushrooms, sliced",
      "2 tbsp olive oil",
      "3 tbsp unsalted butter",
      "2 cloves garlic, thinly sliced",
      "1/4 cup chopped parsley",
      "Salt and black pepper",
      "Parmigiano-Reggiano, finely grated",
    ],
    steps: [
      "Bring a large pot of salted water to a boil.",
      "Sauté mushrooms in olive oil over medium-high heat with a pinch of salt until browned and their liquid evaporates.",
      "Add butter and garlic; cook 1–2 minutes until fragrant, then lower heat.",
      "Cook pasta until al dente; transfer to pan with a splash of pasta water and toss to gloss.",
      "Off heat, stir in parsley and black pepper. Serve with grated parmigiano.",
    ],
  },
  {
    slug: "pollo-limone-capperi",
    title: "Pollo al Limone e Capperi",
    course: "Secondo",
    type: "poultry",
    blurb: "Skillet chicken cutlets in lemon-caper pan sauce",
    ingredients: [
      "1 1/2 lb chicken cutlets (or thinly sliced breasts)",
      "Kosher salt and black pepper",
      "2 tbsp flour (optional, for light dredge)",
      "2 tbsp olive oil",
      "1/2 cup dry white wine",
      "1/2 cup low-sodium chicken stock",
      "1 large lemon (zest and 3 tbsp juice)",
      "2 tbsp capers, rinsed",
      "2 tbsp cold unsalted butter",
      "2 tbsp chopped parsley",
    ],
    steps: [
      "Season chicken with salt and pepper; lightly dredge in flour if using.",
      "Sear in olive oil over medium-high heat 2–3 minutes per side until just cooked; transfer to a warm plate.",
      "Deglaze pan with wine; reduce by half. Add stock, lemon juice, zest, and capers; simmer 2 minutes.",
      "Off heat, whisk in cold butter to emulsify. Return chicken to coat, sprinkle with parsley, and serve.",
    ],
  },
  {
    slug: "branzino-al-forno",
    title: "Branzino al Forno",
    course: "Secondo",
    type: "fish",
    blurb: "Roasted branzino with lemon and herbs",
    ingredients: [
      "2 whole branzini (about 1 lb each), cleaned",
      "2 tbsp olive oil",
      "Kosher salt and black pepper",
      "2 cloves garlic, smashed",
      "1 lemon, thinly sliced",
      "Fresh parsley and thyme",
    ],
    steps: [
      "Heat oven to 425 F. Pat fish dry and score each side 2–3 times.",
      "Season cavity and exterior with salt and pepper; stuff with garlic, a few lemon slices, and herbs.",
      "Rub with olive oil, place on a lined sheet, and roast 14–18 minutes until flesh flakes easily.",
      "Finish with a squeeze of lemon and extra olive oil to serve.",
    ],
  },
  {
    slug: "vanilla-panna-cotta",
    title: "Panna Cotta alla Vaniglia",
    course: "Dolce",
    type: "dessert",
    blurb: "Silky vanilla panna cotta",
    ingredients: [
      "2 cups heavy cream",
      "1 cup whole milk",
      "1/2 cup sugar",
      "1 1/2 tsp powdered gelatin",
      "2 tbsp cold water",
      "1 tsp vanilla extract (or seeds from 1/2 vanilla bean)",
      "Pinch of salt",
    ],
    steps: [
      "Bloom gelatin in cold water 5 minutes.",
      "Heat cream, milk, sugar, and salt over medium until steaming; do not boil. Remove from heat.",
      "Stir in bloomed gelatin until dissolved, then add vanilla.",
      "Pour into 6 small cups; chill until set, at least 4 hours. Unmold or serve in cups.",
    ],
  },
];

export function getRecipe(slug?: string) {
  if (!slug) return undefined;
  const key = decodeURIComponent(String(slug)).trim().toLowerCase();
  return recipes.find(r => r.slug.toLowerCase() === key);
}
