# Squad Operating Model

VibeGov role packs separate accountability, execution, evidence, and cadence so work can move quickly without losing governance.

The operational labels should remain neutral. Metaphors such as Marduk can explain the idea of an all-seeing coherence owner, but project artifacts should use role names, board states, and routing labels.

## Core Operating Principles

1. Planner owns flow and issue quality.
2. Architect owns system shape, boundaries, and technical direction.
3. Designer owns product/UI experience intent and the Design Language System.
4. Developer owns delivery of ready work.
5. Automation owns objective proof.
6. Security can block unsafe work.
7. Operator keeps the system moving but does not decide product or technical direction.
8. `develop` or the repo's configured integration branch is the integration source of truth.
9. `main` or the repo's configured release branch is the release source of truth.
10. Ready means the issue is clear, scoped, risk-classified, and releasable.
11. Done means the change is integrated, green, and closure criteria are met.
12. Branches are temporary implementation workspaces, not product states.
13. Feature toggles are configuration and product controls, not unfinished-code hiding places.
14. Research, design, and exploration feed specification/readiness, not Developer directly.
15. Agents may propose broadly but act only within their authority.

## Source of Truth Rules

| Concern | Source of truth |
|---|---|
| Operational state | Project board or repo-declared equivalent |
| Work contract | Issue |
| Requirements and acceptance | OpenSpec, spec, or issue brief |
| Technical direction | ADRs / architecture notes |
| Design intent | Design brief, DLS contract, component/flow spec |
| Integration state | `develop` or configured integration branch |
| Release state | `main` or configured release branch |
| Objective quality proof | CI / automation pipeline |
| Follow-up and unresolved work | Linked issues |

## Board Columns

Use these columns when the project has a governed board:

- `No status` — newly created item, not yet triaged. Owner: Planner / Operator.
- `Backlog` — valid item, not yet ready to build. Owner: Planner.
- `Ready` — clear, scoped, releasable, and ready for Developer. Owner: Planner.
- `In Progress - In Dev` — Developer is actively implementing. Owner: Developer.
- `In Review - In Test` — validation, automation, verification, or release confidence checks are happening. Owners: Developer / Verifier / Automation.
- `Done` — merged into integration branch and green. Owners: Developer / Operator.
- `Blocked` — cannot proceed due to missing decision, dependency, access, or failing condition. Owner: blocker owner; Operator tracks.
- `Parking Lot` — valid idea deliberately outside current scope. Owner: Planner.

If a repo uses a different board, preserve local names but maintain the same semantics.

## Role Taxonomy

- **Control plane:** Architect, Designer, Security, Operator.
- **Flow / intake:** Planner.
- **Discovery:** Researcher, Explorer.
- **Delivery:** Developer.
- **Confidence:** Verifier and automation.
- **Release stewardship:** Maintainer.
- **Communication:** Documenter.

## Authority Boundaries

- Planner owns intake, priority, decomposition, backlog hygiene, Ready handoff, and issue quality.
- Architect owns system shape, boundaries, technical direction, developer-experience architecture, and cross-role coherence.
- Designer owns UI/UX intent, Design Language System contracts, component/state patterns, and accessibility-by-design.
- Security owns threat, privacy, compliance, exposure, secrets/auth, and safety constraints.
- Operator owns cadence, blocked/stale follow-up, task state, sweep reports, and reporting hygiene.
- Developer executes Ready delivery work and recovers failures caused by the change.
- Verifier gathers independent confidence that reality matches the contract.
- Maintainer owns repo hygiene, changelog/version/release readiness, and stale branch/toggle cleanup.
- Documenter owns written clarity for user-facing and repo-facing documentation.
- Automation owns mechanical gates and evidence logs.

Specialists may produce non-code tickets and handoff artifacts. They should not bypass Planner/Architect and assign ambiguous work directly to Developer unless the project explicitly authorizes that mode.

## Neutral Routing Labels

Prefer neutral project labels over mythology or role-name-only labels.

Project state:

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

Risk:

- `risk:low`
- `risk:medium`
- `risk:high`

Type:

