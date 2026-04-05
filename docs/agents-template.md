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
```

## Notes

- `AGENTS.md` is the repo-local entrypoint for agents that do not automatically discover `.governance/`.
- It should point back to `.governance/` as canonical, not replace it.
