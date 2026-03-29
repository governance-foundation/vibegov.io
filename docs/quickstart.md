---
sidebar_position: 3
---

# Quick Start

Use this to install VibeGov into any project in under 5 minutes.

URL-first users should start here first: [Bootstrap](/docs/bootstrap).

## Copy-paste bootstrap prompt

Paste this into your agent:

```text
Adopt governance from VibeGov before any implementation.

Initialization contract:
1) If `.governance/` does not exist, create:
   - `.governance/rules/`
   - `.governance/project/`
   - `.governance/specs/`
2) Copy/adopt VibeGov canonical rules into `.governance/rules/*.mdc`.
3) Detect any provider-native rules directory that already exists in the repo. If found, sync active `.governance/rules/*.mdc` into it and report the exact target(s).
4) If no provider-native rules directory exists, do not invent placeholder paths; use `.governance/rules/*.mdc` as canonical.
5) Do not place governance files outside `.governance/` unless explicitly requested.
6) Read `gov-01` through `gov-08` and extract the active workflow, communication, quality, testing, issue, task, and exploratory rules.
7) Confirm governance activation by listing active rule files and active governance sources.

Execution gate:
- Do not start product-code implementation until steps 1-7 are completed and reported.
- Do not use AI only to accelerate implementation while skipping tests, specs, docs, traceability, validation evidence, or delivery clarity.

During delivery:
- Keep project intent in `.governance/project/`.
- Keep app feature/change specs in `.governance/specs/`.
- Choose the correct execution mode before acting.
- Use AI to increase completeness, not just speed.
- Treat tests, specs, docs, validation evidence, traceability, and delivery clarity as first-class delivery artifacts.
- Apply rules proportionally, but do not skip mandatory governance requirements.

Completion report:
- summarize which governance rules were applied
- provide mode-appropriate evidence
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

For any agent/IDE rule loader: detect any existing provider-native rules directory and mirror active `.governance/rules/*.mdc` files into it.

For agents that read `AGENTS.md`:
- Add a root `AGENTS.md`.
- Declare `.governance/rules/*.mdc` and any detected provider-native mirror as active rule sources.

Canonical-source model:
- Keep `.governance/` as the source of truth.
- Let each agent/provider link to that source using its own structure.

## 3. Fill project intent before coding

- Create/update project intent from `.governance/project/PROJECT_TEMPLATE.md`.
- Create feature/change specs from `.governance/specs/SPEC_TEMPLATE.md` when needed.

## 4. Start with the governance set

Read in this order:
1. `gov-01-instructions.mdc`
2. `gov-02-workflow.mdc`
3. `gov-03` to `gov-07`
4. `gov-08-exploratory-review.mdc`

## 5. Understand the execution modes

VibeGov works through two operating modes:
- **Development** — change behavior with proof, release-readiness checks, and shipping discipline
- **Exploration** — discover behavior and hydrate backlog

Release verification is part of Development, not a third peer mode.

Useful supporting docs:
- [Execution Modes](/docs/execution-modes)
- [Exploratory Review Mode](/docs/exploratory-review-mode)
- [Checkpoint Reporting](/docs/checkpoint-reporting)
- [Blocker Escalation](/docs/blocker-escalation)
- [Workflow Quality Rubric](/docs/workflow-quality-rubric)
- [Bootstrap Validation](/docs/bootstrap-validation)

## 6. Quality and completeness expectation

Bootstrap should not only create governance files. It should also raise the expected standard of done.

That expectation is already reinforced by:
- [Published GOV-04 Quality](/docs/published/gov-04-quality)
- [Published GOV-05 Testing](/docs/published/gov-05-testing)
- [Published GOV-06 Issues](/docs/published/gov-06-issues)

The practical implication is that AI should help teams maintain the quality scaffolding around a change — tests, specs, docs, traceability, and delivery clarity — rather than simply producing code faster.

## 7. Validate installation

Confirm the agent can read active rule files and that prompts/outputs reflect:
- spec-first behavior
- evidence-driven validation
- issue/task traceability
- exploratory artifact creation for non-validated findings
- blocker visibility instead of silent stalls

If these do not appear, rule activation is incomplete.
