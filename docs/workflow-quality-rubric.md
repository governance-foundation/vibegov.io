---
sidebar_position: 10
---

# Workflow Quality Rubric

This rubric exists for one reason:

A workflow can sound strict and still be easy to execute lazily.

Use this rubric to evaluate whether a delivery workflow is merely well-written or actually hard to misread, hard to game, and hard to execute badly.

## What a strong workflow should prevent

A good workflow should actively prevent:
- page-rendered equals page-validated thinking
- UI-success equals persistence-success assumptions
- vague issue batching across unrelated findings
- blocker-driven full-pass paralysis
- exploratory findings with no durable artifacts
- implementation completion claims without evidence
- partial review being reported as full review

## Rubric categories

### 1. Mode clarity
Questions:
- Does the workflow clearly distinguish Exploration from Development?
- Does it make release verification explicit as part of Development rather than leaving it implicit?
- Are the outputs and evidence expectations different per mode?

Weak signal:
- everything is called "validation"

Strong signal:
- mode selection changes what must be produced and how completion is judged

### 2. Scenario coverage
Questions:
- Does the workflow require a scenario matrix or only suggest one?
- Are minimum scenario categories explicit?

Weak signal:
- "test the main flow"

Strong signal:
- happy path, cancel, invalid input, empty, loading, error, keyboard, persistence, and role/dependency variation are all explicitly accounted for or explicitly ruled out as not applicable

### 3. Persistence and mutation proof
Questions:
- Does the workflow require verification of resulting state after save/mutate/delete/sync actions?
- Does it prevent UI-only success claims?

Weak signal:
- success toast treated as proof

Strong signal:
- refresh checks, downstream-state checks, source-of-truth checks, or other evidence of real mutation outcome

### 4. Artifact discipline
Questions:
- Must every finding become a backlog/spec/traceability artifact?
- Is issue quality defined?

Weak signal:
- findings can stay in notes, chat, or screenshots

Strong signal:
- each distinct contract produces a focused, implementation-ready artifact

### 5. Blocker handling
Questions:
- Does the workflow explain how to classify and respond to blockers?
- Does it preserve flow when a local blocker appears?

Weak signal:
- "blocked" stops everything

Strong signal:
- blockers are visible, bounded, classified, and routed without freezing unrelated work

### 6. Reporting quality
Questions:
- Does the workflow define required checkpoint content?
- Are there examples of good vs bad updates?

Weak signal:
- status can be vague and still look compliant

Strong signal:
- required fields, cadence, examples, and confidence limits are explicit

### 7. Completion honesty
Questions:
- Does the workflow force an honest final state such as complete, partial, or invalid review?
- Does it explicitly prevent overclaiming confidence?

Weak signal:
- everything trends toward "done"

Strong signal:
- partial coverage and confidence limits are visible and normalized

## Fast scoring model

Use a simple 0-2 score per category:
- **0** = missing or mostly informal
- **1** = present but easy to game
- **2** = explicit, enforceable, hard to misread

Suggested interpretation:
- **0-5**: weak workflow; high drift risk
- **6-9**: usable but inconsistent under pressure
- **10-12**: strong workflow; good default discipline
- **13-14**: near-operator-grade workflow

## What 10/10 looks like in practice

A 10/10 workflow:
- names the common shortcuts people take,
- requires mode-appropriate evidence,
- makes scenario coverage explicit,
- forces findings into durable artifacts,
- treats blockers as routing events,
- makes partial work visible,
- includes a self-check before completion.

## Related docs

- [Execution Modes](/docs/execution-modes)
- [Exploratory Review Mode](/docs/exploratory-review-mode)
- [Checkpoint Reporting](/docs/checkpoint-reporting)
- [Blocker Escalation](/docs/blocker-escalation)
