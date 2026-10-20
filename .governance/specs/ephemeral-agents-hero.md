# Stop Keeping Your AI Agents Alive: hero and social preview

Development mode. Governing issue: [#231](https://github.com/governance-foundation/vibegov.io/issues/231).

## Intent
Publish the owner-approved generated architectural artwork on the existing article using the established authored-page hero conventions. The supplied image depicts persistent coordination, bounded worker pods and a durable evidence repository. No duplicate generation, stock substitution or LinkedIn changes.

## Requirements
- EPHEMERAL-HERO-001 / PAGE-HERO-001..002: Display the supplied artwork once with descriptive alt text, actual dimensions, uncropped aspect ratio and 640/1280 WebP sources plus JPEG fallback.
- EPHEMERAL-HERO-002 / PAGE-HERO-003: Emit exactly one article-specific OG image and Twitter image pointing to the supplied JPEG.
- EPHEMERAL-HERO-003 / PAGE-HERO-004: Preserve article prose, Mermaid, all 104 existing mappings, existing artwork and global styling.
- EPHEMERAL-HERO-004 / PAGE-HERO-005: Validate build, typecheck, every emitted mapping, desktop/mobile loaded pixels and refresh; independently review the scoped diff before checked develop/main PR merges and verify live asset bytes and article.

## Delivery and evidence
Reconciled already released PR229/230 through checked PR232 into develop (f2d277922dd13e2d7c457fcdbf9bcd45e43887db). Branch `feature/231-ephemeral-agents-hero` originates from develop at fcababc85008952a59a38784bbdb575198c9556a. Supplied assets arrived at d93724a764690c27e98ac247aa64919290dfac2b; upload ownership returned to integration. GitHub connector writes are authorised; no repository rule requires a different GitHub login.

Received JPEG and large WebP at 1280x720, small WebP at 640x360. Typecheck passed. Independent read-only review found no defects and confirmed exact preservation of article prose/Mermaid and the original 104 manifest entries; reviewed JPEG matches supplied artwork. Pending: production build/browser checks, feature/promotion PRs and live verification. Issue and PR records provide workflow state because project-board mutations are unavailable. The repository's canonical specs are under `.governance/specs`; there is no `openspec/` tree to validate.
