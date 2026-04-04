---
sidebar_position: 3
---

# Bootstrap Update

`bootstrap update` is **bootstrap run in `update` mode**.

It does **not** use a weaker or different contract.
Use the canonical bootstrap contract at [Bootstrap](/docs/bootstrap).

## Update behavior

- preserve valid existing artifacts
- repair stale, missing, contradictory, or weak artifacts
- keep the same pass gate as `init`
- if the repo still fails the contract, report exact blockers/gaps instead of claiming partial completion

## Update prompt

```text
Run VibeGov bootstrap in mode: update.
Read and follow:
- https://vibegov.io/agent.txt
- https://vibegov.io/bootstrap.json
- https://vibegov.io/docs/bootstrap/

Use the canonical bootstrap contract.
Do not restart from scratch when valid artifacts already exist.
Repair or normalize the repo until the same bootstrap contract is satisfied, or report exact blockers.
```
