export const SITE = {
  name: "Ashok Gopal",
  legalName: "Ashok Gopal Mustard Oil",
  tagline: "Kacchi ghani mustard oil for Bengali kitchens and wholesale supply.",
  url: "https://www.ashokgopaloil.com",
  defaultImage: "/placeholders/social-preview.svg",
  logo: "/logo.svg",
  phone: "+91-8001003000",
  whatsapp: "918001003000",
  email: "sales@ashokgopaloil.com",
  address: {
    street: "9/3, Graham Road, Kamarhati",
    locality: "Kolkata",
    region: "West Bengal",
    postalCode: "700058",
    country: "IN",
    latitude: "22.6738",
    longitude: "88.3749"
  },
  social: {
    instagram: "https://www.instagram.com/ashokgopaloil/",
    facebook: "https://www.facebook.com/ashokgopaloil"
  },
  nav: [
    { label: "Products", href: "/products/" },
    { label: "Wholesale", href: "/wholesale/" },
    { label: "Manufacturing", href: "/manufacturing/" },
    { label: "Quality", href: "/quality/" },
    { label: "Guide", href: "/mustard-oil/" },
    { label: "Contact", href: "/contact/" }
  ],
  trustBadges: [
    "Kacchi ghani mustard oil",
    "West Bengal trade focus",
    "Bottle, jar, tin and carton pages",
    "Proof-library and FSSAI slots ready"
  ]
} as const;

export const whatsappLink = (message: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
