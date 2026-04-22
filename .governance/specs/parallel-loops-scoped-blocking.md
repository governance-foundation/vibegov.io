# Spec: Build loop, exploratory loop, human feedback loop, and scoped blocking

## Goal

Make the emerging VibeGov loop model explicit so teams do not collapse delivery, exploration, and human judgment into one vague idea of "the agent is working."

## Why

The current governance already distinguishes Development from Exploration and already says blockers should redirect work rather than freeze the whole loop.

The missing sharper model is:
- the **Build Loop** should consume governed scoped work from the repo/issues/specs and produce clear delivery outputs,
- the **Exploratory Loop** should inspect UI/spec/issue reality and feed governed backlog/spec work into delivery,
- the **Human Feedback Loop** should inject approval, correction, judgment, taste, and reprioritisation,
- and **Scoped Blocking** should pause only the lane that truly requires the missing input.

Without this, teams tend to make one of four mistakes:
- treating all agent activity as one loop with unclear boundaries,
- letting build recursively self-source new work from its own outputs,
- treating human-in-the-loop as a global stop condition,
- or treating planner/evaluator behavior as inherently delivery-shaped rather than sometimes exploratory.

## Requirements

- `LOOPS-001` GOV-02 explicitly describes the broader parallel loop model of Build Loop, Exploratory Loop, and Human Feedback Loop.
- `LOOPS-002` GOV-02 states that the Build Loop must not recursively self-source its own next work from its own outputs.
- `LOOPS-003` GOV-02 states that exploratory work is the non-delivery discovery/analysis lane.
- `LOOPS-004` GOV-02 allows planner-style scoping and evaluator-style judgment inside Exploration when they are used for non-delivery discovery, review, coverage, or backlog hydration.
- `LOOPS-005` GOV-02 explicitly prefers scoped blocking over global blocking when unrelated ready work can continue.
- `LOOPS-006` Public docs define the three-loop model and explain how scoped blocking works.
- `LOOPS-007` Public docs keep Exploration and Development as the two execution modes, while explaining that the broader loop model can contain planner/evaluator behavior.
- `LOOPS-008` A public article explains the loop model in plainer language for readers who are not starting from canonical GOV text.
- `LOOPS-009` Canonical and published GOV-02 wording stay aligned.

## Non-goals

- creating a third peer execution mode beyond Development and Exploration
- prescribing one exact multi-agent runtime architecture
- requiring every project to run all three loops with equal intensity at all times
- forbidding evaluator or planner roles inside Development when they are being used for delivery-shaped work

## Verification

Success requires:
- canonical GOV-02 and published GOV-02 both reflect the loop model and scoped blocking
- a dedicated public doc exists for the loop model
- a public article exists for the loop model
- execution/exploration/evaluation docs remain consistent with the updated framing
- the site build passes

## Notes

Useful short form:
- **Build changes reality.**
- **Exploratory understands reality.**
- **Human feedback reshapes intent.**
- **Scoped blocking prevents one unanswered question from freezing the whole system.**
