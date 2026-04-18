---
sidebar_position: 7
---

# VibeGov Quick Decisions

This page is the fast path.

Use it when you need a practical answer quickly, then follow the linked deeper docs when you need full detail.

## 1. What kind of work am I doing?

| If the goal is... | Use this | What closes it |
| --- | --- | --- |
| discover reality, inspect behavior, find gaps, hydrate backlog | **Exploration** | reviewed scope, scenario classifications, artifact links for every real finding |
| change behavior and carry the change toward release safely | **Development** | issue/spec binding, changed artifacts, validation evidence, traceability updates |

Fast rule:
- **Exploration** discovers.
- **Development** changes.

## 2. Am I exploring or just avoiding proof?

| Signal | Likely answer |
| --- | --- |
| you are reviewing routes, flows, UX, gaps, or product reality | **Exploration** |
| you changed code, docs, config, content, or delivery machinery | **Development** |
| you are claiming something works now | **Development evidence required** |

Anti-pattern:
- exploratory notes are **not** development proof.

## 3. Where does evaluation fit?

| If you need to... | Use |
| --- | --- |
| judge a bounded unit against explicit criteria | **Evaluation pattern** |
| inspect a wider surface and turn findings into backlog/spec work | **Exploration** |
| verify a changed artifact or release candidate | **Development**, possibly with evaluator/verifier checks |

Fast rule:
- **Mode** tells you what kind of work this is.
- **Evaluation** tells you how a bounded unit is judged.

## 4. Should I stay simple or add more orchestration?

| Situation | Default choice |
| --- | --- |
| steps are known and stable | **Workflow / simple sequence** |
| one owner can do the work with bounded tools | **Single agent / single owner** |
| complexity is rising but not yet proven necessary | **Stay simpler** |
| multiple reasoning domains or boundaries are genuinely needed | **Add delegation/orchestration carefully** |

Fast rule:
- workflow before agent
- single owner before multi-agent
- added complexity only when the simpler path is failing with evidence

## 5. Should I delegate?

| If... | Do this |
| --- | --- |
| the work is clear, bounded, and you can complete it directly | **Do it directly** |
| the work needs a distinct worker, separate competency, or bounded parallel slice | **Delegate with explicit supervision** |
| delegation would mainly hide uncertainty or avoid responsibility | **Do not delegate** |

Delegation is not closure.
You still need:
- explicit owner
- visible follow-through
- evidence from the worker
- final integration judgment

## 6. Should I escalate or keep going?

| Situation | Do this |
| --- | --- |
| next experiment is clear and bounded | **Keep going** |
| requirements are contradictory or ambiguous | **Escalate** |
| sensitive boundary / approval is required | **Escalate** |
| retries stopped producing meaningful progress | **Escalate** |
| current item is blocked but other ready work exists | **Record blocker and move on** |

## 7. What evidence closes the work?

| Work shape | Minimum closing evidence |
| --- | --- |
| **Exploration** | reviewed unit, preconditions, classifications, expected vs actual notes, linked issues/spec gaps |
| **Development** | issue + requirement IDs, changed artifacts, checks/tests run, pass/fail outcomes, traceability/docs updates |
| **Release verification** | build/version reviewed, integrated results, known blockers/risks, go/no-go style decision |
| **Blocker checkpoint** | exact blocker, attempted actions, confidence limits, blocker artifact, redirected next work |

## 8. Should this become a rule, or just a note?

| If the learning is... | Put it in... |
| --- | --- |
| one-off and local to the current slice | **checkpoint / issue / local note** |
| specific to the current project or repo | **project doc / repo rule / project memory** |
| repeated, durable, and useful beyond this slice | **governance rule / reusable doc / harness pattern** |

Fast rule:
- not every lesson deserves a rule
- repeated durable failures usually do

## 9. What are the most common failure modes?

- exploratory findings with no artifacts
- development claims with no direct proof
- adding orchestration before proving it is needed
- delegating without supervision or closure
- blocker claims with no blocker artifact
- treating chat memory as durable state
- promoting every tiny preference into bloated governance

## Start here if you are unsure

1. Ask: **Am I discovering, or changing?**
2. Choose **Exploration** or **Development**.
3. If you need a bounded judgment, apply the **evaluation pattern** inside that mode.
4. Keep the execution shape as simple as possible.
5. Do not claim done until the evidence matches the work shape.

## Related docs

- [Execution Modes](/docs/execution-modes)
- [Mode Selection and Evidence Closing](/docs/mode-selection-and-evidence-closing)
- [Exploratory Review Mode](/docs/exploratory-review-mode)
- [Checkpoint Reporting](/docs/checkpoint-reporting)
- [Blocker Escalation](/docs/blocker-escalation)
- [Workflow Quality Rubric](/docs/workflow-quality-rubric)
- [Published GOV 02 Workflow](/docs/published/gov-02-workflow)
