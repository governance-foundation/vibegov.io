---
sidebar_position: 13
---

# GOV 13 REVIEW LOOPS AND COMPLETION DISCIPLINE

- Source rule: [gov-13-review-loops-completion-discipline.mdc](https://github.com/governance-foundation/vibegov.io/blob/main/.governance/rules/gov-13-review-loops-completion-discipline.mdc)
- Download raw file: [gov-13-review-loops-completion-discipline.mdc](https://raw.githubusercontent.com/governance-foundation/vibegov.io/main/.governance/rules/gov-13-review-loops-completion-discipline.mdc)

This page embeds the canonical rule text and adds commentary after each section to explain why the section exists.

## Governance: Review Loops and Completion Discipline

Implemented is not complete.

Governed agent work should close the loop through review, evidence, and feedback incorporation before claiming completion.

> Commentary: Separates first-pass output from trustworthy completion.

## Core Principle

- `GOV-13-REV-001` A first-pass implementation is an intermediate state, not a trustworthy completion signal.
- `GOV-13-REV-002` Completion requires explicit review of the produced change and its evidence, not only confidence in the act of producing it.
- `GOV-13-REV-003` Review loops should be designed to strengthen correctness, maintainability, and harness learning.

> Commentary: Defines review as a required control loop, not optional polish.

## Required Review Loop

- `GOV-13-REV-004` Before claiming a governed work unit complete, the agent should perform a targeted self-review against intent, scope, diff quality, evidence quality, and residual risk.
- `GOV-13-REV-005` The review should ask at minimum:
  - does the change satisfy the intended requirement or issue,
  - does the diff stay inside scope,
  - is the evidence direct enough,
  - are docs/spec/traceability updated where required,
  - what remains unverified, blocked, or deferred.
- `GOV-13-REV-006` If the review reveals material weakness, the agent should continue the loop rather than claiming done and hoping later review catches it.

> Commentary: Makes internal review explicit and prevents premature completion claims.

## Feedback Incorporation

- `GOV-13-REV-007` Human, automated, or agent review feedback should be incorporated as part of the same governed work loop until the active review scope is honestly resolved, re-scoped, or blocked.
- `GOV-13-REV-008` Responding to feedback should include updating affected evidence, docs, and traceability when those artifacts are impacted.
- `GOV-13-REV-009` Repeated feedback themes should be considered candidates for governance or harness promotion.

> Commentary: Turns review comments into an execution loop and a governance learning loop.

## Completion Semantics

- `GOV-13-REV-010` Completion claims should distinguish clearly between implemented, verified, reviewed, and released states rather than collapsing them into one vague "done".
- `GOV-13-REV-011` A governed work unit is not complete if review, evidence, or follow-up handling is still materially open.
- `GOV-13-REV-012` If confidence is partial, the claimed state should say so explicitly, for example blocked, partial, scoped-complete, or awaiting review.

> Commentary: Improves handoff clarity and reduces false certainty in progress reporting.

## Escalation and Stop Conditions

- `GOV-13-REV-013` When repeated review/fix loops stop producing clear progress, the agent should escalate the blocker, ambiguity, or missing capability instead of performing aimless churn.
- `GOV-13-REV-014` When judgment is required beyond the current governance and evidence, the agent should make the decision boundary visible instead of silently guessing.

> Commentary: Prevents endless churn loops and forces explicit escalation boundaries.

## Anti-Patterns

Avoid these failure modes:
- equating implementation with completion
- claiming done immediately after the first passing check
- leaving review comments or feedback themes unincorporated without explicit state change
- using a summary as a substitute for a real review loop
- moving on while material review debt remains hidden

> Commentary: Names the output-first behaviors this rule is meant to correct.
