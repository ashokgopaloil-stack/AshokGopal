export const SITE = {
  name: "Ashok Gopal",
  legalName: "Ashok Gopal Mustard Oil",
  domain: "ashokgopaloil.com",
  url: "https://www.ashokgopaloil.com",
  defaultImage: "/placeholders/social-preview.svg",
  logo: "/logo.svg",
  phone: "+91-8001003000",
  whatsapp: "918001003000",
  email: "sales@ashokgopaloil.com",
  instagram: "https://www.instagram.com/ashokgopaloil/",
  facebook: "https://www.facebook.com/ashokgopaloil",
  address: {
    streetAddress: "9/3, Graham Road",
    locality: "Kamarhati",
    city: "Kolkata",
    region: "West Bengal",
    postalCode: "700058",
    country: "IN",
    latitude: "22.6738",
    longitude: "88.3749"
  },
  serviceArea: [
    "Kolkata",
    "North 24 Parganas",
    "Howrah",
    "Hooghly",
    "Nadia",
    "Burdwan",
    "West Bengal"
  ],
  languages: ["English", "Bengali", "Hindi"]
} as const;

export const NAV_ITEMS = [
  { label: "Products", href: "/products/" },
  { label: "Manufacturing", href: "/manufacturing/" },
  { label: "Quality", href: "/quality/" },
  { label: "Wholesale", href: "/wholesale/" },
  { label: "Heritage Cooking", href: "/heritage-cooking/" },
  { label: "Contact", href: "/contact/" }
] as const;
