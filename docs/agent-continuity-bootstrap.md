---
sidebar_position: 10
---

# Agent Continuity Bootstrap

Agents should not rely on live chat context as their only continuity system.

If continuity matters only inside a shrinking context window, projects will repeatedly lose decisions, reopen settled questions, and relearn the same operating constraints.

VibeGov treats continuity as part of delivery.

## The continuity model

Bootstrap should install a continuity model with four layers:

1. **Session/thread continuity**
2. **Recent/daily continuity**
3. **Project continuity**
4. **Durable global/operator continuity** when that scope exists

The important part is not the exact filenames.
The important part is that the project defines:
- what each layer is for
- where it lives
- when the agent writes to it
- how information gets promoted upward

## Recommended structure

```text
memory/
  YYYY-MM-DD.md
  projects/
    <project>.md
  sessions/
    <stable-thread>.md
  README.md
```

Projects may adapt names/paths, but the continuity layers should still be explicit.

## Required checkpoint triggers

Agents should checkpoint when any of these occur:
- a new instruction, correction, preference, or rule appears
- a decision is made
- a blocker or open loop is discovered
- a task changes phase (start, blocked, resumed, finished)
- work becomes long, multi-step, or compaction-sensitive
- several meaningful turns have happened without a checkpoint

## Session diaries

Recurring chats and threads should keep concise session diaries.

These are **not** full transcript archives.
They should capture:
- important discussion points
- decisions
- open loops
- follow-ups
- thread-specific norms

The goal is future resumability, not chat duplication.

## Promotion flow

Use a deliberate promotion path:

- session/thread notes -> recent/daily continuity
- recent/daily continuity -> project continuity
- project continuity -> durable global/operator continuity only when truly cross-project

This keeps continuity structured instead of collapsing into one giant memory file.

## Bootstrap implications

Bootstrap should install both:
- continuity structure
- continuity operating rules

That means a new project should leave bootstrap with:
- continuity paths or equivalents in place
- repo-local agent instructions that mention checkpointing
- guidance on when to write memory
- guidance on what belongs in each continuity layer

Without this, teams often end up with governance text but no durable continuity behavior.

## Anti-patterns

Avoid:
- treating live chat context as durable state
- waiting until the very end to write memory
- using transcript archaeology as the main resumption mechanism
- hiding important decisions only in chat
- importing personal/local semantics into generic project governance

## Related guidance

- [Bootstrap](/docs/bootstrap)
- [Quickstart](/docs/quickstart)
- [Published GOV 09](/docs/published/gov-09-agent-continuity-bootstrap)
