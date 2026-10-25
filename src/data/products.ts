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
  verboseDescription?: string;
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
    "slug": "kacchi-ghani-mustard-oil-200ml-trial-pack",
    "name": "Kacchi Ghani Mustard Oil - 200 ml Trial Pack",
    "shortName": "200 ml Trial Pack",
    "sku": "AG-KGMO-200ML",
    "packSize": "200 ml",
    "category": "Kacchi Ghani Mustard Oil",
    "image": "/placeholders/product-bottle.png",
    "summary": "Low-friction discovery pack for households that want to taste aroma and pungency before moving to the 1 litre SKU.",
    "description": "Low-friction discovery pack for households that want to taste aroma and pungency before moving to the 1 litre SKU. This page is written to capture specific buying intent while keeping final commercial facts, MRP, carton count, and pack photographs editable before launch.",
    "idealFor": [
      "Sampling campaigns",
      "Retail counter trials",
      "Small households",
      "Recipe giveaways"
    ],
    "features": [
      "Clear pack-size positioning",
      "Photo slots for front, back, cap/seal, and carton",
      "Wholesale CTA and WhatsApp path",
      "Schema-ready product data"
    ],
    "buyerIntent": [
      "Compare pack size",
      "Request price or distributor terms",
      "Validate local manufacturer trust",
      "Ask for recurring supply"
    ],
    "packagingNotes": [
      "Replace placeholder image with final pack photo",
      "Add MRP, batch, FSSAI and barcode panel photo",
      "Add carton quantity, case weight, and MOQ when confirmed"
    ],
    "storage": "Store sealed in a cool, dry place away from direct sunlight. Use clean, dry utensils after opening.",
    "priceLabel": "MRP to be added",
    "schemaPrice": "0.00",
    "availability": "https://schema.org/InStock",
    "priority": "retail"
  },
  {
    "slug": "kacchi-ghani-mustard-oil-500ml",
    "name": "Kacchi Ghani Mustard Oil - 500 ml Bottle",
    "shortName": "500 ml Bottle",
    "sku": "AG-KGMO-500ML",
    "packSize": "500 ml",
    "category": "Kacchi Ghani Mustard Oil",
    "image": "/placeholders/product-bottle.png",
    "summary": "Compact household bottle for daily Bengali cooking, tempering, pickles, and sharp mustard aroma.",
    "description": "Compact household bottle for daily Bengali cooking, tempering, pickles, and sharp mustard aroma. This page is written to capture specific buying intent while keeping final commercial facts, MRP, carton count, and pack photographs editable before launch.",
    "verboseDescription": "<p>Ashok Gopal's 500 ml Kacchi Ghani Mustard Oil is the ultimate compact household kitchen standard, optimized for daily cooking rotation, fresh tempering (tadka), and seasonal home pickles. Cold-pressed using traditional processes, this oil preserves the natural seeds' volatile oils, delivering the signature strong aroma (gondho) and sharp pungency (jhajh) essential for authentic Eastern Indian dishes. The 500 ml volume is preferred by smaller families and retail grocers looking for high inventory turnover rates.</p><h4>Culinary Application</h4><p>Ideal for shallow frying, sauteing vegetables (bhaja), and tempering yellow lentils (dal). The high smoke point of over 250°C ensures that it handles deep heat without burning, while raw drizzling on snacks like jhalmuri adds a powerful sensory lift.</p><h4>B2B Logistics & Case Specs</h4><p>For distributors and wholesale buyers, the 500 ml PET bottles are packed in double-walled master cartons of 24 units. Each carton is designed to withstand transit vibrations across West Bengal highways. Pallet layout supports up to 48 cartons per standard pallet. Batch reports, lab verification certificates, and FSSAI barcode registries are shipped with every wholesale order desk dispatch.</p>",
    "idealFor": [
      "Daily home cooking",
      "Pickles and marinades",
      "Kirana shelves",
      "Trial-to-repeat conversion"
    ],
    "features": [
      "Clear pack-size positioning",
      "Photo slots for front, back, cap/seal, and carton",
      "Wholesale CTA and WhatsApp path",
      "Schema-ready product data"
    ],
    "buyerIntent": [
      "Compare pack size",
      "Request price or distributor terms",
      "Validate local manufacturer trust",
      "Ask for recurring supply"
    ],
    "packagingNotes": [
      "Replace placeholder image with final pack photo",
      "Add MRP, batch, FSSAI and barcode panel photo",
      "Add carton quantity, case weight, and MOQ when confirmed"
    ],
    "storage": "Store sealed in a cool, dry place away from direct sunlight. Use clean, dry utensils after opening.",
    "priceLabel": "MRP to be added",
    "schemaPrice": "0.00",
    "availability": "https://schema.org/InStock",
    "priority": "core"
  },
  {
    "slug": "kacchi-ghani-mustard-oil-1l",
    "name": "Kacchi Ghani Mustard Oil - 1 Litre Bottle",
    "shortName": "1 Litre Bottle",
    "sku": "AG-KGMO-1L",
    "packSize": "1 Litre",
    "category": "Kacchi Ghani Mustard Oil",
    "image": "/placeholders/product-bottle.png",
    "summary": "Anchor family pack for households and retailers comparing taste, packaging trust, and local manufacturer reliability.",
    "description": "Anchor family pack for households and retailers comparing taste, packaging trust, and local manufacturer reliability. This page is written to capture specific buying intent while keeping final commercial facts, MRP, carton count, and pack photographs editable before launch.",
    "verboseDescription": "<p>The 1 Litre bottle is the cornerstone SKU of the Ashok Gopal product line, serving as the benchmark family pack for monthly grocery rotations. Featuring a robust bottle design and a secure yellow cap, it is engineered for daily heavy-use cooking. It offers the perfect volume-to-price ratio for average families cooking traditional dishes like Machher Jhol, Kosha Mangsho, and Begun Bhaja where mustard oil is not just a cooking medium, but a central flavoring agent.</p><h4>Authentic Cold-Press Extraction</h4><p>Our kacchi ghani method involves mechanical crushing of select mustard seeds at temperatures kept below 50°C. This ensures that natural nutrients, antioxidants, and the sharp allyl isothiocyanate compound (which produces the natural jhajh) remain completely uncompromised, unlike refined oils that strip away flavor and nutritional value.</p><h4>Wholesale and Distributor Logistics</h4><p>Standard shipper cartons contain 12 units of 1 Litre bottles. Cartons feature clear batch barcodes, FSSAI registration numbers, and total weight stats for easy inventory check. The Minimum Order Quantity (MOQ) for regional stockist dispatch starts at 100 master cartons, with direct territory exclusivity options available upon contract qualification.</p>",
    "idealFor": [
      "Family kitchens",
      "Fish curry",
      "Vegetable frying",
      "Retail grocery counters"
    ],
    "features": [
      "Clear pack-size positioning",
      "Photo slots for front, back, cap/seal, and carton",
      "Wholesale CTA and WhatsApp path",
      "Schema-ready product data"
    ],
    "buyerIntent": [
      "Compare pack size",
      "Request price or distributor terms",
      "Validate local manufacturer trust",
      "Ask for recurring supply"
    ],
    "packagingNotes": [
      "Replace placeholder image with final pack photo",
      "Add MRP, batch, FSSAI and barcode panel photo",
      "Add carton quantity, case weight, and MOQ when confirmed"
    ],
    "storage": "Store sealed in a cool, dry place away from direct sunlight. Use clean, dry utensils after opening.",
    "priceLabel": "MRP to be added",
    "schemaPrice": "0.00",
    "availability": "https://schema.org/InStock",
    "priority": "core"
  },
  {
    "slug": "kacchi-ghani-mustard-oil-2l-family-pack",
    "name": "Kacchi Ghani Mustard Oil - 2 Litre Family Pack",
    "shortName": "2 Litre Family Pack",
    "sku": "AG-KGMO-2L",
    "packSize": "2 Litre",
    "category": "Kacchi Ghani Mustard Oil",
    "image": "/placeholders/social-distribution.png",
    "summary": "Intermediate family pack between the 1 litre retail bottle and the 5 litre jar.",
    "description": "Intermediate family pack between the 1 litre retail bottle and the 5 litre jar. This page is written to capture specific buying intent while keeping final commercial facts, MRP, carton count, and pack photographs editable before launch.",
    "idealFor": [
      "Medium households",
      "Monthly pantry refill",
      "Promotional bundles",
      "Repeat buyers"
    ],
    "features": [
      "Clear pack-size positioning",
      "Photo slots for front, back, cap/seal, and carton",
      "Wholesale CTA and WhatsApp path",
      "Schema-ready product data"
    ],
    "buyerIntent": [
      "Compare pack size",
      "Request price or distributor terms",
      "Validate local manufacturer trust",
      "Ask for recurring supply"
    ],
    "packagingNotes": [
      "Replace placeholder image with final pack photo",
      "Add MRP, batch, FSSAI and barcode panel photo",
      "Add carton quantity, case weight, and MOQ when confirmed"
    ],
    "storage": "Store sealed in a cool, dry place away from direct sunlight. Use clean, dry utensils after opening.",
    "priceLabel": "Price on request",
    "schemaPrice": "0.00",
    "availability": "https://schema.org/PreOrder",
    "priority": "planned"
  },
  {
    "slug": "kacchi-ghani-mustard-oil-5l-jar",
    "name": "Kacchi Ghani Mustard Oil - 5 Litre Jar",
    "shortName": "5 Litre Jar",
    "sku": "AG-KGMO-5L",
    "packSize": "5 Litre",
    "category": "Kacchi Ghani Mustard Oil",
    "image": "/placeholders/product-jar.png",
    "summary": "High-utility family and small commercial pack for regular mustard-oil users and food-service buyers.",
    "description": "High-utility family and small commercial pack for regular mustard-oil users and food-service buyers. This page is written to capture specific buying intent while keeping final commercial facts, MRP, carton count, and pack photographs editable before launch.",
    "idealFor": [
      "Large households",
      "Small restaurants",
      "Caterers",
      "Wholesale buyers"
    ],
    "features": [
      "Clear pack-size positioning",
      "Photo slots for front, back, cap/seal, and carton",
      "Wholesale CTA and WhatsApp path",
      "Schema-ready product data"
    ],
    "buyerIntent": [
      "Compare pack size",
      "Request price or distributor terms",
      "Validate local manufacturer trust",
      "Ask for recurring supply"
    ],
    "packagingNotes": [
      "Replace placeholder image with final pack photo",
      "Add MRP, batch, FSSAI and barcode panel photo",
      "Add carton quantity, case weight, and MOQ when confirmed"
    ],
    "storage": "Store sealed in a cool, dry place away from direct sunlight. Use clean, dry utensils after opening.",
    "priceLabel": "MRP to be added",
    "schemaPrice": "0.00",
    "availability": "https://schema.org/InStock",
    "priority": "core"
  },
  {
    "slug": "kacchi-ghani-mustard-oil-10l-jar",
    "name": "Kacchi Ghani Mustard Oil - 10 Litre Jar",
    "shortName": "10 Litre Jar",
    "sku": "AG-KGMO-10L",
    "packSize": "10 Litre",
    "category": "Kacchi Ghani Mustard Oil",
    "image": "/placeholders/product-jar.png",
    "summary": "Trade and food-service pack concept for kitchens that reorder before moving to tin format.",
    "description": "Trade and food-service pack concept for kitchens that reorder before moving to tin format. This page is written to capture specific buying intent while keeping final commercial facts, MRP, carton count, and pack photographs editable before launch.",
    "idealFor": [
      "Caterers",
      "Cloud kitchens",
      "Food-service dealers",
      "Bulk household buyers"
    ],
    "features": [
      "Clear pack-size positioning",
      "Photo slots for front, back, cap/seal, and carton",
      "Wholesale CTA and WhatsApp path",
      "Schema-ready product data"
    ],
    "buyerIntent": [
      "Compare pack size",
      "Request price or distributor terms",
      "Validate local manufacturer trust",
      "Ask for recurring supply"
    ],
    "packagingNotes": [
      "Replace placeholder image with final pack photo",
      "Add MRP, batch, FSSAI and barcode panel photo",
      "Add carton quantity, case weight, and MOQ when confirmed"
    ],
    "storage": "Store sealed in a cool, dry place away from direct sunlight. Use clean, dry utensils after opening.",
    "priceLabel": "Price on request",
    "schemaPrice": "0.00",
    "availability": "https://schema.org/PreOrder",
    "priority": "planned"
  },
  {
    "slug": "kacchi-ghani-mustard-oil-15kg-tin",
    "name": "Kacchi Ghani Mustard Oil - 15 kg Tin",
    "shortName": "15 kg Tin",
    "sku": "AG-KGMO-15KG",
    "packSize": "15 kg",
    "category": "Kacchi Ghani Mustard Oil",
    "image": "/placeholders/product-tin.png",
    "summary": "Primary B2B-oriented pack for distributors, restaurants, institutions, and high-volume kitchens.",
    "description": "Primary B2B-oriented pack for distributors, restaurants, institutions, and high-volume kitchens. This page is written to capture specific buying intent while keeping final commercial facts, MRP, carton count, and pack photographs editable before launch.",
    "idealFor": [
      "Distributors",
      "Super stockists",
      "Restaurants",
      "Caterers",
      "Institutional kitchens"
    ],
    "features": [
      "Clear pack-size positioning",
      "Photo slots for front, back, cap/seal, and carton",
      "Wholesale CTA and WhatsApp path",
      "Schema-ready product data"
    ],
    "buyerIntent": [
      "Compare pack size",
      "Request price or distributor terms",
      "Validate local manufacturer trust",
      "Ask for recurring supply"
    ],
    "packagingNotes": [
      "Replace placeholder image with final pack photo",
      "Add MRP, batch, FSSAI and barcode panel photo",
      "Add carton quantity, case weight, and MOQ when confirmed"
    ],
    "storage": "Store sealed in a cool, dry place away from direct sunlight. Use clean, dry utensils after opening.",
    "priceLabel": "MRP to be added",
    "schemaPrice": "0.00",
    "availability": "https://schema.org/InStock",
    "priority": "core"
  },
  {
    "slug": "kacchi-ghani-mustard-oil-20l-commercial-jar",
    "name": "Kacchi Ghani Mustard Oil - 20 Litre Commercial Jar",
    "shortName": "20 Litre Commercial Jar",
    "sku": "AG-KGMO-20L",
    "packSize": "20 Litre",
    "category": "Kacchi Ghani Mustard Oil",
    "image": "/placeholders/product-jar.png",
    "summary": "Commercial jar concept for high-rotation food-service accounts that prefer handled plastic jars over tins.",
    "description": "Commercial jar concept for high-rotation food-service accounts that prefer handled plastic jars over tins. This page is written to capture specific buying intent while keeping final commercial facts, MRP, carton count, and pack photographs editable before launch.",
    "idealFor": [
      "Commercial kitchens",
      "Caterers",
      "Institutional supply",
      "Dealer enquiries"
    ],
    "features": [
      "Clear pack-size positioning",
      "Photo slots for front, back, cap/seal, and carton",
      "Wholesale CTA and WhatsApp path",
      "Schema-ready product data"
    ],
    "buyerIntent": [
      "Compare pack size",
      "Request price or distributor terms",
      "Validate local manufacturer trust",
      "Ask for recurring supply"
    ],
    "packagingNotes": [
      "Replace placeholder image with final pack photo",
      "Add MRP, batch, FSSAI and barcode panel photo",
      "Add carton quantity, case weight, and MOQ when confirmed"
    ],
    "storage": "Store sealed in a cool, dry place away from direct sunlight. Use clean, dry utensils after opening.",
    "priceLabel": "Price on request",
    "schemaPrice": "0.00",
    "availability": "https://schema.org/PreOrder",
    "priority": "planned"
  },
  {
    "slug": "kacchi-ghani-mustard-oil-retail-carton",
    "name": "Kacchi Ghani Mustard Oil - Retail Carton Supply",
    "shortName": "Retail Carton Supply",
    "sku": "AG-KGMO-CARTON",
    "packSize": "Mixed retail cartons",
    "category": "Kacchi Ghani Mustard Oil",
    "image": "/placeholders/social-distribution.png",
    "summary": "Distributor-facing page for cartons, mixed SKUs, and retailer replenishment planning.",
    "description": "Distributor-facing page for cartons, mixed SKUs, and retailer replenishment planning. This page is written to capture specific buying intent while keeping final commercial facts, MRP, carton count, and pack photographs editable before launch.",
    "idealFor": [
      "Retailers",
      "Distributors",
      "Sub-stockists",
      "Grocery wholesalers"
    ],
    "features": [
      "Clear pack-size positioning",
      "Photo slots for front, back, cap/seal, and carton",
      "Wholesale CTA and WhatsApp path",
      "Schema-ready product data"
    ],
    "buyerIntent": [
      "Compare pack size",
      "Request price or distributor terms",
      "Validate local manufacturer trust",
      "Ask for recurring supply"
    ],
    "packagingNotes": [
      "Replace placeholder image with final pack photo",
      "Add MRP, batch, FSSAI and barcode panel photo",
      "Add carton quantity, case weight, and MOQ when confirmed"
    ],
    "storage": "Store sealed in a cool, dry place away from direct sunlight. Use clean, dry utensils after opening.",
    "priceLabel": "Price on request",
    "schemaPrice": "0.00",
    "availability": "https://schema.org/InStock",
    "priority": "wholesale"
  },
  {
    "slug": "mustard-oil-restaurant-supply-pack",
    "name": "Mustard Oil Restaurant Supply Pack",
    "shortName": "Restaurant Supply Pack",
    "sku": "AG-KGMO-FOODSERVICE",
    "packSize": "Bulk pack mix",
    "category": "Kacchi Ghani Mustard Oil",
    "image": "/placeholders/social-distribution.png",
    "summary": "Food-service landing SKU for restaurants and caterers that need predictable repeat supply.",
    "description": "Food-service landing SKU for restaurants and caterers that need predictable repeat supply. This page is written to capture specific buying intent while keeping final commercial facts, MRP, carton count, and pack photographs editable before launch.",
    "idealFor": [
      "Restaurants",
      "Cloud kitchens",
      "Caterers",
      "Fish fry counters"
    ],
    "features": [
      "Clear pack-size positioning",
      "Photo slots for front, back, cap/seal, and carton",
      "Wholesale CTA and WhatsApp path",
      "Schema-ready product data"
    ],
    "buyerIntent": [
      "Compare pack size",
      "Request price or distributor terms",
      "Validate local manufacturer trust",
      "Ask for recurring supply"
    ],
    "packagingNotes": [
      "Replace placeholder image with final pack photo",
      "Add MRP, batch, FSSAI and barcode panel photo",
      "Add carton quantity, case weight, and MOQ when confirmed"
    ],
    "storage": "Store sealed in a cool, dry place away from direct sunlight. Use clean, dry utensils after opening.",
    "priceLabel": "Price on request",
    "schemaPrice": "0.00",
    "availability": "https://schema.org/InStock",
    "priority": "wholesale"
  },
  {
    "slug": "mustard-oil-pickle-maker-pack",
    "name": "Mustard Oil for Pickle Makers",
    "shortName": "Pickle Maker Pack",
    "sku": "AG-KGMO-PICKLE",
    "packSize": "Bulk pack mix",
    "category": "Kacchi Ghani Mustard Oil",
    "image": "/placeholders/social-distribution.png",
    "summary": "Bulk-purchase page for pickle makers and food producers using mustard oil as a flavour and preservation base.",
    "description": "Bulk-purchase page for pickle makers and food producers using mustard oil as a flavour and preservation base. This page is written to capture specific buying intent while keeping final commercial facts, MRP, carton count, and pack photographs editable before launch.",
    "idealFor": [
      "Pickle makers",
      "Food processors",
      "Home brands",
      "Seasonal mango pickle units"
    ],
    "features": [
      "Clear pack-size positioning",
      "Photo slots for front, back, cap/seal, and carton",
      "Wholesale CTA and WhatsApp path",
      "Schema-ready product data"
    ],
    "buyerIntent": [
      "Compare pack size",
      "Request price or distributor terms",
      "Validate local manufacturer trust",
      "Ask for recurring supply"
    ],
    "packagingNotes": [
      "Replace placeholder image with final pack photo",
      "Add MRP, batch, FSSAI and barcode panel photo",
      "Add carton quantity, case weight, and MOQ when confirmed"
    ],
    "storage": "Store sealed in a cool, dry place away from direct sunlight. Use clean, dry utensils after opening.",
    "priceLabel": "Price on request",
    "schemaPrice": "0.00",
    "availability": "https://schema.org/InStock",
    "priority": "wholesale"
  },
  {
    "slug": "yellow-mustard-oil-planned",
    "name": "Yellow Mustard Oil - Planned Variant",
    "shortName": "Yellow Mustard Oil",
    "sku": "AG-YMO-PLANNED",
    "packSize": "Planned",
    "category": "Mustard Oil",
    "image": "/placeholders/product-bottle.png",
    "summary": "Future product placeholder for a yellow mustard oil line if the brand confirms seed type and packaging.",
    "description": "Future product placeholder for a yellow mustard oil line if the brand confirms seed type and packaging. This page is written to capture specific buying intent while keeping final commercial facts, MRP, carton count, and pack photographs editable before launch.",
    "idealFor": [
      "Product planning",
      "Comparison education",
      "Trade demand testing"
    ],
    "features": [
      "Clear pack-size positioning",
      "Photo slots for front, back, cap/seal, and carton",
      "Wholesale CTA and WhatsApp path",
      "Schema-ready product data"
    ],
    "buyerIntent": [
      "Compare pack size",
      "Request price or distributor terms",
      "Validate local manufacturer trust",
      "Ask for recurring supply"
    ],
    "packagingNotes": [
      "Replace placeholder image with final pack photo",
      "Add MRP, batch, FSSAI and barcode panel photo",
      "Add carton quantity, case weight, and MOQ when confirmed"
    ],
    "storage": "Store sealed in a cool, dry place away from direct sunlight. Use clean, dry utensils after opening.",
    "priceLabel": "Price on request",
    "schemaPrice": "0.00",
    "availability": "https://schema.org/PreOrder",
    "priority": "planned"
  },
  {
    "slug": "black-mustard-oil-planned",
    "name": "Black Mustard Oil - Planned Variant",
    "shortName": "Black Mustard Oil",
    "sku": "AG-BMO-PLANNED",
    "packSize": "Planned",
    "category": "Mustard Oil",
    "image": "/placeholders/product-bottle.png",
    "summary": "Future product placeholder for black mustard oil positioning if production and label claims are confirmed.",
    "description": "Future product placeholder for black mustard oil positioning if production and label claims are confirmed. This page is written to capture specific buying intent while keeping final commercial facts, MRP, carton count, and pack photographs editable before launch.",
    "idealFor": [
      "Bengali cooking",
      "Premium variant planning",
      "Taste comparison"
    ],
    "features": [
      "Clear pack-size positioning",
      "Photo slots for front, back, cap/seal, and carton",
      "Wholesale CTA and WhatsApp path",
      "Schema-ready product data"
    ],
    "buyerIntent": [
      "Compare pack size",
      "Request price or distributor terms",
      "Validate local manufacturer trust",
      "Ask for recurring supply"
    ],
    "packagingNotes": [
      "Replace placeholder image with final pack photo",
      "Add MRP, batch, FSSAI and barcode panel photo",
      "Add carton quantity, case weight, and MOQ when confirmed"
    ],
    "storage": "Store sealed in a cool, dry place away from direct sunlight. Use clean, dry utensils after opening.",
    "priceLabel": "Price on request",
    "schemaPrice": "0.00",
    "availability": "https://schema.org/PreOrder",
    "priority": "planned"
  },
  {
    "slug": "filtered-mustard-oil-planned",
    "name": "Filtered Mustard Oil - Planned Variant",
    "shortName": "Filtered Mustard Oil",
    "sku": "AG-FMO-PLANNED",
    "packSize": "Planned",
    "category": "Mustard Oil",
    "image": "/placeholders/product-bottle.png",
    "summary": "Future filtered mustard oil placeholder for buyers comparing filtered, refined, and kachi ghani terms.",
    "description": "Future filtered mustard oil placeholder for buyers comparing filtered, refined, and kachi ghani terms. This page is written to capture specific buying intent while keeping final commercial facts, MRP, carton count, and pack photographs editable before launch.",
    "idealFor": [
      "Education-led demand",
      "Retail planning",
      "Comparison search"
    ],
    "features": [
      "Clear pack-size positioning",
      "Photo slots for front, back, cap/seal, and carton",
      "Wholesale CTA and WhatsApp path",
      "Schema-ready product data"
    ],
    "buyerIntent": [
      "Compare pack size",
      "Request price or distributor terms",
      "Validate local manufacturer trust",
      "Ask for recurring supply"
    ],
    "packagingNotes": [
      "Replace placeholder image with final pack photo",
      "Add MRP, batch, FSSAI and barcode panel photo",
      "Add carton quantity, case weight, and MOQ when confirmed"
    ],
    "storage": "Store sealed in a cool, dry place away from direct sunlight. Use clean, dry utensils after opening.",
    "priceLabel": "Price on request",
    "schemaPrice": "0.00",
    "availability": "https://schema.org/PreOrder",
    "priority": "planned"
  },
  {
    "slug": "mustard-oil-private-label-enquiry",
    "name": "Mustard Oil Private Label and Bulk Enquiry",
    "shortName": "Private Label Enquiry",
    "sku": "AG-KGMO-PRIVATE",
    "packSize": "Trade enquiry",
    "category": "Kacchi Ghani Mustard Oil",
    "image": "/placeholders/social-distribution.png",
    "summary": "Lead-generation page for businesses asking about private label, contract supply, or bulk branded supply.",
    "description": "Lead-generation page for businesses asking about private label, contract supply, or bulk branded supply. This page is written to capture specific buying intent while keeping final commercial facts, MRP, carton count, and pack photographs editable before launch.",
    "idealFor": [
      "Private label buyers",
      "Regional traders",
      "Bulk supply enquiries",
      "Institutional procurement"
    ],
    "features": [
      "Clear pack-size positioning",
      "Photo slots for front, back, cap/seal, and carton",
      "Wholesale CTA and WhatsApp path",
      "Schema-ready product data"
    ],
    "buyerIntent": [
      "Compare pack size",
      "Request price or distributor terms",
      "Validate local manufacturer trust",
      "Ask for recurring supply"
    ],
    "packagingNotes": [
      "Replace placeholder image with final pack photo",
      "Add MRP, batch, FSSAI and barcode panel photo",
      "Add carton quantity, case weight, and MOQ when confirmed"
    ],
    "storage": "Store sealed in a cool, dry place away from direct sunlight. Use clean, dry utensils after opening.",
    "priceLabel": "Price on request",
    "schemaPrice": "0.00",
    "availability": "https://schema.org/PreOrder",
    "priority": "planned"
  }
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export const coreProducts = products.filter((product) => product.priority === "core");
export const retailProducts = products.filter((product) => product.priority === "retail" || product.priority === "core");
export const wholesaleProducts = products.filter((product) => product.priority === "wholesale" || product.priority === "core");
