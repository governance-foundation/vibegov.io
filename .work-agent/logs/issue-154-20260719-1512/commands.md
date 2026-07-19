# Commands

All commands ran from `C:\projects\governance-foundation\vibegov.io`.

| Command | Result |
| --- | --- |
| `git status --short --branch` | Passed; branch `issue-154-active-rule-set-alignment` tracking origin with no file changes. |
| `gh pr checks 185 --repo governance-foundation/vibegov.io` | Exit 1; no checks reported on the branch. |
| `gh project item-edit --id PVTI_lADOA_2mn84Bc1k8zgyJwBA --project-id PVT_kwDOA_2mn84Bc1k8 --field-id PVTSSF_lADOA_2mn84Bc1k8zhXbeDs --single-select-option-id 47fc9ee4 --format json` | Passed; project item returned for issue #154. |
| `gh issue comment 154 --repo governance-foundation/vibegov.io --body <resume note>` | Passed; created https://github.com/governance-foundation/vibegov.io/issues/154#issuecomment-5014522460. |
| `git diff --check` | Passed. |
| `node scripts/generate-published-rules.js` | Passed; published governance docs regenerated from canonical `.mdc` files. |
| `git diff --exit-code -- docs/published` | Passed; no generated docs drift. |
| `node .internal/bootstrap-validator/index.js --scenario bootstrap-gate` | Passed; score 100; report `.internal/bootstrap-validator/reports/2026-07-19T05-15-33-982Z-bootstrap-gate`. |
| `node .internal/bootstrap-validator/index.js --scenario empty-repo-bootstrap` | Passed; score 100; report `.internal/bootstrap-validator/reports/2026-07-19T05-15-33-934Z-empty-repo-bootstrap`. |
| `npm run typecheck` | Passed. |
| `npm run build` | Passed; Docusaurus generated static files in `build`. |

## Build note

`npm run build` printed the existing Docusaurus update notice (`2.4.3 -> 3.10.2`) before compiling successfully.
