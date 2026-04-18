# Spec: mode selection and evidence closing

## Summary
Add a compact operator-facing guide that helps readers choose the right VibeGov work shape quickly and understand the minimum evidence that honestly closes that shape.

## Intent
Make mode selection and closure criteria fast to scan during real work so teams stop mixing exploration, development, evaluation, and release-verification proof.

## Requirements
- `MODE-EVID-001` add a public doc for quick mode-selection and evidence-closing guidance.
- `MODE-EVID-002` distinguish Exploration from Development clearly.
- `MODE-EVID-003` explain that evaluation is a bounded judgment pattern inside a mode, not a third peer mode.
- `MODE-EVID-004` explain that release verification is a Development-shaped closure activity, not a separate primary mode.
- `MODE-EVID-005` include minimum closing evidence by work shape.
- `MODE-EVID-006` include checkpoint/report shapes and when to use them.
- `MODE-EVID-007` include anti-patterns that prevent silent mode/evidence mixing.
- `MODE-EVID-008` link the new guide from the relevant operator-facing docs.

## Done when
- the guide exists in `docs/`
- it is linked from sidebar and relevant operational docs
- `npm run build` passes
