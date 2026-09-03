# Creativity Unleashed Hero Artwork

## Status

Implemented for review on `docs/216-creativity-hero`.

## Governing issue

- Issue: [#216](https://github.com/governance-foundation/vibegov.io/issues/216)

## Intent

Add the approved Create While You Sleep artwork to the Creativity Unleashed
article as both the visible hero and the article-specific social image.

## Requirements

### HERO-001 — Preserve the approved artwork

Store the generated image under `static/img/blog/` without visual alteration.

### HERO-002 — Display the artwork

Render the image at the top of the article with descriptive alternative text.

### HERO-003 — Social metadata

Use the same asset in the article front matter so shared links have a relevant
preview image.

### HERO-004 — Validate before release

The final source must pass the production build and confirm that the generated
article contains the image reference and Open Graph image metadata.

## Release scope

After the article change is merged into `develop`, promote the validated
`develop` release train to `main` as explicitly requested by the user.
