# Site Structured Data and SEO Tightening

## Intent
Improve VibeGov’s public machine-readable identity and page-level search metadata so major entry pages are more descriptive and the site exposes accurate minimal structured data.

## Scope
In scope:
- add minimal accurate schema.org / JSON-LD for the public site
- start with Organization and WebSite structured data only
- tighten metadata on the main public entry docs that still rely on weak/default descriptions
- validate generated HTML and JSON-LD in the built output

Out of scope:
- broad page-by-page copy rewrites across the whole docs tree
- speculative schema spam or unjustified page-specific schema types
- search-engine ranking claims beyond metadata quality improvements

## Acceptance Criteria
- `SEO2-001` The public site emits accurate Organization structured data for VibeGov.
- `SEO2-002` The public site emits accurate WebSite structured data for vibegov.io.
- `SEO2-003` Key public entry docs pages use explicit page-specific metadata instead of generic/default descriptions where that materially improves clarity.
- `SEO2-004` `npm run build` succeeds after the changes.
- `SEO2-005` Generated HTML inspection confirms the expected JSON-LD and updated title/description metadata.

## Tests and Evidence
- `npm run build`
- inspect built HTML for homepage and selected docs entry pages
- confirm JSON-LD script output in generated HTML matches the intended site identity

## Documentation Impact
- update the affected public docs pages with explicit frontmatter metadata
- add structured data emission in the theme layer

## Verification
- build locally
- inspect generated homepage/docs HTML for title, description, and JSON-LD output
- confirm no unrelated docs pages were changed just for metadata churn

## Change Notes
- Prefer a small truthful schema footprint over expansive schema markup.
- Tighten the highest-value entry pages first rather than mechanically adding metadata to every docs page.
