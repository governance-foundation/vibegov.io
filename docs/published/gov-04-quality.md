---
sidebar_position: 4
---

# GOV 04 QUALITY

- Source rule: [gov-04-quality.mdc](https://github.com/governance-foundation/vibegov.io/blob/main/.governance/rules/gov-04-quality.mdc)
- Download raw file: [gov-04-quality.mdc](https://raw.githubusercontent.com/governance-foundation/vibegov.io/main/.governance/rules/gov-04-quality.mdc)

This page embeds the canonical rule text and adds commentary after each section to explain why the section exists.

## Governance: Quality

> Commentary: Defines quality gates to reduce regressions and maintenance risk.

## Quality Gate Principle

Quality is part of delivery, not a final phase.

Every meaningful change should satisfy:
1. correctness (does it work as intended?)
2. consistency (does it fit existing patterns/constraints?)
3. maintainability (can another person safely evolve it?)

> Commentary: Defines quality gates to reduce regressions and maintenance risk.

## Quality Scaffolding Principle

Quality scaffolding is the supporting artifact layer that makes work trustworthy, reviewable, maintainable, and releasable.

Typical quality scaffolding includes:
- issue clarity
- spec/requirement binding
- tests and validation evidence
- documentation updates
- traceability links
- PR and handoff clarity
- release-readiness or operational evidence
- explicit residual risk and follow-up debt

AI should help teams maintain this scaffolding, not just accelerate implementation.

> Commentary: Defines quality gates to reduce regressions and maintenance risk.

## Minimum Quality Checklist

- Scope is explicit and respected
- Acceptance criteria are testable
- Evidence exists (tests/checks/manual proof where appropriate)
- Documentation/spec updates reflect behavior changes
- OpenSpec requirements are updated before claiming behavior changes complete
- Known trade-offs are recorded
- Missing completeness is captured as explicit follow-up work rather than left invisible

> Commentary: Defines quality gates to reduce regressions and maintenance risk.

## Change Hygiene

- Prefer minimal, cohesive diffs
- Avoid unrelated refactors in feature/fix commits
- Keep naming and structure stable unless change is intentional
- Preserve frontmatter and metadata in `.mdc` files

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Verification Expectations

Run verification appropriate to work type and risk:
- low-risk doc/content changes: lint/structure/link/build checks
- behavior changes: targeted + regression checks
- contract/API changes: contract verification + compatibility review
- release-critical or operationally risky changes: strongest operational evidence available

Verification should be proportional, but never replaced by presentation quality or activity volume.

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Anti-Fake-Completion Principle

Do not confuse these with trustworthy completion:
- passing build == verified behavior
- merged PR == done
- long summary == evidence
- generated tests == meaningful coverage
- closed issue == complete work

AI makes it easier to generate the appearance of completeness. Governance must distinguish appearance-of-completion from trustworthy completion.

Verification review should also make explicit:
- which scenario classes were exercised
- what proof is direct vs surrogate-only
- what remains unverified, blocked, or deferred
- what follow-up artifact was created for missing completeness

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Definition of Done (Quality View)

Done means:
- acceptance criteria satisfied
- verification evidence captured
- docs/traceability updated
- residual risks documented
- missing completeness converted into tracked follow-up work where relevant

> Commentary: Defines quality gates to reduce regressions and maintenance risk.
