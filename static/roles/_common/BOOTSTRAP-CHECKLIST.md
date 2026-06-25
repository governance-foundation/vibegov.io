# Role Pack Bootstrap Checklist

Use this checklist whenever installing or updating an agent role pack.

## Inputs

- [ ] Role selected: planner / developer / researcher / explorer / other
- [ ] Project/repo path or URL known
- [ ] GitHub owner/repo known or discoverable
- [ ] Owner/stakeholder known or marked unknown
- [ ] Init mode selected:
  - [ ] fresh-bootstrap
  - [ ] existing-repo-init
  - [ ] recovery-update

## Install / Merge

- [ ] Read role `BOOTSTRAP.md`
- [ ] Read role `ROLE.md`
- [ ] Read role `MANIFEST.md`
- [ ] Read `roles/_common/source-of-truth-policy.md`
- [ ] Read `roles/_common/authority-and-escalation.md`
- [ ] Read `roles/_common/heartbeat-orchestration.md`
- [ ] Create missing workspace md files
- [ ] Merge existing `AGENTS.md` without deleting project rules
- [ ] Preserve existing `MEMORY.md`, `USER.md`, and `TOOLS.md` facts
- [ ] Replace obvious placeholders or list them as blockers

## Project Discovery

- [ ] Inspect repo README/docs/specs/governance
- [ ] Inspect existing project `AGENTS.md` / role rules
- [ ] Inspect git remotes, branch, and status
- [ ] Inspect GitHub issues/PRs/project/labels/templates
- [ ] Identify canonical base branch
- [ ] Identify validation/test/build commands if relevant
- [ ] Identify browser/runtime/deploy constraints if relevant

## Source Of Truth

- [ ] GitHub backlog source confirmed or blocker recorded
- [ ] Repo docs/spec source confirmed or blocker recorded
- [ ] Live state file/source confirmed where applicable
- [ ] Role-specific handoff convention confirmed

## Final Bootstrap Report

Include:
- role
- init mode
- repo/project
- files created/updated/skipped
- source of truth found
- unknowns/blockers
- first recommended action
- whether the agent is ready to operate
