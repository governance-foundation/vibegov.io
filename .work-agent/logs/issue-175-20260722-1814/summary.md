# Issue 175 Developer Run Summary

Run: 2026-07-22 18:14 Australia/Sydney / 2026-07-22 08:14 UTC

Issue: #175 Clarify provider-specific guidance placement in the content model

Project status: In Progress

Branch: issue-175-runtime-profile-placement

## Queue and Resume Check

- Local repo started clean on `develop` tracking `origin/develop`.
- Open PRs #189-#205 were checked before queue selection. Their latest sampled state was developer-final handoff waiting on validator/human review, with merge-clean PRs and no newer review/comment activity requiring developer action.
- The configured Windows PowerShell queue command failed before returning a candidate with: `A parameter cannot be found that matches parameter name 'Depth'`.
- The same queue script run under PowerShell 7 preserved Project #3 priority ordering and returned issue #175 as top eligible item: open, Todo, P0.
- Project #3 Status was moved from `Todo` to `In Progress` before code work.

## Changes

- Added `docs/runtime-and-harness-profiles.md` as the runtime/profile adapter index.
- Moved runtime/provider/harness docs out of the general Operational Guides sidebar group into a dedicated Runtime and Harness Profiles group.
- Tightened Codex, Claude, harness checklist, execution sharpness, and minimal snippet docs to state that they are adapters/examples, not provider requirements or replacements for canonical VibeGov rules.
- Added focused Cypress smoke coverage for the new runtime-profile route and provider-neutral profile guidance.

## Validation

- `git diff --check`: passed.
- `npm run typecheck`: passed.
- `npm run build`: passed, including `validate:project-bootstrap`.
- `CYPRESS_baseUrl=http://127.0.0.1:3005 npm run test:e2e`: final rerun passed, 1 spec / 1 test.

## Notes

- Initial Cypress smoke attempts failed because the new assertions first clicked an expanding sidebar category, then matched an overflowed sidebar link. The test was corrected to visit the runtime-profile route directly and scope profile-link text to `main`.
- Temporary Docusaurus serve ran on port 3005 and was stopped after validation; final listener check found no listener.