- `type:bug`
- `type:feature`
- `type:refactor`
- `type:docs`
- `type:test`
- `type:security`
- `type:research`
- `type:exploration`
- `type:chore`
- `type:release`

Area:

- `area:frontend`
- `area:backend`
- `area:api`
- `area:infra`
- `area:auth`
- `area:docs`
- `area:tests`
- `area:deps`
- `area:ui`
- `area:data`
- `area:ci`

Operational:

- `ops:stale`
- `ops:needs-owner`
- `ops:needs-follow-up`
- `ops:blocked-check`
- `ops:ready-queue-low`
- `ops:handoff-needed`
- `ops:waiting-review`

Use labels to route work without hiding ownership.

## Definition of Ready

An issue can move to Ready only when:

- the goal is clear
- acceptance criteria exist
- risk level is assigned
- affected area is known or bounded
- required research is complete or explicitly not applicable
- required exploration is complete or explicitly not applicable
- required design input is complete or explicitly not applicable
- required architecture input is complete or explicitly not applicable
- required security input is complete or explicitly not applicable
- toggle/configuration behavior is defined if relevant
- the issue can land on the integration branch as a releasable increment
- no unresolved product or architecture questions remain

Ready is the contract between Planner and Developer.

## Definition of Done

An issue is Done only when:

- code/docs/config changes are integrated into the configured integration branch
- integration pipeline is green or the repo-declared objective gate passes
- acceptance criteria are met
- tests are updated or added where required
- docs/config are updated where required
- toggle/configuration behavior is implemented and tested where relevant
- no unresolved security, architecture, or verification gates remain
- follow-up issues are created where needed
- temporary branches are closed or marked for cleanup
- board state is updated

Done means green integration state, not merely that code was written.

## Developer Integration Policy

All development must converge on the configured integration branch.

Common branch roles:

- `develop` = integration truth
- `main` = release truth
- feature/fix/docs/chore branches = temporary implementation workspaces only

Before starting work, Developer should:

- check out integration branch
- pull latest integration branch
- confirm working tree is clean
- create a short-lived branch or worktree

Before marking work complete, Developer should:

- refresh from latest integration branch
- resolve conflicts
- validate the change
- integrate according to repo policy
- push or open PR according to repo policy
- watch automation
- fix pipeline failures caused by the change

Forbidden branch behavior:

- no wild forks
- no long-lived feature branches
- no parallel product states
- no hidden future versions
- no speculative half-products in code

## Repo Policy Modes

Do not assume every repo uses the same integration policy. Preserve the local repository's declared mode:

- PR-required
- direct-to-develop allowed
- release-gated
- protected-main only

The invariant is not one workflow shape. The invariant is clear source of truth, visible ownership, objective validation, and safe convergence.

## Feature Toggle Policy

Feature toggles are allowed only when explicit, configured, owned, and part of the intended product or release model.

Allowed toggle types:

- entitlement toggle: paid, plan, tier, tenant, customer, or account access
- environment toggle: dev/stage/prod configuration
- operational kill switch: disable risky behavior quickly
- release toggle: temporary staged rollout
- experiment toggle: A/B or controlled experiment

Every toggle must define:

- toggle name
- toggle type
- purpose
- owner
- configuration location
- default state
- enabled behavior
- disabled behavior
- test coverage for both states
- documentation/config updates
- removal condition if temporary

Toggles are configuration and product controls, not hiding places. A feature must not require a code edit to enable after development.

## Escalation Policy

Developer must stop and escalate when:

- the issue is ambiguous or larger than scoped
- acceptance criteria conflict with current behavior
- a new dependency, framework, or major library is needed
- public API contracts are affected
- data model or migrations are affected
- auth, permissions, privacy, or secrets are affected
- infrastructure, CI/CD, or deployment files are affected
- an undefined toggle is needed
- integration branch is not clean
- pipeline cannot be restored
- implementation would create a long-lived branch or hidden future state

Escalation targets:

