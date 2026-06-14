export type Recipe = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  category: string;
  cookingUse: string;
  keywords: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    slug: "shorshe-mach-bengali-mustard-fish",
    title: "Shorshe Mach with Mustard Oil",
    summary: "A Bengali fish curry page built around mustard aroma, sharpness, and traditional cooking memory.",
    image: "/placeholders/recipe-fish.svg",
    category: "Fish curry",
    cookingUse: "Tempering, marination, and final aroma lift",
    keywords: ["shorshe mach", "Bengali mustard fish", "mustard oil fish curry"],
    steps: ["Use mustard oil for the initial heat and aroma.", "Add mustard paste and spices as per family recipe.", "Keep the copy honest: recipe photos and exact quantities can be added later."]
  },
  {
    slug: "begun-bhaja-with-kacchi-ghani-oil",
    title: "Begun Bhaja with Kacchi Ghani Oil",
    summary: "A high-intent recipe page for one of the simplest Bengali dishes where oil aroma is easy to understand.",
    image: "/placeholders/recipe-begun.svg",
    category: "Frying",
    cookingUse: "Shallow frying and aroma",
    keywords: ["begun bhaja", "Bengali fried brinjal", "mustard oil frying"],
    steps: ["Slice brinjal evenly and season.", "Shallow fry in heated mustard oil.", "Use final photos to show colour, texture, and serving context."]
  },
  {
    slug: "bengali-aam-tel-pickle",
    title: "Bengali Aam Tel Pickle",
    summary: "A pickle-content page for buyers who associate mustard oil with preservation, aroma, and family jars.",
    image: "/placeholders/recipe-pickle.svg",
    category: "Pickle",
    cookingUse: "Pickling medium and flavour carrier",
    keywords: ["aam tel", "Bengali mango pickle", "mustard oil pickle"],
    steps: ["Prepare mango pieces and spice mix.", "Use mustard oil as the flavour and preservation base.", "Add real jar photography before launch."]
  },
  {
    slug: "panch-phoron-sabzi",
    title: "Panch Phoron Sabzi",
    summary: "A vegetable cooking page that connects daily home cooking with mustard oil tempering.",
    image: "/placeholders/social-recipe.svg",
    category: "Vegetarian cooking",
    cookingUse: "Tempering and everyday cooking",
    keywords: ["panch phoron", "Bengali sabzi", "mustard oil tempering"],
    steps: ["Heat mustard oil till ready for tempering.", "Add panch phoron and vegetables.", "Add seasonal vegetables and final plated images later."]
  },
  {
    slug: "alu-posto-with-mustard-oil",
    title: "Alu Posto with Mustard Oil",
    summary: "A Bengal-focused recipe page for daily lunch search intent and regional food authority.",
    image: "/placeholders/social-recipe.svg",
    category: "Bengali lunch",
    cookingUse: "Base cooking oil and aroma",
    keywords: ["alu posto", "Bengali lunch", "mustard oil Bengali cooking"],
    steps: ["Cook potatoes with posto paste.", "Use mustard oil for the distinct Bengali flavour note.", "Add ingredient quantities when the recipe is tested."]
  },
  {
    slug: "kosha-mangsho-mustard-oil-base",
    title: "Kosha Mangsho Mustard Oil Base",
    summary: "A festive meat recipe page for high-aroma cooking and special occasion brand association.",
    image: "/placeholders/social-recipe.svg",
    category: "Festive cooking",
    cookingUse: "Browning and spice base",
    keywords: ["kosha mangsho", "Bengali mutton", "mustard oil meat curry"],
    steps: ["Use mustard oil for the initial spice base.", "Brown onions and masala slowly.", "Add tested brand recipe photos before sharing socially."]
  },
  {
    slug: "muri-mustard-oil-snack",
    title: "Muri with Mustard Oil and Green Chilli",
    summary: "A short snack page for nostalgia, social media reels, and low-effort brand recall.",
    image: "/placeholders/social-recipe.svg",
    category: "Snack",
    cookingUse: "Raw aroma drizzle",
    keywords: ["muri mustard oil", "Bengali snack", "mustard oil jhal muri"],
    steps: ["Mix muri with onion, chilli, and spices.", "Add a small drizzle of mustard oil.", "Use reel-style photography and social embeds later."]
  },
  {
    slug: "ilish-marinade-mustard-oil",
    title: "Ilish Marinade with Mustard Oil",
    summary: "A premium Bengali cooking page for hilsa-season search demand and brand aspiration.",
    image: "/placeholders/recipe-fish.svg",
    category: "Fish marinade",
    cookingUse: "Marination and final aroma",
    keywords: ["ilish mustard oil", "hilsa marinade", "Bengali fish mustard oil"],
    steps: ["Use mustard oil in the marinade base.", "Pair with mustard paste and turmeric as per recipe.", "Add final tested recipe before public campaign push."]
  }
];

export function getRecipeBySlug(slug: string) {
  return recipes.find((recipe) => recipe.slug === slug);
}
