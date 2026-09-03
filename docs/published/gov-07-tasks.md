---
sidebar_position: 7
---

# GOV 07 TASKS

- Source rule: [gov-07-tasks.mdc](https://github.com/governance-foundation/vibegov.io/blob/main/.governance/rules/gov-07-tasks.mdc)
- Download raw file: [gov-07-tasks.mdc](https://raw.githubusercontent.com/governance-foundation/vibegov.io/main/.governance/rules/gov-07-tasks.mdc)

This page embeds the canonical rule text and adds rule-specific commentary to explain why each section exists.

## Governance: Tasks

> Commentary: Frames tasks as the execution-level breakdown under governed issues and specs.

## Task Principle

Tasks should make work reviewable, verifiable, and low-risk.

> Commentary: Keeps tasks small enough to complete, verify, and hand off cleanly.

## Good Task Characteristics

- single clear outcome
- explicit boundary/scope
- testable acceptance check
- realistic size for one focused execution pass

> Commentary: Defines what makes a task executable instead of merely descriptive.

## Decomposition Guidance

Break large work into tasks by behavior boundaries, not by files.

Prefer:
- "add contract validation for X"
over
- "edit 5 files"

> Commentary: Shows how to split work without losing ownership or acceptance criteria.

## Backlog Hygiene

- keep status current (`todo`, `in_progress`, `blocked`, `done`)
- prioritize unblocked high-impact work using the canonical board ordering fields when present
- use `Project Priority` for backlog groups and `Order` for deterministic in-group ordering
- use `Priority` (`Urgent`, `High`, `Medium`, `Low`) for human urgency/impact signalling
- record blockers with required decisions
- avoid duplicate or stale tasks

> Commentary: Keeps task lists ordered, current, and useful for the next worker.

## Execution Discipline

- complete one scoped task with evidence
- update task status immediately
- move to the next unblocked item by `Project Priority` group and `Order` when those fields are available
- stop only for blockers, empty backlog, or defined limits

> Commentary: Prevents task churn by tying action to scope, evidence, and status.

## Task Completion Evidence

A task marked done should reference:
- changed artifacts (paths)
- verification run(s)
- residual risks or follow-up tasks

> Commentary: Requires each task to leave proof that its intended slice actually finished.
