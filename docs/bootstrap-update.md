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
- repair missing **operational** bootstrap artifacts too, not just scaffold gaps
- keep the same pass gate as `init`
- create/update `INIT-TODO.md` early and record any missing prerequisite with exact remediation
- if the repo still fails the contract, report exact blockers/gaps instead of claiming partial completion
- do not leave the repo in ambiguous drift: classify the end state as committed/pushed, pending-review, or blocked
- when update cannot complete all gaps, emit explicit status/blocker artifacts instead of only chat output

## Update prompt

```text
Run VibeGov bootstrap in mode: update.

Before doing anything else, fresh-read the latest live canonical bootstrap sources:
- https://vibegov.io/agent.txt
- https://vibegov.io/bootstrap.json
- https://vibegov.io/docs/bootstrap/

Treat those live sources as authoritative for this run.
Do not rely on previously cached bootstrap text, earlier chat summaries, or older copied instructions if they differ.

Use the canonical bootstrap contract.
Do not restart from scratch when valid artifacts already exist.
Repair or normalize the repo until the same bootstrap contract is satisfied, including missing operational bootstrap artifacts, or report exact blockers.
Do not stop in an ambiguous local end state; classify the result as committed/pushed, pending-review, or blocked.
If update cannot complete all gaps, write explicit status/blocker artifacts describing what remains and the exact next actions.
```
