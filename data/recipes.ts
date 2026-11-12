export type Recipe = {
  slug: string;
  title: string;
  course: string; // Aperitivo, Antipasti, Primo, Secondo, Dolce
  type: string;   // pasta, salad, meat, dessert, cocktail, etc.
  requiresToken?: boolean; // mark true to require RECIPE_TOKEN before showing details
  blurb?: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    slug: "negroni-sbagliato",
    title: "Negroni Sbagliato",
    course: "Aperitivo",
    type: "cocktail",
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
    type: "cocktail",
    blurb: "Aperol, prosecco, splash of soda",
    requiresToken: true,
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
    type: "cocktail",
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
    type: "pasta",
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
      "1 tbsp dried thyme",
      "1 tbsp dried oregano",
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
  {
    slug: "earl-grey-tiramisu",
    title: "Earl Grey Tiramisu",
    course: "Dolce",
    type: "dessert",
    blurb: "A fragrant twist on tiramisu layered with Earl Grey-infused mascarpone and matcha-dipped ladyfingers.",
    ingredients: [
      "1 1/4 cup heavy cream, divided",
      "1 tbsp Earl Grey tea leaves (or 3 tea bags)",
      "2 egg yolks",
      "5 tbsp granulated sugar",
      "2 tsp vanilla extract",
      "8 oz mascarpone cheese, room temperature",
      "18-24 ladyfingers",
      "6 oz hot water",
      "1-2 tbsp matcha powder",
      "",
      "// Matcha Whipped Cream",
      "8 oz heavy cream",
      "1 tbsp granulated sugar",
      "1 tsp matcha powder, sifted"
    ],
    steps: [
      "Heat 1/2 cup of the heavy cream with the Earl Grey tea over low heat for about 5 minutes, until just simmering. Remove from heat; strain if using loose leaves and set aside to cool slightly.",
      "Prepare a double boiler and whisk the egg yolks with 5 tbsp sugar until pale yellow and slightly thickened. Transfer to a large bowl.",
      "While the custard is still warm, whisk in the mascarpone using a handheld mixer until smooth.",
      "Add the Earl Grey cream, the remaining heavy cream, and vanilla extract. Continue whisking until fully incorporated. (Note: the heated cream will prevent it from whipping to stiff peaks—this is normal.)",
      "Prepare an 8-by-8 pan lined with parchment. Whisk the matcha with hot (not boiling) water until smooth.",
      "Dip each ladyfinger briefly in the matcha and arrange in a single layer in the pan.",
      "Spread a layer of the Earl Grey cream over the ladyfingers. Add a second layer of matcha-dipped ladyfingers, then top with the remaining Earl Grey cream. Reserve some cream for piping if desired.",
      "Smooth the surface and refrigerate at least 4 hours to set.",
      "For the matcha whipped cream: Whip heavy cream with sugar and sifted matcha until stiff peaks form. Transfer to a piping bag.",
      "If extra Earl Grey cream was reserved, whip briefly if needed and place into a piping bag.",
      "Before serving, alternate piping the matcha cream and Earl Grey cream on top. Lightly dust with matcha powder."
    ]
  },
  {
    slug: "abg-aromatic-butter-gin",
    title: "ABG (Aromatic Butter Gin)",
    course: "Aperitivo",
    type: "cocktail",
    blurb: "Brown-butter-washed gin shaken with pistachio, lemon, and egg white for a rich cocktail.",
    ingredients: [
      "2 oz brown-butter-washed gin",
      "1 oz pistachio cream liquer",
      "0.5 oz fresh lemon juice",
      "0.5 oz simple syrup",
      "1.5 oz egg white",
      "Small pinch of salt",
      "Ice",
      "Grated pistachio, for garnish"
    ],
    steps: [
      "Add all ingredients to a shaker without ice and dry shake to aerate and create texture.",
      "Add ice and shake vigorously until well chilled.",
      "Strain into a chilled coupe glass.",
      "Garnish with freshly grated pistachio."
    ]
  },
  {
    slug: "gin-and-tonic",
    title: "Gin and Tonic",
    course: "Aperitivo",
    type: "cocktail",
    blurb: "A crisp highball of gin, tonic, and lime.",
    ingredients: [
      "2 oz gin",
      "4-6 oz tonic water, chilled",
      "Ice",
      "Lime wedge, for garnish"
    ],
    steps: [
      "Fill a highball glass with ice.",
      "Pour in the gin, then top with chilled tonic water.",
      "Give a gentle stir to combine.",
      "Garnish with a lime wedge and serve."
    ]
  },
  {
    slug: "old-fashioned",
    title: "Old Fashioned",
    course: "Aperitivo",
    type: "cocktail",
    blurb: "A classic with whiskey, sugar, and bitters.",
    ingredients: [
      "2 oz bourbon or rye whiskey",
      "1 sugar cube with a few drops of water",
      "2 dashes Angostura bitters",
      "Ice (preferably one large cube)",
      "Orange peel, for garnish"
    ],
    steps: [
      "Add sugar cube, a few drops of water, and bitters to a rocks glass.",
      "Add the whiskey and stir to combine.",
      "Add a large ice cube and stir 15-20 seconds to chill and dilute slightly.",
      "Express an orange peel over the glass, rub the rim, and drop it in as garnish."
    ]
  },
  {
    slug: "french-75",
    title: "French 75",
    course: "Aperitivo",
    type: "cocktail",
    blurb: "Gin, lemon, and simple syrup topped with chilled Champagne.",
    ingredients: [
      "1 oz gin",
      "1/2 oz fresh lemon juice",
      "1/2 oz simple syrup",
      "2-3 oz dry Champagne or other sparkling wine, chilled",
      "Ice",
      "Lemon twist, for garnish"
    ],
    steps: [
      "Fill a shaker with ice and add gin, lemon juice, and simple syrup.",
      "Shake until well chilled, then strain into a flute or coupe.",
      "Top with chilled Champagne or sparkling wine.",
      "Garnish with a lemon twist."
    ]
  },
  {
    slug: "propo-falala",
    title: "Propo-falala",
    course: "Aperitivo",
    type: "cocktail",
    blurb: "A holiday-leaning cocktail with crème de menthe, white rum, pandan, and coconut cream.",
    ingredients: [
      "1.5 oz white rum",
      "0.5 oz crème de menthe (white)",
      "0.5 oz pandan syrup (or simple syrup with a few drops of pandan extract)",
      "1 oz coconut cream",
      "Small pinch of salt",
      "Ice",
      "Shaved coconut or mint, for garnish (optional)"
    ],
    steps: [
      "Add the white rum, crème de menthe, pandan syrup, coconut cream, and a small pinch of salt to a shaker without ice.",
      "Shake briefly to combine, then add ice and shake again until well chilled and slightly frothy.",
      "Double strain into a chilled coupe or Nick & Nora glass.",
      "Garnish with shaved coconut or a small mint sprig, if desired."
    ]
  },
  {
    slug: "braised-beef-udon",
    title: "Braised Beef Udon",
    course: "Primo",
    type: "noodles",
    blurb: "Rich, aromatic braised beef shank in a soy-based broth served over udon.",
    ingredients: [
      "1.5-2 lbs beef shank or tendon, cut into large chunks",
      "6 cups beef broth",
      "",
      "// Spice oil",
      "1 tsp Sichuan peppercorns",
      "1 tsp fennel seeds",
      "2 bay leaves",
      "1 star anise pod",
      "1 small cinnamon stick",
      "1 tsao-ko (black cardamom) pod",
      "2 white cardamom pods",
      "Pinch ground nutmeg",
      "3 tbsp neutral oil",
      "",
      "// Aromatics and seasoning",
      "1 onion, roughly chopped",
      "2 carrots, cut into chunks",
      "4-5 slices fresh ginger",
      "1 small chili pepper, sliced",
      "Cilantro stems (small handful)",
      "350 ml water",
      "175 ml soy sauce",
      "1-2 tbsp fish sauce",
      "1-2 tbsp sugar",
      "2 scallions, cut into large pieces",
      "Salt, to taste",
      "White pepper, to taste",
      "",
      "// To serve",
      "4 portions udon noodles",
      "Cilantro leaves, for garnish",
      "Extra sliced scallions, for garnish"
    ],
    steps: [
      "In a small bowl, cover the Sichuan peppercorns, fennel seeds, bay leaves, star anise, cinnamon stick, tsao-ko, white cardamom, and nutmeg with hot water and let steep for a few minutes. Drain well.",
      "Heat the neutral oil in a small pan over medium heat. Add the drained spices and fry gently until fragrant, then strain the oil through cheesecloth, reserving the spiced oil and discarding the solids.",
      "In a large pot, combine the beef shank or tendon with the beef broth. Bring to a boil, then reduce to a gentle simmer and skim any foam.",
      "Add the onion, carrots, ginger, chili, and cilantro stems to the pot. Pour in 350 ml water, 175 ml soy sauce, fish sauce, and sugar. Stir to combine.",
      "In a separate pan, heat a few tablespoons of the reserved spice oil. Add the beef pieces (you can scoop them from the broth) and briefly stir-fry until lightly browned, then return them to the broth.",
      "Add the scallion pieces to the pot. Taste and adjust seasoning with salt, additional soy sauce, sugar, and white pepper as needed.",
      "Simmer until the beef is very tender (at least 1.5-2 hours). Remove the scallion pieces and any large ginger slices if desired, then add the meat back if you removed it.",
      "Cook the udon noodles separately according to package directions. Drain well.",
      "To serve, divide udon into bowls, ladle the braised beef and broth over the noodles, and garnish with cilantro leaves and sliced scallions."
    ]
  },
  {
    slug: "lemongrass-pork",
    title: "Lemongrass Pork",
    course: "Secondi",
    type: "meat",
    blurb: "Grilled pork shoulder steaks marinated with lemongrass, garlic, lime, and fish sauce.",
    ingredients: [
      "2 lbs pork shoulder steaks",
      "6 cloves garlic, minced",
      "Zest and juice of 1 lime",
      "4 tbsp fish sauce",
      "4 tbsp brown sugar",
      "1 tbsp soy sauce",
      "3 tbsp neutral oil",
      "5 tbsp grated lemongrass (tender inner stalks)",
      "1/2 tsp baking soda (optional, for tenderness)"
    ],
    steps: [
      "In a bowl, combine the garlic, lime zest and juice, fish sauce, brown sugar, soy sauce, neutral oil, grated lemongrass, and baking soda if using.",
      "Mix until the sugar is mostly dissolved and the marinade is even.",
      "Add the pork shoulder steaks and coat thoroughly on all sides. Marinate at least 1 hour and up to overnight in the refrigerator.",
      "Preheat a grill or grill pan over medium-high heat. Lightly oil the grates if needed.",
      "Grill the pork steaks, turning once, until nicely charred on the outside and cooked through, 4-6 minutes per side depending on thickness.",
      "Rest a few minutes, then slice and serve."
    ]
  },
  {
    slug: "pineapple-daiquiri",
    title: "Pineapple Daiquiri",
    course: "Aperitivo",
    type: "cocktail",
    blurb: "A tropical daiquiri with fresh pineapple juice and lime.",
    ingredients: [
      "2 oz white rum",
      "1.5 oz pineapple juice",
      "0.75 oz fresh lime juice",
      "0.75 oz simple syrup",
      "Ice"
    ],
    steps: [
      "Add all ingredients to a shaker with ice.",
      "Shake vigorously until well chilled.",
      "Strain into a chilled coupe or Nick & Nora glass.",
      "Serve immediately."
    ]
  },
  {
    slug: "pineapple-whiskey-sour",
    title: "Pineapple Whiskey Sour",
    course: "Aperitivo",
    type: "cocktail",
    blurb: "A whiskey sour brightened with pineapple and citrus.",
    ingredients: [
      "2 oz whiskey",
      "1 oz pineapple juice",
      "1 oz simple syrup",
      "0.5 oz fresh lemon juice",
      "0.5 oz lime concentrate",
      "1 oz egg white (optional)",
      "Ice"
    ],
    steps: [
      "Add all ingredients to a shaker.",
      "Shake with ice until well chilled and lightly frothy.",
      "Strain into a rocks glass over fresh ice or into a coupe.",
      "Serve immediately."
    ]
  },
  {
    slug: "moules-marinieres",
    title: "Moules Marinières",
    course: "Primo",
    type: "seafood",
    blurb: "Steamed mussels in white wine with garlic, shallot, and herbs.",
    ingredients: [
      "1 lb live mussels, scrubbed and debearded",
      "1 cup dry white wine",
      "4-5 garlic cloves, chopped",
      "1 small shallot, thinly sliced",
      "1-2 tbsp butter",
      "1-2 tbsp olive oil",
      "Red chili flakes, to taste",
      "Fresh parsley, chopped",
      "Lemon wedges",
      "Salt",
      "Black pepper"
    ],
    steps: [
      "Prepare the mussels by removing beards and scrubbing clean. Discard any cracked or open mussels that do not close.",
      "Melt the butter in a pot over moderate heat, without browning.",
      "Add garlic and shallot and cook briefly until fragrant.",
      "Pour in white wine and bring to a boil.",
      "Grate in lemon zest, add chili flakes, and grind in black pepper.",
      "Add olive oil, then add the mussels. Stir, cover, and steam until opened, about 4-5 minutes.",
      "Remove mussels with a slotted spoon; discard any unopened.",
      "Taste the broth, adjust with salt or lemon juice, stir in herbs, and pour over mussels.",
      "Serve with lemon wedges and crusty bread."
    ]
  },
  {
    slug: "zuppa-di-pesce",
    title: "Zuppa di Pesce",
    course: "Primo",
    type: "seafood-stew",
    blurb: "Italian fish stew with branzino, mussels, shrimp, tomato, and white wine.",
    ingredients: [
      "2 whole branzino, filleted (heads and bones reserved)",
      "2 lb mussels, scrubbed and debearded",
      "2 lb shrimp, peeled and deveined (shells reserved)",
      "",
      "// Fish Broth",
      "Branzino heads and bones",
      "Shrimp shells",
      "Parsley stems",
      "Cilantro stems",
      "1 small onion or shallot, chopped",
      "2 garlic cloves, smashed",
      "1 bay leaf",
      "8 black peppercorns",
      "2 tbsp olive oil",
      "8 cups cold water",
      "Pinch of salt",
      "",
      "// Soup Base",
      "1/2 cup extra-virgin olive oil",
      "2 medium onions or 3 shallots, sliced",
      "6 garlic cloves, sliced",
      "3 tbsp tomato paste",
      "4 cups tomato sauce",
      "1.5 cups dry white wine",
      "1 bay leaf",
      "Crushed red pepper flakes",
      "5-6 cups fish broth",
      "Salt and black pepper",
      "Lemon wedges",
      "Crusty bread"
    ],
    steps: [
      "Make the fish broth by sautéing onion and garlic in olive oil, adding bones and shells, aromatics, and cold water.",
      "Bring to a bare simmer and cook 20-25 minutes. Strain gently and keep hot.",
      "In a wide pot, heat olive oil and sauté onions with salt until soft and sweet.",
      "Add garlic and red pepper flakes, then tomato paste and cook until brick-red.",
      "Add tomato sauce and bay leaf, then deglaze with white wine and reduce by half.",
      "Add hot fish broth and simmer 15 minutes.",
      "Add mussels and cover until opened, 3-4 minutes.",
      "Add branzino and simmer gently 2-3 minutes.",
      "Add shrimp and cook until opaque, 4-5 minutes.",
      "Finish with lemon juice and olive oil. Serve immediately with bread."
    ]
  },
  {
    slug: "steak-with-chimichurri",
    title: "Steak with Chimichurri",
    course: "Secondi",
    type: "meat",
    blurb: "Grilled steak served with fresh herb chimichurri.",
    ingredients: [
      "Steak of choice, grilled",
      "",
      "// Chimichurri",
      "1 bunch parsley",
      "1/3 bunch cilantro",
      "4-5 garlic cloves",
      "1 part red wine vinegar",
      "3 parts olive oil",
      "Salt",
      "Black pepper",
      "Red pepper flakes"
    ],
    steps: [
      "Pick the leaves from parsley and cilantro. Coarsely chop garlic.",
      "Add herbs and garlic to a food processor with a splash of olive oil.",
      "Pulse until coarsely chopped, not a paste.",
      "Season with salt, black pepper, and red pepper flakes.",
      "Add red wine vinegar and olive oil until herbs are just covered.",
      "Process briefly to combine.",
      "Serve over grilled steak."
    ]
  },
  {
    slug: "pasta-provencale",
    title: "Pasta Provençale",
    course: "Primo",
    type: "pasta",
    blurb: "Pasta tossed with tomatoes, olive oil, garlic, herbs, and olives in the Provençal style.",
    ingredients: [
      "1 lb pasta (rigatoni, fusilli, or spaghetti)",
      "1/4 cup extra-virgin olive oil",
      "4 cloves garlic, thinly sliced",
      "1-2 shallots, finely chopped",
      "1/2 tsp red chili flakes",
      "1 lb ripe tomatoes, chopped (or good-quality canned tomatoes)",
      "1/3 cup olives (Niçoise or Kalamata), pitted and sliced",
      "2 tbsp capers, rinsed",
      "Salt",
      "Black pepper",
      "Fresh basil or parsley, chopped"
    ],
    steps: [
      "Bring a large pot of salted water to a boil and cook the pasta until al dente.",
      "Meanwhile, heat olive oil over medium heat and gently cook the shallots and garlic until fragrant but not browned.",
      "Add chili flakes and tomatoes; simmer until the sauce thickens slightly.",
      "Stir in olives and capers and cook briefly to combine.",
      "Drain the pasta, reserving a little cooking water.",
      "Toss pasta with the sauce, adding a splash of pasta water if needed.",
      "Season with salt and pepper and finish with fresh herbs before serving."
    ]
  },
  {
    slug: "garlic-lemon-broccolini",
    title: "Garlic and Lemon Broccolini",
    course: "Contorno",
    type: "vegetable",
    blurb: "Tender broccolini sautéed with garlic and finished with lemon.",
    ingredients: [
      "1.5 lb broccolini, trimmed",
      "2 tbsp olive oil",
      "3 cloves garlic, thinly sliced",
      "Salt",
      "Black pepper",
      "Zest and juice of 1 lemon",
      "Optional: red chili flakes"
    ],
    steps: [
      "Bring a pot of salted water to a boil and blanch broccolini for 1-2 minutes. Drain well.",
      "Heat olive oil in a wide pan over medium heat.",
      "Add garlic and cook gently until fragrant.",
      "Add broccolini and sauté until tender and lightly charred in spots.",
      "Season with salt, pepper, and optional chili flakes.",
      "Finish with lemon zest and juice just before serving."
    ]
  },
  {
    slug: "white-wine-braised-oxtail-osso-buco-style",
    title: "White Wine-Braised Oxtail, Osso Buco Style",
    course: "Secondi",
    type: "meat",
    blurb: "Slow-braised oxtail in white wine with aromatics, inspired by classic osso buco technique.",
    ingredients: [
      "4-5 lb oxtail, cut into segments",
      "Salt",
      "Black pepper",
      "Flour",
      "2-3 tbsp olive oil",
      "1 large onion, diced",
      "2 carrots, diced",
      "2 celery stalks, diced",
      "4 cloves garlic, smashed",
      "2 tbsp tomato paste",
      "2 cups dry white wine",
      "2 cups light beef or veal stock",
      "2 bay leaves",
      "1 sprig thyme",
      "Zest of 1 lemon",
      "Optional: chopped parsley for garnish"
    ],
    steps: [
      "Season the oxtail generously with salt and pepper and dredge lightly in flour.",
      "Heat olive oil in a heavy pot over medium-high heat and brown the oxtail deeply on all sides. Remove and set aside.",
      "Lower the heat to medium and add onion, carrot, and celery. Cook until softened and lightly golden.",
      "Add garlic and tomato paste; cook until the paste darkens slightly.",
      "Deglaze with white wine, scraping the bottom of the pot. Reduce by about half.",
      "Return the oxtail to the pot and add stock, bay leaves, and thyme. Liquid should mostly cover the meat.",
      "Bring to a gentle simmer, cover, and braise in a 325°F (165°C) oven for 3-3.5 hours, until the meat is very tender.",
      "Remove bay and thyme. Adjust seasoning.",
      "Finish with lemon zest and optional parsley before serving."
    ]
  },
  {
    slug: "chai-martini",
    title: "Chai Martini",
    course: "Aperitivo",
    type: "cocktail",
    blurb: "Vodka infused with black tea and warm spices, lightly sweetened and served chilled.",
    ingredients: [
      "2 oz chai-infused vodka (see step 1)",
      "0.5 oz simple syrup",
      "0.5 oz half-and-half or milk",
      "Ice",
      "Ground cinnamon or star anise, for garnish",
      "",
      "// For chai infusion",
      "1 cup vodka",
      "1 black tea bag",
      "2 green cardamom pods, lightly crushed",
      "1 small cinnamon stick",
      "2 cloves"
    ],
    steps: [
      "To make chai vodka: Combine vodka, tea bag, cardamom, cinnamon, and cloves. Steep 1-2 hours, strain, and chill.",
      "Add 2 oz chai vodka, simple syrup, and half-and-half to a shaker with ice.",
      "Shake until well chilled.",
      "Strain into a chilled martini glass.",
      "Garnish lightly with cinnamon or a small star anise."
    ]
  },
  {
    slug: "rum-mango-lassi",
    title: "Rum Mango Lassi",
    course: "Aperitivo",
    type: "cocktail",
    blurb: "A lightly spiced mango lassi with rum, saffron, and cardamom.",
    ingredients: [
      "1 oz Kesar mango pulp",
      "1 oz plain yogurt",
      "1 oz white rum",
      "1 oz water",
      "1 green cardamom pod, seeds crushed",
      "Tiny pinch saffron",
      "Ice"
    ],
    steps: [
      "Lightly crush the cardamom seeds.",
      "Add mango pulp, yogurt, rum, water, cardamom, saffron, and ice to a shaker.",
      "Shake until smooth and chilled.",
      "Strain into a small glass or serve over fresh ice."
    ]
  },
  {
    slug: "green-goddess-salad-smashed-potatoes",
    title: "Green Goddess Salad with Spiced Smashed Potatoes",
    course: "Antipasti",
    type: "salad",
    blurb: "Crisp romaine, herbed green goddess dressing, and spiced smashed potatoes with feta.",
    ingredients: [
      "// Dressing",
      "1/2 cup mayonnaise",
      "1/4 cup buttermilk",
      "10 basil leaves",
      "1/4 cup chives",
      "1/4 cup tarragon",
      "1/4 cup parsley",
      "2 tbsp dill",
      "3 garlic cloves",
      "1 tbsp white vinegar",
      "2 tsp honey",
      "1/4 tsp salt",
      "",
      "// Potatoes",
      "1.5 lb baby creamer potatoes",
      "4 tbsp olive oil",
      "1.5 tsp salt",
      "1/4 tsp red chili powder",
      "1 tsp garlic powder",
      "1/4 tsp cumin",
      "1/4 tsp coriander",
      "",
      "// Salad",
      "2 hearts romaine, chopped",
      "1/3 cup radishes, sliced",
      "1/3 cup red onion, thinly sliced",
      "1/3 cup crumbled feta",
      "Salt and black pepper"
    ],
    steps: [
      "Blend all dressing ingredients until smooth. Chill.",
      "Boil potatoes in salted water until fork-tender. Drain and dry.",
      "Smash potatoes on an oiled baking sheet. Brush with olive oil and sprinkle with spices.",
      "Bake at 425°F for 30-35 minutes until golden and crisp.",
      "Toss romaine with 1/2 cup dressing and season.",
      "Arrange lettuce, potatoes, radish, onion, and feta. Drizzle additional dressing if desired."
    ]
  },
  {
    slug: "jaffna-prawn-curry",
    title: "Jaffna Prawn Curry",
    course: "Secondi",
    type: "seafood",
    blurb: "Sri Lankan-style prawn curry with chili, curry leaves, and tomatoes, served with coconut rice.",
    ingredients: [
      "6 lb shrimp, cleaned and deveined",
      "1.5 heads garlic, minced",
      "6 medium onions, thinly sliced",
      "6 Roma tomatoes, sliced",
      "2 tbsp Jaffna chili powder",
      "Curry leaves (2 sprigs)",
      "3 tbsp olive oil",
      "Salt, to taste",
      "",
      "// Coconut Rice",
      "4 cups basmati rice",
      "2 cups coconut milk",
      "2 cups water",
      "1 tsp salt"
    ],
    steps: [
      "Rinse basmati rice until water runs clear.",
      "Combine rice, coconut milk, water, and salt. Bring to boil, cover, reduce to low, and cook 15 minutes. Rest 10 minutes.",
      "Heat oil in a large pot over medium heat.",
      "Add onions and cook until soft and lightly caramelized.",
      "Add garlic and curry leaves; cook until fragrant.",
      "Stir in tomatoes and cook until softened.",
      "Add Jaffna chili powder and cook 1-2 minutes.",
      "Add shrimp and salt; cook gently until just opaque (4-5 minutes). Do not overcook.",
      "Adjust salt and serve immediately over coconut rice."
    ]
  },
  {
    slug: "aguachiles",
    title: "Aguachiles",
    course: "Primo",
    type: "seafood",
    blurb: "Fresh shrimp cured in lime with serrano, cilantro, cucumber, and avocado.",
    ingredients: [
      "1 pack raw shrimp, peeled and deveined",
      "1/4 red onion, thinly sliced",
      "1/2 avocado, sliced",
      "1 cucumber, thinly sliced",
      "Juice of 6 limes",
      "3-4 serrano chiles",
      "1 cup cilantro leaves and stems",
      "Salt, to taste",
      "Tostadas or tortilla chips, for serving"
    ],
    steps: [
      "Butterfly the shrimp lengthwise so they lay flat.",
      "Place shrimp in a shallow bowl and season lightly with salt.",
      "Submerge shrimp in lime juice and let sit for 15 minuteswhile preparing the marinade.",
      "Blend lime juice, serrano chiles, cilantro, and a pinch of salt until smooth.",
      "Pour the lime mixture over the shrimp.",
      "Arrange cucumber, red onion, and avocado around the shrimp.",
      "Serve immediately with tostadas or chips."
    ]
  },
  {
    slug: "hugo-spritz",
    title: "Hugo Spritz",
    course: "Aperitivo",
    type: "drink",
    blurb: "A bright elderflower spritz with prosecco, mint, lime, and soda.",
    ingredients: [
      "4 oz prosecco, chilled",
      "3/4 oz St-Germain elderflower liqueur",
      "1 oz soda water",
      "6-8 fresh mint leaves",
      "1 lime wheel",
      "Ice"
    ],
    steps: [
      "Fill a large wine glass generously with ice.",
      "Add St-Germain and mint leaves; stir gently without crushing the mint.",
      "Add prosecco and soda water.",
      "Stir briefly and garnish with a lime wheel and fresh mint."
    ]
  },
  {
    slug: "limonada-suica",
    title: "Limonada Suíça",
    course: "Aperitivo",
    type: "drink",
    blurb: "Brazilian-style limeade with condensed milk, coconut, and white rum.",
    ingredients: [
      "25 limes, thoroughly washed",
      "19 cups cold water",
      "6 cups ice",
      "20 oz sweetened condensed milk",
      "20 oz cream of coconut",
      "750 ml white rum",
      "1/2-3/4 cup sugar, to taste"
    ],
    steps: [
      "Cut the limes into quarters. Work in batches so the blender is not overcrowded.",
      "Briefly pulse the limes with some of the cold water for about 10-15 seconds; avoid prolonged blending, which can make the lime peel bitter.",
      "Strain through a fine-mesh strainer, pressing lightly, and discard the solids.",
      "Combine the strained lime liquid with the remaining water, condensed milk, cream of coconut, rum, and 1/2 cup sugar.",
      "Blend or whisk until completely combined. Taste and add additional sugar if needed.",
      "Chill thoroughly. Add the ice shortly before serving and stir well."
    ]
  },
  {
    slug: "fennel-citrus-pistachio-salad",
    title: "Insalata di Finocchio, Agrumi e Pistacchio",
    course: "Antipasto",
    type: "salad",
    blurb: "Shaved fennel and radicchio with citrus, mint, pistachios, and a bright vinaigrette.",
    ingredients: [
      "5 large fennel bulbs, trimmed and very thinly sliced",
      "3 heads radicchio, thinly sliced",
      "6 oranges",
      "3 grapefruit",
      "1 1/2 cups roasted pistachios, roughly chopped",
      "1 bunch fresh mint, leaves picked",
      "1/2 cup extra-virgin olive oil",
      "1/4 cup reserved citrus juice",
      "2 tbsp sherry vinegar",
      "Kosher salt",
      "Freshly ground black pepper"
    ],
    steps: [
      "Supreme the oranges and grapefruit over a bowl, reserving at least 1/4 cup of the citrus juice.",
      "Up to one day ahead, shave the fennel and slice the radicchio. Keep refrigerated separately in airtight containers.",
      "Whisk together olive oil, reserved citrus juice, sherry vinegar, salt, and black pepper.",
      "Shortly before serving, toss fennel and radicchio lightly with enough dressing to coat.",
      "Arrange on large platters with citrus segments, mint leaves, and pistachios.",
      "Drizzle with a little additional vinaigrette and serve immediately."
    ]
  },
  {
    slug: "galbi",
    title: "Galbi",
    course: "Secondo",
    type: "meat",
    blurb: "Korean-style grilled flanken short ribs in a sweet soy, mirin, garlic, onion, and kiwi marinade.",
    ingredients: [
      "4 lb LA-style flanken-cut beef short ribs",
      "1 1/2 cups soy sauce",
      "1 1/2 cups sugar",
      "1/2 cup mirin",
      "1 medium onion",
      "1 kiwi, peeled",
      "1 head garlic, peeled (about 10-12 cloves)",
      "4 scallions, thinly sliced"
    ],
    steps: [
      "Blend the onion, kiwi, and garlic until smooth.",
      "Combine the puree with soy sauce, sugar, and mirin; stir until the sugar is mostly dissolved.",
      "Stir in the sliced scallions.",
      "Place the short ribs in large zip-top bags or nonreactive containers and pour the marinade over them.",
      "Refrigerate for 4-8 hours, turning occasionally. Because kiwi is a strong tenderizer, avoid an extended overnight marinade.",
      "Remove the ribs from the marinade and allow excess marinade to drip away.",
      "Grill over high heat until deeply browned and lightly charred, approximately 2-3 minutes per side depending on thickness.",
      "Transfer to platters and serve immediately."
    ]
  },
  {
    slug: "charred-broccolini-sesame-lemon",
    title: "Charred Broccolini with Sesame & Lemon",
    course: "Contorno",
    type: "vegetable",
    blurb: "Charred broccolini finished with sesame, scallion, soy, and fresh lemon.",
    ingredients: [
      "4 lb broccolini, ends trimmed",
      "1/3 cup neutral oil",
      "2 tbsp toasted sesame oil",
      "2 tbsp soy sauce",
      "3 lemons, zest and juice",
      "8 scallions, thinly sliced",
      "1/3 cup toasted sesame seeds",
      "Kosher salt"
    ],
    steps: [
      "Bring a large pot of salted water to a boil and prepare an ice bath.",
      "Blanch the broccolini for 60-90 seconds, then immediately transfer to the ice bath.",
      "Drain extremely well and pat dry. The broccolini can be refrigerated at this stage for up to one day.",
      "Shortly before serving, toss the broccolini with neutral oil and a light seasoning of salt.",
      "Roast at 475°F, broil, or grill over high heat until the florets and stems develop dark charred edges.",
      "Whisk together sesame oil, soy sauce, lemon juice, and lemon zest.",
      "Transfer the hot broccolini to serving platters and drizzle lightly with the sesame-lemon mixture.",
      "Finish with scallions and toasted sesame seeds."
    ]
  },
  {
    slug: "beef-lumpiang-shanghai",
    title: "Beef Lumpiang Shanghai (100 Pieces)",
    course: "Antipasti",
    type: "meat",
    blurb: "Crisp Filipino beef spring rolls with garlic, vegetables, and a spiced vinegar dipping sauce. Makes approximately 100 pieces.",
    ingredients: [
      // Filling
      "4 lbs ground beef (85/15)",
      "2 medium yellow onions",
      "3 large carrots",
      "2 bunches scallions",
      "12 cloves garlic",
      "2 large eggs",
      "1/4 cup soy sauce",
      "1 tbsp sugar",
      "1-1.5 tsp kosher salt, to taste",
      "2 tsp black pepper",
      "2-3 tbsp cornstarch, plus more as needed",

      // Wrapping and frying
      "110-120 thin lumpia wrappers",
      "2 tbsp cornstarch + 3 tbsp water (sealing slurry)",
      "Neutral oil, for frying",

      // Filipino spiced vinegar sauce
      "1 cup cane vinegar or rice vinegar",
      "1/2 cup water",
      "5 garlic cloves, minced",
      "1 small shallot, minced",
      "2-3 Thai chilies, sliced",
      "2 tsp sugar",
      "1/2 tsp salt",
      "Black pepper, to taste",
    ],
    steps: [
      "Prepare vegetables: peel the onions, carrots, and garlic. Roughly chop the onions, carrots, and scallions. Process with the garlic into a fine, nearly smooth purée without adding water.",
      "Drain vegetables: transfer the purée to a fine-mesh strainer or cheesecloth and squeeze out excess liquid, particularly from the onions.",
      "Make filling: combine the beef, drained vegetable purée, eggs, soy sauce, sugar, kosher salt, black pepper, and 2-3 tbsp cornstarch. Mix thoroughly for approximately 2 minutes, until uniform and slightly sticky. If the filling seems wet, add more cornstarch 1 tbsp at a time until it holds together.",
      "Chill and test: refrigerate the filling for 20-30 minutes to firm up. Fry a small test patty, taste, and adjust salt, soy sauce, or pepper as needed before wrapping.",
      "Make spiced vinegar sauce: combine the vinegar, water, sugar, and salt; stir until dissolved. Add the minced garlic, shallot, and sliced chilies. Season with black pepper and refrigerate for 30-60 minutes or longer. Taste and adjust acidity, salt, and sweetness.",
      "Prepare wrappers: carefully separate the lumpia wrappers and keep unused wrappers covered with a damp towel. Stir together 2 tbsp cornstarch and 3 tbsp water to make the sealing slurry.",
      "Wrap: place approximately 1 heaping tablespoon (25-30 g) filling near one edge of each wrapper and shape into a thin, even cylinder. Fold the sides inward, roll tightly without overfilling, and seal the final edge with slurry. Repeat to make approximately 100 lumpia, keeping finished rolls covered to prevent drying.",
      "Fry: heat neutral oil to 350°F (175°C). Fry in batches without overcrowding for approximately 4-6 minutes, depending on size, until golden brown and crispy. Verify that the beef filling reaches an internal temperature of 160°F.",
      "Serve: transfer fried lumpia to a wire rack to drain and preserve crispness. Serve hot with the spiced vinegar sauce.",
      "Make ahead / freezing: arrange uncooked lumpia in a single layer on parchment-lined trays and freeze until solid, then transfer to freezer-safe bags. Fry directly from frozen at 350°F, allowing additional cooking time and verifying that the filling reaches 160°F.",
    ],
  },
  {
    slug: "ossobuco-in-bianco",
    title: "Ossobuco in Bianco",
    course: "Secondo",
    type: "meat",
    blurb: "White wine-braised veal shank with aromatic vegetables, silky reduced jus, and fresh lemon gremolata. Serves 4-6; prep 25 minutes; cook 2.5-3.5 hours.",
    ingredients: [
      "4-6 cross-cut veal shanks (4-5 lbs total, 1.5-2 inches thick)",
      "Kosher salt and freshly ground black pepper",
      "3 tbsp olive oil",
      "2 cups dry white wine (Pinot Grigio or unoaked Chardonnay)",
      "2-3 cups unsalted chicken or veal stock",
      "1 tbsp unsalted butter (optional, for finishing)",
      "1-2 tsp white wine vinegar or lemon juice (optional, for finishing)",
      "2 medium yellow onions, finely diced",
      "2 medium carrots, finely diced",
      "3 celery stalks, finely diced",
      "1 leek, white and light green parts finely chopped (optional)",
      "6 garlic cloves, lightly crushed",
      "5-6 sprigs fresh thyme",
      "1 small sprig fresh rosemary",
      "2 bay leaves",
      "6-8 parsley stems",
      "1 small Parmesan rind (optional)",
      "Gremolata: 1/2 cup flat-leaf parsley, finely chopped",
      "Gremolata: zest of 1 lemon",
      "Gremolata: 1 small garlic clove, finely grated",
      "Gremolata: 1 tbsp extra-virgin olive oil (optional)"
    ],
    steps: [
      "Prepare veal: Pat shanks thoroughly dry and season generously with salt and pepper. Ideally, refrigerate uncovered for 8-24 hours. Tie kitchen twine around each shank to preserve its shape, if desired. Remove from refrigerator 30 minutes before cooking.",
      "Sear veal: Preheat oven to 325°F (163°C). Heat olive oil in a large Dutch oven over medium-high heat. Sear shanks in batches for 3-4 minutes per side until deeply golden. Avoid overcrowding. Transfer to a plate, reserving accumulated juices.",
      "Cook aromatics: Reduce heat to medium-low, leaving approximately 2 tbsp fat in the pot. Add onions, carrots, celery, and optional leek. Cook 10-15 minutes until softened and lightly golden. Add garlic and cook 1-2 minutes more.",
      "Deglaze: Increase heat to medium-high. Add white wine, scraping up the browned fond. Simmer uncovered for 8-12 minutes until reduced by approximately half.",
      "Assemble braise: Return shanks and juices to the pot in a single layer. Add thyme, rosemary, bay leaves, parsley stems, and optional Parmesan rind. Add stock until liquid reaches halfway to two-thirds up the shanks. Bring to a gentle simmer, cover, and transfer to oven.",
      "Braise: Cook at 325°F for 2-3 hours, checking tenderness after 1 hour 45 minutes. Carefully turn shanks halfway through cooking. Add warm stock if liquid reduces excessively. The meat should be fork-tender while remaining attached to the bone.",
      "Prepare sauce: Transfer shanks to a warm platter. Remove herbs, bay leaves, and Parmesan rind. Strain braising liquid through a fine-mesh sieve, gently pressing vegetables to extract juices. Optionally retain some vegetables for a rustic sauce. Skim excess fat.",
      "Reduce sauce: Simmer strained liquid over medium heat for 10-20 minutes until lightly coating the back of a spoon. Adjust salt and pepper. Add 1-2 tsp white wine vinegar or lemon juice if needed for balance. Optionally whisk in 1 tbsp cold butter off heat.",
      "Prepare gremolata: Combine finely chopped parsley, lemon zest, and grated garlic. Add olive oil if desired. Mix and refrigerate until serving. Prepare shortly before serving for optimal freshness.",
      "Finish: Return shanks to reduced sauce and warm gently for 5-10 minutes, spooning sauce over the meat. Remove kitchen twine. Serve over Parmesan polenta, saffron risotto, or mashed potatoes. Spoon sauce over each shank and finish with fresh gremolata.",
    ]
  },
  {
    slug: "korean-pear-yuja-highball",
    title: "Korean Pear & Yuja Highball",
    course: "Aperitivo",
    type: "drink",
    blurb: "Distilled soju with Korean pear, yuja, lemon, and sparkling water.",
    ingredients: [
      "2 oz distilled soju",
      "1 oz Korean pear juice",
      "1/2 oz fresh lemon juice",
      "1/4 oz yuja-cheong (sweetened Korean citron preserve)",
      "2 oz chilled soda water",
      "Ice",
      "Thin Korean pear slice, for garnish",
      "Perilla leaf, for garnish"
    ],
    steps: [
      "Combine soju, Korean pear juice, lemon juice, and yuja-cheong in a cocktail shaker.",
      "Add ice and shake vigorously until well chilled and the yuja-cheong is fully incorporated.",
      "Strain into a highball glass filled with fresh ice.",
      "Top with 2 oz chilled soda water and stir gently.",
      "Garnish with a thin slice of Korean pear and a fresh perilla leaf."
    ]
  },
  {
    slug: "baesuk-pear-ginger-fizz",
    title: "Baesuk Pear & Ginger Fizz",
    course: "Aperitivo",
    type: "drink",
    blurb: "A Korean pear mocktail with warming ginger, bright lemon, sparkling water, and a hint of black pepper.",
    ingredients: [
      "2 oz Korean pear juice",
      "1/4-1/2 oz homemade ginger syrup",
      "1/2 oz fresh lemon juice",
      "3 oz chilled sparkling water",
      "Tiny pinch freshly ground black pepper",
      "Ice"
    ],
    steps: [
      "Combine Korean pear juice, ginger syrup, and lemon juice in a shaker.",
      "Add ice and shake briefly until chilled.",
      "Strain into a highball glass filled with fresh ice.",
      "Top with 3 oz sparkling water and stir gently.",
      "Finish with a tiny pinch of freshly ground black pepper.",
      "Taste and adjust ginger or sweetness as needed."
    ]
  },
  //DICE-Latin-Caribbean-Night
  {
    slug: "peruvian-ceviche",
    title: "Peruvian Ceviche",
    course: "Antipasti",
    type: "seafood",
    blurb: "Peruvian fish ceviche with lime, red onion, chili, and cilantro.",
    ingredients: [
      "1 1/2 lbs white fish suitable for raw consumption, diced",
      "1 red onion, thinly sliced",
      "1 cup fresh lime juice",
      "1-2 habanero or ají limo peppers, deseeded and sliced",
      "1/4 cup fresh cilantro, chopped",
      "Salt, to taste",
      "Boiled sweet potato and corn, for serving"
    ],
    steps: [
      "Cut the chilled fish into 1/2-inch cubes. Thinly slice the onion and peppers.",
      "Combine fish, onion, peppers, lime juice, and salt. Refrigerate for 5-15 minutes.",
      "Stir in cilantro and adjust seasoning. Serve immediately with sweet potato and corn."
    ]
  },
  {
    slug: "colombian-empanadas",
    title: "Colombian Empanadas",
    course: "Antipasti",
    type: "meat",
    blurb: "Colombian corn empanadas filled with seasoned beef and potatoes.",
    ingredients: [
      "1 1/2 cups precooked yellow cornmeal (masarepa)",
      "2 cups warm water",
      "1 tbsp vegetable oil, plus oil for frying",
      "1/2 tsp salt",
      "1/2 tbsp sazón with achiote",
      "2 cups potatoes, peeled and diced",
      "1/2 lb ground beef",
      "1/4 cup white onion, chopped",
      "1 cup tomato, chopped",
      "1 garlic clove, minced",
      "2 tbsp cilantro, chopped",
      "Salt and black pepper"
    ],
    steps: [
      "Mix masarepa, water, oil, salt, and sazón into a smooth dough. Cover and rest for 20 minutes.",
      "Boil potatoes until tender, about 20 minutes. Drain and mash.",
      "Sauté onion, tomato, and garlic. Add beef, season, and cook until browned and fairly dry. Mix with potatoes and cilantro.",
      "Flatten small dough balls between sheets of plastic. Fill with beef mixture, fold into half-moons, and seal.",
      "Fry at 350°F until crisp and golden, about 3-5 minutes per batch."
    ]
  },
  {
    slug: "pupusas",
    title: "Pupusas",
    course: "Antipasti",
    type: "vegetarian",
    blurb: "Salvadoran corn cakes stuffed with beans and cheese.",
    ingredients: [
      "3 cups masa harina",
      "2 3/4 cups warm water",
      "2 tsp salt",
      "1 cup shredded mozzarella",
      "1/2 cup refried beans",
      "2 tbsp neutral oil"
    ],
    steps: [
      "Combine masa harina, salt, and warm water into a soft dough. Rest for 5 minutes.",
      "Divide into 14 balls. Flatten each, add beans and cheese, and seal the filling inside.",
      "Gently flatten into thick discs.",
      "Cook in a lightly oiled skillet over medium heat for 3-4 minutes per side until browned."
    ]
  },
  {
    slug: "arepas",
    title: "Arepas",
    course: "Antipasti",
    type: "vegetarian",
    blurb: "Colombian and Venezuelan corn cakes with a crisp crust and soft center.",
    ingredients: [
      "2 cups precooked white cornmeal (masarepa)",
      "2 1/2 cups lukewarm water",
      "1 tsp salt",
      "1/4 cup vegetable oil, as needed for frying"
    ],
    steps: [
      "Dissolve salt in water. Gradually mix in masarepa until a soft dough forms. Rest for 5 minutes.",
      "Divide into 8 balls and flatten into discs about 3/8 inch thick.",
      "Pan-fry in a lightly oiled skillet over medium heat for 5-7 minutes per side until golden and cooked through.",
      "Serve warm, plain or split open for filling."
    ]
  },
  {
    slug: "cuban-sandwiches",
    title: "Cuban Sandwiches",
    course: "Antipasti",
    type: "meat",
    blurb: "Cuban-American pressed sandwiches with roast pork, ham, Swiss cheese, and pickles.",
    ingredients: [
      "1 large loaf Cuban bread",
      "1 lb cooked roast pork, sliced",
      "1 lb sliced ham",
      "4 oz Swiss cheese, sliced",
      "4 oz dill pickles, sliced",
      "2 tbsp yellow mustard",
      "4 tbsp butter"
    ],
    steps: [
      "Slice bread lengthwise and spread mustard on the inside.",
      "Layer roast pork, ham, Swiss cheese, and pickles. Close the sandwich.",
      "Butter the exterior and press in a sandwich press or weighted skillet for 5-6 minutes per side until crisp and the cheese melts.",
      "Slice diagonally into smaller portions for serving."
    ]
  },
  {
    slug: "tallarines-verdes",
    title: "Tallarines Verdes",
    course: "Primo",
    type: "pasta",
    blurb: "Peruvian pasta with creamy spinach, basil, and queso fresco sauce.",
    ingredients: [
      "1 lb spaghetti or linguine",
      "2 cups packed spinach",
      "1 cup packed fresh basil",
      "5 oz queso fresco",
      "2 garlic cloves",
      "1/2 shallot",
      "1/4 cup walnuts",
      "1/4 cup olive oil",
      "1/4 cup evaporated milk",
      "Salt and black pepper"
    ],
    steps: [
      "Cook pasta in salted water until al dente. Reserve 1/2 cup pasta water.",
      "Blend spinach, basil, queso fresco, garlic, shallot, walnuts, olive oil, and evaporated milk until smooth.",
      "Season with salt and pepper.",
      "Toss with hot pasta, adding reserved pasta water as needed to loosen the sauce."
    ]
  },
  {
    slug: "birria-tacos",
    title: "Birria Tacos",
    course: "Primo",
    type: "meat",
    blurb: "Mexican braised beef tacos with chilies, melted cheese, and consommé.",
    ingredients: [
      "1 1/2 lbs beef shank",
      "1 lb beef chuck or sirloin",
      "3 dried guajillo chilies, deseeded",
      "2 chipotle peppers in adobo",
      "1/4 cup vinegar",
      "1/2 cup crushed tomatoes",
      "5 garlic cloves",
      "1 tsp dried oregano",
      "1 tsp ground cumin",
      "1/2 tsp smoked paprika",
      "1 onion, chopped",
      "1 cinnamon stick",
      "2 bay leaves",
      "6 whole cloves",
      "3-4 cups chicken or beef stock",
      "Salt and black pepper",
      "12-16 corn tortillas",
      "1 cup shredded Oaxaca or mozzarella cheese",
      "Chopped onion and cilantro, for serving"
    ],
    steps: [
      "Soak guajillo chilies in hot water for 15 minutes. Blend with chipotles, vinegar, tomatoes, garlic, oregano, cumin, and paprika until smooth.",
      "Season beef with salt and pepper. Coat with chili mixture and marinate for at least 2 hours.",
      "Sauté onion in a large pot. Add beef, marinade, cinnamon, bay leaves, cloves, and enough stock to nearly cover.",
      "Cover and simmer gently for 3-4 hours until the beef shreds easily. Remove bones and whole spices, then shred the meat.",
      "Dip tortillas in the fat from the braising liquid. Fill with beef and cheese, fold, and fry in a skillet until crisp.",
      "Serve with chopped onion, cilantro, and warm consommé for dipping."
    ]
  },
  {
    slug: "jamaican-jerk-chicken",
    title: "Jamaican Jerk Chicken",
    course: "Secondo",
    type: "poultry",
    blurb: "Jamaican-style roasted chicken with allspice, thyme, and warm spices.",
    ingredients: [
      "10 chicken drumsticks",
      "1/3 cup olive oil",
      "2 tbsp brown sugar",
      "1 tbsp dried thyme",
      "2 tsp ground allspice",
      "2 tsp smoked paprika",
      "1 tsp ground ginger",
      "1 tsp ground cloves",
      "1/2 tsp ground cinnamon",
      "1 tsp cayenne pepper",
      "1 tsp garlic powder",
      "1 tsp onion powder",
      "2 tsp kosher salt",
      "1/4 tsp black pepper"
    ],
    steps: [
      "Preheat oven to 425°F.",
      "Combine olive oil, brown sugar, thyme, spices, salt, and pepper into a paste.",
      "Pat chicken dry and rub seasoning thoroughly over and underneath the skin.",
      "Arrange on a baking sheet and roast for 40-50 minutes until browned and cooked through, reaching at least 165°F internally.",
      "Serve with pan juices."
    ]
  },
  {
    slug: "haitian-poul-nan-sos",
    title: "Poul Nan Sos",
    course: "Secondo",
    type: "poultry",
    blurb: "Haitian chicken braised with citrus, peppers, garlic, and tomato.",
    ingredients: [
      "3 lbs bone-in chicken thighs and drumsticks",
      "2 yellow onions, thinly sliced",
      "2 Scotch bonnet or habanero peppers, sliced",
      "8 garlic cloves, sliced",
      "1/4 cup fresh thyme leaves",
      "1 orange",
      "1 lime",
      "1 lemon",
      "2 red bell peppers, sliced",
      "2 yellow bell peppers, sliced",
      "1/2 cup tomato paste",
      "2 cups chicken stock",
      "1/3 cup olive oil",
      "Kosher salt, to taste",
      "Fresh parsley, for serving"
    ],
    steps: [
      "Season chicken with salt. Squeeze citrus over chicken and rub with the cut halves. Add onion, garlic, chilies, and thyme. Marinate refrigerated for 12-24 hours.",
      "Preheat oven to 375°F. Remove chicken from marinade, reserving the marinade. Pat chicken dry.",
      "Heat olive oil in an ovenproof pot and brown chicken skin-side down for about 8 minutes. Remove.",
      "Add tomato paste and cook for 2-3 minutes. Add bell peppers and reserved marinade, cooking until slightly softened.",
      "Return chicken to pot. Add stock, cover, and braise in the oven for about 1 hour until tender and cooked through.",
      "Adjust seasoning and garnish with parsley."
    ]
  },
  {
    slug: "jamaican-oxtail",
    title: "Jamaican Oxtail",
    course: "Secondo",
    type: "meat",
    blurb: "Jamaican braised oxtail with allspice, thyme, and butter beans.",
    ingredients: [
      "2 1/2 lbs oxtail",
      "1/4 cup brown sugar",
      "1 tbsp soy sauce",
      "1 tbsp Worcestershire sauce",
      "1 tsp ground allspice",
      "2 tsp garlic powder",
      "1 tsp black pepper",
      "1 tsp browning sauce",
      "2 tbsp vegetable oil",
      "1 yellow onion, chopped",
      "4 scallions, chopped",
      "3 garlic cloves, minced",
      "2 carrots, chopped",
      "1 Scotch bonnet or habanero pepper, deseeded",
      "2 cups beef stock, plus more as needed",
      "1 tbsp ketchup",
      "1 tsp dried thyme",
      "1 can (16 oz) butter beans, drained",
      "1 tbsp cornstarch mixed with 2 tbsp water",
      "Salt, to taste"
    ],
    steps: [
      "Season oxtail with brown sugar, soy sauce, Worcestershire, allspice, garlic powder, black pepper, and browning sauce.",
      "Heat oil in a Dutch oven and brown oxtail on all sides. Remove.",
      "Sauté onion, scallions, garlic, carrots, and Scotch bonnet until softened.",
      "Return oxtail to pot with stock, ketchup, and thyme. Cover and simmer gently for 3-4 hours until tender, adding stock as needed.",
      "Stir in butter beans and cornstarch slurry. Simmer for 5-10 minutes until sauce thickens. Adjust salt and serve."
    ]
  },
  {
    slug: "cuban-picadillo",
    title: "Cuban Picadillo",
    course: "Secondo",
    type: "meat",
    blurb: "Cuban ground beef with tomato, green olives, raisins, and spices.",
    ingredients: [
      "1 lb ground beef",
      "1 tbsp olive oil",
      "1 small onion, chopped",
      "1/2 green bell pepper, chopped",
      "1 garlic clove, minced",
      "8 oz tomato sauce",
      "6 green olives, quartered",
      "1/2 cup raisins",
      "1 tbsp capers",
      "1 tsp sazón seasoning",
      "1 tsp ground cumin",
      "1 tsp sugar",
      "Salt, to taste"
    ],
    steps: [
      "Heat olive oil in a skillet. Sauté onion, bell pepper, and garlic until softened, about 5 minutes.",
      "Add ground beef and cook until browned, breaking into small pieces.",
      "Stir in tomato sauce, olives, raisins, capers, sazón, cumin, and sugar.",
      "Cover and simmer for 10 minutes. Adjust salt and serve with rice."
    ]
  },
  {
    slug: "rum-guava-spareribs",
    title: "Rum and Guava Spareribs",
    course: "Secondo",
    type: "meat",
    blurb: "Dominican-inspired pork ribs with a sweet rum and guava glaze.",
    ingredients: [
      "5 lbs pork spareribs, membranes removed",
      "2 tsp adobo seasoning",
      "1/2 cup fresh cilantro",
      "1/2 red onion",
      "1/2 green bell pepper",
      "4 garlic cloves",
      "3 tbsp olive oil, for sofrito",
      "1 tbsp olive oil, for glaze",
      "1 cup yellow onion, chopped",
      "1/4 cup dill pickles, chopped",
      "2 garlic cloves, minced",
      "2/3 cup guava purée",
      "1/3 cup aged rum",
      "1/2 cup ketchup",
      "2 tbsp Dijon mustard",
      "2 tbsp brown sugar",
      "1 tbsp Maggi seasoning",
      "Salt and black pepper"
    ],
    steps: [
      "Preheat oven to 275°F. Season ribs with adobo.",
      "Blend cilantro, red onion, bell pepper, 4 garlic cloves, and 3 tbsp olive oil into a sofrito. Rub over ribs.",
      "Wrap ribs tightly in foil and bake for 3-3 1/2 hours until tender.",
      "For the glaze, sauté yellow onion, pickles, and remaining garlic in 1 tbsp olive oil. Add guava purée, rum, ketchup, mustard, brown sugar, and Maggi. Simmer 10 minutes until thickened.",
      "Unwrap ribs, brush with glaze, and broil or grill for 5-8 minutes until caramelized. Season to taste and serve."
    ]
  },
  {
    slug: "lomo-saltado",
    title: "Lomo Saltado",
    course: "Secondo",
    type: "meat",
    blurb: "Peruvian stir-fried beef with tomatoes, onions, soy sauce, and fries.",
    ingredients: [
      "1 lb sirloin steak, sliced into strips",
      "2 tbsp vegetable oil",
      "1/2 red onion, sliced",
      "1 medium tomato, sliced",
      "2 garlic cloves, minced",
      "1 tbsp ají amarillo paste",
      "2 tbsp soy sauce",
      "1 tbsp white vinegar",
      "1 tbsp fresh cilantro, chopped",
      "1 lb cooked French fries",
      "Salt and black pepper",
      "Cooked white rice, for serving"
    ],
    steps: [
      "Heat 1 tbsp oil in a large skillet over high heat. Season beef with salt and pepper and sear until browned. Remove.",
      "Add remaining oil and sauté red onion until lightly browned, about 3-5 minutes.",
      "Add tomato, garlic, and ají amarillo paste. Cook until tomatoes soften but retain their shape.",
      "Add soy sauce and vinegar. Simmer for 1 minute.",
      "Return beef to pan with hot fries and cilantro. Toss gently and serve immediately with rice."
    ]
  },
  {
    slug: "ropa-vieja",
    title: "Ropa Vieja",
    course: "Secondo",
    type: "meat",
    blurb: "Cuban shredded beef braised with peppers, tomato, and spices.",
    ingredients: [
      "2 lbs flank steak",
      "Water, enough to cover the beef",
      "1/3 cup olive oil",
      "1 yellow onion, diced",
      "1 green bell pepper, sliced",
      "7 oz jarred red pimientos, sliced",
      "4 garlic cloves, minced",
      "8 oz tomato sauce",
      "1/2 cup dry white cooking wine",
      "1 tsp ground cumin",
      "1 tsp dried oregano",
      "1 bay leaf",
      "Salt and black pepper"
    ],
    steps: [
      "Place beef in a pot, cover with water, and season with salt. Simmer gently for about 2 hours until tender.",
      "Remove beef and shred with two forks. Reserve some cooking liquid.",
      "Heat olive oil in a large skillet. Sauté onion, green pepper, pimientos, and garlic until softened.",
      "Add tomato sauce, wine, cumin, oregano, and bay leaf. Simmer for 15 minutes.",
      "Stir in shredded beef and cook for another 10-15 minutes, adding reserved liquid if needed. Season and serve."
    ]
  },
  {
    slug: "arroz-con-gandules",
    title: "Arroz con Gandules",
    course: "Contorno",
    type: "rice",
    blurb: "Puerto Rican rice with pigeon peas, sofrito, and sazón.",
    ingredients: [
      "2 cups parboiled rice",
      "1 can (15 oz) pigeon peas, drained",
      "1/3 cup sofrito",
      "1 tbsp olive oil",
      "1/3 cup diced country ham or bacon",
      "2 tbsp tomato paste",
      "1 1/2 tsp sazón with achiote",
      "1 tsp dried oregano",
      "2 bay leaves",
      "3 cups chicken broth or water",
      "Salt, to taste"
    ],
    steps: [
      "Heat olive oil in a caldero or Dutch oven. Sauté ham or bacon with sofrito for 3-4 minutes.",
      "Stir in tomato paste, sazón, oregano, bay leaves, pigeon peas, and broth. Bring to a boil.",
      "Add rice and stir to distribute evenly. Cook uncovered until most visible liquid is absorbed.",
      "Stir once, cover, and reduce heat to low. Steam for 20-25 minutes until rice is tender and fluffy.",
      "Rest covered for 5 minutes before serving."
    ]
  },
  {
    slug: "maduros-mint-mojo",
    title: "Maduros with Mint Mojo",
    course: "Contorno",
    type: "vegetarian",
    blurb: "Caribbean-style fried sweet plantains with Cuban-inspired mint mojo.",
    ingredients: [
      "2 very ripe plantains",
      "Neutral oil, for frying",
      "1/2 cup fresh mint leaves",
      "1 cup fresh parsley",
      "1 1/2 tbsp lemon juice",
      "2 tbsp orange juice",
      "2 garlic cloves",
      "1/4 cup capers",
      "1 small onion",
      "1/2 cup olive oil"
    ],
    steps: [
      "Peel plantains and slice diagonally into 1/2-inch pieces.",
      "Heat neutral oil in a skillet over medium heat. Fry plantains for 3-5 minutes per side until golden and caramelized.",
      "Blend mint, parsley, lemon juice, orange juice, garlic, capers, onion, and olive oil into a smooth sauce.",
      "Serve warm plantains with mint mojo."
    ]
  },
  {
    slug: "green-tomato-salsa-verde",
    title: "Green Tomato Salsa Verde",
    course: "Contorno",
    type: "sauce",
    blurb: "Mexican-style roasted green tomato salsa with chilies and cilantro.",
    ingredients: [
      "1 lb green unripe tomatoes",
      "2-3 jalapeño or serrano peppers",
      "1/2 white onion, chopped",
      "1/2 cup fresh cilantro, chopped",
      "Salt, to taste",
      "1/4-1/2 cup water, as needed"
    ],
    steps: [
      "Preheat broiler. Place tomatoes and peppers on a foil-lined baking sheet and broil for 2-5 minutes per side until charred.",
      "Cool slightly. Core tomatoes and remove charred skins. Remove pepper stems.",
      "Soak chopped onion in cold water for 5 minutes, then drain.",
      "Blend tomatoes, peppers, onion, cilantro, and salt to the desired consistency.",
      "Thin with water if needed. Rest for 30 minutes before serving."
    ]
  },
  {
    slug: "pico-de-gallo",
    title: "Pico de Gallo",
    course: "Contorno",
    type: "sauce",
    blurb: "Mexican fresh tomato salsa with onion, jalapeño, lime, and cilantro.",
    ingredients: [
      "2 cups tomatoes, peeled, seeded, and chopped",
      "1 cup white onion or scallions, minced",
      "1 garlic clove, minced",
      "1 jalapeño, minced",
      "Juice of 1 lime",
      "1/2 cup cilantro, chopped",
      "Salt and black pepper"
    ],
    steps: [
      "Combine tomatoes, onion, garlic, jalapeño, and lime juice.",
      "Season with salt and pepper. Stir in half the cilantro.",
      "Rest for 30-60 minutes. Adjust seasoning and garnish with remaining cilantro."
    ]
  },
  {
    slug: "tembleque",
    title: "Tembleque",
    course: "Dolce",
    type: "dessert",
    blurb: "Puerto Rican coconut pudding with cinnamon.",
    ingredients: [
      "2 cans (13.5 oz each) coconut milk",
      "1/2 cup cornstarch",
      "2/3 cup sugar",
      "1/2 tsp salt",
      "Ground cinnamon, for serving"
    ],
    steps: [
      "Whisk cornstarch into one can of coconut milk until completely smooth.",
      "Combine with remaining coconut milk, sugar, and salt in a saucepan.",
      "Cook over medium heat, stirring constantly, until thickened and bubbling, about 5-8 minutes.",
      "Pour into individual molds or a serving dish. Cool, then refrigerate for at least 3 hours.",
      "Unmold if desired and dust with cinnamon."
    ]
  },
  {
    slug: "caribbean-coconut-rum-cake",
    title: "Caribbean Coconut Rum Cake",
    course: "Dolce",
    type: "dessert",
    blurb: "Caribbean-inspired coconut and walnut cake with a buttery rum sauce.",
    ingredients: [
      "Topping: 1/2 cup sweetened coconut flakes",
      "Topping: 1/3 cup chopped walnuts",
      "Topping: 1/4 cup unsalted butter",
      "Topping: 3/4 cup brown sugar",
      "Topping: 2 tbsp dark rum",
      "Cake: 1 3/4 cups all-purpose flour",
      "Cake: 1 1/2 tsp baking powder",
      "Cake: 1 tsp kosher salt",
      "Cake: 1/2 tsp ground cinnamon",
      "Cake: 1/4 tsp ground cardamom",
      "Cake: 1/2 cup unsalted butter, softened",
      "Cake: 1/2 cup white sugar",
      "Cake: 1/2 cup brown sugar",
      "Cake: 2 eggs",
      "Cake: 1 tbsp vanilla extract",
      "Cake: 3/4 cup coconut milk",
      "Cake: 1/4 cup sour cream",
      "Sauce: 1/2 cup unsalted butter",
      "Sauce: 1/2 cup brown sugar",
      "Sauce: 1/4 cup dark rum",
      "Sauce: 2 tbsp dark corn syrup",
      "Sauce: 2 tbsp heavy cream",
      "Sauce: 1 tsp vanilla extract",
      "Sauce: 1/4 tsp salt"
    ],
    steps: [
      "Preheat oven to 350°F. Grease and line a 9-inch round cake pan with parchment.",
      "Spread coconut and walnuts in the pan. Melt topping butter with brown sugar, stir in rum, and pour over coconut mixture.",
      "Whisk flour, baking powder, salt, cinnamon, and cardamom.",
      "Cream cake butter with both sugars. Beat in eggs and vanilla. Mix in dry ingredients, alternating with coconut milk and sour cream, until just combined.",
      "Spread batter over topping. Bake for 45-50 minutes until a toothpick comes out clean. Cool briefly, then invert onto a rack.",
      "For sauce, combine sauce ingredients in a saucepan. Bring to a boil, then simmer for 2-3 minutes while stirring.",
      "Serve cake with warm rum sauce."
    ]
  },
  {
    slug: "churros",
    title: "Churros",
    course: "Dolce",
    type: "dessert",
    blurb: "Spanish-origin fried pastries coated in cinnamon sugar.",
    ingredients: [
      "1 cup water",
      "2 1/2 tbsp sugar",
      "2 tbsp vegetable oil",
      "1/2 tsp salt",
      "1 cup all-purpose flour",
      "Neutral oil, for deep frying",
      "1/2 cup sugar, for coating",
      "1 tsp ground cinnamon"
    ],
    steps: [
      "Combine water, 2 1/2 tbsp sugar, oil, and salt in a saucepan. Bring to a boil and remove from heat.",
      "Stir in flour until a smooth dough forms. Allow to cool slightly.",
      "Transfer dough to a sturdy piping bag fitted with a star tip.",
      "Heat frying oil to 375°F. Pipe 5-6 inch strips into hot oil and fry until golden and crisp.",
      "Drain briefly and roll in cinnamon sugar while warm."
    ]
  },
  {
    slug: "conchas",
    title: "Conchas",
    course: "Dolce",
    type: "bread",
    blurb: "Mexican sweet bread with a shell-patterned sugar crust.",
    ingredients: [
      "Dough: 500 g all-purpose flour",
      "Dough: 125 g sugar",
      "Dough: 2 1/2 tsp instant yeast",
      "Dough: 1/2 tsp salt",
      "Dough: 100 g unsalted butter, softened",
      "Dough: 2 large eggs",
      "Dough: 1 tsp vanilla extract",
      "Dough: 1/2 cup warm milk",
      "Topping: 100 g vegetable shortening",
      "Topping: 100 g powdered sugar",
      "Topping: 120 g all-purpose flour",
      "Topping: 1 tsp cocoa powder, optional",
      "Topping: 1 tsp cinnamon, optional"
    ],
    steps: [
      "Combine flour, sugar, yeast, and salt. Mix in butter, eggs, vanilla, and warm milk. Knead for 7-10 minutes until soft and elastic.",
      "Transfer to a greased bowl, cover, and let rise until doubled, about 1-2 hours.",
      "Cream shortening and powdered sugar, then mix in flour to form a soft paste. Divide and add cocoa or cinnamon if desired.",
      "Divide risen dough into 16 balls and arrange on greased baking sheets.",
      "Flatten topping into thin discs and press onto each dough ball. Score a shell pattern with a knife.",
      "Cover and let rise until nearly doubled, about 1-2 hours.",
      "Bake at 325°F for about 20 minutes until the bottoms are lightly golden."
    ]
  },
  {
    slug: "tres-leches",
    title: "Tres Leches",
    course: "Dolce",
    type: "dessert",
    blurb: "Latin American sponge cake soaked in three milks and topped with cream.",
    ingredients: [
      "Cake: 1 cup all-purpose flour",
      "Cake: 1 1/2 tsp baking powder",
      "Cake: 1/4 tsp salt",
      "Cake: 5 eggs, separated",
      "Cake: 1 cup sugar, divided",
      "Cake: 1/3 cup whole milk",
      "Cake: 1 tsp vanilla extract",
      "Soak: 1 can (12 oz) evaporated milk",
      "Soak: 1 can (14 oz) sweetened condensed milk",
      "Soak: 1/4 cup whole milk",
      "Topping: 2 cups heavy whipping cream",
      "Topping: 3 tbsp powdered sugar",
      "Topping: 1/2 tsp vanilla extract",
      "Ground cinnamon, for garnish"
    ],
    steps: [
      "Preheat oven to 350°F. Whisk flour, baking powder, and salt.",
      "Beat egg yolks with 3/4 cup sugar until pale. Mix in 1/3 cup milk and vanilla, then fold into flour mixture.",
      "Beat egg whites to soft peaks, gradually adding remaining 1/4 cup sugar. Continue to stiff peaks and gently fold into batter.",
      "Pour into an ungreased 9x13-inch baking dish. Bake for 25-35 minutes until cooked through. Cool completely.",
      "Combine evaporated milk, condensed milk, and 1/4 cup whole milk. Poke holes throughout the cake and slowly pour mixture over the top.",
      "Refrigerate for at least 1 hour, preferably overnight.",
      "Whip heavy cream with powdered sugar and vanilla until stiff peaks form. Spread over cake and finish with cinnamon."
    ]
  },
];

export function getRecipe(slug?: string) {
  if (!slug) return undefined;
  const key = decodeURIComponent(String(slug)).trim().toLowerCase();
  return recipes.find(r => r.slug.toLowerCase() === key);
}