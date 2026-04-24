---
sidebar_position: 14
---

# Execution Sharpness and Governed Closure

VibeGov should encode strong execution behavior directly into its own rules, docs, and harness profiles.

That means keeping the useful execution patterns that help agents move cleanly from intent to verified result while expressing them in native VibeGov language.

## The execution stance

A strong VibeGov execution profile should behave like this:

### Tool-first execution

Use dedicated tools, fast discovery, and precise edits where possible.

Prefer structured tool use over raw terminal drift. Prefer targeted reads and coherent edits over scattered thrash.

### Completion bias

When a task is clear, move through context gathering, implementation, verification, and closure in one bounded loop.

The point is not "never ask questions." The point is "do not substitute planning ceremony for progress."

### Read enough before changing

Understand local patterns, reuse opportunities, and surrounding behavior before editing.

This reduces narrow fixes, diff churn, and accidental inconsistency across neighboring surfaces.

### Truthful verification

Do not treat confidence as proof.

If behavior changed, the closing state should include direct evidence: checks, tests, inspection, screenshots, release verification, or another honest gate that matches the work.

### Low-noise communication

Keep updates concise and high-signal.

Silence is not the goal. Constant narration is not the goal either. The goal is legible execution with minimal wasted interruption.

## The guardrails

Execution sharpness becomes dangerous when it loses closure or hides decision boundaries.

A governed profile must keep these guardrails in place.

### Legibility over black-box speed

Operators need to see meaningful state transitions:
- start or resume
- major plan change
- blocker or decision boundary
- validation outcome
- closure outcome

That is enough visibility for safe interruption and review without forcing noisy status spam.

### Inherited-state assessment before new work

Messy repo state is not just an inconvenience.

It must be assessed, classified, and treated explicitly before a new governed slice starts. Hidden residue should not be allowed to ride forward just because the agent wants momentum.

### Autonomy bounded by consequence

High agency is appropriate for clear, reversible internal work.

The decision boundary must stay visible when the work becomes destructive, external, privacy-sensitive, public-facing, irreversible, or dependent on unresolved human judgment.

### Closure as part of execution

The slice is not complete at "files edited."

The close should include the expected issue, spec, evidence, git-state, merge-path, archive-path, and return-to-base behavior required by the repo.

## Practical profile shape

A strong implementation profile inside VibeGov should:
- act directly on clear bounded work
- prefer tool-first execution
- reuse repo patterns before inventing new ones
- verify before claiming success
- keep checkpoints concise but visible
- classify inherited state before continuing
- stop hiding uncertainty behind momentum
- close the governed landing path fully

## Common failure modes

Avoid these patterns:
- treating maximal parallelism as a rule instead of a heuristic
- suppressing all progress updates in the name of efficiency
- treating dirty or inherited repo state as background noise
- optimizing rollout speed above accountability or recoverability
- using passing build output as a substitute for true closure
- claiming low narration while actually running as an opaque black box

## Why this matters

Without execution sharpness, a governed system becomes ceremonial and slow.

Without governed closure, a fast implementation system becomes hard to audit, hard to interrupt, and too willing to trade reliability for momentum.

VibeGov should encode both:
- strong execution posture
- strong closure and legibility controls

That combination is the point.

## Recommended reading path

- [Harness Profile: Codex](/docs/harness-profile-codex)
- [Minimal VibeGov Execution Profile Snippet](/docs/minimal-vibegov-execution-profile-snippet)
- [Harness Profile: Minimal Claude Harness](/docs/harness-profile-minimal-claude)
- [Mode Selection and Evidence Closing](/docs/mode-selection-and-evidence-closing)
- [Checkpoint Reporting](/docs/checkpoint-reporting)
- [Published GOV 10 Agent State Closure and Git Hygiene](/docs/published/gov-10-agent-state-closure-git-hygiene)
- [Published GOV 11 Agent Legibility and In-Repo Truth](/docs/published/gov-11-agent-legibility-in-repo-truth)
- [Published GOV 13 Review Loops and Completion Discipline](/docs/published/gov-13-review-loops-completion-discipline)
