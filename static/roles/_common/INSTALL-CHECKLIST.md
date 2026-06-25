# Role Install Checklist

The role install is not complete until every applicable item below passes.

## Common Files

- [ ] `roles/_common/BOOTSTRAP-CHECKLIST.md` exists
- [ ] `roles/_common/source-of-truth-policy.md` exists
- [ ] `roles/_common/authority-and-escalation.md` exists
- [ ] `roles/_common/heartbeat-orchestration.md` exists
- [ ] `roles/_common/role.manifest.schema.json` exists

## Role Files

- [ ] role `BOOTSTRAP.md` exists
- [ ] role `ROLE.md` exists
- [ ] role `MANIFEST.md` exists
- [ ] role machine manifest exists and parses as JSON
- [ ] required workspace templates exist:
  - [ ] `AGENTS.md`
  - [ ] `SOUL.md`
  - [ ] `TOOLS.md`
  - [ ] `IDENTITY.md`
  - [ ] `USER.md`
  - [ ] `HEARTBEAT.md`
  - [ ] `MEMORY.md`

## Behavior

- [ ] role states GitHub/source-of-truth behavior
- [ ] role states authority/escalation boundary
- [ ] role heartbeat is an orchestrator, not a duplicate workflow spec
- [ ] role has bootstrap report requirements
- [ ] role preserves local/project-specific facts during merge

## Project Readiness

- [ ] GitHub access checked
- [ ] source-of-truth locations identified
- [ ] first action/issue/target identified
- [ ] blockers listed clearly
