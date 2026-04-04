---
sidebar_position: 3
---

# Bootstrap Update

Copy this as message 1 in any coding agent when the repo already has some VibeGov bootstrap state and you want the agent to repair, tighten, or normalize it.

```text
Update this repo's VibeGov bootstrap state.
Read and follow:
- https://governance-foundation.github.io/vibegov.io/agent.txt
- https://governance-foundation.github.io/vibegov.io/bootstrap.json

This is an update/remediation pass, not a fresh bootstrap.
Do not restart from scratch if useful governance artifacts already exist.

Before writing any product code:
1. Inspect the existing `.governance/`, `AGENTS.md`, project intent, specs, and backlog state.
2. Repair or normalize missing or weak bootstrap artifacts while preserving valid existing work.
3. Keep `.governance/` canonical and report the active governance sources in use.
4. If project intent or the first spec is weak, tighten it honestly instead of inventing fake product direction.
5. Normalize backlog/spec traceability so the repo is ready for governed next-step work.
6. If a provider-native rules directory already exists, keep it aligned with `.governance/rules/*.mdc` and report the exact target path(s).
7. Report exactly what was repaired, what was preserved, and what still needs follow-up.

Then stop before product-code implementation.
```
