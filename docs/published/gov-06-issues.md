---
sidebar_position: 6
---

# GOV 06 ISSUES

- Source rule: [gov-06-issues.mdc](https://github.com/governance-foundation/vibegov.io/blob/main/.governance/rules/gov-06-issues.mdc)
- Download raw file: [gov-06-issues.mdc](https://raw.githubusercontent.com/governance-foundation/vibegov.io/main/.governance/rules/gov-06-issues.mdc)

This page embeds the canonical rule text and adds commentary after each section to explain why the section exists.

## Governance: Issues

> Commentary: Provides traceability and scope control so changes remain auditable.

## Purpose

Issues are the durable record of intent, decisions, and outcomes.

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## When to Use an Issue

Create/update an issue for:
- feature work
- bug fixes
- behavior-changing refactors
- significant governance/process updates

Small typo-only docs fixes can be grouped where appropriate.

> Commentary: Provides traceability and scope control so changes remain auditable.

## Minimum Issue Quality

Each issue should include:
- problem statement
- desired outcome
- constraints/non-goals (if relevant)
- OpenSpec binding (requirement IDs and/or spec path, or explicit `SPEC_GAP`)
- acceptance criteria
- verification expectations

For exploratory findings, issues should also include:
- exact route/page/feature under review
- affected scenario class (for example: invalid input, keyboard, persistence, role variance)
- expected behavior
- actual behavior
- reproducible steps
- lightweight evidence notes
- planned spec/traceability/test follow-up

> Commentary: Provides traceability and scope control so changes remain auditable.

## One-liner issue handling (mandatory)

If an issue is a one-liner or otherwise under-specified, do not move directly to implementation.

Before execution, the agent must first:
1. bind the issue to an existing OpenSpec requirement, or
2. create/expand spec coverage for the behavior (`SPEC_GAP` -> explicit requirement), and
3. upgrade the issue body to implementation-grade quality, and
4. flag the issue as ready-for-review/confirmation.

Only after review/confirmation can the issue enter active implementation.

> Commentary: Marks non-optional behavior to reduce ambiguity during execution.

## Lifecycle Expectations

1. clarify and scope
2. implement with evidence
3. review outcomes and risks
4. close with traceable resolution

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Active Work Visibility (mandatory)

While an issue is actively being worked, the issue comments must show the work as it happens.

Leave a visible issue comment at every meaningful state change, not just at the end.
Minimum states to comment:
- start/resume
- meaningful plan change
- blocker/risk
- validation result
- final outcome, including commit/PR links when present

Do not spam micro-steps with no durable state change, for example:
- opening files
- reading code
- rerunning the same command without a new result

Preferred behavior:
- update the current working comment for small same-phase follow-ups when practical
- create a new comment when the issue changes phase

Goal: someone reading only the issue should be able to see what was planned, what happened, what evidence exists, and what remains.

> Commentary: Marks non-optional behavior to reduce ambiguity during execution.

## Closure Standard

Before closing, ensure:
- acceptance criteria addressed
- verification evidence exists
- OpenSpec/traceability references are updated or explicitly marked `SPEC_GAP` follow-up
- follow-up items are captured (if any)
- missing completeness is converted into explicit follow-up work rather than silently carried forward

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Anti-Patterns

- closing issues without evidence
- mixing unrelated concerns in one issue
- silent scope expansion without issue update
- treating issue text as optional or disposable

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.
