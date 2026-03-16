---
sidebar_position: 7
---

# Exploratory Review Mode

Exploratory Review Mode is a parallel quality loop used to find delivery gaps before they become release defects.

It does not replace your normal delivery lifecycle.

- **Development flow** changes behavior and carries it through release readiness.
- **Exploratory flow** audits real behavior and turns gaps into tracked work.

## Why run it in parallel

Running exploratory review in parallel helps teams:

- detect spec drift early
- expose UI/API behavior not covered by current requirements
- create implementation-ready backlog items continuously
- reduce technical debt before release
- preserve delivery momentum when blockers appear

## The core idea

Exploration is not QA theater.

A useful exploratory pass does not stop at "looked fine" or "found a few bugs." It should:

1. review the surface like an operator,
2. classify scenarios explicitly,
3. create durable follow-up artifacts,
4. feed the backlog with implementation-ready work.

## Review pages like an operator, not a tourist

For each route/page under review:

1. Define the page purpose and user intent.
2. Record preconditions affecting confidence.
3. Inventory visible controls, sections, and observable states.
4. Open newly revealed surfaces such as dialogs, drawers, menus, validation states, and post-action controls.
5. Execute a scenario matrix across primary, secondary, edge/error, keyboard, and state-transition paths.
6. Classify each scenario as **Validated**, **Invalidated**, **Blocked**, or **Uncovered / spec gap**.
7. Create or link focused issues for everything uncovered, invalidated, or blocked.

## Route-order heuristic

When reviewing many routes and no stronger product-specific dependency exists, use this default order:

1. **Entry routes**
   - landing, auth, onboarding, first-run, public entry surfaces
2. **Core workflow routes**
   - the main product paths users depend on most
3. **Settings / admin / configuration routes**
   - billing, permissions, integrations, policy, account, operational setup
4. **Edge / special / fallback routes**
   - empty states, error states, redirects, exception paths, rarely used operational surfaces

Why this order helps:
- it hits highest-user-impact surfaces first
- it makes route sweeps more comparable across runs
- it reduces random browsing disguised as systematic review
- it exposes flow blockers earlier without stalling the whole review queue

If a product-specific dependency order is stronger, use that instead — but make the ordering logic explicit.

## Required outputs

Per review unit, capture:

- review purpose
- preconditions affecting confidence
- elements and revealed surfaces found
- uncovered elements still needing spec/test/traceability coverage
- scenario matrix with classifications
- expected vs actual notes
- issue links created or linked
- spec links / `SPEC_GAP` markers
- residual scope, if any
- next recommended backlog action
- final completeness label: Complete / Complete-with-blockers / Partial / Invalid-review

If findings are reported without tracked artifacts, the review is incomplete.

For single-route execution, use the [Exploratory Route Report Template](/docs/exploratory-route-report-template).

## Persistence matters more than UI confirmation

Any action that claims to save, mutate, delete, sync, import, connect, or reconfigure must be verified by resulting state or contract outcome.

A toast, redirect, or green visual state is not enough.

## Relationship to execution modes

Exploration is one of the two VibeGov operating modes.

Use it when the goal is:
- discovery,
- audit,
- backlog hydration,
- end-user validation.

Do **not** treat exploration as Development by default.

Move to build/fix mode only when explicitly requested or when your workflow has formally switched into Development.

## Blockers should redirect work, not freeze it

If exploratory work hits a real blocker:

1. confirm it with reasonable effort,
2. capture what was attempted,
3. create or link a blocker issue,
4. record confidence limits,
5. continue with the next ready review unit.

This keeps quality work flowing without hiding the blocker.

## Long-term project impact

Over time, this mode helps teams:

- prevent silent quality erosion
- reduce accumulated technical debt
- improve backlog quality and prioritization
- preserve traceability for why changes were made
- make future releases safer and cheaper to evolve

## Next reads

- [Execution Modes](/docs/execution-modes)
- [Checkpoint Reporting](/docs/checkpoint-reporting)
- [Blocker Escalation](/docs/blocker-escalation)
- [Workflow Quality Rubric](/docs/workflow-quality-rubric)
- [GOV 08 Exploratory Review](/docs/published/gov-08-exploratory-review)
