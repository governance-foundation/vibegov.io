# Strict Branch and PR Bootstrap Workflow

## Intent
Make strict Git workflow part of VibeGov bootstrap so agents inherit explicit branch roles, pull-request routing, and protection expectations before implementation begins.

## Scope
In scope:
- `VG-GITWF-001` update `GOV-02` with strict `main`/`develop` workflow rules for agents
- `VG-GITWF-002` publish the rule update on the public `gov-02` docs page
- `VG-GITWF-003` add a GitHub pull-request template aligned with issue/spec/evidence reporting
- `VG-GITWF-004` add a branch protection checklist doc for `main` and `develop`
- `VG-GITWF-005` update bootstrap/adoption docs so the workflow is installed during bootstrap
- `VG-GITWF-006` add a blog post explaining how the workflow works and why it matters

Out of scope:
- automating GitHub branch protection settings
- changing CI or release pipelines
- adding merge queue, CODEOWNERS, or repository ruleset automation beyond documented expectations

## Acceptance Criteria
- `VG-GITWF-001` The canonical `gov-02` rule explicitly defines `main` and `develop` roles, issue-scoped `feature/`, `fix/`, `docs/`, and `chore/` branches, and the no-direct-agent-commit rule for `main`/`develop`.
- `VG-GITWF-002` The same rule explicitly requires pull requests into `develop` for normal work, explicit promotion from `develop` to `main`, and a hotfix path from `main` with back-merge expectations into `develop`.
- `VG-GITWF-003` A public published `gov-02` page mirrors the canonical rule update.
- `VG-GITWF-004` A GitHub pull-request template exists and prompts authors to record issue/spec links, workflow route, validation, and hotfix back-merge details when relevant.
- `VG-GITWF-005` A branch protection checklist doc exists and explains the expected protection settings and review gates for `main` and `develop`.
- `VG-GITWF-006` Bootstrap and quickstart docs instruct adopters to install the strict branch/pull-request workflow as part of bootstrap, not as optional post-setup advice.
- `VG-GITWF-007` Contribution/adoption docs explain the normal feature/fix/docs/chore PR flow, promotion PR flow, and hotfix back-merge path.
- `VG-GITWF-008` A new blog post explains the workflow without simply duplicating the docs/checklist text.
- `VG-GITWF-009` `npm run build` succeeds after the documentation and template changes.

## Tests and Evidence
- inspect `.governance/rules/gov-02-workflow.mdc`
- inspect `.governance/specs/strict-branch-pr-bootstrap.md`
- inspect `.github/pull_request_template.md`
- inspect `docs/branch-protection-checklist.md`
- inspect `docs/bootstrap.md`, `docs/quickstart.md`, and `docs/contribute.md`
- inspect `docs/published/gov-02-workflow.md`
- inspect `blog/2026-03-26-strict-branch-pr-bootstrap.md`
- run `npm run build`

## Documentation Impact
- update `.governance/rules/gov-02-workflow.mdc`
- add `.governance/specs/strict-branch-pr-bootstrap.md`
- add `.github/pull_request_template.md`
- add `docs/branch-protection-checklist.md`
- update `docs/bootstrap.md`
- update `docs/quickstart.md`
- update `docs/contribute.md`
- update `docs/published/gov-02-workflow.md`
- add `blog/2026-03-26-strict-branch-pr-bootstrap.md`
- update `sidebars.js`

## Verification
Verification is documentation-driven. Success requires the canonical rule, published rule page, bootstrap docs, checklist, PR template, and blog post to all describe the same branch/pull-request model, plus a successful site build.

## Change Notes
- Keep the canonical governance rule tool-agnostic enough to describe Git workflow shape while using GitHub docs/templates as the concrete adoption example in this repo.
- Document branch protection expectations explicitly instead of claiming they are implied by the presence of `main` and `develop`.
