# OpenSpec Rules (Use Immediately)

These are the default rules when VibeGov runs in OpenSpec-first mode.

## 1) Source of truth
- Requirements live in `openspec/specs/*`
- Active change deltas in `openspec/changes/*`
- Migration/ops notes in `openspec/migration/*`

## 2) Executable requirements
Every requirement must be testable:
- concrete preconditions
- explicit outcomes (status/payload/state transition)

## 3) ID discipline
- deterministic IDs per capability
- append-only
- no ID reuse

## 4) Traceability
- map requirement IDs to test evidence
- do not mark implemented without executable proof

## 5) E2E-first for user-facing behavior
- write/extend E2E first
- implement to green
- keep API/unit tests as supporting proof

## 6) Validation gates
- run relevant tests
- run `openspec validate --all`
- fail closed on missing proof for claimed completion

## 7) Codebase insolvency signals

Delivery progress is measured by verified requirement movement, not tokens consumed, lines changed, files touched, commits produced, or tests generated.

Treat these as insolvency signals when they recur:
- the same material failure returns across mutation attempts without a narrower hypothesis or new evidence
- required global or integration gates regress while local surrogate checks remain green
- protected acceptance evidence is weakened to match implementation output
- duplicated utilities, defensive branches, swallowed errors, or unnecessary abstractions expand without verified behavior
- scope or architectural boundaries expand while requirement coverage remains unchanged

No percentage-based budget threshold applies unless the project explicitly defines the budget, unit, owner, and measurement source.

## 8) Circuit-breaker evidence

When the execution circuit breaker trips, preserve the last verified checkpoint and record the baseline, stable failure signature, attempts, regressions, affected boundaries, recovery options, and resume conditions. Do not mark the requirement implemented while protected evidence is failing.

