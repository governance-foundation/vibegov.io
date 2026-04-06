---
sidebar_position: 9
---

# GOV 09 AGENT CONTINUITY BOOTSTRAP

- Source rule: [gov-09-agent-continuity-bootstrap.mdc](https://github.com/governance-foundation/vibegov.io/blob/main/.governance/rules/gov-09-agent-continuity-bootstrap.mdc)
- Download raw file: [gov-09-agent-continuity-bootstrap.mdc](https://raw.githubusercontent.com/governance-foundation/vibegov.io/main/.governance/rules/gov-09-agent-continuity-bootstrap.mdc)

This page embeds the canonical rule text and adds commentary after each section to explain why the section exists.

## Governance: Agent Continuity Bootstrap

Continuity is part of execution, not cleanup after execution.

Governed projects should bootstrap agents with durable continuity structure and explicit checkpoint behavior early, before long-running work depends on live chat context.

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Continuity Layers

- `GOV-09-CONT-001` Governed projects should define four continuity layers: session/thread continuity, recent/daily continuity, project continuity, and durable global/operator continuity when that scope exists.
- `GOV-09-CONT-002` The continuity model should define what belongs in each layer, where it lives, and how information is promoted between layers.
- `GOV-09-CONT-003` Projects should prefer concise factual continuity artifacts over transcript dumps or undocumented chat memory.

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Checkpoint Triggers

- `GOV-09-CONT-004` Agents must checkpoint important state during work, not only at the end.
- `GOV-09-CONT-005` Required checkpoint triggers should include new instructions or corrections, decisions made, blockers or open loops discovered, task phase changes, prolonged multi-step execution, and likely compaction or handoff risk.
- `GOV-09-CONT-006` When several meaningful turns occur without a checkpoint, the agent should write a compact continuity update before proceeding.

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Session Diaries and Promotion

- `GOV-09-CONT-007` Recurring chats, threads, or operating contexts should maintain concise session diaries that capture important discussion points, decisions, open loops, follow-ups, and thread-specific norms.
- `GOV-09-CONT-008` Session diaries should not be treated as raw transcript archives; they should preserve substance needed for future resumption.
- `GOV-09-CONT-009` Continuity information should flow upward deliberately: session or recent notes into project continuity when they become durable project context, and into global/operator continuity only when they are truly cross-project and safe for that scope.

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Bootstrap Expectations

- `GOV-09-CONT-010` Bootstrap should install both continuity structure and operating rules, not merely mention memory as a future concern.
- `GOV-09-CONT-011` Bootstrap/adoption guidance should create or normalize repo-local continuity scaffolding, recommended continuity paths, and agent operating instructions for checkpointing and promotion.
- `GOV-09-CONT-012` Bootstrap completion should not be claimed when continuity artifacts or continuity operating rules expected by the project contract are still missing.

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Anti-Patterns

Avoid these failure modes:
- treating live chat context as the only continuity system
- waiting until the end of a long run to write memory
- storing all continuity in one undifferentiated global file
- relying on transcript archaeology instead of structured continuity artifacts
- importing person-specific wording into generic bootstrap semantics when the rule is meant to be reusable

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.
