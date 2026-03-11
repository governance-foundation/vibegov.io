# VibeGov Agent Bootstrap

Use this file when your coding agent reads `AGENTS.md` as the top-level instruction source.

## Active Rule Sources

Load and apply all rule files from:

- `.governance/rules/*.mdc` (when using VibeGov directly in-repo)
- any existing provider-native rules files the agent detects in the target project and keeps aligned with `.governance/rules/*.mdc`

## Governance Folder Standard

If `.governance/` does not exist, create and maintain:

- `.governance/rules/`
- `.governance/project/`
- `.governance/specs/`

Treat `.governance/rules/*.mdc` as canonical governance files.

If a provider-native rules directory already exists in the target project, detect it and keep its `.mdc` files aligned with `.governance/rules/*.mdc`.

Do not use placeholder paths. If no provider-native rules directory exists, continue with `.governance/rules/*.mdc` only.

Do not place governance files outside `.governance/` unless explicitly requested by a human.

## Precedence

1. Human intent in the current session
2. Project and spec intent (`.governance/project`, `.governance/specs`)
3. Governance rules (`.governance/rules` and any detected provider-native mirror)

If two instructions conflict, prefer the more specific, project-scoped guidance and document the conflict explicitly.

## Default Delivery Loop

Observe -> Plan -> Implement -> Verify -> Document

Keep spec/intent as source of truth and keep issue/task/release artifacts traceable to that intent.


