# Spec: Merged PR Branch Cleanup and Resting-Branch Closure

## Intent

Tighten VibeGov git-closure guidance so agents do not leave repos stranded on work branches and do not archive merged PR branches by default.

## Problem

Two costly hygiene failures need to be prevented:

1. agents treating a repo left on a work branch after a bounded slice as "basically done"
2. agents preserving merged PR branches by default, which creates branch clutter and expensive downstream cleanup debt even though the landed history already exists in the target branch

## Requirements

- `MPRC-001` A governed work turn is not complete while the local repo remains parked on a non-`main` / non-`develop` work branch after the bounded slice is finished.
- `MPRC-002` Closure must return the local repo to its canonical resting branch: `develop` for normal work, `main` for `main`-sourced hotfix or release work.
- `MPRC-003` Leaving the repo stranded on a stray work branch at turn end without explicit handoff state is failed closure, not cosmetic untidiness.
- `MPRC-004` After a PR is merged, the merged work branch should normally be deleted locally and remotely as part of the same closure routine.
- `MPRC-005` `archive/` branches are reserved for stale, unmerged, or intentionally preserved branches that still need history retention.
- `MPRC-006` Governance quick-reference and operator-facing docs must stop teaching archive-after-merge as the default closure path.

## Acceptance Criteria

- AC-001: `GOV-02` explicitly requires return to the correct resting branch after bounded work closure.
- AC-002: `GOV-10` explicitly treats stranded work branches as failed closure.
- AC-003: `GOV-10` explicitly states merged PR branches are normally deleted locally and remotely.
- AC-004: `GOV-10` explicitly reserves `archive/` for stale, unmerged, or intentionally preserved branches.
- AC-005: `AGENTS.md` mirrors the resting-branch closure rule in plain language.
- AC-006: Published/operator docs align with the delete-merged-branch default.
- AC-007: Site build passes after the documentation updates.

## Evidence

- Rule/doc diff inspection
- `npm run build`

## Related Issues

- #140 Governed work turns should fail closure when repos are left stranded on work branches
- #141 Merged PR branches should be deleted by default, not archived
