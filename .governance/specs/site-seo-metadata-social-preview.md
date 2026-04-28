# Site SEO Metadata and Social Preview Assets

## Intent
Improve VibeGov’s public search and link-preview quality by tightening metadata defaults, restoring a real crawl policy file, and shipping a safer social card asset format.

## Scope
In scope:
- stronger homepage HTML title behavior
- page-specific metadata for the docs intro entrypoint
- stronger blog index metadata
- a real `robots.txt`
- a PNG social preview card derived from the existing VibeGov banner
- switching site-wide social tags to the PNG card

Out of scope:
- full SEO/content strategy work
- schema.org/JSON-LD rollout
- broad copy rewrites across every docs/blog page
- visual redesign of the public site

## Acceptance Criteria
- `SEO-001` Homepage title is descriptive instead of the duplicate `VibeGov | VibeGov` pattern.
- `SEO-002` `/docs/intro` exposes a page-specific title and description instead of inheriting the weak generic title.
- `SEO-003` `/blog` exposes a stronger title/description than the plain `Blog` metadata.
- `SEO-004` `robots.txt` exists in the built site and points crawlers at the sitemap.
- `SEO-005` Open Graph and Twitter preview tags point at a PNG social card asset instead of the current SVG.
- `SEO-006` `npm run build` succeeds after the changes.

## Tests and Evidence
- `npm run build`
- inspect built output or generated HTML metadata for homepage, docs intro, and blog index
- verify `build/robots.txt` and the PNG social card asset exist

## Documentation Impact
- no new public docs page required
- site configuration and metadata files should reflect the new SEO defaults

## Verification
- build the site locally
- inspect generated HTML metadata in the build output for homepage, docs intro, and blog index
- confirm the PNG card and robots file are emitted into the built site

## Change Notes
- Prefer a PNG social card for compatibility while preserving the existing SVG banner for on-site use.
- Tighten high-impact entrypoint metadata first instead of attempting a full site-wide metadata sweep in one slice.
