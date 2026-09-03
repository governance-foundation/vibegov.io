---
sidebar_position: 3
title: Choose Your Path
description: Pick the shortest VibeGov path for common visitor goals such as install, review, feedback intake, delivery, role packs, PR readiness, or messy-repo hardening.
---

# Choose Your Path

Use this page when you know the job you want VibeGov to help with, but you do not yet know the right VibeGov concept or doc name.

Each path is deliberately short. Open the first linked page, follow the action, then use the second link only when you need the fuller contract.

## I want to install VibeGov in a repo

Start with [Quick Start](/docs/quickstart), then use [Bootstrap](/docs/bootstrap) as the full contract.

Minimum sequence:

1. choose `init`, `update`, or `review`
2. fresh-read `agent.txt`, `bootstrap.json`, and the Bootstrap doc
3. stop before product-code implementation until the repo-local governance layer is installed or the gap is recorded

## I want to review a repo without changing code

Start with [Bootstrap Review](/docs/bootstrap-review), then use [Exploration mode](/docs/execution-modes#exploration-mode) when the review turns into findings.

Minimum sequence:

1. audit the repo against the bootstrap contract
2. record missing, weak, or conflicting governance state
3. raise issues or blocker evidence instead of claiming remediation work was completed

## I want to turn human feedback into ready work

Start with [Feedback Intake](/docs/feedback-intake), then use the [Bootstrap Feedback Prompt](/docs/bootstrap-feedback-prompt) when feedback came from a bootstrap run.

Minimum sequence:

1. separate actionable feedback from commentary
2. scrub private or person-specific details
3. create or update GitHub issues with acceptance criteria and evidence needs

## I want to run delivery work

Start with [Execution Modes](/docs/execution-modes), then use [Checkpoint Reporting](/docs/checkpoint-reporting) to close the loop.

Minimum sequence:

1. confirm the work is Development mode
2. bind the change to an issue, spec, or explicit acceptance criteria
3. implement, validate, and report evidence before making completion claims

## I want to prepare a PR for merge

Start with [Release Artifact and Test Prep](/docs/release-artifact-and-test-prep), then use [Workflow Quality Rubric](/docs/workflow-quality-rubric) to check review readiness.

Minimum sequence:

1. name the issue, spec, branch, and changed files
2. run the validation gates that match the touched surface
3. record risks, blockers, and follow-up work in the PR or issue

## I want to know which role pack to use

Start with the [Role Catalogue](/roles), then use its shared role-pack assets if the work needs more than one role.

Minimum sequence:

1. start with the smallest useful role set
2. use Planner for intake, Developer for implementation, Verifier for independent validation, and Maintainer for release/repo hygiene
3. add specialist roles only when the job has a clear specialist output

## I want to harden an existing messy AI-agent repo

Start with [Bootstrap Update](/docs/bootstrap-update), then use [Mode Selection and Evidence Closing](/docs/mode-selection-and-evidence-closing) when the cleanup needs scoped follow-up work.

Minimum sequence:

1. preserve valid existing governance state
2. repair weak, missing, duplicated, or contradictory state against the current bootstrap contract
3. record unresolved blockers or follow-up issues before delivery agents resume product-code work

## If none of these fits

Use [Start Here](/docs/start-here) for orientation, or [Overview](/docs/intro) for the shortest product explanation.
