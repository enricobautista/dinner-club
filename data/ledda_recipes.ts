export type Recipe = {
  slug: string;
  title: string;
  course: string; // Aperitivo, Antipasto, Primo, Secondo, Dolce
  type: string;   // pasta, salad, meat, dessert, drink, etc.
  requiresToken?: boolean; // optional; not used in these recipes
  blurb?: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    slug: "aioli",
    title: "Aioli",
    course: "Antipasto",
    type: "dip",
    blurb: "Simple garlicky mayonnaise-based dip for bread or chips.",
    ingredients: [
      "2/3 cup mayonnaise",
      "2 garlic cloves, crushed",
      "2 tablespoons olive oil",
    ],
    steps: [
      "Combine mayonnaise, crushed garlic, and olive oil in a small bowl.",
      "Mix until smooth and well blended.",
      "Chill if desired and serve with pita chips or crusty bread.",
    ],
  },
  {
    slug: "antipasto-italian-basic",
    title: "Antipasto Italian Basic",
    course: "Antipasto",
    type: "meat",
    blurb: "Classic Italian cold-cut and cheese platter with marinated vegetables.",
    ingredients: [
      "1/4 lb sliced Genoa salami, rolled",
      "1/4 lb very thin mortadella, rolled",
      "1/4 lb very thin prosciutto, rolled",
      "1/4 lb sopressata, rolled",
      "1/4 lb sliced provolone cheese, layered in overlapping pieces",
      "Marinated artichoke hearts",
      "Marinated black or green olives",
      "Roasted red peppers",
      "Italian or French baguette, sliced",
    ],
    steps: [
      "Arrange rolled meats, provolone, artichoke hearts, olives, and roasted peppers on a large platter, grouping items and alternating colors.",
      "Serve with sliced baguette on the side.",
      "Use leftovers to make panini if desired.",
    ],
  },
  {
    slug: "antipasto-prosciutto-melone",
    title: "Antipasto di Prosciutto e Melone",
    course: "Antipasto",
    type: "meat",
    blurb: "Prosciutto-wrapped cantaloupe with arugula and basil salad.",
    ingredients: [
      "1 cantaloupe",
      "2 teaspoons lemon juice",
      "4 dashes Tabasco sauce",
      "12 slices prosciutto, thinly sliced",
      "3 cups baby arugula",
      "8 fresh basil leaves, torn",
      "1/2 teaspoon olive oil",
      "Salt",
      "Black pepper",
    ],
    steps: [
      "Halve the cantaloupe, remove rind and seeds, and cut into long slices.",
      "In a small bowl, mix lemon juice and Tabasco; drizzle over melon and toss gently to coat.",
      "Loosely wrap each melon slice with a slice of prosciutto and arrange on 4 plates, leaving space in the center.",
      "In another bowl, toss arugula, torn basil, and olive oil with salt and pepper.",
      "Mound the arugula salad in the center of each plate and serve.",
      "For a simpler version, just wrap prosciutto around melon slices and serve with cheese.",
    ],
  },
  {
    slug: "artichoke-cheese-dip",
    title: "Artichoke Cheese Dip",
    course: "Antipasto",
    type: "dip",
    blurb: "Hot, creamy artichoke and cheese dip for pita chips or bread.",
    ingredients: [
      "1 can artichokes, plain or marinated, drained and chopped",
      "1 package cream cheese (Philadelphia), softened",
      "1/4 cup grated parmesan cheese",
      "1 (4 oz) package grated Swiss cheese",
      "1/2 cup mayonnaise",
      "Pita chips, for serving",
    ],
    steps: [
      "Preheat oven to 350°F (175°C).",
      "In a bowl, combine chopped artichokes, Swiss cheese, parmesan, mayonnaise, and cream cheese until well mixed.",
      "Spread mixture into a pie plate or other oven-safe dish.",
      "Bake 20-25 minutes, until the top is lightly browned and bubbling.",
      "Serve hot with pita chips.",
    ],
  },
  {
    slug: "avocado-bruschetta",
    title: "Avocado Bruschetta",
    course: "Antipasto",
    type: "vegetable",
    blurb: "Avocado salad with herbs and spice spooned over toasted bread.",
    ingredients: [
      "2 avocados, peeled, pitted, and cubed",
      "3 cloves garlic, minced",
      "2 tablespoons lemon juice",
      "2 tablespoons red wine vinegar",
      "3/4 teaspoon salt",
      "1/2 teaspoon red pepper flakes",
      "1/4 teaspoon ground black pepper",
      "1/2 teaspoon dried oregano",
      "1/4 cup olive oil",
      "1/4 cup chopped cilantro",
      "1/4 cup chopped fresh parsley",
      "Thick slices whole-grain, ciabatta, or French bread, toasted with olive oil",
    ],
    steps: [
      "In a small bowl whisk together lemon juice, vinegar, minced garlic, salt, red pepper flakes, oregano, and black pepper.",
      "Slowly whisk in olive oil until emulsified.",
      "Stir in chopped cilantro and parsley.",
      "Gently fold in the avocado cubes.",
      "Spoon avocado mixture onto toasted bread slices and serve immediately.",
    ],
  },
  {
    slug: "tomato-mozzarella-bruschetta",
    title: "Bruschetta",
    course: "Antipasto",
    type: "vegetable",
    blurb: "Tomato, garlic, and fresh mozzarella served as a topping or dip.",
    ingredients: [
      "8 Roma tomatoes, diced",
      "1 fresh mozzarella ball, diced",
      "1 garlic clove, chopped",
      "Olive oil",
      "Salt",
      "Black pepper",
      "Pane carasau or toasted French bread, for serving",
    ],
    steps: [
      "In a bowl combine diced tomatoes, chopped garlic, salt, and pepper.",
      "Drizzle with olive oil and stir to combine.",
      "Gently fold in diced mozzarella.",
      "Serve as a dip with pane carasau or spoon over toasted bread slices.",
    ],
  },
  {
    slug: "buddegg-armenian-cheese-pastries",
    title: "Buddegg (Armenian Cheese Pastries)",
    course: "Antipasto",
    type: "dumpling",
    blurb: "Flaky puff pastry triangles filled with muenster cheese.",
    ingredients: [
      "1 box Pepperidge Farm puff pastry sheets (2 sheets)",
      "1 lb muenster cheese, grated",
      "1 egg",
      "Fresh parsley, chopped",
    ],
    steps: [
      "Preheat oven to 425°F (220°C).",
      "In a bowl, mix grated muenster cheese, egg, and chopped parsley into a uniform filling.",
      "Unfold puff pastry sheets and cut along creases, then cut into smaller rectangles or triangles.",
      "Place a small amount of cheese mixture on each piece and fold into a triangle, pressing edges to seal; crimp with a fork if desired.",
      "Arrange on a baking sheet and bake 15-20 minutes, until puffed and golden brown.",
    ],
  },
  {
    slug: "buffalo-chicken-dip",
    title: "Buffalo Chicken Dip",
    course: "Antipasto",
    type: "dip",
    blurb: "Hot, creamy Buffalo chicken dip perfect for game day.",
    ingredients: [
      "2-3 large cans chicken (or equivalent poached chicken), drained and shredded",
      "2-3 blocks cream cheese, softened",
      "1 bottle ranch dressing",
      "1/2 small bottle hot sauce (e.g., Frank’s Red Hot), mixed with the chicken",
      "16 oz shredded cheddar cheese",
    ],
    steps: [
      "Preheat oven to 375°F (190°C).",
      "Spread softened cream cheese in an even layer in the bottom of a 9x13-inch baking pan.",
      "In a bowl, mix shredded chicken with hot sauce until coated.",
      "Layer chicken mixture over the cream cheese, then pour ranch dressing over the top.",
      "Sprinkle cheddar cheese evenly over everything.",
      "Bake about 30 minutes, until hot and bubbling.",
      "Stir well as soon as it comes out of the oven and serve warm with crackers or chips.",
    ],
  },
  {
    slug: "caponata-eggplant",
    title: "Caponata (Eggplant Appetizer)",
    course: "Antipasto",
    type: "vegetable",
    blurb: "Sicilian-style sweet-sour eggplant appetizer with tomatoes and capers.",
    ingredients: [
      "5 tablespoons olive oil",
      "1 1/2 eggplants, cubed",
      "1 medium onion, cubed",
      "4 large garlic cloves, chopped",
      "1 (14 oz) can diced tomatoes with Italian seasoning (including juices)",
      "3 tablespoons red wine vinegar",
      "2 tablespoons capers",
      "1/3 cup chopped fresh basil",
      "Toasted pine nuts (optional)",
      "Salt",
      "Black pepper",
    ],
    steps: [
      "Heat olive oil in a large skillet over medium heat.",
      "Add eggplant, onion, and garlic; cook about 15 minutes, stirring occasionally, until softened.",
      "Stir in diced tomatoes with their juices, red wine vinegar, and capers.",
      "Cover and simmer about 12 minutes, stirring occasionally, until flavors meld.",
      "Season with salt and pepper and remove from heat.",
      "Stir in chopped basil and sprinkle with toasted pine nuts, if using.",
      "Serve warm, at room temperature, or chilled; also great spooned over toasted baguette slices.",
    ],
  },
  {
    slug: "caprese-salad",
    title: "Caprese",
    course: "Antipasto",
    type: "salad",
    blurb: "Tomatoes and buffalo mozzarella with olive oil, basil, and capers.",
    ingredients: [
      "3 firm tomatoes",
      "1 ball buffalo mozzarella, sliced",
      "Olive oil",
      "Salt",
      "Black pepper",
      "Capers",
      "Fresh basil leaves",
    ],
    steps: [
      "Slice tomatoes and arrange on a platter.",
      "Place a slice of mozzarella on top of each tomato slice, overlapping slightly down the platter.",
      "Drizzle with olive oil and season lightly with salt and pepper.",
      "Tear basil leaves over the top and scatter capers around the slices.",
      "Serve immediately at room temperature.",
    ],
  },
  {
    slug: "casu-marzu-usa-version",
    title: "Casu Marzu - USA Version",
    course: "Antipasto",
    type: "dip",
    blurb: "A humorous, strongly flavored “rotten cheese” parody of Sardinian casu marzu.",
    ingredients: [
      "10 oz very old, strong cheese",
      "5 oz spoiled milk",
      "1 pair very old, smelly shoes",
    ],
    steps: [
      "Walk at least 5 miles in your oldest, smelliest shoes without socks.",
      "Mix rotten cheese with spoiled milk to form a paste.",
      "Divide mixture between the two shoes.",
      "Set shoes in a warm spot (e.g., furnace room or near a heat vent) and “cure” for about 4 weeks.",
      "Remove and “enjoy” at your own risk.",
    ],
  },
  {
    slug: "cucumber-sandwiches",
    title: "Cucumber Sandwiches",
    course: "Antipasto",
    type: "vegetable",
    blurb: "Creamy, herbed cucumber bites on slices of French bread.",
    ingredients: [
      "1 loaf refrigerated Pillsbury French bread dough",
      "8 oz cream cheese, softened",
      "1/2 cup mayonnaise",
      "1 packet dried Italian dressing mix",
      "1 large cucumber, thinly sliced",
      "Fresh dill, cut into small sprigs",
    ],
    steps: [
      "Bake French bread according to package directions (about 26 minutes), then cool and slice into bite-sized pieces.",
      "In a bowl, mix softened cream cheese, mayonnaise, and Italian dressing mix until smooth.",
      "Spread a layer of the cream cheese mixture on each bread slice.",
      "Top each piece with a cucumber slice and a small piece of dill.",
      "Chill until serving.",
    ],
  },
  {
    slug: "deviled-eggs-basic",
    title: "Deviled Eggs",
    course: "Antipasto",
    type: "meat",
    blurb: "Classic deviled eggs with mayo, mustard, and a paprika garnish.",
    ingredients: [
      "6 large eggs",
      "3 tablespoons mayonnaise",
      "1 teaspoon Dijon mustard",
      "1 teaspoon apple cider vinegar",
      "Salt",
      "Black pepper",
      "Paprika, for garnish",
    ],
    steps: [
      "Place eggs in a pot of water and bring to a boil.",
      "Reduce heat so water is hot but not bubbling; cook 14 minutes.",
      "Transfer eggs to an ice-water bath and cool completely, then peel.",
      "Slice eggs in half lengthwise and gently remove yolks to a small bowl.",
      "Mash yolks with a fork and add mayonnaise, Dijon, vinegar, salt, and pepper; mix until smooth.",
      "Spoon or pipe yolk mixture back into egg white halves.",
      "Sprinkle with paprika and chill until serving (up to 2 days).",
    ],
  },
  {
    slug: "faine-franco",
    title: "Fainè (Chickpea Flatbread) - Franco",
    course: "Antipasto",
    type: "bread",
    blurb: "Sardinian-style oven-baked chickpea flour pancake with scallions.",
    ingredients: [
      "32 oz water",
      "10 oz garbanzo bean (chickpea) flour",
      "1 teaspoon salt",
      "Sliced scallions",
      "2 tablespoons olive oil (for pans)",
    ],
    steps: [
      "In a large bowl, whisk together water, chickpea flour, and salt until smooth.",
      "Let batter rest at least 4 hours at room temperature.",
      "Preheat oven to 500°F (260°C).",
      "Coat each baking pan with 1 tablespoon olive oil.",
      "Stir sliced scallions into the batter and mix well.",
      "Pour batter into pans in a thin layer.",
      "Bake 20-25 minutes, until set and lightly browned.",
      "Slice into squares or wedges and serve warm.",
    ],
  },
  {
    slug: "faine-silvana",
    title: "Fainè - Silvana",
    course: "Antipasto",
    type: "bread",
    blurb: "Another family version of Sardinian ceci flour flatbread.",
    ingredients: [
      "1/4 cup olive oil",
      "500 g ceci (chickpea) flour",
      "1.5 liters water",
      "Salt",
      "Black pepper",
      "Scallions or onion, chopped",
    ],
    steps: [
      "Preheat oven to 500°F (260°C).",
      "Grease baking pan generously with olive oil.",
      "In a bowl, whisk chickpea flour with water and a few dashes of salt until smooth.",
      "Pour about 7 ladles of batter into each pan of fainè.",
      "Sprinkle chopped scallions or onion over the top.",
      "Bake about 20 minutes, then broil briefly to brown the top.",
      "Halfway through baking, swap pans between oven racks if using more than one pan.",
      "Season with black pepper and serve warm.",
    ],
  },
  {
    slug: "fennel-with-olive-oil",
    title: "Fennel with Olive Oil",
    course: "Antipasto",
    type: "vegetable",
    blurb: "Raw fennel served simply with olive oil, garlic, and herbs for dipping.",
    ingredients: [
      "Fresh fennel bulbs, trimmed and cut into wedges or sticks",
      "Olive oil",
      "Salt",
      "Black pepper",
      "Garlic, minced",
      "Fresh parsley, chopped",
    ],
    steps: [
      "In a small bowl, mix olive oil with minced garlic, chopped parsley, salt, and pepper.",
      "Arrange fennel pieces on a plate.",
      "Dip fennel into the seasoned olive oil and enjoy.",
    ],
  },
  {
    slug: "lebanese-garlic-sauce",
    title: "Lebanese Garlic Sauce",
    course: "Antipasto",
    type: "dip",
    blurb: "Thick, emulsified garlic sauce for pita, grilled meats, and more.",
    ingredients: [
      "15 garlic cloves, minced",
      "Less than 1/2 tablespoon salt (preferably sea salt)",
      "1 egg white",
      "1/2 cup lemon juice",
      "1 cup vegetable oil",
      "1 cup olive oil (not extra virgin)",
    ],
    steps: [
      "Place minced garlic, salt, egg white, lemon juice, vegetable oil, and olive oil in a quart-sized glass jar.",
      "Submerge an immersion blender to the bottom of the jar.",
      "Blend with the head resting on the bottom until the mixture thickens (about 1-2 minutes).",
      "Tilt and lift the blender slightly to incorporate ingredients from the sides and top until texture resembles mayonnaise.",
      "Serve with warm pita bread or pita chips; store covered in the fridge.",
    ],
  },
  {
    slug: "lumpia-filipino-egg-rolls",
    title: "Lumpia (Filipino Egg Rolls)",
    course: "Antipasto",
    type: "dumpling",
    blurb: "Crispy Filipino egg rolls filled with seasoned beef and vegetables.",
    ingredients: [
      "Lumpia or spring-roll wrappers (about 200 wrappers total)",
      "5 lb ground beef (93% lean)",
      "2 eggs",
      "1+ lb carrots, finely diced (about 4+ cups)",
      "1 bunch celery, cubed (about 3+ cups)",
      "1 head garlic, minced (about 1/3+ cup)",
      "4 bunches green onions, chopped (about 2+ cups)",
      "4 potatoes, peeled and diced (about 2 1/2+ cups)",
      "1/4 cup + 2 tablespoons low-sodium soy sauce",
      "Flour mixed with water (for sealing wrappers)",
      "Canola oil, for frying",
    ],
    steps: [
      "Spray an electric skillet with cooking spray and sauté diced potatoes at 325°F until just tender; lightly salt and remove.",
      "Add a bit of oil, then add ground beef; cook at 350-400°F, breaking up meat and draining fat well; season with salt.",
      "Reduce heat to 250°F and add celery, potatoes, garlic, green onions, and soy sauce; cook a few minutes, adjusting salt to taste.",
      "Divide mixture in half, beat 1 egg into each half, then mix all back together and keep warm until eggs are cooked through.",
      "Transfer filling to paper towel-lined colanders and refrigerate several hours or overnight to drain and cool.",
      "Mix flour with water to a paste for sealing.",
      "Place 1 wrapper on the counter; add about 1 teaspoon of filling 1 inch from the bottom edge.",
      "Fold bottom over filling, then fold in sides and roll up tightly; seal edge with flour paste. Keep rolls thin.",
      "Arrange rolled lumpia on a baking sheet and freeze in single layers; transfer 20 per gallon ziploc bag and store flat in freezer.",
      "To cook, heat about 2 inches of canola oil in a saucepan over medium heat; fry 7 or so frozen lumpia at a time until golden brown (5-8 minutes), turning occasionally.",
      "Drain standing upright in a paper towel-lined colander and serve hot with lumpia sauce.",
    ],
  },
  {
    slug: "lumpia-sauce",
    title: "Lumpia Sauce",
    course: "Antipasto",
    type: "dip",
    blurb: "Sweet and tangy dipping sauce for Filipino lumpia.",
    ingredients: [
      "1 cup water OR 1/2 cup pineapple tidbits with juice + 1/2 cup water",
      "1/2 cup sugar",
      "1/2 cup ketchup",
      "1 garlic clove, minced",
      "1 tablespoon extra-virgin olive oil",
      "1/4 cup white vinegar",
      "2 tablespoons cornstarch mixed with 2 tablespoons water",
    ],
    steps: [
      "In a saucepan, heat olive oil over medium heat and sauté minced garlic briefly without burning.",
      "Add water (or pineapple with water), ketchup, and sugar; stir until sugar dissolves and bring to a gentle boil.",
      "Stir in vinegar.",
      "Slowly whisk in cornstarch-water slurry and cook, stirring, until sauce thickens.",
      "Let cool slightly before serving; refrigerate up to 1 week.",
    ],
  },
  {
    slug: "pico-de-gallo",
    title: "Pico de Gallo (Authentic Mexican Salsa)",
    course: "Antipasto",
    type: "dip",
    blurb: "Fresh tomato, onion, jalapeño, cilantro, and lime salsa.",
    ingredients: [
      "3-4 tomatoes, finely chopped",
      "1/2 large onion or 1 small onion, finely chopped",
      "1/4 jalapeño or serrano pepper, finely minced (more to taste)",
      "Small bunch cilantro (about 6 sprigs), finely chopped",
      "Juice of 1 lime",
      "Salt",
    ],
    steps: [
      "Finely chop tomatoes, onion, jalapeño, and cilantro; place in a bowl.",
      "Squeeze in lime juice.",
      "Season with salt and extra jalapeño if you like more heat.",
      "Stir to combine and serve with tortilla chips or as a topping.",
    ],
  },
  {
    slug: "homemade-ricotta",
    title: "Ricotta",
    course: "Antipasto",
    type: "dip",
    blurb: "Fresh homemade ricotta from milk and acid, perfect for savory or sweet dishes.",
    ingredients: [
      "1/2 gallon whole milk (not UHT; 2% will be less creamy)",
      "1/3 cup lemon juice (from 1 1/2-2 lemons) OR 1/3 cup distilled white vinegar OR 1/2 teaspoon citric acid",
      "1 teaspoon salt",
      "Cheesecloth",
    ],
    steps: [
      "Pour milk into a 4-quart pot and warm over medium heat to 200°F (use an instant-read or candy thermometer); do not let it boil.",
      "Remove from heat and gently stir in lemon juice (or vinegar/citric acid) and salt.",
      "Let sit undisturbed for about 10 minutes, until curds separate from whey.",
      "If needed, add a bit more acid and wait a few more minutes.",
      "Set a strainer lined with cheesecloth over a bowl.",
      "Scoop large curds into the strainer, then gently pour remaining curds and whey through.",
      "Let drain 10-60 minutes, depending on desired texture; stir some whey back in if it becomes too dry.",
      "Transfer ricotta to an airtight container and refrigerate up to 1 week.",
    ],
  },
  {
    slug: "salmon-pate",
    title: "Salmon Pâté",
    course: "Antipasto",
    type: "seafood",
    blurb: "Smooth smoked salmon spread with cream cheese, herbs, and capers.",
    ingredients: [
      "1 large smoked salmon (or smoked whitefish or sable), skinned and deboned",
      "3 heaping tablespoons cream cheese (more as needed)",
      "Dash of salt",
      "Dash of cayenne pepper",
      "2 gherkins, chopped coarse",
      "2 tablespoons scallions, finely chopped (white and light green parts)",
      "1 tablespoon lemon juice",
      "6-10 capers",
      "Heavy cream (as needed)",
    ],
    steps: [
      "In a food processor, combine cream cheese, salt, cayenne, chopped gherkins, scallions, lemon juice, and capers; blend until smooth.",
      "Add chunks of smoked salmon and process until you reach a smooth but thick consistency.",
      "Add a splash of heavy cream if needed to loosen the mixture slightly.",
      "Chill and serve with crackers or bread.",
    ],
  },
  {
    slug: "salsa-gino",
    title: "Salsa",
    course: "Antipasto",
    type: "dip",
    blurb: "Family-favorite tomato salsa with jalapeños and cilantro.",
    ingredients: [
      "4 (14.5 oz) cans Del Monte petite cut diced tomatoes, drained",
      "1 Vidalia (sweet) onion, chopped",
      "1 bunch cilantro leaves, chopped",
      "5-6 jalapeños, seeded and chopped",
      "6 fl oz tomato juice from concentrate",
      "1 tablespoon white vinegar",
      "1 tablespoon lime juice or juice of 1 lime",
      "1 teaspoon salt",
      "1/4 teaspoon ground cumin",
    ],
    steps: [
      "Drain canned tomatoes in a colander for a few minutes, then transfer to a large bowl.",
      "Add chopped onion to the bowl.",
      "In a food processor, pulse cilantro leaves and jalapeños together, then add to the tomatoes.",
      "Stir in tomato juice, vinegar, lime juice, salt, and cumin.",
      "Mix well and refrigerate at least 2 hours to let flavors meld.",
      "Serve chilled with tortilla chips.",
    ],
  },
  {
    slug: "salsa-not-sardinian",
    title: "Salsa, Not Sardinian",
    course: "Antipasto",
    type: "dip",
    blurb: "Chunky fresh salsa seasoned with a bit of humor and heat.",
    ingredients: [
      "5 lb ripe tomatoes, chopped",
      "2 oz fresh cilantro, chopped",
      "4 oz jalapeño peppers, chopped",
      "1 oz fresh garlic, minced",
      "8 oz yellow onion, chopped",
      "1 tablespoon salt",
    ],
    steps: [
      "Chop tomatoes, cilantro, jalapeños, garlic, and onion.",
      "Combine everything in a large bowl and season with salt.",
      "Hold a picture of Pope Francis above the bowl for exactly 60 seconds (optional family ritual).",
      "Serve immediately or chill before serving.",
    ],
  },
  {
    slug: "sausage-homemade",
    title: "Sausage",
    course: "Antipasto",
    type: "meat",
    blurb: "Homemade cured pork sausage seasoned with wine and spices.",
    ingredients: [
      "Pork butt, deboned and coarsely ground with some fat",
      "10.2 g salt per 1 lb sausage",
      "2.4 g black pepper per 1 lb sausage",
      "0.36 g cayenne pepper per 1 lb sausage",
      "0.06 g nutmeg per 1 lb sausage",
      "0.06 g cloves per 1 lb sausage",
      "0.30 g saltpeter (potassium nitrate) per 1 lb sausage (for color)",
      "1 quart red wine per 100 lb meat",
      "Natural casings, rinsed and soaked; cut into ~25-inch lengths",
    ],
    steps: [
      "Weigh the ground pork so you can calculate seasonings accurately.",
      "Spread meat on a clean table and sprinkle seasonings as evenly as possible over the surface.",
      "Pour red wine over the meat to moisten and help distribute spices.",
      "Mix thoroughly by hand until seasonings and wine are evenly incorporated.",
      "Form meat into portions and feed through a sausage stuffer into prepared casings, tying ends with string.",
      "Hang sausages in a cool cellar to dry for 2-3 weeks until ready to eat.",
      "After drying, store in vacuum bags or ziploc bags in the cellar or freezer.",
      "Slice very thinly and serve with bread.",
    ],
  },
  {
    slug: "seven-layer-mexican-dip",
    title: "Seven Layer Mexican Dip",
    course: "Antipasto",
    type: "dip",
    blurb: "Layered refried bean, sour cream, and veggie dip for a crowd.",
    ingredients: [
      "2 cans refried beans",
      "1 jar taco sauce",
      "2 packets taco seasoning",
      "1 container sour cream",
      "Prepared guacamole",
      "Shredded cheese (cheddar or Mexican blend)",
      "Shredded lettuce",
      "Chopped tomatoes",
      "Sliced black olives",
      "Tortilla chips, for serving",
    ],
    steps: [
      "In a bowl, mix refried beans, taco sauce, and taco seasoning packets until well combined.",
      "Spread bean mixture in the bottom of a serving dish or pan.",
      "Chill at least 30 minutes so the base firms up.",
      "Spread a generous layer of sour cream over the chilled bean layer.",
      "Top with guacamole, shredded cheese, shredded lettuce, chopped tomatoes, and sliced black olives in distinct layers.",
      "Serve with tortilla chips.",
    ],
  },
  {
    slug: "spring-roll-party",
    title: "Spring Roll",
    course: "Antipasto",
    type: "dumpling",
    blurb: "Crispy pork and vegetable spring rolls for a large crowd.",
    ingredients: [
      "4 packages spring roll wrappers",
      "4 egg whites, lightly beaten (for sealing)",
      "4 cups oil (for frying)",
      "7 1/2 tablespoons sesame oil",
      "5 garlic cloves, chopped",
      "10 slices ginger, chopped",
      "3 lb boneless pork, shredded",
      "7 1/2 cups bean sprouts",
      "7 1/2 cups cabbage, thinly shredded",
      "1 1/4 cups shredded bamboo shoots",
      "2 1/2 cups carrots, thinly shredded",
      "20 dried black mushrooms, soaked and shredded",
      "15 stalks green onion, cut into small pieces",
      "2 1/2 teaspoons garlic salt",
      "1 1/2 teaspoons five-spice powder",
      "5 teaspoons sugar",
      "1 1/4 teaspoons white pepper",
      "2 1/2 cups chicken stock (as needed)",
      "10 tablespoons cornstarch (for slurry)",
    ],
    steps: [
      "If wrappers are frozen, thaw in the package at room temperature.",
      "Heat wok over high heat with sesame oil, garlic, and ginger.",
      "Add shredded pork and cook about 2 minutes.",
      "Add bean sprouts, cabbage, bamboo shoots, carrots, black mushrooms, green onions, garlic salt, five-spice, sugar, and white pepper; stir-fry 2 minutes, adding chicken stock if mixture seems dry.",
      "Stir in a cornstarch-water slurry to thicken and cool filling slightly.",
      "Place about 2 tablespoons of filling in the center of each wrapper, roll up, and seal edges with egg white.",
      "Heat oil over high heat, then reduce to medium-high and deep-fry rolls until golden brown and floating.",
      "Drain on paper towels and serve hot, with or without plum sauce and hot mustard.",
    ],
  },
  {
    slug: "sweet-potato-beet-chips",
    title: "Sweet Potato and Beet Chips",
    course: "Antipasto",
    type: "vegetable",
    blurb: "Crisp homemade sweet potato and beet chips with garlic, rosemary, and salt.",
    ingredients: [
      "2 sweet potatoes",
      "2 beets",
      "1 garlic clove, minced",
      "1 teaspoon fresh rosemary leaves, very finely minced",
      "2 tablespoons salt",
      "10 cups vegetable oil (for frying)",
    ],
    steps: [
      "Wash and dry sweet potatoes and beets thoroughly.",
      "Trim 1 inch from one end of each vegetable.",
      "Using a mandolin or V-slicer, slice into very thin rounds (about 1/8 inch).",
      "In a small bowl, mix minced garlic, minced rosemary, and salt.",
      "Heat vegetable oil in a Dutch oven or large pot to 350°F (175°C).",
      "Fry sweet potato slices in batches until golden and bubbling has nearly stopped (2-3 minutes per batch).",
      "Transfer to a paper towel-lined baking sheet and immediately sprinkle with some garlic-rosemary salt.",
      "Repeat with remaining sweet potatoes, then fry beet slices in batches until curled at the edges and crisp (3-4 minutes).",
      "Season beets with salt mixture, cool, and serve or store in an airtight container.",
    ],
  },
  {
    slug: "warm-italiano-spread",
    title: "Warm Italiano Spread",
    course: "Antipasto",
    type: "dip",
    blurb: "Warm cream cheese spread topped with pesto, tomato, and Italian cheese.",
    ingredients: [
      "1 (8 oz) package cream cheese",
      "1/4 cup pesto",
      "1 plum tomato, finely chopped",
      "Garlic salt, to taste",
      "Italian seasoning, to taste",
      "1/2 cup finely shredded Italian cheese blend (parmesan-asiago-mozzarella)",
      "Crackers (e.g., Triscuit cracked pepper & olive oil), for serving",
    ],
    steps: [
      "Preheat grill to medium heat (or oven to about 350°F / 175°C).",
      "Place unwrapped cream cheese block on an 8-inch disposable pie plate.",
      "Top with pesto, a sprinkle of garlic salt and Italian seasoning, chopped tomato, and shredded Italian cheese.",
      "Cover with heavy-duty foil.",
      "Place on grill with lid closed (or in oven) and cook 8-10 minutes, until cheese on top is melted and cream cheese is softened but still holds shape.",
      "Transfer to a platter and serve warm with crackers.",
    ],
  },
  {
    slug: "antipasto-italian-salad",
    title: "Antipasto Italian Salad",
    course: "Secondo",
    type: "salad",
    blurb: "Hearty Italian chopped salad with salami, cheese, vegetables, and a simple vinaigrette.",
    ingredients: [
      "1 small iceberg lettuce",
      "1-2 tomatoes, sliced",
      "1 cucumber, sliced",
      "1/2 red onion, thinly sliced",
      "1/2 cup garbanzo beans, rinsed",
      "5 artichoke hearts, chopped",
      "1/2 cup hearts of palm, sliced",
      "3 slices salami, cut into pieces",
      "Mozzarella cheese, cubed, or bocconcini balls",
      "1/2 cup dried cranberries",
      "1/2 cup pitted black olives or kalamata olives",
      "1/2 cup olive oil",
      "2 tablespoons red wine vinegar",
      "1 teaspoon balsamic vinegar",
      "1/2 teaspoon salt",
      "1/4 teaspoon pepper",
      "Garlic powder, to taste"
    ],
    steps: [
      "Wash and cut the lettuce, slice the tomatoes and cucumber, and thinly slice the red onion.",
      "Place lettuce, tomatoes, cucumber, onion, garbanzo beans, artichoke hearts, hearts of palm, salami, mozzarella, cranberries, and olives in a large bowl.",
      "In a small bottle or bowl, combine olive oil, red wine vinegar, balsamic, salt, pepper, and garlic powder.",
      "Shake or whisk the dressing until emulsified and adjust seasoning to taste.",
      "Pour dressing over the salad and toss well just before serving."
    ],
  },
  {
    slug: "asian-coleslaw",
    title: "Asian Coleslaw",
    course: "Secondo",
    type: "salad",
    blurb: "Crunchy cabbage salad with toasted almonds, sesame, and a ramen-based Asian dressing.",
    ingredients: [
      "1/2 head cabbage, shredded",
      "4 green onions, chopped",
      "1 (3 oz) package chicken-flavored ramen soup mix",
      "1/2 cup toasted slivered almonds",
      "3 tablespoons toasted sesame seeds",
      "1/2 cup vegetable oil",
      "3 tablespoons white vinegar",
      "1/8 teaspoon salt",
      "1/8 teaspoon pepper",
      "Flavor packet from ramen soup mix"
    ],
    steps: [
      "Shred the cabbage and chop the green onions; place in a large bowl.",
      "Break up the dry ramen noodles into small pieces and add to the cabbage mixture.",
      "In a small bowl, whisk together vegetable oil, white vinegar, salt, pepper, and the ramen flavor packet.",
      "Add toasted almonds and toasted sesame seeds to the salad bowl.",
      "Pour the dressing over the salad and toss thoroughly to coat.",
      "Cover with plastic wrap and refrigerate for about 2 hours before serving, if possible."
    ],
  },
  {
    slug: "asparagus-with-prosciutto",
    title: "Asparagus with Prosciutto",
    course: "Secondo",
    type: "vegetable",
    blurb: "Tender asparagus spears wrapped in prosciutto and baked with butter and parmesan.",
    ingredients: [
      "8 large asparagus spears",
      "8 slices prosciutto",
      "1 1/2 teaspoons unsalted butter, cut into small pieces",
      "2 tablespoons grated parmesan",
      "Pepper, to taste"
    ],
    steps: [
      "Preheat the oven to 400°F (200°C) and lightly grease a baking dish.",
      "Trim the asparagus and boil in salted water for 4-5 minutes until just tender; drain and rinse under cool water.",
      "Wrap each asparagus spear with a slice of prosciutto and arrange in the baking dish.",
      "Dot the asparagus with butter pieces and sprinkle with parmesan and pepper.",
      "Bake for about 6 minutes, or until the cheese melts and the prosciutto edges begin to crisp.",
      "Serve hot as a side dish."
    ],
  },
  {
    slug: "caesar-salad-dressing",
    title: "Caesar Salad Dressing",
    course: "Secondo",
    type: "dressing",
    blurb: "Classic Caesar dressing with lemon, garlic, mustard, and parmesan for romaine salads.",
    ingredients: [
      "1/2 cup olive oil",
      "1/4 cup lemon juice",
      "2 garlic cloves, crushed",
      "1 teaspoon dry mustard or 2 teaspoons Dijon mustard (dry preferred)",
      "1/2 teaspoon salt",
      "1/4 teaspoon pepper",
      "1/2 cup parmesan cheese, grated"
    ],
    steps: [
      "In a bowl, combine lemon juice, crushed garlic, mustard, salt, and pepper.",
      "Slowly whisk in the olive oil until the dressing is well blended.",
      "Stir in the grated parmesan cheese.",
      "Let the dressing come to room temperature about 30 minutes before serving.",
      "Whisk again just before serving and toss with romaine lettuce, extra parmesan, and croutons if desired."
    ],
  },
  {
    slug: "cauliflower-sweet-potatoes-and-onions",
    title: "Cauliflower, Sweet Potatoes and Onions",
    course: "Secondo",
    type: "vegetable",
    blurb: "Roasted cauliflower, sweet potatoes, and onions with olive oil and rosemary.",
    ingredients: [
      "1 head cauliflower, cut into florets",
      "4 sweet potatoes, cubed into 1/2-1 inch pieces",
      "1 1/2 onions, coarsely chopped",
      "Extra-virgin olive oil",
      "Salt",
      "Pepper",
      "Rosemary, to taste",
      "Vegetable spray"
    ],
    steps: [
      "Preheat the oven to 375°F (190°C).",
      "In a large bowl, combine cauliflower florets, sweet potato cubes, and chopped onions.",
      "Drizzle generously with olive oil and toss until all vegetables are well coated.",
      "Season with salt, pepper, and rosemary and toss again to distribute the seasoning.",
      "Spray a roasting or jelly-roll pan with vegetable spray.",
      "Spread the vegetables in a single layer on the pan, using two pans if needed.",
      "Roast for about 45 minutes, or until the sweet potatoes are fork-tender, rotating the pan halfway through."
    ],
  },
  {
    slug: "cauliflower-with-olive-oil-and-breadcrumbs",
    title: "Cauliflower with Olive Oil and Breadcrumbs",
    course: "Secondo",
    type: "vegetable",
    blurb: "Roasted cauliflower tossed with garlicky seasoned breadcrumbs and olive oil.",
    ingredients: [
      "1 extra-large container plain breadcrumbs (Italian-style preferred)",
      "3-4 cloves garlic, finely chopped",
      "6-8 sprigs parsley, finely chopped",
      "1/4 cup grated locatelli or parmesan cheese",
      "1 head cauliflower, cut into small florets",
      "Extra-virgin olive oil",
      "Salt",
      "Pepper",
      "1/4-1/2 cup seasoned breadcrumbs (from above mixture)",
      "Cooking spray"
    ],
    steps: [
      "In a large bowl, combine plain breadcrumbs, chopped garlic, chopped parsley, and grated cheese to make seasoned breadcrumbs.",
      "Preheat the oven to 350°F (175°C).",
      "Place cauliflower florets in a large bowl and season generously with salt and pepper.",
      "Drizzle with extra-virgin olive oil and toss to moisten all florets.",
      "Add 1/4-1/2 cup of the seasoned breadcrumbs and toss again to coat the cauliflower.",
      "Spray a shallow roasting or jelly-roll pan with cooking spray and arrange cauliflower in a single layer.",
      "Roast for 35-45 minutes, or until the cauliflower is lightly browned and fork-tender."
    ],
  },
  {
    slug: "cauliflower-with-olives-and-fennel",
    title: "Cauliflower with Olives and Fennel",
    course: "Secondo",
    type: "vegetable",
    blurb: "Stovetop braised cauliflower with olives, parsley, and wild fennel stalks.",
    ingredients: [
      "3 lb cauliflower, cut into medium pieces",
      "2 garlic cloves, chopped",
      "1/2 bunch parsley, chopped",
      "1/3 cup olive oil",
      "Fennel sticks (wild fennel stalks), to taste",
      "Olives, green or black",
      "Salt",
      "Pepper",
      "1 1/2 cups water"
    ],
    steps: [
      "Cut the cauliflower into medium-sized pieces.",
      "In a large saucepan, heat olive oil over medium heat.",
      "Add cauliflower, chopped garlic, chopped parsley, salt, and pepper and sauté briefly to coat the cauliflower in oil.",
      "Pour in the water, cover, and cook for about 20 minutes, until the cauliflower is mostly tender.",
      "Add olives and fennel sticks, stir, and cook for about 10 more minutes.",
      "Adjust seasoning if needed and serve warm."
    ],
  },
  {
    slug: "chimichurri-for-churrasco",
    title: "Chimichurri for Churrasco",
    course: "Secondo",
    type: "sauce",
    blurb: "Bright green chimichurri with parsley, cilantro, garlic, and lemon for grilled skirt steak.",
    ingredients: [
      "2 cups Italian parsley",
      "5-6 sprigs cilantro",
      "4 garlic cloves",
      "3 tablespoons lemon juice",
      "1/2 cup olive oil or more, as needed",
      "1/2 teaspoon salt",
      "1/2 teaspoon pepper",
      "Several pounds skirt steak (churrasco), for serving"
    ],
    steps: [
      "Finely chop the parsley, cilantro, and garlic, or prepare to process them in a food processor.",
      "Season the skirt steak with salt and pepper and set aside for grilling.",
      "In a food processor, combine parsley, cilantro, garlic, lemon juice, olive oil, salt, and pepper.",
      "Pulse until you obtain a loose, saucy chimichurri consistency, adding more olive oil if needed.",
      "Refrigerate the chimichurri for several hours to let the flavors develop.",
      "Grill the skirt steak to the desired doneness.",
      "Serve the churrasco topped with chimichurri or with the sauce on the side.",
      "Variation: you can use red wine vinegar instead of lemon juice and omit the cilantro for a different flavor."
    ],
  },
  {
    slug: "corn-and-tomato-salad",
    title: "Corn and Tomato Salad",
    course: "Secondo",
    type: "salad",
    blurb: "Fresh summer corn and tomato salad with basil and a simple vinaigrette.",
    ingredients: [
      "4 ears corn, cooked and kernels cut off",
      "2 cups cherry tomatoes, halved",
      "1/2 red onion, finely chopped",
      "Handful fresh basil, chopped",
      "2 tablespoons olive oil",
      "1 tablespoon red wine vinegar",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Cook corn and cut kernels from the cob; place in a bowl.",
      "Add halved cherry tomatoes, chopped red onion, and chopped basil.",
      "Drizzle with olive oil and red wine vinegar.",
      "Season with salt and pepper.",
      "Toss and serve chilled or at room temperature."
    ],
  },

  {
    slug: "crispy-garlic-potatoes",
    title: "Crispy Garlic Potatoes",
    course: "Secondo",
    type: "potato",
    blurb: "Crispy oven-roasted potatoes with garlic and herbs.",
    ingredients: [
      "3 lb potatoes, cubed",
      "3 tablespoons olive oil",
      "4 cloves garlic, minced",
      "1 teaspoon rosemary or thyme",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Preheat oven to 425°F (220°C).",
      "Toss cubed potatoes with olive oil, garlic, rosemary, salt, and pepper.",
      "Spread in a single layer on a baking sheet.",
      "Roast 40-50 minutes, stirring once, until crisp and golden.",
      "Serve hot."
    ],
  },

  {
    slug: "escarole-and-beans",
    title: "Escarole and Beans",
    course: "Secondo",
    type: "vegetable",
    blurb: "Classic sautéed escarole with cannellini beans and garlic.",
    ingredients: [
      "1 large head escarole, chopped",
      "3 cloves garlic, minced",
      "2 tablespoons olive oil",
      "1 can cannellini beans, rinsed",
      "Salt",
      "Pepper",
      "Red pepper flakes (optional)"
    ],
    steps: [
      "Heat olive oil in a skillet and sauté garlic until fragrant.",
      "Add escarole and cook until wilted.",
      "Stir in cannellini beans and cook a few more minutes.",
      "Season with salt, pepper, and red pepper flakes.",
      "Serve warm."
    ],
  },

  {
    slug: "fennel-and-orange-salad",
    title: "Fennel and Orange Salad",
    course: "Secondo",
    type: "salad",
    blurb: "Refreshing fennel and orange salad with olive oil and black pepper.",
    ingredients: [
      "2 fennel bulbs, thinly sliced",
      "2 oranges, segmented",
      "2 tablespoons olive oil",
      "Salt",
      "Black pepper"
    ],
    steps: [
      "Thinly slice the fennel and place in a bowl.",
      "Segment oranges and add to the fennel.",
      "Drizzle with olive oil.",
      "Season with salt and plenty of black pepper.",
      "Toss and chill before serving."
    ],
  },

  {
    slug: "french-onion-green-beans",
    title: "French Onion Green Beans",
    course: "Secondo",
    type: "vegetable",
    blurb: "Tender green beans baked with creamy French onion topping.",
    ingredients: [
      "1 lb green beans, trimmed",
      "1 can French onion soup",
      "1/2 cup sour cream",
      "1/2 cup shredded cheese",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Preheat oven to 350°F (175°C).",
      "Parboil green beans until crisp-tender, then drain.",
      "Mix French onion soup and sour cream in a bowl.",
      "Place beans in a baking dish, season with salt and pepper, and pour mixture over top.",
      "Sprinkle with shredded cheese.",
      "Bake 25-30 minutes until bubbly."
    ],
  },

  {
    slug: "garlic-bread",
    title: "Garlic Bread",
    course: "Secondo",
    type: "bread",
    blurb: "Classic garlic bread with butter, garlic, and parsley.",
    ingredients: [
      "1 loaf Italian or French bread",
      "1/2 cup butter, softened",
      "3 cloves garlic, minced",
      "2 tablespoons parsley, chopped",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Preheat oven to 375°F (190°C).",
      "Mix softened butter with garlic, parsley, salt, and pepper.",
      "Slice bread lengthwise and spread garlic butter evenly.",
      "Wrap in foil and bake 10-15 minutes.",
      "Unwrap, toast 5 more minutes if crispness is desired."
    ],
  },
  {
    slug: "german-potato-salad",
    title: "German Potato Salad",
    course: "Secondo",
    type: "potato",
    blurb: "Warm German-style potato salad with bacon, vinegar, and mustard.",
    ingredients: [
      "6 potatoes, peeled and sliced",
      "4 slices bacon, chopped",
      "1 small onion, chopped",
      "1/4 cup white vinegar",
      "1/4 cup water",
      "2 tablespoons sugar",
      "1 tablespoon Dijon mustard",
      "Salt",
      "Pepper",
      "Parsley, chopped (optional)"
    ],
    steps: [
      "Boil potatoes in salted water until fork-tender; drain.",
      "In a skillet, cook bacon until crisp; remove bacon and reserve drippings.",
      "Add chopped onion to drippings and sauté until softened.",
      "Stir in vinegar, water, sugar, mustard, salt, and pepper; bring to a simmer.",
      "Add potatoes and bacon back into the skillet.",
      "Toss gently to coat and heat through.",
      "Top with chopped parsley and serve warm."
    ],
  },

  {
    slug: "giardiniera",
    title: "Giardiniera",
    course: "Secondo",
    type: "vegetable",
    blurb: "Pickled mixed vegetables in olive oil and vinegar.",
    ingredients: [
      "1 head cauliflower, cut into florets",
      "2 carrots, sliced",
      "2 celery stalks, sliced",
      "1 red pepper, sliced",
      "1 green pepper, sliced",
      "4 garlic cloves, smashed",
      "1 cup white vinegar",
      "1 cup olive oil",
      "1 tablespoon oregano",
      "2 teaspoons salt",
      "1 teaspoon black pepper",
      "Red pepper flakes (optional)"
    ],
    steps: [
      "Place chopped vegetables and garlic in a large bowl.",
      "Mix vinegar, olive oil, oregano, salt, pepper, and red pepper flakes.",
      "Pour dressing over vegetables and toss thoroughly.",
      "Transfer to jars and refrigerate at least 24 hours before serving.",
      "Keeps for several weeks refrigerated."
    ],
  },

  {
    slug: "grilled-asparagus",
    title: "Grilled Asparagus",
    course: "Secondo",
    type: "vegetable",
    blurb: "Simple grilled asparagus seasoned with olive oil, salt, and pepper.",
    ingredients: [
      "1 bunch asparagus, trimmed",
      "2 tablespoons olive oil",
      "Salt",
      "Pepper",
      "Lemon wedges (optional)"
    ],
    steps: [
      "Preheat grill to medium-high heat.",
      "Toss asparagus with olive oil, salt, and pepper.",
      "Place spears on grill and cook 2-4 minutes per side until tender and lightly charred.",
      "Serve with lemon wedges if desired."
    ],
  },

  {
    slug: "grilled-onions-and-peppers",
    title: "Grilled Onions and Peppers",
    course: "Secondo",
    type: "vegetable",
    blurb: "Grilled bell peppers and onions, perfect as a side or topping.",
    ingredients: [
      "2 bell peppers (any color), sliced",
      "1 large onion, sliced",
      "2 tablespoons olive oil",
      "Salt",
      "Pepper",
      "Balsamic vinegar (optional)"
    ],
    steps: [
      "Toss sliced peppers and onions with olive oil, salt, and pepper.",
      "Place in a grill basket over medium-high heat.",
      "Grill 10-15 minutes, stirring occasionally, until softened and slightly charred.",
      "Drizzle with balsamic vinegar if desired."
    ],
  },

  {
    slug: "grilled-zucchini",
    title: "Grilled Zucchini",
    course: "Secondo",
    type: "vegetable",
    blurb: "Tender grilled zucchini slices brushed with olive oil.",
    ingredients: [
      "3 zucchini, sliced lengthwise",
      "2 tablespoons olive oil",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Brush zucchini slices with olive oil and season with salt and pepper.",
      "Grill over medium-high heat for 3-4 minutes per side.",
      "Serve warm or at room temperature."
    ],
  },

  {
    slug: "green-beans-with-breadcrumbs",
    title: "Green Beans with Breadcrumbs",
    course: "Secondo",
    type: "vegetable",
    blurb: "Sautéed green beans topped with toasted garlic breadcrumbs.",
    ingredients: [
      "1 lb green beans, trimmed",
      "2 tablespoons olive oil",
      "2 cloves garlic, minced",
      "1/2 cup breadcrumbs",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Cook green beans in boiling water until crisp-tender; drain.",
      "Heat olive oil in a pan and sauté garlic until fragrant.",
      "Add breadcrumbs and cook until golden.",
      "Add green beans and toss to coat.",
      "Season with salt and pepper and serve."
    ],
  },

  {
    slug: "grilled-eggplant",
    title: "Grilled Eggplant",
    course: "Secondo",
    type: "vegetable",
    blurb: "Smoky grilled eggplant slices with olive oil and herbs.",
    ingredients: [
      "2 eggplants, sliced into rounds",
      "1/4 cup olive oil",
      "Salt",
      "Pepper",
      "Oregano (optional)"
    ],
    steps: [
      "Brush eggplant slices with olive oil.",
      "Season with salt, pepper, and oregano.",
      "Grill over medium-high heat about 3 minutes per side until tender.",
      "Serve warm or chilled."
    ],
  },
  {
    slug: "israeli-couscous-salad",
    title: "Israeli Couscous Salad",
    course: "Secondo",
    type: "grain",
    blurb: "Israeli couscous tossed with vegetables, herbs, and lemon dressing.",
    ingredients: [
      "1 1/2 cups Israeli couscous",
      "2 cups water or broth",
      "1 cucumber, diced",
      "1 red bell pepper, diced",
      "1/2 red onion, finely chopped",
      "1 cup cherry tomatoes, halved",
      "1/4 cup parsley, chopped",
      "3 tablespoons olive oil",
      "2 tablespoons lemon juice",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Cook couscous in water or broth according to package instructions; cool.",
      "Combine couscous with cucumber, bell pepper, onion, tomatoes, and parsley.",
      "Whisk olive oil, lemon juice, salt, and pepper.",
      "Pour dressing over salad and toss to combine.",
      "Chill before serving."
    ],
  },

  {
    slug: "italian-potatoes",
    title: "Italian Potatoes",
    course: "Secondo",
    type: "potato",
    blurb: "Roasted Italian-style potatoes with garlic, olive oil, and herbs.",
    ingredients: [
      "4 large potatoes, cubed",
      "3 cloves garlic, minced",
      "1/4 cup olive oil",
      "1 teaspoon dried oregano",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Preheat oven to 400°F (200°C).",
      "Toss potatoes with olive oil, garlic, oregano, salt, and pepper.",
      "Spread potatoes on a baking sheet in a single layer.",
      "Roast 40-50 minutes, stirring halfway, until golden and crisp."
    ],
  },

  {
    slug: "lentils-and-rice",
    title: "Lentils and Rice",
    course: "Secondo",
    type: "grain",
    blurb: "Savory lentils and rice cooked together with onions and olive oil.",
    ingredients: [
      "1 cup lentils",
      "1 cup long-grain rice",
      "1 onion, chopped",
      "3 tablespoons olive oil",
      "4 cups water",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Rinse lentils and place in a pot with water; bring to a boil.",
      "Simmer lentils 15 minutes until partially tender.",
      "In a skillet, sauté chopped onion in olive oil until soft.",
      "Add rice and onions to the lentils.",
      "Season with salt and pepper.",
      "Cook until rice and lentils are tender and water is absorbed."
    ],
  },

  {
    slug: "long-beans-with-tomato-sauce",
    title: "Long Beans with Tomato Sauce",
    course: "Secondo",
    type: "vegetable",
    blurb: "Stewed long beans simmered in a tomato and garlic sauce.",
    ingredients: [
      "1 lb long beans, cut into pieces",
      "2 tablespoons olive oil",
      "3 cloves garlic, minced",
      "1 (14 oz) can tomato sauce",
      "Salt",
      "Pepper",
      "Red pepper flakes (optional)"
    ],
    steps: [
      "Heat olive oil in a pot and sauté garlic until fragrant.",
      "Add long beans and stir to coat in oil.",
      "Pour in tomato sauce and season with salt, pepper, and red pepper flakes.",
      "Simmer 20-30 minutes until beans are tender.",
      "Serve warm."
    ],
  },

  {
    slug: "mashed-potatoes",
    title: "Mashed Potatoes",
    course: "Secondo",
    type: "potato",
    blurb: "Creamy mashed potatoes made with butter and milk.",
    ingredients: [
      "4-5 large potatoes, peeled and cubed",
      "4 tablespoons butter",
      "1/2-1 cup milk, warmed",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Boil potatoes in salted water until fork-tender.",
      "Drain and return to the pot.",
      "Mash with butter, adding warm milk gradually until desired consistency.",
      "Season with salt and pepper.",
      "Serve hot."
    ],
  },

  {
    slug: "mediterranean-chickpea-salad",
    title: "Mediterranean Chickpea Salad",
    course: "Secondo",
    type: "salad",
    blurb: "Chickpeas, vegetables, and herbs tossed in lemon-olive oil dressing.",
    ingredients: [
      "2 cans chickpeas, rinsed",
      "1 cucumber, diced",
      "1 red pepper, chopped",
      "1/2 red onion, chopped",
      "1/4 cup parsley, chopped",
      "3 tablespoons olive oil",
      "2 tablespoons lemon juice",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Combine chickpeas, cucumber, pepper, onion, and parsley in a bowl.",
      "Whisk olive oil, lemon juice, salt, and pepper.",
      "Pour dressing over salad and toss.",
      "Chill before serving."
    ],
  },

  {
    slug: "mushroom-caps",
    title: "Mushroom Caps",
    course: "Secondo",
    type: "vegetable",
    blurb: "Stuffed mushroom caps baked with breadcrumbs and cheese.",
    ingredients: [
      "1 lb mushrooms, stems removed",
      "1/2 cup breadcrumbs",
      "1/4 cup parmesan cheese",
      "2 cloves garlic, minced",
      "2 tablespoons parsley, chopped",
      "3 tablespoons olive oil",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Preheat oven to 375°F (190°C).",
      "Combine breadcrumbs, parmesan, garlic, parsley, olive oil, salt, and pepper.",
      "Fill each mushroom cap with the breadcrumb mixture.",
      "Arrange on a baking sheet and bake 15-20 minutes until golden."
    ],
  },

  {
    slug: "parmesan-potatoes",
    title: "Parmesan Potatoes",
    course: "Secondo",
    type: "potato",
    blurb: "Crispy roasted potatoes coated in parmesan cheese.",
    ingredients: [
      "4 potatoes, peeled and cubed",
      "1/4 cup olive oil",
      "1/2 cup parmesan cheese, grated",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Preheat oven to 400°F (200°C).",
      "Toss potatoes with olive oil, parmesan, salt, and pepper.",
      "Spread on a baking sheet.",
      "Roast 40-50 minutes until crisp and browned."
    ],
  },
  {
    slug: "peas",
    title: "Peas",
    course: "Secondo",
    type: "vegetable",
    blurb: "Simple sautéed peas with onions and olive oil.",
    ingredients: [
      "1 bag frozen peas",
      "1 small onion, chopped",
      "2 tablespoons olive oil",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Heat olive oil in a skillet over medium heat.",
      "Add chopped onion and sauté until soft.",
      "Add peas and cook until heated through.",
      "Season with salt and pepper and serve."
    ],
  },

  {
    slug: "peppers-and-onions",
    title: "Peppers and Onions",
    course: "Secondo",
    type: "vegetable",
    blurb: "Sautéed bell peppers and onions cooked until tender and sweet.",
    ingredients: [
      "2 bell peppers, sliced",
      "1 large onion, sliced",
      "2 tablespoons olive oil",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Heat olive oil in a skillet over medium heat.",
      "Add sliced peppers and onions.",
      "Cook 15-20 minutes until soft and caramelized.",
      "Season with salt and pepper."
    ],
  },

  {
    slug: "potato-croquettes",
    title: "Potato Croquettes",
    course: "Secondo",
    type: "potato",
    blurb: "Crispy fried potato croquettes with cheese.",
    ingredients: [
      "3 cups mashed potatoes",
      "1 cup shredded mozzarella or provolone",
      "1 egg",
      "1/2 cup breadcrumbs",
      "Salt",
      "Pepper",
      "Oil for frying"
    ],
    steps: [
      "Mix mashed potatoes, cheese, egg, salt, and pepper.",
      "Shape mixture into logs or balls.",
      "Roll in breadcrumbs to coat.",
      "Heat oil in a pan and fry croquettes until golden brown.",
      "Drain on paper towels and serve warm."
    ],
  },

  {
    slug: "potato-salad",
    title: "Potato Salad",
    course: "Secondo",
    type: "potato",
    blurb: "Classic creamy potato salad with mayonnaise and mustard.",
    ingredients: [
      "6 potatoes, cubed",
      "1/2 cup mayonnaise",
      "2 tablespoons mustard",
      "1/4 cup chopped onion",
      "2 hard-boiled eggs, chopped",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Boil potatoes in salted water until tender, then drain and cool.",
      "In a bowl, combine mayonnaise, mustard, onion, and eggs.",
      "Fold potatoes into dressing.",
      "Season with salt and pepper.",
      "Chill before serving."
    ],
  },

  {
    slug: "quinoa-salad",
    title: "Quinoa Salad",
    course: "Secondo",
    type: "grain",
    blurb: "Light quinoa salad with vegetables and lemon dressing.",
    ingredients: [
      "1 cup quinoa",
      "2 cups water",
      "1 cucumber, diced",
      "1 red pepper, chopped",
      "1/4 cup parsley, chopped",
      "3 tablespoons olive oil",
      "2 tablespoons lemon juice",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Cook quinoa in water until fluffy; cool.",
      "Combine quinoa, cucumber, pepper, and parsley.",
      "Whisk lemon juice, olive oil, salt, and pepper.",
      "Toss dressing with salad and chill."
    ],
  },

  {
    slug: "ratatouille",
    title: "Ratatouille",
    course: "Secondo",
    type: "vegetable",
    blurb: "Stewed eggplant, zucchini, peppers, and tomatoes with herbs.",
    ingredients: [
      "1 eggplant, diced",
      "2 zucchini, sliced",
      "1 red pepper, chopped",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "1 (14 oz) can diced tomatoes",
      "3 tablespoons olive oil",
      "Salt",
      "Pepper",
      "Oregano"
    ],
    steps: [
      "Heat olive oil in a large pot.",
      "Add onion and garlic; sauté until soft.",
      "Add eggplant, zucchini, and pepper and cook 10 minutes.",
      "Stir in tomatoes, salt, pepper, and oregano.",
      "Simmer 20-30 minutes until vegetables are tender."
    ],
  },

  {
    slug: "rice-pilaf",
    title: "Rice Pilaf",
    course: "Secondo",
    type: "grain",
    blurb: "Simple rice pilaf cooked with onion and broth.",
    ingredients: [
      "1 cup long-grain rice",
      "2 cups chicken broth",
      "1 small onion, chopped",
      "2 tablespoons butter or olive oil",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Sauté onion in butter or oil until soft.",
      "Add rice and toast lightly.",
      "Pour in broth and season with salt and pepper.",
      "Cover and simmer until rice is tender and liquid is absorbed."
    ],
  },

  {
    slug: "roasted-broccoli",
    title: "Roasted Broccoli",
    course: "Secondo",
    type: "vegetable",
    blurb: "Oven-roasted broccoli florets with olive oil and garlic.",
    ingredients: [
      "1 large head broccoli, cut into florets",
      "3 tablespoons olive oil",
      "3 cloves garlic, minced",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Preheat oven to 425°F (220°C).",
      "Toss broccoli with olive oil, garlic, salt, and pepper.",
      "Spread on a baking sheet.",
      "Roast 20-25 minutes until browned and crispy."
    ],
  },

  {
    slug: "roasted-brussel-sprouts",
    title: "Roasted Brussel Sprouts",
    course: "Secondo",
    type: "vegetable",
    blurb: "Crispy roasted brussels sprouts with olive oil and salt.",
    ingredients: [
      "1 lb brussels sprouts, halved",
      "3 tablespoons olive oil",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Preheat oven to 400°F (200°C).",
      "Toss brussels sprouts with olive oil, salt, and pepper.",
      "Spread on a baking sheet cut-side down.",
      "Roast 25-35 minutes until crisp and browned."
    ],
  },

  {
    slug: "roasted-cauliflower",
    title: "Roasted Cauliflower",
    course: "Secondo",
    type: "vegetable",
    blurb: "Roasted cauliflower florets seasoned with olive oil and spices.",
    ingredients: [
      "1 head cauliflower, cut into florets",
      "3 tablespoons olive oil",
      "Salt",
      "Pepper",
      "Paprika (optional)"
    ],
    steps: [
      "Preheat oven to 400°F (200°C).",
      "Toss cauliflower florets with olive oil, salt, pepper, and paprika.",
      "Spread on a baking sheet.",
      "Roast 25-30 minutes until tender and browned."
    ],
  },

  {
    slug: "roasted-eggplant-and-zucchini",
    title: "Roasted Eggplant and Zucchini",
    course: "Secondo",
    type: "vegetable",
    blurb: "Roasted eggplant and zucchini tossed with olive oil and herbs.",
    ingredients: [
      "2 eggplants, cubed",
      "3 zucchini, sliced",
      "3 tablespoons olive oil",
      "Salt",
      "Pepper",
      "Oregano"
    ],
    steps: [
      "Preheat oven to 400°F (200°C).",
      "Toss eggplant and zucchini with olive oil, salt, pepper, and oregano.",
      "Spread on a baking sheet.",
      "Roast 30-40 minutes, stirring halfway, until caramelized."
    ],
  },

  {
    slug: "roasted-potatoes",
    title: "Roasted Potatoes",
    course: "Secondo",
    type: "potato",
    blurb: "Classic oven-roasted potatoes seasoned with salt, pepper, and olive oil.",
    ingredients: [
      "4-5 large potatoes, cubed",
      "3 tablespoons olive oil",
      "Salt",
      "Pepper",
      "Rosemary (optional)"
    ],
    steps: [
      "Preheat oven to 425°F (220°C).",
      "Toss potatoes with olive oil, salt, pepper, and rosemary.",
      "Spread on a baking sheet.",
      "Roast 45 minutes, stirring halfway."
    ],
  },
  {
    slug: "roasted-potatoes-with-onions",
    title: "Roasted Potatoes with Onions",
    course: "Secondo",
    type: "potato",
    blurb: "Oven-roasted potatoes mixed with sweet caramelized onions.",
    ingredients: [
      "4-5 potatoes, cubed",
      "1 large onion, sliced",
      "3 tablespoons olive oil",
      "Salt",
      "Pepper",
      "Paprika (optional)"
    ],
    steps: [
      "Preheat oven to 400°F (200°C).",
      "Toss potatoes and onions with olive oil, salt, pepper, and paprika.",
      "Spread evenly on a roasting pan.",
      "Roast 40-50 minutes, stirring occasionally, until potatoes are golden and onions are caramelized."
    ],
  },

  {
    slug: "roasted-sweet-potatoes",
    title: "Roasted Sweet Potatoes",
    course: "Secondo",
    type: "potato",
    blurb: "Caramelized roasted sweet potatoes seasoned simply with olive oil.",
    ingredients: [
      "3-4 sweet potatoes, cubed",
      "3 tablespoons olive oil",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Preheat oven to 425°F (220°C).",
      "Toss sweet potato cubes with olive oil, salt, and pepper.",
      "Spread on a baking sheet in a single layer.",
      "Roast 30-40 minutes, stirring halfway, until caramelized and tender."
    ],
  },

  {
    slug: "sauteed-mushrooms",
    title: "Sautéed Mushrooms",
    course: "Secondo",
    type: "vegetable",
    blurb: "Simple sautéed mushrooms with garlic and olive oil.",
    ingredients: [
      "1 lb mushrooms, sliced",
      "2 tablespoons olive oil or butter",
      "2 cloves garlic, minced",
      "Salt",
      "Pepper",
      "Parsley, chopped (optional)"
    ],
    steps: [
      "Heat olive oil or butter in a skillet over medium heat.",
      "Add mushrooms and cook until they release their moisture.",
      "Stir in garlic and cook until fragrant.",
      "Season with salt and pepper.",
      "Top with chopped parsley, if using."
    ],
  },

  {
    slug: "spinach-with-garlic",
    title: "Spinach with Garlic",
    course: "Secondo",
    type: "vegetable",
    blurb: "Quick sautéed spinach with garlic and olive oil.",
    ingredients: [
      "2 bags spinach",
      "2 cloves garlic, minced",
      "2 tablespoons olive oil",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Heat olive oil in a large skillet.",
      "Add garlic and sauté briefly.",
      "Add spinach and cook until wilted.",
      "Season with salt and pepper.",
      "Serve immediately."
    ],
  },

  {
    slug: "stuffed-mushrooms",
    title: "Stuffed Mushrooms",
    course: "Secondo",
    type: "vegetable",
    blurb: "Baked mushroom caps stuffed with breadcrumbs and cheese.",
    ingredients: [
      "1 lb mushrooms, stems removed",
      "1/2 cup breadcrumbs",
      "1/4 cup parmesan cheese",
      "2 cloves garlic, minced",
      "2 tablespoons parsley, chopped",
      "3 tablespoons olive oil",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Preheat oven to 375°F (190°C).",
      "Combine breadcrumbs, cheese, garlic, parsley, olive oil, salt, and pepper.",
      "Fill each mushroom cap with the breadcrumb mixture.",
      "Place on a baking sheet and bake 15-20 minutes until golden."
    ],
  },

  {
    slug: "stuffed-peppers",
    title: "Stuffed Peppers",
    course: "Secondo",
    type: "vegetable",
    blurb: "Bell peppers stuffed with rice and seasoned tomatoes.",
    ingredients: [
      "4 bell peppers, tops removed and seeded",
      "1 cup cooked rice",
      "1 (14 oz) can diced tomatoes",
      "1/2 onion, chopped",
      "2 cloves garlic, minced",
      "1 tablespoon olive oil",
      "Salt",
      "Pepper",
      "Oregano"
    ],
    steps: [
      "Preheat oven to 375°F (190°C).",
      "Sauté onion and garlic in olive oil until soft.",
      "Add tomatoes, rice, salt, pepper, and oregano.",
      "Stuff peppers with the mixture and place in a baking dish.",
      "Bake 45-50 minutes until peppers are tender."
    ],
  },

  {
    slug: "sweet-potatoes-with-brown-sugar",
    title: "Sweet Potatoes with Brown Sugar",
    course: "Secondo",
    type: "potato",
    blurb: "Tender baked sweet potatoes topped with butter and brown sugar.",
    ingredients: [
      "4 sweet potatoes",
      "3 tablespoons butter",
      "1/4 cup brown sugar",
      "Salt"
    ],
    steps: [
      "Preheat oven to 400°F (200°C).",
      "Bake sweet potatoes whole until tender, about 45-60 minutes.",
      "Split potatoes and add butter, brown sugar, and a pinch of salt.",
      "Serve warm."
    ],
  },

  {
    slug: "tomato-salad",
    title: "Tomato Salad",
    course: "Secondo",
    type: "salad",
    blurb: "Fresh tomato salad with basil, olive oil, and salt.",
    ingredients: [
      "4 tomatoes, sliced",
      "1 handful basil leaves, torn",
      "2 tablespoons olive oil",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Slice tomatoes and arrange in a bowl.",
      "Top with torn basil.",
      "Drizzle with olive oil.",
      "Season with salt and pepper before serving."
    ],
  },

  {
    slug: "zucchini-fritters",
    title: "Zucchini Fritters",
    course: "Secondo",
    type: "vegetable",
    blurb: "Crispy pan-fried zucchini fritters with cheese and breadcrumbs.",
    ingredients: [
      "2 zucchini, grated",
      "1 egg",
      "1/2 cup breadcrumbs",
      "1/4 cup grated parmesan",
      "Salt",
      "Pepper",
      "Oil for frying"
    ],
    steps: [
      "Combine grated zucchini, egg, breadcrumbs, parmesan, salt, and pepper.",
      "Form mixture into small patties.",
      "Heat oil in a skillet over medium heat.",
      "Fry patties until golden on both sides.",
      "Drain on paper towels and serve."
    ],
  },
  {
    slug: "pasta-fagioli",
    title: "Pasta Fagioli",
    course: "Primo",
    type: "soup",
    blurb: "Classic Italian pasta and bean soup with tomatoes and aromatics.",
    ingredients: [
      "1 onion, chopped",
      "2 carrots, chopped",
      "2 celery stalks, chopped",
      "3 cloves garlic, minced",
      "3 tablespoons olive oil",
      "1 can diced tomatoes",
      "2 cans cannellini beans, rinsed",
      "6 cups chicken or vegetable broth",
      "1 cup ditalini or small pasta",
      "Salt",
      "Pepper",
      "Oregano",
      "Parmesan (optional)"
    ],
    steps: [
      "Sauté onion, carrots, celery, and garlic in olive oil until soft.",
      "Add tomatoes, beans, broth, salt, pepper, and oregano.",
      "Simmer 20 minutes.",
      "Add pasta and cook until tender.",
      "Serve with parmesan if desired."
    ],
  },

  {
    slug: "split-pea-soup",
    title: "Split Pea Soup",
    course: "Primo",
    type: "soup",
    blurb: "Thick traditional split pea soup made with carrots, celery, and ham.",
    ingredients: [
      "1 lb split peas, rinsed",
      "1 onion, chopped",
      "2 carrots, chopped",
      "2 celery stalks, chopped",
      "2 cloves garlic, minced",
      "1 ham bone or chopped ham (optional)",
      "8 cups water or broth",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Combine peas, onion, carrots, celery, garlic, water or broth, and ham in a pot.",
      "Bring to a boil, then simmer 1-1.5 hours until peas break down.",
      "Stir occasionally to prevent sticking.",
      "Season with salt and pepper and serve."
    ],
  },

  {
    slug: "stracciatella",
    title: "Stracciatella",
    course: "Primo",
    type: "soup",
    blurb: "Roman egg-drop soup with parmesan, parsley, and broth.",
    ingredients: [
      "6 cups chicken broth",
      "3 eggs",
      "1/3 cup grated parmesan cheese",
      "2 tablespoons parsley, chopped",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Bring broth to a simmer.",
      "Beat eggs with parmesan, parsley, salt, and pepper.",
      "Slowly drizzle egg mixture into the simmering broth, stirring gently to form ribbons.",
      "Cook 1-2 minutes and serve immediately."
    ],
  },

  {
    slug: "tortellini-in-brodo",
    title: "Tortellini in Brodo",
    course: "Primo",
    type: "soup",
    blurb: "Traditional Italian tortellini served in a rich broth.",
    ingredients: [
      "6 cups chicken or beef broth",
      "10-12 oz cheese or meat tortellini",
      "Salt",
      "Pepper",
      "Parmesan cheese"
    ],
    steps: [
      "Bring broth to a boil.",
      "Add tortellini and cook according to package directions.",
      "Season with salt and pepper.",
      "Serve with parmesan cheese."
    ],
  },

  {
    slug: "vegetable-soup",
    title: "Vegetable Soup",
    course: "Primo",
    type: "soup",
    blurb: "Simple mixed vegetable soup with tomatoes and broth.",
    ingredients: [
      "1 onion, chopped",
      "2 carrots, chopped",
      "2 celery stalks, chopped",
      "1 potato, diced",
      "1 zucchini, diced",
      "1 cup cabbage, chopped",
      "1 can diced tomatoes",
      "6 cups broth or water",
      "Salt",
      "Pepper",
      "Oregano"
    ],
    steps: [
      "Sauté onion, carrots, celery, and garlic in olive oil until soft.",
      "Add remaining vegetables, tomatoes, broth, salt, pepper, and oregano.",
      "Simmer 25-35 minutes until vegetables are tender.",
      "Adjust seasoning and serve."
    ],
  },

  {
    slug: "zuppa-toscana",
    title: "Zuppa Toscana",
    course: "Primo",
    type: "soup",
    blurb: "Tuscan-style soup with sausage, potatoes, kale, and cream.",
    ingredients: [
      "1 lb Italian sausage, crumbled",
      "1 onion, chopped",
      "3 cloves garlic, minced",
      "4 potatoes, sliced",
      "6 cups chicken broth",
      "1 bunch kale, chopped",
      "1 cup heavy cream",
      "Salt",
      "Pepper",
      "Red pepper flakes"
    ],
    steps: [
      "Brown sausage in a pot; remove excess fat.",
      "Add onion and garlic; cook until softened.",
      "Add potatoes, broth, salt, pepper, and red pepper flakes.",
      "Simmer until potatoes are tender.",
      "Stir in kale and cook 5 minutes.",
      "Add cream and heat gently before serving."
    ],
  },
  {
    slug: "baked-ziti",
    title: "Baked Ziti",
    course: "Primo",
    type: "pasta",
    blurb: "Classic Italian-American baked ziti with ricotta, mozzarella, and tomato sauce.",
    ingredients: [
      "1 lb ziti pasta",
      "3 cups tomato sauce or marinara",
      "1 lb ricotta cheese",
      "2 cups shredded mozzarella",
      "1/2 cup grated parmesan",
      "1 egg",
      "Salt",
      "Pepper",
      "Olive oil"
    ],
    steps: [
      "Preheat oven to 375°F (190°C).",
      "Boil pasta until just shy of al dente; drain and drizzle with olive oil.",
      "In a bowl, combine ricotta, egg, parmesan, salt, and pepper.",
      "Toss pasta with ricotta mixture and about half the marinara.",
      "Transfer to a baking dish.",
      "Top with remaining marinara and mozzarella.",
      "Bake 25-30 minutes until bubbling and golden."
    ],
  },

  {
    slug: "bolognese",
    title: "Bolognese",
    course: "Primo",
    type: "sauce",
    blurb: "Slow-simmered Italian meat sauce made with beef, vegetables, tomatoes, and wine.",
    ingredients: [
      "1 lb ground beef or beef/pork mix",
      "1 onion, finely chopped",
      "2 carrots, finely chopped",
      "2 celery stalks, finely chopped",
      "3 cloves garlic, minced",
      "1/2 cup red wine",
      "1 (28 oz) can crushed tomatoes",
      "1 cup milk",
      "Olive oil",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Sauté onion, carrot, celery, and garlic in olive oil until softened.",
      "Add ground meat and cook until browned.",
      "Pour in red wine and simmer until reduced.",
      "Stir in tomatoes, salt, and pepper.",
      "Simmer uncovered 45-90 minutes, stirring occasionally.",
      "Add milk toward the end to mellow acidity.",
      "Serve over pasta."
    ],
  },

  {
    slug: "cacio-e-pepe",
    title: "Cacio e Pepe",
    course: "Primo",
    type: "pasta",
    blurb: "Roman pasta dish with pecorino cheese and black pepper.",
    ingredients: [
      "1 lb spaghetti or tonnarelli",
      "1-1.5 cups pecorino romano, finely grated",
      "2-3 teaspoons black pepper, freshly ground",
      "Salt"
    ],
    steps: [
      "Boil pasta in salted water until al dente.",
      "Toast black pepper in a skillet until fragrant.",
      "Add a ladle of pasta water to the pan and simmer.",
      "Drain pasta and add to the skillet.",
      "Remove from heat and add pecorino, tossing vigorously.",
      "Add more pasta water as needed to form a creamy sauce."
    ],
  },

  {
    slug: "carbonara",
    title: "Carbonara",
    course: "Primo",
    type: "pasta",
    blurb: "Rich Roman pasta with eggs, cheese, guanciale, and black pepper.",
    ingredients: [
      "1 lb spaghetti",
      "6 oz guanciale or pancetta, diced",
      "2 eggs + 2 egg yolks",
      "1 cup pecorino romano, grated",
      "Black pepper",
      "Salt"
    ],
    steps: [
      "Cook spaghetti in salted water.",
      "Sauté guanciale until crispy; remove from heat.",
      "Whisk eggs, yolks, pecorino, and black pepper in a bowl.",
      "Drain pasta, reserving water, and combine with guanciale.",
      "Remove from heat and stir in egg mixture quickly, adding pasta water to create a creamy sauce.",
      "Serve immediately with extra pecorino and black pepper."
    ],
  },

  {
    slug: "fettuccine-alfredo",
    title: "Fettuccine Alfredo",
    course: "Primo",
    type: "pasta",
    blurb: "Creamy pasta tossed with butter, cream, and parmesan cheese.",
    ingredients: [
      "1 lb fettuccine",
      "1 stick butter",
      "1 cup heavy cream",
      "1.5 cups grated parmesan",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Cook fettuccine in salted boiling water.",
      "In a saucepan, melt butter and add cream; simmer 2-3 minutes.",
      "Stir in parmesan until melted.",
      "Toss sauce with hot pasta.",
      "Season with salt and pepper and serve."
    ],
  },

  {
    slug: "lasagna",
    title: "Lasagna",
    course: "Primo",
    type: "pasta",
    blurb: "Layered baked lasagna with tomato sauce, ricotta, mozzarella, and parmesan.",
    ingredients: [
      "1 box lasagna noodles (no-boil or boiled)",
      "4 cups marinara or meat sauce",
      "1 lb ricotta",
      "2 cups shredded mozzarella",
      "1/2 cup grated parmesan",
      "1 egg",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Preheat oven to 375°F (190°C).",
      "Mix ricotta, egg, parmesan, salt, and pepper.",
      "Spread a thin layer of sauce in a baking pan.",
      "Layer noodles, ricotta mixture, mozzarella, and sauce.",
      "Repeat layers, ending with sauce and mozzarella.",
      "Bake 45 minutes until bubbling.",
      "Let rest 10-15 minutes before slicing."
    ],
  },

  {
    slug: "linguine-with-clam-sauce",
    title: "Linguine with Clam Sauce",
    course: "Primo",
    type: "pasta",
    blurb: "Linguine tossed with garlic, parsley, olive oil, and clams.",
    ingredients: [
      "1 lb linguine",
      "2 cans chopped or minced clams (with juice)",
      "3 tablespoons olive oil",
      "3 cloves garlic, minced",
      "1/4 cup parsley, chopped",
      "1/2 cup white wine (optional)",
      "Red pepper flakes (optional)",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Cook linguine in salted water.",
      "Sauté garlic and red pepper flakes in olive oil.",
      "Add clams with their juice and white wine.",
      "Simmer 5 minutes.",
      "Toss with linguine and parsley.",
      "Season with salt and pepper."
    ],
  },

  {
    slug: "marinara",
    title: "Marinara",
    course: "Primo",
    type: "sauce",
    blurb: "Simple tomato marinara sauce with garlic and basil.",
    ingredients: [
      "2 (28 oz) cans crushed tomatoes",
      "4 cloves garlic, sliced",
      "1/4 cup olive oil",
      "Salt",
      "Pepper",
      "Fresh basil"
    ],
    steps: [
      "Heat olive oil and lightly sauté garlic.",
      "Add crushed tomatoes, salt, and pepper.",
      "Simmer 20-30 minutes.",
      "Stir in fresh basil before serving."
    ],
  },

  {
    slug: "meat-sauce",
    title: "Meat Sauce",
    course: "Primo",
    type: "sauce",
    blurb: "Tomato-based meat sauce simmered with onions and herbs.",
    ingredients: [
      "1 lb ground beef",
      "1 onion, chopped",
      "3 cloves garlic, minced",
      "1 (28 oz) can crushed tomatoes",
      "1 teaspoon oregano",
      "Olive oil",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Sauté onion and garlic in olive oil.",
      "Add ground beef and brown thoroughly.",
      "Stir in tomatoes, oregano, salt, and pepper.",
      "Simmer 30-45 minutes.",
      "Serve with pasta."
    ],
  },

  {
    slug: "pesto",
    title: "Pesto",
    course: "Primo",
    type: "sauce",
    blurb: "Fresh basil pesto with garlic, pine nuts, parmesan, and olive oil.",
    ingredients: [
      "2 cups fresh basil leaves",
      "2 cloves garlic",
      "1/4 cup pine nuts or walnuts",
      "1/2 cup parmesan cheese",
      "1/2 cup olive oil",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Blend basil, garlic, nuts, and parmesan in a food processor.",
      "Slowly add olive oil while blending.",
      "Season with salt and pepper.",
      "Toss with pasta or use as a sauce."
    ],
  },

  {
    slug: "risotto",
    title: "Risotto",
    course: "Primo",
    type: "grain",
    blurb: "Creamy Italian rice dish cooked slowly with broth and parmesan.",
    ingredients: [
      "1 1/2 cups arborio rice",
      "1 onion, finely chopped",
      "3 tablespoons butter",
      "1/2 cup white wine (optional)",
      "5 cups warm chicken or vegetable broth",
      "1 cup grated parmesan",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Sauté onion in butter until soft.",
      "Add rice and toast lightly.",
      "Add wine and simmer until absorbed.",
      "Add broth one ladle at a time, stirring until absorbed before adding more.",
      "Continue until rice is creamy and tender.",
      "Stir in parmesan, salt, and pepper."
    ],
  },

  {
    slug: "vodka-sauce",
    title: "Vodka Sauce",
    course: "Primo",
    type: "sauce",
    blurb: "Creamy tomato-vodka sauce for penne or rigatoni.",
    ingredients: [
      "2 tablespoons olive oil",
      "1 onion, finely chopped",
      "2 cloves garlic, minced",
      "1/2 cup vodka",
      "1 (28 oz) can crushed tomatoes",
      "1 cup cream",
      "Salt",
      "Pepper",
      "Red pepper flakes"
    ],
    steps: [
      "Sauté onion and garlic in olive oil until soft.",
      "Add vodka and simmer until reduced by half.",
      "Stir in tomatoes, salt, pepper, and red pepper flakes.",
      "Simmer 15 minutes.",
      "Stir in cream and heat gently.",
      "Serve with pasta."
    ],
  },
  {
    slug: "sunday-sauce",
    title: "Sunday Sauce",
    course: "Primo",
    type: "sauce",
    blurb: "Traditional slow-cooked Italian Sunday sauce with meat and tomatoes.",
    ingredients: [
      "2 tablespoons olive oil",
      "1 onion, chopped",
      "3 cloves garlic, minced",
      "1 lb Italian sausage or meatballs",
      "1 lb pork ribs or braciole (optional)",
      "2 (28 oz) cans crushed tomatoes",
      "1 small can tomato paste",
      "1 teaspoon oregano",
      "Salt",
      "Pepper",
      "Fresh basil"
    ],
    steps: [
      "Brown sausage, ribs, or meatballs in olive oil; set aside.",
      "Sauté onion and garlic in the same pot until softened.",
      "Add crushed tomatoes, tomato paste, oregano, salt, and pepper.",
      "Return meat to the pot.",
      "Simmer 2-4 hours, stirring occasionally.",
      "Stir in fresh basil before serving.",
      "Serve over pasta or with bread."
    ],
  },

  {
    slug: "tomato-sauce-with-meat",
    title: "Tomato Sauce with Meat",
    course: "Primo",
    type: "sauce",
    blurb: "Tomato sauce simmered gently with meat for extra richness.",
    ingredients: [
      "1-2 lbs beef, pork, or sausage",
      "2 tablespoons olive oil",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "2 (28 oz) cans crushed tomatoes",
      "Salt",
      "Pepper",
      "Oregano",
      "Fresh basil"
    ],
    steps: [
      "Brown meat in olive oil; remove and set aside.",
      "Sauté onion and garlic in drippings.",
      "Add crushed tomatoes, salt, pepper, and oregano.",
      "Return meat to the sauce.",
      "Simmer 1.5-3 hours.",
      "Add fresh basil before serving."
    ],
  },

  {
    slug: "tortellini-alla-panna",
    title: "Tortellini alla Panna",
    course: "Primo",
    type: "pasta",
    blurb: "Creamy tortellini with ham and parmesan.",
    ingredients: [
      "12 oz cheese tortellini",
      "1 tablespoon butter",
      "1/2 cup diced ham",
      "1 cup heavy cream",
      "1/2 cup grated parmesan",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Cook tortellini according to package directions.",
      "Sauté diced ham in butter.",
      "Stir in cream and simmer gently.",
      "Add parmesan and season with salt and pepper.",
      "Toss sauce with tortellini and serve."
    ],
  },

  {
    slug: "white-clam-sauce",
    title: "White Clam Sauce",
    course: "Primo",
    type: "sauce",
    blurb: "Garlicky white wine clam sauce for linguine.",
    ingredients: [
      "2 cans minced clams with juice",
      "3 cloves garlic, minced",
      "1/4 cup olive oil",
      "1/2 cup white wine",
      "Red pepper flakes",
      "Salt",
      "Pepper",
      "Parsley"
    ],
    steps: [
      "Sauté garlic and red pepper flakes in olive oil.",
      "Add wine and simmer 1-2 minutes.",
      "Add clams with juice.",
      "Season with salt and pepper.",
      "Simmer 5-10 minutes.",
      "Stir in chopped parsley and serve with pasta."
    ],
  },

  {
    slug: "arugula-pesto",
    title: "Arugula Pesto",
    course: "Primo",
    type: "sauce",
    blurb: "Peppery pesto made with arugula, parmesan, and olive oil.",
    ingredients: [
      "3 cups arugula",
      "1 clove garlic",
      "1/4 cup walnuts or pine nuts",
      "1/2 cup parmesan cheese",
      "1/2 cup olive oil",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Blend arugula, garlic, nuts, and parmesan in a food processor.",
      "Stream in olive oil until smooth.",
      "Season with salt and pepper.",
      "Serve over pasta or as a spread."
    ],
  },

  {
    slug: "basil-cream-sauce",
    title: "Basil Cream Sauce",
    course: "Primo",
    type: "sauce",
    blurb: "Rich cream sauce flavored with basil and garlic.",
    ingredients: [
      "1 cup heavy cream",
      "2 tablespoons butter",
      "2 cloves garlic, minced",
      "1/2 cup grated parmesan",
      "1/2 cup fresh basil, chopped",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Sauté garlic in butter until fragrant.",
      "Add cream and simmer until slightly thickened.",
      "Stir in parmesan and basil.",
      "Season with salt and pepper.",
      "Serve over pasta."
    ],
  },

  {
    slug: "broccoli-rabe-pasta",
    title: "Broccoli Rabe Pasta",
    course: "Primo",
    type: "pasta",
    blurb: "Bitter broccoli rabe sautéed with garlic and tossed with pasta.",
    ingredients: [
      "1 bunch broccoli rabe, trimmed",
      "1 lb pasta (orecchiette or penne)",
      "3 cloves garlic, minced",
      "1/4 cup olive oil",
      "Red pepper flakes",
      "Salt",
      "Pepper",
      "Parmesan (optional)"
    ],
    steps: [
      "Boil broccoli rabe until just tender; drain.",
      "Cook pasta until al dente.",
      "Sauté garlic and red pepper flakes in olive oil.",
      "Add broccoli rabe and cook a few minutes.",
      "Toss mixture with pasta.",
      "Season with salt and pepper and top with parmesan if desired."
    ],
  },

  {
    slug: "garlic-and-oil",
    title: "Garlic and Oil (Aglio e Olio)",
    course: "Primo",
    type: "pasta",
    blurb: "Pasta tossed with olive oil, garlic, and red pepper flakes.",
    ingredients: [
      "1 lb spaghetti",
      "1/3 cup olive oil",
      "5 cloves garlic, thinly sliced",
      "Red pepper flakes",
      "Salt",
      "Parsley (optional)"
    ],
    steps: [
      "Cook spaghetti in salted water.",
      "Sauté garlic and red pepper flakes in olive oil until lightly golden.",
      "Toss with hot pasta and pasta water if needed.",
      "Season with salt and garnish with parsley."
    ],
  },

  {
    slug: "gnocchi",
    title: "Gnocchi",
    course: "Primo",
    type: "pasta",
    blurb: "Homemade potato gnocchi, soft and pillowy.",
    ingredients: [
      "2 lbs potatoes",
      "1-1.5 cups flour",
      "1 egg",
      "Salt"
    ],
    steps: [
      "Boil potatoes until soft; peel and mash while warm.",
      "Mix with egg and salt.",
      "Add flour gradually until dough comes together.",
      "Roll into ropes and cut into gnocchi pieces.",
      "Boil until they float, then toss with sauce."
    ],
  },

  {
    slug: "italian-mac-and-cheese",
    title: "Italian Mac & Cheese",
    course: "Primo",
    type: "pasta",
    blurb: "Creamy baked pasta with Italian cheeses.",
    ingredients: [
      "1 lb short pasta",
      "3 tablespoons butter",
      "3 tablespoons flour",
      "3 cups milk",
      "1.5 cups mozzarella",
      "1 cup parmesan",
      "1 cup provolone",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Cook pasta until al dente.",
      "Make a roux with butter and flour; whisk in milk until thick.",
      "Stir in cheeses until melted.",
      "Season with salt and pepper.",
      "Combine with pasta and bake at 350°F (175°C) for 20 minutes."
    ],
  },
  {
    slug: "baked-chicken",
    title: "Baked Chicken",
    course: "Secondo",
    type: "meat",
    blurb: "Simple oven-baked chicken seasoned with herbs and olive oil.",
    ingredients: [
      "4-6 chicken thighs or breasts",
      "3 tablespoons olive oil",
      "2 cloves garlic, minced",
      "1 teaspoon oregano",
      "1 teaspoon paprika",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Preheat oven to 400°F (200°C).",
      "Place chicken in a baking dish and drizzle with olive oil.",
      "Season with garlic, oregano, paprika, salt, and pepper.",
      "Bake 35-45 minutes until cooked through and browned."
    ],
  },

  {
    slug: "bistecca",
    title: "Bistecca",
    course: "Secondo",
    type: "meat",
    blurb: "Italian steak cooked simply with salt, pepper, and olive oil.",
    ingredients: [
      "1-2 ribeye or sirloin steaks",
      "Olive oil",
      "Salt",
      "Pepper",
      "Rosemary (optional)"
    ],
    steps: [
      "Bring steak to room temperature and season with salt and pepper.",
      "Heat a cast-iron skillet with olive oil over high heat.",
      "Sear steak 3-5 minutes per side or until desired doneness.",
      "Add rosemary to the pan if desired.",
      "Rest meat 5 minutes before slicing."
    ],
  },

  {
    slug: "chicken-cacciatore",
    title: "Chicken Cacciatore",
    course: "Secondo",
    type: "meat",
    blurb: "Rustic Italian chicken braised with tomatoes, peppers, onion, and wine.",
    ingredients: [
      "4-6 chicken thighs or breasts",
      "2 tablespoons olive oil",
      "1 onion, sliced",
      "1 pepper, sliced",
      "3 cloves garlic, minced",
      "1 cup mushrooms, sliced",
      "1 (28 oz) can crushed tomatoes",
      "1/2 cup red wine",
      "Salt",
      "Pepper",
      "Oregano"
    ],
    steps: [
      "Brown chicken in olive oil and remove from pan.",
      "Sauté onion, pepper, mushrooms, and garlic until soft.",
      "Add tomatoes, wine, oregano, salt, and pepper.",
      "Return chicken to the pan and simmer 35-45 minutes.",
      "Serve with pasta or bread."
    ],
  },

  {
    slug: "chicken-cutlets",
    title: "Chicken Cutlets",
    course: "Secondo",
    type: "meat",
    blurb: "Crispy breaded chicken cutlets pan-fried to golden perfection.",
    ingredients: [
      "4 chicken cutlets, pounded thin",
      "1 cup flour",
      "2 eggs, beaten",
      "1.5 cups breadcrumbs",
      "1/2 cup parmesan cheese",
      "Salt",
      "Pepper",
      "Oil for frying"
    ],
    steps: [
      "Season cutlets with salt and pepper.",
      "Dredge in flour, dip in egg, then coat with breadcrumbs mixed with parmesan.",
      "Heat oil in a skillet and fry cutlets until golden on each side.",
      "Drain on paper towels and serve."
    ],
  },

  {
    slug: "eggplant-parmigiana",
    title: "Eggplant Parmigiana",
    course: "Secondo",
    type: "vegetable",
    blurb: "Layered fried eggplant with marinara, mozzarella, and parmesan.",
    ingredients: [
      "2-3 eggplants, sliced",
      "Salt",
      "Oil for frying",
      "3 cups marinara",
      "2 cups mozzarella, shredded",
      "1/2 cup parmesan",
      "Fresh basil (optional)"
    ],
    steps: [
      "Salt eggplant slices and let drain 30 minutes; pat dry.",
      "Fry slices in oil until golden; drain.",
      "Layer sauce, eggplant, mozzarella, and parmesan in a baking dish.",
      "Repeat layers and finish with cheese.",
      "Bake at 375°F (190°C) for 30-35 minutes.",
      "Rest before slicing."
    ],
  },

  {
    slug: "meatballs",
    title: "Meatballs",
    course: "Secondo",
    type: "meat",
    blurb: "Tender Italian meatballs made with beef, breadcrumbs, and parmesan.",
    ingredients: [
      "1 lb ground beef",
      "1 egg",
      "1/2 cup breadcrumbs",
      "1/4 cup parmesan",
      "2 cloves garlic, minced",
      "2 tablespoons parsley, chopped",
      "Salt",
      "Pepper",
      "Olive oil",
      "Tomato sauce"
    ],
    steps: [
      "Mix beef, egg, breadcrumbs, parmesan, garlic, parsley, salt, and pepper.",
      "Roll into meatballs.",
      "Brown meatballs in olive oil.",
      "Simmer in tomato sauce 20-30 minutes."
    ],
  },

  {
    slug: "pork-chops",
    title: "Pork Chops",
    course: "Secondo",
    type: "meat",
    blurb: "Pan-seared or baked pork chops seasoned with herbs.",
    ingredients: [
      "4 pork chops",
      "2 tablespoons olive oil",
      "Salt",
      "Pepper",
      "Rosemary or oregano"
    ],
    steps: [
      "Season pork chops with salt, pepper, and herbs.",
      "Sear in olive oil 3-4 minutes per side.",
      "Transfer to 375°F (190°C) oven and bake 10-15 minutes until cooked through."
    ],
  },

  {
    slug: "steak-pizzaiola",
    title: "Steak Pizzaiola",
    course: "Secondo",
    type: "meat",
    blurb: "Steak cooked in tomato sauce with garlic, oregano, and peppers.",
    ingredients: [
      "1-2 lbs steak (sirloin or flank)",
      "2 tablespoons olive oil",
      "3 cloves garlic, minced",
      "1 can crushed tomatoes",
      "1 pepper, sliced",
      "Salt",
      "Pepper",
      "Oregano"
    ],
    steps: [
      "Sear steak in olive oil and set aside.",
      "Sauté garlic and peppers.",
      "Add tomatoes, oregano, salt, and pepper.",
      "Simmer 10-15 minutes.",
      "Return steak to sauce and cook until tender."
    ],
  },

  {
    slug: "veal-scaloppine",
    title: "Veal Scaloppine",
    course: "Secondo",
    type: "meat",
    blurb: "Thin veal cutlets cooked quickly in butter, wine, and lemon.",
    ingredients: [
      "1 lb veal cutlets, pounded thin",
      "Flour, for dredging",
      "3 tablespoons butter",
      "1/2 cup white wine",
      "Juice of 1 lemon",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Season veal with salt and pepper and dredge lightly in flour.",
      "Sear cutlets in butter until golden.",
      "Remove veal and deglaze pan with white wine and lemon juice.",
      "Return veal to pan and heat through.",
      "Serve immediately."
    ],
  },
  {
    slug: "veal-parmigiana",
    title: "Veal Parmigiana",
    course: "Secondo",
    type: "meat",
    blurb: "Breaded veal cutlets topped with marinara and melted mozzarella.",
    ingredients: [
      "1 lb veal cutlets, pounded thin",
      "1 cup flour",
      "2 eggs, beaten",
      "1.5 cups breadcrumbs",
      "1/2 cup parmesan cheese",
      "Salt",
      "Pepper",
      "Olive oil",
      "2 cups marinara sauce",
      "1.5 cups mozzarella, shredded"
    ],
    steps: [
      "Season veal with salt and pepper.",
      "Dredge in flour, dip in egg, and coat in breadcrumbs mixed with parmesan.",
      "Pan-fry in olive oil until golden; drain.",
      "Place cutlets in a baking dish, top with marinara and mozzarella.",
      "Bake at 375°F (190°C) for 15-20 minutes until cheese melts."
    ],
  },

  {
    slug: "veal-piccata",
    title: "Veal Piccata",
    course: "Secondo",
    type: "meat",
    blurb: "Classic veal piccata in lemon-butter sauce with capers.",
    ingredients: [
      "1 lb veal cutlets, thin",
      "Flour for dredging",
      "3 tablespoons butter",
      "2 tablespoons olive oil",
      "1/2 cup white wine",
      "Juice of 1 lemon",
      "2 tablespoons capers",
      "Salt",
      "Pepper",
      "Parsley (optional)"
    ],
    steps: [
      "Season and lightly flour veal.",
      "Sear in butter and olive oil until golden; remove.",
      "Deglaze pan with wine, lemon juice, and capers.",
      "Return veal and simmer 2-3 minutes.",
      "Garnish with parsley."
    ],
  },

  {
    slug: "stuffed-chicken",
    title: "Stuffed Chicken",
    course: "Secondo",
    type: "meat",
    blurb: "Baked chicken breasts stuffed with spinach, cheese, and herbs.",
    ingredients: [
      "4 chicken breasts",
      "1 cup spinach, cooked and chopped",
      "1 cup mozzarella or provolone",
      "1/4 cup parmesan",
      "2 cloves garlic, minced",
      "Salt",
      "Pepper",
      "Olive oil"
    ],
    steps: [
      "Cut a pocket into each chicken breast.",
      "Mix spinach, mozzarella, parmesan, garlic, salt, and pepper.",
      "Stuff mixture into pockets and secure with toothpicks.",
      "Drizzle with olive oil.",
      "Bake at 375°F (190°C) for 25-30 minutes."
    ],
  },

  {
    slug: "chicken-marsala",
    title: "Chicken Marsala",
    course: "Secondo",
    type: "meat",
    blurb: "Chicken cutlets simmered in Marsala wine with mushrooms.",
    ingredients: [
      "4 chicken cutlets",
      "Flour, for dredging",
      "3 tablespoons olive oil",
      "2 tablespoons butter",
      "1 cup mushrooms, sliced",
      "1 cup Marsala wine",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Season and lightly flour chicken.",
      "Sear in olive oil and butter until golden; remove.",
      "Sauté mushrooms until soft.",
      "Add Marsala wine and reduce slightly.",
      "Return chicken and simmer 5-7 minutes.",
      "Season to taste."
    ],
  },

  {
    slug: "chicken-francese",
    title: "Chicken Francese",
    course: "Secondo",
    type: "meat",
    blurb: "Lightly battered chicken cooked in a lemon-wine butter sauce.",
    ingredients: [
      "4 chicken cutlets",
      "1/2 cup flour",
      "2 eggs, beaten",
      "3 tablespoons butter",
      "2 tablespoons olive oil",
      "1/2 cup white wine",
      "Juice of 1 lemon",
      "Salt",
      "Pepper",
      "Parsley (optional)"
    ],
    steps: [
      "Season chicken and dredge in flour.",
      "Dip in beaten egg.",
      "Pan-fry in butter and olive oil until golden; remove.",
      "Add wine and lemon juice to pan; reduce slightly.",
      "Return chicken to sauce and simmer briefly.",
      "Garnish with parsley."
    ],
  },

  {
    slug: "chicken-parmesan",
    title: "Chicken Parmesan",
    course: "Secondo",
    type: "meat",
    blurb: "Breaded chicken cutlets baked with marinara and mozzarella.",
    ingredients: [
      "4 chicken cutlets",
      "1 cup flour",
      "2 eggs, beaten",
      "1.5 cups breadcrumbs",
      "1/2 cup parmesan",
      "Salt",
      "Pepper",
      "Olive oil",
      "2 cups marinara",
      "2 cups mozzarella"
    ],
    steps: [
      "Bread chicken with flour → egg → breadcrumb-parmesan mixture.",
      "Pan-fry until golden.",
      "Place in a baking dish and top with marinara and mozzarella.",
      "Bake at 375°F (190°C) until melted and bubbling."
    ],
  },

  {
    slug: "sausage-and-peppers",
    title: "Sausage and Peppers",
    course: "Secondo",
    type: "meat",
    blurb: "Italian sausages braised with peppers, onions, garlic, and tomatoes.",
    ingredients: [
      "1-2 lbs Italian sausage, whole or sliced",
      "2 peppers, sliced",
      "1 onion, sliced",
      "3 cloves garlic, minced",
      "1 can crushed tomatoes",
      "Olive oil",
      "Salt",
      "Pepper",
      "Oregano"
    ],
    steps: [
      "Brown sausages in olive oil.",
      "Add peppers, onions, and garlic; sauté until soft.",
      "Add crushed tomatoes, oregano, salt, and pepper.",
      "Simmer 25-30 minutes.",
      "Serve with bread or over pasta."
    ],
  },

  {
    slug: "roast-pork",
    title: "Roast Pork",
    course: "Secondo",
    type: "meat",
    blurb: "Tender roasted pork seasoned with garlic, rosemary, and olive oil.",
    ingredients: [
      "3-4 lb pork loin",
      "3 cloves garlic, minced",
      "2 tablespoons olive oil",
      "1 tablespoon rosemary",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Rub pork with olive oil, garlic, rosemary, salt, and pepper.",
      "Roast at 375°F (190°C) for 1-1.5 hours, depending on size.",
      "Rest before slicing."
    ],
  },

  {
    slug: "braciole",
    title: "Braciole",
    course: "Secondo",
    type: "meat",
    blurb: "Thin beef rolls stuffed with breadcrumbs, garlic, cheese, and parsley, simmered in sauce.",
    ingredients: [
      "1.5 lbs thin beef slices",
      "1 cup breadcrumbs",
      "1/2 cup parmesan",
      "2 cloves garlic, minced",
      "2 tablespoons parsley, chopped",
      "Salt",
      "Pepper",
      "Olive oil",
      "2-3 cups tomato sauce"
    ],
    steps: [
      "Combine breadcrumbs, parmesan, garlic, parsley, salt, and pepper.",
      "Spread mixture on beef slices and roll tightly; secure with toothpicks.",
      "Brown rolls in olive oil.",
      "Simmer in tomato sauce 1-2 hours until tender."
    ],
  },

  {
    slug: "meatloaf",
    title: "Meatloaf",
    course: "Secondo",
    type: "meat",
    blurb: "Classic meatloaf with breadcrumbs, eggs, and onions.",
    ingredients: [
      "1.5 lbs ground beef",
      "1 egg",
      "1/2 cup breadcrumbs",
      "1/4 cup milk",
      "1/2 onion, minced",
      "1/4 cup parmesan",
      "Salt",
      "Pepper",
      "Ketchup (optional topping)"
    ],
    steps: [
      "Mix beef, egg, breadcrumbs, milk, onion, parmesan, salt, and pepper.",
      "Shape into a loaf and place in a baking dish.",
      "Top with ketchup if desired.",
      "Bake at 350°F (175°C) for 1 hour."
    ],
  },

  {
    slug: "salmon",
    title: "Salmon",
    course: "Secondo",
    type: "fish",
    blurb: "Simple baked salmon with lemon, olive oil, and herbs.",
    ingredients: [
      "4 salmon fillets",
      "2 tablespoons olive oil",
      "1 lemon, sliced",
      "Salt",
      "Pepper",
      "Dill or parsley"
    ],
    steps: [
      "Place salmon on a baking sheet.",
      "Drizzle with olive oil and season with salt and pepper.",
      "Top with lemon slices and herbs.",
      "Bake at 400°F (200°C) for 12-15 minutes."
    ],
  },

  {
    slug: "shrimp-scampi",
    title: "Shrimp Scampi",
    course: "Secondo",
    type: "fish",
    blurb: "Shrimp sautéed in garlic, lemon, butter, and white wine.",
    ingredients: [
      "1 lb shrimp, peeled and deveined",
      "3 tablespoons butter",
      "2 tablespoons olive oil",
      "4 cloves garlic, minced",
      "1/2 cup white wine",
      "Juice of 1/2 lemon",
      "Salt",
      "Pepper",
      "Parsley"
    ],
    steps: [
      "Heat butter and olive oil in a skillet.",
      "Add garlic and sauté briefly.",
      "Add shrimp and cook until pink.",
      "Pour in wine and lemon juice; simmer 2 minutes.",
      "Season with salt and pepper, garnish with parsley."
    ],
  },
  {
    slug: "steak-florentine",
    title: "Steak Florentine",
    course: "Secondo",
    type: "meat",
    blurb: "Tuscan-style grilled steak finished with olive oil, lemon, and rosemary.",
    ingredients: [
      "1-2 lb porterhouse or T-bone steak",
      "Olive oil",
      "Salt",
      "Pepper",
      "Rosemary",
      "Lemon wedges"
    ],
    steps: [
      "Season steak generously with salt, pepper, and rosemary.",
      "Grill over high heat 3-5 minutes per side or until desired doneness.",
      "Rest briefly and drizzle with olive oil.",
      "Serve with lemon wedges."
    ],
  },

  {
    slug: "turkey-meatballs",
    title: "Turkey Meatballs",
    course: "Secondo",
    type: "meat",
    blurb: "Light and tender turkey meatballs simmered in tomato sauce.",
    ingredients: [
      "1 lb ground turkey",
      "1 egg",
      "1/2 cup breadcrumbs",
      "1/4 cup parmesan",
      "1/2 onion, minced",
      "2 cloves garlic, minced",
      "2 tablespoons parsley",
      "Salt",
      "Pepper",
      "Olive oil",
      "Tomato sauce"
    ],
    steps: [
      "Mix turkey, egg, breadcrumbs, parmesan, onion, garlic, parsley, salt, and pepper.",
      "Form into meatballs.",
      "Brown lightly in olive oil.",
      "Simmer in tomato sauce 20-25 minutes."
    ],
  },

  {
    slug: "veal-milanese",
    title: "Veal Milanese",
    course: "Secondo",
    type: "meat",
    blurb: "Crispy breaded veal cutlets topped with arugula and lemon.",
    ingredients: [
      "1 lb veal cutlets, thin",
      "1 cup flour",
      "2 eggs, beaten",
      "1.5 cups breadcrumbs",
      "Salt",
      "Pepper",
      "Olive oil",
      "Arugula",
      "Lemon wedges"
    ],
    steps: [
      "Season veal and dredge in flour.",
      "Dip in egg and coat in breadcrumbs.",
      "Pan-fry in olive oil until golden.",
      "Top with fresh arugula and serve with lemon."
    ],
  },

  {
    slug: "bbq-chicken",
    title: "BBQ Chicken",
    course: "Secondo",
    type: "meat",
    blurb: "Roasted or grilled chicken glazed with barbecue sauce.",
    ingredients: [
      "4-6 chicken thighs or drumsticks",
      "Salt",
      "Pepper",
      "Olive oil",
      "1 cup barbecue sauce"
    ],
    steps: [
      "Season chicken with salt, pepper, and olive oil.",
      "Bake at 400°F (200°C) for 35 minutes or grill until nearly done.",
      "Brush with barbecue sauce and cook 5-10 more minutes to caramelize."
    ],
  },

  {
    slug: "chicken-rollatini",
    title: "Chicken Rollatini",
    course: "Secondo",
    type: "meat",
    blurb: "Stuffed chicken rolls filled with cheese and herbs, baked in sauce.",
    ingredients: [
      "4 chicken cutlets, pounded thin",
      "4 slices provolone or mozzarella",
      "1/4 cup parmesan",
      "2 tablespoons parsley",
      "Salt",
      "Pepper",
      "Olive oil",
      "1 cup marinara sauce"
    ],
    steps: [
      "Season cutlets and layer with cheese and parsley.",
      "Roll tightly and secure with toothpicks.",
      "Sear rolls in olive oil until browned.",
      "Place in a baking dish, top with marinara, and bake at 375°F (190°C) for 20-25 minutes."
    ],
  },

  {
    slug: "pork-tenderloin",
    title: "Pork Tenderloin",
    course: "Secondo",
    type: "meat",
    blurb: "Juicy roasted pork tenderloin with herbs and garlic.",
    ingredients: [
      "1-2 pork tenderloins",
      "2 tablespoons olive oil",
      "3 cloves garlic, minced",
      "1 tablespoon rosemary",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Rub pork with oil, garlic, rosemary, salt, and pepper.",
      "Roast at 400°F (200°C) for 20-25 minutes.",
      "Rest before slicing."
    ],
  },

  {
    slug: "salmon-oreganata",
    title: "Salmon Oreganata",
    course: "Secondo",
    type: "fish",
    blurb: "Baked salmon topped with herbed breadcrumbs and lemon.",
    ingredients: [
      "4 salmon fillets",
      "1 cup breadcrumbs",
      "1/4 cup olive oil",
      "2 tablespoons oregano",
      "3 cloves garlic, minced",
      "Salt",
      "Pepper",
      "Lemon wedges"
    ],
    steps: [
      "Mix breadcrumbs, oregano, garlic, salt, pepper, and olive oil.",
      "Place salmon on a baking sheet and top with breadcrumb mixture.",
      "Bake at 400°F (200°C) for 12-15 minutes.",
      "Serve with lemon wedges."
    ],
  },

  {
    slug: "shrimp-fra-diavolo",
    title: "Shrimp Fra Diavolo",
    course: "Secondo",
    type: "fish",
    blurb: "Spicy shrimp simmered in garlicky tomato sauce.",
    ingredients: [
      "1 lb shrimp, peeled and deveined",
      "3 tablespoons olive oil",
      "4 cloves garlic, minced",
      "1/2 teaspoon red pepper flakes",
      "1 (28 oz) can crushed tomatoes",
      "Salt",
      "Pepper",
      "Parsley"
    ],
    steps: [
      "Sauté garlic and red pepper flakes in olive oil.",
      "Add shrimp and cook briefly until pink.",
      "Pour in tomatoes and simmer 10-15 minutes.",
      "Season with salt, pepper, and parsley."
    ],
  },

  {
    slug: "stuffed-flounder",
    title: "Stuffed Flounder",
    course: "Secondo",
    type: "fish",
    blurb: "Delicate flounder fillets stuffed with a savory breadcrumb mixture.",
    ingredients: [
      "4 flounder fillets",
      "1 cup breadcrumbs",
      "2 tablespoons parsley",
      "2 cloves garlic, minced",
      "1/4 cup parmesan",
      "3 tablespoons olive oil",
      "Salt",
      "Pepper",
      "Lemon wedges"
    ],
    steps: [
      "Mix breadcrumbs, parsley, garlic, parmesan, salt, pepper, and olive oil.",
      "Place stuffing on each fillet and roll tightly.",
      "Bake at 375°F (190°C) for 15-20 minutes.",
      "Serve with lemon wedges."
    ],
  },

  {
    slug: "tilapia-with-lemon",
    title: "Tilapia with Lemon",
    course: "Secondo",
    type: "fish",
    blurb: "Light baked tilapia with lemon, garlic, and olive oil.",
    ingredients: [
      "4 tilapia fillets",
      "2 tablespoons olive oil",
      "2 cloves garlic, minced",
      "Salt",
      "Pepper",
      "Lemon slices",
      "Parsley"
    ],
    steps: [
      "Place tilapia in a baking dish.",
      "Drizzle with olive oil and season with salt, pepper, and garlic.",
      "Top with lemon slices.",
      "Bake at 375°F (190°C) for 12-15 minutes.",
      "Garnish with parsley."
    ],
  },
  {
    slug: "turkey-cutlets",
    title: "Turkey Cutlets",
    course: "Secondo",
    type: "meat",
    blurb: "Lightly breaded turkey cutlets pan-seared until golden.",
    ingredients: [
      "1 lb turkey cutlets, pounded thin",
      "1/2 cup flour",
      "2 eggs, beaten",
      "1 cup breadcrumbs",
      "1/4 cup parmesan",
      "Salt",
      "Pepper",
      "Olive oil"
    ],
    steps: [
      "Season turkey cutlets with salt and pepper.",
      "Dredge in flour, dip in egg, and coat with breadcrumbs mixed with parmesan.",
      "Pan-fry in olive oil until golden and cooked through.",
      "Drain on paper towels before serving."
    ],
  },

  {
    slug: "stuffed-pork-chops",
    title: "Stuffed Pork Chops",
    course: "Secondo",
    type: "meat",
    blurb: "Thick pork chops stuffed with herbed breadcrumbs and baked.",
    ingredients: [
      "4 thick pork chops",
      "1 cup breadcrumbs",
      "1/4 cup parmesan",
      "2 tablespoons parsley",
      "2 cloves garlic, minced",
      "Olive oil",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Cut a pocket in each pork chop.",
      "Mix breadcrumbs, parmesan, parsley, garlic, salt, pepper, and olive oil.",
      "Stuff mixture into each chop.",
      "Sear chops in olive oil until browned.",
      "Bake at 375°F (190°C) for 20-25 minutes."
    ],
  },

  {
    slug: "chicken-oreganata",
    title: "Chicken Oreganata",
    course: "Secondo",
    type: "meat",
    blurb: "Baked chicken with a crispy oregano-breadcrumb topping.",
    ingredients: [
      "4 chicken thighs or breasts",
      "1 cup breadcrumbs",
      "2 tablespoons oregano",
      "3 cloves garlic, minced",
      "1/4 cup parmesan",
      "3 tablespoons olive oil",
      "Salt",
      "Pepper",
      "Lemon wedges"
    ],
    steps: [
      "Mix breadcrumbs, oregano, garlic, parmesan, olive oil, salt, and pepper.",
      "Top chicken pieces with breadcrumb mixture.",
      "Bake at 400°F (200°C) for 35-45 minutes.",
      "Serve with lemon wedges."
    ],
  },

  {
    slug: "chicken-stir-fry",
    title: "Chicken Stir Fry",
    course: "Secondo",
    type: "meat",
    blurb: "Quick sautéed chicken with vegetables and a light soy-garlic sauce.",
    ingredients: [
      "1 lb chicken breast, sliced thin",
      "2 cups mixed vegetables (peppers, broccoli, carrots)",
      "2 tablespoons soy sauce",
      "1 tablespoon olive oil",
      "2 cloves garlic, minced",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Sauté chicken in olive oil until browned.",
      "Add vegetables and cook until crisp-tender.",
      "Stir in garlic, soy sauce, salt, and pepper.",
      "Cook another 2-3 minutes and serve."
    ],
  },

  {
    slug: "cornish-hens",
    title: "Cornish Hens",
    course: "Secondo",
    type: "meat",
    blurb: "Roasted Cornish hens seasoned simply with herbs and lemon.",
    ingredients: [
      "2 Cornish hens, halved or whole",
      "2 tablespoons olive oil",
      "Salt",
      "Pepper",
      "Rosemary or thyme",
      "Lemon slices"
    ],
    steps: [
      "Rub hens with olive oil, salt, pepper, and herbs.",
      "Roast at 400°F (200°C) for 45-55 minutes.",
      "Serve with lemon slices."
    ],
  },

  {
    slug: "grilled-steak",
    title: "Grilled Steak",
    course: "Secondo",
    type: "meat",
    blurb: "Simple grilled steak seasoned with salt, pepper, and olive oil.",
    ingredients: [
      "1-2 ribeye or strip steaks",
      "Salt",
      "Pepper",
      "Olive oil"
    ],
    steps: [
      "Bring steak to room temperature.",
      "Season generously with salt, pepper, and olive oil.",
      "Grill 3-5 minutes per side or until desired doneness.",
      "Rest before slicing."
    ],
  },

  {
    slug: "lamb-chops",
    title: "Lamb Chops",
    course: "Secondo",
    type: "meat",
    blurb: "Garlic- and rosemary-marinated lamb chops grilled or pan-seared.",
    ingredients: [
      "4-6 lamb chops",
      "3 cloves garlic, minced",
      "1 tablespoon rosemary",
      "2 tablespoons olive oil",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Marinate lamb chops with olive oil, garlic, rosemary, salt, and pepper.",
      "Grill or pan-sear 3-4 minutes per side.",
      "Rest briefly before serving."
    ],
  },

  {
    slug: "pulled-pork",
    title: "Pulled Pork",
    course: "Secondo",
    type: "meat",
    blurb: "Slow-cooked pork shoulder shredded and tossed with sauce.",
    ingredients: [
      "3-4 lb pork shoulder",
      "Salt",
      "Pepper",
      "Garlic powder",
      "Onion powder",
      "Barbecue sauce"
    ],
    steps: [
      "Season pork shoulder with salt, pepper, garlic powder, and onion powder.",
      "Roast covered at 300°F (150°C) for 4-5 hours until tender.",
      "Shred pork and mix with barbecue sauce.",
      "Serve on rolls or over rice."
    ],
  },

  {
    slug: "roast-beef",
    title: "Roast Beef",
    course: "Secondo",
    type: "meat",
    blurb: "Classic roast beef seasoned with garlic, pepper, and herbs.",
    ingredients: [
      "3-4 lb beef roast (top round or sirloin)",
      "2 tablespoons olive oil",
      "3 cloves garlic, minced",
      "Salt",
      "Pepper",
      "Rosemary"
    ],
    steps: [
      "Rub beef with olive oil, garlic, salt, pepper, and rosemary.",
      "Roast at 375°F (190°C) for 1-1.5 hours, depending on doneness.",
      "Rest 15 minutes before slicing."
    ],
  },

  {
    slug: "stuffed-zucchini",
    title: "Stuffed Zucchini",
    course: "Secondo",
    type: "vegetable",
    blurb: "Baked zucchini boats filled with breadcrumbs, cheese, and herbs.",
    ingredients: [
      "4 zucchini, halved lengthwise",
      "1 cup breadcrumbs",
      "1/4 cup parmesan",
      "2 cloves garlic, minced",
      "2 tablespoons parsley",
      "3 tablespoons olive oil",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Scoop out centers of zucchini halves.",
      "Mix breadcrumbs, parmesan, garlic, parsley, olive oil, salt, and pepper.",
      "Fill zucchini and place on a baking sheet.",
      "Bake at 375°F (190°C) for 20-25 minutes."
    ],
  },

  {
    slug: "turkey-breast",
    title: "Turkey Breast",
    course: "Secondo",
    type: "meat",
    blurb: "Roasted turkey breast seasoned with garlic, herbs, and olive oil.",
    ingredients: [
      "1 boneless turkey breast",
      "3 tablespoons olive oil",
      "3 cloves garlic, minced",
      "Rosemary or thyme",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Rub turkey breast with olive oil, garlic, herbs, salt, and pepper.",
      "Roast at 350°F (175°C) for 1-1.5 hours until internal temperature reaches 165°F.",
      "Rest before slicing."
    ],
  },
  {
    slug: "almond-biscotti",
    title: "Almond Biscotti",
    course: "Dolce",
    type: "cookie",
    blurb: "Classic twice-baked Italian almond biscotti—crisp, fragrant, and perfect for dipping.",
    ingredients: [
      "2 cups flour",
      "1 cup sugar",
      "1 teaspoon baking powder",
      "3 eggs",
      "1 teaspoon almond extract",
      "1 cup sliced almonds",
      "Pinch of salt"
    ],
    steps: [
      "Preheat oven to 350°F (175°C).",
      "Mix flour, sugar, baking powder, and salt.",
      "Beat in eggs and almond extract until dough forms.",
      "Fold in almonds.",
      "Shape into two logs on a baking sheet.",
      "Bake 25-30 minutes, then cool slightly.",
      "Slice logs diagonally and bake slices 10-12 minutes per side until crisp."
    ],
  },

  {
    slug: "apple-cake",
    title: "Apple Cake",
    course: "Dolce",
    type: "cake",
    blurb: "Moist Italian apple cake filled with sliced apples and warm spices.",
    ingredients: [
      "2 apples, peeled and sliced",
      "1.5 cups flour",
      "1 cup sugar",
      "2 eggs",
      "1/2 cup vegetable oil",
      "1 teaspoon baking powder",
      "1 teaspoon vanilla",
      "Cinnamon",
      "Pinch of salt"
    ],
    steps: [
      "Preheat oven to 350°F (175°C).",
      "Beat eggs, sugar, oil, and vanilla.",
      "Mix in flour, baking powder, cinnamon, and salt.",
      "Fold in apples.",
      "Pour into a greased baking pan.",
      "Bake 35-45 minutes until golden and set."
    ],
  },

  {
    slug: "brownies",
    title: "Brownies",
    course: "Dolce",
    type: "bar",
    blurb: "Rich homemade chocolate brownies with a soft center and crisp edges.",
    ingredients: [
      "1 cup butter, melted",
      "2 cups sugar",
      "4 eggs",
      "1 cup flour",
      "1/2 cup cocoa powder",
      "1 teaspoon vanilla",
      "Pinch of salt"
    ],
    steps: [
      "Preheat oven to 350°F (175°C).",
      "Whisk butter, sugar, eggs, and vanilla.",
      "Add flour, cocoa, and salt.",
      "Pour into a greased baking pan.",
      "Bake 25-30 minutes."
    ],
  },

  {
    slug: "cannoli-dip",
    title: "Cannoli Dip",
    course: "Dolce",
    type: "dessert",
    blurb: "Creamy ricotta-cannoli filling served as a dip for cookies or fruit.",
    ingredients: [
      "1.5 cups ricotta",
      "1 cup mascarpone",
      "1/2 cup powdered sugar",
      "1 teaspoon vanilla",
      "1/2 cup mini chocolate chips"
    ],
    steps: [
      "Mix ricotta, mascarpone, powdered sugar, and vanilla until smooth.",
      "Fold in chocolate chips.",
      "Chill before serving."
    ],
  },

  {
    slug: "cheesecake",
    title: "Cheesecake",
    course: "Dolce",
    type: "cake",
    blurb: "Classic creamy cheesecake baked with a graham cracker crust.",
    ingredients: [
      "2 cups graham cracker crumbs",
      "1/2 cup melted butter",
      "3 (8 oz) packages cream cheese",
      "1 cup sugar",
      "3 eggs",
      "1 teaspoon vanilla"
    ],
    steps: [
      "Preheat oven to 325°F (160°C).",
      "Mix graham crumbs and butter; press into a springform pan.",
      "Beat cream cheese and sugar until smooth.",
      "Add eggs one at a time, then vanilla.",
      "Pour filling over crust and bake 50-60 minutes.",
      "Cool and chill before serving."
    ],
  },

  {
    slug: "chocolate-chip-cookies",
    title: "Chocolate Chip Cookies",
    course: "Dolce",
    type: "cookie",
    blurb: "Soft and chewy homemade chocolate chip cookies.",
    ingredients: [
      "2.25 cups flour",
      "1 cup butter, softened",
      "3/4 cup sugar",
      "3/4 cup brown sugar",
      "2 eggs",
      "1 teaspoon vanilla",
      "1 teaspoon baking soda",
      "1 teaspoon salt",
      "1.5 cups chocolate chips"
    ],
    steps: [
      "Preheat oven to 350°F (175°C).",
      "Cream butter and sugars.",
      "Beat in eggs and vanilla.",
      "Add flour, salt, and baking soda.",
      "Fold in chocolate chips.",
      "Drop spoonfuls onto a baking sheet.",
      "Bake 9-11 minutes."
    ],
  },

  {
    slug: "lemon-cookies",
    title: "Lemon Cookies",
    course: "Dolce",
    type: "cookie",
    blurb: "Bright and soft lemon cookies with a powdered sugar glaze.",
    ingredients: [
      "2 cups flour",
      "1/2 cup butter",
      "1 cup sugar",
      "2 eggs",
      "1 lemon, zested and juiced",
      "1 teaspoon baking powder",
      "Powdered sugar (for glaze)"
    ],
    steps: [
      "Preheat oven to 350°F (175°C).",
      "Beat butter and sugar until fluffy.",
      "Add eggs, lemon zest, and juice.",
      "Mix in flour and baking powder.",
      "Drop dough onto baking sheet.",
      "Bake 10-12 minutes.",
      "Glaze with powdered sugar and lemon juice if desired."
    ],
  },

  {
    slug: "pignoli-cookies",
    title: "Pignoli Cookies",
    course: "Dolce",
    type: "cookie",
    blurb: "Chewy Sicilian almond cookies topped with pine nuts.",
    ingredients: [
      "1 lb almond paste",
      "1 cup sugar",
      "2 egg whites",
      "1 cup pine nuts"
    ],
    steps: [
      "Preheat oven to 325°F (160°C).",
      "Blend almond paste, sugar, and egg whites until smooth.",
      "Scoop dough into small balls and press into pine nuts.",
      "Bake 15-18 minutes until lightly golden."
    ],
  },

  {
    slug: "ricotta-cake",
    title: "Ricotta Cake",
    course: "Dolce",
    type: "cake",
    blurb: "Light ricotta-based cake with a delicate, creamy texture.",
    ingredients: [
      "1.5 cups ricotta",
      "3 eggs",
      "1 cup sugar",
      "1 cup flour",
      "1 teaspoon vanilla",
      "1 teaspoon baking powder"
    ],
    steps: [
      "Preheat oven to 350°F (175°C).",
      "Beat ricotta, eggs, sugar, and vanilla.",
      "Mix in flour and baking powder.",
      "Pour into a greased pan.",
      "Bake 35-40 minutes."
    ],
  },

  {
    slug: "ricotta-cookies",
    title: "Ricotta Cookies",
    course: "Dolce",
    type: "cookie",
    blurb: "Soft, fluffy ricotta cookies topped with a sweet glaze.",
    ingredients: [
      "2 cups flour",
      "1 cup ricotta",
      "1 cup sugar",
      "1/2 cup butter",
      "1 egg",
      "1 teaspoon vanilla",
      "1 teaspoon baking powder",
      "Powdered sugar and milk for glaze"
    ],
    steps: [
      "Preheat oven to 350°F (175°C).",
      "Cream butter and sugar.",
      "Add ricotta, egg, and vanilla.",
      "Mix in flour and baking powder.",
      "Drop onto a baking sheet.",
      "Bake 10-12 minutes.",
      "Glaze once cooled."
    ],
  },
  {
    slug: "tiramisu",
    title: "Tiramisu",
    course: "Dolce",
    type: "dessert",
    blurb: "Classic Italian tiramisu layered with espresso-soaked ladyfingers and mascarpone cream.",
    ingredients: [
      "1 cup espresso or strong coffee, cooled",
      "24 ladyfingers",
      "3 eggs, separated",
      "1/2 cup sugar",
      "1 cup mascarpone",
      "1 teaspoon vanilla",
      "Cocoa powder"
    ],
    steps: [
      "Beat egg yolks with sugar until pale.",
      "Add mascarpone and vanilla; mix until smooth.",
      "Beat egg whites to stiff peaks and fold into mascarpone mixture.",
      "Dip ladyfingers briefly in espresso and layer in a dish.",
      "Spread mascarpone cream over the layer.",
      "Repeat layers and dust with cocoa.",
      "Refrigerate at least 4 hours."
    ],
  },

  {
    slug: "zeppole",
    title: "Zeppole",
    course: "Dolce",
    type: "fried-dessert",
    blurb: "Light Italian fried dough dusted with powdered sugar.",
    ingredients: [
      "2 cups flour",
      "2 teaspoons baking powder",
      "2 eggs",
      "1 cup ricotta",
      "1/4 cup sugar",
      "1 teaspoon vanilla",
      "Pinch of salt",
      "Oil for frying",
      "Powdered sugar"
    ],
    steps: [
      "Mix flour, baking powder, sugar, and salt.",
      "Add eggs, ricotta, and vanilla; mix to a thick batter.",
      "Heat oil in a deep pan.",
      "Drop spoonfuls of batter into hot oil and fry until golden.",
      "Drain and dust with powdered sugar."
    ],
  },

  {
    slug: "rainbow-cookies",
    title: "Italian Rainbow Cookies",
    course: "Dolce",
    type: "cookie",
    blurb: "Layered almond cake cookies with jam and chocolate glaze.",
    ingredients: [
      "1 cup butter, softened",
      "1 cup sugar",
      "4 eggs, separated",
      "1 cup almond paste",
      "1.5 cups flour",
      "Red and green food coloring",
      "1 cup raspberry jam",
      "1 cup melted chocolate"
    ],
    steps: [
      "Preheat oven to 350°F (175°C).",
      "Cream butter and sugar, then add egg yolks.",
      "Beat in almond paste until smooth.",
      "Add flour to form batter.",
      "Whisk egg whites to soft peaks and fold in.",
      "Divide batter into thirds and color two portions red and green.",
      "Bake each layer separately.",
      "Spread jam between layers and stack.",
      "Top with melted chocolate.",
      "Chill before slicing."
    ],
  },

  {
    slug: "struffoli",
    title: "Struffoli (Honey Balls)",
    course: "Dolce",
    type: "fried-dessert",
    blurb: "Neapolitan holiday honey balls—crispy fried dough coated in warm honey.",
    ingredients: [
      "2 cups flour",
      "3 eggs",
      "2 tablespoons sugar",
      "2 tablespoons butter, softened",
      "1 teaspoon vanilla",
      "Oil for frying",
      "1 cup honey",
      "Sprinkles (optional)"
    ],
    steps: [
      "Mix flour, eggs, sugar, butter, and vanilla into a dough.",
      "Roll dough into ropes and cut into small pieces.",
      "Fry pieces in oil until golden.",
      "Heat honey in a pan and toss fried dough in honey to coat.",
      "Pile into a mound and top with sprinkles."
    ],
  },

  {
    slug: "nut-roll",
    title: "Nut Roll",
    course: "Dolce",
    type: "pastry",
    blurb: "Sweet dough rolled with a rich walnut-sugar filling.",
    ingredients: [
      "4 cups flour",
      "1 cup milk",
      "1/2 cup butter",
      "1/2 cup sugar",
      "2 eggs",
      "1 packet yeast",
      "2 cups ground walnuts",
      "1 cup sugar (for filling)",
      "1 teaspoon cinnamon"
    ],
    steps: [
      "Make dough by combining warm milk, yeast, butter, sugar, eggs, and flour; knead until smooth.",
      "Let rise until doubled.",
      "Mix walnuts, sugar, and cinnamon for filling.",
      "Roll dough into rectangles and spread filling.",
      "Roll up and place seam-side down on a sheet.",
      "Bake at 350°F (175°C) for 35-45 minutes."
    ],
  },

  {
    slug: "lemon-bars",
    title: "Lemon Bars",
    course: "Dolce",
    type: "bar",
    blurb: "Buttery shortbread base topped with a bright lemon custard.",
    ingredients: [
      "2 cups flour",
      "1/2 cup powdered sugar",
      "1 cup butter",
      "4 eggs",
      "2 cups sugar",
      "1/2 cup lemon juice",
      "Powdered sugar for dusting"
    ],
    steps: [
      "Preheat oven to 350°F (175°C).",
      "Mix flour, powdered sugar, and butter to form crust.",
      "Press into pan and bake 20 minutes.",
      "Whisk eggs, sugar, and lemon juice.",
      "Pour over crust and bake 20-25 minutes.",
      "Dust with powdered sugar."
    ],
  },

  {
    slug: "chocolate-cake",
    title: "Chocolate Cake",
    course: "Dolce",
    type: "cake",
    blurb: "Moist and rich chocolate cake with deep cocoa flavor.",
    ingredients: [
      "1.75 cups flour",
      "2 cups sugar",
      "3/4 cup cocoa powder",
      "2 eggs",
      "1 cup milk",
      "1/2 cup oil",
      "1 teaspoon baking soda",
      "1 teaspoon baking powder",
      "1 teaspoon vanilla",
      "Pinch of salt"
    ],
    steps: [
      "Preheat oven to 350°F (175°C).",
      "Whisk dry ingredients together.",
      "Add eggs, milk, oil, and vanilla.",
      "Mix until smooth.",
      "Pour into a greased pan.",
      "Bake 30-35 minutes."
    ],
  },

  {
    slug: "butter-cookies",
    title: "Butter Cookies",
    course: "Dolce",
    type: "cookie",
    blurb: "Delicate, tender butter cookies that melt in your mouth.",
    ingredients: [
      "2 cups flour",
      "1 cup butter",
      "3/4 cup sugar",
      "1 egg",
      "1 teaspoon vanilla",
      "Pinch of salt"
    ],
    steps: [
      "Preheat oven to 350°F (175°C).",
      "Cream butter and sugar.",
      "Add egg and vanilla.",
      "Mix in flour and salt.",
      "Pipe or scoop onto baking sheet.",
      "Bake 10-12 minutes."
    ],
  },
  {
    slug: "butter-spritz-cookies",
    title: "Butter Spritz Cookies",
    course: "Dolce",
    type: "cookie",
    blurb: "Classic buttery spritz cookies pressed into delicate shapes.",
    ingredients: [
      "2.25 cups flour",
      "1 cup butter, softened",
      "3/4 cup sugar",
      "1 egg",
      "1 teaspoon vanilla or almond extract",
      "Pinch of salt",
      "Sprinkles (optional)"
    ],
    steps: [
      "Preheat oven to 350°F (175°C).",
      "Cream butter and sugar.",
      "Add egg and vanilla.",
      "Mix in flour and salt to form a soft dough.",
      "Load into a cookie press and shape onto baking sheets.",
      "Top with sprinkles if desired.",
      "Bake 8-10 minutes."
    ],
  },

  {
    slug: "italian-lemon-drop-cookies",
    title: "Italian Lemon Drop Cookies",
    course: "Dolce",
    type: "cookie",
    blurb: "Soft, cake-like lemon cookies topped with a sweet lemon glaze.",
    ingredients: [
      "3 cups flour",
      "1 tablespoon baking powder",
      "1/2 cup butter",
      "1 cup sugar",
      "3 eggs",
      "1/2 cup milk",
      "2 lemons, juiced and zested",
      "1 teaspoon vanilla",
      "Powdered sugar (for glaze)"
    ],
    steps: [
      "Preheat oven to 350°F (175°C).",
      "Cream butter and sugar.",
      "Beat in eggs, milk, vanilla, lemon zest, and juice.",
      "Mix flour and baking powder; add to wet ingredients.",
      "Drop spoonfuls onto baking sheet.",
      "Bake 10-12 minutes.",
      "Glaze with powdered sugar mixed with lemon juice."
    ],
  },

  {
    slug: "ricotta-pie",
    title: "Ricotta Pie",
    course: "Dolce",
    type: "pie",
    blurb: "Traditional Italian ricotta pie with a lightly sweet, creamy filling.",
    ingredients: [
      "2 cups ricotta",
      "3 eggs",
      "3/4 cup sugar",
      "1 teaspoon vanilla",
      "Zest of 1 lemon",
      "1 pie crust"
    ],
    steps: [
      "Preheat oven to 350°F (175°C).",
      "Mix ricotta, eggs, sugar, vanilla, and lemon zest.",
      "Pour into pie crust.",
      "Bake 45-55 minutes until set.",
      "Cool before slicing."
    ],
  },

  {
    slug: "flourless-almond-cake",
    title: "Flourless Almond Cake",
    course: "Dolce",
    type: "cake",
    blurb: "Light flourless Italian almond cake with a tender crumb.",
    ingredients: [
      "2 cups almond flour",
      "4 eggs",
      "3/4 cup sugar",
      "1 teaspoon almond extract",
      "Zest of 1 lemon",
      "Powdered sugar for dusting"
    ],
    steps: [
      "Preheat oven to 350°F (175°C).",
      "Beat eggs and sugar until pale and thick.",
      "Fold in almond flour, almond extract, and lemon zest.",
      "Pour into a greased pan.",
      "Bake 25-30 minutes.",
      "Dust with powdered sugar."
    ],
  },

  {
    slug: "chocolate-mousse",
    title: "Chocolate Mousse",
    course: "Dolce",
    type: "dessert",
    blurb: "Silky, airy chocolate mousse made with whipped cream and melted chocolate.",
    ingredients: [
      "1.5 cups heavy cream",
      "1 cup chocolate chips or chopped chocolate",
      "2 tablespoons sugar",
      "1 teaspoon vanilla"
    ],
    steps: [
      "Melt chocolate gently and cool slightly.",
      "Whip heavy cream with sugar and vanilla until soft peaks form.",
      "Fold whipped cream into melted chocolate.",
      "Chill at least 1 hour."
    ],
  },

  {
    slug: "fruit-salad",
    title: "Fruit Salad",
    course: "Dolce",
    type: "dessert",
    blurb: "Refreshing fruit salad with a light citrus-honey dressing.",
    ingredients: [
      "2 cups berries",
      "2 cups melon cubes",
      "2 cups sliced fruit (kiwi, mango, apples, etc.)",
      "Juice of 1 orange",
      "1 tablespoon honey",
      "Mint (optional)"
    ],
    steps: [
      "Combine all fruit in a large bowl.",
      "Mix orange juice and honey to make dressing.",
      "Toss fruit with dressing and top with mint.",
      "Chill before serving."
    ],
  },
  {
    slug: "pumpkin-bread",
    title: "Pumpkin Bread",
    course: "Dolce",
    type: "bread",
    blurb: "Moist spiced pumpkin loaf perfect for fall or holiday gatherings.",
    ingredients: [
      "1.75 cups flour",
      "1 cup sugar",
      "1 teaspoon baking soda",
      "1 teaspoon cinnamon",
      "1/2 teaspoon nutmeg",
      "1/2 teaspoon salt",
      "1 cup pumpkin purée",
      "2 eggs",
      "1/2 cup oil",
      "1 teaspoon vanilla"
    ],
    steps: [
      "Preheat oven to 350°F (175°C).",
      "Whisk dry ingredients together.",
      "Mix pumpkin, eggs, oil, and vanilla in a separate bowl.",
      "Combine wet and dry ingredients.",
      "Pour into a greased loaf pan.",
      "Bake 50-60 minutes."
    ],
  },

  {
    slug: "banana-bread",
    title: "Banana Bread",
    course: "Dolce",
    type: "bread",
    blurb: "Classic banana bread made with ripe bananas for maximum flavor.",
    ingredients: [
      "1.5 cups flour",
      "1 teaspoon baking soda",
      "1/4 teaspoon salt",
      "3 ripe bananas, mashed",
      "1/2 cup butter, melted",
      "3/4 cup sugar",
      "1 egg",
      "1 teaspoon vanilla"
    ],
    steps: [
      "Preheat oven to 350°F (175°C).",
      "Combine flour, baking soda, and salt.",
      "Mix bananas, melted butter, sugar, egg, and vanilla.",
      "Stir wet and dry mixtures together.",
      "Pour into a greased loaf pan.",
      "Bake 50-60 minutes."
    ],
  },

  {
    slug: "cream-puffs",
    title: "Italian Cream Puffs",
    course: "Dolce",
    type: "pastry",
    blurb: "Light pâte-à-choux puffs filled with sweet vanilla cream.",
    ingredients: [
      "1 cup water",
      "1/2 cup butter",
      "1 cup flour",
      "4 eggs",
      "2 cups pastry cream or whipped cream",
      "Powdered sugar"
    ],
    steps: [
      "Preheat oven to 400°F (200°C).",
      "Boil water and butter; stir in flour until dough pulls away from sides.",
      "Beat in eggs one at a time.",
      "Pipe or spoon onto baking sheet.",
      "Bake 25-30 minutes until golden.",
      "Cool, fill with cream, and dust with powdered sugar."
    ],
  },

  {
    slug: "espresso-granita",
    title: "Espresso Granita",
    course: "Dolce",
    type: "frozen",
    blurb: "Icy Sicilian-style espresso granita topped with whipped cream.",
    ingredients: [
      "2 cups strong espresso",
      "1/2 cup sugar",
      "1 teaspoon vanilla",
      "Whipped cream"
    ],
    steps: [
      "Stir sugar into hot espresso until dissolved.",
      "Add vanilla and cool.",
      "Pour into a shallow dish and freeze 3-4 hours, scraping with a fork every 30 minutes.",
      "Serve with whipped cream."
    ],
  },

  {
    slug: "anginetti",
    title: "Anginetti (Italian Lemon Knot Cookies)",
    course: "Dolce",
    type: "cookie",
    blurb: "Soft Italian lemon knot cookies glazed with sweet lemon icing.",
    ingredients: [
      "3 cups flour",
      "1 tablespoon baking powder",
      "3 eggs",
      "1/2 cup sugar",
      "1/4 cup butter, melted",
      "1/4 cup milk",
      "Zest of 1 lemon",
      "1 teaspoon vanilla",
      "Powdered sugar + lemon juice for glaze"
    ],
    steps: [
      "Preheat oven to 350°F (175°C).",
      "Mix eggs, sugar, butter, milk, lemon zest, and vanilla.",
      "Add flour and baking powder to form a soft dough.",
      "Shape into knots or balls.",
      "Bake 10-12 minutes.",
      "Glaze with lemon icing once cooled."
    ],
  },

  {
    slug: "chocolate-pudding",
    title: "Chocolate Pudding",
    course: "Dolce",
    type: "dessert",
    blurb: "Smooth homemade chocolate pudding made on the stovetop.",
    ingredients: [
      "2 cups milk",
      "1/2 cup sugar",
      "1/3 cup cocoa powder",
      "3 tablespoons cornstarch",
      "1 teaspoon vanilla",
      "Pinch of salt"
    ],
    steps: [
      "Whisk cocoa, sugar, cornstarch, and salt in a saucepan.",
      "Slowly whisk in milk.",
      "Cook over medium heat, stirring until thickened.",
      "Remove from heat and stir in vanilla.",
      "Chill before serving."
    ],
  },

  {
    slug: "molten-chocolate-cakes",
    title: "Molten Chocolate Cakes",
    course: "Dolce",
    type: "cake",
    blurb: "Individual chocolate cakes with warm gooey centers.",
    ingredients: [
      "1/2 cup butter",
      "1 cup chocolate chips",
      "1 cup powdered sugar",
      "2 eggs",
      "2 egg yolks",
      "1/2 cup flour",
      "1 teaspoon vanilla"
    ],
    steps: [
      "Preheat oven to 425°F (220°C).",
      "Melt butter and chocolate together.",
      "Whisk in powdered sugar, eggs, yolks, vanilla, and flour.",
      "Pour into greased ramekins.",
      "Bake 12-14 minutes until edges set but center is soft."
    ],
  },
];
