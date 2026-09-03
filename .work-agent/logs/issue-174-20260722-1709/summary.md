# Issue #174 Developer Run

Run timestamp: 2026-07-22 17:09 Australia/Sydney

Issue: https://github.com/governance-foundation/vibegov.io/issues/174
Branch: `issue-174-adoption-faq`

## Selection Evidence

- Local repo was clean/current on `develop` after `git fetch --prune origin`.
- Open `vibegov.io` PRs were checked before selecting new work; no failed checks or review comments were found, and durable PR comments indicated review/validator waiting states.
- Ready queue helper failed before returning a candidate:
  `A parameter cannot be found that matches parameter name 'Depth'.`
- Live Governance Foundation Project #3 data was used as fallback. `Project Priority` exists with P0/P1/P2. The next open `Todo` P0 VibeGov issue in board order was #174.
- Project Status transition succeeded: issue #174 item moved to `In Progress`.

## Changes

- Added five adoption-oriented FAQ docs:
  - `docs/faq/is-vibegov-a-tool-or-framework.md`
  - `docs/faq/how-is-vibegov-different-from-agent-rules.md`
  - `docs/faq/do-i-need-a-specific-ai-provider.md`
  - `docs/faq/can-i-use-vibegov-in-an-existing-repo.md`
  - `docs/faq/what-is-the-smallest-useful-adoption-step.md`
- Added the new FAQ pages to `sidebars.js`.
- Shifted existing bootstrap FAQ sidebar positions after the adoption questions.

## Validation

- `git diff --check`: passed.
- `npm run typecheck`: passed.
- `npm run build`: initial run failed on unquoted frontmatter with a colon; fixed and reran successfully.
- `npm run build`: passed after fix.
- `npx cypress run --spec cypress/e2e/site-smoke.cy.js --config baseUrl=http://localhost:3005`: passed against `npm run serve:3005`.

## Cleanup

- Temporary port 3005 Docusaurus server was stopped after Cypress. Final port check recorded in `port-3005-final.log`.

Next action: commit, push, open PR, and hand off to validator.
