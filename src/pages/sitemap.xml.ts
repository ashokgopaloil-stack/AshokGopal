import type { APIRoute } from "astro";
import { SITE } from "../data/site";
import { products } from "../data/products";
import { recipes } from "../data/recipes";
import { districts } from "../data/districts";
import { b2bSegments, manufacturingPages, qualityPages } from "../data/pages";
import { mustardOilGuides, buyerUseCases, bulkSupplyPages, comparisonPages } from "../data/contentPages";
import { procurementPages } from "../data/procurementPages";
import { marketplacePages } from "../data/marketplacePages";
import { proofPages } from "../data/proofPages";
import { safetyPages } from "../data/safetyPages";
import { bengaliPages } from "../data/bengaliPages";

const staticPages = [
  "/", "/products/", "/wholesale/", "/manufacturing/", "/quality/", "/heritage-cooking/", "/about/", "/contact/", "/social/", "/where-to-buy/", "/faq/", "/retailers/", "/restaurants/", "/institutional-supply/", "/distributors/", "/privacy/", "/mustard-oil/", "/buyers/", "/bulk/", "/compare/", "/districts/", "/procurement/", "/marketplaces/", "/proof/", "/safety/", "/bengali/", "/downloads/", "/catalogue/", "/samples/"
];

const urls = [
  ...staticPages,
  ...products.map((product) => `/products/${product.slug}/`),
  ...recipes.map((recipe) => `/heritage-cooking/recipes/${recipe.slug}/`),
  ...districts.map((district) => `/wholesale/${district.slug}/`),
  ...districts.map((district) => `/districts/${district.slug}/`),
  ...b2bSegments.map((segment) => `/wholesale/${segment.slug}/`),
  ...manufacturingPages.map((page) => `/manufacturing/${page.slug}/`),
  ...qualityPages.map((page) => `/quality/${page.slug}/`),
  ...mustardOilGuides.map((page) => `/mustard-oil/${page.slug}/`),
  ...buyerUseCases.map((page) => `/buyers/${page.slug}/`),
  ...bulkSupplyPages.map((page) => `/bulk/${page.slug}/`),
  ...comparisonPages.map((page) => `/compare/${page.slug}/`),
  ...procurementPages.map((page) => `/procurement/${page.slug}/`),
  ...marketplacePages.map((page) => `/marketplaces/${page.slug}/`),
  ...proofPages.map((page) => `/proof/${page.slug}/`),
  ...safetyPages.map((page) => `/safety/${page.slug}/`),
  ...bengaliPages.map((page) => `/bengali/${page.slug}/`)
];

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((path) => `  <url><loc>${new URL(path, SITE.url).toString()}</loc></url>`)
    .join("\n")}\n</urlset>`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
