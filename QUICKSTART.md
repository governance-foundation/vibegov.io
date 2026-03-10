# QUICKSTART (10 Minutes)

Get vibegov working on a real repo quickly.

## 1) Copy governance scaffolding
Add these into your project root:
- `.governance/rules/`
- `.governance/project/`
- `.governance/specs/`

## 2) Choose your mode
- **OpenSpec-first (recommended):** requirements live in `openspec/specs/*`
- **Minimal mode:** keep existing docs, add traceability incrementally

## 3) Define project intent
Fill:
- `.governance/project/PROJECT_TEMPLATE.md`

## 4) Create first governed task
Write one feature/change spec from:
- `.governance/specs/SPEC_TEMPLATE.md`

## 5) Build GitHub backlog first (mandatory)
Before implementation, create/normalize GitHub issues for all planned/partial requirements.
This backlog is the shared execution queue so all agents and humans stay aligned.

## 6) Run delivery loop
Follow: Observe -> Plan -> Implement -> Verify -> Document

Policy gates:
- GITHUB_ISSUE_POLICY.md (mandatory backlog + issue-first + commit/evidence discipline)
- blocked work must be recorded on the issue, then next issue starts immediately

## 7) Enforce proof
For user-facing changes:
- E2E-first proof required
- Traceability updated before marking complete

## 8) Keep artifacts durable
Store:
- requirement IDs
- test evidence
- decisions
- blockers/next actions

You are now in governed delivery mode.

## 10) Run plain-user smoke test (recommended)
- Use `scripts/smoke-vibegov.ps1` against your target repo.
- See `SMOKE_TEST.md` for audit/dry-run/create flows.



## 9) Make Cypress UI realistic
- Apply 	hemes/testing/DEMO_DATA_ASSET_POLICY.md`r
- Use fixture packs from 	emplates/cypress/fixtures/* for deterministic sample data + assets

