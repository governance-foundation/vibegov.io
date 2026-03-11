---
slug: artifact-completeness-beats-chat-memory
title: "If It Matters Enough to Mention, It Must Become an Artifact"
authors: [VibeGov_team]
tags: [governance, backlog, evidence, exploratory]
---

One of the easiest ways teams lose quality is by discovering something real and then leaving it trapped in a weak form:
- chat
- memory
- screenshots
- verbal summary
- TODO comments

That feels like progress.
It is often just deferred ambiguity.

## The rule

If a finding matters enough to mention in a delivery update, it usually matters enough to become an artifact.

In VibeGov terms, that means some combination of:
- a focused issue
- a spec link or `SPEC_GAP`
- a traceability note
- a blocker artifact
- a verification target

Without that, the finding is too easy to forget, under-scope, or reinterpret later.

## Why this matters

Teams often think they have captured a problem because they said it out loud.

But chat is not backlog.
A screenshot is not scope.
A memory of a bug is not a governed work item.

Durable artifacts matter because they:
- preserve intent
- preserve evidence
- preserve ownership
- preserve sequencing
- preserve future change safety

## This is especially important in Exploration

Exploration is valuable only when it hydrates the backlog with work that can actually be executed later.

That means:
- findings should not die in review notes
- non-validated scenarios should not stay as vague observations
- spec gaps should not stay implicit
- blockers should not stay as one-line status excuses

If Exploration finds something real, the system should be more informed after the pass than before it.

## A useful test

Ask:

> If I disappeared after this update, could another person or agent continue the work from the artifacts alone?

If the answer is no, the finding probably has not been governed properly yet.

## Related docs

- [Checkpoint Reporting](/docs/checkpoint-reporting)
- [Exploratory Review Mode](/docs/exploratory-review-mode)
- [Workflow Quality Rubric](/docs/workflow-quality-rubric)
- [Published GOV-08](/docs/published/gov-08-exploratory-review)
