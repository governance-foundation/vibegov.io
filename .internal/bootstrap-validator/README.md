# Bootstrap Validator

This directory contains the runnable phase-1 VibeGov bootstrap-validator MVP.

It validates bootstrap behavior programmatically using:
- repo fixtures
- prompt fixtures
- declarative scenarios
- deterministic assertions
- evidence bundles
- a local stub adapter for bootstrap-only flows

## Current scope

Runnable now:
- `empty-repo-bootstrap`
- `empty-repo-bootstrap-clean-session`
- `bootstrap-gate`
- suite: `phase1`

Available adapters:
- `local-stub` — deterministic baseline for bootstrap-only validation
- `codex-cli` — live agent adapter using `codex exec --full-auto`, an isolated temp `CODEX_HOME`, and bootstrap-safe shell-plan normalization when a runtime emits command batches instead of applying them directly

Scaffolded but not yet implemented as executable flows:
- `under-specified-issue`
- `exploratory-route`
- `persistence-false-green`

## How to run

From repo root:

```bash
npm run bootstrap-validator -- --list
npm run bootstrap-validator -- --scenario empty-repo-bootstrap
npm run bootstrap-validator -- --scenario empty-repo-bootstrap-clean-session
npm run bootstrap-validator -- --scenario bootstrap-gate
npm run bootstrap-validator -- --suite phase1
npm run bootstrap-validator -- --scenario empty-repo-bootstrap --adapter codex-cli
npm run bootstrap-validator -- --scenario empty-repo-bootstrap-clean-session --adapter codex-cli
npm run bootstrap-validator -- --scenario bootstrap-gate --adapter codex-cli
```

## What the MVP does

For each runnable scenario, the harness:
1. copies a fixture into a temporary working repo
2. captures a pre-run manifest
3. runs the selected adapter (`local-stub` or `codex-cli` today)
4. captures a post-run manifest and diff
5. for `cleanSession: true` scenarios, records explicit session-isolation evidence
6. executes core assertions
7. writes an evidence bundle under `.internal/bootstrap-validator/reports/`

## Evidence bundle contents

Each run writes a timestamped report directory containing:
- `transcript.md`
- `manifest-before.json`
- `manifest-after.json`
- `diff.json`
- `result.json`
- `session.json` for clean-session scenarios

## Assertion coverage in phase 1

Implemented assertions:
- `governanceDirsExist`
- `govRuleSetPresent`
- `projectIntentCreated`
- `firstSpecCreated`
- `canonicalBootstrapPromptMatchesContract`
- `noProductCodeChanges`
- `governanceSourcesReported`
- `bootstrapStopDeclared`
- `cleanSessionIsolationConfirmed`

## Layout

- `fixtures/` — starting repo states used by scenarios
- `prompts/` — stable prompt fixtures sent to agents
- `scenarios/` — declarative scenario definitions and suite manifests
- `schemas/` — JSON schemas for scenario/result files
- `lib/` — runnable validator implementation
- `assertions/` — reserved for future modular assertion expansion
- `runners/` — reserved for future modular runner expansion
- `reports/` — generated run outputs (keep `.gitkeep` only in git)

## Current limitations

- `codex-cli` is the first live adapter, but scope is still bootstrap-only
- bootstrap-only scenarios are the only supported live flows today
- live-agent behavior can vary by model/runtime availability and prompt fidelity
- clean-session validation proves only fresh-session bootstrap conditions encoded by the harness today: temp fixture repo plus isolated temp `CODEX_HOME`/`HOME`/`USERPROFILE`, with `session.json` written as evidence
- `codex-cli` may retry against a local Ollama runtime when the default provider cannot complete the bootstrap run
- no advanced schema validation or HTML reporting yet

## Next good steps

1. promote assertions into separate modules
2. add a real agent adapter
3. implement exploratory and vague-issue scenarios end-to-end
4. add suite aggregation/report summarization

See also:
- `docs/bootstrap-validation.md`
- `docs/bootstrap-validator-harness.md`
