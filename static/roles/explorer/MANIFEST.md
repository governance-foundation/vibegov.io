# Explorer Role Manifest

This manifest describes the role pack contents and install expectations. A machine-readable JSON version is available as `explorer.manifest.json`.


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
- `ROLE.md` — durable explorer role contract.
- `MANIFEST.md` — human-readable manifest/checklist.
- `explorer.manifest.json` — machine-readable manifest for web/bootstrap clients.
- `files/AGENTS.md` — operational law template.
- `files/SOUL.md` — role tone/persona template.
- `files/TOOLS.md` — local environment/browser/source notes template.
- `files/IDENTITY.md` — role identity template.
- `files/USER.md` — stakeholder/project context template.
- `files/HEARTBEAT.md` — proactive exploration/check template.
- `files/MEMORY.md` — initial durable memory template.

## Optional Overlays

- `overlays/existing-repo-init.md`
- `overlays/fresh-bootstrap.md`
- `overlays/recovery-update.md`
- `overlays/ui-route-exploration.md`
- `overlays/api-contract-exploration.md`
- `overlays/github-findings.md`

## Install Rules

- Create missing files.
- Merge with existing files when local content exists.
- Never overwrite `MEMORY.md`, `USER.md`, or `TOOLS.md` without preserving local facts.
- Project-specific `AGENTS.md` rules override generic role defaults unless unsafe or impossible.
- Always produce a bootstrap report.

## Verification Checklist

- [ ] Role files exist.
- [ ] GitHub source of truth discovered.
- [ ] Exploration target identified.
- [ ] Runtime/auth/browser constraints identified.
- [ ] Existing issues/specs/reports checked.
- [ ] Finding/report convention identified or proposed.

