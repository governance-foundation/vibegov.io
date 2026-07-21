# Issue 157 developer run

Run started: 2026-07-22 02:08 Australia/Sydney
Issue: https://github.com/governance-foundation/vibegov.io/issues/157
Branch: issue-157-what-gets-installed

## Selection

- Resumable work check: PR #189 / issue #156 is open and clean with no reviews and no reported checks; latest durable state is waiting on validator/human review, so it was left parked and no new #156 commit was made.
- Local repo was switched back to clean/current `develop` at `c27c0839c0f86275b579941f3cad5805c51f1884`.
- Configured `powershell.exe` ready queue invocation failed because Windows PowerShell's `ConvertFrom-Json` does not support the script's `-Depth` parameter.
- PowerShell 7 `pwsh` ready queue invocation selected issue #157 from Governance Foundation Project #3 with Project Priority `P0`, Status `Todo`.

## Project Status

- Moved issue #157 project item from `Todo` to `In Progress`.

## Plan

- Identify the current bootstrap contract from canonical docs and prompt surfaces.
- Add a concise homepage section explaining the repo-local files and reports VibeGov installs or normalises.
- Keep the section near the bootstrap path choices and avoid contradicting bootstrap docs, `bootstrap.json`, or agent prompt surfaces.
- Run focused site validation and save evidence in this log directory.

## Work

- Added a `What VibeGov installs` homepage section before the quick-path prompt cards.
- Summarized the canonical bootstrap outputs as governance rules, project intent/specs/backlog, workflow entrypoints, continuity guidance, and bootstrap reporting surfaces.
- Included concrete repo-local paths for `.governance/rules/`, `.governance/project/PROJECT_INTENT.md`, `.governance/specs/SPEC-001-...`, `AGENTS.md`, `INIT-TODO.md`, `.github/pull_request_template.md`, `.github/branch-protection-checklist.md`, and current/historical bootstrap reports.
- Added responsive styling for the install list without changing unrelated homepage sections.

## Validation

- `git diff --check`: pass.
- `npm run typecheck`: pass.
- `npm run build`: pass, including `validate:project-bootstrap`.
- `CYPRESS_baseUrl=http://127.0.0.1:3005 npm run test:e2e`: pass, 1 spec / 1 test.
- Served homepage content probe: `What VibeGov installs`, canonical repo-local paths, and `Quick paths` all present.

## Local Cleanup

- Served build on `127.0.0.1:3005` for Cypress and content probing.
- Initial stop of the parent `npm.cmd` process left a node listener on 3005; stopped the listener process and confirmed no final `LISTEN` state on port 3005.

## Final

- Work commit: `b1bb1633559737a4c4deb3e9d195036e889a4d6c`.
- Final evidence commit: PR branch head after this log update.
- PR: https://github.com/governance-foundation/vibegov.io/pull/190
- PR merge state: `CLEAN`.
- `gh pr checks 190`: no checks reported on the branch.
- In review transition unavailable: VibeGov Project #3 Status options are `Todo`, `In Progress`, `Done`, and `Blocked`; no `In review` option exists, so the item remains `In Progress`.
- Branch is clean and pushed to `origin/issue-157-what-gets-installed`.
