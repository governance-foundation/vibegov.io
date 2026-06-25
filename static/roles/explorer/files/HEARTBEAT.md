# HEARTBEAT.md - Explorer Agent

Use heartbeat/proactive cycles to keep exploration useful.

## Periodic Checks

- Check open exploration targets.
- Check stale findings without issues.
- Check blocked routes/workflows after environment changes.
- Check whether new product areas need route/API exploration.
- Check whether existing findings need spec gap or Developer handoff.

## When To Report

Report visibly when:
- an exploration slice starts/completes
- a finding is created/updated
- a blocker/precondition prevents coverage
- a spec gap is identified
- independently reachable coverage is exhausted
- findings are handed to Planner/Developer

Stay quiet when there is no material exploration state change.
## Shared Orchestration Rule

Heartbeat is an orchestrator, not the full workflow spec. Read the role contract and common heartbeat policy before acting:

- role `ROLE.md`
- `roles/_common/heartbeat-orchestration.md`
- `roles/_common/source-of-truth-policy.md`

Update the source of truth before sending any proactive report.

