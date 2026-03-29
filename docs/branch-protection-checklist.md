---
sidebar_position: 4
---

# Branch Protection Checklist

Use this during bootstrap or repo adoption when you want agents to inherit the strict VibeGov Git workflow before implementation starts.

## Branch roles

- `main`: promotion/release branch. It accepts only explicit promotion pull requests from `develop` and urgent hotfix pull requests branched from `main`.
- `develop`: integration branch for normal work. Feature, fix, docs, and chore changes land here through pull request.
- issue branches: `feature/<issue>-<slug>`, `fix/<issue>-<slug>`, `docs/<issue>-<slug>`, or `chore/<issue>-<slug>` created from `develop`.
- hotfix branches: `hotfix/<issue>-<slug>` created from `main`.
- agents never commit directly to `main` or `develop`.

## GitHub protection checklist for `develop`

- [ ] `develop` exists and is used as the pull-request target for normal work.
- [ ] Require a pull request before merging.
- [ ] Require approvals according to team policy.
- [ ] Require the repo's validation/status checks before merge.
- [ ] Require conversation resolution before merge.
- [ ] Restrict direct pushes so agents cannot bypass pull requests.
- [ ] Disable force pushes and branch deletion unless a documented admin exception exists.

## GitHub protection checklist for `main`

- [ ] `main` exists and is treated as the promotion/release branch.
- [ ] Require a pull request before merging.
- [ ] Require approvals and release-readiness/status checks before merge.
- [ ] Restrict direct pushes so agents cannot bypass pull requests.
- [ ] Disable force pushes and branch deletion unless a documented admin exception exists.
- [ ] Treat merges into `main` as either explicit promotions from `develop` or urgent hotfix pull requests from `main`-based branches.

## Promotion checklist

- [ ] The release scope is already integrated and verified on `develop`.
- [ ] The promotion pull request explicitly moves `develop` into `main`.
- [ ] The promotion pull request states what is being promoted and what evidence supports the move.
- [ ] Any unresolved risks or follow-up work are recorded before merge.

## Hotfix checklist

- [ ] Start the hotfix from `main`.
- [ ] Use a `hotfix/<issue>-<slug>` branch name that includes the governing issue ID.
- [ ] Merge the hotfix back to `main` through a reviewed pull request.
- [ ] Back-merge or otherwise reconcile the hotfix into `develop` immediately after the `main` merge.
- [ ] Record the back-merge pull request or commit in the hotfix notes.

## Bootstrap/adoption outputs

- [ ] A repo-local pull-request template exists (for GitHub repos, `.github/pull_request_template.md`).
- [ ] Bootstrap instructions tell agents that `main` and `develop` are protected integration/promotion surfaces, not working branches.
- [ ] Quickstart/adoption docs explain issue-scoped branch naming and mandatory pull requests into `develop`.
- [ ] Contribution docs explain promotion and hotfix flows.

## Practical note

GitHub branch protection can protect `main` and `develop`, but branch naming conventions for source branches may need rulesets, automation, or review discipline depending on the hosting plan and repository setup.

## Related docs

- [Bootstrap](/docs/bootstrap)
- [Quick Start](/docs/quickstart)
- [Contribute](/docs/contribute)
- [GOV 02 Workflow](/docs/published/gov-02-workflow)
