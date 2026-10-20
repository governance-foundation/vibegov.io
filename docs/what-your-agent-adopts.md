---
title: What your agent adopts
description: The knowledge, rules and workflows your agent adopts to keep delivery focused and trustworthy.
---

# What your agent adopts

VibeGov is knowledge your agent adopts: shared rules, intent and ways of working that keep AI-assisted delivery focused, reviewable and easier to hand over. Start with the [Quick paths](/#quick-paths) when you are ready to use it.

## Knowledge that stays with the project

Your agent reads and follows VibeGov's guidance; there is no VibeGov application to install. When you ask it to bootstrap a repository, the agent can create or normalise files that carry this knowledge so humans and agents share the same sources of truth before coding.

### Governance rules

The agent adopts the active VibeGov rule set, with provider-native mirrors only when the repo already uses them.

```text
.governance/rules/
```

### Project intent and specs

Repo-local intent, feature or bootstrap setup specs, and backlog mapping that keep work tied to agreed scope.

```text
.governance/project/PROJECT_INTENT.md
.governance/specs/SPEC-001-...
```

Backlog items map to spec sections.

### Workflow entrypoints

Agent instructions, setup/remediation tracking, pull request expectations, branch protection checks, and issue-pickup flow.

```text
AGENTS.md
INIT-TODO.md
.github/pull_request_template.md
.github/branch-protection-checklist.md
```

### Continuity guidance

A lightweight continuity model for decisions, blockers, phase changes, compaction risk, and handoff between agents. It includes a session diary, checkpoint triggers and promotion flow.

### Bootstrap reports

Current status, analysis, feedback, optional blockers, and historical run bundles that prove what changed.

```text
.governance/project/bootstrap/STATUS.md
.governance/project/bootstrap/ANALYSIS.md
.governance/project/bootstrap/FEEDBACK.md
history/<timestamp>/
```

For the full adoption workflow and file requirements, read [Bootstrap](/docs/bootstrap).

## Governed delivery outcomes

VibeGov gives teams a shared operating layer for AI-assisted software work: clear intent, honest completion evidence and durable context that survives handoffs.

- **Keep Intent Visible.** Tie work to project intent, specs, issues and acceptance criteria before implementation starts. [Start Here](/docs/start-here).
- **Make Done Evidence-Based.** Close work with proof that matches the mode, from focused checks to release-ready validation. [Evidence Guide](/docs/mode-selection-and-evidence-closing).
- **Carry Context Between Agents.** Keep repo-local guidance, continuity notes and traceability available for the next contributor. [Continuity](/docs/agent-continuity-bootstrap).

## Who VibeGov is for

VibeGov is for people using AI-assisted delivery where intent, evidence, and traceability need to survive beyond the current chat.

### Good fit

- Teams using AI coding agents on real repositories.
- Solo developers who want agent speed without losing traceability.
- Technical founders and consultants managing multiple AI-assisted delivery threads.
- Maintainers who want issue, spec, and evidence discipline without heavyweight process tooling.
- Teams building agent harnesses that need repo-local operating rules.

### Probably overkill

- Throwaway scripts with no maintenance horizon.
- Teams that do not want evidence before completion claims.
- Projects that do not care about traceability or long-term change safety.
- Users looking for a hosted SaaS or magical autonomous runtime.

## Governed delivery in practice

See how VibeGov turns a vague implementation request into a scoped, reviewable delivery path.

### Before VibeGov

**"Add Google login."**

An agent may start coding immediately, before anyone has clarified intent, acceptance criteria, security constraints, issue traceability, or what evidence will prove the change is complete.

### After VibeGov

The same request becomes a governed path.

1. Capture the intent behind the request.
2. Create or update the governing spec.
3. Track the work in a GitHub issue.
4. Define acceptance criteria and evidence.
5. Implement against the agreed scope.
6. Run the validation that proves the claim.
7. Attach proof to the issue or pull request.
8. Update traceability and delivery state.

Follow the full loop in [The VibeGov SDLC](/docs/vibegov-sdlc), then use [Bootstrap](/docs/bootstrap) before product-code implementation.

Have a suggestion? [Suggest via Issue](https://github.com/governance-foundation/vibegov.io/issues/new/choose).
