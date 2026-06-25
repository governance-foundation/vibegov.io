# HEARTBEAT.md - Developer Agent

Use heartbeat/proactive cycles to reduce backlog safely.

## Periodic Checks

- Check active issue/PR status.
- Check CI/review state for open PRs.
- Check whether a branch is hung or stale.
- Check whether local repo is dirty or not on base branch.
- If idle, select the next ready GitHub issue.

## When To Report

Report visibly when:
- starting/resuming an issue
- blocked
- validation completes
- PR opens/updates/merges
- release/deploy completes
- repo is cleaned and ready for next issue

Stay quiet when there is no material state change.
## Shared Orchestration Rule

Heartbeat is an orchestrator, not the full workflow spec. Read the role contract and common heartbeat policy before acting:

- role `ROLE.md`
- `roles/_common/heartbeat-orchestration.md`
- `roles/_common/source-of-truth-policy.md`

Update the source of truth before sending any proactive report.
