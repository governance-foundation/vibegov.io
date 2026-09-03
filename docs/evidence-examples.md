---
sidebar_position: 8
title: Evidence Examples
description: Copyable examples of weak and strong VibeGov evidence for Development, Exploration, Feedback Intake, blockers, PRs, releases, and traceability.
---

# Evidence Examples

Evidence is only useful when the next reader can tell what changed, what was checked, what remains uncertain, and what should happen next.

This page gives short, copyable examples. Adapt the tool names, issue numbers, routes, and commands to your project.

## Weak vs strong evidence

Weak:

```text
Done. Looks good.
```

Why it is weak:
- no active issue or scope
- no changed artifacts
- no checks or outcomes
- no residual risk
- no next action

Strong:

```text
Issue: #123
Mode: Development
Scope: updated profile save validation and error copy
Changed files: src/profile/save.ts, src/profile/ProfileForm.tsx
Validation: unit profile-save passed; browser smoke covered valid save, invalid email, refresh persistence
Residual risk: mobile layout not checked in this slice
Next action: verifier review
```

Why it is strong:
- names the governed unit
- states the work shape
- ties proof to the changed behavior
- keeps the remaining risk visible
- gives the next reviewer a clear handoff

## Development evidence

Use Development evidence when code, docs, config, content, generated output, or delivery behavior changed.

```text
Issue: #123
Requirement/spec: SPEC-004 REQ-002
Mode: Development
Scope: add empty-state copy to the reports page
Changed artifacts: src/pages/Reports.tsx, docs/reports.md
Validation: typecheck passed; build passed; focused browser smoke confirmed empty, loading, populated, and error states
Commit/PR: abc1234 / PR #130
Residual risk: role-specific report permissions were not changed or revalidated
Next action: reviewer checks PR #130 against #123
```

Avoid:

```text
Implemented reports improvements.
```

## Exploration evidence

Use Exploration evidence when the goal is discovery, review, or backlog hydration rather than immediate delivery.

```text
Issue: #124
Mode: Exploration
Reviewed surface: /settings/profile and /settings/security
Preconditions: admin test account, seeded workspace, desktop browser only
Scenarios checked: load, edit, cancel, invalid submit, valid submit, refresh persistence, keyboard traversal
Findings: profile save persistence gap -> #125; security tab empty-state copy gap -> #126
Spec gaps: SPEC_GAP profile-save-result-state linked from #125
Confidence: partial; mobile and member-role variants not covered
Next action: triage #125 before implementation
```

Avoid:

```text
Reviewed settings. A few issues found.
```

## Feedback Intake evidence

Use Feedback Intake evidence when human feedback needs to become governed ready work without implementing yet.

```text
Feedback source: review comment on PR #130 from 2026-07-22
Mode: Feedback Intake
Reviewed target: reports empty-state copy and export button behavior
Dedupe: existing #123 covers empty-state copy; no issue existed for export disabled-state guidance
Created/updated artifacts: updated #123 acceptance criteria; created #131 for export disabled-state copy
Spec binding: #123 -> SPEC-004 REQ-002; #131 -> SPEC_GAP report-export-disabled-state
Readiness: #123 remains ready; #131 needs product wording decision
Next action: implement #123 first, park #131 until wording is supplied
```

Avoid:

```text
Captured feedback. Will fix later.
```

## Blocker evidence

Use blocker evidence when work cannot meaningfully continue without a missing permission, dependency, decision, or runtime condition.

```text
Blocked unit: issue #132, billing webhook verification
Mode: Blocker checkpoint inside Development
What was tried: ran local webhook smoke with seeded account; retried with fresh tunnel URL
Observed blocker: provider rejects test event because sandbox account lacks webhook management permission
Impact: webhook verification blocked; docs copy and unit coverage can still continue
Artifact: blocker comment on #132 and linked follow-up #133
Recovery condition: owner grants sandbox webhook permission or supplies a test event transcript
Next action: continue unblocked docs copy; resume webhook smoke when permission exists
```

Avoid:

```text
Blocked by auth.
```

## PR evidence

Use PR evidence when a change is ready for review and the reviewer needs enough context to validate it.

```text
PR: #130
Closes: #123
Mode: Development
Summary: adds empty, loading, and error states for reports
Files changed: src/pages/Reports.tsx, src/pages/Reports.test.tsx, docs/reports.md
Validation: unit reports passed; build passed; browser smoke covered empty/loading/error/populated states
Project status: In Progress; no In review option exists on the board
Residual risk: export edge cases are tracked separately in #131
Next action: verifier reviews PR #130 and checks linked issue closure
```

Avoid:

```text
PR ready.
```

## Release-readiness evidence

Use release-readiness evidence when judging whether a built candidate is safe to promote or ship.

```text
Candidate: 2026.7.22-abc1234
Mode: Release verification inside Development
Covered scope: docs build, release package contents, startup smoke, critical homepage/docs routes
Checks: build passed; release package manifest checked; smoke covered /, /docs/start-here, /docs/evidence-examples
Decision: conditional go
Known risk: search index freshness depends on deployment job, not local build
Next action: promote after deployment job reports the same commit
```

Avoid:

```text
Release looks fine.
```

## Issue/spec traceability evidence

Use traceability evidence when proving that intent, requirements, implementation, and validation stayed connected.

```text
Issue: #123
Spec binding: SPEC-004 REQ-002, REQ-003
Acceptance criteria covered: AC1 empty state, AC2 invalid submit, AC3 persistence after refresh
Implementation artifacts: src/profile/ProfileForm.tsx, src/profile/save.ts
Evidence artifacts: test log, browser smoke screenshot, PR #130
Deferred traceability: role-specific variant moved to #134
Next action: close #123 only after PR #130 lands and verifier confirms AC1-AC3
```

Avoid:

```text
Linked to the spec.
```

## Quick self-check

Before sending a checkpoint, make sure the evidence names:

- the governed unit
- the mode or work shape
- the changed or reviewed artifacts
- the proof produced
- any confidence limits
- the next action

If one of those is missing, the update is probably still too vague.

## Related docs

- [Mode Selection and Evidence Closing](/docs/mode-selection-and-evidence-closing)
- [Checkpoint Reporting](/docs/checkpoint-reporting)
- [Execution Modes](/docs/execution-modes)
- [Feedback Intake](/docs/feedback-intake)
- [Blocker Escalation](/docs/blocker-escalation)
- [Release Artifact and Test Prep](/docs/release-artifact-and-test-prep)
