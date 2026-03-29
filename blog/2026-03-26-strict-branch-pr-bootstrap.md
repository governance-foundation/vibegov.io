---
slug: strict-branch-pr-bootstrap
title: "Bootstrap Is Not Finished Until the Branch Workflow Is Governed"
authors: [VibeGov_team]
tags: [workflow, bootstrap, git, pull-requests, governance]
---

Teams often bootstrap the governance folders and stop there.

That is useful, but it leaves one of the most dangerous gaps open:

- agents still have a path to work directly on protected branches
- promotion to production can blur into normal integration
- hotfixes can land fast and still leave `develop` behind

If the repo workflow is loose, the governance is only half-installed.

## The missing bootstrap step

Bootstrap should not only install rules.
It should install the repository path those rules have to travel through.

For a strict VibeGov setup, that means:

- `main` is the promotion/release branch
- `develop` is the normal integration branch
- issue-scoped `feature/`, `fix/`, `docs/`, and `chore/` branches start from `develop`
- agents do not commit directly to `main` or `develop`
- normal work reaches `develop` through pull request
- promotion from `develop` to `main` is a separate, explicit decision

That is the branch contract.
Without it, the rest of the delivery loop is easier to bypass than teams usually admit.

## Why `develop` matters so much

The point of `develop` is not to create ceremony.
It is to separate normal integration from release promotion.

When all work aims straight at `main`, teams lose a clean place to ask:

- what is ready to integrate?
- what is ready to promote?
- what evidence is attached to each decision?

`develop` gives the system a stable answer.
Normal work integrates there first.
Promotion to `main` becomes visible instead of accidental.

## Why issue-scoped branches matter

Agents are fast enough that "small shortcut" branching habits become system-level problems.

Issue-scoped branches force three good behaviors:

1. the work has a tracked reason to exist
2. the scope stays isolated while the change is in motion
3. reviewers can map the branch back to issue and spec intent quickly

That is why the branch name itself should carry the issue ID.
It turns Git history into traceability instead of mere chronology.

## Pull requests are the integration gate

The important rule is not merely "use pull requests sometimes."
It is "normal work must enter `develop` through pull requests, and agents do not bypass that gate."

That matters because pull requests are where teams can reliably attach:

- issue links
- spec links
- validation evidence
- risk notes
- release-readiness context

The pull request is where branch workflow meets governed evidence.

## Promotion and hotfixes should be explicit too

Promotion from `develop` to `main` is not just another merge.
It is a release decision.

That decision should be visible in its own pull request so reviewers can ask whether the integrated work is truly ready to become the production/reference state.

Hotfixes need the same clarity from the other direction:

- branch from `main`
- merge back to `main` through an explicit hotfix pull request
- then back-merge or otherwise reconcile into `develop` immediately

Without that last step, the repo begins to lie about its own state.
`main` contains reality, `develop` contains a stale story, and the next integration cycle inherits the drift.

## Branch protection turns the policy into reality

A written workflow is better than nothing, but protected-branch settings are what stop the shortcuts from becoming normal.

That is why VibeGov bootstrap now needs more than a rule file.
It also needs:

- a repo pull-request template
- a branch protection checklist
- adoption docs that explain the promotion and hotfix path clearly

Those artifacts make the workflow teachable and enforceable instead of tribal.

## Practical takeaway

If you want agents to inherit good delivery behavior, bootstrap the Git path as well as the governance text.

Install the folders, install the rules, and also install the strict branch and pull-request contract before product code begins.

## Related docs

- [Bootstrap](/docs/bootstrap)
- [Quick Start](/docs/quickstart)
- [Branch Protection Checklist](/docs/branch-protection-checklist)
- [GOV 02 Workflow](/docs/published/gov-02-workflow)
