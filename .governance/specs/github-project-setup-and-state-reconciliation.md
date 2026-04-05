# GitHub Project Setup and State Reconciliation

## Intent
Make GitHub project setup during bootstrap explicit enough that real bootstrap/update runs can complete without ambiguous board selection, duplicate-board drift, stale reporting, or half-configured GitHub state. This matters because GitHub-hosted bootstrap is stateful and mutation-heavy, and weak sequencing or weak reporting causes retries, confusion, and false completion claims.

## Scope
In scope:
- explicit GitHub preflight before any board action
- explicit board phases and ordering: adopt/create then normalize
- canonical board selection when multiple matching boards exist
- duplicate empty-board cleanup behavior
- repo-to-board linking as a completion requirement
- built-in `Status` normalization guidance
- early `AGENTS.md` creation during bootstrap
- explicit `develop` branch expectation guidance
- final live-state reconciliation after GitHub mutations
- distinguishing historical evidence from current state in bootstrap reports/docs

Out of scope:
- automating GitHub rulesets or protections directly
- non-GitHub board providers
- changing the non-bootstrap delivery workflow

## Acceptance Criteria
- `GH-SETUP-001` Bootstrap docs require GitHub auth, repo access, project read access, and project write access before any board mutation.
- `GH-SETUP-002` Bootstrap docs define board phases in order: adopt/create, then normalize.
- `GH-SETUP-003` Bootstrap docs define how to choose one canonical board when multiple matching boards exist.
- `GH-SETUP-004` Bootstrap docs define duplicate empty-board cleanup behavior explicitly.
- `GH-SETUP-005` Bootstrap docs require repo-to-board linking before bootstrap is complete.
- `GH-SETUP-006` Bootstrap docs define built-in `Status` normalization in place.
- `GH-SETUP-007` Bootstrap docs require `AGENTS.md` early as part of initial bootstrap, not only as remediation.
- `GH-SETUP-008` Bootstrap docs state whether `develop` must be created locally during bootstrap and whether remote/protection expectations should be reported separately.
- `GH-SETUP-009` Bootstrap docs require a final live-state reconciliation pass and distinguish current state from historical evidence.
- `GH-SETUP-010` `npm run build` succeeds after the updates.

## Tests and Evidence
- inspect `docs/github-project-bootstrap.md`
- inspect `docs/bootstrap.md`
- inspect `static/agent.txt`
- inspect `static/bootstrap.json`
- inspect relevant FAQ/bootstrap docs
- run `npm run build`

## Verification
Verification is documentation-driven. Success requires GitHub bootstrap behavior to be explicit enough that a bootstrap run can determine one canonical board target, normalize it, link the repo, report current state accurately, and distinguish repaired history from final live state.
