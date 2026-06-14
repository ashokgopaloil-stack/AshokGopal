import type { APIRoute } from "astro";
import { SITE } from "../data/site";
import { products } from "../data/products";
import { recipes } from "../data/recipes";
import { districts } from "../data/districts";
import { b2bSegments, manufacturingPages, qualityPages } from "../data/pages";

const staticPages = [
  "/",
  "/products/",
  "/wholesale/",
  "/manufacturing/",
  "/quality/",
  "/heritage-cooking/",
  "/about/",
  "/contact/",
  "/social/",
  "/where-to-buy/",
  "/faq/",
  "/retailers/",
  "/restaurants/",
  "/institutional-supply/",
  "/distributors/",
  "/privacy/"
];

const urls = [
  ...staticPages,
  ...products.map((product) => `/products/${product.slug}/`),
  ...recipes.map((recipe) => `/heritage-cooking/recipes/${recipe.slug}/`),
  ...districts.map((district) => `/wholesale/${district.slug}/`),
  ...b2bSegments.map((segment) => `/wholesale/${segment.slug}/`),
  ...manufacturingPages.map((page) => `/manufacturing/${page.slug}/`),
  ...qualityPages.map((page) => `/quality/${page.slug}/`)
];

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((path) => `  <url><loc>${new URL(path, SITE.url).toString()}</loc></url>`)
    .join("\n")}\n</urlset>`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
