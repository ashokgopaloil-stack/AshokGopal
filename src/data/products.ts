export type Product = {
  slug: string;
  name: string;
  sku: string;
  packSize: string;
  category: string;
  image: string;
  summary: string;
  description: string;
  idealFor: string[];
  features: string[];
  storage: string;
  priceLabel: string;
  schemaPrice: string;
  availability: "https://schema.org/InStock" | "https://schema.org/PreOrder";
};

export const products: Product[] = [
  {
    slug: "kacchi-ghani-mustard-oil-500ml",
    name: "Kacchi Ghani Mustard Oil - 500 ml Bottle",
    sku: "AG-KGMO-500ML",
    packSize: "500 ml",
    category: "Kacchi Ghani Mustard Oil",
    image: "/placeholders/product-bottle.svg",
    summary: "A compact household pack for daily Bengali cooking, tadka, pickles, and traditional flavour.",
    description:
      "Ashok Gopal Kacchi Ghani Mustard Oil is positioned for kitchens that expect aroma, natural pungency, and the familiar sharpness of traditional mustard oil. Use this smaller pack for trial, compact families, or modern retail counters.",
    idealFor: ["Daily home cooking", "Pickles and marinades", "Retail shelves", "Trial packs"],
    features: ["Traditional kacchi ghani positioning", "Sharp mustard aroma", "Vitamin A, D2 and E enrichment", "Retail-ready pack size"],
    storage: "Store tightly closed in a cool, dry place away from direct sunlight.",
    priceLabel: "MRP to be added",
    schemaPrice: "0.00",
    availability: "https://schema.org/InStock"
  },
  {
    slug: "kacchi-ghani-mustard-oil-1l",
    name: "Kacchi Ghani Mustard Oil - 1 Litre Bottle",
    sku: "AG-KGMO-1L",
    packSize: "1 Litre",
    category: "Kacchi Ghani Mustard Oil",
    image: "/placeholders/product-bottle.svg",
    summary: "The primary family pack for mustard oil buyers looking for pungency, aroma, and everyday cooking utility.",
    description:
      "The 1 litre pack is the anchor SKU for retail discovery. It should carry the strongest packaging photography, manufacturing assurance, FSSAI details, and clear copy around taste, aroma, and quality discipline.",
    idealFor: ["Family kitchens", "Fish curry", "Vegetable frying", "Retail grocery counters"],
    features: ["Strong Bengali kitchen fit", "Clear packaging story", "Batch and quality discipline", "Distributor-friendly primary SKU"],
    storage: "Keep sealed after opening. Do not store near heat or moisture.",
    priceLabel: "MRP to be added",
    schemaPrice: "0.00",
    availability: "https://schema.org/InStock"
  },
  {
    slug: "kacchi-ghani-mustard-oil-5l-jar",
    name: "Kacchi Ghani Mustard Oil - 5 Litre Jar",
    sku: "AG-KGMO-5L",
    packSize: "5 Litre",
    category: "Kacchi Ghani Mustard Oil",
    image: "/placeholders/product-jar.svg",
    summary: "A high-utility family and small commercial pack for regular mustard-oil users.",
    description:
      "The 5 litre jar is built for repeat consumption, larger households, food-service buyers, and retailers serving loyal mustard-oil users. This page should later include jar photos, carton details, and case-pack information.",
    idealFor: ["Large households", "Small restaurants", "Caterers", "Wholesale buyers"],
    features: ["Bulk-friendly household pack", "Lower refill frequency", "Good for repeat buyers", "Wholesale/carton detail ready"],
    storage: "Use clean, dry utensils. Keep the cap closed after every use.",
    priceLabel: "Wholesale price on request",
    schemaPrice: "0.00",
    availability: "https://schema.org/InStock"
  },
  {
    slug: "kacchi-ghani-mustard-oil-15kg-tin",
    name: "Kacchi Ghani Mustard Oil - 15 kg Tin",
    sku: "AG-KGMO-15KG",
    packSize: "15 kg",
    category: "Kacchi Ghani Mustard Oil",
    image: "/placeholders/product-tin.svg",
    summary: "Institutional and wholesale pack for distributors, restaurants, and high-volume kitchens.",
    description:
      "The 15 kg tin is the B2B-oriented pack. Use this SKU to convert restaurants, distributors, caterers, institutions, and high-volume buyers. Add carton/pallet logistics and minimum order details when confirmed.",
    idealFor: ["Distributors", "Super stockists", "Restaurants", "Caterers", "Institutional kitchens"],
    features: ["B2B pack", "Logistics-ready product page", "Distributor enquiry CTA", "High-volume use case"],
    storage: "Store in a dry warehouse area. Keep away from direct sunlight and water exposure.",
    priceLabel: "Bulk price on request",
    schemaPrice: "0.00",
    availability: "https://schema.org/InStock"
  }
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
