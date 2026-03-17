---
slug: explicit-orchestration-bounded-work
title: "Explicit Orchestration Beats Hidden Agent Pyramids"
authors: [VibeGov_team]
tags: [governance, multi-agent, workflow, accountability]
---

A lot of multi-agent failure is not caused by weak models.
It is caused by weak structure.

One agent quietly spawns another.
That worker quietly turns into a coordinator.
Soon the team has a small invisible management hierarchy inside the runtime, while the human only sees a vague status line and a missing result.

VibeGov should be stricter than that.

## The governance principle

Governed execution should use **explicit orchestration** and **bounded work units**.

That means the parent orchestration context should:

1. select one tracked unit of work
2. announce that delegation clearly
3. hand the unit to one bounded worker or lane
4. receive a visible result bundle
5. only then continue to the next unit by default

This is not an argument against capable workers.
It is an argument against hidden coordination.

## Why hidden agent pyramids are bad governance

When a worker turns into a silent coordinator, teams lose the things governance is supposed to protect:

- **Visibility** — humans cannot tell what is actually running
- **Accountability** — ownership gets blurred across layers
- **Recovery** — failures become harder to isolate and restart
- **Evidence quality** — outputs arrive detached from the unit that produced them
- **Scope control** — sub-work expands without an explicit decision

A system can still look busy while becoming less governable.
That is the trap.

## Sequential bounded stages are usually the safer default

People sometimes overcorrect and say all work must be linear forever.
That is too absolute.

The better rule is:

**prefer sequential bounded stages when they improve observability, recoverability, or handoff clarity.**

If a workflow is easier to inspect, interrupt, retry, or hand off when split into clear stages, that is the right default.

## Parallelism is still allowed

VibeGov is not anti-parallel.
It is anti-opaque.

Parallel lanes are fine when each lane still has:

- an explicit owner
- bounded scope
- visible checkpoints
- clear evidence outputs
- recoverable failure handling

The issue is not "more than one worker."
The issue is "more than one hidden coordinator."

## What belongs in governance vs implementation docs

This principle belongs in governance because it defines the shape of accountable execution.

What does **not** belong in governance:

- exact runtime settings
- queue TTLs
- model defaults
- local file paths
- wrapper commands
- temporary transcript or recovery hacks
- patch-specific engineering notes

Those are implementation details, runbook material, or architecture notes.
Useful, yes. Governance, no.

## The practical test

If a human asks, "what is running right now, on which tracked unit, with what evidence expected?" the system should answer that directly.

If the honest answer is, "well, one worker spawned another coordinator which then delegated a few things internally," governance has already weakened.

That is why explicit orchestration matters.
Not because it is pretty, but because it keeps multi-agent delivery legible under pressure.

## Related docs

- [GOV 02 Workflow](/docs/published/gov-02-workflow)
- [Execution Modes](/docs/execution-modes)
- [Checkpoint Reporting](/docs/checkpoint-reporting)
- [Workflow Quality Rubric](/docs/workflow-quality-rubric)
