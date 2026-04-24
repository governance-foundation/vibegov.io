# Codex Prompting Through a VibeGov Lens

## Intent
Capture the useful parts of Codex-oriented prompting and harness style without importing Codex performance heuristics wholesale into VibeGov.

## Scope
In scope:
- define what VibeGov should borrow from Codex prompting
- define what VibeGov should reject or constrain
- add a formal public doc page that explains the resulting governed stance
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
- add `docs/codex-prompting-through-vibegov.md`
- update `docs/harness-profile-codex.md`
- update `docs/published/gov-11-agent-legibility-in-repo-truth.md`
- update `sidebars.js`

## Verification
Verification is docs/build driven. Success requires a coherent public explanation, a concrete harness-profile update, an aligned canonical/published GOV rule update, discoverable navigation, and a passing site build.

## Change Notes
- This slice should sharpen VibeGov’s Codex adapter stance without weakening tool-agnostic governance.
- The resulting profile should preserve Codex’s execution energy while keeping VibeGov’s stronger closure, oversight, and traceability model.
