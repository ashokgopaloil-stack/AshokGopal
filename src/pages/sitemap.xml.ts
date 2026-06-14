import { products } from "../data/products";
import { SITE } from "../data/site";

const staticPages = [
  "/",
  "/products/",
  "/wholesale/",
  "/manufacturing/",
  "/quality/",
  "/heritage-cooking/",
  "/contact/",
  "/about/"
];

export function GET() {
  const productPages = products.map((product) => `/products/${product.slug}/`);
  const urls = [...staticPages, ...productPages];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((path) => {
    const loc = new URL(path, SITE.url).toString();
    return `  <url>
    <loc>${loc}</loc>
    <changefreq>${path === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${path === "/" ? "1.0" : path.startsWith("/products/") ? "0.8" : "0.7"}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
