# Private Repo Branch Protection Warning

## Intent
Treat private-repository branch-protection verification limits as a documented warning/degraded verification note rather than a hard bootstrap blocker when the repo has otherwise been normalized correctly. This matters because some GitHub-hosted feature restrictions can prevent live branch-protection verification even when auth, board setup, repo linkage, and the rest of the bootstrap contract all succeed.

## Scope
In scope:
- update bootstrap docs
- update bootstrap-update docs
- update GitHub bootstrap docs
- clarify reporting expectations for hosted-feature verification limits on private repos

Out of scope:
- changing GitHub platform behavior
- removing the need to report exact evidence and next actions

## Acceptance Criteria
- `PRIV-PROT-001` Bootstrap docs distinguish hosted-feature verification limits from hard blockers.
- `PRIV-PROT-002` GitHub bootstrap docs say private-repo branch-protection verification limits can be recorded as warnings/degraded verification when the rest of normalization succeeds.
- `PRIV-PROT-003` Reporting guidance requires exact evidence and next action for the warning.
- `PRIV-PROT-004` `npm run build` succeeds after the updates.

## Tests and Evidence
- inspect `docs/bootstrap.md`
- inspect `docs/bootstrap-update.md`
- inspect `docs/github-project-bootstrap.md`
- run `npm run build`
