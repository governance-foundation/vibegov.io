---
sidebar_position: 3
title: VibeGov vs Agent Rules
description: Compare VibeGov with AGENTS.md, provider rules, prompt libraries, coding-agent frameworks, project management, and compliance tooling.
---

# VibeGov vs Agent Rules, Prompts, and Frameworks

VibeGov is a repo-local governance model for AI-assisted software delivery.

It can work alongside `AGENTS.md`, provider rules, prompts, workflow tools, and project management systems, but it is not the same thing as any one of them.

Use this page when you need to explain where VibeGov fits.

## The Short Version

| Adjacent thing | What it usually does | How VibeGov differs |
| --- | --- | --- |
| `AGENTS.md` | Gives coding agents a repo entrypoint. | Defines the durable delivery model that an entrypoint can point to. |
| Provider rules | Tune behavior for one agent or product. | Keeps governance portable across providers. |
| Prompt libraries | Capture reusable instructions for a moment of work. | Preserves delivery intent, evidence, blockers, and traceability across the lifecycle. |
| Agent frameworks | Provide runtime patterns or orchestration code. | Governs how work should be scoped, proven, reviewed, and closed, regardless of runtime. |
| Project management | Tracks work items, priorities, and status. | Defines what responsible AI-assisted delivery looks like inside the repo. |
| Compliance tooling | Enforces policy, audit, or regulatory controls. | Helps teams produce honest engineering evidence; it does not replace formal compliance systems. |

## VibeGov vs `AGENTS.md`

`AGENTS.md` is an entrypoint.

It is useful because many coding agents know to look there first. A good `AGENTS.md` can tell an agent how to build, test, format, review, and behave in a specific repo.

VibeGov is the governance layer that `AGENTS.md` can reference.

Instead of putting every delivery rule into one long entrypoint file, VibeGov keeps the durable model in `.governance/`:

- rules describe stable cross-project expectations
- project files describe local intent and constraints
- specs describe scoped work and acceptance criteria
- issue and PR evidence connects claims to proof

In practice, `AGENTS.md` can be the front door and VibeGov can be the house map.

## VibeGov vs Provider Rules

Provider rules are tool-specific.

Examples include a provider-native rules directory, a project instruction panel, a custom system prompt, or an IDE-specific agent configuration.

Those surfaces are useful, but they can drift when a team changes tools. VibeGov keeps the delivery model portable by storing the important governance state in the repo itself.

Provider rules can still adapt VibeGov to a specific tool:

- tell the tool where `.governance/` lives
- map the tool's workflow to Development, Exploration, Feedback Intake, and validation
- add provider-specific command or harness details

The portable guidance stays in VibeGov. The provider layer stays thin.

## VibeGov vs Prompt Libraries

Prompts help with a specific interaction.

They can be excellent for bootstrapping, review, feedback intake, or validation, but a prompt by itself usually does not preserve what happened after the prompt was used.

VibeGov focuses on the lifecycle around the prompt:

- what issue or spec the work serves
- what mode the agent is operating in
- what evidence is required before claiming done
- where blockers are recorded
- how review and validation results feed back into durable project state

A VibeGov bootstrap prompt is not just a clever instruction. It is a way to connect the current run to repo-local governance and future review.

## VibeGov vs Coding-Agent Frameworks

Agent frameworks provide implementation machinery.

They may handle routing, planning, tool use, memory, orchestration, evaluation, or multi-agent coordination. VibeGov does not try to replace that machinery.

VibeGov answers a different question:

> How should AI-assisted delivery behave so humans can trust the work, review it, and continue it later?

That means VibeGov can sit above different execution setups:

- a single coding agent working in a repo
- an agent plus a validator
- a human-driven build/review loop
- a more complex runtime that still needs evidence and closure rules

The runtime can change. The delivery contract should remain understandable.

## VibeGov vs Project Management

Project management tools track work.

They are good at showing priority, status, ownership, dependencies, and planning context.

VibeGov governs the quality of the work behind those status changes:

- what an issue must contain before implementation starts
- what an agent must preserve when it discovers a blocker
- what evidence belongs in the PR
- what validation must run for the touched surface
- what counts as closed, deferred, or still at risk

VibeGov should not duplicate the project board. It should make the board's status claims more trustworthy.

## VibeGov vs Compliance Or Governance Products

VibeGov uses governance language, but it is not a formal compliance product.

It does not automatically prove regulatory compliance, enforce enterprise policy, or replace security, legal, privacy, or audit controls.

It helps teams produce better engineering evidence:

- clearer intent
- traceable decisions
- less hidden drift
- more honest completion claims
- better handoff between humans and agents

That evidence can support a stronger operating model, but teams still need their own formal controls where formal controls are required.

## How They Fit Together

A practical setup can use all of these pieces:

1. `AGENTS.md` points agents to the right repo guidance.
2. Provider rules adapt the guidance to a specific tool.
3. Prompts start bounded modes of work.
4. Project management tracks priority and ownership.
5. VibeGov preserves the delivery contract, evidence expectations, and closure discipline.

The goal is not more process.

The goal is faster AI-assisted delivery that leaves enough proof for the next person to trust it.

## Related Docs

- [VibeGov](/docs/intro)
- [Start Here](/docs/start-here)
- [Quick Start](/docs/quickstart)
- [Execution Modes](/docs/execution-modes)
- [Checkpoint Reporting](/docs/checkpoint-reporting)
- [The VibeGov SDLC](/docs/vibegov-sdlc)
