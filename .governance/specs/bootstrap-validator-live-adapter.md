# Bootstrap Validator Live Adapter

## Intent
Add the first live-agent adapter to the bootstrap validator so the harness can execute bootstrap scenarios against a real coding agent, not only the deterministic local stub.

## Scope
In scope:
- `BV-LA-001` add a live adapter implementation under `.internal/bootstrap-validator/lib/adapters/`
- `BV-LA-002` support executing at least bootstrap-only scenarios against a real agent runtime available on the host
- `BV-LA-003` capture transcript/stdout/stderr and normalize into validator evidence output
- `BV-LA-004` prepare temporary fixture repos so the chosen live agent can execute safely
- `BV-LA-005` document how to run the validator with the live adapter
- `BV-LA-006` validate at least one real-agent bootstrap scenario and preserve evidence under `.internal/bootstrap-validator/reports/`
- `BV-CS-002` execute a real-agent bootstrap scenario against explicit clean-session conditions using an isolated temporary session home
- `BV-CS-003` document the clean-session validation command and evidence contract truthfully

Out of scope:
- multi-provider orchestration
- broad non-bootstrap scenario support
- retry/fallback routing across providers
- advanced evaluation heuristics beyond current assertion set

## Acceptance Criteria
- `BV-LA-001` a new adapter can be selected via `--adapter <id>`.
- `BV-LA-002` `npm run bootstrap-validator -- --scenario empty-repo-bootstrap --adapter codex-cli` executes against a real agent runtime.
- `BV-LA-003` the evidence bundle contains real transcript output from that agent execution.
- `BV-LA-004` temporary fixture repos are initialized in a way compatible with the chosen agent runtime.
- `BV-LA-005` `.internal/bootstrap-validator/README.md` documents live-adapter execution and limitations.
- `BV-LA-006` a successful real-agent report bundle is generated and referenced in issue evidence.
- `BV-CS-002` the live adapter records the isolated temp repo/session-home boundaries used for a clean-session run.
- `BV-CS-003` README and public validation docs name the clean-session command/path and its `session.json` evidence contract.

## Tests and Evidence
- `npm run bootstrap-validator -- --scenario empty-repo-bootstrap --adapter codex-cli`
- `npm run bootstrap-validator -- --scenario bootstrap-gate --adapter codex-cli`
- `npm run bootstrap-validator -- --scenario empty-repo-bootstrap-clean-session --adapter codex-cli`
- `npm run bootstrap-validator -- --suite phase1 --adapter local-stub`
- `npm run typecheck`
- `npm run build`

## Documentation Impact
- update `.internal/bootstrap-validator/README.md`
- keep public docs unchanged unless a reference needs clarification

## Verification
Verification is command-driven. Success requires at least one real-agent run with a passing result bundle and transcript under `.internal/bootstrap-validator/reports/`.
