export const SITE = {
  name: "Ashok Gopal",
  legalName: "Ashok Gopal Mustard Oil",
  tagline: "Kacchi ghani mustard oil for Bengali kitchens and wholesale supply.",
  url: "https://www.ashokgopaloil.com",
  defaultImage: "/placeholders/social-preview.png",
  logo: "/logo.svg",
  phone: "+91-3000",
  whatsapp: "0000000000",
  email: "sales@ashokgopaloil.com",
  address: {
    street: "AAAAAA BBBBBBB",
    locality: "Kolkata",
    region: "West Bengal",
    postalCode: "700000",
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
    { label: "Quality", href: "/quality/" },
    { label: "Buyers", href: "/buyers/" },
    { label: "Recipes", href: "/heritage-cooking/" },
    { label: "Contact", href: "/contact/" }
  ],
  trustBadges: [
    "Quality checked pack positioning",
    "Lowest possible current trade quote path",
    "Retail, restaurant and distributor funnels",
    "FSSAI, label and batch proof slots ready"
  ]
} as const;

export const whatsappLink = (message: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
