# Explicit Orchestration and Bounded Work

## Intent
Clarify the GOV-02 workflow rule so VibeGov explicitly governs how multi-agent work is structured, not just how it is verified. The outcome is a visible parent-orchestrated pattern built from tracked, bounded work units rather than opaque worker-of-worker coordination.

## Scope
In scope:
- `GOV-02-ORCH-001` require the parent orchestration context to select one tracked unit of work before delegation starts
- `GOV-02-ORCH-002` require each delegated unit to carry explicit owner, intent, and expected evidence
- `GOV-02-ORCH-003` establish the default sequence announce -> delegate -> receive visible result -> continue
- `GOV-02-ORCH-004` mark hidden nested worker-coordinator chains as a default anti-pattern
- `GOV-02-ORCH-005` prefer sequential bounded stages when they improve visibility and recovery
- `GOV-02-ORCH-006` allow parallel lanes only when ownership, scope, checkpoints, and failure handling remain explicit
- add a public-facing blog post translating the rule into plain operational language

Out of scope:
- ACP/OpenClaw/acpx setup details
- queue TTLs, permission settings, timeouts, or backend config values
- machine-local paths, wrapper commands, or environment fixes
- temporary recovery hacks, transcript fallbacks, or bundle-specific patches

## Acceptance Criteria
- GOV-02 includes a dedicated section for explicit orchestration and bounded work units.
- The rule states that the parent orchestration context selects a tracked unit before delegation.
- The rule states that the delegated unit has explicit owner, intent, and expected evidence.
- The rule frames hidden nested worker-coordinator chains as a default anti-pattern rather than an absolute universal ban.
- The rule preserves room for parallel work only when visibility and recovery stay explicit.
- A new blog post explains why this matters in practical governance terms.

## Tests and Evidence
- inspect `.governance/rules/gov-02-workflow.mdc`
- inspect `docs/published/gov-02-workflow.md`
- inspect `blog/2026-03-18-explicit-orchestration-bounded-work.md`
- run `npm run build`

## Documentation Impact
- update `.governance/rules/gov-02-workflow.mdc`
- update `docs/published/gov-02-workflow.md`
- add `blog/2026-03-18-explicit-orchestration-bounded-work.md`

## Verification
Verification is documentation-driven. Success requires the canonical rule, public published mirror, and blog post to align on the same governance principle, plus a successful Docusaurus build.

## Change Notes
- Keep this as governance guidance, not runtime implementation doctrine.
- Preserve room for parallel execution where it remains auditable and recoverable.
