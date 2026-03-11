# Index

This index lists the guidance files in this repository and when to use each.

## Start Here
- GITHUB_ISSUE_POLICY.md: mandatory GitHub backlog creation + issue-first + blocker-recording + commit/evidence/close rules.
- ISSUE_BODY_TEMPLATE.md: mandatory implementation-grade issue description template.
- `QUICKSTART.md`: fastest path to first governed run.
- `OPENSPEC_RULES.md`: default OpenSpec-first execution rules.
- `README.md`: Purpose, positioning, and onboarding path.
- `STRUCTURE.md`: How governance and project guidance relate.
- `AGENT_TOPOLOGY.md`: Recommended multi-agent operating model (orchestrator + per-project agents).

## Governance Guidance (`.governance/rules/gov-*.mdc`)
- `.governance/rules/gov-01-instructions.mdc`: Entry point and links to the full guidance set.
- `.governance/rules/gov-02-workflow.mdc`: End-to-end delivery workflow expectations.
- `.governance/rules/gov-03-communication.mdc`: Communication defaults during delivery.
- `.governance/rules/gov-04-quality.mdc`: Quality gates and documentation expectations.
- `.governance/rules/gov-05-testing.mdc`: Testing philosophy and expectations.
- `.governance/rules/gov-06-issues.mdc`: Issue management workflow and templates.
- `.governance/rules/gov-07-tasks.mdc`: Task list usage and status management.
- `.governance/rules/gov-08-exploratory-review.mdc`: Always-on exploratory flow for end-user validation and continuous backlog hydration (follows gov-01..07 except no code changes or automation test execution in exploratory pass).

## Project Templates
- `.governance/project/PROJECT_TEMPLATE.md`: Create or update the project-specific intent.

## Spec Templates
- `.governance/specs/SPEC_TEMPLATE.md`: Capture intent and delivery expectations for an application feature/change.

## Testing Data & Assets
- `themes/testing/DEMO_DATA_ASSET_POLICY.md`: mandatory demo/sample data + synthetic asset policy for Cypress UI quality.
- `templates/cypress/fixtures/README_TEMPLATE.md`: fixture-pack documentation template.
- `templates/cypress/fixtures/data-pack-template.json`: deterministic fixture data-pack starter.

## Smoke Testing
- `SMOKE_TEST.md`: run/demo VibeGov as a plain user on a target repo.
- `scripts/smoke-vibegov.ps1`: audit backlog mapping and optionally create missing GitHub issues.

## Template Operations
- `TEMPLATE_CHECKLIST.md`: Steps for creating a new project from this template.
- `CHANGELOG.md`: Record intent shifts and guidance updates over time.

## Recommended Install Layout (Target Projects)
- Keep VibeGov assets under `.governance/` in the target project.
- Treat `.governance/rules/gov-*.mdc` as canonical.
- Detect any existing provider-native rules directory in the repo and mirror `.governance/rules/gov-*.mdc` into it.
- If no provider-native rules directory exists, do not invent one; continue with `.governance/rules/` and a root `AGENTS.md`.





