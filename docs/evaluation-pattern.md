---
sidebar_position: 10
---

# Evaluation Pattern

Evaluation is a real VibeGov control, but it is **not** a third peer operating mode.

Use it when you need a bounded judgment against explicit criteria.

## What evaluation is

Evaluation is the pattern for asking:

- did this bounded output meet the stated criteria?
- what is the verdict?
- what evidence supports that verdict?
- what fails, and why?

Typical evaluation use-cases:
- score a draft against explicit writing criteria
- judge whether a route/report/checkpoint satisfies a rubric
- run a skeptical reviewer pass over a bounded implementation result
- decide whether a validator output passes a known contract

## What evaluation is not

Evaluation is **not**:
- broad discovery across a surface
- backlog hydration by route/page/workflow review
- a substitute for Development evidence after changing behavior
- a free-floating excuse to say "reviewed" without a contract

Fast rule:
- **Exploration** asks, "what is true across this surface?"
- **Evaluation** asks, "did this bounded thing pass the criteria?"

## Where evaluation fits in the model

VibeGov has two primary operating modes:
- **Exploration** for discovery
- **Development** for changing behavior and carrying it safely toward release

Evaluation fits **inside** one of those modes when bounded judgment is useful.

Examples:
- in **Exploration**, an evaluator may judge whether a route report is artifact-complete
- in **Development**, an evaluator may judge whether an implementation result meets quality criteria
- in **release verification**, an evaluator may help apply go/no-go criteria to a candidate inside Development

That makes evaluation a **control pattern**, not a separate top-level lane.

## Evaluation requires an explicit contract

A real evaluation pass should define:

- **unit under judgment**: the exact bounded thing being judged
- **criteria**: what counts as pass/fail/score
- **evidence input**: what artifacts, tests, screenshots, diffs, or reports are being judged
- **verdict shape**: pass/fail/score plus rationale
- **failure consequences**: retry, fix, block, or escalate

Without that contract, "evaluation" usually collapses into vibes or vague commentary.

## Minimum evaluation output

A useful evaluation result should include:
- the unit judged
- the criteria or rubric used
- the verdict
- the supporting evidence inspected
- the key failure reasons, if any
- the required next action

## Evaluation vs Exploration

| Question | Exploration | Evaluation |
| --- | --- | --- |
| primary goal | discover reality and hydrate backlog | judge a bounded unit against explicit criteria |
| normal scope | wider surface, route, workflow, or feature area | one bounded artifact, report, build, draft, or result |
| normal output | findings, classifications, issues, spec gaps, residual scope | verdict, criteria result, failure reasons, next action |
| completion signal | reviewed scope is classified and findings are artifact-linked | explicit verdict is produced against defined criteria |
| common failure | reporting findings without artifacts | declaring pass/fail without a real contract |

## Evaluation vs Release Verification

Release verification is a Development-shaped activity focused on integrated readiness.

Evaluation can be used **inside** release verification, but release verification itself is broader because it also cares about:
- build/version identity
- integrated environment checks
- deployment state
- promotion or rollback decision

So:
- evaluation may help judge part of release readiness
- release verification is still the broader Development closure activity

## Common anti-patterns

Avoid these:
- calling surface exploration an evaluation just because a reviewer was involved
- calling a vague opinion an evaluation when no criteria were defined
- treating evaluator commentary as a replacement for implementation proof
- using evaluation language to hide unclear ownership or unclear completion state
- promoting every review pass into a separate mode instead of keeping the model coherent

## Fast selection rule

Ask:

1. Am I discovering across a surface? → **Exploration**
2. Am I changing behavior? → **Development**
3. Inside that mode, do I need a bounded judgment against explicit criteria? → **Evaluation pattern**

## Related docs

- [Execution Modes](/docs/execution-modes)
- [Mode Selection and Evidence Closing](/docs/mode-selection-and-evidence-closing)
- [Exploratory Review Mode](/docs/exploratory-review-mode)
- [Checkpoint Reporting](/docs/checkpoint-reporting)
- [Harness Profile: Minimal Claude Harness](/docs/harness-profile-minimal-claude)
- [Harness Profile: Codex](/docs/harness-profile-codex)
