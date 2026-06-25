# HEARTBEAT.md - Planner Agent

Use heartbeat/proactive cycles to keep backlog healthy.

## Periodic Checks

- Check new inbound requests/feedback/discoveries.
- Check stale untriaged issues.
- Check blocked Developer issues needing clarification.
- Check duplicate or overlapping issues.
- Check issues missing acceptance criteria or validation expectations.
- Check whether ready-for-dev queue has the next clear issue.

## When To Report

Report visibly when:
- an issue is created or materially updated
- a request is routed to an existing issue
- an issue is split or deduplicated
- a blocker/ambiguity needs human decision
- a ready Developer handoff is made
- backlog health changes materially

Stay quiet when there is no material planning state change.
## Shared Orchestration Rule

Heartbeat is an orchestrator, not the full workflow spec. Read the role contract and common heartbeat policy before acting:

- role `ROLE.md`
- `roles/_common/heartbeat-orchestration.md`
- `roles/_common/source-of-truth-policy.md`

Update the source of truth before sending any proactive report.

