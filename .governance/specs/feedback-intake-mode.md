# Feedback Intake Mode

## Intent
Define **Feedback Intake** as the named VibeGov work shape for converting human feedback into governed ready work without collapsing immediately into implementation.

## Scope
In scope:
- define Feedback Intake as the work shape used when a human gives feature/product/process feedback and the agent should capture, split, deduplicate, bind, and stop before implementation
- explain how Feedback Intake relates to the Human Feedback Loop
- distinguish it from Development, Exploration, Evaluation, and generic planning
- define expected outputs and minimum closure evidence
- update the relevant public docs and navigation

Out of scope:
- forcing Feedback Intake to replace existing Exploration or Development semantics
- adding provider-specific Codex/VS Code prompt recipes in this slice
- turning Feedback Intake into a bloated umbrella for every non-implementation task
- changing core GOV rules unless a clear gap appears

## Acceptance Criteria
- `.governance/specs/feedback-intake-mode.md` exists with bounded intent and scope.
- `docs/feedback-intake.md` exists and clearly defines the work shape.
- `docs/execution-modes.md` explains where Feedback Intake sits relative to the two primary modes.
- `docs/build-exploratory-human-feedback-loops.md` explicitly names Feedback Intake inside the Human Feedback Loop.
- `docs/mode-selection-and-evidence-closing.md` includes Feedback Intake in the work-shape/evidence guidance.
- `sidebars.js` links the new public doc.
- `npm run build` passes.

## Tests and Evidence
- inspect `.governance/specs/feedback-intake-mode.md`
- inspect `docs/feedback-intake.md`
- inspect `docs/execution-modes.md`
- inspect `docs/build-exploratory-human-feedback-loops.md`
- inspect `docs/mode-selection-and-evidence-closing.md`
- inspect `sidebars.js`
- run `npm run build`

## Documentation Impact
- add `docs/feedback-intake.md`
- update `docs/execution-modes.md`
- update `docs/build-exploratory-human-feedback-loops.md`
- update `docs/mode-selection-and-evidence-closing.md`
- update `sidebars.js`

## Verification
Verification is documentation/build driven. Success requires the term to be crisply defined, differentiated from nearby concepts, discoverable in docs, and validated by a passing build.

## Change Notes
- Feedback Intake should preserve the clarity of the current loop/mode model rather than muddy it.
- The goal is to name a real recurring work shape, not to invent ceremony.
