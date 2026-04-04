# Bootstrap Completion Contract

## Intent
Make VibeGov bootstrap less ambiguous and more durable by defining what bootstrap must know, install, report, and resolve before it can be considered complete.

## Scope
In scope:
- define bootstrap completion requirements
- define minimum product-brief expectations or explicit bootstrap-spec fallback
- define GitHub board selection/adoption/ambiguity rules
- define explicit GitHub auth scope expectations
- define built-in Status field mutation guidance
- define no-issues fallback behavior
- define `develop` branch creation/push/documentation expectations
- define bootstrap end-state reporting (commit/PR/local-only)
- provide a reusable stricter bootstrap prompt/template

Out of scope:
- full implementation of every GitHub automation branch path
- destructive duplicate-board cleanup during bootstrap

## Acceptance Criteria
- `BOOT-COMP-001` Bootstrap explicitly requires either a minimal product brief or an explicit bootstrap-spec fallback.
- `BOOT-COMP-002` Bootstrap explicitly defines how to create, adopt, or refuse to guess between multiple candidate GitHub boards.
- `BOOT-COMP-003` Bootstrap explicitly requires `repo`, `read:org`, `read:project`, and `project` capabilities when GitHub board automation is expected.
- `BOOT-COMP-004` Bootstrap explicitly documents the no-issues fallback (create/adopt the board and leave it empty).
- `BOOT-COMP-005` Bootstrap explicitly defines how `develop` should be treated when using the strict branch model.
- `BOOT-COMP-006` Bootstrap explicitly reports whether it ends in local-only state, commit state, or PR state.
- `BOOT-COMP-007` A reusable stricter bootstrap prompt/template exists.
- `BOOT-COMP-008` `npm run build` succeeds after the changes.
