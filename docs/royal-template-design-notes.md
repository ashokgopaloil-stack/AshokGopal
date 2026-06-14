# Royal Template Design Notes

## Intent

The Ashok Gopal site should look like a serious edible-oil manufacturer, not a generic SEO farm. The visual direction is deliberately restrained: royal maroon, muted gold, ivory surfaces, serif headings, clean cards, and fewer top-nav links.

## Design rules

1. Use real photos as soon as available. The SVGs are placeholders only.
2. Keep the header sparse. Long-tail SEO pages should be discoverable through hubs and sitemap, not through a crowded main nav.
3. Do not use loud gradients, neon colors, or crowded badge rows.
4. Use product/factory/label proof images more than generic illustrations.
5. Keep health and safety copy conservative. Product trust should come from label, FSSAI, process, batch and distribution proof.
6. Homepage should sell credibility first, then product catalog, then wholesale conversion.

## Priority real images

- Hero product family: 1L bottle, 5L jar, 15kg tin/carton together.
- Label close-up: front label and FSSAI area.
- Batch-code panel.
- Factory exterior/signboard.
- Packing line or carton stacking.
- Retail shelf/shop counter.
- Distributor/godown stock.
- Bengali cooking/recipe photo.

## CSS entry point

The full visual system lives in `src/styles/global.css`.

Core variables:

- `--royal`: primary maroon
- `--gold`: premium accent
- `--page`: ivory background
- `--surface`: card surface
- `--serif`: display font stack
- `--sans`: body font stack
