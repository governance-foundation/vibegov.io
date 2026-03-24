---
sidebar_position: 2
---

# Bootstrap

Copy this as message 1 in any coding agent.

```text
Bootstrap this repo with VibeGov.
Read and follow:
- https://governance-foundation.github.io/vibegov.io/agent.txt
- https://governance-foundation.github.io/vibegov.io/bootstrap.json

Before writing any product code:
1. Create `.governance/rules/`, `.governance/project/`, and `.governance/specs/`.
2. Install the active VibeGov rule set (`GOV-01` through `GOV-08`) into `.governance/rules/`.
3. Create project intent from `PROJECT_TEMPLATE.md`.
4. Translate the raw request into structured OpenSpec-aligned requirements before implementation begins.
5. Create the first feature/change spec from `SPEC_TEMPLATE.md` with explicit requirement IDs, acceptance criteria, and verification intent.
6. Create or normalize a spec-mapped backlog.
7. Create the initial OpenSpec planning foundation needed for governed delivery (`openspec/specs/`, `openspec/traceability.md`, and supporting `openspec/changes/` or `openspec/migration/` entries when needed).
8. Establish a polished SDLC foundation proportionate to the repo context: confirm or create onboarding/docs entrypoints, delivery/test workflow guidance, and host-appropriate repo scaffolding where appropriate.
9. Detect any existing provider-native rules directory in the repo. If one exists, mirror the active `.governance/rules/*.mdc` files into it and report the target path. If none exists, keep `.governance/` canonical and do not invent a mirror path.
10. Report the active governance and spec sources you are using.

Then stop before product-code implementation.
```

Need a repeatable way to prove bootstrap works? See [Bootstrap Validation](/docs/bootstrap-validation), the [Bootstrap Foundation Contract](/docs/bootstrap-foundation), and the [Bootstrap Validator Harness](/docs/bootstrap-validator-harness).

## Governance Rules Navigation

- [GOV-01: Instructions](/docs/published/gov-01-instructions)
- [GOV-02: Workflow](/docs/published/gov-02-workflow)
- [GOV-03: Communication](/docs/published/gov-03-communication)
- [GOV-04: Quality](/docs/published/gov-04-quality)
- [GOV-05: Testing](/docs/published/gov-05-testing)
- [GOV-06: Issues](/docs/published/gov-06-issues)
- [GOV-07: Tasks](/docs/published/gov-07-tasks)
- [GOV-08: Exploratory Review](/docs/published/gov-08-exploratory-review)

## Pass Gate #1

Continue only if all are true:

- `.governance/rules/` exists
- active governance set includes `GOV-01` through `GOV-08`
- `.governance/project/` exists with project intent created from the template
- `.governance/specs/` exists with the first feature/change spec created from the template
- `openspec/specs/` exists and traceability has an entrypoint
- the first spec includes explicit requirement IDs, acceptance criteria, and verification intent
- backlog maps to spec scope
- active governance and spec sources were reported
- no product code has been written yet

If any fail, rerun the same prompt.
