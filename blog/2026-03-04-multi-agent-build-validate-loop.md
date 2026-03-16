---
slug: multi-agent-build-validate-loop
title: "Getting Other Agents to Help Your Project (Without Losing Quality)"
authors: [VibeGov_team]
tags: [multi-agent, execution, validation, backlog, specs]
---

A pattern that works well in real project delivery is splitting responsibilities across agents with clear contracts.

In current VibeGov terms, this is really a coordinated **Development + Exploration** operating model:
- the builder primarily runs in **Development** mode
- the validator primarily runs in **Exploration** mode
- release verification stays inside the **Development** delivery path as a shipping gate

## The pattern

Use two independent lanes:

1. **Builder lane (shipping agent)**
   - implements features/fixes
   - runs tests
   - produces commits/artifacts

2. **Validator lane (independent QA/spec agent)**
   - behaves like a normal user
   - opens the app in browser and clicks real flows
   - checks every clickable action (plus keyboard paths)
   - compares behavior against OpenSpec/contracts
   - creates focused backlog issues for each mismatch

This is exactly the setup where one agent is busy building and another agent/device is continuously validating outcomes against real UI behavior.

## Why this works

- **Separation of concern:** builder optimizes for delivery, validator optimizes for correctness.
- **Reduced bias:** independent validation catches assumptions the builder misses.
- **Faster backlog hardening:** defects become concrete, reproducible issues quickly.
- **Spec quality improves:** uncovered behaviors force explicit requirement IDs and test mappings.

## Operating contract

For each discovered gap, enforce:

1. Issue
2. Spec update (append-only IDs)
3. Validation evidence
4. Commit linked to issue

No “done” without runnable proof.

## Recommended cadence

- Builder runs continuously through priority backlog.
- Validator runs on a fixed schedule (for example, every 45–60 minutes) and after major merges.
- Release-aware checks can skip full reruns if build/version hasn’t changed.

## Minimum evidence bundle per validation cycle

- audited screens list
- action inventory (every clickable)
- pass/fail per action
- keyboard traversal evidence (`Tab`, `Shift+Tab`, `Enter`, `Space`)
- persistence/mutation verification where actions claim to save, delete, sync, import, or reconfigure
- issue files for failures with expected vs actual
- spec coverage reconciliation notes
- explicit completeness status for the validation scope

## Required issue fields (for validator-created backlog items)

When the validator opens an issue, include these fields every time:

- **Screen/route:** exact URL/route where failure occurred
- **Control type:** button/link/icon/menu item/form field/dialog action
- **Expected intent:** what should happen (route/state/data/error)
- **Actual result:** what happened instead
- **Repro steps:** shortest deterministic path
- **Evidence links:** screenshot/video/report path
- **Spec link/ID:** existing requirement ID or `SPEC_GAP`
- **Suggested fix path:** likely file/module owner

This keeps backlog items implementation-ready and eliminates “cannot reproduce” churn.

## UI layering checks you should always include

Agents often miss visual-layer defects that humans catch immediately. Make these first-class checks:

- **Dialog visibility:** modal/drawer appears when triggered and remains visible while active
- **Focus trap:** keyboard focus stays in dialog while open
- **Backdrop behavior:** backdrop blocks underlying clicks while modal is active
- **Z-index correctness:** dialogs/toasts/menus are not hidden behind headers/sidebars/dev overlays
- **Escape/Close behavior:** `Esc`, close icon, and Cancel all behave consistently

If any layering issue is found, file a dedicated issue (don’t bury it under generic “UI bug”).

## CI handoff pattern (dev bot → validator bot)

A robust release handoff for bot teams, with release verification treated as part of Development:

1. **Dev bot pushes issue-linked commit**.
2. **Dev bot monitors pipeline trigger for up to 30 seconds**.
   - Poll CI by commit SHA every ~5s.
3. If CI run appears:
   - post run URL + SHA in issue evidence comment,
   - hand off to validator bot.
4. If CI run fails early:
   - update same issue with failing job/step/log snippet,
   - fix immediately on the same ticket,
   - commit/push again with same issue prefix.
5. If no CI run appears within 30s:
   - create/update **P0 CI-trigger blocker** issue,
   - stop downstream handoff until trigger is restored.

This prevents false “done” states where code is pushed but release validation never actually started.

## Practical tips

- Keep one issue per failed behavior.
- Keep commits scoped to one issue whenever possible.
- Track unresolved blockers publicly in backlog (don’t hide them in chat).
- Treat spec drift as a first-class defect.
- For release workflows, always include commit SHA + CI run URL in handoff comments.

If you run this loop consistently, backlog quality improves while velocity stays high—because Development and Exploration happen in parallel, not serially.

## Related docs

- [Execution Modes](/docs/execution-modes)
- [Exploratory Review Mode](/docs/exploratory-review-mode)
- [Checkpoint Reporting](/docs/checkpoint-reporting)
- [Workflow Quality Rubric](/docs/workflow-quality-rubric)
