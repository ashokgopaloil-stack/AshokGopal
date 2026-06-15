# Ashok Gopal Astro Site

SEO-first Astro website for Ashok Gopal mustard oil: product catalog, wholesale acquisition, West Bengal district pages, buyer use cases, recipe content, manufacturing proof, quality proof, and comparison/education hubs.

## Hwo to Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Generated SEO surface

This pass generates roughly **241 crawlable URLs** from data files.

Main data files:

- `src/data/products.ts`
- `src/data/recipes.ts`
- `src/data/districts.ts`
- `src/data/contentPages.ts`
- `src/data/pages.ts`
- `src/data/site.ts`

## Before launch

- Replace placeholder photos in `public/placeholders/`.
- Confirm `src/data/site.ts` business details.
- Confirm all pack sizes, MRP, carton quantity, SKU, FSSAI, and barcode data in `src/data/products.ts`.
- Add tested recipe quantities in `src/data/recipes.ts`.
- Connect forms to a real lead backend.
- Verify schema in Google Rich Results Test.


## Full Mega Pass Additions

This version includes an expanded SEO and operating-system layer for Ashok Gopal mustard oil:

- 12 marketplace/channel-readiness pages under `/marketplaces/`
- 20 proof-library pages under `/proof/`
- 20 responsible safety/claim-control pages under `/safety/`
- 25 Bengali-local pages under `/bengali/`
- 16 internal noindexed sales-kit pages under `/sales-kit/`
- Download centre, catalogue, sample programme, thank-you page, launch readiness, assets-needed shot list, and 404 page
- Product schema now omits fake price offers when prices are still placeholders
- Contact and wholesale forms now include Netlify honeypot and thank-you redirect

Important: replace placeholder business data, photos, FSSAI/compliance details, MRP, carton data and rate-card facts before launch.
