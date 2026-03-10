---
sidebar_position: 1
---

# GOV 01 INSTRUCTIONS

- Source rule: [gov-01-instructions.mdc](https://github.com/governance-foundation/vibegov.io/blob/main/.governance/rules/gov-01-instructions.mdc)
- Download raw file: [gov-01-instructions.mdc](https://raw.githubusercontent.com/governance-foundation/vibegov.io/main/.governance/rules/gov-01-instructions.mdc)

This page embeds the canonical rule text and adds commentary after each section to explain why the section exists.

## Governance: Instructions Entrypoint

This file is the root index for VibeGov governance behavior.

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Rule Loading Order

Apply these files in order:

1. `gov-02-workflow.mdc` (delivery loop + execution boundaries)
2. `gov-03-communication.mdc` (communication defaults)
3. `gov-04-quality.mdc` (quality gates)
4. `gov-05-testing.mdc` (testing proof standards)
5. `gov-06-issues.mdc` (issue lifecycle)
6. `gov-07-tasks.mdc` (task hygiene)
7. `gov-08-exploratory-review.mdc` (continuous exploratory discovery + backlog hydration)

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Source-of-Truth Layout

- Governance rules: `.governance/rules/gov-*.mdc`
- Project intent: `.governance/project/PROJECT_TEMPLATE.md`
- Feature/change intent: `.governance/specs/SPEC_TEMPLATE.md`

If `<provider-rules-path>/` exists in a target project, keep it aligned with `.governance/rules/`.

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Instruction Precedence

1. Human request in current session
2. Project/feature intent docs (`.governance/project`, `.governance/specs`)
3. VibeGov rule files (`.governance/rules`)
4. Tool/framework defaults

If guidance conflicts, choose the most specific project-scoped instruction and document the decision.

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Operating Principle

Intent should outlive implementation:

- clarify why before changing how
- keep decisions reviewable
- maintain traceability between intent, change, verification, and outcomes

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.
