# GitHub Project Board Bootstrap

## Intent
Make Git/GitHub backlog bootstrap a first-class part of VibeGov setup for GitHub-hosted repositories. Bootstrap should detect Git/GitHub prerequisites, establish or adopt a canonical project board, import existing open issues, keep issue status synchronized with actual delivery state while work is in progress, preserve deterministic backlog pickup order for automation, and expose a consistent default table view.

## Scope
In scope:
- define Git/GitHub prerequisite checks for bootstrap (`git`, `gh`, auth/scopes)
- define a canonical GitHub project board structure for VibeGov adoption
- require bootstrap to create, adopt, or normalize a project board when GitHub support is available
- require importing or attaching existing open issues to the board
- require script-safe backlog grouping and in-group ordering fields
- require a canonical default table view with deterministic visible-column ordering
- prefer copying a canonical GitHub Project template for new boards so fields and views are reproduced together
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
- `GH-PROJ-005` Canonical planning fields include `Project Priority` (`P0`, `P1`, `P2`, `P3`, `P4`), `Order` (number), `Priority` (`Urgent`, `High`, `Medium`, `Low`), and `Size` (`XS`, `S`, `M`, `L`, `XL`).
- `GH-PROJ-005A` Backlog pickup automation uses `Project Priority` for groups and `Order` for in-group ordering instead of relying on GitHub project visual order.
- `GH-PROJ-005B` The default table view shows `Title`, `Assignees`, `Status`, `Project Priority`, `Order`, `Priority`, and `Repository` in that order; other canonical fields may remain hidden.
- `GH-PROJ-005C` New-board creation prefers copying a configured canonical template because GitHub copies views and custom fields together. If no supported capability can configure an adopted board's view, bootstrap records the exact manual view change as `blocked-with-tracked-issue` instead of claiming configuration succeeded.
- `GH-PROJ-006` Existing open issues are imported or attached to the project board during setup when GitHub automation is available.
- `GH-PROJ-007` Governance explicitly requires issue state to move with actual delivery progress: `Backlog` -> `Ready` -> `In progress` -> `In review` -> `Done`, with `Blocked` used for proven blockers.
- `GH-PROJ-008` If prerequisites or auth are missing, bootstrap reports the exact missing capability and degrades gracefully instead of pretending the board is configured.
- `GH-PROJ-009` `npm run build` succeeds after the docs/rule/spec updates.

## Tests and Evidence
- inspect `.governance/specs/github-project-board-bootstrap.md`
- inspect updated workflow/bootstrap docs for prerequisite, board-state, backlog-ordering, and default-view language
- run `npm run validate:project-bootstrap`
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
- `Project Priority`
  - `P0`
  - `P1`
  - `P2`
  - `P3`
  - `P4`
- `Order`
  - number
- `Priority`
  - `Urgent`
  - `High`
  - `Medium`
  - `Low`
- `Size`
  - `XS`
  - `S`
  - `M`
  - `L`
  - `XL`

Useful inherited/built-in fields may also be present, including title, assignees, labels, linked pull requests, reviewers, milestones, parent issue, sub-issue progress, start date, target date, and estimate.

Required default table view columns, in order:
1. `Title`
2. `Assignees`
3. `Status`
4. `Project Priority`
5. `Order`
6. `Priority`
7. `Repository`

`Size` remains a canonical planning field but does not need to be visible in the default table view. Additional fields may exist and remain hidden without making the canonical view non-compliant.

For new projects, prefer copying a configured canonical template so the default table view and custom fields are created together. For adopted projects, use an available authenticated view-configuration capability. If the runtime can create fields but cannot configure view visibility/order, leave an exact tracked remediation step and do not report the default view as configured.

## Backlog Pickup Ordering
Backlog pickup automation must not rely on GitHub project visual order as the source of truth.

Automation should select unblocked backlog candidates by:
1. `Project Priority` group, with `P0` highest and `P4` lowest
2. `Order` ascending inside the selected `Project Priority` group

`Priority` is reserved for human urgency/impact signalling (`Urgent`, `High`, `Medium`, `Low`). It does not replace `Project Priority` + `Order` as the deterministic backlog pickup contract unless a repository-specific policy explicitly extends the selection logic.

## Operational Behavior
When GitHub automation is available, bootstrap should:
1. detect whether the repo is GitHub-hosted
2. verify `git` and `gh` availability
3. verify `gh auth status` and project-capable scopes
4. adopt the canonical project board or create it, preferably by copying a configured canonical template
5. normalize `Project Priority`, `Order`, `Priority`, `Size`, and `Status`
6. create or normalize the default table view and its visible column order
7. import or attach existing open issues
8. report the board URL, canonical statuses, ordering fields, default-view result, and any fallback/limitations

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
- Bootstrap should not claim the default view is configured when the available GitHub capability can create fields but cannot change view visibility/order.
- Prefer `gh` CLI for implementation on GitHub-hosted repos because it keeps the setup scriptable and visible.
