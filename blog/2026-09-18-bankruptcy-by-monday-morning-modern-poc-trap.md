---
slug: bankruptcy-by-monday-morning-modern-poc-trap
title: "Bankruptcy by Monday Morning: Surviving the Modern POC Trap"
authors: [VibeGov_team]
tags: [governance, ai-agents, orchestration, technical-debt, software-architecture]
description: How ungoverned AI agents accelerate the classic prototype trap—and the circuit breakers that stop prompt churn becoming codebase collapse.
---

*How to stop autonomous execution from turning speed into structural debt.*

In [Creativity Unleashed: Create While You Sleep](/blog/creativity-unleashed-create-while-you-sleep), I described the opportunity: establish the intent, design the orchestration layer, and let governed agents continue building after you step away.

But there is a shadow side to that leverage.

You close your laptop on Friday imagining a finished feature suite. On Monday morning, you find hundreds of mutations, a swollen repository, locally passing tests—and an application that no longer boots.

The agents were active. The codebase did not progress.

## The first three prompts

The trap begins with euphoria. A loosely framed prompt produces an API, a database connection and a polished interface in minutes. The friction of boilerplate and syntax disappears, so it is easy to assume that the same trajectory will continue as the system grows.

It rarely does.

As the prototype becomes a multi-module system, every change begins touching more boundaries. A new form field disrupts authentication. Repairing authentication breaks persistence. Local tests remain green because the assertions have gradually shifted to match the implementation instead of protecting the original requirement.

The software is still running in places, but its structure is becoming harder to reason about and more expensive to change.

## The modern POC trap

Software teams have always known the proof-of-concept trap: a useful demonstration is mistaken for a production foundation and then stretched beyond the assumptions that made it quick to build.

AI did not create this failure. It compressed the timeline.

Agents remove much of the physical and cognitive friction involved in producing code. That is extraordinary leverage when intent, boundaries and verification are strong. Without those controls, the same leverage accelerates tight coupling, duplicated utilities, global-state abuse, swallowed errors and patches layered over misunderstood contracts.

What once accumulated over months can now arrive in a weekend.

> If a human team can bankrupt a codebase through years of short-term patches, an ungoverned agent network can reproduce the pattern before Monday morning.

## Prompt churn and the local minimum

A local minimum appears when the current structure is good enough to resist replacement but too compromised to support clean improvement. Each small patch treats the visible symptom while increasing the cost of the next change.

The human response is often prompt churn:

1. Paste the latest error into the agent.
2. Apply the proposed fix.
3. Receive a different error.
4. Paste that error back into the same conversation.
5. Repeat until the context is full and the repository is worse.

The danger is not simply token consumption. Tokens are an input cost, not a delivery metric. The real warning is **mutation without evidence movement**: more code, more tests and more commits while no governed requirement becomes more convincingly verified.

## The signs of structural debt

Codebase insolvency is not one failed build. It is a sustained condition in which the system's obligations exceed the team's ability to change it safely.

Common signals include:

- defensive `try/catch` blocks that hide errors rather than resolve them;
- repetitive null checks masking an unresolved type or lifecycle problem;
- duplicate utilities created because repository-wide patterns were not inspected;
- locally generated tests passing while boot, integration or end-to-end gates fail;
- acceptance tests being weakened to agree with broken output;
- widening diffs that do not improve verified behaviour;
- repeated reversals between variations of the same failed patch;
- completion claims supported by polished summaries instead of direct evidence.

These signals matter more than lines of code, commit counts or the number of agents running in parallel. Activity is not progress.

## Why isolated green tests are not enough

An implementation agent can generate both the code and the test that approves it. That is useful for development, but it creates an obvious conflict: the agent can accidentally redefine success around its own output.

Requirement-bound acceptance evidence must therefore be protected. An agent should not weaken, delete, skip or narrow an acceptance, integration, end-to-end, regression or release-gate test merely to obtain a green result.

If the test is wrong, change the requirement deliberately, document why, and review the evidence change separately from the implementation claim.

The principle is simple:

> The implementation must satisfy the governed evidence. The evidence must not quietly move to accommodate the implementation.

## Install a circuit breaker

The defence is not to stop agents after an arbitrary number of messages. A turn may contain no mutation, while a single mutation may cross a major architectural boundary.

VibeGov instead treats three **equivalent failed mutation attempts** as a circuit-breaker threshold when they produce no material progress. Progress means at least one of the following:

- the hypothesis has been narrowed;
- new diagnostic evidence has been produced;
- a regressed gate has been restored;
- direct verification against the requirement has improved.

The circuit breaker should also trigger when protected tests are weakened, an unapproved architectural boundary is crossed, or the diff keeps growing without verified behaviour improving.

When it triggers, stop mutations in the affected work unit. Do not freeze every unrelated lane, and do not let the blocked worker continue digging.

## Preserve evidence, not noise

A failed loop should not be carried forward as an enormous conversational transcript. But deleting all history throws away the very evidence needed for recovery.

The correct response is to compress the useful state into a durable incident artifact:

- baseline branch, commit and verification state;
- governing requirements and permitted scope;
- stable failure signature;
- attempted approaches and their outcomes;
- regressions and architectural boundaries touched;
- last verified checkpoint;
- recovery options and explicit resume conditions.

Then start a fresh recovery work unit from the last verified checkpoint. The new agent receives the facts and failed hypotheses without inheriting the conversational noise.

## A longer prompt is not a recovery strategy

A blocked work unit should resume only when something material changes. Valid unblock conditions include:

- new diagnostic evidence;
- a corrected or clarified requirement;
- an approved architecture decision;
- a smaller reproduction;
- a resolved dependency;
- a narrowed scope;
- a genuinely different, verifiable implementation strategy.

Rephrasing the same instruction or moving it into a fresh chat does not change the solution space. It only restarts the bill.

## The Architect-Conductor boundary

The answer is not to require human approval for every internal abstraction. That would turn governance into paralysis.

Agents should remain autonomous inside an approved architecture. Human blueprint review becomes necessary when work would:

- create or replace a system-wide boundary;
- introduce shared global state;
- change persistence semantics;
- alter a public contract;
- move a security or trust boundary;
- create an irreversible migration;
- materially replace the approved architecture.

At that point, the Architect-Conductor is not being asked to type the solution. They are being asked to make the decision the implementation cannot safely make for itself.

## Velocity is not delivery

Typing speed was never delivery speed. Token throughput is not delivery speed either.

Real progress is a governed state transition: an agreed requirement moves from intended, to implemented, to directly verified, reviewed and safely integrated. The code is only one artifact in that transition.

This is why governance is not the brake on AI leverage. It is the control system that makes sustained acceleration possible.

Without baselines, protected evidence, circuit breakers and recovery checkpoints, autonomous execution can manufacture technical debt faster than a human can inspect it. With them, a blocked lane stops before it contaminates the wider system, useful evidence survives, and unrelated work continues.

Do not measure how loudly the engine is running.

Measure whether the system is moving.

Do not just prompt the machine.

Conduct it.
