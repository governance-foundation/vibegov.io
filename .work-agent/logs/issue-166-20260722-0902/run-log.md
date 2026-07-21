# Issue #166 Developer Run Log

Run start: 2026-07-22 09:02 Australia/Sydney / 2026-07-21 23:02 UTC

Issue: #166 - Consolidate entrypoint docs and remove duplicate Start Here paths
Branch: issue-166-entrypoint-docs

## Startup

- Sent visible Telegram start message.
- Read `work-agents/docs/vibegov-developer-cron-bootstrap.md`.
- Read `work-agents/docs/work-proof-standard.md`.
- `git fetch origin --prune`: pass.
- `git status --short --branch`: `## develop...origin/develop` before branch creation.
- Open PRs #189-#196 inspected: all open/non-draft/CLEAN with no status checks reported and latest durable state waiting for validator/human review; no actionable failed/unstable PR found.

## Queue Selection

- Required queue command tried first:
  `powershell.exe -NoProfile -ExecutionPolicy Bypass -File C:\projects\governance-foundation\work-agents\scripts\get-vibegov-ready-queue.ps1 -TopIssue`
- Result: failed because Windows PowerShell rejected `ConvertFrom-Json -Depth` in the ready-queue script: `A parameter cannot be found that matches parameter name 'Depth'.`
- Fallback queue command:
  `pwsh -NoProfile -ExecutionPolicy Bypass -File C:\projects\governance-foundation\work-agents\scripts\get-vibegov-ready-queue.ps1 -TopIssue`
- Fallback result: selected issue #166 from Governance Foundation Project #3 with Status `Todo`, Project Priority `P0`, source `project`.
- Project status transition: moved issue #166 item to `In Progress` using Project #3 Status option `47fc9ee4`.

## Plan

- Rename `docs/intro.md` from the duplicate `Start Here` title to an overview-style title.
- Keep `docs/start-here.md` as the single first-stop page.
- Reorder the sidebar so the first path is Start Here, Overview, Quick Start, Bootstrap.
- Remove circular Start Here / Quick Start routing language.
- Keep Bootstrap framed as canonical contract detail.

## Implementation

- Renamed `docs/intro.md` to `Overview` and made it the second docs entry.
- Kept `docs/start-here.md` as the only `Start Here` page and first docs entry.
- Reordered `sidebars.js` to `start-here`, `intro`, `quickstart`, then `bootstrap`.
- Changed the homepage `Read Docs` CTA to `/docs/start-here`.
- Updated homepage feature/footer copy from `Introduction` to `Overview`.
- Adjusted Quick Start copy so it remains the action path without sending users into a circular entrypoint loop.
- Updated the Cypress smoke expectation for the new Read Docs route.

## Validation

- `git diff --check`: pass.
- `npm run typecheck`: pass.
- `npm run build`: pass, including `validate:project-bootstrap`.
- `CYPRESS_baseUrl=http://127.0.0.1:3005 npm run test:e2e`: pass, 1 spec / 1 test.
- Local static serve for Cypress used `npm run serve:3005`; final port 3005 listener check found no listening process after cleanup.
