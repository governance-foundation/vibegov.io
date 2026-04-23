---
sidebar_position: 7
---

# Mode Selection and Evidence Closing

Use this when you need to answer two practical questions fast:

1. **What shape of work am I actually doing?**
2. **What evidence honestly closes that shape?**

This is the compact operator guide for choosing the right VibeGov work shape without silently mixing proof models.

## 1. Pick the work shape first

| If the real goal is... | Work shape | What closes it |
| --- | --- | --- |
| inspect behavior, discover gaps, understand reality, hydrate backlog | **Exploration** | reviewed scope, scenario classifications, expected vs actual notes, linked issues/spec gaps |
| change behavior and carry the change toward safe delivery | **Development** | issue/spec binding, changed artifacts, validation evidence, traceability/docs updates |
| judge a bounded unit against explicit criteria | **Evaluation pattern** inside the current mode | explicit criteria, bounded judgment, pass/fail or scored result |
| decide whether a built candidate is safe to promote or ship | **Release verification** inside Development | build/version reviewed, integrated checks, go/no-go decision, blockers/risks made visible |

Fast rule:
- **Exploration** discovers.
- **Development** changes.
- **Evaluation** judges a bounded unit.
- **Release verification** closes a Development-ready candidate.

## 2. Work shape is not the same thing as loop placement

A lot of confusion disappears once these are kept separate.

- **mode / work shape** answers: what kind of work is this, and what evidence closes it?
- **loop placement** answers: where does this work sit in the wider operating system?

Typical mapping:
- **Build Loop** mostly contains **Development** work
- **Exploratory Loop** mostly contains **Exploration** work
- **Human Feedback Loop** injects judgment, approval, correction, and reprioritisation into either one
- **Evaluation** may be used inside any of those when a bounded verdict is needed

So if you are unsure, choose the **mode** first, then describe the surrounding **loop** second.

## 3. Do not let evidence shapes drift

| If you are doing this... | You need this evidence shape |
| --- | --- |
| reviewing routes, flows, UX, contracts, or product reality | **Exploratory evidence** |
| changing code, docs, config, content, or delivery behavior | **Development evidence** |
| claiming the integrated build/release candidate is ready | **Release-verification evidence** |
| reporting a proven blocker | **Blocker checkpoint evidence** |

Anti-rule:
- exploratory notes do **not** close Development work
- development diff/test proof does **not** replace release-readiness evidence
- a blocker claim without a blocker artifact is not closure

## 4. Minimum evidence by work shape

### Exploration
Use when the goal is discovery.

Minimum closure:
- reviewed unit or surface
- preconditions and confidence limits
- scenario classifications or route outcomes
- expected vs actual notes for failures or interesting findings
- linked issue/spec/traceability artifacts for each real finding
- residual scope noted honestly

### Development
Use when behavior changed.

Minimum closure:
- active issue and requirement/spec binding
- changed artifacts named clearly
- validation commands/checks/tests run
- pass/fail outcomes
- traceability/docs updates when impacted
- commit, PR, or artifact references
- residual risk stated honestly

### Release verification
Use when judging whether a candidate is safe to promote or ship.

Minimum closure:
- build/version reviewed
- integrated scope covered
- critical checks/smokes run
- pass/fail summary
- blockers/risks recorded explicitly
- go / no-go / conditional decision

Version-label guidance:
- when naming the reviewed candidate, prefer the canonical format `yyyy.m.d-<shortsha>` by default so the artifact is both human-readable and commit-traceable.

### Blocker checkpoint
Use when work cannot meaningfully advance.

Minimum closure:
- exact blocker
- attempted actions
- confidence limits
- blocker artifact
- redirected next work or recovery condition

## 5. Which checkpoint/report shape should I use?

| Situation | Report shape |
| --- | --- |
| route, page, workflow, or surface review | **Exploratory checkpoint** |
| active implementation or docs/code/config change | **Development checkpoint** |
| integrated readiness check for a candidate artifact | **Release verification checkpoint** |
| proven inability to continue | **Blocker checkpoint** |

Fast rule:
- choose the checkpoint shape that matches the work, not the one that sounds most impressive.

## 6. Where evaluation fits

Evaluation is useful when the work needs a skeptical or criteria-based judgment.

Examples:
- score a draft against explicit writing criteria
- judge whether a UX flow meets a rubric
- decide whether a result passes a validator contract

What evaluation is **not**:
- not a substitute for exploration when the real goal is surface discovery
- not a substitute for Development proof when behavior changed
- not a free-floating third operating mode

## 7. Common mode-mixing failures

Avoid these:
- exploratory findings presented as if they prove a fix shipped
- development updates that omit the checks actually run
- release confidence claimed from isolated ticket proof only
- blocker claims with no blocker issue/artifact
- evaluation language used to hide missing scope or missing evidence
- a vague "done" that collapses implemented, verified, reviewed, and released into one word

## 8. The 20-second selection rule

Before starting or reporting, ask:

1. **Am I discovering or changing?**
2. **Do I need bounded judgment inside that mode?**
3. **Am I also judging release readiness?**
4. **Does my evidence match that exact shape?**

If the answers are blurry, the mode is probably blurry too.

## Related docs

- [Quick Decisions](/docs/quick-decisions)
- [Execution Modes](/docs/execution-modes)
- [Build Loop, Exploratory Loop, Human Feedback Loop, and Scoped Blocking](/docs/build-exploratory-human-feedback-loops)
- [Evaluation Pattern](/docs/evaluation-pattern)
- [Checkpoint Reporting](/docs/checkpoint-reporting)
- [Exploratory Review Mode](/docs/exploratory-review-mode)
- [Reference Reading](/docs/reference-reading)
- [The VibeGov SDLC](/docs/vibegov-sdlc)
- [Published GOV 02 Workflow](/docs/published/gov-02-workflow)
- [Published GOV 13 Review Loops and Completion Discipline](/docs/published/gov-13-review-loops-completion-discipline)
