# Spec: Death by 1000 Prompts Hero and SEO Image

## Intent

Add the approved `Death by 1000 prompts` visual to the VibeGov article as both the visible hero image and the article social/SEO image.

## Requirements

- `DB1KI-001` The provided image must be stored under site-managed assets in the repo.
- `DB1KI-002` The article must display the image as a visible hero image near the top of the post.
- `DB1KI-003` The article must use the same image for its social/SEO metadata.
- `DB1KI-004` The site build must still pass after the update.

## Acceptance Criteria

- AC-001: image asset exists in repo-managed static assets
- AC-002: blog frontmatter references the image for article social/SEO metadata
- AC-003: blog body displays the image as the visible hero image
- AC-004: `npm run build` passes

## Evidence

- file inspection
- `npm run build`

## Related Issue

- #147 Add hero and SEO image for death by 1000 prompts article
