---
sidebar_position: 13
---

# Bootstrap Prompt Template

Use this stricter prompt when you want a session to bootstrap a repo, validate the result, update repo-local governance state, and stop before product implementation.

```text
Bootstrap, validate, and finalize repo-local governance setup for this repo using VibeGov.
Read and follow:
- https://governance-foundation.github.io/vibegov.io/agent.txt
- https://governance-foundation.github.io/vibegov.io/bootstrap.json

Requirements:
1. Create or update `AGENTS.md` so repo-local agent instructions point to `.governance/` as canonical.
2. Create `.governance/project/INIT-TODO.md` immediately and keep it updated through setup.
3. Check prerequisites early and record them in `INIT-TODO.md`:
   - `git --version`
   - `gh --version`
   - `gh auth status` when GitHub-hosted automation is expected
   - if anything is missing, report the exact missing capability and exact remediation command/action before continuing GitHub-aware setup
4. Install `.governance/rules/`, `.governance/project/`, and `.governance/specs/`.
5. Install GOV-01 through GOV-08.
6. If product intent is underspecified, do not invent a fake product spec. Either:
   - use a 2-5 line product brief supplied by the human, or
   - create an explicit bootstrap/adoption spec and say that product-facing spec work is still pending.
7. Create `.governance/project/PROJECT_INTENT.md`.
8. Create the first spec as `.governance/specs/SPEC-001-<feature>.md`.
9. Install the repo branch workflow. If the repo is using the strict `main` / `develop` model, say whether `develop` was created locally, pushed to origin, or only documented as pending.
10. If GitHub automation is expected, assume the CLI must be able to read and mutate org projects (`repo`, `read:org`, `read:project`, `project`).
11. If GitHub automation is available, create, adopt, or normalize the canonical project board during bootstrap.
12. If multiple candidate boards exist, do not guess. Report the ambiguity and stop that part of setup.
13. If no issues exist, create/adopt the board and leave it empty. Report that issue import was skipped because there were no issues.
14. If the GitHub built-in `Status` field exists, update it in place to use the canonical options instead of pretending a replacement custom field is equivalent.
15. If a canonical board exists or is created, write its identity/URL into `AGENTS.md` and state that agents must keep using it as the operational backlog/workflow surface.
16. Validate the setup state:
   - `AGENTS.md` exists and points to `.governance/` as canonical
   - `INIT-TODO.md` exists and reflects real setup state
   - project intent exists
   - first spec exists
   - active governance sources are reported
   - branch workflow state is reported honestly
   - GitHub board state is reported honestly
17. Report bootstrap end state explicitly as one of:
   - local-only setup complete
   - committed locally
   - pushed branch
   - PR opened
18. Stop before product-code implementation.

Do not implement product changes during this task.
```

## When to use this
Use this template when you want bootstrap to be:
- durable across agent restarts
- explicit about prerequisites and blockers
- honest about GitHub automation status
- explicit about whether the repo is really ready for implementation

## Related docs

- [Bootstrap](/docs/bootstrap)
- [Quick Start](/docs/quickstart)
- [GitHub Project Bootstrap](/docs/github-project-bootstrap)
- [Contributing](/docs/contribute)
