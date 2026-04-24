# Codex Prompting Through a VibeGov Lens

## Intent
Translate strong execution patterns from Codex-oriented prompting and harness style into native VibeGov artifacts without keeping the outcome trapped in comparative meta-language.

## Scope
In scope:
- translate the strongest execution patterns into native VibeGov guidance
- tighten the public doc page so it reads as direct VibeGov guidance rather than comparison commentary
- add a companion public article version
- add a minimal practical snippet for harness use
- add a focused GOV rule addition for bounded autonomy and operator-legible execution
- update the Codex harness profile so it reflects the governed profile concretely

Out of scope:
- making Codex the mandatory runtime for VibeGov
- replacing existing core GOV rules with Codex-specific wording
- prescribing one exact CLI prompt or one local machine setup
- importing benchmark-oriented heuristics when they weaken legibility, closure, or safety

## Acceptance Criteria
- `.governance/specs/codex-prompting-vibegov-profile.md` exists with bounded intent/scope.
- `docs/codex-prompting-through-vibegov.md` exists and is linked in `sidebars.js`.
- One GOV rule is extended to capture the durable lesson around bounded autonomy and interrupt-efficient legibility.
- `docs/harness-profile-codex.md` is updated to show a stronger governed Codex profile, not only a minor wording pass.
- Supporting published GOV page stays aligned with the canonical rule.
- `npm run build` passes.

## Tests and Evidence
- inspect `.governance/specs/codex-prompting-vibegov-profile.md`
- inspect `docs/codex-prompting-through-vibegov.md`
- inspect `.governance/rules/gov-11-agent-legibility-in-repo-truth.mdc`
- inspect `docs/published/gov-11-agent-legibility-in-repo-truth.md`
- inspect `docs/harness-profile-codex.md`
- inspect `sidebars.js`
- run `npm run build`

## Documentation Impact
- update `docs/codex-prompting-through-vibegov.md`
- add `docs/minimal-vibegov-execution-profile-snippet.md`
- add `blog/2026-04-24-execution-sharpness-and-governed-closure.md`
- update `docs/harness-profile-codex.md`
- update `docs/published/gov-11-agent-legibility-in-repo-truth.md`
- update `sidebars.js`

## Verification
Verification is docs/build driven. Success requires a coherent public explanation, a concrete harness-profile update, an aligned canonical/published GOV rule update, discoverable navigation, and a passing site build.

## Change Notes
- This slice should sharpen VibeGov’s execution guidance without weakening tool-agnostic governance.
- The resulting profile should preserve execution energy while keeping VibeGov’s stronger closure, oversight, and traceability model.
