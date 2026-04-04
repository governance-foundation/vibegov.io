---
sidebar_position: 9
---

# GitHub Project Bootstrap

Use this when adopting VibeGov in a GitHub-hosted repository.

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

If any required capability is missing, report exact missing capability and stop board mutation.

## Canonical board decision flow

Bootstrap must choose exactly one canonical board target:
1. **adopt** an existing suitable board, or
2. **create** a new dedicated board when none is suitable,
3. then **normalize** canonical fields/options in place.

Do not leave multiple competing board targets unresolved.

If retries produced duplicate empty boards:
- keep one canonical board
- clean up accidental duplicates
- report cleanup explicitly

## Canonical board shape

Required workflow field:
- `Status`: `Backlog`, `Ready`, `In progress`, `In review`, `Done`, `Blocked`

Required planning fields:
- `Priority`: `P0`, `P1`, `P2`
- `Size`: `XS`, `S`, `M`, `L`, `XL`

Normalization rule:
- update GitHub built-in `Status` in place when needed; do not assume create/delete replacement flows are available.

Repo linkage rule:
- repository must be linked to the canonical board before bootstrap is complete.

No-issues fallback:
- if repo has no issues, board can still be complete and should be reported as intentionally empty.

## Completion evidence

For GitHub-hosted bootstrap, report:
- canonical board URL
- board action path used (`adopt/create/normalize`)
- repo-link status
- field/status normalization result
- issue import/attach result (or intentionally empty)
- any blockers/missing capabilities
- final live-state reconciliation result
