---
sidebar_position: 2
---

# Bootstrap

This is the **canonical bootstrap contract** for VibeGov.

Use the same contract in one of three explicit modes:
- `init`
- `update`
- `review`

Mode differences are behavioral only:
- `init` creates missing bootstrap state
- `update` repairs/normalizes existing bootstrap state
- `review` audits against the same contract without claiming missing work was completed

## Canonical bootstrap prompt

```text
Run VibeGov bootstrap in mode: <init|update|review>.
Read and follow:
- https://vibegov.io/agent.txt
- https://vibegov.io/bootstrap.json
- https://vibegov.io/docs/bootstrap/

Use the same canonical bootstrap contract for all modes.
Do not fork or weaken the pass gate by mode.

Before writing any product code (or before claiming bootstrap review is complete):
1. Create/normalize `.governance/rules/`, `.governance/project/`, and `.governance/specs/` as needed for the selected mode.
2. Ensure the active VibeGov rule set (`GOV-01` through `GOV-08`) is installed in `.governance/rules/`.
3. Detect existing provider-native rules directories and mirror `.governance/rules/*.mdc` only when they already exist.
4. Create or normalize `.governance/project/PROJECT_INTENT.md`.
5. Create `SPEC-001` as either:
   - `.governance/specs/SPEC-001-<feature>.md`, or
   - a bootstrap/governance-setup spec when product intent is still too vague.
6. Create or normalize a backlog mapped to the spec sections.
7. Install or verify strict Git workflow artifacts before implementation:
   - `AGENTS.md` (create this early so future agents have a repo-local entrypoint)
   - `INIT-TODO.md` (create/update this early during bootstrap/adoption/remediation work)
   - `.github/pull_request_template.md`
   - `.github/branch-protection-checklist.md`
   - documented default issue-pickup flow
8. Classify starting repo state before edits or review conclusions:
   - current branch
   - clean/dirty working tree
   - untracked files
   - uncommitted changes
9. Run with explicit commit policy: `required`, `allowed`, or `forbidden`.
10. If repo is dirty, do exactly one: resolve first, stop blocked, or continue in explicit review mode.
11. If GitHub-hosted, run preflight before board mutation:
   - `git` available
   - `gh` available
   - GitHub auth
   - repo access
   - project read access
   - project write access
   - branch-protection/admin capability when relevant
   - if any required capability is missing, record it in `INIT-TODO.md` with the exact remediation command or next action before proceeding
   - if branch-protection verification is unavailable only because of a known hosted-feature/private-repo limitation, record it as degraded verification with exact evidence and next action rather than pretending the repo normalization failed
12. If GitHub automation is available, create/adopt/normalize one canonical board target:
   - if multiple matching boards exist, choose one canonical target explicitly and report why it was chosen
   - normalize `Status`: `Backlog`, `Ready`, `In progress`, `In review`, `Done`, `Blocked`
   - normalize `Priority`: `P0`, `P1`, `P2`
   - normalize `Size`: `XS`, `S`, `M`, `L`, `XL`
   - link the repo
   - import/attach existing issues
   - if no issues exist, report board as intentionally empty
   - clean accidental duplicate empty boards and report cleanup
13. If GitHub automation is unavailable, report exact missing capability and leave a tracked blocker artifact.
14. Write durable local output artifacts into `.governance/project/bootstrap-runs/`:
   - `<timestamp>-status.md`
   - `<timestamp>-feedback.md`
   - optional `<timestamp>-blockers.md`
   - stable top-level files may exist only as latest-run summaries/pointers
15. Reconcile generated docs against final live git/GitHub state before claiming completion.
16. Distinguish final current state from historical evidence gathered earlier in the run.

Mode-specific behavior:
- `init`: create the missing bootstrap state required by the contract
- `update`: preserve valid existing artifacts and repair stale/missing/contradictory ones, including missing operational bootstrap artifacts, until the same contract is satisfied; if that cannot be done, leave explicit status/blocker artifacts plus a settled end-state classification (`committed/pushed`, `pending-review`, or `blocked`)
- `review`: audit the repo against the same contract, write findings and blockers, and do not claim missing work was completed

Then stop before product-code implementation.
```

## Pass Gate #1

Continue only if all are true:

- `.governance/rules/` exists with `GOV-01` through `GOV-08`
- `.governance/project/PROJECT_INTENT.md` exists
- `.governance/specs/` has `SPEC-001` (feature spec or bootstrap-setup spec for vague repos)
- backlog maps to spec scope
- `AGENTS.md` exists and points to canonical governance sources
- `INIT-TODO.md` exists for bootstrap/adoption/remediation work and records any missing prerequisite with exact remediation when relevant
- strict Git workflow artifacts exist
- starting repo state and commit-policy mode are reported
- for GitHub repos, preflight results are reported with explicit state (`configured`, `blocked-with-tracked-issue`, `not-applicable`), and known hosted-feature verification limits are distinguished from core bootstrap failure
- for GitHub repos with automation, canonical board target is adopted/created/normalized, repo-link status is reported, and multiple-match selection is explained when relevant
- timestamped bootstrap status + feedback artifacts are written under `.governance/project/bootstrap-runs/`
- if update cannot complete all gaps, timestamped blocker/status artifacts make the incomplete state explicit with exact next actions
- final docs are reconciled with final live git/GitHub state
- no product code was written

If any fail:
- `init` and `update` are incomplete
- `review` must report the exact gaps and blockers without pretending the repo is bootstrapped
