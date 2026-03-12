---
sidebar_position: 9
---

# Exploratory Route Report Template

Use this at the end of each single-route or single-URL exploratory review.

This template turns GOV-08 into an execution artifact teams can reuse consistently.

## Pre-flight checklist

Before starting a route review, write down:

- **Route / review unit:** what exact page, route, or surface is in scope
- **User / operator goal:** what the person is actually trying to achieve
- **Preconditions:** auth state, role, seed data, provider state, environment constraints
- **Likely scenario classes:** happy path, invalid/error, empty/loading, keyboard, persistence, role/session variance
- **Confidence risks:** anything likely to limit completeness before you start

This keeps the review explicit before interaction begins and reduces fake-complete reporting.

## Full template

```text
Route: </url>

Page purpose:
- <what this page is for>

Preconditions:
- Auth/session: <signed in/out, role, provider state>
- Data/state: <seeded/empty/partial>
- Environment notes: <runtime/env constraints affecting confidence>

Elements found:
- <visible sections/controls>
- <revealed dialogs/drawers/menus>
- <notable states surfaced>

Uncovered elements:
- <element/control/state not adequately covered by current spec/tests>
- none

Use-cases exercised:
- Happy path: <done/not applicable>
- Secondary flows: <done/not applicable>
- Invalid/error paths: <done/not applicable>
- Keyboard path: <done/not applicable>
- Refresh/back-forward: <done/not applicable>
- Persistence/post-action verification: <done/not applicable>

Scenario classification:
- Validated:
  - <item>
- Invalidated:
  - <item + issue ID>
- Blocked:
  - <item + blocker reason + issue ID>
- Uncovered-spec-gap:
  - <item + why + issue ID or SPEC_GAP artifact>

Evidence notes:
- <what actually happened>
- <what persisted / did not persist>
- <important UI/API observations>
- <confidence limits if any>

Issues created/linked:
- <#id title>
- <#id title>
- none

Spec / traceability follow-up:
- Requirement IDs: <ids or none>
- Spec gap: <SPEC_GAP or none>
- Planned test path: <path or none>

Residual scope:
- <none | what remains and why>

Completeness label:
- Complete | Complete with blockers | Partial | Invalid review

Next URL / next action:
- </next-url>
```

## Compressed chat version

Use this when the route is straightforward and you do not need the fuller breakdown.

```text
Route: </url>
Purpose: <page purpose>
Preconditions: <auth/data/env>

Elements found:
- ...
- ...

Uncovered elements:
- ...
- none

Use-cases exercised:
- ...
- ...

Scenario classification:
- Validated: ...
- Invalidated: ... (#...)
- Blocked: ... (#...)
- Uncovered-spec-gap: ... (#... or SPEC_GAP)

Issues:
- #...
- none

Spec/traceability:
- Req IDs: ...
- SPEC_GAP: ...
- Test follow-up: ...

Residual scope:
- none | ...

Completeness:
- Complete | Complete with blockers | Partial | Invalid review

Next URL / next action:
- </next-url>
```

## Filled examples

### Example A — Complete

```text
Route: /settings/profile
Purpose: update display profile safely
Preconditions: signed in as standard user; existing profile data loaded

Elements found:
- profile form
- avatar picker trigger
- save button
- cancel button
- validation messages

Uncovered elements:
- none

Use-cases exercised:
- happy path submit
- cancel path
- invalid submit
- keyboard traversal
- refresh persistence check

Scenario classification:
- Validated: rename flow persists after refresh
- Invalidated: none
- Blocked: none
- Uncovered-spec-gap: none

Issues:
- none

Spec/traceability:
- Req IDs: USER-PROFILE-01
- SPEC_GAP: none
- Test follow-up: ui/profile/profile-edit.cy.ts

Residual scope:
- none

Completeness:
- Complete

Next URL / next action:
- /settings/security
```

### Example B — Complete with blockers

```text
Route: /billing
Purpose: review and update billing details
Preconditions: signed in as workspace admin; no live billing sandbox access

Elements found:
- plan summary
- payment method panel
- invoices table
- manage billing action
- retry payment dialog

Uncovered elements:
- invoice empty-state contract

Use-cases exercised:
- plan summary review
- retry payment dialog open/close
- keyboard traversal
- refresh persistence for non-mutating states

Scenario classification:
- Validated: plan summary renders correctly
- Invalidated: payment retry dialog loses focus trap (#412)
- Blocked: manage billing redirect requires unavailable provider sandbox (#413)
- Uncovered-spec-gap: invoice empty-state behavior not traceable (#414)

Issues:
- #412 billing retry dialog focus trap
- #413 billing provider sandbox blocker
- #414 invoice empty-state contract gap

Spec/traceability:
- Req IDs: BILLING-02
- SPEC_GAP: billing empty-state copy and action rules
- Test follow-up: ui/billing/billing-dialog.cy.ts

Residual scope:
- full mutation verification for live payment method changes pending provider access

Completeness:
- Complete with blockers

Next URL / next action:
- /settings/team
```

### Example C — Partial

```text
Route: /integrations/slack
Purpose: connect and validate Slack integration flow
Preconditions: signed in as admin; workspace seeded; provider auth intermittently failing

Elements found:
- connect button
- status badge
- reconnect action
- disconnect action
- error banner

Uncovered elements:
- reconnect conflict state
- disconnected empty state actions

Use-cases exercised:
- initial connect attempt
- invalid reconnect state
- keyboard traversal

Scenario classification:
- Validated: error banner surfaced on failed callback
- Invalidated: disconnect action leaves stale connected badge (#515)
- Blocked: provider callback instability prevents full happy-path completion (#516)
- Uncovered-spec-gap: reconnect conflict messaging undefined (#517)

Issues:
- #515 stale integration status after disconnect
- #516 provider callback blocker
- #517 reconnect conflict contract gap

Spec/traceability:
- Req IDs: INTEGRATIONS-SLACK-03
- SPEC_GAP: reconnect conflict handling
- Test follow-up: ui/integrations/slack/reconnect.cy.ts

Residual scope:
- successful connect persistence and downstream state verification still unexecuted because provider callback is unstable

Completeness:
- Partial

Next URL / next action:
- move to next ready integrations route while blocker is active
```

## Usage rule

- Use the **compressed chat version** when there are no issues or only light findings.
- Use the **full template** when there are multiple findings, blockers, spec gaps, or confidence limitations.
- Every route report must still classify outcomes under: **Validated / Invalidated / Blocked / Uncovered-spec-gap**.
- Every non-validated item should include an inline issue ID or explicit linked artifact.
- Do not mark a route complete if findings are untracked.
