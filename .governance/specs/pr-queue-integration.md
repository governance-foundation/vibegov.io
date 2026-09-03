# PR Queue Integration and Docs Entrypoint Consolidation

## Status

Implemented for review on `chore/213-pr-queue-integration`.

## Governing issue

- Issue: [#213](https://github.com/governance-foundation/vibegov.io/issues/213)
- Source PRs: #189–#209

## Intent

Resolve the stale pull-request queue without discarding valid work. The source
branches were all created from the same older `develop` commit and were
individually compatible with current `develop`, but several edited the same
homepage, sidebar, onboarding docs, and smoke-test surfaces. Merging them
independently would either block on conflicts or allow later work to erase
earlier approved changes.

## Requirements

### PRAUD-001 — Complete PR disposition

Every PR that was open when the audit started must receive an evidence-based
merge or close decision.

### PRAUD-002 — Preserve valid changes

Approved changes must be integrated in source-PR order, with overlapping edits
resolved semantically rather than by choosing one branch wholesale.

### PRAUD-003 — One Start Here entrypoint

`/docs/start-here` must be the only page titled **Start Here**.
`/docs/intro` must remain available as **Overview**, and navigation must present
Start Here before Overview, Quick Start, and the canonical Bootstrap contract.

### PRAUD-004 — Combined validation

The integrated result must pass:

- `git diff --check origin/develop...HEAD`
- `npm run typecheck`
- `npm run build`
- generated-route and rendered-title probes for the onboarding and newly added
  documentation routes

### PRAUD-005 — Traceability

The integration PR must reference issue #213 and source PRs #189–#209. Each
source PR must be closed only after its approved changes are present in the
merged integration, or with an explicit rejection reason.

## Integration decisions

| Source PR | Decision | Integration note |
| --- | --- | --- |
| #189 | Integrate | Keep the problem-led hero positioning. |
| #190 | Integrate | Keep the install/normalisation section and responsive styles. |
| #191 | Integrate | Keep the governed-delivery example and homepage section. |
| #192 | Integrate | Adopt the `vibegov.io` 1.1.0 package identity. |
| #193 | Integrate | Adopt section-specific generated-rule commentary. |
| #194 | Integrate | Use the repo-local governance framework category consistently while retaining #189's sharper hero message. |
| #195 | Integrate | Replace private topology examples with neutral public examples. |
| #196 | Integrate | Preserve the prior PR-cleanup evidence record. |
| #197 | Integrate | Make Start Here canonical and rename the intro route to Overview. |
| #198 | Integrate with evidence cleanup | Preserve outcome-led feature cards; normalise CRLF/trailing whitespace in the imported error log. |
| #199 | Integrate | Keep audience and poor-fit guidance after the outcome cards. |
| #200 | Integrate | Add the glossary and retain the Overview terminology from #197. |
| #201 | Integrate | Add operational TLDR blocks without weakening the canonical contract. |
| #202 | Integrate with evidence cleanup | Add role-selection guidance; normalise CRLF/trailing whitespace in imported Cypress output. |
| #203 | Integrate with evidence cleanup | Add job-based navigation; preserve the canonical Start Here/Overview hierarchy and normalise imported Cypress output. |
| #204 | Integrate with evidence cleanup | Add the content-status model; consolidate the runtime-profile sidebar category and normalise imported Cypress output. |
| #205 | Integrate | Add adoption FAQs and align their category/Overview terminology. |
| #206 | Integrate | Add the runtime and harness profile index without duplicating the sidebar category. |
| #207 | Integrate | Add copyable evidence examples and cross-links. |
| #208 | Integrate | Add the comparison page using the established framework/Overview terminology. |
| #209 | Integrate | Add the public content style guide and PR checklist. |

## Non-goals

- No promotion from `develop` to `main`.
- No publication of the current `develop` release train.
- No route removal: `/docs/intro` remains a useful conceptual overview.
- No visual redesign beyond the source PRs' approved content and layout changes.

## Residual risk

The source PRs were created independently, so the integration contains deliberate
semantic conflict resolutions. The production build and generated-route probes
are the final gate before merge; deployment remains a separate `develop` to
`main` promotion decision.
