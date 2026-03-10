# vibegov Agent Bootstrap

Use this file when your coding agent reads `AGENTS.md` as the top-level instruction source.

## Active Rule Sources

Load and apply all rule files from:

- `.cursor/rules/*.mdc` (if present in the target project)
- `.governance/rules/*.mdc` (when using vibegov directly in-repo)

## Governance Folder Standard

If `.governance/` does not exist, create and maintain:

- `.governance/rules/`
- `.governance/project/`
- `.governance/specs/`

Treat `.governance/rules/*.mdc` as canonical governance files.

If `.cursor/rules/` exists, keep `.cursor/rules/*.mdc` aligned with `.governance/rules/*.mdc`.

Do not place governance files outside `.governance/` unless explicitly requested by a human.

## Precedence

1. Human intent in the current session
2. Project and spec intent (`.governance/project`, `.governance/specs`)
3. Governance rules (`.governance/rules` or `.cursor/rules`)

If two instructions conflict, prefer the more specific, project-scoped guidance and document the conflict explicitly.

## Default Delivery Loop

Observe -> Plan -> Implement -> Verify -> Document

Keep spec/intent as source of truth and keep issue/task/release artifacts traceable to that intent.
