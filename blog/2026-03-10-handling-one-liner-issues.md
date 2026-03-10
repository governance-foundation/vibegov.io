---
slug: handling-one-liner-issues
title: "Handling One-Liner Issues Without Losing Delivery Speed"
authors: [VibeGov_team]
tags: [issues, governance, backlog, specs, execution]
---

One-liner issues are common in fast-moving teams.

They are useful for capturing intent quickly, but dangerous if treated as execution-ready work.

A one-liner like:

> "Fix login weirdness"

is not enough to implement safely.

## The problem with one-liners

If one-liners go straight into implementation, teams usually get:

- mismatched outcomes (different people infer different intent)
- poor traceability (no spec binding)
- low-quality verification (unclear acceptance)
- rework and issue churn

In short: speed at intake, chaos at execution.

## The VibeGov approach

Keep one-liners for capture speed, but require **intake hardening** before execution.

### Rule

A one-liner issue must **not** move directly to implementation.

Before execution, convert it into implementation-ready intent by:

1. Binding to existing OpenSpec requirement IDs, **or**
2. Creating/expanding spec coverage when missing (`SPEC_GAP -> requirement`), and
3. Upgrading the issue body to implementation-grade quality.

Only then does it enter active implementation.

## Practical hardening checklist

For each one-liner, add:

- clear outcome (what success looks like)
- why it matters
- in scope / out of scope
- OpenSpec binding (ID/path or `SPEC_GAP`)
- acceptance criteria
- verification expectations

This preserves speed while restoring delivery clarity.

## Why this works

- intake stays fast (capture now, clarify before build)
- implementation gets deterministic requirements
- spec and backlog stay aligned
- evidence quality improves
- rework drops over time

## Recommended workflow pattern

Use two backlog states:

1. **Intake/Triage**
   - one-liners allowed
   - not execution-ready

2. **Ready for Execution**
   - hardened issue body
   - spec-bound
   - acceptance + verification defined

This simple split prevents governance bypass while keeping momentum.

## Bottom line

One-liner issues are good for capture, not for execution.

Treat them as raw intake, harden them through spec binding and issue-quality upgrades, then build with confidence.

