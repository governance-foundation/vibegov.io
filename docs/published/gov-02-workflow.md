---
sidebar_position: 2
---

# GOV 02 WORKFLOW

- Source rule: [gov-02-workflow.mdc](https://github.com/governance-foundation/vibegov.io/blob/main/.governance/rules/gov-02-workflow.mdc)
- Download raw file: [gov-02-workflow.mdc](https://raw.githubusercontent.com/governance-foundation/vibegov.io/main/.governance/rules/gov-02-workflow.mdc)

This page embeds the canonical rule text and adds commentary after each section to explain why the section exists.

## Governance: Core Workflow

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Delivery Loop

Follow this loop for meaningful changes:

`Observe -> Plan -> Implement -> Verify -> Document`

> Commentary: Establishes the default end-to-end execution pattern so delivery quality is repeatable.

### 1) Observe

- Confirm the problem, affected scope, and current operating mode.
- Identify constraints, dependencies, and non-goals.
- Note whether the work is development or exploration, and whether release-readiness checks are in scope.

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### 2) Plan

- Make intent explicit before execution.
- Define acceptance criteria, risks, and required evidence for the chosen mode.
- Spec-first: bind work to requirement IDs before implementation starts.
- If requirement coverage is missing, create/update spec requirements first.
- If intake item is under-defined, expand it to implementation-grade issue quality before execution.

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### 3) Implement

- Apply the smallest coherent action that matches the active mode.
- Avoid unrelated cleanup unless explicitly approved.
- If the mode changes, state it explicitly and update the evidence plan.

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### 4) Verify

- Produce mode-appropriate evidence that intent is satisfied.
- Capture failure behavior, blockers, and residual risk when relevant.
- Feed newly discovered gaps back into tracked backlog work before claiming completion.

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### 5) Document

- Record what changed, what was learned, and how it was verified.
- Keep handoff artifacts understandable by a new contributor.
- Update traceability so requirement IDs map to evidence and follow-up work.

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Explicit Orchestration and Bounded Work Units

Governed agent execution should use explicit orchestration and bounded work units.

- `GOV-02-ORCH-001` The parent orchestration context must select one tracked unit of work before delegation starts.
- `GOV-02-ORCH-002` The selected unit must have an explicit owner, intent, and expected evidence bundle.
- `GOV-02-ORCH-003` The parent should announce delegation, receive a visible result, and only then proceed to the next unit by default.
- `GOV-02-ORCH-004` Hidden nested worker-coordinator chains should be avoided by default because they reduce visibility, weaken accountability, and complicate recovery.
- `GOV-02-ORCH-005` Prefer sequential bounded stages when they improve observability, recoverability, or handoff clarity.
- `GOV-02-ORCH-006` Parallel lanes are allowed only when each lane still has explicit ownership, bounded scope, visible checkpoints, and recoverable failure handling.

This section governs work structure, not implementation details. It does not prescribe specific runtimes, queue settings, model choices, shell commands, or machine-local paths.

> Commentary: Defines the default shape of governed multi-agent execution so coordination stays visible, auditable, and recoverable.

## Execution Modes

All meaningful work must declare an active execution mode. Silent mode mixing produces weak evidence and false completion claims.

VibeGov uses two operating modes:
- **Development**
- **Exploration**

Release verification is not a third peer mode. It is part of Development's delivery path and release-readiness checks.

> Commentary: Defines the allowed delivery postures so evidence and completion standards match the work being performed.

### Exploration mode

Use when the objective is discovery, validation, or backlog hydration rather than immediate product change.

Allowed work:
- inspect live behavior from an end-user or operator perspective
- compare observed behavior with specs, traceability, and existing test intent
- create or refine backlog items, spec gaps, and planned verification follow-up

Required evidence:
- reviewed scope and scenarios exercised
- observed surfaces/states, including revealed or post-action states
- per-scenario classification: `Validated`, `Invalidated`, `Blocked`, or `Uncovered-spec-gap`
- tracked follow-up artifacts for every invalidated, blocked, or uncovered item
- next recommended backlog action

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### Development mode

Use when code, spec, content, automation, release-readiness checks, or shipping mechanics are being changed or executed to satisfy tracked intent.

Allowed work:
- update the smallest coherent set of artifacts needed for the scoped change
- add or adjust automated/manual verification needed to prove the change
- add or maintain build, packaging, deploy, startup, smoke, and release-readiness machinery
- execute release-readiness checks against a candidate artifact or target environment
- repair discovered regressions only when they are inside the approved scope or explicitly re-scoped

Required evidence:
- linked issue/task and requirement IDs
- changed artifacts
- executed checks/tests/manual proof with outcomes
- release-readiness or shipping evidence when applicable
- any failure behavior or residual risk that still matters
- updated documentation and traceability

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Release Verification Within Development

Release verification is part of Development, not a separate operating mode.

Use it when Development needs to confirm a candidate artifact is safe to release, safe to promote, or behaving correctly after ship/deploy.

Typical checks include:
- build/release verification steps
- artifact startup/bootstrap validation
- deployment state or environment validation
- version/build confirmation in the target environment
- critical route/workflow smoke checks
- post-release checks that capture regressions, drift, rollout issues, or broken integrations as tracked follow-up work

If required release-readiness checks fail, release creation or promotion must stop until Development resolves the gap.

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Mode Discipline

- Choose the execution mode during planning and state it in checkpoints and handoffs.
- If work shifts between Exploration and Development, announce the mode change before continuing.
- If Development enters release verification or shipping checks, state that checkpoint explicitly even though the mode remains Development.
- Do not use Development evidence standards to judge exploratory work, and do not use exploratory notes as a substitute for Development or release-readiness evidence.

> Commentary: Prevents silent workflow shifts that hide evidence gaps or mix incompatible completion standards.

## Backlog Hydration

Backlog hydration is part of the core workflow, not a side activity.

- Exploration mode must convert discovered gaps into tracked backlog artifacts before the reviewed scope can be considered complete.
- Development release-readiness and post-ship checks must capture new regressions, drift, rollout gaps, or integration failures as tracked follow-up work.
- Development may surface adjacent gaps, but those gaps must be tracked separately unless scope is explicitly expanded.

> Commentary: Treats discovery as a required planning input instead of informal side notes.

## Blocker Escalation and Move-On Behavior

Autonomy is expected, not unrestricted.

Escalate when:
- requirements are contradictory or ambiguous
- work crosses sensitive/security boundaries
- out-of-scope files or approvals are required
- verification is repeatedly failing without a clear next experiment
- a blocker prevents meaningful confidence in the current item

When blocked:
- spend bounded effort to confirm the blocker and capture evidence
- create or link the blocker artifact and record impact on scope
- recommend the next best unblocked item or route
- move on instead of freezing the whole loop unless no ready work remains

A blocker pauses the current item. It does not pause delivery unless it removes all viable next work or requires a human decision.

> Commentary: Keeps delivery moving by turning blockers into tracked decisions instead of stalled work.

## Scope Discipline

- Stay inside the agreed directories and task boundaries.
- Do not expand scope silently.
- If scope grows, document the reason and request explicit approval.

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Completion Standard

A task is complete only when:
1. the active mode's intent is satisfied,
2. the active mode's required evidence is captured,
3. documentation and traceability are updated,
4. follow-up backlog artifacts exist for remaining gaps,
5. unresolved risks are explicitly listed.

Claims of `done` without mode-appropriate evidence are incomplete.

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Backlog Continuity

After finishing one item, continue to the next highest-priority unblocked item until:
- backlog is exhausted,
- a hard blocker removes all ready work,
- a human decision is required,
- or a defined stop limit is reached.

When stopping, report:
- completed work,
- active execution mode at stop,
- remaining backlog count or uncovered scope,
- next recommended item,
- blockers and required decisions.

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.
