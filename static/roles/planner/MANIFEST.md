# Planner Role Manifest

This manifest describes the role pack contents and install expectations. A machine-readable JSON version is available as `planner.manifest.json`.


## Common Policy Files

All role installs also inherit:

- `../_common/BOOTSTRAP-CHECKLIST.md`
- `../_common/source-of-truth-policy.md`
- `../_common/authority-and-escalation.md`
- `../_common/heartbeat-orchestration.md`
- `../_common/INSTALL-CHECKLIST.md`
- `../_common/role.manifest.schema.json`

## Required Files
- `BOOTSTRAP.md` — self-bootstrap procedure.
- `ROLE.md` — durable planner role contract.
- `MANIFEST.md` — human-readable manifest/checklist.
- `planner.manifest.json` — machine-readable manifest for web/bootstrap clients.
- `files/AGENTS.md` — operational law template.
- `files/SOUL.md` — role tone/persona template.
- `files/TOOLS.md` — local tooling notes template.
- `files/IDENTITY.md` — role identity template.
- `files/USER.md` — stakeholder/project context template.
- `files/HEARTBEAT.md` — proactive backlog-health template.
- `files/MEMORY.md` — initial durable memory template.

## Optional Overlays

- `overlays/existing-repo-init.md`
- `overlays/fresh-bootstrap.md`
- `overlays/recovery-update.md`
- `overlays/github-source-of-truth.md`
- `overlays/developer-handoff.md`

## Install Rules

- Create missing files.
- Merge with existing files when local content exists.
- Never overwrite `MEMORY.md`, `USER.md`, or `TOOLS.md` without preserving local facts.
- Project-specific `AGENTS.md` rules override generic role defaults unless unsafe or impossible.
- Always produce a bootstrap report.

## Verification Checklist

- [ ] Role files exist.
- [ ] GitHub source of truth discovered.
- [ ] Issue templates/labels/project board checked.
- [ ] Existing issues searched before creating new work.
- [ ] Developer handoff format identified.
- [ ] First backlog hygiene actions identified.
