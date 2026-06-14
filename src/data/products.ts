export type Product = {
  slug: string;
  name: string;
  shortName: string;
  sku: string;
  packSize: string;
  category: string;
  image: string;
  summary: string;
  description: string;
  idealFor: string[];
  features: string[];
  buyerIntent: string[];
  packagingNotes: string[];
  storage: string;
  priceLabel: string;
  schemaPrice: string;
  availability: "https://schema.org/InStock" | "https://schema.org/PreOrder";
  priority: "core" | "retail" | "wholesale" | "planned";
};

export const products: Product[] = [
  {
    slug: "kacchi-ghani-mustard-oil-200ml-trial-pack",
    name: "Kacchi Ghani Mustard Oil - 200 ml Trial Pack",
    shortName: "200 ml Trial Pack",
    sku: "AG-KGMO-200ML",
    packSize: "200 ml",
    category: "Kacchi Ghani Mustard Oil",
    image: "/placeholders/product-bottle.svg",
    summary: "A small discovery pack for new households, sampling campaigns, and retail counter trials.",
    description: "The 200 ml pack is a product-management lever for sampling. Use it for first-time buyers, kirana counter trials, recipe collaborations, and social media lead capture before pushing the 1 litre family SKU.",
    idealFor: ["Sampling campaigns", "Retail counter trials", "Recipe giveaways", "New household discovery"],
    features: ["Low-friction entry SKU", "Useful for Instagram/Facebook campaigns", "Good for festival sampling", "Easy to bundle with recipes"],
    buyerIntent: ["Try before buying larger packs", "Taste and aroma validation", "Gift or campaign sample"],
    packagingNotes: ["Add front-pack photograph", "Add barcode once confirmed", "Add carton quantity when final"],
    storage: "Store in a cool, dry place. Close the cap firmly after use.",
    priceLabel: "MRP to be added",
    schemaPrice: "0.00",
    availability: "https://schema.org/InStock",
    priority: "retail"
  },
  {
    slug: "kacchi-ghani-mustard-oil-500ml",
    name: "Kacchi Ghani Mustard Oil - 500 ml Bottle",
    shortName: "500 ml Bottle",
    sku: "AG-KGMO-500ML",
    packSize: "500 ml",
    category: "Kacchi Ghani Mustard Oil",
    image: "/placeholders/product-bottle.svg",
    summary: "A compact household pack for daily Bengali cooking, tadka, pickles, and traditional flavour.",
    description: "Ashok Gopal Kacchi Ghani Mustard Oil is positioned for kitchens that expect aroma, pungency, and the familiar sharpness of traditional mustard oil. The 500 ml SKU is useful for smaller families and modern retail shelves.",
    idealFor: ["Daily home cooking", "Pickles and marinades", "Retail shelves", "Trial-to-repeat conversion"],
    features: ["Traditional kacchi ghani positioning", "Sharp mustard aroma", "Vitamin A, D2 and E enrichment copy slot", "Retail-ready pack size"],
    buyerIntent: ["Monthly household cooking", "Switching from commodity oil", "Buying a trusted local brand"],
    packagingNotes: ["Use close-up bottle image", "Show cap and seal", "Mention batch and MRP panel once photos arrive"],
    storage: "Store tightly closed in a cool, dry place away from direct sunlight.",
    priceLabel: "MRP to be added",
    schemaPrice: "0.00",
    availability: "https://schema.org/InStock",
    priority: "retail"
  },
  {
    slug: "kacchi-ghani-mustard-oil-1l",
    name: "Kacchi Ghani Mustard Oil - 1 Litre Bottle",
    shortName: "1 Litre Bottle",
    sku: "AG-KGMO-1L",
    packSize: "1 Litre",
    category: "Kacchi Ghani Mustard Oil",
    image: "/placeholders/product-bottle.svg",
    summary: "The primary family pack for mustard oil buyers looking for pungency, aroma, and everyday cooking utility.",
    description: "The 1 litre bottle is the anchor SKU. It should carry the strongest packaging photography, manufacturing assurance, FSSAI details, retailer value, and clear copy around taste, aroma, and quality discipline.",
    idealFor: ["Family kitchens", "Fish curry", "Vegetable frying", "Retail grocery counters"],
    features: ["Strong Bengali kitchen fit", "Clear packaging story", "Batch and quality discipline", "Distributor-friendly primary SKU"],
    buyerIntent: ["Regular monthly purchase", "Retail shelf comparison", "Family cooking and frying"],
    packagingNotes: ["Add hero bottle photo", "Show front/back pack", "Add carton quantity and case weight"],
    storage: "Keep sealed after opening. Do not store near heat or moisture.",
    priceLabel: "MRP to be added",
    schemaPrice: "0.00",
    availability: "https://schema.org/InStock",
    priority: "core"
  },
  {
    slug: "kacchi-ghani-mustard-oil-2l-family-pack",
    name: "Kacchi Ghani Mustard Oil - 2 Litre Family Pack",
    shortName: "2 Litre Family Pack",
    sku: "AG-KGMO-2L",
    packSize: "2 Litre",
    category: "Kacchi Ghani Mustard Oil",
    image: "/placeholders/product-jar.svg",
    summary: "A repeat-purchase household pack for families that consume mustard oil regularly.",
    description: "The 2 litre pack bridges the 1 litre retail bottle and 5 litre bulk jar. It is useful for families that cook often but still prefer manageable packaging and easy kitchen storage.",
    idealFor: ["Medium households", "Monthly pantry refills", "Repeat buyers", "Retail bundle offers"],
    features: ["Higher repeat value", "Good for family cooking", "Useful promotional pack", "Can be paired with recipe content"],
    buyerIntent: ["Value pack", "Reduced refill frequency", "Trusted brand repeat order"],
    packagingNotes: ["Confirm final pack format", "Add handle/cap image if jar", "Add case-pack data"],
    storage: "Use a clean, dry spoon or pourer. Keep the pack closed after use.",
    priceLabel: "MRP to be added",
    schemaPrice: "0.00",
    availability: "https://schema.org/InStock",
    priority: "planned"
  },
  {
    slug: "kacchi-ghani-mustard-oil-5l-jar",
    name: "Kacchi Ghani Mustard Oil - 5 Litre Jar",
    shortName: "5 Litre Jar",
    sku: "AG-KGMO-5L",
    packSize: "5 Litre",
    category: "Kacchi Ghani Mustard Oil",
    image: "/placeholders/product-jar.svg",
    summary: "A high-utility family and small commercial pack for regular mustard-oil users.",
    description: "The 5 litre jar is built for repeat consumption, larger households, food-service buyers, and retailers serving loyal mustard-oil users. This page should later include jar photos, carton details, and case-pack information.",
    idealFor: ["Large households", "Small restaurants", "Caterers", "Wholesale buyers"],
    features: ["Bulk-friendly household pack", "Lower refill frequency", "Good for repeat buyers", "Wholesale/carton detail ready"],
    buyerIntent: ["Bulk family use", "Small restaurant use", "Monthly pantry purchase"],
    packagingNotes: ["Add jar front image", "Add handle/cap closeup", "Add carton and stacking details"],
    storage: "Use clean, dry utensils. Keep the cap closed after every use.",
    priceLabel: "Wholesale price on request",
    schemaPrice: "0.00",
    availability: "https://schema.org/InStock",
    priority: "core"
  },
  {
    slug: "kacchi-ghani-mustard-oil-15l-tin",
    name: "Kacchi Ghani Mustard Oil - 15 Litre Tin",
    shortName: "15 Litre Tin",
    sku: "AG-KGMO-15L",
    packSize: "15 Litre",
    category: "Kacchi Ghani Mustard Oil",
    image: "/placeholders/product-tin.svg",
    summary: "A high-volume pack for food-service, catering, and wholesale movement.",
    description: "The 15 litre tin page exists for commercial buyers who search by litre rather than kilogram. It should be used to capture restaurant, caterer, institutional, and distributor enquiries.",
    idealFor: ["Restaurants", "Caterers", "Institutional kitchens", "Food-service dealers"],
    features: ["Food-service pack", "Commercial enquiry CTA", "Warehouse-friendly content slot", "Distributor pricing slot"],
    buyerIntent: ["Bulk cooking oil procurement", "Restaurant purchase", "Case and transport planning"],
    packagingNotes: ["Confirm litre-vs-kg SKU availability", "Add tin photos", "Add minimum order quantity"],
    storage: "Store in a clean, dry warehouse area. Avoid direct sunlight and water exposure.",
    priceLabel: "Bulk price on request",
    schemaPrice: "0.00",
    availability: "https://schema.org/InStock",
    priority: "wholesale"
  },
  {
    slug: "kacchi-ghani-mustard-oil-15kg-tin",
    name: "Kacchi Ghani Mustard Oil - 15 kg Tin",
    shortName: "15 kg Tin",
    sku: "AG-KGMO-15KG",
    packSize: "15 kg",
    category: "Kacchi Ghani Mustard Oil",
    image: "/placeholders/product-tin.svg",
    summary: "Institutional and wholesale pack for distributors, restaurants, and high-volume kitchens.",
    description: "The 15 kg tin is the B2B-oriented pack. Use this SKU to convert restaurants, distributors, caterers, institutions, and high-volume buyers. Add carton/pallet logistics and minimum order details when confirmed.",
    idealFor: ["Distributors", "Super stockists", "Restaurants", "Caterers", "Institutional kitchens"],
    features: ["B2B pack", "Logistics-ready product page", "Distributor enquiry CTA", "High-volume use case"],
    buyerIntent: ["Wholesale procurement", "Institutional supply", "Distributor onboarding"],
    packagingNotes: ["Add sealed tin photo", "Add side panel and batch area", "Add dispatch and pallet details"],
    storage: "Store in a dry warehouse area. Keep away from direct sunlight and water exposure.",
    priceLabel: "Bulk price on request",
    schemaPrice: "0.00",
    availability: "https://schema.org/InStock",
    priority: "core"
  },
  {
    slug: "kacchi-ghani-mustard-oil-retail-carton",
    name: "Kacchi Ghani Mustard Oil - Retail Carton Supply",
    shortName: "Retail Carton Supply",
    sku: "AG-KGMO-CARTON",
    packSize: "Mixed retail cartons",
    category: "Kacchi Ghani Mustard Oil",
    image: "/placeholders/social-distribution.svg",
    summary: "A distributor-facing product page for cartons, mixed SKUs, and retail replenishment planning.",
    description: "This page is designed for trade search intent. Retailers and distributors often ask for carton quantity, SKU mix, transport feasibility, and repeat-order cadence. Keep it as a B2B landing page even if individual carton specs change.",
    idealFor: ["Kirana stores", "Retail chains", "Local distributors", "Wholesale counters"],
    features: ["Trade-specific page", "Carton and MOQ slot", "Useful for WhatsApp sharing", "Connects product catalog to distribution"],
    buyerIntent: ["Retail stock planning", "Carton rate enquiry", "Wholesale reorder"],
    packagingNotes: ["Add carton photos", "Add SKU mix matrix", "Add MOQ and territory rules"],
    storage: "Store cartons off the floor in a clean, dry area.",
    priceLabel: "Trade rate on request",
    schemaPrice: "0.00",
    availability: "https://schema.org/InStock",
    priority: "wholesale"
  }
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export const coreProducts = products.filter((product) => product.priority === "core");
