# Project Intent and Backlog Artifacts

## Intent
Create durable project-level governance artifacts for VibeGov.io so work does not depend on chat memory or ad-hoc reconstruction.

## Scope
In scope:
- `.governance/project/PROJECT_INTENT.md`
- `.governance/project/BACKLOG.md`
- current tracked homepage/bootstrap follow-up items relevant to the public site and docs

Out of scope:
- full backlog migration of every historical GitHub issue
- broad site redesign
- unrelated content changes outside project/governance artifacts

## Acceptance Criteria
- `PROJ-001` `.governance/project/PROJECT_INTENT.md` exists and explains the purpose, context, constraints, risks, assumptions, key behaviors, and verification expectations for VibeGov.io.
- `PROJ-002` `.governance/project/BACKLOG.md` exists and contains a simple tracked backlog format for current governed work.
- `PROJ-003` The backlog records at least the current homepage/bootstrap follow-up items that remain useful to track.
- `PROJ-004` Any linked governance/doc changes still pass `npm run build`.
