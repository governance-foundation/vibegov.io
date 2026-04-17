---
sidebar_position: 9
---

# Output Quality and Anti-Slop Guidance

Good governed output is not just correct.

It should also be clear, direct, proportionate, and easy to act on.

This page is a practical guide for producing better issues, comments, docs, updates, and agent-written messages without falling into generic AI writing habits.

## The core idea

Weak output often sounds polished but creates drag.

It may be:
- vague
- repetitive
- over-explained
- padded with generic enthusiasm
- hedged when the contract is actually clear
- organized around the writer's process instead of the reader's need

That is slop.

The goal is not sterile writing.

The goal is governed output that helps the next human or agent move correctly.

## What good output should do

A strong output should usually be:
- **clear** about what happened
- **direct** about what matters
- **bounded** to the actual scope
- **evidence-aware** when making claims
- **structured** so the reader can scan it quickly
- **honest** about uncertainty, blockers, and residual risk

## Common anti-slop failures

Avoid these patterns:
- throat-clearing before the actual point
- generic praise with no real content
- bloated summaries that hide the decision
- vague confidence language when exact evidence exists
- repeating the same point in slightly different words
- sounding certain when the evidence is partial
- turning style into a substitute for proof

Examples:
- weak: "Great question, this is super interesting, and there are many considerations here..."
- stronger: "The main issue is X. The current evidence supports Y. The unresolved risk is Z."

## Directness over fluff

Prefer:
- the answer before the preamble
- the decision before the autobiography
- the result before the motivational framing

If the user asked for a concrete answer, lead with the concrete answer.

## Structure before flourish

Strong output usually has a visible shape.

Examples:
- result -> evidence -> risk -> next action
- issue -> why it matters -> proposed fix
- route reviewed -> findings -> artifacts -> next step

Do not rely on tone to carry structure.

## Use exact language when the contract is clear

When the rule, artifact, or validation result is specific, say the specific thing.

Prefer:
- "PASS `npm run build`"
- "Blocked by missing auth grant"
- "Exploration found three uncovered interactions and opened two focused issues"

Over:
- "Looks good overall"
- "Seems mostly fine"
- "There were some challenges"

## Keep uncertainty honest and bounded

Do not fake certainty.

But do not drown the output in nervous hedging either.

Good bounded uncertainty sounds like:
- "This slice is implemented and build-validated, but deploy verification has not been run yet."
- "The route review is partial because the billing flow is blocked by missing credentials."

## Review before send

Before sending or publishing important output, ask:
- is the answer visible early?
- does the structure match the task?
- are claims supported by evidence?
- is anything repetitive or padded?
- does uncertainty match reality?
- would the next reader know what to do next?

## When to use evaluator or reviewer passes

Use a stronger review/evaluation pass when:
- the output will be public or durable
- wording precision matters to governance or delivery
- the same writing failure keeps recurring
- a human has already had to rewrite this pattern more than once

Repeated output failures should become candidates for stronger review loops or feedback assimilation.

## Fast rewrite table

| If the draft sounds like... | Rewrite toward... |
| --- | --- |
| padded and generic | shorter and more exact |
| impressive but hard to act on | result-first structure |
| highly hedged | bounded uncertainty with exact scope |
| warm but vague | direct and useful |
| technically dense but shapeless | headings, bullets, explicit next step |

## Output-quality checklist

Before treating an important output as done:
- answer first
- structure visible
- claims tied to evidence
- uncertainty honest
- no repeated filler
- next action clear

## Related docs

- [Published GOV 03 Communication](/docs/published/gov-03-communication)
- [Published GOV 13 Review Loops and Completion Discipline](/docs/published/gov-13-review-loops-completion-discipline)
- [Checkpoint Reporting](/docs/checkpoint-reporting)
- [Workflow Quality Rubric](/docs/workflow-quality-rubric)
