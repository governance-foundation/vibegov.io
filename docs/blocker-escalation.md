---
sidebar_position: 9
---

# Blocker Escalation

A blocker is not a command to freeze.

VibeGov treats blockers as governed routing events: make them visible, bound them properly, and keep useful work moving.

## The blocker pattern

When work is blocked:

1. **Confirm it**
   - Spend reasonable effort checking that the blockage is real.
   - Separate a true blocker from a misunderstanding or missing step.

2. **Capture evidence**
   - Record what was attempted.
   - Record the observed failure or missing prerequisite.
   - Record any confidence limits.

3. **Create a durable artifact**
   - Open or link a blocker issue.
   - Tie it to the affected requirement, route, feature, or release scope.

4. **Bound the impact**
   - State what is blocked and what is not.
   - State the recovery condition clearly.

5. **Redirect flow**
   - Continue with the next highest-priority unblocked item unless a true stop condition applies.

## Common blocker types

- missing credentials or permissions
- missing seed or fixture data
- broken runtime preconditions
- provider dependency failures
- CI / deployment pipeline failures
- contradictory requirements requiring human decision

## What a good blocker update includes

- exact blocked unit
- observed blocker
- attempted actions
- artifact link
- confidence limits
- redirected next step
- recovery condition

## What not to do

- keep retrying forever without creating an artifact
- hide blockers in chat-only updates
- block the entire backlog when only one route or issue is blocked
- claim completion because the blocker was inconvenient

## Why this matters

Teams lose huge amounts of time when blockers stay informal.

Formal blocker escalation gives you:
- visible queue health,
- better prioritization,
- cleaner handoffs,
- less idle time,
- more trustworthy status.

## Related docs

- [GOV 02 Workflow](/docs/published/gov-02-workflow)
- [Execution Modes](/docs/execution-modes)
- [Checkpoint Reporting](/docs/checkpoint-reporting)
