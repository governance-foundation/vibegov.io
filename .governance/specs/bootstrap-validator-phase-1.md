# Bootstrap Validator Phase 1

## Intent
Build the first runnable VibeGov bootstrap-validator harness so bootstrap behavior can be exercised locally with deterministic evidence. Phase 1 must be useful today for bootstrap-only scenarios without pulling in a new toolchain.

## Scope
In scope:
- `BV-P1-001` runnable CommonJS CLI entrypoint under `.internal/bootstrap-validator/`
- `BV-P1-002` declarative scenario loading from `.internal/bootstrap-validator/scenarios/`
- `BV-P1-003` fixture preparation and reset into a temporary working directory
- `BV-P1-004` pre/post manifest capture and categorized filesystem diff output
- `BV-P1-005` local stub agent adapter that can execute bootstrap-only scenario flows deterministically
- `BV-P1-006` core assertion engine for bootstrap-only checks
- `BV-P1-007` result JSON plus evidence bundle output under `.internal/bootstrap-validator/reports/`
- `BV-P1-008` npm scripts and internal run documentation

Out of scope:
- real external provider execution
- multi-provider orchestration
- non-bootstrap scenario behavior beyond placeholder declarations
- dashboards, HTML reporting, or advanced schema validation

## Acceptance Criteria
- `BV-P1-001` `npm run bootstrap-validator -- --scenario empty-repo-bootstrap` executes successfully from the repo root.
- `BV-P1-002` the runner can load at least one named scenario JSON file and one named suite JSON file.
- `BV-P1-003` each run starts from a clean copied fixture rather than mutating the source fixture in place.
- `BV-P1-004` each run emits manifest-before, manifest-after, and diff artifacts.
- `BV-P1-005` the local stub adapter can complete `empty-repo-bootstrap` and `bootstrap-gate`.
- `BV-P1-006` assertions cover governance directories, rule set presence, project intent creation, first spec creation, product-code protection, governance source reporting, and bootstrap stop declaration.
- `BV-P1-007` each run writes a normalized result object and transcript/evidence files below `.internal/bootstrap-validator/reports/`.
- `BV-P1-008` execution steps are documented in `.internal/bootstrap-validator/README.md`.

## Tests and Evidence
- `npm run bootstrap-validator -- --scenario empty-repo-bootstrap`
- `npm run bootstrap-validator -- --scenario bootstrap-gate`
- `npm run bootstrap-validator -- --suite phase1`
- `npm run typecheck`

## Documentation Impact
- update `.internal/bootstrap-validator/README.md`
- add inline README updates only inside `.internal/bootstrap-validator/` when needed

## Verification
Verification is command-driven. A successful phase-1 change must leave a concrete report directory under `.internal/bootstrap-validator/reports/` for each executed scenario and must show passing assertion results for the supported bootstrap scenarios.

## Change Notes
- Keep implementation assets under `.internal/bootstrap-validator/`.
- Prefer plain Node/CommonJS JavaScript and built-in modules.
- Preserve the existing public docs as reference material; do not move them.
