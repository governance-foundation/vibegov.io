---
sidebar_position: 12
---

# INIT-TODO.md

Use `INIT-TODO.md` as the durable setup/remediation scratchpad during bootstrap and major adoption/update work.

It is for things the agent discovered during setup that must be reported or resolved before bootstrap can be considered complete.

## Record here

- prerequisite check results
- exact missing capabilities
- exact remediation commands or next actions
- blockers that prevent completion
- pending GitHub setup steps
- anything that must be revisited before declaring bootstrap complete

## Example

```md
# INIT-TODO

## Preflight
- [x] `git` available
- [x] `gh` available
- [ ] GitHub project write access
  - Blocker: missing project write scope
  - Next action: run `gh auth refresh -s project`

## Bootstrap follow-up
- [ ] Link repo to canonical board after project write scope is restored
- [ ] Re-run bootstrap update in `update` mode after auth refresh
```

## Rule

If bootstrap depends on a missing prerequisite, record it in `INIT-TODO.md` with the exact remediation step instead of leaving the gap only in chat.
