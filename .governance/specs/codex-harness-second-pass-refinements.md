# Codex Harness Second-Pass Refinements

## Intent
Capture the worthwhile second-pass follow-through from a full review of OpenAI's Codex Prompting Guide without turning VibeGov into a Codex-specific or benchmark-shaped governance system.

## Scope
In scope:
- tighten the Codex harness profile around tool-surface design, tool-response shaping, commentary/final-answer separation, `AGENTS.md` layering, and governed metaprompting
- clarify in the execution-sharpness doc that these concerns belong primarily to the execution/harness layer rather than the canonical bootstrap contract
- add one small practical public checklist doc for harness builders
- keep runtime-specific guidance runtime-specific while preserving tool-agnostic governance at the core

Out of scope:
- making Codex mandatory for VibeGov
- importing rigid "maximize parallelism" or benchmark-first heuristics as governance rules
- bloating the minimal execution snippet into a full harness manual
- replacing GOV rules with provider-specific prompt cargo cults

## Acceptance Criteria
- `.governance/specs/codex-harness-second-pass-refinements.md` exists with bounded intent and scope.
- `docs/harness-profile-codex.md` explicitly covers tool-surface design, tool-response shaping, commentary/final-answer separation, `AGENTS.md` layering, and governed metaprompting.
- `docs/codex-prompting-through-vibegov.md` explicitly distinguishes bootstrap contract concerns from execution/harness concerns and names the second-pass additions.
- A new small public checklist doc exists for harness builders and is linked in `sidebars.js`.
- `docs/minimal-vibegov-execution-profile-snippet.md` remains aligned with the refined profile framing.
- `npm run build` passes.

## Tests and Evidence
- inspect `.governance/specs/codex-harness-second-pass-refinements.md`
- inspect `docs/harness-profile-codex.md`
- inspect `docs/codex-prompting-through-vibegov.md`
- inspect `docs/harness-builder-checklist.md`
- inspect `docs/minimal-vibegov-execution-profile-snippet.md`
- inspect `sidebars.js`
- run `npm run build`

## Documentation Impact
- update `docs/harness-profile-codex.md`
- update `docs/codex-prompting-through-vibegov.md`
- add `docs/harness-builder-checklist.md`
- update `docs/minimal-vibegov-execution-profile-snippet.md`
- update `sidebars.js`

## Verification
Verification is documentation/build driven. Success requires that the new additions read as concrete harness-design guidance, stay consistent with VibeGov's stronger closure/continuity model, remain discoverable in docs navigation, and build cleanly.

## Change Notes
- This slice should preserve the earlier native-VibeGov translation while adding the harness-level details that were still missing after the first pass.
- The result should make it easier for teams to build good coding-agent harnesses without mistaking runtime-specific mechanics for core governance law.
