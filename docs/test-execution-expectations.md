---
sidebar_position: 11
---

# Test Execution Expectations

This doc exists to answer a simple question:

> When we execute a test, what exactly are we supposed to look for?

VibeGov already treats tests as proof of delivery claims. This checklist makes the execution side more explicit so test runs become reviewable, comparable, and harder to overclaim.

## Core rule

A test run should not just say that something passed.
It should say:
- what claim was under test
- which scenario classes were exercised
- what kind of proof was produced
- what remains unverified, blocked, or deferred
- what follow-up work was created because of missing completeness

## 1. Claim under test

State the exact thing the test run is trying to prove:
- requirement ID
- acceptance criterion
- behavior statement
- contract statement

Weak signal:
- “ran tests”

Strong signal:
- “verified REQ-123 persistence behavior after save + reload”

## 2. Scenario classes reviewed

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

Not every change needs every scenario class, but meaningful test execution should say which classes were:
- exercised
- not applicable
- deferred
- blocked

## 3. Evidence type

State what kind of evidence was used:
- unit
- integration
- end-to-end
- regression
- manual proof
- smoke/release verification
- contract verification

The point is not to maximize ceremony. The point is to make the proof legible.

## 4. Result classification

Use one of these classifications for each meaningful claim or scenario:
- **Verified**
- **Invalidated**
- **Blocked**
- **Deferred**
- **Not applicable**

This prevents weak “green enough” reporting.

## 5. Proof strength

Ask whether the evidence is:
- **Direct proof** — clearly proves the claimed behavior
- **Partial proof** — proves only part of the claim
- **Surrogate-only proof** — proves a proxy, not the actual outcome

Examples of weak surrogate-only proof:
- success toast shown
- API returned 200
- page rendered
- build passed

Examples of stronger direct proof:
- persisted state survives reload
- downstream state/source-of-truth changed correctly
- role restriction actually enforced
- failure path behaves as specified

## 6. Persistence and post-action proof

When the work changes saved, synced, deleted, or otherwise durable state, testing should look beyond immediate UI feedback.

Check for things like:
- state after refresh/reload
- source-of-truth state changed
- downstream consumer sees the change
- deleted item is actually gone
- sync behavior is correct

UI success alone is not enough proof for mutation-heavy work.

## 7. Residuals and follow-up

A strong test run should end by stating:
- what remains unverified
- what was blocked
- what was deferred
- what assumptions still exist
- what follow-up artifact was created

Missing test completeness must become tracked work, not invisible compromise.

## Fast execution template

Use this template when reviewing a meaningful test run:

- **Claim under test:**
- **Requirement / acceptance criterion:**
- **Scenario classes exercised:**
- **Scenario classes not applicable / deferred / blocked:**
- **Evidence type:**
- **Result classification:**
- **Proof strength:**
- **Persistence/post-action checks:**
- **Residual risks / unverified items:**
- **Follow-up artifact(s) created:**

## Related docs

- [Bootstrap Validation](/docs/bootstrap-validation)
- [Workflow Quality Rubric](/docs/workflow-quality-rubric)
- [Published GOV-05 Testing](/docs/published/gov-05-testing)
- [Published GOV-04 Quality](/docs/published/gov-04-quality)
