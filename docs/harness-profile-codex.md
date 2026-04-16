---
sidebar_position: 13
---

# Harness Profile: Codex

This profile shows how to apply VibeGov harness controls in Codex-oriented delivery loops.

It is a profile, not a core-governance replacement.

## What this profile is for

Use this when your team runs implementation loops primarily through Codex sessions and wants explicit control over:
- scoped work-unit execution,
- verifier and evaluator gates,
- durable session-to-session state,
- bounded retries and escalation.

## Profile contract

A Codex harness loop should explicitly provide:

1. **Work-unit selection**
   - one tracked task at a time, with clear acceptance criteria.

2. **Verifier contract**
   - explicit command(s) that define baseline and post-change verification.

3. **Evaluator contract**
   - separate skeptical evaluation path with explicit pass/fail output.

4. **State artifacts**
   - durable plan/progress/evidence artifacts in repo.

5. **Closure semantics**
   - completion only when verification/evaluation/traceability/git-state closure conditions are met.

6. **Escalation semantics**
   - bounded retry loops and explicit blocked outcomes when confidence cannot be raised.

## Mapping to VibeGov controls

| Codex harness concern | VibeGov control |
| --- | --- |
| One scoped task loop | GOV-07 tasks + GOV-02 workflow |
| Baseline and post-change verification | GOV-05 testing + GOV-04 quality gate |
| Separate evaluator judgment | GOV-13 review loops + GOV-04 anti-fake-completion |
| Durable plan/progress artifacts | GOV-11 in-repo truth + GOV-09 continuity |
| Git state closure before move-on | GOV-10 state closure and git hygiene |
| Recurring cleanup and anti-slop | GOV-12 drift control |
| Blocked/retry/stop behavior | GOV-02 escalation and move-on behavior |

## Recommended Codex session pattern

For each work unit:

1. orient on issue/spec + current repo state
2. run baseline verifier
3. implement the scoped change only
4. run post-change verifier
5. run skeptical evaluator pass
6. apply fixes if needed (bounded retries)
7. close state (commit/revert/ignore/defer explicit accounting)
8. record evidence + follow-up artifacts

## Profile adoption checklist

When adopting this profile in a repo:

- define canonical verifier command(s)
- define evaluator output schema and fail conditions
- define plan/progress artifact locations and update rules
- define retry cap and blocked/escalation handoff path
- enforce git-state closure at work-unit boundaries
- require evidence links in issue/PR checkpoints

## Common failure modes

Avoid these:
- letting Codex self-grade as the only quality gate
- using chat memory as durable state instead of repo artifacts
- marking done on passing build alone
- carrying dirty-tree residue to the next work unit
- running unbounded retries without escalation

## Core vs adapter reminder

VibeGov core remains tool-agnostic.

This Codex profile is an adapter layer that helps teams implement the same governance controls in Codex-centered workflows.

## Related docs

- [Execution Modes](/docs/execution-modes)
- [Checkpoint Reporting](/docs/checkpoint-reporting)
- [Published GOV 02 Workflow](/docs/published/gov-02-workflow)
- [Published GOV 05 Testing](/docs/published/gov-05-testing)
- [Published GOV 09 Agent Continuity Bootstrap](/docs/published/gov-09-agent-continuity-bootstrap)
- [Published GOV 10 Agent State Closure and Git Hygiene](/docs/published/gov-10-agent-state-closure-git-hygiene)
- [Published GOV 11 Agent Legibility and In-Repo Truth](/docs/published/gov-11-agent-legibility-in-repo-truth)
- [Published GOV 12 Drift Control and Garbage Collection](/docs/published/gov-12-drift-control-garbage-collection)
- [Published GOV 13 Review Loops and Completion Discipline](/docs/published/gov-13-review-loops-completion-discipline)
