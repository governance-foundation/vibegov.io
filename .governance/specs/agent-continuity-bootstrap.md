# Agent Continuity Bootstrap

## Intent
Extend VibeGov bootstrap so new projects install a durable agent continuity model by default. The outcome is a reusable governance rule that treats memory checkpointing, compaction resilience, and session/project continuity as part of normal execution rather than optional aftercare.

## Scope
In scope:
- add a new governance rule for agent continuity bootstrap
- define continuity layers, checkpoint triggers, session diary expectations, and promotion rules
- update bootstrap docs/contracts/templates so continuity scaffolding and continuity instructions are installed early
- add public-facing pages that explain the new rule and how bootstrap should apply it

Out of scope:
- runtime-enforced compaction hooks
- provider-specific transcript-sync implementations
- private/local workspace-only memory preferences

## Acceptance Criteria
- VibeGov includes a canonical governance rule covering continuity layers, checkpoint triggers, session diaries, and bootstrap expectations.
- The bootstrap contract explicitly includes continuity structure and continuity operating guidance as required pre-product-code outputs.
- Public docs explain the rule in generic reusable language and keep local/personal semantics out of the published contract.
- The AGENTS template includes continuity guidance that downstream projects can adopt.
- Site docs build successfully after the new rule/pages are added.

## Tests and Evidence
- inspect `.governance/rules/gov-09-agent-continuity-bootstrap.mdc`
- inspect `.governance/specs/agent-continuity-bootstrap.md`
- inspect `docs/agent-continuity-bootstrap.md`
- inspect `docs/published/gov-09-agent-continuity-bootstrap.md`
- inspect `docs/bootstrap.md`, `docs/quickstart.md`, `docs/agents-template.md`, `static/agent.txt`, and `static/bootstrap.json`
- run `npm run build`

## Documentation Impact
- add `.governance/rules/gov-09-agent-continuity-bootstrap.mdc`
- add `docs/agent-continuity-bootstrap.md`
- add `docs/published/gov-09-agent-continuity-bootstrap.md`
- update bootstrap/quickstart/template/index/readme/sidebar/generator references for GOV-09 and continuity bootstrap requirements

## Verification
Verification is documentation-driven. Success requires the canonical rule, published mirror, bootstrap contract surfaces, and AGENTS template to align on the same continuity model, plus a successful Docusaurus build.

## Change Notes
- Keep the rule generic and reusable for future projects.
- Make continuity part of bootstrap, not a local afterthought.
- Prefer concrete trigger conditions over vague advice to “remember things.”
