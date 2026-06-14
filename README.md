# Ashok Gopal Website

Astro static site for Ashok Gopal edible oil manufacturing, product discovery, and wholesale/distributor acquisition.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## What is included

- Static SEO-first Astro pages.
- Product catalog hierarchy with dynamic product pages.
- Wholesale/distributor enquiry form structure.
- Manufacturing, quality, heritage cooking, and contact pages.
- Organization, LocalBusiness, Breadcrumb, and Product JSON-LD schema.
- Sitemap and robots routes.
- Placeholder SVG assets for product/factory/social photos.

## Replace before launch

Update these files once final data/photos are ready:

- `src/data/site.ts`: verified phone, address, WhatsApp number, domain, coordinates.
- `src/data/products.ts`: exact SKUs, pack sizes, MRP/price, product images.
- `public/placeholders/*`: replace with actual factory, product, packaging, cooking, and social media photos.
- `src/pages/quality/index.astro`: add actual FSSAI/certification/lab report links.
