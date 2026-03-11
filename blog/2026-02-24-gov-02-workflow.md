---
slug: gov-02-workflow-release
title: "Execution Modes Keep Delivery Moving Without Faking Done"
authors: [VibeGov_team]
tags: [workflow, gov-02, evidence, blockers, backlog]
---

The biggest delivery mistake is not forgetting the workflow loop.
It is pretending every kind of work closes the same way.

VibeGov's updated [GOV-02](/docs/published/gov-02-workflow) makes execution mode explicit so teams stop mixing exploration notes, implementation proof, and release verification into one blurry definition of done.

## Mode clarity is a throughput tool

VibeGov uses three execution modes:

- `exploratory`: what did we learn from real behavior, and what backlog work did that create?
- `implementation`: what changed, and how do we know it works?
- `release/verification`: is the accumulated work ready, shipped, or still behaving correctly?

The delivery loop does not change.
The evidence standard does.

## Done requires mode-appropriate evidence

Exploratory done is not a passing build. It is a fully classified review scope with tracked artifacts for everything non-validated.

Implementation done is not a good intention. It is linked intent, changed artifacts, and recorded proof from checks, tests, or manual validation.

Release or verification done is not "we already tested this earlier." It is verified scope, build or release outputs, post-release observations, and tracked follow-up for any new drift.

If the evidence does not match the mode, the work is not done yet.

## Backlog hydration belongs inside the workflow

Discovery is not separate from delivery discipline.

- exploratory work hydrates backlog by design
- release or verification work must feed newly observed drift back into tracked follow-up
- implementation work must track adjacent gaps instead of silently absorbing them

That keeps throughput honest. Teams can move quickly without hiding uncovered work inside status updates.

## Blockers should redirect work, not freeze it

A blocker pauses the current item. It should not pause the whole loop unless it removes every viable next step.

Strong blocker handling means:

- confirm the blocker with bounded effort
- record evidence and confidence limits
- create or link a blocker artifact
- recommend the next ready item or route
- move on

This is how backlog continuity becomes real instead of aspirational.

## Practical takeaway

If you want autonomous delivery, do not just tell contributors to continue.
Tell them:

- which mode they are in
- what evidence closes that mode
- how blockers should be escalated
- what happens when the current item cannot advance

Read the supporting pages:

- [Execution Modes](/docs/execution-modes)
- [Blocker Escalation](/docs/blocker-escalation)
- [Published GOV-02](/docs/published/gov-02-workflow)
