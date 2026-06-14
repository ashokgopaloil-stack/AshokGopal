# Ashok Gopal SEO Expansion Playbook

This pass expands the site into a data-driven Astro SEO system.

## Generated page families

- Products: 18 pages
- Mustard oil guides: 43 pages
- Buyer use cases: 24 pages
- Bulk supply pages: 12 pages
- Comparison pages: 10 pages
- Recipe pages: 28 pages
- District pages: 24 district pages, available under both `/districts/` and the existing wholesale route
- Manufacturing proof pages: 10 pages
- Quality/compliance pages: 10 pages
- Procurement readiness pages: 8 pages

Approximate generated URL count, including static pages: 241.

## Product-management rule

The homepage should not try to rank for every mustard-oil question. The guide, bulk, comparison, buyer, district, and recipe hubs should carry SEO breadth. The homepage should convert: products, wholesale, WhatsApp, and proof.

## Claim-control rule

Do not publish unverified medical or superiority claims. Product pages should focus on taste, aroma, pack, label, batch discipline, storage, cooking fit, and commercial supply. Health-heavy topics belong in careful educational pages with verified references.

## Next manual additions

1. Replace all placeholder SVGs with real product/factory/social photos.
2. Add real MRP, SKU, carton quantity, barcode, FSSAI, and batch details to `src/data/products.ts`.
3. Add tested ingredients and quantities to `src/data/recipes.ts`.
4. Add verified compliance documents to `/quality/` pages.
5. Connect forms to Netlify Forms, Formspree, Supabase, or your own API.
