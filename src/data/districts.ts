export type District = {
  slug: string;
  name: string;
  headline: string;
  summary: string;
  buyerTypes: string[];
  priorityMarkets: string[];
  leadAngle: string;
};

export const districts: District[] = [
  {
    slug: "kolkata",
    name: "Kolkata",
    headline: "Mustard oil distributor and retail supply enquiry in Kolkata",
    summary: "Kolkata is the primary trust market for retail visibility, HoReCa buyers, grocery counters, and high-frequency household demand.",
    buyerTypes: ["Kirana stores", "Modern retail", "Restaurants", "Caterers", "Wholesale counters"],
    priorityMarkets: ["Kamarhati", "Manicktala", "Shyambazar", "Burrabazar", "Dum Dum"],
    leadAngle: "Use this page for distributor calls, shop-counter proof, and local search around Kolkata mustard oil supply."
  },
  {
    slug: "north-24-parganas",
    name: "North 24 Parganas",
    headline: "Wholesale mustard oil supply for North 24 Parganas",
    summary: "A practical district page for retailers and local distributors serving dense residential and suburban consumption pockets.",
    buyerTypes: ["Retailers", "Sub-distributors", "Grocery wholesalers", "Caterers"],
    priorityMarkets: ["Barasat", "Barrackpore", "Dum Dum", "Madhyamgram", "Kamarhati"],
    leadAngle: "Position the brand as nearby, reachable, and suitable for fast retail replenishment."
  },
  {
    slug: "south-24-parganas",
    name: "South 24 Parganas",
    headline: "Mustard oil dealer enquiry for South 24 Parganas",
    summary: "A regional distribution page for retail counters, wholesalers, and local food-service demand.",
    buyerTypes: ["Retail stores", "Wholesale dealers", "Small restaurants", "Institutional kitchens"],
    priorityMarkets: ["Baruipur", "Sonarpur", "Diamond Harbour", "Jaynagar", "Canning"],
    leadAngle: "Use district-language content to build relevance beyond central Kolkata."
  },
  {
    slug: "howrah",
    name: "Howrah",
    headline: "Kacchi ghani mustard oil wholesale supply in Howrah",
    summary: "Howrah can support retailer replenishment, commercial kitchens, wholesale counters, and transport-friendly supply lines.",
    buyerTypes: ["Wholesale counters", "Retail chains", "Restaurants", "Caterers"],
    priorityMarkets: ["Howrah", "Bally", "Uluberia", "Shibpur", "Domjur"],
    leadAngle: "Emphasize quick trade enquiry and mixed SKU cartons."
  },
  {
    slug: "hooghly",
    name: "Hooghly",
    headline: "Mustard oil distributor opportunity in Hooghly",
    summary: "Hooghly is a strong page for district distributors, grocery wholesalers, and retailer network expansion.",
    buyerTypes: ["District distributors", "Retailers", "Wholesalers", "Caterers"],
    priorityMarkets: ["Chinsurah", "Serampore", "Chandannagar", "Uttarpara", "Arambagh"],
    leadAngle: "Make the page rank for distributor and dealer searches in Hooghly."
  },
  {
    slug: "nadia",
    name: "Nadia",
    headline: "Mustard oil wholesale and dealership enquiry in Nadia",
    summary: "A district growth page for retail and sub-distribution demand across Nadia's town clusters.",
    buyerTypes: ["Retailers", "Sub-distributors", "Wholesale shops", "Restaurants"],
    priorityMarkets: ["Krishnanagar", "Kalyani", "Nabadwip", "Ranaghat", "Chakdaha"],
    leadAngle: "Use for dealer discovery and local SEO expansion."
  },
  {
    slug: "murshidabad",
    name: "Murshidabad",
    headline: "Dealer enquiry for mustard oil supply in Murshidabad",
    summary: "A district landing page for wholesale, retail, and institutional cooking oil demand.",
    buyerTypes: ["Wholesalers", "Retailers", "Food-service buyers", "Institutional kitchens"],
    priorityMarkets: ["Berhampore", "Jangipur", "Lalbagh", "Kandi", "Domkal"],
    leadAngle: "Use this page to collect territory enquiries before assigning stockists."
  },
  {
    slug: "purba-bardhaman",
    name: "Purba Bardhaman",
    headline: "Mustard oil distributor and stockist enquiry in Purba Bardhaman",
    summary: "A trade-focused page for grocery wholesale, town retailers, and regional stockist conversations.",
    buyerTypes: ["Super stockists", "Distributors", "Retailers", "Caterers"],
    priorityMarkets: ["Bardhaman", "Katwa", "Kalna", "Memari", "Guskara"],
    leadAngle: "Focus on stock rotation, territory coverage, and repeat orders."
  },
  {
    slug: "birbhum",
    name: "Birbhum",
    headline: "Kacchi ghani mustard oil wholesale supply for Birbhum",
    summary: "A page for regional dealer discovery, distributor interest, and retail expansion.",
    buyerTypes: ["Local distributors", "Retailers", "Wholesale counters", "Food-service buyers"],
    priorityMarkets: ["Suri", "Bolpur", "Rampurhat", "Sainthia", "Nalhati"],
    leadAngle: "Use this as a low-maintenance SEO page with clear trade enquiry CTAs."
  },
  {
    slug: "siliguri-north-bengal",
    name: "Siliguri and North Bengal",
    headline: "Mustard oil distributor enquiry for Siliguri and North Bengal",
    summary: "A strategic supply page for North Bengal expansion, wholesale movement, and regional distributor conversations.",
    buyerTypes: ["Regional distributors", "Super stockists", "Wholesale dealers", "Retail chains"],
    priorityMarkets: ["Siliguri", "Jalpaiguri", "Cooch Behar", "Darjeeling", "Alipurduar"],
    leadAngle: "Position as an expansion page for larger territory partners."
  }
];

export function getDistrictBySlug(slug: string) {
  return districts.find((district) => district.slug === slug);
}
