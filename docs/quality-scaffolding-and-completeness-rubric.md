---
sidebar_position: 11
---

# Quality Scaffolding and Completeness Rubric

This rubric exists to make quality more structured and harder to fake.

AI can now help teams produce more artifacts, more summaries, more tests, and more implementation in less time. That does **not** automatically mean delivery is becoming more complete or more trustworthy.

VibeGov uses this rubric to separate trustworthy completion from appearance-of-completion.

## Quality scaffolding

Quality scaffolding is the supporting artifact layer around a change that makes the work trustworthy, reviewable, maintainable, and releasable.

Typical quality scaffolding includes:
- issue clarity
- spec/requirement binding
- tests and validation evidence
- documentation updates
- traceability links
- PR and handoff clarity
- release-readiness or operational evidence
- explicit residual risk and follow-up debt

The practical rule is simple:

> AI should help teams maintain quality scaffolding, not just accelerate implementation.

## Completeness dimensions

For meaningful work, review the change across these dimensions where relevant.

### 1. Intent completeness
Questions:
- Is the issue implementation-grade?
- Are constraints, non-goals, and acceptance criteria clear?
- Is the work bound to spec/requirement IDs?

Weak signal:
- vague issue plus fast implementation

Strong signal:
- clear intent and explicit requirement/spec binding before work starts

### 2. Change completeness
Questions:
- Did the scoped change actually happen?
- Is the diff coherent and in-scope?
- Did the work avoid unrelated side changes?

Weak signal:
- partial change reported as full change

Strong signal:
- coherent, reviewable change unit aligned to the issue

### 3. Proof completeness
Questions:
- What evidence proves the change?
- Were tests/checks/manual proof run appropriately to risk?
- Is there a clear line from requirement to evidence?

Weak signal:
- build passed, therefore done

Strong signal:
- evidence is explicit, relevant, and proportional to the claim

### 4. Explanation completeness
Questions:
- Can another contributor understand what changed and why?
- Are docs, PR summaries, and handoff notes clear?
- Are known limits or residual risks explicit?

Weak signal:
- the truth is trapped in chat or private memory

Strong signal:
- the work is legible without archaeology

### 5. Traceability completeness
Questions:
- Are issue, spec, implementation, and evidence linked?
- Are follow-up gaps visible as tracked work?

Weak signal:
- proof or rationale exists somewhere, but not in the governed system

Strong signal:
- future contributors can follow the chain of intent to evidence to follow-up

### 6. Operational completeness
Questions:
- Are release/deploy/startup/smoke implications explicit where relevant?
- Is residual risk visible?
- Is the board/PR/release state honest?

Weak signal:
- merged means done, operationally unspecified

Strong signal:
- the work is safer to promote or easier to hand off because the operational truth is visible

## Fast review model

Use a simple three-state review per dimension:
- **Pass** — strong enough for the scoped work
- **Weak** — present but incomplete or easy to overclaim
- **Missing** — absent for a dimension that matters to this work

This is not a vanity score. It is a review lens.

## Proportional evidence principle

Not every change needs the same burden of proof.

Use evidence proportional to work type and risk:
- low-risk docs/content changes -> lighter proof
- normal behavior changes -> targeted + regression evidence
- contract/API changes -> stronger compatibility/contract proof
- release-critical or risky changes -> strongest operational evidence

The goal is not bureaucracy. The goal is honest completeness.

## Anti-fake-completion rules

Do not confuse these with trustworthy completion:
- passing build == verified behavior
- merged PR == done
- long summary == evidence
- generated tests == meaningful coverage
- closed issue == complete work

AI makes it easier to generate the appearance of completeness. Governance must separate appearance from proof.

## Missing completeness becomes tracked work

When work cannot fully satisfy the relevant completeness dimensions, the missing part must become visible follow-up work.

Examples:
- debt issue
- missing-test issue
- deferred-doc update
- blocker artifact
- explicit residual-risk note with linked follow-up issue

Missing completeness must not remain an invisible compromise.

## Typical questions to ask before calling work done

- What changed?
- What proves it?
- What explains it?
- What links it back to intent?
- What remains incomplete?
- Did the change improve the quality state of the system, or just add output?

## Related docs

- [Bootstrap](/docs/bootstrap)
- [Workflow Quality Rubric](/docs/workflow-quality-rubric)
- [Checkpoint Reporting](/docs/checkpoint-reporting)
- [Published GOV-04 Quality](/docs/published/gov-04-quality)
- [Published GOV-05 Testing](/docs/published/gov-05-testing)
- [Published GOV-06 Issues](/docs/published/gov-06-issues)
