---
sidebar_position: 3
---

# Bootstrap Foundation Contract

VibeGov bootstrap should leave a repo ready for governed delivery, not merely decorated with governance files.

The goal is a polished SDLC foundation that the agent keeps using going forward.

## What bootstrap should do before implementation

When a raw request arrives, bootstrap should not jump straight into product code.

It should first:
- translate the raw request into structured requirements
- normalize those requirements into OpenSpec-aligned planning artifacts
- define explicit acceptance criteria
- define an initial verification and test intent
- create a mapped backlog or task plan
- establish a repo operating foundation proportionate to the environment
- report the active governance and spec sources it will use during delivery

Only after that foundation exists should implementation begin.

## Minimum governed bootstrap outputs

A strong bootstrap should leave behind, at minimum:

### Governance foundation
- `.governance/rules/`
- `.governance/project/`
- `.governance/specs/`
- active GOV-01 through GOV-08 rules
- project intent
- initial feature/change spec
- spec-mapped backlog

### OpenSpec planning foundation
- `openspec/specs/` for structured requirements
- `openspec/changes/` for active change planning when needed
- `openspec/migration/` for migration or operator notes when needed
- `openspec/traceability.md` or equivalent traceability entrypoint
- explicit requirement IDs and acceptance criteria before coding
- initial verification intent tied to those requirements

### Repo delivery foundation
Bootstrap should establish a delivery scaffold proportionate to the host and repo context, such as:
- a root `README.md` or confirmed onboarding entrypoint
- contribution or workflow guidance when missing
- issue/task conventions
- testing strategy scaffolding
- host-specific SDLC scaffolding where appropriate

Examples of host-specific scaffolding may include:
- `.github/ISSUE_TEMPLATE/`
- CI workflow files
- PR templates
- CODEOWNERS

These should be added when appropriate to the environment or explicitly requested. They should not be fabricated blindly when the host/platform context is absent.

## OpenSpec-first expectation

VibeGov should treat raw user intent as input, not as implementation-ready requirements.

Before coding:
- convert the request into structured requirements
- define acceptance criteria in executable terms
- identify test intent and evidence expectations
- bind work to requirement IDs
- make traceability visible

This is the step that turns a vibe into governed delivery.

## Enterprise-ready does not mean reckless

Bootstrap should create a professional operating foundation.
It should **not** assume permission to mutate external systems without being asked.

Bootstrap should generally avoid by default:
- pushing to remotes
- provisioning cloud infrastructure
- making org-level repository settings changes
- publishing externally

Enterprise-ready bootstrap means the repo is prepared for disciplined delivery, not that every external action has already been taken.

## What a weak bootstrap looks like

A weak bootstrap:
- copies governance files only
- skips structured requirement translation
- skips acceptance criteria and test intent
- leaves no clear traceability model
- creates no delivery foundation beyond `.governance/`
- starts coding directly from the raw prompt

That is governance-shaped decoration, not governed SDLC activation.

## What a strong bootstrap looks like

A strong bootstrap:
- installs governance correctly
- translates the request into OpenSpec-aligned requirements
- defines acceptance criteria and verification expectations
- creates backlog/task structure
- establishes repo workflow/onboarding/test scaffolding proportionate to context
- then uses those artifacts throughout implementation instead of abandoning them after setup

## Recommended interpretation

Treat bootstrap as:

> SDLC activation for the session and repo.

Not:

> a one-time file copy step before the real work starts.

## Related docs

- [Bootstrap](/docs/bootstrap)
- [Quick Start](/docs/quickstart)
- [Bootstrap Validation](/docs/bootstrap-validation)
- [Workflow Quality Rubric](/docs/workflow-quality-rubric)
