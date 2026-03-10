---
sidebar_position: 6
---

# Exploratory Review Mode

Exploratory Review Mode is a parallel quality loop used to find delivery gaps before they become release defects.

It does not replace your normal delivery lifecycle.

- **Delivery flow** ships approved changes.
- **Exploratory flow** audits real behavior and turns gaps into tracked work.

## Why run it in parallel

Running exploratory review in parallel helps teams:

- detect spec drift early
- expose UI/API behavior not covered by current requirements
- create implementation-ready backlog items continuously
- reduce technical debt before release

## High-level benefit

Exploratory Review Mode is a quality and sustainability amplifier for fast delivery.

At a high level, it:

- validates real product behavior against intended behavior
- turns hidden gaps into tracked, actionable backlog work
- keeps specs, tests, and implementation aligned as the product changes

## Long-term project impact

Over time, this mode helps teams:

- prevent silent quality erosion
- reduce accumulated technical debt
- improve backlog quality and prioritization
- preserve traceability for why changes were made
- make future releases safer and cheaper to evolve

## Standard operating process

For each route/page under review:

1. Enumerate visible elements, controls, sections, and observable states.
2. Compare each element against specs + traceability + existing tests.
3. For each uncovered contract, create a focused issue.
4. Capture expected vs actual behavior with reproducible evidence.
5. Record required spec and traceability follow-up.

## Required report format (per route)

- Elements found
- Uncovered elements/contracts
- Issues created or linked

## Exit criteria

Exploratory review is complete only when uncovered findings are converted into tracked follow-up work.

## Relationship to implementation

Exploratory mode is analysis-first.

- Do not treat exploration as implementation by default.
- Move to build/fix mode only when explicitly requested.
- When implementation begins, use normal stage-based delivery gates.
