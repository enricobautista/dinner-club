export type Recipe = {
  slug: string;
  title: string;
  course: string; // Aperitivo, Antipasti, Primo, Secondo, Dolce
  type: string;   // pasta, salad, meat, dessert, drink, etc.
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
    type: "drink",
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
    type: "drink",
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
    type: "drink",
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
    type: "drink",
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
    type: "drink",
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
];

export function getRecipe(slug?: string) {
  if (!slug) return undefined;
  const key = decodeURIComponent(String(slug)).trim().toLowerCase();
  return recipes.find(r => r.slug.toLowerCase() === key);
}
