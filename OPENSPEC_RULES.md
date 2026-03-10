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

