# Bootstrap Reporting: Current Surface and Historical Run Bundles

## Intent
Make bootstrap reporting look like intentional reporting instead of a flat pile of singleton files and timestamped leftovers. Bootstrap should clearly separate current reporting from historical run bundles so BU/BI/BR outputs are legible, durable, and easier to settle without manual interpretation.

## Scope
In scope:
- `BOOT-REP-001` define a dedicated current bootstrap reporting surface
- `BOOT-REP-002` define a dedicated historical bootstrap reporting surface
- `BOOT-REP-003` use one folder per historical run bundle instead of only flat timestamped filenames
- `BOOT-REP-004` describe what artifacts belong in the current surface vs history
- `BOOT-REP-005` describe migration guidance from the older flat layout
- `BOOT-REP-006` tighten BU wording around settled reporting artifacts and end-state classification
- `BOOT-REP-007` update public docs, machine-readable sources, and governed workflow wording to match

Out of scope:
- a mandatory automatic pruning/retention engine
- non-bootstrap reporting structures
- binary report packaging
- changing core GitHub board/bootstrap semantics beyond reporting layout and settled artifact guidance

## Acceptance Criteria
- `BOOT-REP-001` Canonical bootstrap docs define `.governance/project/bootstrap/` as the current reporting surface.
- `BOOT-REP-002` Canonical bootstrap docs define `.governance/project/bootstrap/history/<timestamp>/` as the historical run-bundle surface.
- `BOOT-REP-003` Expected current artifacts are documented as `STATUS.md`, `ANALYSIS.md`, `FEEDBACK.md`, and optional `BLOCKERS.md` under `.governance/project/bootstrap/`.
- `BOOT-REP-004` Expected per-run historical artifacts are documented as `status.md`, `analysis.md`, `feedback.md`, and optional `blockers.md` under `.governance/project/bootstrap/history/<timestamp>/`.
- `BOOT-REP-005` Migration guidance exists for repos still using flat `BOOTSTRAP_*` and `bootstrap-runs/<timestamp>-*.md` layouts.
- `BOOT-REP-006` BU wording makes current-vs-history reporting and settled end-state behavior easier to understand.
- `BOOT-REP-007` Machine-readable bootstrap sources reflect the same reporting structure.
- `BOOT-REP-008` Governed workflow wording still requires durable bootstrap reporting artifacts and matches the new structure.
- `BOOT-REP-009` `npm run build` succeeds after the doc/rule/spec changes.

## Tests and Evidence
- inspect `static/agent.txt`
- inspect `static/bootstrap.json`
- inspect `docs/bootstrap.md`
- inspect `docs/bootstrap-update.md`
- inspect `docs/bootstrap-review.md`
- inspect `docs/bootstrap-feedback-prompt.md`
- inspect `docs/quickstart.md`
- inspect `docs/contribute.md`
- inspect `docs/faq/when-do-i-use-the-feedback-prompt.md`
- inspect `docs/agents-template.md`
- inspect `.governance/rules/gov-02-workflow.mdc`
- inspect `docs/published/gov-02-workflow.md`
- run `npm run build`

## Documentation Impact
- add `.governance/specs/bootstrap-reporting-current-vs-history.md`
- update `static/agent.txt`
- update `static/bootstrap.json`
- update `docs/bootstrap.md`
- update `docs/bootstrap-update.md`
- update `docs/bootstrap-review.md`
- update `docs/bootstrap-feedback-prompt.md`
- update `docs/quickstart.md`
- update `docs/contribute.md`
- update `docs/faq/when-do-i-use-the-feedback-prompt.md`
- update `docs/agents-template.md`
- update `.governance/rules/gov-02-workflow.mdc`
- update `docs/published/gov-02-workflow.md`

## Verification
Verification is documentation-driven. Success requires the public bootstrap docs, machine-readable bootstrap sources, and governed workflow wording to consistently describe current bootstrap reporting vs historical run bundles, plus a successful site build.

## Change Notes
- Prefer one directory per historical run so status/analysis/feedback/blockers stay grouped as a bundle.
- Keep the current reporting surface small and obvious.
- Make migration guidance explicit so older repo layouts are still understandable during transition.
