# Maintainer Role Manifest

## Purpose

Maintainer / Release Manager role pack for repo hygiene, branch closure, changelogs, versioning, releases, and deploy readiness.

## Install Order

1. Read `BOOTSTRAP.md`.
2. Read common role policy files from `roles/_common/`.
3. Read `ROLE.md`.
4. Merge files from `files/` into the workspace.
5. Apply only relevant overlays from `overlays/`.
6. Produce the required bootstrap report.

## Common Files

- `roles/_common/BOOTSTRAP-CHECKLIST.md`
- `roles/_common/source-of-truth-policy.md`
- `roles/_common/authority-and-escalation.md`
- `roles/_common/heartbeat-orchestration.md`
- `roles/_common/INSTALL-CHECKLIST.md`
- `roles/_common/squad-operating-model.md`

## Files

- `files/AGENTS.md` -> `AGENTS.md`
- `files/SOUL.md` -> `SOUL.md`
- `files/TOOLS.md` -> `TOOLS.md`
- `files/IDENTITY.md` -> `IDENTITY.md`
- `files/USER.md` -> `USER.md`
- `files/HEARTBEAT.md` -> `HEARTBEAT.md`
- `files/MEMORY.md` -> `MEMORY.md`

## Overlays

- `overlays/branch-hygiene.md`
- `overlays/release-readiness.md`
- `overlays/changelog-versioning.md`
- `overlays/dependency-maintenance.md`
- `overlays/stale-work-cleanup.md`

## Quality Bar

The role is installed only when the manifest parses, all listed files exist, common references resolve, and the bootstrap report states what changed and what remains blocked.
