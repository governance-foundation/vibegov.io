---
sidebar_position: 6
---

# Execution Modes

VibeGov works best when teams stop treating all work as the same kind of work.

A review pass and a delivery pass are not interchangeable. They need different outputs, different evidence, and different completion criteria.

## The two operating modes

### 1) Exploration mode
Use Exploration mode when the goal is discovery, review, judgment, or backlog hydration on non-delivery surfaces.

Typical use-cases:
- route/page review
- workflow audit
- end-user validation
- backlog hydration
- drift detection
- UI/spec/issue exploration
- exploratory report generation
- planner-style scoping of a review surface
- evaluator-style judgment of exploratory artifacts or coverage

Expected outputs:
- scenario classifications
- evidence notes
- focused issues
- spec links or `SPEC_GAP`
- planned traceability/test follow-up
- coverage/confidence notes

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

## Evaluation lives inside a mode

Evaluation is not a third peer mode either. It is a bounded judgment pattern used inside Exploration or Development when explicit criteria-based review is needed.

In practice, exploratory work will often use planner and evaluator roles heavily. That does not make evaluation a separate mode. It means Exploration can contain planning and judgment activity when the work is still non-delivery discovery.

Typical evaluation work includes:
- judging a bounded artifact against a rubric
- running a skeptical reviewer pass over a scoped result
- deciding whether a report, draft, or validator result satisfies an explicit contract

What evaluation does **not** mean:
- replacing Exploration when the goal is surface discovery
- replacing Development evidence when behavior changed
- creating a vague "reviewed" state with no criteria or verdict

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
- evaluation language used where no real criteria/verdict exists
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

- [Build Loop, Exploratory Loop, Human Feedback Loop, and Scoped Blocking](/docs/build-exploratory-human-feedback-loops)
- [Quick Decisions](/docs/quick-decisions)
- [Mode Selection and Evidence Closing](/docs/mode-selection-and-evidence-closing)
- [Evaluation Pattern](/docs/evaluation-pattern)
- [Exploratory Review Mode](/docs/exploratory-review-mode)
- [Checkpoint Reporting](/docs/checkpoint-reporting)
- [Blocker Escalation](/docs/blocker-escalation)
- [GOV 02 Workflow](/docs/published/gov-02-workflow)
