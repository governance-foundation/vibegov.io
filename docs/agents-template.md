---
sidebar_position: 11
---

# AGENTS.md Template

Use this as the repo-local `AGENTS.md` starting point during bootstrap.

```md
# VibeGov Activation

This repository uses VibeGov with `.governance/` as the governance source of truth.

## Required Read Order
1. `.governance/rules/gov-01-instructions.mdc`
2. `.governance/rules/gov-02-workflow.mdc`
3. `.governance/rules/gov-03-communication.mdc`
4. `.governance/rules/gov-04-quality.mdc`
5. `.governance/rules/gov-05-testing.mdc`
6. `.governance/rules/gov-06-issues.mdc`
7. `.governance/rules/gov-07-tasks.mdc`
8. `.governance/rules/gov-08-exploratory-review.mdc`
9. `.governance/rules/gov-09-agent-continuity-bootstrap.mdc`

## Repo Defaults
- Source of truth: `.governance/`
- Provider-native mirror targets: report detected targets here
- Bootstrap mode: `init` / `update` / `review`
- Canonical board: report board URL or blocker here

## Bootstrap Discipline
- Create or update `INIT-TODO.md` early during bootstrap or major remediation work.
- Record prerequisite checks and blockers there before continuing.
- Do not treat partial bootstrap as complete.
- Keep bootstrap run-history artifacts under `.governance/project/bootstrap-runs/`.

## Continuity Discipline
- Install and use a repo-local continuity model (for example session, daily, and project continuity layers).
- Checkpoint important instructions, decisions, blockers, and phase changes during work, not only at the end.
- Maintain concise session/thread diaries for recurring operating contexts.
- Promote durable continuity upward deliberately instead of relying on transcript archaeology.
```

## Notes

- `AGENTS.md` is the repo-local entrypoint for agents that do not automatically discover `.governance/`.
- It should point back to `.governance/` as canonical, not replace it.
