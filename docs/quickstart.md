---
sidebar_position: 3
---

# Quick Start

Use this to install VibeGov quickly with the hardened bootstrap contract.

## Copy-paste bootstrap prompt

```text
Bootstrap this repo with VibeGov.
Read and follow:
- https://vibegov.io/agent.txt
- https://vibegov.io/bootstrap.json

Initialization contract:
1) Create/normalize `.governance/rules/`, `.governance/project/`, `.governance/specs/`.
2) Install `GOV-01` through `GOV-08` in `.governance/rules/`.
3) Detect existing provider-native rules dirs; mirror only if present.
4) Create/normalize `PROJECT_INTENT.md`.
5) Create `SPEC-001` (feature spec, or bootstrap-setup spec when product intent is still vague).
6) Map backlog to spec sections.
7) Install workflow artifacts: `AGENTS.md`, PR template, branch-protection checklist, default issue-pickup flow.
8) Classify repo start state (branch, clean/dirty, untracked, uncommitted) and declare commit policy (`required|allowed|forbidden`).
9) For GitHub repos, preflight `git`, `gh`, auth, repo access, project read/write.
10) If preflight is configured, adopt/create/normalize one canonical board target and link repo.
11) Normalize board fields:
   - `Status`: Backlog, Ready, In progress, In review, Done, Blocked
   - `Priority`: P0, P1, P2
   - `Size`: XS, S, M, L, XL
12) Import/attach existing issues; if none exist, report intentionally empty board.
13) Write durable output artifacts into `.governance/project/bootstrap-runs/`:
   - `<timestamp>-status.md`
   - `<timestamp>-feedback.md`
   - optional `<timestamp>-blockers.md`
   - stable top-level files may exist only as latest-run summaries/pointers
14) Reconcile docs against final live git/GitHub state.

Then stop before product-code implementation.
```

## Canonical URLs

- https://vibegov.io/agent.txt
- https://vibegov.io/bootstrap.json

## Notes

- Scaffold-only output is incomplete for GitHub-hosted repos unless missing operational pieces are explicitly blocked and reported.
- If product intent is unclear, do not invent domain direction from repo name.
- Prefer bootstrap/update remediation that preserves valid artifacts and only repairs weak/missing/contradictory state.
