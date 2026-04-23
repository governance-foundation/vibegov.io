# Testing and Completeness Document Discoverability

## Intent
Make the testing and completeness support docs easier to find through the normal operational VibeGov path. This matters because `docs/test-execution-expectations.md` and `docs/quality-scaffolding-and-completeness-rubric.md` contain practical operator guidance, but today they are discovered mostly through deeper release/testing pages rather than through the main operational structure.

## Scope
In scope:
- improve discoverability of `docs/test-execution-expectations.md` and `docs/quality-scaffolding-and-completeness-rubric.md`
- expose these docs intentionally in the sidebar/navigation
- strengthen links from operational/testing/reference pages where readers naturally need them
- ensure the support docs link back into the surrounding operational path

Out of scope:
- rewriting the underlying testing/completeness doctrine
- changing the substantive release/test/quality contracts beyond discoverability and navigation
- broad restructuring of all operational docs

## Acceptance Criteria
- `TEST-DISC-001` Readers can discover `docs/test-execution-expectations.md` and `docs/quality-scaffolding-and-completeness-rubric.md` through the normal operational docs path rather than only through deep release-prep links.
- `TEST-DISC-002` Sidebar/navigation exposes testing/completeness support docs intentionally.
- `TEST-DISC-003` `docs/bootstrap-validation.md`, `docs/workflow-quality-rubric.md`, and `docs/release-artifact-and-test-prep.md` route readers to the relevant support docs more clearly where those ideas first matter.
- `TEST-DISC-004` The support docs link back into the surrounding operational/testing path.
- `TEST-DISC-005` `npm run build` succeeds after the updates.

## Tests and Evidence
- inspect `docs/test-execution-expectations.md`
- inspect `docs/quality-scaffolding-and-completeness-rubric.md`
- inspect `docs/bootstrap-validation.md`
- inspect `docs/workflow-quality-rubric.md`
- inspect `docs/release-artifact-and-test-prep.md`
- inspect `sidebars.js`
- run `npm run build`

## Documentation Impact
- update `docs/test-execution-expectations.md`
- update `docs/quality-scaffolding-and-completeness-rubric.md`
- update `docs/bootstrap-validation.md`
- update `docs/workflow-quality-rubric.md`
- update `docs/release-artifact-and-test-prep.md`
- update `sidebars.js`
