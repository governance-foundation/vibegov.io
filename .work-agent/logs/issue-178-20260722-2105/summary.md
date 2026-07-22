# Issue 178 Developer Run

Run: 2026-07-22 21:05 Australia/Sydney / 2026-07-22 11:05 UTC

Issue: #178 Create content style guide for public docs and homepage copy

Project status: In Progress

Queue evidence:
- `powershell.exe ... get-vibegov-ready-queue.ps1 -TopIssue` failed because Windows PowerShell 5 does not support the script's `ConvertFrom-Json -Depth` usage.
- `pwsh ... get-vibegov-ready-queue.ps1 -TopIssue` selected issue #178 from Project #3 with `Project Priority: P0`, `Status: Todo`.
- Issue body says P2, but the configured project field was used for queue priority.

Branch: `issue-178-content-style-guide`

Changes:
- Added `docs/content-style-guide.md`.
- Linked the guide from `docs/contribute.md`.
- Added the guide to `sidebars.js`.
- Added public-content review prompts to `.github/pull_request_template.md`.
- Extended `cypress/e2e/site-smoke.cy.js` to cover `/docs/content-style-guide`.

Validation:
- `git diff --check`: passed.
- `npm run typecheck`: passed.
- `npm run build`: passed, including project bootstrap validation.
- `CYPRESS_baseUrl=http://127.0.0.1:3005 npm run test:e2e`: passed, 1 spec / 1 test.

Logs:
- `.work-agent/logs/issue-178-20260722-2105/git-diff-check.log`
- `.work-agent/logs/issue-178-20260722-2105/npm-typecheck.log`
- `.work-agent/logs/issue-178-20260722-2105/npm-build.log`
- `.work-agent/logs/issue-178-20260722-2105/cypress-3005.log`
- `.work-agent/logs/issue-178-20260722-2105/serve-3005.log`
- `.work-agent/logs/issue-178-20260722-2105/serve-3005.err.log`
- `.work-agent/logs/issue-178-20260722-2105/port-3005-final.log`

Cleanup:
- Temporary Docusaurus serve process on port 3005 was stopped.
- Final port log contains no `LISTENING` entry for port 3005.
