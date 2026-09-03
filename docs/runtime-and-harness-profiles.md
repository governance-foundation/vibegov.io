---
sidebar_position: 14
title: Runtime and Harness Profiles
description: Understand how VibeGov runtime and harness profiles relate to the canonical bootstrap contract and GOV rules.
---

# Runtime and Harness Profiles

These pages translate VibeGov into specific agent, runtime, or harness shapes.

They are adapters and examples. They are not required to use VibeGov, and they do not replace the canonical bootstrap contract, `.governance/` rules, issue/spec discipline, or evidence gates.

## How to read this section

Start with core VibeGov first:
- [Overview](/docs/intro)
- [Quick Start](/docs/quickstart)
- [Bootstrap](/docs/bootstrap)
- [Execution Modes](/docs/execution-modes)
- [Published GOV Rules](/docs/published/gov-01-instructions)

Then use these profiles only when you need to adapt those controls to a concrete execution environment.

## Profile boundaries

Runtime and harness profiles may describe:
- model or agent loop shape,
- tool-surface and prompt design,
- verifier and evaluator wiring,
- progress and evidence artifacts,
- runtime-specific constraints or failure modes.

They should not redefine:
- VibeGov's source of truth,
- required governance files,
- Development vs Exploration mode semantics,
- completion evidence expectations,
- blocker routing and traceability.

## Available profiles and examples

- [Minimal VibeGov Execution Profile Snippet](/docs/minimal-vibegov-execution-profile-snippet) is the smallest portable execution-profile seed.
- [Harness Profile: Codex](/docs/harness-profile-codex) adapts VibeGov controls to Codex-centered work loops.
- [Harness Profile: Minimal Claude Harness](/docs/harness-profile-minimal-claude) maps a generator/evaluator harness pattern into VibeGov.
- [Harness Builder Checklist](/docs/harness-builder-checklist) gives profile authors a compact review checklist.
- [Execution Sharpness and Governed Closure](/docs/codex-prompting-through-vibegov) captures harness-design lessons in native VibeGov language.

## Rule of thumb

If a profile conflicts with the bootstrap contract or published GOV rules, treat the canonical VibeGov surface as authoritative and update the profile.
