# PROJECT_INTENT.md

## Purpose
VibeGov exists to give humans and AI coding agents a shared governance layer for software delivery so speed does not come at the cost of intent, evidence, traceability, or honest completion standards.

## Context
This repo publishes the public VibeGov site, docs, and governance guidance. It is both a public explanation surface and a live working example of VibeGov governance in practice. The site needs to be understandable to normal humans while still being useful to agent-driven teams adopting governed delivery.

## Constraints
- Guidance should stay portable across tools and providers.
- `.governance/` is the canonical governance source.
- Public-facing copy must be understandable without insider jargon.
- Homepage/docs entrypoints should stay short and readable, with detailed guidance living in linked docs.
- Changes should remain traceable through issues, specs, validation, and release artifacts.

## Risks
- Governance language can drift into abstract jargon that normal humans do not understand.
- Homepage/docs entrypoints can sprawl into walls of prompt text instead of clean quick paths.
- Chat-driven recovery can create repo drift if issue/spec/backlog artifacts are missing or weak.
- Guidance can become internally inconsistent if homepage, docs, rules, and contribution paths evolve separately.

## Assumptions
- Users may arrive with little prior context and need plain-language entrypoints.
- Teams adopting VibeGov want both bootstrap guidance and a way to improve the guidance through feedback.
- GitHub issues and in-repo governance artifacts should work together as the durable record of intent and follow-up.

## Key Behaviors
- VibeGov should explain governed AI-assisted delivery in plain language.
- The homepage should provide short quick paths for bootstrap init, bootstrap update, and bootstrap feedback.
- Docs should hold the detailed prompt/runtime guidance behind those entrypoints.
- Governance changes should be bound to issues/specs and validated before release claims.
- The repo should demonstrate the same traceability standards it asks adopters to use.

## Verification Expectations
- Docs/site changes should pass `npm run build` when they affect the published site.
- Homepage and docs entrypoints should be manually reviewed for readability, linkage, and consistency.
- Governance/process updates should be linked to issues and specs, with acceptance criteria and release state recorded.
