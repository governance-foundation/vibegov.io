---
sidebar_position: 5
---

# Content Style Guide

Use this guide when writing or reviewing public VibeGov pages: docs, homepage copy, role pages, FAQs, examples, and blog posts.

The goal is not a house voice for its own sake. The goal is public content that helps a new reader understand what VibeGov is, what authority a page has, and what they can safely do next.

## Core Voice

Write with a voice that is:

- **direct:** say the useful thing before the setup
- **practical:** prefer usable guidance over abstract positioning
- **specific:** name the artifact, rule, command, decision, or proof
- **bounded:** state what the page covers and what it does not cover
- **evidence-aware:** connect claims to concrete checks, links, logs, examples, or resulting state

Avoid:

- internal implementation notes on public pages
- vague claims such as "enterprise grade", "fully governed", or "production ready" without proof
- provider lock-in where the core idea is meant to work across tools
- process theatre that adds steps without making delivery clearer or safer
- compliance or risk claims that the page does not substantiate

## Public vs Internal Wording

Public content should describe the reusable governance pattern, not the private operating details behind it.

Prefer:

- "a developer worker records evidence on the issue"
- "the validator checks live repo and GitHub state"
- "route blockers through the configured escalation path"

Avoid:

- private agent names unless the page is explicitly about a local implementation
- chat-room or cron-specific details unless they are required for the reader to apply the pattern
- local file paths from one project unless they are examples and clearly labelled as examples
- status notes such as "this run", "today", or "the current agent" unless the page is a dated report

If implementation detail is useful, label it as an example instead of presenting it as the portable rule.

## Terminology

Define VibeGov-specific terms before using them heavily.

When introducing a term, answer three questions quickly:

- what it is
- when it is used
- what artifact or behavior proves it happened

Useful wording patterns:

| Term type | Strong wording |
| --- | --- |
| Process | "Development changes code, docs, config, or tests and ends with validation evidence." |
| Artifact | "A checkpoint is a durable progress record with scope, evidence, blockers, and next action." |
| Role | "A validator checks the live evidence; it does not trust the worker's claim by itself." |
| Status | "Blocked means the next action is outside the worker's current authority or information." |

Do not make readers learn several near-synonyms for the same concept. Pick the clearest term and reuse it.

## Authority Level

Make the authority level clear when a page could be mistaken for a rule.

Use these labels naturally in the copy:

- **Contract:** required behavior, completion criteria, or acceptance gate
- **Guide:** recommended operating pattern with room for judgement
- **Example:** one concrete implementation of a portable idea
- **Commentary:** explanation, rationale, or framing that supports the rule but does not replace it

If a page contains more than one level, say so near the top. For example: "This guide explains the contract and gives one implementation example."

## Evidence Language

Prefer evidence that another person or agent can check.

Strong evidence language names:

- the source of truth
- the command, artifact, issue, PR, commit, log, screenshot, or deployed page
- the result
- any remaining limitation

Examples:

- weak: "The work was validated."
- stronger: "`npm run build` passed; the PR comment links the build log and changed files."
- weak: "The blocker was escalated."
- stronger: "Issue #42 has the blocker evidence, the project item is `Blocked`, and the escalation packet asks main to grant repo write access."

When the evidence is partial, say that directly.

## Homepage Copy

Homepage copy should lead with user outcomes before implementation detail.

Prefer:

- what the reader can do with VibeGov
- what problem it prevents
- what decision it helps them make
- where to start next

Avoid:

- long internal origin stories in first-screen copy
- tool-specific internals before the reader understands the product
- claims that sound like certification, compliance, or deployment guarantees
- generic AI productivity language that could describe any coding assistant workflow

## Docs Copy

Most docs pages should make the target reader and next action obvious.

For longer docs, include:

- a short opening that says who the page is for
- a compact "when to use this" section when the route could be confused with another route
- concrete examples where the rule is easy to misread
- related links at the end

Use TLDR or next-action blocks when a page is long or operationally important. Keep those blocks short and action-oriented.

## PR Review Checklist

Before publishing or approving public content, check:

- Does the page distinguish public guidance from local implementation detail?
- Are VibeGov-specific terms defined before heavy use?
- Is the authority level clear: contract, guide, example, or commentary?
- Are evidence claims concrete and checkable?
- Does homepage or landing copy lead with user outcomes?
- Does docs copy tell the reader what to do next?
- Is the page short enough, or structured enough, to be used during review?

## Related Docs

- [Contribute](/docs/contribute)
- [Output Quality and Anti-Slop Guidance](/docs/output-quality-and-anti-slop)
- [Workflow Quality Rubric](/docs/workflow-quality-rubric)
- [Checkpoint Reporting](/docs/checkpoint-reporting)
