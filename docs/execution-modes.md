---
sidebar_position: 6
---

# Execution Modes

VibeGov works best when teams stop treating all work as the same kind of work.

A review pass and a delivery pass are not interchangeable. They need different outputs, different evidence, and different completion criteria.

## The two operating modes

### 1) Exploration mode
Use Exploration mode when the goal is discovery.

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
- blur discovery into Development
- report findings without artifacts

### 2) Development mode
Use Development mode when the goal is to change behavior and carry that change through release readiness and shipping.

Typical use-cases:
- feature delivery
- bug fix
- refactor with defined acceptance criteria
- issue-linked quality improvement
- build/release gate maintenance
- pre-release and post-deploy verification for a candidate artifact

Expected outputs:
- issue-to-requirement binding
- scoped code/doc/system changes
- validation evidence
- updated traceability
- commit or artifact references
- release-readiness or shipping evidence when applicable

What not to do:
- skip verification because exploratory work already happened
- collapse multiple unrelated findings into one vague change
- claim done without proof

## Release verification lives inside Development

Release verification is not a third peer mode. It is part of Development's delivery path.

Typical release-verification work includes:
- confirming the build succeeded
- validating packaging/startup/bootstrap behavior
- checking deployment state
- confirming the right version/build is live
- running critical-route smoke checks in the target environment
- stopping release creation or promotion if required gates fail

## Why explicit mode selection matters

Without explicit mode selection, teams produce confusing status:

- exploratory notes presented as development proof
- development updates without enough evidence
- release confidence claimed from isolated ticket checks instead of encoded delivery gates

Mode selection keeps the workflow honest.

## Mode-appropriate evidence

### Exploratory evidence
- what was reviewed
- preconditions
- scenario outcomes
- expected vs actual notes
- artifact links created

### Development evidence
- requirement IDs
- commands/checks/tests run
- pass/fail results
- commit/artifact links
- residual risk notes
- release-readiness or shipping evidence when applicable

## Fast rule of thumb

Ask one question before you start:

> Am I trying to discover reality, or change reality and ship it safely?

That answer should determine the mode.

## Related docs

- [Exploratory Review Mode](/docs/exploratory-review-mode)
- [Checkpoint Reporting](/docs/checkpoint-reporting)
- [Blocker Escalation](/docs/blocker-escalation)
- [GOV 02 Workflow](/docs/published/gov-02-workflow)
