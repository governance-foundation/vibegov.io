---
sidebar_position: 9
---

# GitHub Project Bootstrap

Use this when adopting VibeGov in a GitHub-hosted repository and you want the backlog/project board to become part of the governed delivery system from day one.

## Why this exists

A governed repo should not stop at markdown issues and specs. On GitHub, the project board is part of the operational control surface.

Bootstrap should therefore:
- detect whether GitHub project automation is possible
- create, adopt, or normalize a project board
- import existing open issues
- keep issue state synchronized with actual delivery progress

## Prerequisites

Check these first:

```bash
git --version
gh --version
gh auth status
```

Expected GitHub capabilities:
- repo access
- project access
- org read access where relevant

If `git` or `gh` is missing, or if `gh auth status` fails, bootstrap should:
- still install `.governance/`
- still install branch/PR workflow guidance
- report the exact missing capability
- avoid falsely claiming GitHub project-board setup succeeded

## Canonical VibeGov board shape

### Required workflow field
- **Status**
  - Backlog
  - Ready
  - In progress
  - In review
  - Done
  - Blocked

### Required planning fields
- **Priority**
  - P0
  - P1
  - P2
- **Size**
  - XS
  - S
  - M
  - L
  - XL

### Useful built-in fields
These may also be present and are useful when available:
- Assignees
- Labels
- Linked pull requests
- Reviewers
- Milestone
- Parent issue
- Sub-issues progress
- Estimate
- Start date
- Target date

## Bootstrap behavior

For GitHub-hosted repos, bootstrap should:

1. detect whether the repo is using GitHub
2. verify `git` is installed
3. verify `gh` is installed
4. verify `gh auth status` succeeds
5. detect whether a suitable project board already exists
6. if one exists, adopt or normalize it toward the canonical field set
7. if one does not exist, create it
8. import or attach all existing open issues
9. report the board URL and the canonical statuses/fields present

## Branch source invariant

The board workflow only stays trustworthy if branch sources are disciplined too.

Required invariant:
- normal `feature/`, `fix/`, `docs/`, and `chore/` branches must start from `develop`
- hotfix branches must start from `main`
- agents must not create a new normal work branch from another working branch
- non-`main` / non-`develop` branches are governed work units, not reusable parent branches
- any stacked-branch exception requires explicit human approval and a reconciliation plan

## Issue movement contract

The board is not static metadata. It should move with the work.

Expected state movement:
- new/untriaged/imported work -> **Backlog**
- clarified and spec-bound work -> **Ready**
- active implementation or execution -> **In progress**
- PR open / review underway -> **In review**
- merged and verified complete -> **Done**
- proven blocker with evidence -> **Blocked**

## Typical issue pickup flow

For normal backlog-driven work, agents should follow this sequence:
1. pick the next issue from `Backlog` or `Ready`
2. clarify it until it is implementation-grade
3. bind it to spec/requirement IDs
4. move it to `Ready` if clarification/spec binding was needed
5. branch from `develop`
6. move it to `In progress` when work starts
7. verify with evidence
8. open PR into `develop`
9. move it to `In review`
10. after merge and verification, move it to `Done`
11. if blocked, move it to `Blocked` with evidence instead of leaving status stale

## Existing project adoption

For an existing repo with open issues, bootstrap should not require a clean slate.

Instead it should:
- inspect existing issues
- create or adopt a board
- import/attach the existing issues
- normalize the workflow fields
- start moving issues through the workflow as work begins

## CLI implementation pattern

Use `gh` as the primary automation surface for GitHub-hosted repos.

Examples:

```bash
gh auth status
gh issue list --repo owner/repo --state open
gh project view <number> --owner <owner>
gh project field-list <number> --owner <owner>
```

If a project board must be created or normalized, automation should do that explicitly and then report the final board URL back in the bootstrap completion message.

## Related docs

- [Bootstrap](/docs/bootstrap)
- [Quick Start](/docs/quickstart)
- [Branch Protection Checklist](/docs/branch-protection-checklist)
- [Published GOV-02 Workflow](/docs/published/gov-02-workflow)
