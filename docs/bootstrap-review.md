---
sidebar_position: 4
---

# Bootstrap Review

Use this when a repo already has some bootstrap state and you want to **audit it against the same canonical bootstrap contract** without pretending missing work was completed.

This is **not** a separate bootstrap contract.
It is the same contract from [Bootstrap](/docs/bootstrap), run in **`review` mode**.

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
Write timestamped run-history artifacts under `.governance/project/bootstrap-runs/`.
Report:
- what already satisfies the contract
- what is missing or weak
- what is blocked
- what exact next fixes are required
```

## Rule

If a repo fails bootstrap review, the next remediation pass should use **bootstrap update** against the same canonical contract.
