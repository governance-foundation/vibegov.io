---
sidebar_position: 4
---

# Contribute

Feedback is managed in GitHub Issues so decisions stay public, reviewable, and traceable. Code and content changes should move through the strict branch and pull-request workflow.

## Suggest an improvement

1. Open an issue: [New issue](https://github.com/governance-foundation/vibegov.io/issues/new/choose)
2. Use a clear title with the affected rule, doc page, blog post, or workflow concept.
3. Link the specific page and section.
4. Describe the current problem, the expected improvement, and why it matters.
5. If relevant, include a concrete wording proposal.

## Branching and pull requests

1. Start from a GitHub issue or clearly linked governed task.
2. Create an issue-scoped `feature/`, `fix/`, `docs/`, or `chore/` branch from `develop`.
3. Do not let agents commit directly to `main` or `develop`.
4. Open a pull request into `develop` and complete the repo pull-request template with issue/spec/evidence links.
5. Keep validation evidence in the pull request so promotion reviewers can reuse it.

Use the [Branch Protection Checklist](/docs/branch-protection-checklist) when setting up or reviewing repo protections.

## Promotion and hotfix path

- Promote reviewed work from `develop` to `main` with an explicit pull request.
- Start urgent fixes from `main` with `hotfix/<issue>-<slug>` branches.
- After a hotfix lands in `main`, back-merge or otherwise reconcile it into `develop` immediately.
- Record promotion scope, hotfix reason, and any back-merge reference in the related pull request.

## Strong contribution targets

Especially useful contributions include:
- unclear execution-mode boundaries
- weak completion criteria
- missing or weak evidence expectations
- weak branch-protection or pull-request workflow guidance
- blocker-handling ambiguity
- exploratory-review loopholes
- persistence-proof gaps
- weak checkpoint/report examples
- workflow wording that is easy to game or misread

## Preferred issue types

- [Governance Suggestion](https://github.com/governance-foundation/vibegov.io/issues/new?template=governance-suggestion.yml)
- [Clarity Gap / Ambiguity](https://github.com/governance-foundation/vibegov.io/issues/new?template=clarity-gap.yml)
- [Adoption Report](https://github.com/governance-foundation/vibegov.io/issues/new?template=adoption-report.yml)
- [Website Bug](https://github.com/governance-foundation/vibegov.io/issues/new?template=site-bug.yml)

## Contribution principles

- Preserve intent over surface wording.
- Keep governance reusable across projects and providers.
- Avoid project-specific tool lock-in in core rules.
- Use issue-scoped branches and pull requests rather than bypassing protected branches.
- Prefer guidance that is hard to misread and hard to execute badly.
- If a rule sounds good but is easy to game, keep improving it.
