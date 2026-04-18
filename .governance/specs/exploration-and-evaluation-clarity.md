# Spec: exploration and evaluation clarity

## Summary
Clarify how VibeGov distinguishes Exploration from Evaluation so teams do not confuse backlog-hydration discovery with bounded skeptical judgment.

## Intent
Keep the operating model coherent: two primary modes, Development and Exploration, with Evaluation used as a bounded control pattern inside a mode rather than as a third peer mode.

## Requirements
- `EXP-EVAL-001` add a dedicated public doc for the evaluation pattern.
- `EXP-EVAL-002` explain that Evaluation is criteria-based bounded judgment, not backlog-hydration discovery.
- `EXP-EVAL-003` explain that Exploration remains a primary operating mode for surface discovery and artifact creation.
- `EXP-EVAL-004` update public operating docs so the relationship between Exploration, Development, Evaluation, and release verification is explicit.
- `EXP-EVAL-005` update harness profile docs so generator/evaluator patterns are clearly framed as controls inside the broader VibeGov operating model.
- `EXP-EVAL-006` preserve the two-primary-mode model rather than introducing Evaluation as a third peer mode.

## Done when
- `docs/evaluation-pattern.md` exists
- related docs link to it and explain the distinction clearly
- `npm run build` passes
