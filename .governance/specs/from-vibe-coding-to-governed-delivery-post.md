# Spec: from vibe coding to governed delivery post

## Summary
Publish a VibeGov blog post explaining why AI coding agents need governed delivery systems rather than freelancer-style prompting.

## Intent
The post should connect the new squad operating model to a public-facing narrative: AI agents are capable enough that control, accountability, integration truth, and evidence become the hard problems.

## Requirements
- `VIBE-POST-001` The post must be added under `blog/` with valid Docusaurus front matter.
- `VIBE-POST-002` The post must explain the shift from capability questions to control/accountability questions.
- `VIBE-POST-003` The post must frame issues as execution contracts and project boards as operational state.
- `VIBE-POST-004` The post must state that Ready means releasable and Done means green integration state.
- `VIBE-POST-005` The post must include no-wild-forks and disciplined feature-toggle guidance.
- `VIBE-POST-006` The post must include the practical role model, including Designer for UI/UX and Design Language System intent.
- `VIBE-POST-007` The post must preserve the distinction that specialists feed specs/readiness rather than bypassing Planner/Architect into Developer work.
- `VIBE-POST-008` The post must distinguish automation proof from governance/accountability.

## Done when
- Blog post exists and builds.
- VibeGov terminology is consistent with the role/squad model.
- `npm run typecheck` passes.
- `npm run build` passes.
- `git diff --check` passes.
