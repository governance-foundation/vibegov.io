---
sidebar_position: 8
---

# GOV 08 EXPLORATORY REVIEW

- Source rule: [gov-08-exploratory-review.mdc](https://github.com/governance-foundation/vibegov.io/blob/main/.governance/rules/gov-08-exploratory-review.mdc)
- Download raw file: [gov-08-exploratory-review.mdc](https://raw.githubusercontent.com/governance-foundation/vibegov.io/main/.governance/rules/gov-08-exploratory-review.mdc)

This page embeds the canonical rule text and adds rule-specific commentary to explain why each section exists.

## GOV-08 — Exploratory Review

> Commentary: Frames GOV-08 as the rule for turning exploratory review into usable delivery input.

## Purpose

Exploratory review is a structured discovery loop that runs alongside normal delivery.

Its job is to continuously:
- validate product behavior from an end-user or operator perspective,
- reveal uncovered surfaces, states, and scenario gaps,
- hydrate backlog with tracked follow-up work before those gaps turn into release debt.

Exploratory review is not a substitute for implementation or release verification. Its primary output is evidence-backed backlog hydration.

> Commentary: Explains why exploration must create evidence and backlog signal, not just impressions.

## Execution constraints

During exploratory execution:

1. **No production code changes**
   - Exploratory is a discovery and validation activity, not implementation.
   - Keeping code unchanged preserves clean evidence of current user experience.
   - Fixes discovered here must be routed into normal delivery via issue -> spec -> implementation.

2. **Automation is optional supporting evidence, not the completion signal**
   - Exploratory completion does not require automation suites when no implementation occurs.
   - Route or feature coverage must be established through scenario-based review of live behavior.
   - If work shifts into implementation or automated verification, switch modes and follow that mode's evidence rules.

Exploratory output feeds normal delivery flow for implementation, automated validation, and release decisions.

> Commentary: Sets boundaries so exploratory review does not mutate product state or drift into coding.

## Operating model

- Exploratory is continuous (always active as a quality/discovery engine).
- It can run by explicit user trigger and/or schedule.
- It is parallel to normal delivery behavior, not a replacement lifecycle.
- A review unit can be a route, page, feature slice, API surface, or operational workflow, but the scope must be explicit.

> Commentary: Defines how exploratory passes are scoped, observed, and translated into findings.

## Review anti-patterns to prevent

- Do not treat "page rendered" as "page validated."
- Do not treat a toast, redirect, or visual confirmation as proof that persistence or mutation succeeded.
- Do not collapse unrelated uncovered contracts into one vague finding.
- Do not report findings without backlog/spec/traceability artifacts.
- Do not allow a local blocker to freeze a whole review queue.

> Commentary: Calls out browsing and opinion patterns that produce weak discovery evidence.

## Review posture

Review the product like the person who depends on it, not like a passive observer.

For each review unit:
- state the user or operator goal
- identify preconditions, permissions, seed/state needs, and dependencies
- traverse the unit through realistic primary and secondary flows
- treat newly revealed surfaces and state transitions as in-scope, not optional extras

Revealed surfaces/states include, at minimum, dialogs, drawers, menus, validation surfaces, loading/empty/error/success states, disabled/enabled transitions, post-action controls, redirects, and follow-on states reached after interaction.

> Commentary: Shifts exploratory work from surface browsing to goal-driven operational review.

## Scenario-matrix review (mandatory)

A review unit is incomplete until its scenario matrix is defined and every scenario is classified.

At minimum, include scenarios for:
- happy path / primary flow
- cancellation or abort path
- invalid input path
- empty state
- loading state
- edge and error behavior
- keyboard/accessibility or non-pointer interaction
- refresh/back-forward persistence path where applicable
- state transitions and post-action states
- permission, session, data-shape, or dependency-driven variations when relevant

For each scenario:
1. exercise it from start to finish or until blocked
2. compare expected vs actual behavior against specs, traceability, and existing test intent
3. record evidence notes
4. assign one classification:
   - `Validated`
   - `Invalidated`
   - `Blocked`
   - `Uncovered-spec-gap`

> Commentary: Requires explicit scenario coverage so reviewers know what was and was not exercised.

## Persistence and mutation verification rule

Any action that claims to save, mutate, delete, sync, submit, import, connect, or reconfigure must be verified by resulting state/persistence/contract outcome — not just UI confirmation.

Acceptable verification includes refresh checks, downstream-state checks, source-of-truth checks, or other evidence that the claimed mutation actually took effect.

> Commentary: Checks whether changes survive reloads, transitions, and follow-up actions when persistence matters.

## Classification rules

Use these classifications precisely:
- `Validated`: behavior is exercised, specified sufficiently, and observed to match intent.
- `Invalidated`: behavior is exercised and observed to fail, regress, or contradict intent.
- `Blocked`: behavior cannot be meaningfully exercised because of a real prerequisite or external dependency blocker.
- `Uncovered-spec-gap`: behavior or surface is reachable, but the intended contract is missing, ambiguous, or not traceable enough to judge.

A scenario that is only partially exercised must still end in one of the classifications above, with the evidence note explaining the limit.

> Commentary: Standardizes finding outcomes so triage can distinguish validated behavior, gaps, and blockers.

## Surface and state coverage (mandatory)

A page, route, or feature review is incomplete until all meaningful elements, controls, sections, and revealed surfaces/states are classified through the scenario matrix.

- Do not stop after the first visible happy path.
- Do not ignore surfaces revealed by clicks, submissions, errors, redirects, or state changes.
- Do not batch unrelated uncovered contracts into one vague finding.
- Do not report completion while any explored surface remains unclassified or untracked.

> Commentary: Expands review beyond default screens into empty, loading, error, permission, and post-action states.

## Required follow-up artifacts

Every non-validated classification requires tracked follow-up artifacts before the review unit can be marked complete.

Required follow-up by classification:
- `Invalidated`: create or link a focused backlog item, capture expected vs actual behavior, and record required spec/traceability/test follow-up.
- `Blocked`: create or link an explicit blocker artifact, capture what was attempted, why confidence is limited, and what work can continue elsewhere.
- `Uncovered-spec-gap`: create or link the gap artifact, record the missing or ambiguous contract, and identify the implementation/test follow-up path.

If multiple scenarios expose different contracts, create or link separate artifacts for each distinct contract.

> Commentary: Turns discovered issues into tracked artifacts with enough context for delivery.

## Blocker severity model

Classify blockers before deciding how to respond:
- `Local-blocker`: only this route/use-case is blocked
- `Flow-blocker`: blocks a cluster of related routes/use-cases
- `System-blocker`: runtime, environment, auth, provider, or dependency issue affecting broad execution
- `Governance-blocker`: missing or contradictory requirement/instruction that needs clarification

The response should scale with the blocker, but the default remains: make it visible, bound its impact, and keep unaffected work moving.

> Commentary: Separates hard blockers from lower-severity findings so escalation matches impact.

## Route-order heuristic

When reviewing many routes and no stronger product-specific dependency exists, use this default order:

1. **Entry routes**
   - landing, auth, onboarding, first-run, and public entry surfaces
2. **Core workflow routes**
   - the main product paths users depend on most
3. **Settings/admin/configuration routes**
   - billing, permissions, integrations, policy, account, and operational setup
4. **Edge/special/fallback routes**
   - empty states, error states, redirects, exception paths, and rarely used operational surfaces

If a product-specific dependency order is stronger, use that instead — but make the ordering logic explicit.

> Commentary: Prioritizes review paths by user value and risk instead of arbitrary navigation order.

## Required exploratory output (per review unit)

- review unit and user/operator goal
- preconditions and confidence limits
- scenario matrix with classifications
- elements, states, and revealed surfaces exercised
- expected vs actual evidence notes
- issues/tasks/spec-gap artifacts created or linked
- next recommended backlog action or next route

For single-route or single-URL review, prefer the dedicated exploratory route report template so checkpoints remain uniform, artifact-complete, and comparable across runs.

> Commentary: Defines the report fields needed for exploration to feed planning and delivery.

## Artifact completeness rule

Findings without tracked artifacts are incomplete.

A note, screenshot, or verbal summary is not a completed exploratory result unless the corresponding follow-up work is linked in the backlog and its spec/traceability impact is recorded.

> Commentary: Blocks ceremonial reports by requiring each finding to link to usable follow-up state.

## Review completeness rubric

Every review unit should end with one explicit completeness label:
- `Complete` — all scenarios accounted for and artifacts created
- `Complete-with-blockers` — all reachable scenarios accounted for; blockers logged
- `Partial` — intentionally stopped; residual scope listed
- `Invalid-review` — insufficient coverage/evidence; must be redone

> Commentary: Gives reviewers a quality bar for judging whether the exploration was deep enough.

## Done criteria

Exploratory work is complete for a review unit only when:
- the scenario matrix is accounted for end-to-end,
- all invalidated, blocked, or uncovered items have tracked artifacts,
- spec/traceability/test follow-up is identified for those artifacts,
- the next recommended backlog action is stated,
- the final completeness label is recorded honestly.

> Commentary: Defines when an exploratory slice has enough evidence, findings, and follow-up to stop.

## Self-check before claiming completion

- Did I classify scenarios, or just sample them?
- Did I verify persistence/data outcome, or only surface reaction?
- Did every finding become a tracked artifact?
- Did I record confidence limits honestly?
- Did I move on from blockers correctly?

> Commentary: Forces a final coverage and evidence review before exploration is reported as complete.
