# QUICKSTART (10 Minutes)

Get VibeGov working on a real repo quickly.

## 1) Create the governance scaffold
Add these to the project root:
- `.governance/rules/`
- `.governance/project/`
- `.governance/specs/`

Then copy in:
- `.governance/rules/gov-*.mdc`
- `.governance/project/PROJECT_TEMPLATE.md`
- `.governance/specs/SPEC_TEMPLATE.md`

## 2) Activate canonical governance
- Treat `.governance/` as the source of truth.
- If the repo already has a provider-native rules directory, mirror active rules into it.
- If it does not, do not invent a placeholder path.
- Add a root `AGENTS.md` or equivalent activation mechanism if your tooling needs one.

## 3) Choose the operating model
VibeGov has two operating modes:
- **Development** — change behavior with proof, release-readiness checks, and shipping discipline
- **Exploration** — discover behavior and hydrate backlog

Release verification is part of Development, not a third peer mode.

Start by reading:
1. `gov-01-instructions.mdc`
2. `gov-02-workflow.mdc`
3. `gov-03` through `gov-07`
4. `gov-08-exploratory-review.mdc`

## 4) Define project intent
Create or update project intent from:
- `.governance/project/PROJECT_TEMPLATE.md`

## 5) Create the first governed spec
Create your first feature/change spec from:
- `.governance/specs/SPEC_TEMPLATE.md`

## 6) Create or normalize the backlog first
Before implementation:
- create/normalize GitHub issues for planned/partial requirements
- connect issue scope to spec intent
- identify blockers early instead of hiding them in chat or notes

This backlog becomes the shared execution queue for humans and agents.

## 7) Run the workflow in the right mode
Core loop:

`Observe -> Plan -> Execute in the right mode -> Verify -> Document`

Key expectations:
- Development requires evidence before completion claims
- Development owns release-readiness and shipping evidence when a candidate artifact is being promoted
- Exploration requires scenario classification and tracked artifacts for every non-validated finding

## 8) Enforce proof, not vibes
For user-facing changes:
- require evidence that matches the execution mode
- require traceability updates before marking complete
- verify persistence/mutation outcomes, not just UI confirmation

## 9) Keep artifacts durable
Store and report:
- requirement IDs
- issue links
- test/evidence outputs
- decisions and confidence limits
- blockers and next actions
- exploratory completeness labels where applicable

You are now in governed delivery mode.

## 10) Run the plain-user smoke test (recommended)
- Use `scripts/smoke-vibegov.ps1` against the target repo.
- See `SMOKE_TEST.md` for audit/dry-run/create flows.

## 11) Make UI testing realistic
- Apply `themes/testing/DEMO_DATA_ASSET_POLICY.md`
- Use fixture packs from `templates/cypress/fixtures/*` for deterministic sample data and assets
