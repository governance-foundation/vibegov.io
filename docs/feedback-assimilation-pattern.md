---
sidebar_position: 9
---

# Feedback Assimilation Pattern

Feedback incorporation fixes the current output.

Feedback assimilation improves the next one too.

That is the difference.

## What this pattern is for

Use this pattern when a human, reviewer, or stronger evaluator has approved, edited, or materially rewritten an output and you want the learning to compound instead of resetting at the end of the current loop.

Typical examples:
- a user edits a drafted comment, post, or message before publishing
- a reviewer rewrites the framing of a rule or doc section
- a human repeatedly removes the same kind of phrase, structure, or overreach
- an evaluator keeps failing the same quality dimension for the same reason

## Core idea

A weak review loop stops at:
- apply the correction
- send the updated output
- move on

A stronger governed loop does one more thing:
- compare the original draft with the approved or edited version,
- identify the pattern of change,
- extract the reusable rule,
- persist it before risky continuation.

## Minimum assimilation loop

When the feedback is material enough to teach the system something reusable:

1. **Capture the before/after**
   - keep the original draft and the approved or edited version available for comparison.

2. **Identify the change pattern**
   - what changed?
   - what kind of mistake or mismatch was corrected?
   - was it tone, scope, sequencing, proof standard, verbosity, framing, assumption, or something else?

3. **Extract the future rule**
   - turn the pattern into a short reusable rule.
   - examples:
     - "Do not present exploratory findings without creating governed follow-up artifacts."
     - "When the user rewrites tone to be more direct, avoid the softer framing next time in the same context."
     - "If a user consistently removes speculative wording, prefer exact contract language over hedged summary language."

4. **Persist the learning**
   - update the relevant governed artifact before a long posting phase, long execution phase, or likely context-loss transition when practical.
   - possible destinations include governance rules, profile docs, templates, local memory, or repo-specific operating notes.

5. **Check contradiction and overlap**
   - do not blindly append new rules.
   - merge, refine, or reconcile with what already exists.

## What counts as material feedback

Not every tiny edit needs a new rule.

This pattern is most useful when the change reveals:
- a repeated failure theme
- a stable user preference
- a governance gap
- a harness weakness
- a misleading wording habit
- a recurring structure or sequencing problem

## Required durable outputs

A complete feedback-assimilation pass should leave behind:
- the identified change pattern
- the extracted future rule or adjustment
- the destination where it was persisted
- any merge/reconciliation note if an existing rule was updated instead of adding a new one

## Feedback incorporation vs feedback assimilation

### Feedback incorporation
- update the current artifact
- rerun affected checks if needed
- continue the governed loop

### Feedback assimilation
- learn from the pattern of change
- improve the instructions, rule set, harness, or durable memory
- reduce the odds of repeating the same mistake later

Both matter.

VibeGov should not confuse them.

## Anti-patterns

Avoid these:
- treating user edits as one-off corrections with no learning path
- adding duplicate rules without contradiction checking
- waiting until after a long risky continuation to record the lesson
- calling a lesson "learned" when it still only lives in chat history
- promoting trivial edits into bloated permanent governance

## Related docs

- [Published GOV 13 Review Loops and Completion Discipline](/docs/published/gov-13-review-loops-completion-discipline)
- [Checkpoint Reporting](/docs/checkpoint-reporting)
- [Execution Modes](/docs/execution-modes)
- [Harness Profile: Minimal Claude Harness](/docs/harness-profile-minimal-claude)
