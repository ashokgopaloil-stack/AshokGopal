export type LandingPage = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  bullets: string[];
  cta: string;
};

export const b2bSegments: LandingPage[] = [
  {
    slug: "distributor",
    title: "Mustard Oil Distributor Partnership",
    eyebrow: "B2B partnership",
    description: "For firms that can handle territory development, retailer servicing, warehouse discipline, and repeat stock rotation.",
    bullets: ["GSTIN and FSSAI details requested", "Territory and district coverage mapping", "SKU mix and MOQ discussion", "Retailer network and delivery capacity review"],
    cta: "Apply as distributor"
  },
  {
    slug: "super-stockist",
    title: "Super Stockist Opportunity",
    eyebrow: "Regional scale",
    description: "For larger partners who can support multiple distributors, stock movement, and regional expansion across West Bengal.",
    bullets: ["Higher inventory rotation planning", "Warehouse and transport review", "Multi-district expansion fit", "Trade scheme and reorder cadence discussion"],
    cta: "Discuss super stockist fit"
  },
  {
    slug: "retailer",
    title: "Retailer and Kirana Supply",
    eyebrow: "Retail shelf",
    description: "For grocery stores, kirana counters, local chains, and food stores that want a regional mustard oil SKU with clear brand story.",
    bullets: ["Fast WhatsApp enquiry", "Core retail SKUs", "Shelf and counter display photo slots", "Repeat order planning"],
    cta: "Request retail supply"
  },
  {
    slug: "restaurant-supply",
    title: "Restaurant and Caterer Mustard Oil Supply",
    eyebrow: "Food service",
    description: "For restaurants, caterers, cloud kitchens, and food-service buyers that need reliable mustard oil supply for high-volume cooking.",
    bullets: ["15 kg and 15 litre commercial pack enquiry", "Bulk rate discussion", "Delivery and repeat-order planning", "GST invoice and business details"],
    cta: "Enquire for restaurant supply"
  },
  {
    slug: "institutional-buyers",
    title: "Institutional Mustard Oil Supply",
    eyebrow: "Bulk procurement",
    description: "For hostels, canteens, factories, institutions, and procurement teams that need consistent bulk edible oil purchasing.",
    bullets: ["Bulk pack discussion", "Documentation and billing support", "Monthly consumption planning", "Quality and storage checks"],
    cta: "Start institutional enquiry"
  }
];

export const manufacturingPages: LandingPage[] = [
  {
    slug: "process",
    title: "Kacchi Ghani Manufacturing Process",
    eyebrow: "Manufacturing proof",
    description: "A process page that explains seed cleaning, pressing, filtration, packing, and batch discipline in plain language.",
    bullets: ["Seed intake and cleaning", "Pressing process copy slot", "Filtration and settling", "Packing, sealing, and dispatch"],
    cta: "View product catalog"
  },
  {
    slug: "seed-sourcing",
    title: "Mustard Seed Sourcing and Selection",
    eyebrow: "Input quality",
    description: "A trust page for explaining seed selection, supplier control, and the quality discipline before pressing starts.",
    bullets: ["Supplier and lot details", "Moisture and impurity checks", "Storage conditions", "Traceability notes"],
    cta: "Ask about wholesale supply"
  },
  {
    slug: "filtration",
    title: "Filtration and Settling",
    eyebrow: "Clarity and discipline",
    description: "A practical page for explaining how oil is handled after pressing and before packaging.",
    bullets: ["Settling process", "Filtration stage", "Clean transfer handling", "Batch-level observation"],
    cta: "Contact sales"
  },
  {
    slug: "packaging",
    title: "Bottle, Jar, Tin and Carton Packaging",
    eyebrow: "Pack readiness",
    description: "A page for product photos, pack sizes, carton notes, and distributor logistics.",
    bullets: ["Bottle and jar photo slots", "Tin and carton slots", "MRP and batch panel photos", "Case-pack data placeholder"],
    cta: "See pack sizes"
  },
  {
    slug: "batch-coding",
    title: "Batch Coding and Dispatch Discipline",
    eyebrow: "Traceability",
    description: "A confidence page for business buyers who care about batch identity, billing, stock movement, and complaint handling.",
    bullets: ["Batch and MRP panel photo", "Dispatch date notes", "Invoice and GST flow", "Complaint and replacement protocol slot"],
    cta: "Apply as trade partner"
  }
];

export const qualityPages: LandingPage[] = [
  {
    slug: "fssai",
    title: "FSSAI and Food Safety Details",
    eyebrow: "Compliance",
    description: "A dedicated page for food-safety credentials, license images, and regulatory trust once documents are uploaded.",
    bullets: ["FSSAI license photo slot", "Manufacturing address consistency", "Food safety copy", "Document update checklist"],
    cta: "Contact for documents"
  },
  {
    slug: "vitamin-enrichment",
    title: "Vitamin A, D2 and E Enrichment",
    eyebrow: "Nutrition label",
    description: "A page to explain enrichment claims only as printed and verified on packaging or test documents.",
    bullets: ["Front-pack claim photo", "Nutrition panel photo", "Avoid unverified medical promises", "Use label-backed wording"],
    cta: "View product pages"
  },
  {
    slug: "storage-hygiene",
    title: "Storage and Hygiene Standards",
    eyebrow: "Factory discipline",
    description: "A trust page for storage, handling, cleaning, and warehouse expectations for trade partners.",
    bullets: ["Dry storage guidance", "Warehouse handling", "Sealed pack discipline", "Retailer storage checklist"],
    cta: "Read wholesale terms"
  },
  {
    slug: "lab-reports",
    title: "Lab Reports and Batch Test Placeholders",
    eyebrow: "Verification",
    description: "A future-proof page where batch reports, product certificates, and test summaries can be uploaded.",
    bullets: ["Upload PDF reports later", "Add report date and batch", "Keep claims matched to documents", "Use noindex until reports are ready if needed"],
    cta: "Request latest report"
  }
];
