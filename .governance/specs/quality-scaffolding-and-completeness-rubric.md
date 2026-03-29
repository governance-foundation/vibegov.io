# Quality Scaffolding and Completeness Rubric

## Intent
Make quality and completeness first-class, structured parts of VibeGov delivery. Define quality scaffolding as the supporting artifacts that make work trustworthy, reviewable, maintainable, and releasable, and provide a reusable completeness rubric that helps teams distinguish trustworthy completion from appearance-of-completion.

## Scope
In scope:
- define quality scaffolding as a VibeGov concept
- define a reusable completeness rubric for governed work
- make missing completeness become tracked follow-up work rather than invisible compromise
- add anti-fake-completion guidance
- make evidence expectations proportional to work type and risk

Out of scope:
- provider-specific enforcement automation
- organization-specific dashboards and scorecards
- replacing current issues/specs/testing rules with a single mega-rule

## Acceptance Criteria
- `QS-001` VibeGov explicitly defines quality scaffolding as a named concept.
- `QS-002` A reusable completeness rubric exists and is published in docs.
- `QS-003` Governance explicitly distinguishes trustworthy completion from artifact volume or appearance-of-completion.
- `QS-004` Governance requires missing completeness to become tracked follow-up work instead of invisible compromise.
- `QS-005` Governance reinforces that evidence expectations should be proportional to work type and risk, not one-size-fits-all.
- `QS-006` `npm run build` succeeds after the changes.

## Quality Scaffolding Definition
Quality scaffolding is the set of supporting artifacts that make a change trustworthy, reviewable, maintainable, and releasable.

Typical scaffolding includes:
- issue clarity
- spec/requirement binding
- tests and validation evidence
- documentation updates
- traceability links
- PR and handoff clarity
- release-readiness or operational evidence
- explicit residual risk and follow-up debt

## Completeness Dimensions
A meaningful change should be reviewed across these dimensions where applicable:
1. **Intent completeness** — issue/scope/requirements are clear
2. **Change completeness** — the scoped implementation/content change is actually made
3. **Proof completeness** — evidence exists that the intended behavior or outcome holds
4. **Explanation completeness** — docs, PRs, and handoff artifacts explain what changed and why
5. **Traceability completeness** — issue/spec/evidence/follow-up work stay linked
6. **Operational completeness** — release, deploy, startup, smoke, or residual-risk implications are explicit when relevant

## Verification Model
Quality and completeness should be judged proportionally:
- low-risk doc/content changes need lighter proof
- behavior or contract changes need stronger proof
- release-critical or high-risk work needs the strongest operational evidence

## Anti-Fake-Completion Principle
VibeGov should explicitly prevent these false signals from being treated as completion:
- passing build == verified behavior
- merged PR == done
- long summary == evidence
- generated tests == meaningful coverage
- issue closed == trustworthy completion

## Missing Completeness Rule
When a change cannot satisfy all relevant completeness dimensions, the gap must become tracked work:
- follow-up issue
- debt issue
- blocker artifact
- explicit deferred proof/doc/spec update

Missing completeness must not remain an invisible compromise.
