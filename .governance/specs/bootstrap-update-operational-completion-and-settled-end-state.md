# Bootstrap Update Operational Completion and Settled End State

## Intent
Make `bootstrap update` explicitly responsible for repairing a partially bootstrapped repo all the way to an operationally complete state, or leaving explicit blockers plus a settled end state. This matters because a repo can look improved without actually being bootstrap-complete, especially when workflow artifacts, GitHub state, or durable status artifacts are still missing.

## Scope
In scope:
- tighten `bootstrap update` wording to repair missing operational bootstrap artifacts, not just scaffold gaps
- require explicit settled end-state classification for local repo state
- require status/blocker artifact emission when update cannot complete all gaps
- make clear that GitHub/project setup gaps must be fixed or left as explicit blockers with exact next actions

Out of scope:
- changing the canonical bootstrap pass gate itself
- automating git push/PR behavior beyond documenting the required end-state classification

## Acceptance Criteria
- `BU-OPER-001` `bootstrap update` docs explicitly say update must repair missing operational bootstrap artifacts until the canonical contract is satisfied.
- `BU-OPER-002` `bootstrap update` docs define a settled end state for local repo changes such as committed/pushed, pending-review, or blocked.
- `BU-OPER-003` `bootstrap update` docs explicitly require status/blocker artifacts when update cannot complete all gaps.
- `BU-OPER-004` Canonical bootstrap docs reflect the same stronger update semantics.
- `BU-OPER-005` `npm run build` succeeds after the updates.

## Tests and Evidence
- inspect `docs/bootstrap-update.md`
- inspect `docs/bootstrap.md`
- run `npm run build`
