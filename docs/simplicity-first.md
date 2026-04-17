---
sidebar_position: 8
---

# Simplicity-First Guidance

VibeGov is not anti-agent.

It is anti-unearned complexity.

The default progression should be:
- workflow before agent
- single owner before multi-agent
- explicit evaluation before extra orchestration
- simple loop before layered harness
- proven need before permanent complexity

## Why this matters

AI teams often add complexity too early.

They introduce:
- multi-agent splits before the task is even clear
- evaluator loops before the acceptance contract exists
- memory systems before the basic workflow is stable
- orchestration layers before a single-owner loop has been made reliable

That usually creates more movement, not more control.

## The progression VibeGov prefers

### 1. Start with the smallest coherent workflow
Use a simple sequence first when the work can be handled as a bounded direct flow.

Examples:
- observe -> plan -> implement -> verify -> document
- review -> classify -> create artifacts -> move on
- build -> verify -> package -> release-check

### 2. Add an agent only when the workflow benefits from it
Use an agent when there is meaningful reasoning, adaptation, or tool-driven work to perform, not just because an agent sounds more advanced.

### 3. Stay single-owner as long as possible
A single responsible worker is easier to supervise, easier to evaluate, and easier to close cleanly.

Single-owner work should remain the default until there is a demonstrated need for bounded delegation.

### 4. Add delegation only for a real boundary
Good reasons to delegate:
- a clearly separable work unit
- a distinct competency or tool boundary
- a bounded parallel slice that still has visible supervision

Bad reasons to delegate:
- hiding uncertainty
- avoiding direct ownership
- creating the appearance of sophistication
- compensating for weak issue/spec clarity

### 5. Add evaluator loops before adding orchestration sprawl
If quality is the problem, the next useful control is often a better verifier or evaluator contract, not a bigger worker graph.

### 6. Remove stale scaffolding when it stops earning its keep
Model and process improvements should simplify the system where possible.

A control that used to be necessary but no longer adds enough value becomes governance debt.

## Fast decision table

| Situation | Default |
| --- | --- |
| task is clear and bounded | simple workflow |
| one worker can do it | single owner |
| quality is weak but scope is still bounded | strengthen evaluation / verification |
| work crosses a real boundary | delegate carefully |
| complexity was added for past limitations that no longer apply | simplify |

## Anti-patterns

Avoid these:
- adding orchestration before proving the simple loop works
- turning delegation into a substitute for supervision
- treating multi-agent as the default sign of maturity
- adding memory, evaluation, and coordination layers all at once
- preserving complexity after the original reason for it has disappeared

## Related docs

- [Execution Modes](/docs/execution-modes)
- [Checkpoint Reporting](/docs/checkpoint-reporting)
- [Harness Profile: Minimal Claude Harness](/docs/harness-profile-minimal-claude)
- [Published GOV 02 Workflow](/docs/published/gov-02-workflow)
