---
sidebar_position: 4
---

# Bootstrap Review

Use this when a repo already has some bootstrap state and you want to **audit it against the same canonical bootstrap contract** without pretending missing work was completed.

This is **not** a separate bootstrap contract.
It is the same contract from [Bootstrap](/docs/bootstrap), run in **`review` mode**.

When review work touches GitHub bootstrap behavior or durable prerequisite capture, use these support docs directly:
- [GitHub Project Bootstrap](/docs/github-project-bootstrap)
- [INIT-TODO.md](/docs/init-todo)

## Mode behavior

- `init` — create missing bootstrap state
- `update` — repair/normalize existing bootstrap state
- `review` — audit against the same contract, write findings, and do not claim missing work was completed

## Review prompt

```text
Run VibeGov bootstrap in `review` mode.
Read and follow:
- https://vibegov.io/agent.txt
- https://vibegov.io/bootstrap.json
- https://vibegov.io/docs/bootstrap/

Use the same canonical bootstrap contract and pass gate as bootstrap init/update.
Do not fork the contract.
Do not claim missing work was completed.

Review the repo against the canonical bootstrap contract.
Write current reporting artifacts under `.governance/project/bootstrap/` and a historical run bundle under `.governance/project/bootstrap/history/<timestamp>/`.
Report:
- what already satisfies the contract
- what is missing or weak
- what is blocked
- what exact next fixes are required
```

## Reporting shape

Review mode should use the same reporting structure as init/update:
- current reporting under `.governance/project/bootstrap/`
- historical run bundles under `.governance/project/bootstrap/history/<timestamp>/`

## Rule

If a repo fails bootstrap review, the next remediation pass should use **bootstrap update** against the same canonical contract.

## Related docs

- [Bootstrap](/docs/bootstrap)
- [Bootstrap Update](/docs/bootstrap-update)
- [GitHub Project Bootstrap](/docs/github-project-bootstrap)
- [INIT-TODO.md](/docs/init-todo)
- [Quick Start](/docs/quickstart)
