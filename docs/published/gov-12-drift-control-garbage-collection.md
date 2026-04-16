---
sidebar_position: 12
---

# GOV 12 DRIFT CONTROL AND GARBAGE COLLECTION

- Source rule: [gov-12-drift-control-garbage-collection.mdc](https://github.com/governance-foundation/vibegov.io/blob/main/.governance/rules/gov-12-drift-control-garbage-collection.mdc)
- Download raw file: [gov-12-drift-control-garbage-collection.mdc](https://raw.githubusercontent.com/governance-foundation/vibegov.io/main/.governance/rules/gov-12-drift-control-garbage-collection.mdc)

This page embeds the canonical rule text and adds commentary after each section to explain why the section exists.

## Governance: Drift Control and Garbage Collection

Agent-generated systems accumulate drift unless cleanup is continuous, explicit, and tracked.

Governed repositories should treat cleanup as part of normal delivery rather than a rare rescue phase.

> Commentary: Frames cleanup as core delivery maintenance, not optional housekeeping.

## Core Principle

- `GOV-12-DRIFT-001` Drift control is a first-class maintenance loop, not optional housekeeping.
- `GOV-12-DRIFT-002` Small continuous cleanup is preferable to large infrequent cleanup campaigns.
- `GOV-12-DRIFT-003` Human taste and review findings should compound through recurring cleanup and enforcement, not reset every run.

> Commentary: Establishes the cadence and leverage model for keeping agent-generated repos healthy.

## What Counts as Drift

- `GOV-12-DRIFT-004` Drift includes stale docs, duplicated local patterns, weak or inconsistent naming, obsolete generated artifacts, lingering temporary files, repeated low-quality agent patterns, and unowned deviations from current standards.
- `GOV-12-DRIFT-005` Drift also includes governance/process drift, such as outdated templates, stale instructions, broken cross-links, or review expectations that no longer match actual delivery behavior.

> Commentary: Expands drift beyond code smells to include governance and documentation entropy.

## Cleanup Expectations

- `GOV-12-DRIFT-006` Governed repositories should maintain a recurring cleanup path that inspects for drift and converts meaningful findings into tracked work or immediate bounded cleanup.
- `GOV-12-DRIFT-007` Cleanup work should prefer focused, reviewable corrections over sweeping unfocused rewrites.
- `GOV-12-DRIFT-008` When cleanup is deferred, the drift item should be captured as explicit backlog work rather than left as ambient known mess.
- `GOV-12-DRIFT-009` Repeatedly rediscovered drift should be treated as an enforcement gap, not just a maintenance todo.

> Commentary: Requires drift findings to produce action instead of recurring complaints.

## Promotion from Cleanup

- `GOV-12-DRIFT-010` If the same class of cleanup keeps reappearing, the governing system should promote the remedy into stronger controls such as templates, reference docs, tests, generators, or lint rules.
- `GOV-12-DRIFT-011` Cleanup findings should inform quality grading, governance updates, or harness improvements when they reveal systemic weakness.

> Commentary: Converts repeated cleanup into stronger system-level prevention.

## Reviewability and Evidence

- `GOV-12-DRIFT-012` Drift cleanup should leave evidence of what pattern was corrected, why it mattered, and what prevents recurrence when known.
- `GOV-12-DRIFT-013` Large cleanup claims without scoped examples, evidence, or recurrence prevention should be treated skeptically.

> Commentary: Prevents vague “cleaned up” claims from masking unchanged underlying behavior.

## Anti-Patterns

Avoid these failure modes:
- saving cleanup for occasional heroics
- accepting AI slop as inevitable background cost
- repeatedly fixing the same smell manually without strengthening the harness
- allowing stale governance/docs/templates to survive because product code changed faster
- treating repository clutter as harmless when it actively degrades future agent runs

> Commentary: Names the quality-debt patterns this rule is designed to stop from compounding.
