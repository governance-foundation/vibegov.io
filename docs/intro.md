---
sidebar_position: 1
---

# vibegov

vibegov is a portable layer of professional delivery judgement for AI-assisted software development.

VibeGov uses a typical stage-based delivery flow.
In parallel, teams can run an **Exploratory Review** mode to systematically find gaps, convert findings into backlog issues, and improve release quality.

This site is published incrementally. Pages are released one at a time so guidance can evolve with clear intent and feedback.

## Why vibegov Exists

AI-assisted delivery makes it easy to generate code quickly.

The failure mode is intent decay:
- why something is being built gets blurred
- constraints get skipped
- "done" collapses to code only
- future change gets harder

vibegov exists to make delivery judgement explicit and portable.

It captures SDLC wisdom as directional guidance that teams can copy into any project so agents and humans inherit stronger delivery defaults without heavy process tooling.

## Why `.governance/` Exists

`.governance/` isolates delivery guidance from product code so it is easy to copy, version, and evolve.

Folder roles:
- `.governance/rules/`: cross-project governance rules (`gov-*.mdc`)
- `.governance/project/`: project-level intent and constraints
- `.governance/specs/`: app feature/change specs for scoped work

Canonical-source model:
- `.governance/` is the single source of truth for governance.
- Different agents/providers can use the same rules and link them via their native mechanism (for example `AGENTS.md` or `.cursor/rules/`).

## Install

- URL-first start: [Bootstrap](/docs/bootstrap)
- Full setup details: [Quick Start](/docs/quickstart)

## What changes when vibegov is present

- agents ask better scoping questions
- spec and intent are shaped before coding
- validation and traceability are expected
- releases leave clearer artifacts
- long-term evolution is safer

## How this site is released

1. The site shell is always live.
2. Governance pages are published one page at a time.
3. Each release is announced in the changelog and open for GitHub issue feedback.


## Give feedback

- Open suggestions: [Create an issue](https://github.com/governance-foundation/vibegov.io/issues/new/choose)
- View current discussions: [Issue log](https://github.com/governance-foundation/vibegov.io/issues)

## Published governance pages

- [GOV-01: Instructions](/docs/published/gov-01-instructions)
- [GOV-02: Workflow](/docs/published/gov-02-workflow)
- [GOV-03: Communication](/docs/published/gov-03-communication)
- [GOV-04: Quality](/docs/published/gov-04-quality)
- [GOV-05: Testing](/docs/published/gov-05-testing)
- [GOV-06: Issues](/docs/published/gov-06-issues)
- [GOV-07: Tasks](/docs/published/gov-07-tasks)
- [GOV-08: Exploratory Review](/docs/published/gov-08-exploratory-review)


