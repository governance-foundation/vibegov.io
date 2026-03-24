---
sidebar_position: 9
---

# ACP Validation

Use this doc when you want to validate VibeGov through a real ACP worker instead of only reviewing local docs or harness code.

This is useful for questions like:
- does ACP startup actually work from the parent environment?
- can a real Codex ACP worker inspect the VibeGov repo and execute the existing validator path?
- is bootstrap validation working in practice right now?
- is parent supervision actually being proven, or are we only proving worker startup?

## What this validates

A real ACP run can help prove:
- ACP worker startup works
- the worker can operate in the target repo
- the worker can inspect VibeGov docs and validator implementation
- the worker can run existing bootstrap validator commands or equivalent read-only checks
- the worker can return an evidence-based judgment about current validator health

A worker-only run does **not** by itself prove:
- parent supervision quality
- early follow-up checkpoint enforcement
- ongoing cadence enforcement for long-running delegated work

Those require explicit parent-side supervision behavior and separate validation criteria.

## Canonical ACP validation prompt

Use this prompt with a real ACP worker. Default agent: **Codex**.

```text
You are validating whether VibeGov currently works, using the existing repo and validation artifacts.

Repo: C:\projects\governance-foundation\vibegov.io
Work from that directory.

Goal:
- Determine whether VibeGov's current bootstrap/validation flow is working in practice.
- Include ACP relevance where applicable.
- Prefer existing validation machinery over inventing new tests.
- Do not modify files.

Required steps:
1. Inspect the VibeGov bootstrap/validator docs and implementation enough to understand the intended validation path.
2. Run the most relevant existing validator command(s) or equivalent read-only checks you can execute safely.
3. If an ACP-specific automated validator path does not exist, say so clearly, but still evaluate whether the current system works overall.
4. Report:
   - what you ran
   - what passed
   - what failed or is missing
   - whether you consider VibeGov currently "working" for bootstrap validation
   - whether ACP startup is proven, and whether ACP supervision/cadence validation is proven
5. Keep the result concise but evidence-based.

Constraints:
- No file edits.
- No long implementation work.
- If blocked by tooling/auth/runtime, report the exact blocker.
```

## Recommended parent launch pattern

When launching from a parent orchestrator, make the parent visible too.

Minimum parent behavior:
1. announce the delegated unit
2. identify the worker if available
3. perform an early follow-up check
4. continue visible follow-up for long-running work
5. explicitly report completion, blocker, or recovery action

This aligns with:
- `GOV-02-ORCH-008`
- `GOV-02-ORCH-009`
- `GOV-02-ORCH-010`

## What to conclude from the result

### If the worker starts and returns an evidence-based report
You can say:
- ACP startup is proven for this environment
- VibeGov can be inspected and validated through a real ACP worker

### If the worker runs validator commands successfully
You can additionally say:
- the current bootstrap validation path is functioning in practice

### If the worker only inspects docs/code but no validator command actually runs
You should only say:
- the validation design looks coherent
- practical runtime validation is still only partially proven

### If the parent launches once and then goes silent
You should **not** claim supervision is proven.
That only proves worker startup and eventual readback, not governed follow-through.

## Recommended report shape

Use this compact result format:

```text
ACP agent: <agent>
Repo: <path>
What ran: <commands/checks>
Passed: <evidence-backed summary>
Failed/missing: <gaps>
Bootstrap validator status: <working | partially working | not proven>
ACP startup: <proven | not proven>
ACP supervision/cadence: <proven | not proven>
Next: <best next action>
```

## Best next steps after the first real ACP run

If the first ACP run succeeds, the next useful improvement is not another informal smoke check.
It is to add a dedicated ACP-aware validation path that can distinguish:
- worker startup health
- worker result visibility
- parent follow-up behavior
- supervision cadence compliance

That is the point where ACP validation becomes governance validation instead of simple runtime validation.

## Related docs

- [Bootstrap Validation](/docs/bootstrap-validation)
- [Bootstrap Validator Harness](/docs/bootstrap-validator-harness)
- [Checkpoint Reporting](/docs/checkpoint-reporting)
- [GOV 02 Workflow](/docs/published/gov-02-workflow)
