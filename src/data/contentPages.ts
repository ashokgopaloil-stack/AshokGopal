export type ArticlePage = {
  slug: string;
  title: string;
  summary: string;
  cluster: string;
  intent: string;
  image: string;
  sections: { heading: string; body: string }[];
  faqs: { question: string; answer: string }[];
  relatedProducts: string[];
};

export type BuyerPage = {
  slug: string;
  title: string;
  summary: string;
  buyerType: string;
  recommendedPacks: string[];
  requirements: string[];
  ctaMessage: string;
};

export type BulkPage = {
  slug: string;
  title: string;
  pack: string;
  summary: string;
  specs: string[];
  buyerFit: string[];
};

export type ComparisonPage = {
  slug: string;
  title: string;
  summary: string;
  leftLabel: string;
  rightLabel: string;
  criteria: string[];
};

export const mustardOilGuides: ArticlePage[] = [
  {
    "slug": "what-is-mustard-oil",
    "title": "What Is Mustard Oil?",
    "summary": "Learn the basic types, kitchen uses, and buyer considerations around mustard oil.",
    "cluster": "Awareness",
    "intent": "Informational",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "Learn the basic types, kitchen uses, and buyer considerations around mustard oil."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for What Is Mustard Oil??",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "kacchi-ghani-meaning",
    "title": "What Does Kacchi Ghani Mean?",
    "summary": "Plain-language explanation of the term customers see on mustard oil packs.",
    "cluster": "Education",
    "intent": "Informational",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "Plain-language explanation of the term customers see on mustard oil packs."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for What Does Kacchi Ghani Mean??",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "cold-pressed-vs-kacchi-ghani-vs-expeller",
    "title": "Cold Pressed vs Kacchi Ghani vs Expeller Pressed Oil",
    "summary": "Comparison page for common production terms buyers search before purchase.",
    "cluster": "Comparison",
    "intent": "Informational",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "Comparison page for common production terms buyers search before purchase."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for Cold Pressed vs Kacchi Ghani vs Expeller Pressed Oil?",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "wood-pressed-vs-kacchi-ghani",
    "title": "Wood Pressed vs Kacchi Ghani Mustard Oil",
    "summary": "Explains how buyers compare traditional process terms without overclaiming.",
    "cluster": "Comparison",
    "intent": "Informational",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "Explains how buyers compare traditional process terms without overclaiming."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for Wood Pressed vs Kacchi Ghani Mustard Oil?",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "filtered-vs-refined-mustard-oil",
    "title": "Filtered vs Refined Mustard Oil",
    "summary": "Helps shoppers understand common label terms and what to verify on pack.",
    "cluster": "Comparison",
    "intent": "Informational",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "Helps shoppers understand common label terms and what to verify on pack."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for Filtered vs Refined Mustard Oil?",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "yellow-vs-black-mustard-oil",
    "title": "Yellow Mustard Oil vs Black Mustard Oil",
    "summary": "A buyer guide for seed-type comparison and Bengali cooking expectations.",
    "cluster": "Comparison",
    "intent": "Informational",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "A buyer guide for seed-type comparison and Bengali cooking expectations."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for Yellow Mustard Oil vs Black Mustard Oil?",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "mustard-oil-pungency-jhajh",
    "title": "Mustard Oil Pungency and Jhajh",
    "summary": "A sensory SEO page around sharp aroma, pungency, and regional taste language.",
    "cluster": "Taste",
    "intent": "Informational",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "A sensory SEO page around sharp aroma, pungency, and regional taste language."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for Mustard Oil Pungency and Jhajh?",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "mustard-oil-smoke-point",
    "title": "Mustard Oil Smoke Point and Cooking Uses",
    "summary": "Safe, careful guide to where mustard oil is commonly used in Indian kitchens.",
    "cluster": "Cooking",
    "intent": "Informational",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "Safe, careful guide to where mustard oil is commonly used in Indian kitchens."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for Mustard Oil Smoke Point and Cooking Uses?",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "is-mustard-oil-safe-for-cooking",
    "title": "Is Mustard Oil Safe for Cooking?",
    "summary": "Balanced educational page that avoids medical promises and points users to local regulations and labels.",
    "cluster": "Safety",
    "intent": "Informational",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "Balanced educational page that avoids medical promises and points users to local regulations and labels."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for Is Mustard Oil Safe for Cooking??",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "erucic-acid-in-mustard-oil",
    "title": "Erucic Acid in Mustard Oil: What Buyers Should Know",
    "summary": "Careful explainer for customers who read international discussions and want context.",
    "cluster": "Safety",
    "intent": "Informational",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "Careful explainer for customers who read international discussions and want context."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for Erucic Acid in Mustard Oil: What Buyers Should Know?",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "allyl-isothiocyanate-aroma",
    "title": "Why Mustard Oil Smells Sharp",
    "summary": "Explains the pungent sensory character associated with mustard oil in non-medical language.",
    "cluster": "Taste",
    "intent": "Informational",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "Explains the pungent sensory character associated with mustard oil in non-medical language."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for Why Mustard Oil Smells Sharp?",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "packed-vs-loose-mustard-oil",
    "title": "Packed Mustard Oil vs Loose Mustard Oil",
    "summary": "Trust page explaining sealed packs, batch code, MRP, and purchase proof.",
    "cluster": "Trust",
    "intent": "Informational",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "Trust page explaining sealed packs, batch code, MRP, and purchase proof."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for Packed Mustard Oil vs Loose Mustard Oil?",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "how-to-read-mustard-oil-label",
    "title": "How to Read a Mustard Oil Label",
    "summary": "Explains pack information: FSSAI number, batch code, MRP, net quantity, and storage.",
    "cluster": "Trust",
    "intent": "Informational",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "Explains pack information: FSSAI number, batch code, MRP, net quantity, and storage."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for How to Read a Mustard Oil Label?",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "fssai-for-edible-oil-buyers",
    "title": "FSSAI for Edible Oil Buyers",
    "summary": "Explains why food-safety licence details and label consistency matter.",
    "cluster": "Compliance",
    "intent": "Informational",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "Explains why food-safety licence details and label consistency matter."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for FSSAI for Edible Oil Buyers?",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "batch-code-on-edible-oil",
    "title": "What a Batch Code Means on Edible Oil",
    "summary": "Traceability explainer for retail and wholesale buyers.",
    "cluster": "Compliance",
    "intent": "Informational",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "Traceability explainer for retail and wholesale buyers."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for What a Batch Code Means on Edible Oil?",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "mustard-oil-storage-at-home",
    "title": "How to Store Mustard Oil at Home",
    "summary": "Simple household storage and usage guidance.",
    "cluster": "Usage",
    "intent": "Informational",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "Simple household storage and usage guidance."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for How to Store Mustard Oil at Home?",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "mustard-oil-storage-for-retailers",
    "title": "Mustard Oil Storage for Retailers",
    "summary": "Retail handling guidance for cartons, shelves, sun exposure, and stock rotation.",
    "cluster": "Trade",
    "intent": "Commercial investigation",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "Retail handling guidance for cartons, shelves, sun exposure, and stock rotation."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for Mustard Oil Storage for Retailers?",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "mustard-oil-for-bengali-cooking",
    "title": "Mustard Oil for Bengali Cooking",
    "summary": "Culinary authority page linking product SKUs with Bengali recipes and seasonal use.",
    "cluster": "Culture",
    "intent": "Informational",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "Culinary authority page linking product SKUs with Bengali recipes and seasonal use."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for Mustard Oil for Bengali Cooking?",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "mustard-oil-for-fish-curry",
    "title": "Mustard Oil for Fish Curry",
    "summary": "Use-case page for fish frying, marinade, and Bengali curry content.",
    "cluster": "Cooking",
    "intent": "Informational",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "Use-case page for fish frying, marinade, and Bengali curry content."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for Mustard Oil for Fish Curry?",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "mustard-oil-for-pickles",
    "title": "Mustard Oil for Pickles",
    "summary": "Explains why pickle makers ask for mustard oil and what pack sizes they may need.",
    "cluster": "Cooking",
    "intent": "Informational",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "Explains why pickle makers ask for mustard oil and what pack sizes they may need."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for Mustard Oil for Pickles?",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "mustard-oil-for-frying",
    "title": "Mustard Oil for Frying",
    "summary": "Use-case page for frying vegetables, fish, and snacks with careful copy.",
    "cluster": "Cooking",
    "intent": "Informational",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "Use-case page for frying vegetables, fish, and snacks with careful copy."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for Mustard Oil for Frying?",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "mustard-oil-for-marinades",
    "title": "Mustard Oil for Marinades",
    "summary": "Search page for marinades, fish preparation, and kitchen aroma.",
    "cluster": "Cooking",
    "intent": "Informational",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "Search page for marinades, fish preparation, and kitchen aroma."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for Mustard Oil for Marinades?",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "mustard-oil-myths-and-facts",
    "title": "Mustard Oil Myths and Facts",
    "summary": "A safer myth/fact hub inspired by category search demand, with claims kept conservative.",
    "cluster": "FAQ",
    "intent": "Informational",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "A safer myth/fact hub inspired by category search demand, with claims kept conservative."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for Mustard Oil Myths and Facts?",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "mustard-oil-health-claims-policy",
    "title": "How We Talk About Mustard Oil and Health",
    "summary": "Trust-building page explaining that product claims should match labels and documents.",
    "cluster": "Trust",
    "intent": "Informational",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "Trust-building page explaining that product claims should match labels and documents."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for How We Talk About Mustard Oil and Health?",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "vitamin-a-d2-e-in-edible-oil",
    "title": "Vitamin A, D2 and E in Edible Oil Labels",
    "summary": "Explains enrichment language only when backed by pack labels and documents.",
    "cluster": "Label",
    "intent": "Informational",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "Explains enrichment language only when backed by pack labels and documents."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for Vitamin A, D2 and E in Edible Oil Labels?",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "mustard-oil-price-factors",
    "title": "What Affects Mustard Oil Price?",
    "summary": "Trade and consumer explainer covering pack size, seed cost, logistics, and market movement.",
    "cluster": "Trade",
    "intent": "Commercial investigation",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "Trade and consumer explainer covering pack size, seed cost, logistics, and market movement."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for What Affects Mustard Oil Price??",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "mustard-oil-wholesale-buying-guide",
    "title": "Mustard Oil Wholesale Buying Guide",
    "summary": "B2B guide for distributors, restaurants, and retailers comparing SKUs and documentation.",
    "cluster": "Trade",
    "intent": "Commercial investigation",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "B2B guide for distributors, restaurants, and retailers comparing SKUs and documentation."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for Mustard Oil Wholesale Buying Guide?",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "mustard-oil-distributor-margin-logic",
    "title": "Mustard Oil Distributor Margin Logic",
    "summary": "Commercial explainer around volume, rotation, territory, and reorder discipline.",
    "cluster": "Trade",
    "intent": "Commercial investigation",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "Commercial explainer around volume, rotation, territory, and reorder discipline."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for Mustard Oil Distributor Margin Logic?",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "15kg-vs-15l-mustard-oil",
    "title": "15 kg vs 15 Litre Mustard Oil Tins",
    "summary": "Explains why commercial buyers search both kg and litre formats and should confirm SKU basis.",
    "cluster": "Trade",
    "intent": "Commercial investigation",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "Explains why commercial buyers search both kg and litre formats and should confirm SKU basis."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for 15 kg vs 15 Litre Mustard Oil Tins?",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "mustard-oil-carton-quantity",
    "title": "Mustard Oil Carton Quantity Checklist",
    "summary": "Prepares the site for carton count, case weight, and distributor planning.",
    "cluster": "Trade",
    "intent": "Commercial investigation",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "Prepares the site for carton count, case weight, and distributor planning."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for Mustard Oil Carton Quantity Checklist?",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "how-to-choose-mustard-oil",
    "title": "How to Choose Mustard Oil",
    "summary": "Buyer checklist: taste, pack, label, batch, size, and intended use.",
    "cluster": "Buying",
    "intent": "Commercial investigation",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "Buyer checklist: taste, pack, label, batch, size, and intended use."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for How to Choose Mustard Oil?",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "best-mustard-oil-for-bengali-kitchen",
    "title": "Best Mustard Oil for a Bengali Kitchen: What to Check",
    "summary": "Non-claimy buyer guide focused on fit rather than unverifiable superiority.",
    "cluster": "Buying",
    "intent": "Commercial investigation",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "Non-claimy buyer guide focused on fit rather than unverifiable superiority."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for Best Mustard Oil for a Bengali Kitchen: What to Check?",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "mustard-oil-for-kirana-stores",
    "title": "Mustard Oil for Kirana Stores",
    "summary": "Retailer-specific guide for stocking bottle, jar, and tin formats.",
    "cluster": "Trade",
    "intent": "Commercial investigation",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "Retailer-specific guide for stocking bottle, jar, and tin formats."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for Mustard Oil for Kirana Stores?",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "mustard-oil-for-restaurants",
    "title": "Mustard Oil for Restaurants",
    "summary": "Food-service guide linked to 5 litre and 15 kg pages.",
    "cluster": "Trade",
    "intent": "Commercial investigation",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "Food-service guide linked to 5 litre and 15 kg pages."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for Mustard Oil for Restaurants?",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "mustard-oil-for-institutions",
    "title": "Mustard Oil for Institutions",
    "summary": "Procurement guide for canteens, hostels, factories, and institutional kitchens.",
    "cluster": "Trade",
    "intent": "Commercial investigation",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "Procurement guide for canteens, hostels, factories, and institutional kitchens."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for Mustard Oil for Institutions?",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "mustard-oil-for-jhalmuri-vendors",
    "title": "Mustard Oil for Jhalmuri Vendors",
    "summary": "Street-snack use case page with aroma-led copy and bulk enquiry path.",
    "cluster": "Culture",
    "intent": "Informational",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "Street-snack use case page with aroma-led copy and bulk enquiry path."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for Mustard Oil for Jhalmuri Vendors?",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "mustard-oil-for-puja-community-kitchens",
    "title": "Mustard Oil for Community Kitchens",
    "summary": "Use-case page for event, puja, and community cooking supply enquiries.",
    "cluster": "Trade",
    "intent": "Commercial investigation",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "Use-case page for event, puja, and community cooking supply enquiries."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for Mustard Oil for Community Kitchens?",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "mustard-oil-and-bengali-food-culture",
    "title": "Mustard Oil and Bengali Food Culture",
    "summary": "Brand authority page for recipes, nostalgia, and regional search.",
    "cluster": "Culture",
    "intent": "Informational",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "Brand authority page for recipes, nostalgia, and regional search."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for Mustard Oil and Bengali Food Culture?",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "mustard-oil-social-media-content",
    "title": "Mustard Oil Social Media Content Ideas",
    "summary": "Internal-facing public page for recipe reels, packaging photos, and retailer proof posts.",
    "cluster": "Marketing",
    "intent": "Informational",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "Internal-facing public page for recipe reels, packaging photos, and retailer proof posts."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for Mustard Oil Social Media Content Ideas?",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "mustard-oil-quality-checklist",
    "title": "Mustard Oil Quality Checklist",
    "summary": "Buyer checklist tying together label, seal, storage, batch code, and invoice.",
    "cluster": "Trust",
    "intent": "Informational",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "Buyer checklist tying together label, seal, storage, batch code, and invoice."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for Mustard Oil Quality Checklist?",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "why-buy-from-local-manufacturer",
    "title": "Why Buy Mustard Oil from a Local Manufacturer?",
    "summary": "Regional-trust page for West Bengal buyers comparing national brands and local supply.",
    "cluster": "Trust",
    "intent": "Informational",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "Regional-trust page for West Bengal buyers comparing national brands and local supply."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for Why Buy Mustard Oil from a Local Manufacturer??",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "mustard-oil-for-west-bengal-distributors",
    "title": "Mustard Oil for West Bengal Distributors",
    "summary": "Statewide trade guide linking district pages and wholesale form.",
    "cluster": "Trade",
    "intent": "Commercial investigation",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "Statewide trade guide linking district pages and wholesale form."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for Mustard Oil for West Bengal Distributors?",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  },
  {
    "slug": "mustard-oil-faq",
    "title": "Mustard Oil FAQ",
    "summary": "Long-tail FAQ hub for common search questions and internal links.",
    "cluster": "FAQ",
    "intent": "Informational",
    "image": "/placeholders/social-preview.webp",
    "sections": [
      {
        "heading": "What this page should answer",
        "body": "Long-tail FAQ hub for common search questions and internal links."
      },
      {
        "heading": "Ashok Gopal angle",
        "body": "Position the brand around Bengali cooking fit, sealed packaging, batch discipline, and practical pack-size selection. Avoid unsupported medical or superiority claims."
      },
      {
        "heading": "Internal links to add",
        "body": "Link to the 1 litre bottle for households, 5 litre jar for repeat buyers, 15 kg tin for food-service, and wholesale form for trade enquiries."
      }
    ],
    "faqs": [
      {
        "question": "Is this page final for Mustard Oil FAQ?",
        "answer": "The structure is ready. Add final photos, label facts, and verified business details before launch."
      },
      {
        "question": "Should this page make health claims?",
        "answer": "No. Keep health wording careful and only use claims that match verified packaging, documents, or authoritative sources."
      }
    ],
    "relatedProducts": [
      "kacchi-ghani-mustard-oil-1l",
      "kacchi-ghani-mustard-oil-5l-jar",
      "kacchi-ghani-mustard-oil-15kg-tin"
    ]
  }
];
export const buyerUseCases: BuyerPage[] = [
  {
    "slug": "restaurants",
    "title": "Mustard Oil Supply for Restaurants",
    "summary": "Restaurants need repeat pack availability, GST billing, and stable reorder flow.",
    "buyerType": "Supply for Restaurants",
    "recommendedPacks": [
      "1 litre bottle",
      "5 litre jar",
      "15 kg tin",
      "Retail carton supply"
    ],
    "requirements": [
      "GST billing details",
      "Monthly expected volume",
      "Delivery location",
      "Preferred pack size",
      "FSSAI/document requirement if applicable"
    ],
    "ctaMessage": "I want to enquire about Mustard Oil Supply for Restaurants."
  },
  {
    "slug": "caterers",
    "title": "Mustard Oil Supply for Caterers",
    "summary": "Caterers need high-volume packs for events, weddings, community meals, and seasonal demand.",
    "buyerType": "Supply for Caterers",
    "recommendedPacks": [
      "1 litre bottle",
      "5 litre jar",
      "15 kg tin",
      "Retail carton supply"
    ],
    "requirements": [
      "GST billing details",
      "Monthly expected volume",
      "Delivery location",
      "Preferred pack size",
      "FSSAI/document requirement if applicable"
    ],
    "ctaMessage": "I want to enquire about Mustard Oil Supply for Caterers."
  },
  {
    "slug": "cloud-kitchens",
    "title": "Mustard Oil for Cloud Kitchens",
    "summary": "Cloud kitchens need predictable pack sizes, invoices, and quick replenishment.",
    "buyerType": "for Cloud Kitchens",
    "recommendedPacks": [
      "1 litre bottle",
      "5 litre jar",
      "15 kg tin",
      "Retail carton supply"
    ],
    "requirements": [
      "GST billing details",
      "Monthly expected volume",
      "Delivery location",
      "Preferred pack size",
      "FSSAI/document requirement if applicable"
    ],
    "ctaMessage": "I want to enquire about Mustard Oil for Cloud Kitchens."
  },
  {
    "slug": "hotels",
    "title": "Mustard Oil Supply for Hotels",
    "summary": "Hotels may need bulk mustard oil for regional cuisine, staff kitchens, or banquet cooking.",
    "buyerType": "Supply for Hotels",
    "recommendedPacks": [
      "1 litre bottle",
      "5 litre jar",
      "15 kg tin",
      "Retail carton supply"
    ],
    "requirements": [
      "GST billing details",
      "Monthly expected volume",
      "Delivery location",
      "Preferred pack size",
      "FSSAI/document requirement if applicable"
    ],
    "ctaMessage": "I want to enquire about Mustard Oil Supply for Hotels."
  },
  {
    "slug": "dhaba-and-small-eateries",
    "title": "Mustard Oil for Dhabas and Small Eateries",
    "summary": "Small eateries need practical bulk packs and repeat-order convenience.",
    "buyerType": "for Dhabas and Small Eateries",
    "recommendedPacks": [
      "1 litre bottle",
      "5 litre jar",
      "15 kg tin",
      "Retail carton supply"
    ],
    "requirements": [
      "GST billing details",
      "Monthly expected volume",
      "Delivery location",
      "Preferred pack size",
      "FSSAI/document requirement if applicable"
    ],
    "ctaMessage": "I want to enquire about Mustard Oil for Dhabas and Small Eateries."
  },
  {
    "slug": "fish-fry-counters",
    "title": "Mustard Oil for Fish Fry Counters",
    "summary": "Fish counters and snack shops can use aroma-led recipe positioning and bulk enquiry flow.",
    "buyerType": "for Fish Fry Counters",
    "recommendedPacks": [
      "1 litre bottle",
      "5 litre jar",
      "15 kg tin",
      "Retail carton supply"
    ],
    "requirements": [
      "GST billing details",
      "Monthly expected volume",
      "Delivery location",
      "Preferred pack size",
      "FSSAI/document requirement if applicable"
    ],
    "ctaMessage": "I want to enquire about Mustard Oil for Fish Fry Counters."
  },
  {
    "slug": "jhalmuri-vendors",
    "title": "Mustard Oil for Jhalmuri Vendors",
    "summary": "Jhalmuri vendors need strong aroma, small trade packs, and repeat purchase support.",
    "buyerType": "for Jhalmuri Vendors",
    "recommendedPacks": [
      "1 litre bottle",
      "5 litre jar",
      "15 kg tin",
      "Retail carton supply"
    ],
    "requirements": [
      "GST billing details",
      "Monthly expected volume",
      "Delivery location",
      "Preferred pack size",
      "FSSAI/document requirement if applicable"
    ],
    "ctaMessage": "I want to enquire about Mustard Oil for Jhalmuri Vendors."
  },
  {
    "slug": "pickle-makers",
    "title": "Mustard Oil for Pickle Makers",
    "summary": "Pickle makers need bulk packs, storage notes, and batch consistency communication.",
    "buyerType": "for Pickle Makers",
    "recommendedPacks": [
      "1 litre bottle",
      "5 litre jar",
      "15 kg tin",
      "Retail carton supply"
    ],
    "requirements": [
      "GST billing details",
      "Monthly expected volume",
      "Delivery location",
      "Preferred pack size",
      "FSSAI/document requirement if applicable"
    ],
    "ctaMessage": "I want to enquire about Mustard Oil for Pickle Makers."
  },
  {
    "slug": "snack-manufacturers",
    "title": "Mustard Oil for Snack Manufacturers",
    "summary": "Small snack producers need ingredient supply discussions and documentation.",
    "buyerType": "for Snack Manufacturers",
    "recommendedPacks": [
      "1 litre bottle",
      "5 litre jar",
      "15 kg tin",
      "Retail carton supply"
    ],
    "requirements": [
      "GST billing details",
      "Monthly expected volume",
      "Delivery location",
      "Preferred pack size",
      "FSSAI/document requirement if applicable"
    ],
    "ctaMessage": "I want to enquire about Mustard Oil for Snack Manufacturers."
  },
  {
    "slug": "kirana-stores",
    "title": "Mustard Oil for Kirana Stores",
    "summary": "Kirana stores need shelf-ready bottles, local trust, and carton replenishment.",
    "buyerType": "for Kirana Stores",
    "recommendedPacks": [
      "1 litre bottle",
      "5 litre jar",
      "15 kg tin",
      "Retail carton supply"
    ],
    "requirements": [
      "GST billing details",
      "Monthly expected volume",
      "Delivery location",
      "Preferred pack size",
      "FSSAI/document requirement if applicable"
    ],
    "ctaMessage": "I want to enquire about Mustard Oil for Kirana Stores."
  },
  {
    "slug": "grocery-wholesalers",
    "title": "Mustard Oil for Grocery Wholesalers",
    "summary": "Wholesalers need carton details, dispatch terms, and fast SKU comparison.",
    "buyerType": "for Grocery Wholesalers",
    "recommendedPacks": [
      "1 litre bottle",
      "5 litre jar",
      "15 kg tin",
      "Retail carton supply"
    ],
    "requirements": [
      "GST billing details",
      "Monthly expected volume",
      "Delivery location",
      "Preferred pack size",
      "FSSAI/document requirement if applicable"
    ],
    "ctaMessage": "I want to enquire about Mustard Oil for Grocery Wholesalers."
  },
  {
    "slug": "supermarkets",
    "title": "Mustard Oil for Supermarkets",
    "summary": "Supermarkets need barcode, carton, MRP, and product image readiness.",
    "buyerType": "for Supermarkets",
    "recommendedPacks": [
      "1 litre bottle",
      "5 litre jar",
      "15 kg tin",
      "Retail carton supply"
    ],
    "requirements": [
      "GST billing details",
      "Monthly expected volume",
      "Delivery location",
      "Preferred pack size",
      "FSSAI/document requirement if applicable"
    ],
    "ctaMessage": "I want to enquire about Mustard Oil for Supermarkets."
  },
  {
    "slug": "sub-distributors",
    "title": "Mustard Oil for Sub-Distributors",
    "summary": "Sub-distributors need territory allocation, margin discussion, and reorder cadence.",
    "buyerType": "for Sub-Distributors",
    "recommendedPacks": [
      "1 litre bottle",
      "5 litre jar",
      "15 kg tin",
      "Retail carton supply"
    ],
    "requirements": [
      "GST billing details",
      "Monthly expected volume",
      "Delivery location",
      "Preferred pack size",
      "FSSAI/document requirement if applicable"
    ],
    "ctaMessage": "I want to enquire about Mustard Oil for Sub-Distributors."
  },
  {
    "slug": "cnf-agents",
    "title": "Mustard Oil for C&F and Regional Agents",
    "summary": "Regional agents need documentation, territory logic, and stock movement planning.",
    "buyerType": "for C&F and Regional Agents",
    "recommendedPacks": [
      "1 litre bottle",
      "5 litre jar",
      "15 kg tin",
      "Retail carton supply"
    ],
    "requirements": [
      "GST billing details",
      "Monthly expected volume",
      "Delivery location",
      "Preferred pack size",
      "FSSAI/document requirement if applicable"
    ],
    "ctaMessage": "I want to enquire about Mustard Oil for C&F and Regional Agents."
  },
  {
    "slug": "hostel-canteens",
    "title": "Mustard Oil for Hostel Canteens",
    "summary": "Hostel canteens need institutional billing and bulk pack enquiry.",
    "buyerType": "for Hostel Canteens",
    "recommendedPacks": [
      "1 litre bottle",
      "5 litre jar",
      "15 kg tin",
      "Retail carton supply"
    ],
    "requirements": [
      "GST billing details",
      "Monthly expected volume",
      "Delivery location",
      "Preferred pack size",
      "FSSAI/document requirement if applicable"
    ],
    "ctaMessage": "I want to enquire about Mustard Oil for Hostel Canteens."
  },
  {
    "slug": "factory-canteens",
    "title": "Mustard Oil for Factory Canteens",
    "summary": "Factory canteens need repeat monthly procurement and documents.",
    "buyerType": "for Factory Canteens",
    "recommendedPacks": [
      "1 litre bottle",
      "5 litre jar",
      "15 kg tin",
      "Retail carton supply"
    ],
    "requirements": [
      "GST billing details",
      "Monthly expected volume",
      "Delivery location",
      "Preferred pack size",
      "FSSAI/document requirement if applicable"
    ],
    "ctaMessage": "I want to enquire about Mustard Oil for Factory Canteens."
  },
  {
    "slug": "school-college-canteens",
    "title": "Mustard Oil for School and College Canteens",
    "summary": "Canteens need compliant documentation and predictable supply.",
    "buyerType": "for School and College Canteens",
    "recommendedPacks": [
      "1 litre bottle",
      "5 litre jar",
      "15 kg tin",
      "Retail carton supply"
    ],
    "requirements": [
      "GST billing details",
      "Monthly expected volume",
      "Delivery location",
      "Preferred pack size",
      "FSSAI/document requirement if applicable"
    ],
    "ctaMessage": "I want to enquire about Mustard Oil for School and College Canteens."
  },
  {
    "slug": "community-kitchens",
    "title": "Mustard Oil for Community Kitchens",
    "summary": "Community kitchens need bulk packs for events, puja, and seasonal cooking.",
    "buyerType": "for Community Kitchens",
    "recommendedPacks": [
      "1 litre bottle",
      "5 litre jar",
      "15 kg tin",
      "Retail carton supply"
    ],
    "requirements": [
      "GST billing details",
      "Monthly expected volume",
      "Delivery location",
      "Preferred pack size",
      "FSSAI/document requirement if applicable"
    ],
    "ctaMessage": "I want to enquire about Mustard Oil for Community Kitchens."
  },
  {
    "slug": "temple-and-ashram-kitchens",
    "title": "Mustard Oil for Temple and Ashram Kitchens",
    "summary": "Community food preparation needs bulk enquiry and document support.",
    "buyerType": "for Temple and Ashram Kitchens",
    "recommendedPacks": [
      "1 litre bottle",
      "5 litre jar",
      "15 kg tin",
      "Retail carton supply"
    ],
    "requirements": [
      "GST billing details",
      "Monthly expected volume",
      "Delivery location",
      "Preferred pack size",
      "FSSAI/document requirement if applicable"
    ],
    "ctaMessage": "I want to enquire about Mustard Oil for Temple and Ashram Kitchens."
  },
  {
    "slug": "institutional-procurement",
    "title": "Mustard Oil for Institutional Procurement",
    "summary": "Procurement teams need product data, GST billing, and document readiness.",
    "buyerType": "for Institutional Procurement",
    "recommendedPacks": [
      "1 litre bottle",
      "5 litre jar",
      "15 kg tin",
      "Retail carton supply"
    ],
    "requirements": [
      "GST billing details",
      "Monthly expected volume",
      "Delivery location",
      "Preferred pack size",
      "FSSAI/document requirement if applicable"
    ],
    "ctaMessage": "I want to enquire about Mustard Oil for Institutional Procurement."
  },
  {
    "slug": "ecommerce-resellers",
    "title": "Mustard Oil for E-commerce Resellers",
    "summary": "Resellers need product images, pack dimensions, barcode, and catalogue data.",
    "buyerType": "for E-commerce Resellers",
    "recommendedPacks": [
      "1 litre bottle",
      "5 litre jar",
      "15 kg tin",
      "Retail carton supply"
    ],
    "requirements": [
      "GST billing details",
      "Monthly expected volume",
      "Delivery location",
      "Preferred pack size",
      "FSSAI/document requirement if applicable"
    ],
    "ctaMessage": "I want to enquire about Mustard Oil for E-commerce Resellers."
  },
  {
    "slug": "modern-trade-buyers",
    "title": "Mustard Oil for Modern Trade Buyers",
    "summary": "Modern trade buyers need professional product and logistics information.",
    "buyerType": "for Modern Trade Buyers",
    "recommendedPacks": [
      "1 litre bottle",
      "5 litre jar",
      "15 kg tin",
      "Retail carton supply"
    ],
    "requirements": [
      "GST billing details",
      "Monthly expected volume",
      "Delivery location",
      "Preferred pack size",
      "FSSAI/document requirement if applicable"
    ],
    "ctaMessage": "I want to enquire about Mustard Oil for Modern Trade Buyers."
  },
  {
    "slug": "private-label-buyers",
    "title": "Mustard Oil Private Label Buyers",
    "summary": "Private label enquiries need separate qualification and documentation.",
    "buyerType": "Private Label Buyers",
    "recommendedPacks": [
      "1 litre bottle",
      "5 litre jar",
      "15 kg tin",
      "Retail carton supply"
    ],
    "requirements": [
      "GST billing details",
      "Monthly expected volume",
      "Delivery location",
      "Preferred pack size",
      "FSSAI/document requirement if applicable"
    ],
    "ctaMessage": "I want to enquire about Mustard Oil Private Label Buyers."
  },
  {
    "slug": "export-enquiry",
    "title": "Mustard Oil Export Enquiry Placeholder",
    "summary": "Export intent page kept cautious until certifications, documentation, and commercial readiness are confirmed.",
    "buyerType": "Export Enquiry Placeholder",
    "recommendedPacks": [
      "1 litre bottle",
      "5 litre jar",
      "15 kg tin",
      "Retail carton supply"
    ],
    "requirements": [
      "GST billing details",
      "Monthly expected volume",
      "Delivery location",
      "Preferred pack size",
      "FSSAI/document requirement if applicable"
    ],
    "ctaMessage": "I want to enquire about Mustard Oil Export Enquiry Placeholder."
  }
];
export const bulkSupplyPages: BulkPage[] = [
  {
    "slug": "500ml-bottle-wholesale",
    "title": "500 ml Mustard Oil Bottle Wholesale",
    "pack": "500 ml bottle",
    "summary": "Retail-friendly compact SKU for kirana and sampling-led sales.",
    "specs": [
      "Final MRP to be added",
      "Case quantity to be confirmed",
      "MOQ to be confirmed",
      "Dispatch terms to be confirmed"
    ],
    "buyerFit": [
      "Retailers",
      "Distributors",
      "Restaurants",
      "Institutional buyers"
    ]
  },
  {
    "slug": "1-litre-bottle-carton",
    "title": "1 Litre Mustard Oil Bottle Carton",
    "pack": "1 litre bottle carton",
    "summary": "Primary household SKU for retail shelves and distributor movement.",
    "specs": [
      "Final MRP to be added",
      "Case quantity to be confirmed",
      "MOQ to be confirmed",
      "Dispatch terms to be confirmed"
    ],
    "buyerFit": [
      "Retailers",
      "Distributors",
      "Restaurants",
      "Institutional buyers"
    ]
  },
  {
    "slug": "2-litre-family-pack-wholesale",
    "title": "2 Litre Mustard Oil Family Pack Wholesale",
    "pack": "2 litre family pack",
    "summary": "Value pack concept for repeat household buyers.",
    "specs": [
      "Final MRP to be added",
      "Case quantity to be confirmed",
      "MOQ to be confirmed",
      "Dispatch terms to be confirmed"
    ],
    "buyerFit": [
      "Retailers",
      "Distributors",
      "Restaurants",
      "Institutional buyers"
    ]
  },
  {
    "slug": "5-litre-jar-wholesale",
    "title": "5 Litre Mustard Oil Jar Wholesale",
    "pack": "5 litre jar",
    "summary": "High-rotation pack for larger families and small food-service buyers.",
    "specs": [
      "Final MRP to be added",
      "Case quantity to be confirmed",
      "MOQ to be confirmed",
      "Dispatch terms to be confirmed"
    ],
    "buyerFit": [
      "Retailers",
      "Distributors",
      "Restaurants",
      "Institutional buyers"
    ]
  },
  {
    "slug": "10-litre-jar-bulk",
    "title": "10 Litre Mustard Oil Jar Bulk Supply",
    "pack": "10 litre jar",
    "summary": "Intermediate commercial pack for recurring kitchen use.",
    "specs": [
      "Final MRP to be added",
      "Case quantity to be confirmed",
      "MOQ to be confirmed",
      "Dispatch terms to be confirmed"
    ],
    "buyerFit": [
      "Retailers",
      "Distributors",
      "Restaurants",
      "Institutional buyers"
    ]
  },
  {
    "slug": "15kg-tin-bulk",
    "title": "15 kg Mustard Oil Tin Bulk Supply",
    "pack": "15 kg tin",
    "summary": "Core B2B page for distributors, caterers, and institutions.",
    "specs": [
      "Final MRP to be added",
      "Case quantity to be confirmed",
      "MOQ to be confirmed",
      "Dispatch terms to be confirmed"
    ],
    "buyerFit": [
      "Retailers",
      "Distributors",
      "Restaurants",
      "Institutional buyers"
    ]
  },
  {
    "slug": "mixed-sku-carton",
    "title": "Mixed SKU Mustard Oil Carton Supply",
    "pack": "mixed carton",
    "summary": "Distributor page for product assortment planning.",
    "specs": [
      "Final MRP to be added",
      "Case quantity to be confirmed",
      "MOQ to be confirmed",
      "Dispatch terms to be confirmed"
    ],
    "buyerFit": [
      "Retailers",
      "Distributors",
      "Restaurants",
      "Institutional buyers"
    ]
  },
  {
    "slug": "restaurant-bulk-pack",
    "title": "Restaurant Mustard Oil Bulk Pack",
    "pack": "food-service pack",
    "summary": "Food-service page for restaurants and caterers.",
    "specs": [
      "Final MRP to be added",
      "Case quantity to be confirmed",
      "MOQ to be confirmed",
      "Dispatch terms to be confirmed"
    ],
    "buyerFit": [
      "Retailers",
      "Distributors",
      "Restaurants",
      "Institutional buyers"
    ]
  },
  {
    "slug": "pickle-maker-bulk-pack",
    "title": "Pickle Maker Mustard Oil Bulk Pack",
    "pack": "pickle maker pack",
    "summary": "Bulk page for pickle makers and small processors.",
    "specs": [
      "Final MRP to be added",
      "Case quantity to be confirmed",
      "MOQ to be confirmed",
      "Dispatch terms to be confirmed"
    ],
    "buyerFit": [
      "Retailers",
      "Distributors",
      "Restaurants",
      "Institutional buyers"
    ]
  },
  {
    "slug": "institutional-monthly-supply",
    "title": "Monthly Institutional Mustard Oil Supply",
    "pack": "monthly supply",
    "summary": "Institutional recurring purchase page.",
    "specs": [
      "Final MRP to be added",
      "Case quantity to be confirmed",
      "MOQ to be confirmed",
      "Dispatch terms to be confirmed"
    ],
    "buyerFit": [
      "Retailers",
      "Distributors",
      "Restaurants",
      "Institutional buyers"
    ]
  }
];
export const comparisonPages: ComparisonPage[] = [
  {
    "slug": "kacchi-ghani-vs-refined-mustard-oil",
    "title": "Kacchi Ghani vs Refined Mustard Oil",
    "summary": "Careful comparison page for buyers comparing kacchi ghani and refined without unsupported health claims.",
    "leftLabel": "Kacchi ghani",
    "rightLabel": "Refined",
    "criteria": [
      "Use case",
      "Pack and label clarity",
      "Storage and handling",
      "Commercial buyer fit",
      "Questions to ask before buying"
    ]
  },
  {
    "slug": "filtered-vs-refined-oil",
    "title": "Filtered vs Refined Oil",
    "summary": "Careful comparison page for buyers comparing filtered and refined without unsupported health claims.",
    "leftLabel": "Filtered",
    "rightLabel": "Refined",
    "criteria": [
      "Use case",
      "Pack and label clarity",
      "Storage and handling",
      "Commercial buyer fit",
      "Questions to ask before buying"
    ]
  },
  {
    "slug": "wood-pressed-vs-cold-pressed",
    "title": "Wood Pressed vs Cold Pressed Oil",
    "summary": "Careful comparison page for buyers comparing wood pressed and cold pressed without unsupported health claims.",
    "leftLabel": "Wood pressed",
    "rightLabel": "Cold pressed",
    "criteria": [
      "Use case",
      "Pack and label clarity",
      "Storage and handling",
      "Commercial buyer fit",
      "Questions to ask before buying"
    ]
  },
  {
    "slug": "mustard-oil-vs-sunflower-oil",
    "title": "Mustard Oil vs Sunflower Oil for Cooking",
    "summary": "Careful comparison page for buyers comparing mustard oil and sunflower oil without unsupported health claims.",
    "leftLabel": "Mustard oil",
    "rightLabel": "Sunflower oil",
    "criteria": [
      "Use case",
      "Pack and label clarity",
      "Storage and handling",
      "Commercial buyer fit",
      "Questions to ask before buying"
    ]
  },
  {
    "slug": "mustard-oil-vs-soybean-oil",
    "title": "Mustard Oil vs Soybean Oil for Indian Kitchens",
    "summary": "Careful comparison page for buyers comparing mustard oil and soybean oil without unsupported health claims.",
    "leftLabel": "Mustard oil",
    "rightLabel": "Soybean oil",
    "criteria": [
      "Use case",
      "Pack and label clarity",
      "Storage and handling",
      "Commercial buyer fit",
      "Questions to ask before buying"
    ]
  },
  {
    "slug": "mustard-oil-vs-palm-oil",
    "title": "Mustard Oil vs Palm Oil for Trade Buyers",
    "summary": "Careful comparison page for buyers comparing mustard oil and palm oil without unsupported health claims.",
    "leftLabel": "Mustard oil",
    "rightLabel": "Palm oil",
    "criteria": [
      "Use case",
      "Pack and label clarity",
      "Storage and handling",
      "Commercial buyer fit",
      "Questions to ask before buying"
    ]
  },
  {
    "slug": "yellow-vs-black-mustard-seed-oil",
    "title": "Yellow vs Black Mustard Seed Oil",
    "summary": "Careful comparison page for buyers comparing yellow mustard and black mustard without unsupported health claims.",
    "leftLabel": "Yellow mustard",
    "rightLabel": "Black mustard",
    "criteria": [
      "Use case",
      "Pack and label clarity",
      "Storage and handling",
      "Commercial buyer fit",
      "Questions to ask before buying"
    ]
  },
  {
    "slug": "1-litre-vs-5-litre-pack",
    "title": "1 Litre Bottle vs 5 Litre Jar",
    "summary": "Careful comparison page for buyers comparing 1 litre and 5 litre without unsupported health claims.",
    "leftLabel": "1 litre",
    "rightLabel": "5 litre",
    "criteria": [
      "Use case",
      "Pack and label clarity",
      "Storage and handling",
      "Commercial buyer fit",
      "Questions to ask before buying"
    ]
  },
  {
    "slug": "15kg-vs-15-litre-tin",
    "title": "15 kg Tin vs 15 Litre Tin",
    "summary": "Careful comparison page for buyers comparing 15 kg and 15 litre without unsupported health claims.",
    "leftLabel": "15 kg",
    "rightLabel": "15 litre",
    "criteria": [
      "Use case",
      "Pack and label clarity",
      "Storage and handling",
      "Commercial buyer fit",
      "Questions to ask before buying"
    ]
  },
  {
    "slug": "packed-oil-vs-loose-oil",
    "title": "Packed Oil vs Loose Oil",
    "summary": "Careful comparison page for buyers comparing packed oil and loose oil without unsupported health claims.",
    "leftLabel": "Packed oil",
    "rightLabel": "Loose oil",
    "criteria": [
      "Use case",
      "Pack and label clarity",
      "Storage and handling",
      "Commercial buyer fit",
      "Questions to ask before buying"
    ]
  }
];
