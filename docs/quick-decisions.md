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
| turn human feedback into governed ready work without implementing yet | **Feedback Intake** | issue/spec updates, split/dedupe decisions, readiness/dependency notes |
| change behavior and carry the change toward release safely | **Development** | issue/spec binding, changed artifacts, validation evidence, traceability updates |

Fast rule:
- **Exploration** discovers.
- **Feedback Intake** captures and shapes human feedback into ready work.
- **Development** changes.

## 2. Am I exploring or just avoiding proof?

| Signal | Likely answer |
| --- | --- |
| you are reviewing routes, flows, UX, gaps, or product reality | **Exploration** |
| you are reacting to existing work and want proper issues/spec updates before coding | **Feedback Intake** |
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

## 8. Before I delete, archive, or clean up, what should I do?

| Situation | Default choice |
| --- | --- |
| the state is meaningful and may need to be understood later | **preserve it first in a traceable form** |
| it is disposable generated noise or reproducible cache | **clean it up directly** |
| it contains secrets or unsafe material | **use a separate safe-handling path, do not casually commit it** |
| you want old behavior back | **bring it back in a new traceable change** |
| you are about to archive/retire a work branch | **land the intended result first, or preserve the retained state with explicit follow-up** |

Fast rule:
- preserve before destructive change when the state matters
- cleanup should not erase rationale
- archive after safe landing, not instead of it

## 9. What exactly makes a turn substantive?

| If the turn... | Treat it as... |
| --- | --- |
| leaves kept repo or issue state behind | **substantive** |
| changes code, docs, specs, tests, config, workflows, or issue metadata | **substantive** |
| changes ticket status, closure state, validation state, or branch state | **substantive** |
| would be risky to leave dirty for the next turn | **substantive** |
| is only discussion, reading, or ephemeral probing with no kept state | **not substantive** |

Fast rule:
- if it changed durable state or ticket state, it was substantive
- if it would be dangerous to leave dirty, it was substantive
- substantive turns require git closure, not just a chat checkpoint

## 10. What closes git hygiene for a substantive turn?

| Required end-state | Why it matters |
| --- | --- |
| kept work committed | creates a real tracking boundary |
| unresolved junk reverted or ignored explicitly | prevents residue from leaking forward |
| if not finished, a focused follow-up ticket exists | prevents ambiguous carry-over |
| original ticket merged into `develop` | closes the governed landing path |
| working branch archived as `archive/<branch>` | preserves branch history cleanly |
| local repo returned to `develop` | resets the next execution starting point |

Fast rule:
- git hygiene is mandatory
- done means committed, merged to `develop`, archived, and back on `develop`
- not done means follow-up ticket, not ambiguity

## 11. What must be true before new governed work starts?

| Start condition | Default rule |
| --- | --- |
| local repo is on `develop` | **start is allowed** |
| local repo is on an issue branch, archive branch, or detached state | **do not start new work** |
| repo is off `develop` because of recovery/debug/escalation work | **only proceed with explicit exception note** |
| branch state is unclear | **stop and normalize first** |

Fast rule:
- normal governed work starts from `develop`
- if you are not on `develop`, you are not ready to start
- exceptions must be explicit, not implied

## 12. What if I inherit repo state when I start?

| Situation | Default choice |
| --- | --- |
| there are modified/untracked files or branch residue | **assess and classify it before new work** |
| the inherited state is clear and attributable | **decide whether to land, defer, archive, or follow up** |
| the inherited state is mixed or unclear | **stop and escalate before starting a new slice** |
| you are tempted to reset/delete just to get clean | **do not do that by default** |
| the material is clearly disposable generated noise | **clean it up directly if that classification is explicit** |

Fast rule:
- inherited state must be assessed, not ignored
- preserve, land, archive, defer, or escalate before destructive cleanup
- reset/delete is last resort after discussion unless it is obvious generated noise

## 13. Should this become a rule, or just a note?

| If the learning is... | Put it in... |
| --- | --- |
| one-off and local to the current slice | **checkpoint / issue / local note** |
| specific to the current project or repo | **project doc / repo rule / project memory** |
| repeated, durable, and useful beyond this slice | **governance rule / reusable doc / harness pattern** |

Fast rule:
- not every lesson deserves a rule
- repeated durable failures usually do

## 14. What are the most common failure modes?

- exploratory findings with no artifacts
- development claims with no direct proof
- adding orchestration before proving it is needed
- delegating without supervision or closure
- blocker claims with no blocker artifact
- treating chat memory as durable state
- deleting meaningful state before preserving it
- archiving a branch as a substitute for landing traceable work
- skipping inherited-state assessment and starting anyway
- force-cleaning or deleting inherited state before deciding what it is
- promoting every tiny preference into bloated governance

## Start here if you are unsure

1. Ask: **Am I discovering, capturing human feedback into ready work, or changing?**
2. Choose **Exploration**, **Feedback Intake**, or **Development**.
3. If you need a bounded judgment, apply the **evaluation pattern** inside that mode.
4. Keep the execution shape as simple as possible.
5. Do not claim done until the evidence matches the work shape.

## Related docs

- [Execution Modes](/docs/execution-modes)
- [Feedback Intake](/docs/feedback-intake)
- [Mode Selection and Evidence Closing](/docs/mode-selection-and-evidence-closing)
- [Build Loop, Exploratory Loop, Human Feedback Loop, and Scoped Blocking](/docs/build-exploratory-human-feedback-loops)
- [Evaluation Pattern](/docs/evaluation-pattern)
- [Exploratory Review Mode](/docs/exploratory-review-mode)
- [Reference Reading](/docs/reference-reading)
- [Checkpoint Reporting](/docs/checkpoint-reporting)
- [Blocker Escalation](/docs/blocker-escalation)
- [Workflow Quality Rubric](/docs/workflow-quality-rubric)
- [Published GOV 02 Workflow](/docs/published/gov-02-workflow)
