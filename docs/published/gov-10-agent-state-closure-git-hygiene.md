---
sidebar_position: 10
---

# GOV 10 AGENT STATE CLOSURE AND GIT HYGIENE

- Source rule: [gov-10-agent-state-closure-git-hygiene.mdc](https://github.com/governance-foundation/vibegov.io/blob/main/.governance/rules/gov-10-agent-state-closure-git-hygiene.mdc)
- Download raw file: [gov-10-agent-state-closure-git-hygiene.mdc](https://raw.githubusercontent.com/governance-foundation/vibegov.io/main/.governance/rules/gov-10-agent-state-closure-git-hygiene.mdc)

This page embeds the canonical rule text and adds commentary after each section to explain why the section exists.

## Governance: Agent State Closure and Git Hygiene

Agent work should end in explicit state, not residue.

Governed repositories should treat repository state as a control surface for agent reliability, reviewability, and recovery.

> Commentary: Makes repository state part of delivery correctness rather than an afterthought.

## Core Principle

- `GOV-10-GIT-001` Every substantive work unit must end with full working-tree accounting.
- `GOV-10-GIT-002` Agents must not carry ambiguous repository state into the next work unit.
- `GOV-10-GIT-003` Repository cleanliness is not cosmetic. It is part of execution correctness.

> Commentary: Defines the baseline expectation that repo state must be intentional before work can honestly move on.

## Working-Tree Accounting

- `GOV-10-GIT-004` Before a work unit is considered complete, blocked, deferred, or handed off, every modified, deleted, and untracked file in scope must be classified.
- `GOV-10-GIT-005` Allowed classifications are:
  - committed as intended governed change,
  - reverted because it is junk, noise, or failed experimentation,
  - ignored through an explicit ignore rule when the file is generated or intentionally untracked,
  - intentionally deferred with an explicit note that names the file, reason, and next follow-up path.
- `GOV-10-GIT-006` "I think this file is probably from earlier work" is not sufficient accounting.
- `GOV-10-GIT-007` If a file cannot be explained, the work unit is not yet closed.

> Commentary: Forces explicit file-by-file accounting so previous-turn residue cannot silently contaminate later work.

## Dirty-Tree Discipline

- `GOV-10-GIT-008` Agents must treat unresolved dirty state as actionable repository state, not passive background context.
- `GOV-10-GIT-009` In single-actor repos or isolated worktrees, unresolved dirty state should be presumed agent-caused until proven otherwise.
- `GOV-10-GIT-010` Reporting "tree is dirty" without classification, resolution intent, or follow-up path is non-compliant.
- `GOV-10-GIT-011` If prior residue is discovered while starting new work, the agent should either resolve it first or explicitly escalate why safe resolution cannot happen yet.

> Commentary: Prevents the common failure mode where agents report dirty state but leave the human to reason about it.

## Commit and Ignore Hygiene

- `GOV-10-GIT-012` Durable kept changes should normally be committed before the work unit ends so the intended state has a real tracking boundary.
- `GOV-10-GIT-013` Commits should be cohesive, reviewable, and limited to the intended governed change.
- `GOV-10-GIT-014` Generated or environment-specific noise that should persist locally but not be tracked must be handled through explicit ignore rules rather than repeated manual omission.
- `GOV-10-GIT-015` Ignore rules should be as narrow as practical so legitimate changes are not accidentally hidden.

> Commentary: Keeps git history meaningful while preventing recurring local noise from leaking across work units.

## Preserve Before Destructive Change

- `GOV-10-GIT-016` Meaningful state includes kept code, docs, specs, notes, captured investigation output, and generated artifacts that are intentionally being preserved as evidence or deliverable state.
- `GOV-10-GIT-017` Disposable cache, build output, or other reproducible noise is not meaningful state unless the current work unit explicitly depends on it as evidence or deliverable content.
- `GOV-10-GIT-018` Before deleting, overwriting, archiving, or otherwise destructively changing meaningful state, the agent should preserve that state in a traceable form when safe to do so, normally through a commit or another durable governed artifact.
- `GOV-10-GIT-019` If material is secret, unsafe, or otherwise inappropriate to preserve in normal history, the agent should use a separate safe-handling path and record the exception explicitly instead of silently discarding context.
- `GOV-10-GIT-020` Cleanup, rollback, and archival actions must not silently erase why a change existed, what was learned, or what state is being retired.
- `GOV-10-GIT-021` If old behavior or prior content needs to return, it should come back through a new traceable change rather than hidden history surgery or convenience-driven destructive rollback.
- `GOV-10-GIT-022` This preservation rule does not require noisy micro-commits for trivial or disposable edits, but it does require a deliberate preservation boundary before meaningful destructive change.

> Commentary: Makes destructive actions reviewable and recoverable by requiring preservation before erasure, while keeping safe exceptions and disposable noise separate.

## Completion and Handoff Rules

- `GOV-10-GIT-023` Completion claims are invalid if the repository state that remains is unexplained.
- `GOV-10-GIT-024` A blocked or deferred work unit must still leave the repository in a classified state, even when implementation is incomplete.
- `GOV-10-GIT-025` Handoff artifacts should state any intentionally deferred files or branches explicitly rather than relying on a future reader to infer them from git status.

> Commentary: Extends state-closure discipline beyond successful completion into blockers, deferrals, and handoffs.

## Anti-Patterns

Avoid these failure modes:
- letting partial experiments silently roll into later commits
- deleting or overwriting meaningful state before it has a traceable preservation boundary
- treating untracked temp files as harmless background clutter
- leaving generated noise unignored across repeated runs
- carrying mixed unrelated diffs across work units
- using dirty state as a substitute for real tracking
- using cleanup, archival, or rollback to erase rationale instead of preserving it

> Commentary: Names the residue patterns this rule is designed to eliminate.
