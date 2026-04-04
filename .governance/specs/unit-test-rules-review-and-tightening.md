# Unit-Test Rules Review and Tightening

## Intent
Review and tighten how VibeGov defines unit-test expectations so the guidance is clearer, more actionable, and harder to game.

## Scope
In scope:
- unit-test language in governance rules
- matching published docs/spec guidance where needed
- clarification of where unit tests fit inside the broader VibeGov evidence model

Out of scope:
- prescribing one framework/library
- turning VibeGov into a unit-tests-only model
- broad unrelated testing-doc rewrites

## Acceptance Criteria
- `UT-001` Current unit-test guidance is reviewed across the relevant rules/docs/specs.
- `UT-002` Weak or ambiguous unit-test wording is tightened where needed.
- `UT-003` Guidance remains explicit that unit tests are part of evidence, not a substitute for broader behavioral validation when broader validation is required.
- `UT-004` Published/docs changes still pass `npm run build`.
