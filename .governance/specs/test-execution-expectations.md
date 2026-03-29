# Test Execution Expectations

## Intent
Define explicit test-execution expectations for VibeGov so teams know what to inspect, classify, and record when running tests. The goal is to make test execution reviewable, proportional to risk, and hard to overclaim.

## Scope
In scope:
- define a reusable test execution checklist
- define scenario classes that should be considered during meaningful test runs
- define test result classifications
- define proof-strength expectations
- require persistence/post-action proof where relevant
- require missing test completeness to become tracked follow-up work

Out of scope:
- framework-specific automation implementation details
- replacing all current testing/validation docs
- organization-specific reporting dashboards

## Acceptance Criteria
- `TEST-EXEC-001` VibeGov publishes a clear test execution expectations/checklist doc.
- `TEST-EXEC-002` GOV-05 explicitly covers scenario classes, result classifications, proof strength, and persistence/post-action proof.
- `TEST-EXEC-003` Governance requires missing test completeness to become tracked follow-up work rather than remain invisible.
- `TEST-EXEC-004` Testing expectations remain proportional to work type and risk.
- `TEST-EXEC-005` `npm run build` succeeds after the changes.

## Core Execution Questions
Every meaningful test run should be able to answer:
1. What exact claim, requirement, or acceptance criterion is under test?
2. Which scenario classes were exercised, and which were not applicable, deferred, or blocked?
3. What kind of evidence was produced?
4. Does the evidence directly prove the claimed behavior, or only a proxy?
5. What remains unverified, blocked, or deferred?
6. What follow-up work was created because of missing completeness?

## Scenario Classes
Scenario classes to consider where relevant:
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

## Result Classifications
Expected execution classifications:
- `Verified`
- `Invalidated`
- `Blocked`
- `Deferred`
- `Not applicable`

## Proof Strength
Evidence should be classified by strength where useful:
- direct proof
- partial proof
- surrogate-only proof

## Missing Completeness Rule
If meaningful scenario coverage, persistence proof, or evidence clarity is missing, the gap must become tracked work (issue, debt item, blocker artifact, or explicit deferred follow-up).
