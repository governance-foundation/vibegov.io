---
sidebar_position: 3
---

# Bootstrap Update

Copy this as message 1 in any coding agent when the repo already has some VibeGov bootstrap state and you want repair/normalization instead of a fresh start.

```text
Update this repo's VibeGov bootstrap state.
Read and follow:
- https://vibegov.io/agent.txt
- https://vibegov.io/bootstrap.json

This is an update/remediation pass, not a fresh bootstrap.
Do not restart from scratch when valid artifacts already exist.

Before writing any product code:
1. Inspect existing `.governance/`, `AGENTS.md`, project intent, specs, backlog, `.github/` workflow artifacts, and current Git/GitHub state.
2. Classify start state (branch, clean/dirty tree, untracked/uncommitted changes) and declare commit policy mode (`required`, `allowed`, `forbidden`).
3. Preserve valid artifacts; repair only stale, missing, contradictory, or weak artifacts.
4. Keep `.governance/` canonical and report active governance sources.
5. If product intent is vague, allow `SPEC-001` to be a bootstrap/governance setup spec instead of inventing product scope.
6. For GitHub repos, run capability preflight before board mutation and report each dependency as `configured`, `blocked-with-tracked-issue`, or `not-applicable`.
7. Choose exactly one canonical board target (adopt/create/normalize), normalize fields, ensure repo linkage, handle duplicate empty board cleanup if needed, and report final board state.
8. If no issues exist, still create/normalize/report board and mark intentionally empty.
9. Write durable output artifacts into `.governance/project/bootstrap-runs/`:
   - `<timestamp>-status.md`
   - `<timestamp>-feedback.md`
   - optional `<timestamp>-blockers.md`
   - stable top-level files may exist only as latest-run summaries/pointers
10. Reconcile all generated docs against final live git/GitHub state before claiming completion.

Then stop before product-code implementation.
```
