---
slug: acp-setup-needs-parent-supervision
title: "ACP Setup Is Not Enough: The Parent Must Keep Supervising"
authors: [VibeGov_team]
tags: [governance, acp, multi-agent, supervision, workflow]
---

A multi-agent system can look healthy for exactly the wrong reason:

- the worker spawned successfully
- the session exists
- the runtime says it is still alive

That is not the same thing as governed execution.

Recent project learnings made this painfully clear.
A parent thread can successfully launch a worker thread and still fail the real governance test by going quiet afterwards.

## The hidden failure mode

People often focus on whether ACP setup works at all:

- can the worker spawn?
- can the runtime create a session?
- can you read results back later?

Those are important setup questions.
But they are not the whole question.

The deeper question is:

> does the parent keep visible ownership of the delegated unit until completion, blocker, or explicit handoff?

If the answer is no, the system has a supervision problem even if the worker runtime is technically healthy.

## Worker health is not governance health

A worker can be:
- alive
- executing
- emitting some output

And the governance can still be weak.

Why?
Because a silent parent creates ambiguity:
- who owns the unit right now?
- how long has it been running?
- has anyone checked progress recently?
- is the latest state meaningful progress or a stale transcript?
- when will the next supervisory action happen?

Without those answers, a parent thread is not orchestrating.
It is just launching.

## Delegation does not end accountability

This is the key lesson.

**Delegation does not transfer orchestration accountability.**

The parent may delegate execution.
It does not delegate responsibility for visible supervision.

In governed systems, the parent should still:
1. announce the delegated unit clearly
2. report worker identity when available
3. perform early follow-up checks
4. continue periodic supervision for long-running work
5. report completion, blocker, or recovery action explicitly

That is what turns delegation into governed execution instead of fire-and-forget behavior.

## Why cadence matters

A common failure pattern is vague follow-through:

- one start message
- maybe one worker id
- then silence
- then, much later, either a result or nothing

That pattern is operationally weak because it hides whether the parent is still on top of the unit.

Governance should not necessarily hardcode one universal timing rule for every environment.
But governance should require that a system define:

- an early-follow-up checkpoint window
- an ongoing supervision cadence for long-running work
- an escalation expectation when progress is stale or ambiguous

The runtime or project docs can set the exact numbers.
Governance should enforce the accountability shape.

## What this means for ACP setup docs

ACP setup docs should not stop at:
- how to spawn sessions
- how to configure backends
- how to attach tools
- how to read transcript output

They should also explain:
- how the parent tracks ownership after delegation
- how follow-up checks are scheduled or enforced
- how elapsed runtime is surfaced
- how stale or missing readback is escalated
- how the parent proves it is still supervising the worker thread

That is where setup guidance meets governance.

## The better practical test

Instead of asking only:

> did the worker spawn successfully?

Ask:

> if this worker runs for 20 minutes, can a human still see who owns it, how long it has been running, what its latest known state is, and what the next supervisory step will be?

If not, the setup may be functional but it is not yet governable.

## Related docs

- [GOV 02 Workflow](/docs/published/gov-02-workflow)
- [Checkpoint Reporting](/docs/checkpoint-reporting)
- [Workflow Quality Rubric](/docs/workflow-quality-rubric)
- [Explicit Orchestration Beats Hidden Agent Pyramids](/blog/explicit-orchestration-bounded-work)
