# Spec Structure Standard

This standard is mandatory for OpenSpec-first delivery.

## Required sections

1. **Top-Level Use Cases**
- Outcome-oriented, business-readable.
- May span multiple features/modules.

2. **Journeys (Cross-Feature)**
- End-to-end user/system journeys.
- Include happy path + critical failure paths.

3. **Acceptance Criteria**
- Binary pass/fail statements.
- Explicitly tied to requirement IDs.

4. **Test Cases**
- Mapped to acceptance criteria.
- Include E2E as primary proof for user-facing behavior.
- API/unit tests as supporting evidence.

5. **Sample Data / Fixtures**
- Deterministic baseline dataset.
- Edge/failure dataset(s).
- Stable IDs and repeatable seed process.

6. **Traceability Chain**
- `Use Case -> Journey -> Requirement ID -> Test Case -> Evidence`

7. **E2E Hierarchy Alignment**
- E2E folders must mirror spec hierarchy by section/sub-spec.
- Example:
  - `openspec/specs/posts/editor/spec.md`
  - `ui.web/cypress/e2e/posts/editor/*.cy.ts`

## Rules
- No vague placeholders (e.g., "prerequisite context exists").
- Requirement IDs are deterministic and append-only.
- No `implemented` status without executable proof.
- Behavior changes require same-wave spec + traceability updates.

## Validation Gate
Before completion:
- relevant tests pass,
- traceability updated,
- `openspec validate --all` passes.
