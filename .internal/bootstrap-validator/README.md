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
- `bootstrap-gate`
- suite: `phase1`

Scaffolded but not yet implemented as executable flows:
- `under-specified-issue`
- `exploratory-route`
- `persistence-false-green`

## How to run

From repo root:

```bash
npm run bootstrap-validator -- --list
npm run bootstrap-validator -- --scenario empty-repo-bootstrap
npm run bootstrap-validator -- --scenario bootstrap-gate
npm run bootstrap-validator -- --suite phase1
```

## What the MVP does

For each runnable scenario, the harness:
1. copies a fixture into a temporary working repo
2. captures a pre-run manifest
3. runs the `local-stub` adapter
4. captures a post-run manifest and diff
5. executes core assertions
6. writes an evidence bundle under `.internal/bootstrap-validator/reports/`

## Evidence bundle contents

Each run writes a timestamped report directory containing:
- `transcript.md`
- `manifest-before.json`
- `manifest-after.json`
- `diff.json`
- `result.json`

## Assertion coverage in phase 1

Implemented assertions:
- `governanceDirsExist`
- `govRuleSetPresent`
- `projectIntentCreated`
- `firstSpecCreated`
- `noProductCodeChanges`
- `governanceSourcesReported`
- `bootstrapStopDeclared`

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

- only the `local-stub` adapter is implemented
- bootstrap-only scenarios are supported today
- no external provider execution yet
- no advanced schema validation or HTML reporting yet

## Next good steps

1. promote assertions into separate modules
2. add a real agent adapter
3. implement exploratory and vague-issue scenarios end-to-end
4. add suite aggregation/report summarization

See also:
- `docs/bootstrap-validation.md`
- `docs/bootstrap-validator-harness.md`
