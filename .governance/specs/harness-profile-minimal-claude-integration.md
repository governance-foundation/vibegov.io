# Harness Profile: Minimal Claude Harness Integration

## Intent
Integrate the reviewed minimal harness pattern into VibeGov as a governed profile and adoption guide, while keeping VibeGov core rules tool-agnostic.

## Scope
In scope:
- define a VibeGov harness profile for minimal generator/evaluator loops
- map profile components to existing GOV controls (workflow, issues, quality, testing, continuity, state closure, legibility, drift control, review loops)
- provide an adoption checklist for applying the profile in target repos
- update docs navigation to make the profile discoverable
- include GOV-10..GOV-13 in published governance navigation

Out of scope:
- forcing one runtime/toolchain as VibeGov core
- prescribing one exact evaluator implementation
- machine-local bootstrap scripts or provider-specific auth setup
- replacing existing VibeGov bootstrap flow

## Acceptance Criteria
- A public docs page defines the Minimal Claude Harness profile and boundaries.
- The docs page includes explicit mapping from harness components to GOV controls.
- The docs page includes a practical adoption checklist for new repos.
- `docs/sidebars.js` includes the new harness profile doc.
- `docs/sidebars.js` published governance section includes GOV-10, GOV-11, GOV-12, and GOV-13.
- `npm run build` passes.

## Tests and Evidence
- inspect `docs/harness-profile-minimal-claude.md`
- inspect `sidebars.js`
- run `npm run build`

## Documentation Impact
- add `docs/harness-profile-minimal-claude.md`
- update `sidebars.js`

## Verification
Verification is documentation/build driven. Success requires the profile docs and navigation updates to be present and consistent, plus a successful Docusaurus build.

## Change Notes
- This integration is profile-first: merge governance ideas into VibeGov core, keep runtime implementation as optional reference.
- Profile docs should prefer portable principles over tool-specific mechanics.
