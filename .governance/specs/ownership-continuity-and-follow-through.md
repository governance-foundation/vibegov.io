# Ownership Continuity and Follow-Through

## Intent
Extend GOV-02 so explicit orchestration covers not only delegation shape, but also visible parent accountability after delegation. The outcome is a governance rule that treats silent fire-and-forget worker handling as a structural weakness rather than a harmless runtime detail.

## Scope
In scope:
- `GOV-02-ORCH-007` require parent orchestration accountability to continue after delegation until completion, blocker, or explicit handoff
- `GOV-02-ORCH-008` require visible follow-through checkpoints for long-running delegated work
- `GOV-02-ORCH-009` require governed systems to define an early-follow-up checkpoint window and an ongoing supervision cadence
- `GOV-02-ORCH-010` keep exact cadence timings in runtime/project operating docs rather than hardcoding one universal governance constant
- add a public-facing blog post translating the ACP/setup lesson into governance language

Out of scope:
- exact ACP/OpenClaw/acpx commands or machine-local setup steps
- exact timing values such as 60 seconds or 5 minutes as universal governance law
- transcript-repair patches, runtime bugfixes, or local recovery procedures

## Acceptance Criteria
- GOV-02 explicitly states that delegation does not end parent orchestration accountability.
- GOV-02 explicitly states that long-running delegated work requires visible follow-through checkpoints.
- GOV-02 explicitly requires governed systems to define follow-up cadence while allowing runtime/project docs to set exact timing thresholds.
- A new blog post explains why successful worker spawn is not the same as governed supervision.

## Tests and Evidence
- inspect `.governance/rules/gov-02-workflow.mdc`
- inspect `docs/published/gov-02-workflow.md`
- inspect `blog/2026-03-19-acp-setup-needs-parent-supervision.md`
- run `npm run build`

## Documentation Impact
- update `.governance/rules/gov-02-workflow.mdc`
- update `docs/published/gov-02-workflow.md`
- add `blog/2026-03-19-acp-setup-needs-parent-supervision.md`

## Verification
Verification is documentation-driven. Success requires the canonical rule, published mirror, and new blog post to align on the same governance lesson, plus a successful Docusaurus build.

## Change Notes
- Keep the new rule at the governance/accountability level, not as an ACP-only implementation note.
- Preserve the governance-vs-ops split by requiring cadence without hardcoding one universal timing constant.
