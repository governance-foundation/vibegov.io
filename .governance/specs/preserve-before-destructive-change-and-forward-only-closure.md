# Spec: preserve-before-destructive change and forward-only closure

## Intent
Make preservation-before-destruction and forward-only closure explicit in VibeGov so agents do not erase meaningful state while cleaning up, deleting, archiving, or reconciling branches.

## Scope
In scope:
- `PBDC-001` tighten `GOV-10` so meaningful state is preserved before destructive changes
- `PBDC-002` tighten `GOV-10` so secrets/unsafe-to-preserve material and disposable generated noise are explicit exceptions
- `PBDC-003` tighten `GOV-02` so branch archival/retirement happens only after the desired result is safely landed
- `PBDC-004` describe forward-only recovery and no-silent-revert behavior in the canonical/public rule text
- `PBDC-005` update at least one practical public guide so the rule is easy to apply during real work

Out of scope:
- changing CI or release pipelines
- imposing one universal branch model beyond the existing workflow rule
- preserving secrets or unsafe material in git history
- turning disposable generated output into a keep-by-default artifact

## Acceptance Criteria
- `PBDC-001` `GOV-10` explicitly distinguishes meaningful state from disposable/generated noise.
- `PBDC-002` `GOV-10` explicitly requires preserving meaningful state in history before deletion, overwrite, archival move, or other destructive change when safe to do so.
- `PBDC-003` `GOV-10` explicitly says cleanup/rollback must not silently erase why a change existed.
- `PBDC-004` `GOV-10` explicitly frames recovery as forward-only and traceable when old behavior/code needs to return.
- `PBDC-005` `GOV-02` explicitly says a governed work branch should be retired or archived only after the intended result is safely landed through the governed flow.
- `PBDC-006` Published governance mirror pages reflect the same rule updates.
- `PBDC-007` A practical public guide or operational doc translates the rule into fast decision guidance.
- `PBDC-008` `npm run build` succeeds after the documentation changes.

## Tests and Evidence
- inspect `.governance/specs/preserve-before-destructive-change-and-forward-only-closure.md`
- inspect `.governance/rules/gov-10-agent-state-closure-git-hygiene.mdc`
- inspect `.governance/rules/gov-02-workflow.mdc`
- inspect `docs/published/gov-10-agent-state-closure-git-hygiene.md`
- inspect `docs/published/gov-02-workflow.md`
- inspect `docs/quick-decisions.md`
- run `npm run build`

## Documentation Impact
- add `.governance/specs/preserve-before-destructive-change-and-forward-only-closure.md`
- update `.governance/rules/gov-10-agent-state-closure-git-hygiene.mdc`
- update `.governance/rules/gov-02-workflow.mdc`
- update `docs/published/gov-10-agent-state-closure-git-hygiene.md`
- update `docs/published/gov-02-workflow.md`
- update `docs/quick-decisions.md`

## Verification
Verification is documentation-driven. Success requires the canonical rules, published mirrors, and practical guide text to align on the same preserve-before-destructive and forward-only closure semantics, plus a successful site build.

## Change Notes
- Keep the rule focused on preserving meaningful state and traceability, not on forcing noisy micro-commits.
- Preserve the distinction between safe preservation and content that should be scrubbed, rotated, or handled outside normal history.
- Prefer extending the existing Git hygiene/workflow rules instead of inventing an unnecessary new rule file.
