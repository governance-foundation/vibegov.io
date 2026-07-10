# Issue 154 validation summary

Run started: 2026-07-10 19:16 UTC / 2026-07-11 05:16 Australia/Sydney

Issue: #154 Align active governance rule set across bootstrap sources
Branch: issue-154-active-rule-set-alignment

## Project status

- GitHub Project #3 item moved from `Todo` to `In Progress`.
- Project #3 has Priority/Project Priority fields, but the selected item and returned top queue candidates had empty project priority values. Selection used the project-list order from the ready queue; the issue body marks this work P0.
- The configured Windows PowerShell queue command failed because `ConvertFrom-Json -Depth` is unsupported there. The same queue script was rerun with PowerShell 7 (`pwsh`) to read Project #3 queue fields.

## Scope

- Aligned `static/bootstrap.json` active rules with GOV-01 through GOV-13.
- Aligned `static/agent.txt`, bootstrap docs, quickstart docs, overview navigation, and AGENTS template with GOV-01 through GOV-13.
- Updated bootstrap validator expected-rule assertions and bootstrap prompt fixtures from the old GOV-01 through GOV-08 contract to GOV-01 through GOV-13.

## Validation

- `git diff --check`: passed.
- `node scripts/generate-published-rules.js`: passed; see `published-rules-generate.log`.
- `git diff --exit-code -- docs/published`: passed.
- `npm run bootstrap-validator -- --scenario bootstrap-gate`: failed due npm argument forwarding on this Windows setup; see `bootstrap-gate.log`.
- `npm run bootstrap-validator -- --scenario empty-repo-bootstrap`: failed due npm argument forwarding on this Windows setup; see `empty-repo-bootstrap.log`.
- `node .internal/bootstrap-validator/index.js --scenario bootstrap-gate`: passed, score 100; see `bootstrap-gate-node.log`.
- `node .internal/bootstrap-validator/index.js --scenario empty-repo-bootstrap`: passed, score 100; see `empty-repo-bootstrap-node.log`.
- `npm run typecheck`: passed; see `npm-typecheck.log`.
- `npm run build`: passed; see `npm-build.log`.
