---
sidebar_position: 14
---

# GOV 14 ARCHITECT CONDUCTOR BOUNDARIES

- Source rule: [gov-14-architect-conductor-boundaries.mdc](https://github.com/governance-foundation/vibegov.io/blob/main/.governance/rules/gov-14-architect-conductor-boundaries.mdc)
- Download raw file: [gov-14-architect-conductor-boundaries.mdc](https://raw.githubusercontent.com/governance-foundation/vibegov.io/main/.governance/rules/gov-14-architect-conductor-boundaries.mdc)

This page embeds the canonical rule text and adds rule-specific commentary to explain why each section exists.

## Governance: Architect-Conductor Boundaries

Agents may implement within an approved architecture. They must not silently invent or replace the architecture that governs the work.

> Commentary: Separates autonomous implementation choices from architectural decisions that require durable human intent.

## Autonomous Implementation Boundary

- `GOV-14-ARCH-001` Routine implementation and internal refactoring may proceed autonomously when they remain inside the approved requirements, public contracts, trust boundaries, persistence model, and permitted scope.
- `GOV-14-ARCH-002` The smallest coherent implementation that fits established repository patterns should be preferred over a new abstraction or framework.
- `GOV-14-ARCH-003` Lack of a human-authored diagram is not itself a blocker when existing code, specs, decisions, and tests make the architectural boundary clear.

> Commentary: Keeps routine implementation moving inside established contracts and repository patterns.

## Decisions Requiring Escalation

- `GOV-14-ARCH-004` Stop and raise a blueprint decision before creating or replacing a system-wide boundary.
- `GOV-14-ARCH-005` Blueprint review is required before introducing shared global state, changing persistence semantics, altering a public contract, moving a security or trust boundary, creating an irreversible migration, or materially replacing an approved architecture.
- `GOV-14-ARCH-006` The escalation must state the decision required, current constraints, viable options, trade-offs, affected contracts, migration or rollback implications, and the evidence needed to proceed.
- `GOV-14-ARCH-007` The Architect-Conductor may resolve the boundary through an approved architecture decision record, updated spec, interface contract, migration plan, or equivalent durable artifact.

> Commentary: Defines the structural changes that must pause for an explicit blueprint decision.

## Evidence and Completion

- `GOV-14-ARCH-008` Local mocks, implementation-authored tests, compilation, and presentation quality cannot by themselves prove a system-level architectural claim.
- `GOV-14-ARCH-009` Completion requires the repository's declared verification gates and direct evidence appropriate to the affected boundary.
- `GOV-14-ARCH-010` When the runtime cannot execute a required gate, report the limitation and classify the claim as blocked, partial, or awaiting review rather than complete.

> Commentary: Requires system-level claims to be supported by repository-level evidence.

## Anti-Patterns

Avoid these failure modes:
- treating every internal abstraction as a human approval event
- inventing architecture implicitly through accumulating patches
- using a longer prompt as a substitute for a durable decision artifact
- reporting system-level completion from isolated mocks
- continuing mutation while the governing boundary is unresolved

> Commentary: Prevents both architectural drift and approval-heavy paralysis.
