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

## Execution Expectations

- run targeted tests during iteration
- run appropriate regression checks before completion
- add or update unit tests when isolated logic is changed and unit coverage is the right proving layer
- do not treat unit tests as sufficient when the governed claim depends on higher-layer behavior
- capture failing output when blocked
- avoid marking complete without evidence

> Commentary: Clarifies that unit tests are expected for isolated logic changes, but are not a free pass for broader behavior claims.

## Test Quality Anti-Patterns

- flaky tests accepted as "good enough"
- broad snapshot assertions without intent
- coverage metrics used without behavioral relevance
- tests that pass but do not prove the requirement

> Commentary: Ensures implementation is validated by evidence, not assumptions.
