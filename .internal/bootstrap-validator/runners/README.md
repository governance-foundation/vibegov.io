# Runners

This directory is reserved for bootstrap-validator runner code.

Suggested entrypoints:
- `run-scenario.ts` — run one scenario against one fixture
- `run-suite.ts` — run a named set of scenarios and aggregate results

A future runner should:
1. reset a fixture into a temp repo
2. execute a prompt through an agent adapter
3. collect transcript + filesystem diff
4. run assertions
5. emit result JSON + evidence bundle
