---
sidebar_position: 5
---

# GOV 05 TESTING

- Source rule: [gov-05-testing.mdc](https://github.com/governance-foundation/vibegov.io/blob/main/.governance/rules/gov-05-testing.mdc)
- Download raw file: [gov-05-testing.mdc](https://raw.githubusercontent.com/governance-foundation/vibegov.io/main/.governance/rules/gov-05-testing.mdc)

This page embeds the canonical rule text and adds commentary after each section to explain why the section exists.

## Governance: Testing

> Commentary: Ensures implementation is validated by evidence, not assumptions.

## Core Testing Principle

Tests are proof of claims, not ceremony.

Each important claim should map to verifiable evidence.

> Commentary: Ensures implementation is validated by evidence, not assumptions.

## Test Design Standards

- prefer behavior-focused tests over implementation-detail tests
- include success and failure paths
- include edge cases for high-risk logic
- keep tests deterministic and repeatable

> Commentary: Ensures implementation is validated by evidence, not assumptions.

## Testing Layers (use what fits scope)

- **Unit**: isolated logic correctness
- **Integration**: component boundaries and contracts
- **End-to-end**: user-critical workflows
- **Regression**: prevent behavior drift

Not every change needs every layer, but critical paths must be covered.

> Commentary: Ensures implementation is validated by evidence, not assumptions.

## Unit-Test Expectations

Unit tests are expected when the scoped behavior can be proved meaningfully at the isolated-logic layer, especially for:
- pure functions, transforms, selectors, parsers, validators, and mappers
- branching business logic with clear input/output behavior
- bug fixes where the failure can be reproduced below the integration/UI layer
- boundary conditions and edge cases in deterministic code paths

Unit tests are not sufficient by themselves when the governed claim depends on:
- persistence, refresh, sync, or deletion behavior
- cross-component or cross-service contracts
- user-visible workflows, permissions, or navigation
- environment/runtime wiring, startup, deployment, or release-readiness behavior

When unit tests are the right layer, they should be preferred over slower broad tests for proving isolated logic. When the claim extends beyond isolated logic, pair unit coverage with the higher-layer evidence the claim actually needs.

> Commentary: Clarifies when unit tests are expected, and prevents them from being overclaimed as full proof for broader behavioral changes.

## Test-to-Intent Traceability

For governed delivery, link tests back to:
- OpenSpec requirement IDs,
- acceptance criteria,
- or explicit behavior statements.

OpenSpec-first rule:
- if required behavior is not represented in OpenSpec, add/update requirement IDs before marking coverage complete.

> Commentary: Ensures implementation is validated by evidence, not assumptions.

## Test Execution Expectations

For each meaningful test run, explicitly consider:
- the exact claim / requirement / acceptance criterion under test
- which scenario classes were exercised
- which scenario classes were blocked, deferred, or not applicable
- what kind of evidence was produced
- whether the evidence directly proves the claim or only a proxy
- what remains unverified and what follow-up artifact was created

> Commentary: Makes the execution record show what was actually proved, what was skipped, and where evidence is weak or incomplete.

## Scenario Coverage Expectations

Consider these scenario classes where relevant:
- happy path
- invalid input
- empty state
- loading state
- error state
- cancel/back-out path
- persistence/refresh behavior
- downstream side effects
- role/permission variation
- keyboard/accessibility path

Not every change needs every scenario class, but the execution record should make coverage boundaries visible.

> Commentary: Prevents vague "tested it" reporting by making the scenario envelope explicit.

## Result Classification

Meaningful test outcomes should be classifiable as:
- `Verified`
- `Invalidated`
- `Blocked`
- `Deferred`
- `Not applicable`

This helps prevent weak “green enough” reporting.

> Commentary: Forces honest status labels instead of collapsing everything into pass/fail hand-waving.

## Proof Strength

Evidence should be judged honestly:
- **direct proof** — clearly proves the intended behavior
- **partial proof** — proves only part of the claim
- **surrogate-only proof** — proves a proxy, not the actual outcome

Passing build output, a success toast, or a 200 response is not always direct proof of the intended behavior.

> Commentary: Stops proxy evidence from being reported as if it fully proved the governed claim.

## Persistence and Post-Action Proof

When work changes persisted, synced, deleted, or otherwise durable state, verification should check the post-action reality where relevant:
- refresh/reload state
- source-of-truth state
- downstream consumer state
- deletion/removal persistence
- sync behavior after the action

UI-only success must not be treated as sufficient proof for mutation-heavy work.

> Commentary: Reinforces that durable state changes need durable proof, not just a transient success signal.

## Execution Expectations

- run targeted tests during iteration
- run appropriate regression checks before completion
- add or update unit tests when isolated logic is changed and unit coverage is the right proving layer
- do not treat unit tests as sufficient when the governed claim depends on higher-layer behavior
- capture failing output when blocked
- avoid marking complete without evidence
- generated tests only count when they actually prove the intended behavior or requirement
- passing tests are evidence only when the asserted behavior matches the governed claim
- if meaningful coverage is missing, create follow-up work instead of silently treating the gap as acceptable

> Commentary: Clarifies that unit tests are expected for isolated logic changes, but are not a free pass for broader behavior claims.

## Test Quality Anti-Patterns

- flaky tests accepted as "good enough"
- broad snapshot assertions without intent
- coverage metrics used without behavioral relevance
- tests that pass but do not prove the requirement
- partial coverage reported as full validation
- surrogate-only proof reported as direct proof

> Commentary: Ensures implementation is validated by evidence, not assumptions.
