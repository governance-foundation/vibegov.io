---
sidebar_position: 16
---

# Harness Builder Checklist

Use this when you are building or refining a coding-agent harness and want a compact checklist that sits between high-level governance and low-level prompt tinkering.

This is not a full governance system.

It is a practical checklist for the harness layer.

## What this checklist is for

A good coding-agent harness is not only a prompt.

It is also:
- instruction layering,
- tool surface design,
- output shaping,
- progress-message behavior,
- verification gates,
- and improvement paths.

## Checklist

### 1. Separate bootstrap from execution

Be clear about what belongs to the canonical bootstrap contract versus the active execution harness.

Bootstrap should install governed structure, continuity, issue/spec discipline, and reporting surfaces.

The execution harness should shape how the model works inside that governed environment.

### 2. Keep top-level instructions map-like

Use `AGENTS.md` or the equivalent top-level instruction file as a short entrypoint.

It should point clearly to deeper canonical sources instead of trying to contain every rule in one giant file.

### 3. Expose purpose-fit tools

Prefer tools whose names and arguments make the intended action obvious.

If the model always has to reconstruct intent through raw shell usage, the harness is making the work harder than it needs to be.

### 4. Shape large outputs deliberately

Do not let logs, diffs, or search results flood the transcript by default.

Define how large outputs are truncated, summarized, or split while preserving the signal needed for the next decision.

### 5. Preserve commentary vs closeout semantics

If the runtime supports progress/commentary messages separately from final answers, use that distinction intentionally.

Progress updates should orient the operator without turning into a synthetic activity log.

### 6. Keep verification explicit

Define the smallest honest gate that matches the work.

Do not let confidence, narration quality, or a passing build alone stand in for verification.

### 7. Make inherited state visible

Classify dirty tree state, mixed diffs, branch state, untracked files, and missing prerequisites before new governed work begins.

Do not let hidden residue ride forward.

### 8. Bound retries and escalation

Define when the model should keep going, when it should retry once, and when it should stop and surface a blocker.

Unbounded churn is not autonomy.

### 9. Capture durable improvements durably

If a prompt or harness adjustment proves genuinely useful, promote it into a governed artifact.

Do not leave important lessons trapped in chat transcripts, operator memory, or one-off local tweaks.

## What this checklist protects against

It helps reduce:
- prompt cargo culting,
- shell-first drift,
- transcript flooding,
- black-box execution,
- closure theater,
- and hidden harness folklore.

## Related docs

- [Harness Profile: Codex](/docs/harness-profile-codex)
- [Execution Sharpness and Governed Closure](/docs/codex-prompting-through-vibegov)
- [Minimal VibeGov Execution Profile Snippet](/docs/minimal-vibegov-execution-profile-snippet)
- [Feedback Assimilation Pattern](/docs/feedback-assimilation-pattern)
- [Published GOV 11 Agent Legibility and In-Repo Truth](/docs/published/gov-11-agent-legibility-in-repo-truth)
- [Published GOV 13 Review Loops and Completion Discipline](/docs/published/gov-13-review-loops-completion-discipline)
