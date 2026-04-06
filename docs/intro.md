---
sidebar_position: 1
---

# VibeGov

VibeGov is a practical governance layer for AI-assisted software delivery.

It helps teams ship fast **without losing control** of intent, quality, evidence, and traceability.

The model is simple:
- use **Development** to change reality with proof,
- use **Exploration** to discover reality and hydrate backlog,
- keep release verification inside **Development** as part of the delivery gate,
- keep `.governance/` as the canonical source of delivery guidance.

This site is published incrementally so guidance can evolve in the open with real team feedback.

## Why VibeGov exists

AI-assisted delivery makes it easy to generate code quickly.

The failure mode is not just bad code.
It is delivery drift:
- why something is being built gets blurred
- constraints get skipped
- "done" collapses to output instead of evidence
- partial review gets reported like full review
- blockers stall work or disappear into chat
- future change gets harder because intent and proof were not preserved

VibeGov exists to make delivery judgement more explicit and portable.

It captures SDLC wisdom as reusable guidance so humans and agents inherit stronger defaults without heavy process tooling.

## Why `.governance/` exists

`.governance/` isolates delivery guidance from product code so it is easy to copy, version, and evolve.

Folder roles:
- `.governance/rules/`: cross-project governance rules (`gov-*.mdc`)
- `.governance/project/`: project-level intent and constraints
- `.governance/specs/`: feature/change specs for scoped work

Canonical-source model:
- `.governance/` is the single source of truth for governance.
- Different agents/providers can use the same rules and link them via their native mechanism (for example `AGENTS.md` or an existing provider-native rules directory detected during onboarding).

## Install

- URL-first start: [Bootstrap](/docs/bootstrap)
- Full setup details: [Quick Start](/docs/quickstart)

## What changes when VibeGov is present

- agents ask better scoping questions
- Development and Exploration stop being blurred together, and release verification becomes an explicit part of Development rather than an implicit afterthought
- evidence quality improves because proof is mode-aware
- exploratory review becomes structured backlog hydration
- blockers become visible routing events instead of hidden stalls
- releases leave clearer artifacts
- long-term evolution gets safer

## Best next reads

- [The VibeGov SDLC](/docs/vibegov-sdlc)
- [Execution Modes](/docs/execution-modes)
- [Exploratory Review Mode](/docs/exploratory-review-mode)
- [Checkpoint Reporting](/docs/checkpoint-reporting)
- [Blocker Escalation](/docs/blocker-escalation)
- [Workflow Quality Rubric](/docs/workflow-quality-rubric)

## Give feedback

- Open suggestions: [Create an issue](https://github.com/governance-foundation/vibegov.io/issues/new/choose)
- View current discussions: [Issue log](https://github.com/governance-foundation/vibegov.io/issues)

## Published governance pages

- [GOV-01: Instructions](/docs/published/gov-01-instructions)
- [GOV-02: Workflow](/docs/published/gov-02-workflow)
- [GOV-03: Communication](/docs/published/gov-03-communication)
- [GOV-04: Quality](/docs/published/gov-04-quality)
- [GOV-05: Testing](/docs/published/gov-05-testing)
- [GOV-06: Issues](/docs/published/gov-06-issues)
- [GOV-07: Tasks](/docs/published/gov-07-tasks)
- [GOV-08: Exploratory Review](/docs/published/gov-08-exploratory-review)
- [GOV-09: Agent Continuity Bootstrap](/docs/published/gov-09-agent-continuity-bootstrap)
