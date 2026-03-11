---
sidebar_position: 8
---

# Checkpoint Reporting

VibeGov reporting should reduce ambiguity, not create it.

A good checkpoint tells the next reader:
- what mode you were in,
- what was actually done,
- what evidence exists,
- what remains blocked or unresolved,
- what should happen next.

## Exploratory checkpoint template

Use this when the pass is analysis-first.

- **Review unit:** route/page/feature under review
- **Purpose:** what the user is trying to achieve
- **Preconditions:** auth/data/runtime limits affecting confidence
- **Elements / revealed surfaces:** what was actually exercised
- **Scenario status:** Validated / Invalidated / Blocked / Uncovered-spec-gap
- **Expected vs actual:** concise notes for failed or interesting paths
- **Artifacts created:** issue links, spec links, `SPEC_GAP`, traceability notes
- **Next action:** next route, next issue, or blocker recovery step

## Implementation checkpoint template

Use this when behavior changed.

- **Active issue:** ID + title
- **Requirement IDs:** bound requirements
- **Scope:** what changed
- **Validation:** commands/checks/tests run + pass/fail
- **Artifacts:** commit hash, PR/release artifact if applicable
- **Residual risk:** anything known but unresolved
- **Next action:** validate further, merge, release, or continue backlog

## Blocker checkpoint template

Use this when work cannot meaningfully advance.

- **Blocked unit:** issue/route/feature
- **Blocker:** exact constraint or failure
- **Attempted actions:** what was tried
- **Confidence limits:** what remains unknown
- **Artifact created:** blocker issue link
- **Redirected work:** what you moved to next
- **Recovery condition:** what must become true to resume

## Release / verification checkpoint template

Use this when checking integrated readiness.

- **Build/version:** what was reviewed
- **Covered scope:** what was in/out
- **Integrated results:** pass/fail summary
- **Known blockers/risks:** anything preventing confidence
- **Decision:** go / no-go / conditional follow-up
- **Next action:** release, rollback, patch, or continue validation

## Good vs bad examples

Bad:
- "Reviewed the page, mostly good, some issues found."
- "Save flow works."
- "Blocked by auth."

Good:
- "`/settings/profile`: tested rename, cancel, invalid submit, valid submit, refresh persistence, and keyboard traversal. Invalidated: avatar dialog focus trap (#214), profile save persistence gap (#215). Blocked: billing subpanel due to missing role grant (#216). Residual scope: role-variance review pending."

## Reporting anti-patterns

Avoid these:
- "done" with no evidence
- "reviewed" with no scenario classification
- "blocked" with no blocker artifact
- "tested" with no named checks or outcomes
- one giant summary issue for many unrelated uncovered behaviors
- UI-success claims with no persistence/data-outcome verification

## Workflow self-check

Before claiming completion, ask:
- Did I classify scenarios, or just sample them?
- Did I verify persistence/data outcome, or only surface response?
- Did every finding become an artifact?
- Did I record confidence limits honestly?
- Did I move on from blockers correctly?
- Did I distinguish exploratory from implementation evidence?

## Why this matters

Weak reporting creates false confidence.

Strong reporting creates:
- easier handoff,
- better backlog quality,
- faster review,
- cleaner governance history.

## Related docs

- [Execution Modes](/docs/execution-modes)
- [Blocker Escalation](/docs/blocker-escalation)
- [Exploratory Review Mode](/docs/exploratory-review-mode)
