---
sidebar_position: 8
---

# Feedback Intake

Feedback Intake is the VibeGov work shape for turning human feedback into governed ready work without implementing immediately.

It is the named intake behavior inside the **Human Feedback Loop**.

## What Feedback Intake is for

Use Feedback Intake when a human is reacting to work that already exists and the immediate goal is to capture, reshape, and route that feedback correctly before delivery starts.

Typical inputs:
- feature feedback
- flow/UX reactions
- reprioritisation notes
- scope corrections
- quality/taste direction
- partial "this is close but not right" guidance
- a burst of ideas that should become proper issues rather than immediate edits

## What Feedback Intake does

A good Feedback Intake pass should:
- understand the feedback in context
- check for existing related issues/specs so work is not duplicated
- split broad feedback into the smallest correct governed work units
- bind the feedback to the right issue, spec, or `SPEC_GAP`
- classify dependencies, blockers, and readiness
- recommend next execution order
- stop before implementation unless the human explicitly switches modes

## What Feedback Intake is not

Feedback Intake is **not**:
- vague planning with no artifacts
- direct implementation
- exploratory discovery of unknown reality
- release verification
- a substitute for explicit Development evidence

It may involve planning, but its output is governed backlog/spec state rather than a chat-only plan.

## Expected outputs

Typical Feedback Intake outputs include:
- new or updated GitHub issues
- spec links or `SPEC_GAP` markers
- split child issues when a feedback bundle is too broad
- acceptance-criteria tightening
- priority/dependency notes
- a recommended next-ready execution order

## Minimum closure evidence

Feedback Intake is honestly complete when it leaves:
- the feedback source or reviewed target clearly identified
- the created or updated issue IDs
- spec binding or `SPEC_GAP`
- dedupe/splitting decisions made visible
- readiness/blocker/dependency notes captured
- no false implication that the product change itself was delivered

For a copyable checkpoint shape, see the Feedback Intake example in [Evidence Examples](/docs/evidence-examples).

## Relationship to other work shapes

### Feedback Intake vs Development

- **Feedback Intake** converts feedback into governed ready work.
- **Development** changes the product and proves the change.

### Feedback Intake vs Exploration

- **Feedback Intake** starts from human judgment/correction.
- **Exploration** starts from review/discovery of reality and feeds new governed work back from that discovery.

### Feedback Intake vs Evaluation

- **Feedback Intake** routes and structures work.
- **Evaluation** gives a bounded criteria-based verdict inside another work shape.

### Feedback Intake vs planning

- **Planning** may happen inside many work shapes.
- **Feedback Intake** is a concrete governed output shape with issue/spec artifacts.

## Fast rule

Use Feedback Intake when the real question is:

> "How do I turn this human feedback into the right governed work without implementing yet?"

## Related docs

- [Execution Modes](/docs/execution-modes)
- [Build Loop, Exploratory Loop, Human Feedback Loop, and Scoped Blocking](/docs/build-exploratory-human-feedback-loops)
- [Mode Selection and Evidence Closing](/docs/mode-selection-and-evidence-closing)
- [Evidence Examples](/docs/evidence-examples)
- [Feedback Assimilation Pattern](/docs/feedback-assimilation-pattern)
- [Quick Decisions](/docs/quick-decisions)
