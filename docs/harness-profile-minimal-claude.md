---
sidebar_position: 12
---

# Harness Profile: Minimal Claude Harness

This profile integrates a minimal generator/evaluator harness pattern into VibeGov without making a single runtime mandatory.

Use this when you want autonomous multi-session delivery with explicit quality gates and durable state, while still keeping VibeGov portable.

It should be adopted with a simplicity-first bias: do not add harness layers faster than the real failure modes justify.

It is an adapter profile, not a VibeGov requirement. VibeGov does not require Claude, a generator/evaluator harness, or any specific provider.

Read this after the canonical VibeGov surfaces:
- [Bootstrap](/docs/bootstrap)
- [Execution Modes](/docs/execution-modes)
- [Published GOV Rules](/docs/published/gov-01-instructions)

## Why this is a profile, not the core runtime

VibeGov governs behavior and evidence standards across tools.

The minimal harness implementation is one concrete way to satisfy those standards. It should be treated as a reference profile, not as the only valid execution engine. If this profile conflicts with the bootstrap contract or published GOV rules, the canonical VibeGov surface wins and the profile should be updated.

## Profile boundaries

In scope:
- generator/evaluator loop with skeptical evaluation
- structured task state and progress persistence
- one-task focus and baseline verification discipline
- explicit completion gating and retry limits

Out of scope:
- provider-specific auth/runtime details
- machine-local sandbox implementation details
- enforcing one CLI or one SDK as the only allowed path

## Mapping to VibeGov controls

| Harness concept | VibeGov control alignment |
| --- | --- |
| Intake → triage → plan → execute → evaluate | GOV-02 workflow loop (`Observe -> Plan -> Implement -> Verify -> Document`) |
| Separate evaluator role | GOV-04 quality gate + GOV-13 review-loop discipline |
| Task JSON as durable state | GOV-11 in-repo truth + GOV-09 continuity expectations |
| One task per focused session | GOV-07 task discipline |
| Verify baseline before change | GOV-05 testing evidence + GOV-04 anti-fake-completion |
| Retry loops with bounded attempts | GOV-02 blocker/escalation and move-on behavior |
| Commit/checkpoint after successful unit | GOV-10 state closure and git hygiene |
| Ongoing cleanup and anti-slop posture | GOV-12 drift control and garbage collection |

## Adoption checklist

When adopting this profile in a target repo:

1. **Install governance first**
   - bootstrap VibeGov governance artifacts and rules before harness automation.

2. **Define the verifier contract**
   - set the canonical verification command(s) and evidence expectations.

3. **Define evaluator contract**
   - ensure evaluator role is separate from generator role and has explicit verdict schema.
   - keep the evaluator framed as a bounded control inside the current Development or Exploration flow, not as a separate peer operating mode.

4. **Define state model**
   - set plan/task/progress artifacts and enforce append/update rules mechanically where possible.

5. **Enforce state closure**
   - require file/accounting at work-unit boundaries (commit/revert/ignore/defer).

6. **Wire escalation semantics**
   - define retry caps, blocker outcomes, and what triggers human decision.

7. **Run a bounded pilot**
   - start with a small issue set, inspect failure modes, and tighten controls before scale.

8. **Promote repeated feedback into controls**
   - convert recurring review comments into docs/rules/tests/lints.
   - when approved edits reveal a reusable lesson, run a feedback-assimilation step so the pattern is persisted before the next long continuation.

## Minimum quality bar for this profile

A harness run should not be considered complete unless:
- acceptance criteria are traceable,
- verification evidence is captured,
- evaluator outcome is explicit,
- repo state is fully accounted for,
- residual risks/follow-ups are tracked.

## Common anti-patterns

Avoid these when implementing the profile:
- generator self-grading as the sole quality gate
- relying on chat history instead of durable repo artifacts
- marking tasks complete without explicit evaluator/verifier evidence
- allowing dirty-tree residue across work units
- adding orchestration complexity before a simple loop is stable

## Recommended rollout strategy

- Start with a minimal profile in one repo.
- Measure failure classes for 1 to 2 weeks.
- Strengthen enforcement before adding orchestration complexity.
- Reassess complexity each model/runtime upgrade and remove stale scaffolding.

## Simplicity-first reminder

This profile is a way to apply VibeGov controls, not a requirement to start with a heavy harness.

Prefer:
- the smallest coherent loop first,
- one responsible worker before many,
- stronger verification/evaluation before added coordination,
- and removal of stale scaffolding when simpler paths become good enough.

## Related docs

- [Runtime and Harness Profiles](/docs/runtime-and-harness-profiles)
- [Bootstrap](/docs/bootstrap)
- [Execution Modes](/docs/execution-modes)
- [Evaluation Pattern](/docs/evaluation-pattern)
- [Simplicity-First Guidance](/docs/simplicity-first)
- [Feedback Assimilation Pattern](/docs/feedback-assimilation-pattern)
- [Checkpoint Reporting](/docs/checkpoint-reporting)
- [Workflow Quality Rubric](/docs/workflow-quality-rubric)
- [GOV 10 Agent State Closure and Git Hygiene](/docs/published/gov-10-agent-state-closure-git-hygiene)
- [GOV 11 Agent Legibility and In-Repo Truth](/docs/published/gov-11-agent-legibility-in-repo-truth)
- [GOV 12 Drift Control and Garbage Collection](/docs/published/gov-12-drift-control-garbage-collection)
- [GOV 13 Review Loops and Completion Discipline](/docs/published/gov-13-review-loops-completion-discipline)
