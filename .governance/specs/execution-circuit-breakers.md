# Spec: Execution circuit breakers and codebase insolvency safeguards

## Goal

Prevent autonomous implementation loops from converting repeated failure into expanding diffs, weakened tests, architectural drift, and false completion.

## Requirements

- `ECB-001` Mutation-heavy autonomous work records a baseline sufficient to separate introduced regressions from pre-existing failures.
- `ECB-002` Equivalent repeated failures are classified by stable failure signature rather than raw turn count or wording.
- `ECB-003` Three consecutive mutations against the same failure class trigger scoped blocking when they produce no material evidence progress.
- `ECB-004` Protected acceptance evidence cannot be weakened to make an implementation pass without an explicit requirement change, justification, and separate review.
- `ECB-005` A circuit break stops only the affected work unit unless the blocker removes all viable work.
- `ECB-006` Circuit breaking preserves the last verified checkpoint and useful diagnostic context.
- `ECB-007` A blocked work unit emits a durable incident artifact containing its baseline, attempts, failure signature, regressions, boundaries, checkpoint, recovery options, and resume conditions.
- `ECB-008` Resumption requires materially new evidence, constraints, scope, dependency state, or implementation strategy.
- `ECB-009` Architecture escalation is required for system boundaries, global state, persistence semantics, public contracts, trust boundaries, irreversible migrations, and material architectural replacement.
- `ECB-010` Routine implementation and internal refactoring remain autonomous inside approved boundaries.
- `ECB-011` Canonical and published governance rules remain aligned.
- `ECB-012` Public guidance explains the failure pattern without presenting token use, commit count, or lines changed as delivery progress.

## Non-goals

- treating every failure as architectural insolvency
- imposing one token budget across runtimes that cannot measure tokens consistently
- requiring human approval for routine implementation choices
- deleting history or diagnostic evidence when a loop is blocked
- prescribing one universal test command for every repository

## Verification

- canonical rules contain the baseline, circuit-breaker, protected-evidence, recovery, and architecture-boundary controls
- published rule pages contain the same normative text
- the incident template represents every required evidence field
- the follow-up article accurately reflects the implemented controls
- the site build passes
