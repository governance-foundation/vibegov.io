---
sidebar_position: 13
---

# Harness Profile: Codex

This profile shows how to run a Codex-centered delivery loop inside VibeGov without letting runtime speed become the whole governance model.

It is a profile, not a core-governance replacement.

## What this profile is for

Use this when your team runs implementation loops primarily through Codex sessions and wants explicit control over:
- scoped work-unit execution,
- operator-legible progress and decision boundaries,
- truthful verifier and evaluator gates,
- durable state artifacts,
- bounded retries and escalation,
- closure that reaches governed repo state instead of stopping at edited files.

## Profile stance

This profile keeps a strong implementation posture inside firm governance boundaries.

The intended operating shape is:
- move directly on clear bounded work
- stay tool-first instead of terminal-first
- keep progress visible at meaningful checkpoints
- verify before claiming completion
- close the governed landing path fully

## Profile contract

A Codex harness loop should explicitly provide:

1. **Work-unit selection**
   - one tracked task at a time, with clear acceptance criteria.

2. **Verifier contract**
   - explicit command(s) that define baseline and post-change verification.
   - verifier results should be reported truthfully, not inferred from confidence or partial inspection.

3. **Evaluator contract**
   - separate skeptical evaluation path with explicit pass/fail or scored output.
   - treat that evaluator path as a bounded control inside the active Development or Exploration flow, not as a third top-level mode.

4. **State artifacts**
   - durable plan, progress, evidence, and follow-up artifacts in repo.

5. **Legibility contract**
   - concise checkpoints for start or resume, plan change, blocker or risk, validation outcome, and closure outcome.
   - avoid both status spam and opaque black-box silence.

6. **Closure semantics**
   - completion only when verification, evaluation, traceability, and git-state closure conditions are met.

7. **Escalation semantics**
   - bounded retry loops and explicit blocked outcomes when confidence cannot be raised honestly.

8. **Autonomy boundary**
   - clear, reversible internal work may proceed without waiting.
   - destructive, external, privacy-sensitive, irreversible, or judgment-dependent actions should surface a visible decision boundary.

## Execution pattern

A healthy run should look like this:
- orient on issue, spec, and inherited repo state
- classify residue before starting fresh work
- run baseline verifier
- implement the scoped change only
- run post-change verifier
- run skeptical evaluator pass when the slice warrants it
- loop on fixes only while the loop is producing real progress
- close state through commit, merge-path, archive-path, or explicit follow-up handling
- record evidence and residual risk truthfully

## Non-negotiable guardrails

Do not treat these as optional:
- inherited repo state must be classified before new governed work starts
- meaningful risk and uncertainty must stay visible
- low narration does not justify low legibility
- passing build output alone does not close a slice
- rollout momentum does not outrank closure, accountability, or recoverability

## Mapping to VibeGov controls

| Codex harness concern | VibeGov control |
| --- | --- |
| One scoped task loop | GOV-07 tasks + GOV-02 workflow |
| Tool-first execution inside a bounded work unit | GOV-02 workflow + GOV-11 legibility |
| Baseline and post-change verification | GOV-05 testing + GOV-04 quality gate |
| Separate evaluator judgment | GOV-13 review loops + GOV-04 anti-fake-completion |
| Durable plan/progress artifacts | GOV-11 in-repo truth + GOV-09 continuity |
| Operator-legible checkpoints | GOV-11 legible execution and bounded autonomy |
| Git state closure before move-on | GOV-10 state closure and git hygiene |
| Recurring cleanup and anti-slop | GOV-12 drift control |
| Blocked/retry/stop behavior | GOV-02 escalation and move-on behavior |

## Adoption checklist

When adopting this profile in a repo:

- define canonical verifier command(s)
- define evaluator output schema and fail conditions
- define plan, progress, evidence, and follow-up artifact locations
- define the checkpoint/report moments operators should expect
- define retry cap and blocked/escalation handoff path
- enforce git-state closure at work-unit boundaries
- require evidence links in issue and PR checkpoints
- decide which actions require visible human decision boundaries
- keep the prompt/profile small enough that operators can actually inspect it

## Minimal prompt/profile snippet

For a compact starting point, see:
- [Minimal VibeGov Execution Profile Snippet](/docs/minimal-vibegov-execution-profile-snippet)

Use it as a small harness seed, then add repo-specific verifier/evaluator/artifact details around it.

## Minimum quality bar for this profile

A Codex-centered run should not be considered complete unless:
- acceptance criteria are traceable,
- verification evidence is captured,
- evaluator outcome is explicit when used,
- repo state is fully accounted for,
- residual risks and follow-ups are tracked,
- the governed landing path is clear.

## Common failure modes

Avoid these:
- letting Codex self-grade as the only quality gate
- using chat memory as durable state instead of repo artifacts
- marking done on passing build alone
- carrying dirty-tree residue to the next work unit
- running unbounded retries without escalation
- hiding meaningful risk or uncertainty to preserve rollout momentum
- treating low narration as permission for low legibility

## Recommended rollout strategy

- start with a small governed pilot in one repo
- keep the loop simple until the real failure modes are known
- tighten verifier, evaluator, and closure controls before adding orchestration layers
- reassess prompt/harness complexity whenever model capability improves
- remove stale scaffolding when simpler governed paths become good enough

## Core vs adapter reminder

VibeGov core remains tool-agnostic.

This Codex profile is an adapter layer that helps teams apply the same governance controls in Codex-centered workflows.

## Related docs

- [Execution Sharpness and Governed Closure](/docs/codex-prompting-through-vibegov)
- [Minimal VibeGov Execution Profile Snippet](/docs/minimal-vibegov-execution-profile-snippet)
- [Harness Profile: Minimal Claude Harness](/docs/harness-profile-minimal-claude)
- [Mode Selection and Evidence Closing](/docs/mode-selection-and-evidence-closing)
- [Checkpoint Reporting](/docs/checkpoint-reporting)
- [Published GOV 10 Agent State Closure and Git Hygiene](/docs/published/gov-10-agent-state-closure-git-hygiene)
- [Published GOV 11 Agent Legibility and In-Repo Truth](/docs/published/gov-11-agent-legibility-in-repo-truth)
- [Published GOV 12 Drift Control and Garbage Collection](/docs/published/gov-12-drift-control-garbage-collection)
- [Published GOV 13 Review Loops and Completion Discipline](/docs/published/gov-13-review-loops-completion-discipline)
