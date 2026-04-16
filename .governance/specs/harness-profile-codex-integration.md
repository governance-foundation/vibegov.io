# Harness Profile: Codex Integration

## Intent
Define a Codex-oriented harness profile for VibeGov that maps runtime behavior to existing governance controls without making Codex a core governance dependency.

## Scope
In scope:
- define a Codex profile for generator/evaluator loop behavior
- define profile guidance for task-state artifacts, verifier contract, and escalation/retry semantics
- map profile controls to existing GOV rules
- add discoverable docs guidance for adopting the profile in target repos

Out of scope:
- changing core GOV rules to be Codex-specific
- enforcing one exact Codex CLI command shape across all environments
- machine-local runtime/install/auth details
- replacing non-Codex profile options

## Acceptance Criteria
- `.governance/specs/harness-profile-codex-integration.md` exists with bounded intent/scope.
- `docs/harness-profile-codex.md` exists and explains practical profile adoption.
- Docs explicitly map Codex harness concepts to GOV controls.
- `sidebars.js` includes the Codex harness profile page.
- `npm run build` passes.

## Tests and Evidence
- inspect `.governance/specs/harness-profile-codex-integration.md`
- inspect `docs/harness-profile-codex.md`
- inspect `sidebars.js`
- run `npm run build`

## Documentation Impact
- add `docs/harness-profile-codex.md`
- update `sidebars.js`

## Verification
Verification is docs/build driven. Success requires coherent profile docs + discoverable nav + passing site build.

## Change Notes
- This profile extends VibeGov adoption options without changing tool-agnostic governance core.
- Runtime-specific command examples should remain illustrative, not mandatory.
