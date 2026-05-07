# Researcher Role Manifest

This manifest describes the role pack contents and install expectations. A machine-readable JSON version is available as `researcher.manifest.json`.


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
- `ROLE.md` — durable researcher role contract.
- `MANIFEST.md` — human-readable manifest/checklist.
- `researcher.manifest.json` — machine-readable manifest for web/bootstrap clients.
- `files/AGENTS.md` — operational law template.
- `files/SOUL.md` — role tone/persona template.
- `files/TOOLS.md` — local tooling/source notes template.
- `files/IDENTITY.md` — role identity template.
- `files/USER.md` — stakeholder/project context template.
- `files/HEARTBEAT.md` — proactive research/backlog-check template.
- `files/MEMORY.md` — initial durable memory template.

## Optional Overlays

- `overlays/existing-repo-init.md`
- `overlays/fresh-bootstrap.md`
- `overlays/recovery-update.md`
- `overlays/evidence-and-citations.md`
- `overlays/planner-developer-handoff.md`

## Install Rules

- Create missing files.
- Merge with existing files when local content exists.
- Never overwrite `MEMORY.md`, `USER.md`, or `TOOLS.md` without preserving local facts.
- Project-specific `AGENTS.md` rules override generic role defaults unless unsafe or impossible.
- Always produce a bootstrap report.

## Verification Checklist

- [ ] Role files exist.
- [ ] GitHub source of truth discovered.
- [ ] Existing research/docs checked.
- [ ] Citation/evidence conventions found or proposed.
- [ ] Research question or blocker recorded.
- [ ] Planner/Developer handoff convention identified.

