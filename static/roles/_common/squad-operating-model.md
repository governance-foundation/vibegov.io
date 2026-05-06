# Squad Operating Model

VibeGov role packs separate accountability, execution, evidence, and cadence so work can move quickly without losing governance.

## Core Contract

- **Ready is the contract.** Delivery work should not reach Developer until the goal, acceptance criteria, risks, inputs, and landing path are clear enough to execute.
- **Develop is the integration truth.** Work should converge on the configured integration branch or repository policy equivalent. Short-lived branches are implementation steps, not alternate product realities.
- **Automation is the gate.** A work item is not Done until required objective checks pass for the integration state.
- **No wild forks.** Avoid long-lived speculative branches, unowned toggles, hidden partial features, and disconnected workstreams.

## Role Taxonomy

- **Control plane:** Architect, Designer, Security, Operator.
- **Flow / intake:** Planner.
- **Discovery:** Researcher, Explorer.
- **Delivery:** Developer.
- **Confidence:** Verifier and automation.
- **Release stewardship:** Maintainer.
- **Communication:** Documenter.

## Authority Boundaries

- Planner owns intake, priority, decomposition, backlog hygiene, and delivery readiness.
- Architect owns system shape, boundaries, technical direction, developer-experience architecture, and cross-role coherence.
- Designer owns product/UI experience intent and Design Language System contracts.
- Security owns threat, privacy, compliance, exposure, and safety constraints.
- Operator owns cadence, blocked/stale follow-up, task state, and reporting hygiene.
- Developer executes ready delivery work.
- Verifier gathers independent confidence that reality matches the contract.

Specialists may produce non-code tickets and handoff artifacts. They should not bypass Planner/Architect and assign ambiguous work directly to Developer unless the project explicitly authorizes that mode.

## Neutral Routing Labels

Prefer neutral project labels over mythology or role-name-only labels:

- `project:needs-analysis`
- `project:needs-research`
- `project:needs-exploration`
- `project:needs-design`
- `project:needs-architecture`
- `project:needs-security`
- `project:needs-docs`
- `project:ready-for-dev`
- `project:blocked`
- `project:cross-repo`
- `project:parking-lot`

Use type, area, risk, and operational labels to route work without hiding ownership.

## Repo Policy Modes

Do not assume every repo uses the same integration policy. Preserve the local repository's declared mode:

- PR-required
- direct-to-develop allowed
- release-gated
- protected-main only

The invariant is not one workflow shape. The invariant is clear source of truth, visible ownership, objective validation, and safe convergence.
