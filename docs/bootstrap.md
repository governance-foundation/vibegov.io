---
sidebar_position: 2
---

# Bootstrap

Copy this as message 1 in any coding agent.

```text
Bootstrap this repo with VibeGov.
Read and follow:
- https://vibegov.io/agent.txt
- https://vibegov.io/bootstrap.json

Before writing any product code:
1. Create `.governance/rules/`, `.governance/project/`, and `.governance/specs/`.
2. Install the active VibeGov rule set (`GOV-01` through `GOV-08`) into `.governance/rules/`.
3. Detect existing provider-native rules directories and mirror `.governance/rules/*.mdc` only when they already exist.
4. Create or normalize `.governance/project/PROJECT_INTENT.md`.
5. Create `SPEC-001` as either:
   - `.governance/specs/SPEC-001-<feature>.md`, or
   - a bootstrap/governance-setup spec when product intent is still too vague.
6. Create or normalize a backlog mapped to the spec sections.
7. Install strict Git workflow artifacts before implementation:
   - `AGENTS.md`
   - `.github/pull_request_template.md`
   - `.github/branch-protection-checklist.md`
   - documented default issue-pickup flow
8. Classify starting repo state before edits:
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
12. If GitHub automation is available, create/adopt/normalize one canonical board target:
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

Then stop before product-code implementation.
```

## Pass Gate #1

Continue only if all are true:

- `.governance/rules/` exists with `GOV-01` through `GOV-08`
- `.governance/project/PROJECT_INTENT.md` exists
- `.governance/specs/` has `SPEC-001` (feature spec or bootstrap-setup spec for vague repos)
- backlog maps to spec scope
- `AGENTS.md` exists and points to canonical governance sources
- strict Git workflow artifacts exist
- starting repo state and commit-policy mode are reported
- for GitHub repos, preflight results are reported with explicit state (`configured`, `blocked-with-tracked-issue`, `not-applicable`)
- for GitHub repos with automation, canonical board target is adopted/created/normalized and repo-link status is reported
- timestamped bootstrap status + feedback artifacts are written under `.governance/project/bootstrap-runs/`
- final docs are reconciled with final live git/GitHub state
- no product code was written

If any fail, rerun bootstrap/update with remediation mode.
