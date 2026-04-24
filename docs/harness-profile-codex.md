---
sidebar_position: 13
---

# Harness Profile: Codex

This profile shows how to run a Codex-centered delivery loop inside VibeGov without letting Codex's speed-oriented prompting become the whole governance model.

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

This profile intentionally combines two different strengths:

- **Codex contribution:** tool-first execution, strong implementation momentum, low tolerance for empty planning chatter, and a bias toward verification.
- **VibeGov contribution:** bounded autonomy, governed artifacts, operator-legible checkpoints, state closure, and accountability at work-unit boundaries.

Do not adopt Codex prompting wholesale. Adopt the useful execution posture and keep the stronger governance layer around it.

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

## What to borrow from Codex prompting

Borrow these parts aggressively:
- tool-first work over raw terminal drift
- completion bias instead of plan theater
- reading enough context before editing
- repo-convention reuse before invention
- verification before completion claims
- concise communication instead of ceremonial narration

## What to reject or constrain

Do not import these as hard rules:
- maximize parallelism at all times
- suppress progress updates just because silence benchmarks well
- treat dirty or inherited repo state as a simplistic stop signal instead of a classification problem
- optimize rollout speed above closure, accountability, or recoverability
- treat edited files as an adequate completion boundary

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

## Recommended Codex session pattern

For each work unit:

1. orient on issue, spec, and inherited repo state
2. classify any residue before starting fresh work
3. run baseline verifier
4. implement the scoped change only
5. run post-change verifier
6. run skeptical evaluator pass when the slice warrants it
7. loop on fixes only while the loop is producing real progress
8. close state through commit, merge-path, archive-path, or explicit follow-up handling
9. record evidence and any residual risks truthfully

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

- [Codex Prompting Through a VibeGov Lens](/docs/codex-prompting-through-vibegov)
- [Harness Profile: Minimal Claude Harness](/docs/harness-profile-minimal-claude)
- [Mode Selection and Evidence Closing](/docs/mode-selection-and-evidence-closing)
- [Checkpoint Reporting](/docs/checkpoint-reporting)
- [Published GOV 10 Agent State Closure and Git Hygiene](/docs/published/gov-10-agent-state-closure-git-hygiene)
- [Published GOV 11 Agent Legibility and In-Repo Truth](/docs/published/gov-11-agent-legibility-in-repo-truth)
- [Published GOV 12 Drift Control and Garbage Collection](/docs/published/gov-12-drift-control-garbage-collection)
- [Published GOV 13 Review Loops and Completion Discipline](/docs/published/gov-13-review-loops-completion-discipline)
