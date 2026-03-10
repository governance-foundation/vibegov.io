---
sidebar_position: 2
---

# Bootstrap

Copy this as message 1 in any coding agent.

```text
Bootstrap this repo with vibegov.
Read and follow:
- https://governance-foundation.github.io/vibegov.io/agent.txt
- https://governance-foundation.github.io/vibegov.io/bootstrap.json

Before writing any product code, create .governance/rules/, .governance/project/PROJECT_INTENT.md, .governance/specs/SPEC-001-<feature>.md, and a spec-mapped backlog. Then stop.

Active governance set must include GOV-01 through GOV-08.
```

## Governance Rules Navigation

- [GOV-01: Instructions](/docs/published/gov-01-instructions)
- [GOV-02: Workflow](/docs/published/gov-02-workflow)
- [GOV-03: Communication](/docs/published/gov-03-communication)
- [GOV-04: Quality](/docs/published/gov-04-quality)
- [GOV-05: Testing](/docs/published/gov-05-testing)
- [GOV-06: Issues](/docs/published/gov-06-issues)
- [GOV-07: Tasks](/docs/published/gov-07-tasks)
- [GOV-08: Exploratory Review](/docs/published/gov-08-exploratory-review)

## Pass Gate #1

Continue only if all are true:

- `.governance/rules/` exists
- `.governance/project/PROJECT_INTENT.md` exists
- `.governance/specs/SPEC-001-<feature>.md` exists
- backlog maps to spec sections
- no product code yet

If any fail, rerun the same prompt.