- ambiguous scope -> Planner
- architecture impact -> Architect
- UI/UX/DLS impact -> Designer
- security/privacy/secrets/auth -> Security
- test confidence issue -> Verifier
- board/state/blocker issue -> Operator
- release/version/changelog issue -> Maintainer
- documentation gap -> Documenter
- unknown external evidence -> Researcher
- unknown internal behavior -> Explorer

## No Silent Scope Expansion

Agents may discover additional work, but they must not silently include it in the current issue unless it is necessary to complete the issue safely.

Additional work should become one of:

- follow-up issue
- blocker
- architecture review item
- security review item
- design review item
- parking lot item
- separate research/exploration/design ticket

The current issue should remain clean, bounded, and auditable.

## Specialist Delegation Model

Planner and Architect can delegate non-code work before Developer handoff:

```text
Raw item
 ↓
Planner triage
 ↓
Research / Exploration / Design / Architecture / Security / Documentation tickets as needed
 ↓
Supporting artifacts completed
 ↓
Architect and/or Planner integrate findings
 ↓
Ready Dev issue created
 ↓
Developer delivers
```

Researcher, Explorer, Designer, Security, and Documenter feed Planner/Architect. They do not bypass Planner/Architect and assign work directly to Developer.

Only implementation tickets should be marked `project:ready-for-dev`.

## Recommended Ticket Outputs

- Research ticket -> research brief with findings, options, recommendation, risks, open questions, and sources/evidence.
- Exploration ticket -> exploration report with inspected surfaces, evidence, current behavior, reproduction notes, spec gaps, and recommended next steps.
- Design ticket -> design brief with user flow, screen/state notes, component behavior, empty/loading/error states, copy notes, accessibility considerations, and DLS constraints.
- OpenSpec / architecture ticket -> spec or ADR with goals, context, requirements, non-goals, architecture notes, constraints, risks, and acceptance criteria.
- Dev ticket -> implementation report with issue link, branch/worktree, files changed, acceptance criteria, validation, toggle/config checks, integration evidence, risks, and follow-ups.
- Security review -> risk areas, findings, required controls, and decision: approved, changes required, or human review required.
- Verification ticket -> verification report with scope, acceptance evidence, regression checks, result, and required fixes.
- Operator sweep -> cadence report with board health, stale items, blocked items, Ready queue health, required follow-ups, and flow risks.

## Risk Routing

Low-risk work may be delivered by Developer once validation passes. Examples: small bug fixes, docs updates, isolated UI changes, local tests, simple copy changes.

Medium-risk work may require additional review depending on area. Examples: new feature flow, shared utility changes, API behavior changes, dependency updates, meaningful refactors, config changes.

High-risk work requires Architect, Security, Verifier, or human review before Done. Examples: auth, permissions, privacy, secrets, payments, data model changes, migrations, infrastructure, CI/CD, deployment scripts, public API contracts, major dependencies, or major frameworks.

## Scaling Across Repositories

For one repo, start with:

- Planner
- Architect
- Developer
- Verifier
- Operator
- Automation

Add specialists as needed:

- Designer
- Researcher
- Explorer
- Security
- Documenter
- Maintainer

For multi-repo platforms:

- Master Architect owns cross-repo coherence, contracts, boundaries, and platform direction.
- Master Planner / Operator owns cross-repo flow visibility and cadence.
- Repo-level Planner / Architect / Developer / Verifier / Automation own local convergence.
- Shared specialists support bounded reviews and artifacts.

Split repos only when the boundary reduces coordination: different deployment lifecycle, ownership/domain, technology stack, release cadence, API/contract boundary, excessive agent contention, context-loading cost, or blocked workstreams.

Do not split repos because microservices sound scalable, because more repos feels enterprise, or because adding agents feels productive.

## Recommended Metrics

Use a small number of metrics to keep the system honest:

- Ready queue depth
- cycle time from Ready to Done
- blocked item age
- integration branch red time
- reopened issues
- escalations by type
- stale branches
- temporary toggles older than removal condition
- issues merged without complete acceptance evidence
- issues returned from Developer to Planner for unclear scope

## Final Discipline

Ready means releasable. Done means green integration state. Toggles are configuration, not hidden code. Branches are temporary, not product states. Everything developed must converge.
