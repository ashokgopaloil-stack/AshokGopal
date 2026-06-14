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
    "slug": "kacchi-ghani-mustard-oil-100ml-sample",
    "name": "Kacchi Ghani Mustard Oil - 100 ml Sample Bottle",
    "shortName": "100 ml Sample",
    "sku": "AG-KGMO-100ML",
    "packSize": "100 ml",
    "category": "Kacchi Ghani Mustard Oil",
    "image": "/placeholders/product-bottle.svg",
    "summary": "Trial bottle for recipe creators, sampling tables, shopkeeper demos, and first-taste campaigns.",
    "description": "Trial bottle for recipe creators, sampling tables, shopkeeper demos, and first-taste campaigns. This page is written to capture specific buying intent while keeping final commercial facts, MRP, carton count, and pack photographs editable before launch.",
    "idealFor": [
      "Sampling counters",
      "Influencer recipe kits",
      "Retailer trials",
      "Festival demos"
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
    "slug": "kacchi-ghani-mustard-oil-200ml-trial-pack",
    "name": "Kacchi Ghani Mustard Oil - 200 ml Trial Pack",
    "shortName": "200 ml Trial Pack",
    "sku": "AG-KGMO-200ML",
    "packSize": "200 ml",
    "category": "Kacchi Ghani Mustard Oil",
    "image": "/placeholders/product-bottle.svg",
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
    "image": "/placeholders/product-bottle.svg",
    "summary": "Compact household bottle for daily Bengali cooking, tempering, pickles, and sharp mustard aroma.",
    "description": "Compact household bottle for daily Bengali cooking, tempering, pickles, and sharp mustard aroma. This page is written to capture specific buying intent while keeping final commercial facts, MRP, carton count, and pack photographs editable before launch.",
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
    "image": "/placeholders/product-bottle.svg",
    "summary": "Anchor family pack for households and retailers comparing taste, packaging trust, and local manufacturer reliability.",
    "description": "Anchor family pack for households and retailers comparing taste, packaging trust, and local manufacturer reliability. This page is written to capture specific buying intent while keeping final commercial facts, MRP, carton count, and pack photographs editable before launch.",
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
    "image": "/placeholders/social-distribution.svg",
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
    "slug": "kacchi-ghani-mustard-oil-3l-value-jar",
    "name": "Kacchi Ghani Mustard Oil - 3 Litre Value Jar",
    "shortName": "3 Litre Value Jar",
    "sku": "AG-KGMO-3L",
    "packSize": "3 Litre",
    "category": "Kacchi Ghani Mustard Oil",
    "image": "/placeholders/product-jar.svg",
    "summary": "Value-oriented jar concept for buyers who want more than a bottle without shifting to 5 litre storage.",
    "description": "Value-oriented jar concept for buyers who want more than a bottle without shifting to 5 litre storage. This page is written to capture specific buying intent while keeping final commercial facts, MRP, carton count, and pack photographs editable before launch.",
    "idealFor": [
      "Family value pack",
      "Small eateries",
      "Monthly use",
      "Retail value shelves"
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
    "image": "/placeholders/product-jar.svg",
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
    "image": "/placeholders/product-jar.svg",
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
    "slug": "kacchi-ghani-mustard-oil-15l-tin",
    "name": "Kacchi Ghani Mustard Oil - 15 Litre Tin",
    "shortName": "15 Litre Tin",
    "sku": "AG-KGMO-15L",
    "packSize": "15 Litre",
    "category": "Kacchi Ghani Mustard Oil",
    "image": "/placeholders/product-tin.svg",
    "summary": "Commercial pack page for buyers who search in litres: restaurants, caterers, and institutional kitchens.",
    "description": "Commercial pack page for buyers who search in litres: restaurants, caterers, and institutional kitchens. This page is written to capture specific buying intent while keeping final commercial facts, MRP, carton count, and pack photographs editable before launch.",
    "idealFor": [
      "Restaurants",
      "Caterers",
      "Institutional kitchens",
      "Food-service dealers"
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
    "slug": "kacchi-ghani-mustard-oil-15kg-tin",
    "name": "Kacchi Ghani Mustard Oil - 15 kg Tin",
    "shortName": "15 kg Tin",
    "sku": "AG-KGMO-15KG",
    "packSize": "15 kg",
    "category": "Kacchi Ghani Mustard Oil",
    "image": "/placeholders/product-tin.svg",
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
    "image": "/placeholders/product-jar.svg",
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
    "image": "/placeholders/social-distribution.svg",
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
    "image": "/placeholders/social-distribution.svg",
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
    "image": "/placeholders/social-distribution.svg",
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
    "image": "/placeholders/product-bottle.svg",
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
    "image": "/placeholders/product-bottle.svg",
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
    "image": "/placeholders/product-bottle.svg",
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
    "image": "/placeholders/social-distribution.svg",
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
