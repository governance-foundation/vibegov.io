---
sidebar_position: 8
---

# GOV 08 EXPLORATORY REVIEW

- Source rule: [gov-08-exploratory-review.mdc](https://github.com/governance-foundation/vibegov.io/blob/main/.governance/rules/gov-08-exploratory-review.mdc)
- Download raw file: [gov-08-exploratory-review.mdc](https://raw.githubusercontent.com/governance-foundation/vibegov.io/main/.governance/rules/gov-08-exploratory-review.mdc)

This page embeds the canonical rule text and adds commentary after each section to explain why the section exists.

## GOV-08 — Exploratory Review

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Purpose

Exploratory review is an always-on companion flow that runs alongside normal delivery.

Its job is to continuously:
- validate product behavior from an end-user perspective,
- identify uncovered behavior/spec/test gaps,
- hydrate backlog with implementation-ready issues.

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Execution constraints

During exploratory execution:

1. **No production code changes**
   - Exploratory is a discovery and validation activity, not implementation.
   - Keeping code unchanged preserves clean evidence of current user experience.
   - Fixes discovered here must be routed into normal delivery via issue -> spec -> implementation.

2. **No automation test execution**
   - Exploratory focuses on live end-user behavior review, not test-suite pass/fail cycles.
   - Skipping automation runs keeps exploratory cycles fast and high-signal for gap discovery.
   - Automated tests are run in normal delivery when approved fixes are implemented.

Exploratory output feeds normal delivery flow for implementation, automated validation, and release.

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Operating model

- Exploratory is continuous (always active as a quality/discovery engine).
- It can run by explicit user trigger and/or schedule.
- It is parallel to normal delivery behavior, not a replacement lifecycle.

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Standard exploratory loop (per route/feature)

1. Enumerate all visible elements, controls, sections, and observable states.
2. Exercise behavior as an end user (can intended tasks actually be completed?).
3. Compare observed behavior against:
   - current spec requirements,
   - traceability mappings,
   - existing test intent.
4. Classify each interactive element as:
   - covered,
   - uncovered contract gap,
   - behavior failure/regression.
5. Create or link focused issue(s) for every uncovered/failing item.
6. Record required spec and traceability follow-up in each issue.
7. Feed issues into normal prioritized backlog.

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Per-element enforcement (mandatory)

A page/route review is incomplete until all interactive elements are classified and all uncovered/failing items are tracked.

- Do not stop at one high-level issue if multiple contracts are uncovered.
- Do not report exploratory completion with untracked uncovered elements.

> Commentary: Marks non-optional behavior to reduce ambiguity during execution.

## Required exploratory output (per review unit)

- Elements found
- Uncovered elements/contracts
- Issues created or linked
- Expected vs actual behavior notes
- Next recommended backlog action

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Issue quality requirements for exploratory findings

Each exploratory issue should include:
- screen/route,
- control/behavior,
- expected intent,
- actual result,
- reproducible steps,
- evidence references,
- spec link/ID or `SPEC_GAP`,
- suggested fix path.

> Commentary: Provides traceability and scope control so changes remain auditable.

## Done criteria

Exploratory work is only complete for a review unit when:
- findings are converted into tracked backlog work,
- spec/traceability follow-up is identified,
- no uncovered elements remain untracked for that reviewed scope.

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.
