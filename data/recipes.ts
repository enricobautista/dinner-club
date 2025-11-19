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
      "In a wide skillet over medium heat, melt butter; add sage and cook until butter turns nutty brown and sage crisps (3-5 minutes). Remove from heat.",
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
      "Sear in a hot cast-iron skillet 2-3 minutes per side; lower heat and baste with butter and thyme if desired until medium-rare.",
      "Rest 8-10 minutes; slice against the grain and serve.",
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
      "Combine wet and dry just until smooth. Pour into pan and bake 30-40 minutes until a tester comes out clean.",
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
      "2-3 tbsp honey, plus more to finish",
      "2 tbsp extra-virgin olive oil",
      "Leaves from 3-4 sprigs fresh thyme",
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
      "Add butter and garlic; cook 1-2 minutes until fragrant, then lower heat.",
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
      "Sear in olive oil over medium-high heat 2-3 minutes per side until just cooked; transfer to a warm plate.",
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
      "Heat oven to 425 F. Pat fish dry and score each side 2-3 times.",
      "Season cavity and exterior with salt and pepper; stuff with garlic, a few lemon slices, and herbs.",
      "Rub with olive oil, place on a lined sheet, and roast 14-18 minutes until flesh flakes easily.",
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
  {
    slug: "grilled-octopus",
    title: "Grilled Octopus",
    course: "Secondo",
    type: "seafood",
    blurb: "Mediterranean-style grilled octopus with lemon, parsley, and olive oil.",
    ingredients: [
      "octopus, cleaned",
      "lemon",
      "one small onion",
      "one whole garlic",
      "bay leaves",
      "whole peppercorns",
      "salt",
      "extra-virgin olive oil",
      "parsley",
      "lemon wedges, for serving"
    ],
    steps: [
      "Boil the octopus with one lemon, one onion, a few cloves of garlic, bay leaves, and whole peppercorns.",
      "Cook 45-60 minutes, until the thickest part of a tentacle is tender when pierced.",
      "Cut the octopus into tentacles and large head pieces.",
      "Marinade the octopus in olive oil, lemon juice, chopped parsley, minced garlic, and salt for 30 minutes or overnight.",
      "Grill the octopus until lightly charred and crisp at the edges, a few minutes per side.",
      "Transfer to a platter and serve with lemon wedges."
    ]
  },
  {
    slug: "samgyeopsal",
    title: "Samgyeopsal",
    course: "Secondo",
    type: "meat",
    blurb: "Korean grilled pork belly with lettuce wraps, sesame oil and salt dip, gochjang, and ssamjang.",
    ingredients: [
      "pork belly slices (skinless)",
      "salt",
      "black pepper (optional)",
      "sesame oil",
      "ssamjang",
      "gochujang",
      "lettuce leaves",
      "steamed rice"
    ],
    steps: [
      "Set out lettuce, ssamjang, gochujang, and steamed rice. In a small dish, mix sesame oil with a pinch of coarse salt for dipping.",
      "Place pork belly slices on the hot surface and season lightly with salt (and pepper if you like).",
      "Grill until the fat renders and both sides are golden and crisp.",
      "Cut pork into bite-size pieces with kitchen scissors.",
      "Eat immediately: dip pork in the sesame oil and salt, ssamjang, or gochujang, then wrap in lettuce with a little rice."
    ]
  },
  {
    slug: "red-oil-wontons",
    title: "Red Oil Wontons (Sichuan-Style Spicy Wontons)",
    course: "Primo",
    type: "dumpling",
    blurb: "Pork wontons tossed in a bright, spicy red oil sauce served with blanched pea shoots.",
    ingredients: [
      // Filling
      "200 g ground pork",
      "1 scallion, finely chopped",
      "1 tsp grated ginger",
      "1 tsp soy sauce",
      "1 tsp sesame oil",
      "salt and white pepper, to taste",
      "wonton wrappers",
      // Sauce (per serving)
      "2 Tbsp chili oil",
      "1½ Tbsp light soy sauce",
      "1 tsp Chinese black vinegar",
      "¼ tsp sugar",
      "1 tsp minced garlic",
      "1 tsp toasted sesame seeds",
      "1 tsp warm water",
      "pinch chopped scallions (optional)",
      "2-3 drops Sichuan peppercorn oil (optional)",
      // For serving
      "fresh pea shoots"
    ],
    steps: [
      "Mix the filling: combine pork, scallion, ginger, soy sauce, sesame oil, salt, and white pepper until sticky.",
      "Assemble: place a small spoon of filling in each wrapper, moisten edges, fold, and seal.",
      "Boil: cook wontons in plenty of boiling water 4-5 minutes until they float and are cooked through; add pea shoots for the last 30 seconds to blanch.",
      "Make sauce (per bowl): stir together chili oil, light soy sauce, black vinegar, sugar, garlic, sesame seeds, and warm water; add scallions and Sichuan peppercorn oil if using.",
      "Serve: transfer wontons and pea shoots to the sauce bowl, toss gently to coat, and serve hot."
    ]
  },
  {
    slug: "apricot-blossom",
    title: "Apricot Blossom",
    course: "Aperitivo",
    type: "drink",
    blurb: "A bright gin cocktail with apricot liqueur, Lillet/Cocchi, and a touch of orange blossom.",
    ingredients: [
      "2 oz London Dry Gin (or Hendrick's for a softer floral base)",
      "3/4 oz apricot liqueur (e.g., Giffard Abricot or Bols Apricot Brandy)",
      "1/2 oz Lillet Blanc or Cocchi Americano",
      "2 drops orange blossom water (optional)",
      "ice"
    ],
    steps: [
      "Chill a glass.",
      "Add gin, apricot liqueur, Lillet/Cocchi, and orange blossom water to a mixing glass with ice.",
      "Stir until well chilled and silky, then strain into the chilled glass.",
      "Serve straight up."
    ]
  },
  {
    slug: "oi-muchim",
    title: "Oi-Muchim",
    course: "Antipasti",
    type: "salad",
    blurb: "Crisp salted cucumbers tossed with gochugaru, garlic, vinegar, and sesame-a classic Korean banchan.",
    ingredients: [
      "cucumbers, thinly sliced",
      "coarse salt (for salting)",
      "gochugaru (Korean red pepper flakes)",
      "rice vinegar",
      "sugar",
      "sesame oil",
      "toasted sesame seeds"
    ],
    steps: [
      "Toss sliced cucumbers with a light sprinkle of coarse salt and let sit 10-15 minutes until they release some liquid.",
      "Drain and gently squeeze; pat dry.",
      "In a bowl, mix gochugaru, rice vinegar, a little sugar, and a splash of sesame oil.",
      "Add cucumbers and toss to coat. Adjust seasoning to taste.",
      "Finish with toasted sesame seeds and serve right away or chill briefly."
    ]
  },
  {
    slug: "roasted-butternut-squash",
    title: "Roasted Butternut Squash with Garlic & Herbs",
    course: "Contorno",
    type: "vegetable",
    blurb: "Roasted butternut squash with garlic, rosemary, thyme, and sage finished with parsley.",
    ingredients: [
      "1 butternut squash (~3 lb), peeled, seeded, cut into 1-inch cubes",
      "olive oil (about 3 Tbsp)",
      "fresh rosemary, minced (about 1 Tbsp)",
      "fresh thyme, minced (about 1 Tbsp)",
      "fresh sage, minced (about 1 Tbsp)",
      "salt and black pepper",
      "garlic, minced (about 1 Tbsp)",
      "fresh parsley, minced (about 2½ Tbsp)"
    ],
    steps: [
      "Heat oven to 400°F and lightly oil a rimmed baking sheet.",
      "Toss squash with olive oil, rosemary, thyme, sage, salt, and pepper; spread in an even layer.",
      "Roast 20 minutes, then add garlic and toss.",
      "Roast 10-20 minutes more until tender; broil 1-3 minutes for extra browning if desired.",
      "Finish with parsley and serve warm."
    ]
  },
  {
    slug: "smoked-pork-okra",
    title: "Smoked Pork Okra",
    course: "Contorno",
    type: "vegetable",
    blurb: "Steam-fried okra with cured pork, garlic, onions, and shiitake.",
    ingredients: [
      "4 oz Hunan-style cured pork (or thick-cut smoked bacon), sliced",
      "1 lb okra, trimmed and halved",
      "4 cloves garlic, minced",
      "1 medium onion, sliced",
      "3 fresh shiitake mushrooms, sliced",
      "1 red chili or Fresno pepper, sliced",
      "2 tbsp soy sauce",
      "1 tbsp rice vinegar",
      "1 tsp sugar",
      "1/4 tsp white pepper",
      "1 tsp sesame oil",
      "Small handful cilantro, chopped"
    ],
    steps: [
      "Heat a pan over medium with a little oil and add garlic, cooking until fragrant.",
      "Add the cured pork and sauté until the fat renders and the edges become lightly crisp.",
      "Add the onions and shiitake; cook until softened.",
      "Add the okra and toss over medium heat until tender but not mushy.",
      "Season with soy sauce, rice vinegar, sugar, and white pepper; stir to coat evenly.",
      "Turn off the heat, drizzle with sesame oil, and garnish with sliced chili and cilantro."
    ]
  },
  {
    slug: "hummus-with-vegetables",
    title: "Hummus with Vegetables",
    course: "Antipasti",
    type: "dip",
    blurb: "Classic hummus served with fresh seasonal vegetables.",
    ingredients: [
      "1 can (15 oz) chickpeas, drained",
      "2 tbsp reserved chickpea liquid (or cold water)",
      "3 tbsp tahini",
      "2 tbsp lemon juice",
      "1 small garlic clove, crushed",
      "2 tbsp extra-virgin olive oil",
      "1/2 tsp kosher salt",
      "Paprika or Aleppo pepper, for garnish",
      "Extra olive oil, for drizzling",
      "Assorted vegetables: cucumber, carrots, radishes, cherry tomatoes"
    ],
    steps: [
      "In a food processor, blend the chickpeas, tahini, lemon juice, garlic, salt, and chickpea liquid until smooth.",
      "With the motor running, drizzle in the olive oil and blend until creamy.",
      "Taste and adjust salt or lemon.",
      "Serve swirled in a bowl, topped with olive oil and paprika or Aleppo pepper.",
      "Arrange fresh vegetables around the hummus for dipping."
    ]
  },
  {
    slug: "marinara",
    title: "Rigatoni alla Marinara",
    course: "Primo",
    type: "pasta-sauce",
    blurb: "A light, bright marinara made from cherry tomatoes, onion, and garlic.",
    ingredients: [
      "2 tbsp extra virgin olive oil",
      "1/2 white onion, diced",
      "2 cloves garlic, crushed",
      "16 oz cherry tomatoes, halved",
      "Pinch crushed red pepper",
      "Salt, to taste"
    ],
    steps: [
      "Heat olive oil in a pan over medium and sauté the diced onion until translucent.",
      "Add the crushed garlic and cook gently until fragrant but not browned.",
      "Stir in the crushed red pepper, salt, and cherry tomatoes.",
      "Simmer uncovered for 15-20 minutes, stirring occasionally, until the tomatoes break down into a sauce.",
      "Taste and adjust seasoning. Serve with pasta."
    ]
  },
  {
    slug: "pan-seared-lamb-chops",
    title: "Pan-Seared Lamb Chops",
    course: "Secondi",
    type: "meat",
    blurb: "Classic butter-basted lamb chops with rosemary, garlic, and optional wine finish.",
    ingredients: [
      "6-8 lamb chops (frenched if possible)",
      "2 tbsp extra-virgin olive oil",
      "2 garlic cloves, crushed",
      "2 sprigs rosemary",
      "1 sprig thyme (optional)",
      "Salt",
      "Black pepper",
      "20 g (1 tbsp) butter",
      "Optional: splash of white wine or brandy"
    ],
    steps: [
      "Bring the lamb chops to room temperature for 15-20 minutes.",
      "Heat a stainless or cast-iron pan over medium-high and add olive oil.",
      "Add the crushed garlic and rosemary to flavor the oil.",
      "Place the lamb chops in the pan without overlapping.",
      "Cook 2 minutes per side for medium-rare, 2.5-3 minutes for more done. Flip only once.",
      "Add the butter and baste the chops for 20-30 seconds as it foams.",
      "Optional: add a splash of white wine or brandy and let it evaporate for a few seconds.",
      "Remove from the heat and rest for 2 minutes.",
      "Season generously with salt and a little black pepper before serving."
    ]
  },
  {
    slug: "zaatar-chicken",
    title: "Za'atar Chicken",
    course: "Secondi",
    type: "poultry",
    blurb: "Roasted chicken marinated with olive oil, lemon, garlic, and aromatic za'atar.",
    ingredients: [
      "2 lbs chicken thighs (bone-in or boneless)",
      "2 tbsp za'atar (or homemade, see below)",
      "2 tbsp extra-virgin olive oil",
      "2 cloves garlic, minced",
      "1 tbsp lemon juice",
      "1 tsp lemon zest",
      "1/2 tsp kosher salt",
      "Black pepper, to taste",
      "Optional: sliced red onion or cherry tomatoes for roasting",
      "",
      "Homemade Za'atar (optional)",
      "2 tbsp dried thyme or oregano",
      "1 tbsp toasted sesame seeds",
      "1 tbsp ground sumac",
      "1/2 tsp kosher salt"
    ],
    steps: [
      "To make homemade za'atar: Mix dried thyme or oregano, toasted sesame seeds, ground sumac, and kosher salt. Store airtight.",
      "In a bowl, mix olive oil, garlic, lemon juice, lemon zest, za'atar, salt, and pepper.",
      "Rub the marinade over the chicken thoroughly. Rest at least 20 minutes (or refrigerate overnight).",
      "Preheat the oven to 425°F (220°C).",
      "Arrange the chicken on a baking sheet; add sliced red onions or tomatoes if using.",
      "Roast 25-35 minutes until the skin is crisp and internal temp reaches 165°F.",
      "Rest for 5 minutes before serving."
    ]
  },
];

export function getRecipe(slug?: string) {
  if (!slug) return undefined;
  const key = decodeURIComponent(String(slug)).trim().toLowerCase();
  return recipes.find(r => r.slug.toLowerCase() === key);
}
