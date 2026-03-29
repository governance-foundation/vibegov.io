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
4. Create the first feature/change spec from `SPEC_TEMPLATE.md`.
5. Create or normalize a spec-mapped backlog.
6. Install the strict Git workflow for agents:
   - `main` is promotion/release only
   - `develop` is the pull-request integration branch
   - issue-scoped `feature/`, `fix/`, `docs/`, and `chore/` branches start from `develop`
   - agents never commit directly to `main` or `develop`
   - normal work enters `develop` through pull request
   - `develop` promotes to `main` through an explicit pull request
   - hotfixes branch from `main` and must be reconciled back into `develop`
   - add a repo-local pull-request template and branch-protection checklist
7. Detect any existing provider-native rules directory in the repo. If one exists, mirror the active `.governance/rules/*.mdc` files into it and report the target path. If none exists, keep `.governance/` canonical and do not invent a mirror path.
8. Report the active governance sources you are using and the Git workflow artifacts you installed.

Then stop before product-code implementation.

Quality expectation:
- Use AI to help raise delivery completeness, not just implementation speed.
- Treat tests, specs, documentation, validation evidence, traceability, and delivery clarity as first-class delivery artifacts.
- Do not use AI only to accelerate code changes while skipping the quality scaffolding around those changes.
```

Need a repeatable way to prove bootstrap works? See [Bootstrap Validation](/docs/bootstrap-validation) and the [Bootstrap Validator Harness](/docs/bootstrap-validator-harness).

Strict Git workflow reference: [Branch Protection Checklist](/docs/branch-protection-checklist).

## Governance Rules Navigation

- [GOV-01: Instructions](/docs/published/gov-01-instructions)
- [GOV-02: Workflow](/docs/published/gov-02-workflow)
- [GOV-03: Communication](/docs/published/gov-03-communication)
- [GOV-04: Quality](/docs/published/gov-04-quality)
- [GOV-05: Testing](/docs/published/gov-05-testing)
- [GOV-06: Issues](/docs/published/gov-06-issues)
- [GOV-07: Tasks](/docs/published/gov-07-tasks)
- [GOV-08: Exploratory Review](/docs/published/gov-08-exploratory-review)

## Quality expectation after bootstrap

Bootstrap is not only about installing governance files. It is also about installing a higher standard for done.

VibeGov already pushes this through:
- **GOV-04 Quality** — evidence, maintainability, docs/spec updates, and residual-risk honesty
- **GOV-05 Testing** — tests as proof of claims, traceable to requirements or acceptance criteria
- **GOV-06 Issues** — implementation-grade issue quality, verification expectations, and traceable closure

The AI-enabled implication is straightforward: as tests, specs, documentation, traceability, and delivery clarity become cheaper to maintain, they become less optional to skip. AI should help teams deliver to the highest standards they expect, not just help them ship faster.

## Pass Gate #1

Continue only if all are true:

- `.governance/rules/` exists
- active governance set includes `GOV-01` through `GOV-08`
- `.governance/project/` exists with project intent created from the template
- `.governance/specs/` exists with the first feature/change spec created from the template
- backlog maps to spec scope
- strict `main`/`develop` roles and pull-request flow are documented before implementation begins
- if the repo uses GitHub, a pull-request template exists and branch protection expectations are documented
- active governance sources and Git workflow artifacts were reported
- no product code has been written yet

If any fail, rerun the same prompt.
