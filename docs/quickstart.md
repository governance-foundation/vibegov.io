---
sidebar_position: 3
title: Quick Start
description: Install VibeGov quickly with the hardened bootstrap contract and the shortest practical path into governed AI-assisted delivery.
---

# Quick Start

Use this to install VibeGov quickly with the hardened bootstrap contract.

If you are not sure whether Quick Start is the right entry point yet, read [Start Here](/docs/start-here) first.

Bootstrap now uses one canonical contract with explicit modes:
- `init`
- `update`
- `review`

Use [Bootstrap](/docs/bootstrap) as the canonical contract surface.

## If you need the support docs

Quick Start is the short path, not the whole support surface.
When those topics come up, jump directly to:
- [GitHub Project Bootstrap](/docs/github-project-bootstrap) for GitHub preflight, board setup, repo linkage, and GitHub-state reconciliation
- [INIT-TODO.md](/docs/init-todo) for durable prerequisite/remediation capture
- [Bootstrap Update](/docs/bootstrap-update) if the repo already has bootstrap state and needs normalization
- [Bootstrap Review](/docs/bootstrap-review) if you need an audit against the same contract without claiming missing work was completed

## Copy-paste bootstrap prompt

```text
Run VibeGov bootstrap in mode: <init|update|review>.
Read and follow:
- https://vibegov.io/agent.txt
- https://vibegov.io/bootstrap.json
- https://vibegov.io/docs/bootstrap/

Use the same canonical bootstrap contract for all modes.
Do not fork or weaken the pass gate by mode.

Fast contract summary:
1) Create/normalize `.governance/rules/`, `.governance/project/`, and `.governance/specs/`.
2) Install the active VibeGov rule set (`GOV-01` through `GOV-09`) in `.governance/rules/`.
3) Detect existing provider-native rules dirs and mirror only when already present.
4) Create/normalize `PROJECT_INTENT.md`.
5) Create `SPEC-001` (feature spec, or bootstrap/governance-setup spec when product intent is still vague).
6) Map backlog to spec sections.
7) Install/verify early bootstrap artifacts before implementation:
   - `AGENTS.md`
   - `INIT-TODO.md`
   - PR template
   - branch-protection checklist
   - documented default issue-pickup flow
8) Install/verify continuity bootstrap expectations before implementation:
   - documented continuity layers
   - repo-local continuity paths or equivalent scaffolding
   - checkpoint trigger guidance
   - session-diary guidance for recurring contexts
   - promotion guidance between continuity layers
9) Classify repo start state (branch, clean/dirty, untracked, uncommitted) and declare commit policy (`required|allowed|forbidden`).
10) For GitHub repos, run preflight before board mutation; if required capability is missing, record exact remediation in `INIT-TODO.md`.
11) If GitHub automation is available, adopt/create/normalize one canonical board target, normalize `Status`/`Project Priority`/`Order`/`Priority`/`Size`, document backlog pickup as `Project Priority` group then `Order` inside the group, link the repo, and report intentionally empty boards or duplicate-board cleanup explicitly when relevant.
12) Write durable bootstrap reporting artifacts under `.governance/project/bootstrap/` plus a historical run bundle under `.governance/project/bootstrap/history/<timestamp>/`.
13) Reconcile docs/artifacts against final live git/GitHub state.
14) Then stop before product-code implementation.

Use [Bootstrap](/docs/bootstrap) as the canonical full contract when any detail matters.
```

## Canonical URLs

- https://vibegov.io/agent.txt
- https://vibegov.io/bootstrap.json

## Notes

- Quick Start is a compressed path into the current bootstrap contract, not a separate weaker contract.
- Scaffold-only output is incomplete for GitHub-hosted repos unless missing operational pieces are explicitly blocked and reported.
- If product intent is unclear, do not invent domain direction from repo name.
- Prefer bootstrap/update remediation that preserves valid artifacts and only repairs weak/missing/contradictory state.
- If you hit GitHub board/preflight questions, jump to [GitHub Project Bootstrap](/docs/github-project-bootstrap).
- If you need durable prerequisite or remediation capture, jump to [INIT-TODO](/docs/init-todo).
- If any detail matters, defer to [Bootstrap](/docs/bootstrap) as the canonical full contract.

## Related docs

- [Bootstrap](/docs/bootstrap)
- [Bootstrap Update](/docs/bootstrap-update)
- [Bootstrap Review](/docs/bootstrap-review)
- [GitHub Project Bootstrap](/docs/github-project-bootstrap)
- [INIT-TODO](/docs/init-todo)
