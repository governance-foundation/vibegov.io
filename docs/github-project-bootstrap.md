---
sidebar_position: 9
---

# GitHub Project Bootstrap

Use this when adopting VibeGov in a GitHub-hosted repository.

This is a bootstrap support page, not a separate contract.
Start with [Bootstrap](/docs/bootstrap) or [Quick Start](/docs/quickstart), then use this page when GitHub preflight, board normalization, repo linkage, or final GitHub-state reconciliation becomes relevant.

## Mandatory preflight before any board mutation

Check and classify each dependency as one of:
- `configured`
- `blocked-with-tracked-issue`
- `not-applicable`

Required checks:
- `git` availability
- `gh` availability
- GitHub auth (`gh auth status`)
- repo access
- project read access
- project write access

If any required capability is missing, report the exact missing capability, record it in `INIT-TODO.md` with the exact remediation command or next action, and stop board mutation.

## Canonical board decision flow

Bootstrap must choose exactly one canonical board target and follow this order:
1. **adopt** an existing suitable board if one clean match exists,
2. otherwise **create** a new dedicated board,
3. then **normalize** canonical fields/options in place.

If multiple matching boards exist:
- choose one canonical board explicitly
- prefer the board already linked to the repo when present
- otherwise prefer the cleanest dedicated board with the expected canonical fields
- do not leave multiple competing board targets unresolved

If retries produced duplicate empty boards:
- keep one canonical board
- clean up accidental duplicates
- report cleanup explicitly

## Canonical board shape

Required workflow field:
- `Status`: `Backlog`, `Ready`, `In progress`, `In review`, `Done`, `Blocked`

Required planning fields:
- `Project Priority`: `P0`, `P1`, `P2`, `P3`, `P4`, `P5`
- `Order`: number
- `Priority`: `Urgent`, `High`, `Medium`, `Low`
- `Size`: `XS`, `S`, `M`, `L`, `XL`

Backlog automation ordering rule:
- use `Project Priority` to keep backlog groups explicit (`P0` is highest, `P5` is lowest)
- use `Order` as the deterministic in-group sort value; lower numbers are picked first
- do not depend on the GitHub project view's visual ordering as the automation source of truth
- use `Priority` for human urgency/impact signalling, not as a replacement for `Project Priority` + `Order`

Normalization rule:
- update GitHub built-in `Status` in place when needed; do not assume create/delete replacement flows are available.

Repo linkage rule:
- repository must be linked to the canonical board before bootstrap is complete.

No-issues fallback:
- if repo has no issues, board can still be complete and should be reported as intentionally empty.

## Branch/bootstrap expectations

- `AGENTS.md` should be created early during bootstrap so future agents have a repo-local entrypoint into the canonical `.governance/` sources and current board state.
- `INIT-TODO.md` should be created/updated early during bootstrap so prerequisite failures and exact GitHub remediation steps are durable.
- Bootstrap should create `develop` locally when the strict Git workflow is being installed, unless explicitly blocked.
- Remote push/protection state for `develop` should be reported separately instead of being silently assumed.
- If live branch-protection verification is unavailable only because of a known hosted-feature/private-repo limitation, report that as degraded verification/warning with exact evidence and next action instead of treating the whole bootstrap run as a failed normalization.

## Current state vs historical evidence

Bootstrap reports should distinguish:
- **current state** — the final live git/GitHub state after the run finishes
- **historical evidence** — what was observed or repaired earlier in the run

Do not leave stale intermediate state described as if it were still current after auth refreshes, board mutations, or cleanup actions.

## Completion evidence

For GitHub-hosted bootstrap, report:
- canonical board URL
- board action path used (`adopt/create/normalize`)
- why that board was selected when multiple matches existed
- repo-link status
- field/status normalization result, including `Project Priority`, `Order`, and `Priority`
- backlog automation ordering result (`Project Priority` groups plus `Order` values)
- issue import/attach result (or intentionally empty)
- any blockers/missing capabilities
- any degraded-verification warnings caused by hosted-feature limits, with exact evidence and next action
- `develop` branch local/remote/protection status
- final live-state reconciliation result

## Related docs

- [Bootstrap](/docs/bootstrap)
- [Bootstrap Update](/docs/bootstrap-update)
- [Bootstrap Review](/docs/bootstrap-review)
- [Quick Start](/docs/quickstart)
- [INIT-TODO.md](/docs/init-todo)
