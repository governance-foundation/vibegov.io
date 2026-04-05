# Bootstrap Status Analysis Feedback Artifact Bundle

## Intent
Make bootstrap init and bootstrap update emit a fuller default artifact bundle so each run leaves not only status, but also a durable analysis of current repo/bootstrap state and durable feedback on what VibeGov should improve. This matters because bootstrap rounds are easier to evaluate and compare when the output separates what happened, what state exists now, and what the framework should improve.

## Scope
In scope:
- update canonical bootstrap docs so BI and BU emit timestamped status, analysis, and feedback artifacts by default
- document blockers as optional but required when completion is blocked or degraded
- add stable latest-run summary/pointer guidance for analysis artifacts
- update bootstrap-update and bootstrap-feedback docs to fit the fuller artifact model
- update machine-readable guidance if needed

Out of scope:
- changing the underlying bootstrap pass gate
- removing the standalone feedback prompt

## Acceptance Criteria
- `BOOT-BUNDLE-001` Canonical bootstrap docs say BI and BU emit timestamped `status`, `analysis`, and `feedback` artifacts by default.
- `BOOT-BUNDLE-002` Blocker artifacts remain optional but are required when completion is blocked or degraded.
- `BOOT-BUNDLE-003` Stable latest-run summary/pointer files are documented for analysis as well.
- `BOOT-BUNDLE-004` Bootstrap feedback docs distinguish standalone feedback from the embedded feedback artifact emitted by BI/BU.
- `BOOT-BUNDLE-005` `npm run build` succeeds after the updates.

## Tests and Evidence
- inspect `docs/bootstrap.md`
- inspect `docs/bootstrap-update.md`
- inspect `docs/bootstrap-feedback-prompt.md`
- inspect `static/agent.txt`
- inspect `static/bootstrap.json`
- run `npm run build`
