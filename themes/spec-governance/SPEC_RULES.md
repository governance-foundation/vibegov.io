# Spec Governance Rules

## 1) Executable requirements only
Every requirement must define:
- concrete preconditions,
- explicit outcomes (status/payload/state).

## 2) Stable ID discipline
- Deterministic IDs per capability.
- Append-only; no reuse/renumbering.

## 3) Source-of-truth boundaries
- Canonical: `openspec/specs/*`
- Active deltas: `openspec/changes/*`
- Migration notes: `openspec/migration/*`

## 4) Traceability required
Every requirement ID must map to test evidence.

## 5) E2E-first for user-facing behavior
No user-facing requirement is complete without E2E proof.

## 6) Validation gates
- Tests pass
- Traceability updated
- `openspec validate --all` passes

## 7) No silent drift
Behavior changes must update specs and traceability in the same wave.
