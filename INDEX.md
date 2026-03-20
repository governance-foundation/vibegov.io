# Index

This index lists the main VibeGov guidance files and when to use each.

## Start here
- `README.md`: positioning, operating model, and onboarding path
- `QUICKSTART.md`: fastest path to first governed run
- `GUIDE.md`: deeper explanation of the VibeGov operating model
- `INDEX.md`: this map of the guidance set

## Canonical governance source
- `.governance/rules/gov-*.mdc`: canonical rule set
- `.governance/project/PROJECT_TEMPLATE.md`: project intent template
- `.governance/specs/SPEC_TEMPLATE.md`: feature/change spec template

`.governance/` is the source of truth.
If a provider-native rules directory already exists, mirror active rules into it.
If no provider-native rules directory exists, do not invent one.

## Core governance rules
- `.governance/rules/gov-01-instructions.mdc`: entry point and activation contract for the governance set
- `.governance/rules/gov-02-workflow.mdc`: core workflow, execution modes, evidence expectations, backlog hydration, blocker routing
- `.governance/rules/gov-03-communication.mdc`: communication defaults during delivery
- `.governance/rules/gov-04-quality.mdc`: quality gates and documentation expectations
- `.governance/rules/gov-05-testing.mdc`: testing philosophy and evidence expectations
- `.governance/rules/gov-06-issues.mdc`: issue management workflow and templates
- `.governance/rules/gov-07-tasks.mdc`: task list usage and status management
- `.governance/rules/gov-08-exploratory-review.mdc`: structured exploratory review, scenario classification, artifact completeness, backlog hydration

## Public operational guides (`docs/`)
- `docs/intro.md`: public overview of VibeGov
- `docs/bootstrap.md`: copy-paste bootstrap prompt for a fresh repo
- `docs/quickstart.md`: public quick-start page
- `docs/vibegov-sdlc.md`: concise explanation of the VibeGov SDLC, lifecycle flow, and comparison against vague/default SDLC behavior
- `docs/contribute.md`: how to contribute governance/site improvements
- `docs/execution-modes.md`: Development vs Exploration, plus release verification inside Development
- `docs/exploratory-review-mode.md`: how exploratory review works in practice
- `docs/checkpoint-reporting.md`: checkpoint structure, cadence, and examples
- `docs/blocker-escalation.md`: blocker handling and routing model
- `docs/workflow-quality-rubric.md`: how to judge whether a workflow is actually strong
- `docs/published/gov-01-instructions.md` ... `docs/published/gov-08-exploratory-review.md`: published commentary versions of the canonical rules

## Key supporting repo docs
- `OPENSPEC_RULES.md`: OpenSpec-first execution rules
- `GITHUB_ISSUE_POLICY.md`: backlog creation, issue-first, blocker-recording, commit/evidence/close rules
- `ISSUE_BODY_TEMPLATE.md`: implementation-grade issue description template
- `STRUCTURE.md`: how governance and project guidance relate
- `AGENT_TOPOLOGY.md`: recommended multi-agent operating model
- `CHANGELOG.md`: governance evolution log
- `TEMPLATE_CHECKLIST.md`: template/repo setup checklist
- `SMOKE_TEST.md`: plain-user demo/smoke instructions

## Testing data and assets
- `themes/testing/DEMO_DATA_ASSET_POLICY.md`: demo/sample data and synthetic asset policy for UI quality
- `templates/cypress/fixtures/README_TEMPLATE.md`: fixture-pack documentation template
- `templates/cypress/fixtures/data-pack-template.json`: deterministic fixture starter

## Scripts
- `scripts/smoke-vibegov.ps1`: audits backlog mapping and optionally creates missing GitHub issues
- `scripts/generate-published-rules.js`: regenerates published governance pages from canonical `.mdc` rules

## Recommended reading paths

### I want to bootstrap a repo quickly
1. `README.md`
2. `QUICKSTART.md`
3. `docs/bootstrap.md`
4. `.governance/rules/gov-01-instructions.mdc`
5. `.governance/rules/gov-02-workflow.mdc`
6. `.governance/rules/gov-08-exploratory-review.mdc`

### I want to understand the operating model
1. `GUIDE.md`
2. `docs/execution-modes.md`
3. `docs/exploratory-review-mode.md`
4. `docs/checkpoint-reporting.md`
5. `docs/workflow-quality-rubric.md`

### I want the full public rule set
- `docs/published/gov-01-instructions.md` through `docs/published/gov-08-exploratory-review.md`
