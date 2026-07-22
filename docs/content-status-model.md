---
sidebar_position: 3
title: Content Status Model
description: Understand which VibeGov surfaces are canonical contracts, published rules, operational guidance, role packs, runtime profiles, or commentary.
---

# Content Status Model

VibeGov content has different authority levels.

Use this model when you need to know whether a page is a source of truth, recommended practice, a machine-readable asset, a runtime-specific profile, or explanatory context.

## Status labels

| Label | What it means | Examples |
| --- | --- | --- |
| Canonical contract | Must be treated as source of truth for the behavior it defines. If another page disagrees, follow the canonical contract and raise the drift. | [`agent.txt`](/agent.txt), [`bootstrap.json`](/bootstrap.json), [Bootstrap](/docs/bootstrap) |
| Published governance rule | Stable published rule documentation generated from the active GOV rule set. Use it as rule-level guidance, while preserving the underlying `.governance/rules/*.mdc` files as installable repo-local sources. | [Published GOV pages](/docs/published/gov-01-instructions) |
| Operational guide | Recommended practice for running VibeGov well. These pages may evolve as the operating model improves. | [Execution Modes](/docs/execution-modes), [Checkpoint Reporting](/docs/checkpoint-reporting), [Blocker Escalation](/docs/blocker-escalation) |
| Role pack | Machine-readable agent role bootstrap assets. Role packs define role-specific operating context, but they do not replace the canonical bootstrap contract or GOV rules. | [Agent Roles](/roles), `/roles/index.json`, role manifests |
| Runtime-specific profile | Provider or harness guidance that translates VibeGov into a specific runtime shape. Profiles are optional adapters/examples, not core governance law. | [Codex Harness Profile](/docs/harness-profile-codex), [Minimal Claude Harness Profile](/docs/harness-profile-minimal-claude) |
| Blog / commentary | Explanatory context, release notes, or opinionated narrative. Useful for understanding, but not a current contract. | Blog posts and public commentary |

## How to resolve conflicts

When surfaces disagree, use this order:

1. canonical contract
2. published governance rule
3. role pack or runtime profile, only inside its stated scope
4. operational guide
5. blog/commentary

If a lower-authority page appears to contradict a higher-authority source, do not silently merge the two. Treat it as documentation drift and raise an issue with the conflicting links.

## Lightweight use

This model is a reader aid, not extra process.

Add a status label when it prevents confusion about authority, portability, or freshness. Do not label every paragraph or create status bureaucracy around obvious supporting text.
