# Issue #177 Developer Run

Started: 2026-07-22 20:07 Australia/Sydney / 2026-07-22 10:07 UTC

Issue: https://github.com/governance-foundation/vibegov.io/issues/177
Branch: `issue-177-comparison-page`

## Selection Evidence

- Local repo was clean/current on `develop` at `c27c0839c0f86275b579941f3cad5805c51f1884` after `git fetch origin develop`.
- Existing open PRs #189-#207 were checked first; no reported failing status checks were found.
- Latest PR #207 was open, clean, non-draft, had no checks reported, and its durable PR comment said next action was validator review.
- Ready queue helper failed before returning a candidate: `A parameter cannot be found that matches parameter name 'Depth'`.
- Live Project #3 fallback was used. Project Priority ordering was available via `Project Priority` field with `P0`, `P1`, and `P2`; #177 and #178 were `P0`, and #177 appeared first in project-list order.
- Issue #177 project item was moved from `Todo` to `In Progress` before implementation.

## Planned Scope

- Add a concise comparison page for VibeGov versus adjacent concepts.
- Link it from Start Here and FAQ/orientation surfaces.
- Add focused Cypress smoke coverage for the new page.
- Run required validation and open a PR.

## Changes

- Added `docs/vibegov-vs-agent-rules.md`.
- Added the new page to the top-level docs sidebar.
- Linked the comparison page from `docs/start-here.md`, `docs/intro.md`, and `docs/faq/what-is-vibegov.md`.
- Extended `cypress/e2e/site-smoke.cy.js` to visit `/docs/vibegov-vs-agent-rules`.

## Validation

- `git diff --check`: passed.
- `npm run typecheck`: passed.
- `npm run build`: passed, including `validate:project-bootstrap`.
- `CYPRESS_baseUrl=http://127.0.0.1:3005 npm run test:e2e`: passed, 1 spec / 1 test.

## Cleanup

- Temporary Docusaurus serve process on port 3005 was stopped.
- Final listener check: `Port 3005 listening after cleanup: False`.
