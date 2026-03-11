---
sidebar_position: 3
---

# Quick Start

Use this to install VibeGov into any project in under 5 minutes.

URL-first users should start here first: [Bootstrap](/docs/bootstrap).

## Copy-paste bootstrap prompt

Paste this into your agent (it can learn from URL directly):

```text
Adopt governance from VibeGov before any implementation.

Initialization contract:
1) If `.governance/` does not exist, create:
   - `.governance/rules/`
   - `.governance/project/`
   - `.governance/specs/`
2) Copy/adopt VibeGov canonical rules into `.governance/rules/*.mdc`.
3) Detect any provider-native rules directory that already exists in the repo. If found, sync `.governance/rules/*.mdc` into it and report the exact target(s).
4) If no provider-native rules directory exists, do not invent placeholder paths; use `.governance/rules/*.mdc` as canonical.
5) Do not place governance files outside `.governance/` unless explicitly requested.
6) Read `gov-01` through `gov-08` and extract required workflow, communication, quality, testing, issue, task, and exploratory behavior.
7) Confirm governance activation by listing active rule files you are using.

Execution gate:
- Do not start coding until steps 1-7 are completed and reported.

During delivery:
- Keep project intent in `.governance/project/`.
- Keep app feature/change specs in `.governance/specs/`.
- Apply rules proportionally, but do not skip mandatory governance requirements.

Completion report:
- summarize which governance rules were applied
- provide validation evidence (tests/checks)
- list ambiguity, conflicts, or deviations and why
```

Machine-readable references:

- `https://governance-foundation.github.io/vibegov.io/agent.txt`
- `https://governance-foundation.github.io/vibegov.io/bootstrap.json`

## 1. Copy the governance folder

Copy these files into the target repo:

```text
.governance/
  rules/gov-*.mdc
  project/PROJECT_TEMPLATE.md
  specs/SPEC_TEMPLATE.md
```

## 2. Activate rules for your agent

For any agent/IDE rule loader: detect any existing provider-native rules directory and mirror `.governance/rules/*.mdc` into it.

For agents that read `AGENTS.md`:
- Add a root `AGENTS.md`.
- Declare `.governance/rules/*.mdc` and any detected provider-native mirror as active rule sources.

Canonical-source model:
- Keep `.governance/` as the source of truth.
- Let each agent/provider link to that source using its own structure (`AGENTS.md` or an existing provider-native rules directory).

## 3. Fill project intent before coding

- Create/update `.governance/project/PROJECT_TEMPLATE.md`.
- Create app feature/change specs from `.governance/specs/SPEC_TEMPLATE.md` when needed.

## 4. Start with the governance set

Read in this order:
1. `gov-01-instructions.mdc`
2. `gov-02-workflow.mdc`
3. `gov-03` to `gov-07`
4. `gov-08-exploratory-review.mdc`

## 5. Validate installation

- Confirm agent can read active rule files.
- Confirm prompts and outputs reflect:
  - spec-first behavior
  - evidence-driven validation
  - issue/task traceability

If these do not appear, rule activation is incomplete.


