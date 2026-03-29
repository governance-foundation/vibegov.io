# GitHub Project Board Bootstrap

## Intent
Make Git/GitHub backlog bootstrap a first-class part of VibeGov setup for GitHub-hosted repositories. Bootstrap should detect Git/GitHub prerequisites, establish or adopt a canonical project board, import existing open issues, and keep issue status synchronized with actual delivery state while work is in progress.

## Scope
In scope:
- define Git/GitHub prerequisite checks for bootstrap (`git`, `gh`, auth/scopes)
- define a canonical GitHub project board structure for VibeGov adoption
- require bootstrap to create, adopt, or normalize a project board when GitHub support is available
- require importing or attaching existing open issues to the board
- require issue-state movement as work progresses
- update bootstrap-facing docs and governance rules to make the behavior explicit

Out of scope:
- non-GitHub project board providers
- organization-wide admin automation outside the repo/project context
- replacing issue/spec governance with board-only governance

## Acceptance Criteria
- `GH-PROJ-001` Bootstrap explicitly checks for `git` and `gh` availability before attempting GitHub board automation.
- `GH-PROJ-002` Bootstrap explicitly checks `gh auth status` and requires the ability to read/write project and repo data before board automation proceeds.
- `GH-PROJ-003` For GitHub-hosted repos, bootstrap creates, adopts, or normalizes a project board with canonical fields/statuses.
- `GH-PROJ-004` Canonical status workflow is defined as `Backlog`, `Ready`, `In progress`, `In review`, `Done`, and `Blocked`.
- `GH-PROJ-005` Canonical planning fields include `Priority` (`P0`, `P1`, `P2`) and `Size` (`XS`, `S`, `M`, `L`, `XL`).
- `GH-PROJ-006` Existing open issues are imported or attached to the project board during setup when GitHub automation is available.
- `GH-PROJ-007` Governance explicitly requires issue state to move with actual delivery progress: `Backlog` -> `Ready` -> `In progress` -> `In review` -> `Done`, with `Blocked` used for proven blockers.
- `GH-PROJ-008` If prerequisites or auth are missing, bootstrap reports the exact missing capability and degrades gracefully instead of pretending the board is configured.
- `GH-PROJ-009` `npm run build` succeeds after the docs/rule/spec updates.

## Tests and Evidence
- inspect `.governance/specs/github-project-board-bootstrap.md`
- inspect updated workflow/bootstrap docs for prerequisite and board-state language
- run `npm run build`

## Canonical Board Shape
Required workflow field:
- `Status`
  - `Backlog`
  - `Ready`
  - `In progress`
  - `In review`
  - `Done`
  - `Blocked`

Required planning fields:
- `Priority`
  - `P0`
  - `P1`
  - `P2`
- `Size`
  - `XS`
  - `S`
  - `M`
  - `L`
  - `XL`

Useful inherited/built-in fields may also be present, including title, assignees, labels, linked pull requests, reviewers, milestones, parent issue, sub-issue progress, start date, target date, and estimate.

## Operational Behavior
When GitHub automation is available, bootstrap should:
1. detect whether the repo is GitHub-hosted
2. verify `git` and `gh` availability
3. verify `gh auth status` and project-capable scopes
4. create, adopt, or normalize the project board
5. import or attach existing open issues
6. report the board URL, canonical statuses, and any fallback/limitations

During delivery, issue state should track real work:
- newly discovered or imported work -> `Backlog`
- clarified and spec-bound work -> `Ready`
- active implementation/review prep -> `In progress`
- PR open / review underway -> `In review`
- merged/verified complete work -> `Done`
- proven blocker with evidence -> `Blocked`

## Change Notes
- This should be treated as part of the governed delivery system, not optional admin metadata.
- Bootstrap should not claim board automation is active when prerequisites or auth are missing.
- Prefer `gh` CLI for implementation on GitHub-hosted repos because it keeps the setup scriptable and visible.
