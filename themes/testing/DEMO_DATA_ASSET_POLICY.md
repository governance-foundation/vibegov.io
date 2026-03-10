# Demo Data & Asset Policy (Cypress UI)

Use this policy for UI-facing Cypress work so screens are realistic, deterministic, and testable.

## 1) Data packs are mandatory
Define and maintain fixture packs for:
- baseline (representative normal data)
- edge/failure (empty, malformed, conflict, permission-denied)
- scale (pagination/volume stress for UX)

## 2) Assets are mandatory for UI realism
Provide synthetic assets for:
- thumbnails/images
- avatars/icons
- cards/charts/list visuals

Do not use real customer or production assets.

## 3) Deterministic generation
- Use fixed seeds where random generation is used.
- Keep stable IDs and predictable timestamps when needed for assertions.
- Same fixture input must produce repeatable UI output.

## 4) Scenario-linked fixtures
Each E2E spec must declare fixture pack(s) used and map them to requirement IDs.

## 5) Visual quality gate
In test/demo mode, avoid accidental "bare" UIs:
- pages should render representative content for primary scenarios
- empty states must be intentional and tested separately

## 6) Traceability linkage
Maintain chain:
`Requirement ID -> Cypress spec -> Fixture pack -> Evidence`

## 7) Completion gate
A UI-facing requirement is not complete unless:
- behavior assertions pass,
- fixture/asset pack is declared,
- traceability references test + fixture evidence.
