---
sidebar_position: 6
---

# Execution Modes

VibeGov works best when teams stop treating all work as the same kind of work.

A review pass, a fix, and a release check are not interchangeable. They need different outputs, different evidence, and different completion criteria.

## The three default modes

### 1) Exploratory mode
Use exploratory mode when the goal is discovery.

Typical use-cases:
- route/page review
- workflow audit
- end-user validation
- backlog hydration
- drift detection

Expected outputs:
- scenario classifications
- evidence notes
- focused issues
- spec links or `SPEC_GAP`
- planned traceability/test follow-up

What not to do:
- claim a fix was delivered
- blur discovery into implementation
- report findings without artifacts

### 2) Implementation mode
Use implementation mode when the goal is to change behavior.

Typical use-cases:
- feature delivery
- bug fix
- refactor with defined acceptance criteria
- issue-linked quality improvement

Expected outputs:
- issue-to-requirement binding
- scoped code/doc/system changes
- validation evidence
- updated traceability
- commit or artifact references

What not to do:
- skip verification because exploratory work already happened
- collapse multiple unrelated findings into one vague change
- claim done without proof

### 3) Release / verification mode
Use release / verification mode when the goal is integrated confidence.

Typical use-cases:
- pre-release sweep
- post-merge validation
- deployment check
- handoff readiness review

Expected outputs:
- version/build under review
- integrated validation evidence
- unresolved risks
- go/no-go or next-action recommendation

What not to do:
- assume ticket-level passing work guarantees system-level readiness
- hide blockers in private notes or chat

## Why explicit mode selection matters

Without explicit mode selection, teams produce confusing status:

- exploratory notes presented as implementation proof
- implementation updates without enough evidence
- release confidence claimed from isolated ticket checks

Mode selection keeps the workflow honest.

## Mode-appropriate evidence

### Exploratory evidence
- what was reviewed
- preconditions
- scenario outcomes
- expected vs actual notes
- artifact links created

### Implementation evidence
- requirement IDs
- commands/checks/tests run
- pass/fail results
- commit/artifact links
- residual risk notes

### Release / verification evidence
- build/version reviewed
- integrated scope covered
- known blockers or risks
- decision or recommendation

## Fast rule of thumb

Ask one question before you start:

> Am I trying to discover reality, change reality, or confirm integrated reality?

That answer should determine the mode.

## Related docs

- [Exploratory Review Mode](/docs/exploratory-review-mode)
- [Checkpoint Reporting](/docs/checkpoint-reporting)
- [Blocker Escalation](/docs/blocker-escalation)
- [GOV 02 Workflow](/docs/published/gov-02-workflow)
