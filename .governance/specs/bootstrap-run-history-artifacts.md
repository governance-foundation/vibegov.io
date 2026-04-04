# Bootstrap Run History Artifacts

## Intent
Preserve bootstrap evidence across repeated init, update, and review runs by writing bootstrap output artifacts into a timestamped run-history folder instead of relying only on singleton filenames. This matters because bootstrap is often iterative and stateful, and overwriting the prior status/feedback artifacts weakens reviewability, diffability, and audit history.

## Scope
In scope:
- define timestamped bootstrap run-history artifact paths
- define the expected status, feedback, and optional blockers files per run
- allow stable top-level summary files only as convenience pointers/summaries to the latest run
- update bootstrap, bootstrap-update, quickstart, feedback, contribute, FAQ, machine-readable bootstrap sources, and governed workflow wording accordingly

Out of scope:
- non-bootstrap run histories
- binary artifact storage or compression
- automatic pruning/retention policy for historical run artifacts

## Acceptance Criteria
- `BOOT-RUN-001` Bootstrap docs describe timestamped run-history artifacts under `.governance/project/bootstrap-runs/`.
- `BOOT-RUN-002` Machine-readable bootstrap sources (`agent.txt`, `bootstrap.json`) describe the timestamped run-history structure.
- `BOOT-RUN-003` The expected per-run artifacts include status and feedback files, with optional blockers files.
- `BOOT-RUN-004` Stable top-level files may remain only as latest-run summaries/pointers and are not the sole historical artifact source.
- `BOOT-RUN-005` Feedback guidance tells the agent to write the local feedback artifact into the timestamped run-history folder.
- `BOOT-RUN-006` Governed workflow wording reflects durable timestamped bootstrap artifacts.
- `BOOT-RUN-007` `npm run build` succeeds after the doc/rule/spec updates.

## Tests and Evidence
- inspect `static/agent.txt`
- inspect `static/bootstrap.json`
- inspect `docs/bootstrap.md`
- inspect `docs/bootstrap-update.md`
- inspect `docs/bootstrap-feedback-prompt.md`
- inspect `docs/quickstart.md`
- inspect `docs/contribute.md`
- inspect FAQ pages
- inspect `.governance/rules/gov-02-workflow.mdc`
- inspect `docs/published/gov-02-workflow.md`
- run `npm run build`

## Documentation Impact
- update `static/agent.txt`
- update `static/bootstrap.json`
- update `docs/bootstrap.md`
- update `docs/bootstrap-update.md`
- update `docs/bootstrap-feedback-prompt.md`
- update `docs/quickstart.md`
- update `docs/contribute.md`
- update `docs/faq/when-do-i-use-the-feedback-prompt.md`
- update `.governance/rules/gov-02-workflow.mdc`
- update `docs/published/gov-02-workflow.md`

## Verification
Verification is documentation-driven. Success requires the public bootstrap docs, machine-readable bootstrap sources, and governed workflow wording to consistently describe timestamped bootstrap run-history artifacts, plus a successful site build.

## Change Notes
- Prefer `.governance/project/bootstrap-runs/<timestamp>-*.md` over singleton bootstrap artifact files.
- Allow top-level summary files only as convenience pointers/summaries to the latest run.
