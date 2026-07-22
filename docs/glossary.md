---
sidebar_position: 3
title: Glossary
description: Plain-language definitions for common VibeGov terms, with links to the deeper docs that define the operating model.
---

# Glossary

Use this page when VibeGov language starts to feel dense.

Definitions here are short on purpose. Follow the linked docs when you need the fuller rule, workflow, or bootstrap contract.

## Core delivery terms

### Governance layer
A repo-local set of rules, project intent, specs, workflow expectations, and evidence standards that guide how humans and agents deliver software. See [VibeGov](/docs/intro) and [The VibeGov SDLC](/docs/vibegov-sdlc).

### Source of truth
The canonical place a project expects agents and humans to read from before acting. In VibeGov, `.governance/` is the governance source of truth. See [VibeGov](/docs/intro).

### Canonical contract
The single contract a workflow must satisfy rather than a loose set of optional suggestions. Bootstrap uses one canonical contract across init, update, and review modes. See [Bootstrap](/docs/bootstrap).

### Evidence
The proof that a claim is true: commands run, checks passed, artifacts created, screenshots captured, issues updated, or blockers recorded. See [Checkpoint Reporting](/docs/checkpoint-reporting) and [Test Execution Expectations](/docs/test-execution-expectations).

### Traceability
The connection between intent, issue, spec, implementation, validation, and follow-up work. Traceability keeps future changes understandable. See [The VibeGov SDLC](/docs/vibegov-sdlc).

### Spec binding
The act of linking work to a concrete spec, requirement, or explicit `SPEC_GAP` before claiming delivery confidence. See [Mode Selection and Evidence Closing](/docs/mode-selection-and-evidence-closing).

## Modes and work shapes

### Development
The mode for changing reality: building, fixing, validating, preparing release evidence, and leaving a reviewable delivery trail. See [Execution Modes](/docs/execution-modes).

### Exploration
The mode for discovering reality: review, audit, judgment, gap finding, and backlog hydration without pretending a fix has been delivered. See [Execution Modes](/docs/execution-modes) and [Exploratory Review Mode](/docs/exploratory-review-mode).

### Feedback Intake
The governed work shape for turning human feedback into ready issues, specs, priority notes, or dependency notes before implementation starts. See [Feedback Intake](/docs/feedback-intake).

### Evaluation
A criteria-based judgment pattern used inside Development or Exploration. It is not a third peer mode. See [Evaluation Pattern](/docs/evaluation-pattern).

### Backlog hydration
Turning findings, feedback, defects, or missing requirements into focused backlog items with enough context to execute later. See [Exploratory Review Mode](/docs/exploratory-review-mode).

## Bootstrap terms

### Bootstrap
The process of installing or checking the repo-local governance structure before product-code implementation. See [Bootstrap](/docs/bootstrap).

### Bootstrap init
Bootstrap mode for creating missing governance state in a repo. See [Quick Start](/docs/quickstart).

### Bootstrap update
Bootstrap mode for repairing or normalizing existing governance state against the same contract. See [Bootstrap Update](/docs/bootstrap-update).

### Bootstrap review
Bootstrap mode for auditing a repo against the same contract without claiming missing work was completed. See [Bootstrap Review](/docs/bootstrap-review).

### Pass gate
The minimum set of conditions that must be true before a workflow can honestly claim it passed. Bootstrap has a documented pass gate. See [Bootstrap](/docs/bootstrap#pass-gate-1).

### Role pack
A reusable bundle of operating instructions for an agent or role in a governed project. See [Agents Template](/docs/agents-template).

### Harness profile
Guidance for mapping a specific agent harness or runtime pattern onto VibeGov controls without making that tool the governance source of truth. See [Harness Profile: Codex](/docs/harness-profile-codex) and [Harness Profile: Minimal Claude Harness](/docs/harness-profile-minimal-claude).

## Evidence and completion terms

### Checkpoint
A visible progress update or artifact that records the current state, evidence, risk, blocker, or next action while work is still recoverable. See [Checkpoint Reporting](/docs/checkpoint-reporting).

### Completion claim
A statement that work is done. In VibeGov, completion claims need mode-appropriate evidence, not just confidence or output. See [Mode Selection and Evidence Closing](/docs/mode-selection-and-evidence-closing).

### Release verification
Build, startup, smoke, packaging, deployment, or release checks used to prove a candidate is safe enough to ship. Release verification belongs inside Development. See [Execution Modes](/docs/execution-modes#release-verification-lives-inside-development).

### Residual risk
Known uncertainty left after validation. It should be named instead of hidden behind a successful summary. See [Workflow Quality Rubric](/docs/workflow-quality-rubric).

## Agent and continuity terms

### Continuity
The durable state that lets future work resume without depending only on live chat memory. See [Agent Continuity Bootstrap](/docs/agent-continuity-bootstrap).

### Blocker
A proven condition that prevents meaningful progress or confidence in a scoped item. A blocker should be recorded, routed, and bounded. See [Blocker Escalation](/docs/blocker-escalation).

### Scoped blocking
The practice of pausing only the blocked item or surface while keeping unrelated ready work moving when possible. See [Build Loop, Exploratory Loop, Human Feedback Loop, and Scoped Blocking](/docs/build-exploratory-human-feedback-loops).

### Agent legibility
The quality of making agent work understandable through clear state, durable evidence, and recoverable handoffs. See [Published GOV 11](/docs/published/gov-11-agent-legibility-in-repo-truth).

### Drift
The gap that opens when implementation, intent, evidence, specs, or issue state stop matching each other. See [Published GOV 12](/docs/published/gov-12-drift-control-garbage-collection).

## Quick map

- New to the model? Read [Start Here](/docs/start-here).
- Unsure which mode applies? Read [Execution Modes](/docs/execution-modes).
- Trying to bootstrap a repo? Read [Bootstrap](/docs/bootstrap).
- Closing work? Read [Mode Selection and Evidence Closing](/docs/mode-selection-and-evidence-closing).
- Stuck on a dependency or missing decision? Read [Blocker Escalation](/docs/blocker-escalation).
