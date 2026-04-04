# Project Intent Artifact

## Intent
Keep a durable project-level intent artifact for VibeGov.io without introducing a second backlog source inside the repo.

## Scope
In scope:
- `.governance/project/PROJECT_INTENT.md`
- correction of the mistaken repo-local backlog artifact decision

Out of scope:
- repo-local backlog tracking for VibeGov
- full migration of GitHub backlog data into repo files

## Acceptance Criteria
- `PROJ-INTENT-001` `.governance/project/PROJECT_INTENT.md` exists and explains the project purpose, context, constraints, risks, assumptions, key behaviors, and verification expectations.
- `PROJ-INTENT-002` `.governance/project/BACKLOG.md` is not used as a canonical backlog artifact for VibeGov.
- `PROJ-INTENT-003` VibeGov continues to use GitHub issues/project as the canonical backlog surface.
