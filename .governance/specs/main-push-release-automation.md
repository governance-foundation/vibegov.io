# Main-Push Release Automation

## Intent
Make the VibeGov GitHub release workflow run automatically on every `main` push so the live repository behavior matches the intended release model.

## Scope
In scope:
- `REL-AUTO-001` update `.github/workflows/release.yml` so it triggers on `push` to `main`
- `REL-AUTO-002` keep manual dispatch support if it remains useful
- `REL-AUTO-003` update release documentation if it implies or omits the actual trigger behavior
- `REL-AUTO-004` validate the changed workflow shape locally as far as practical

Out of scope:
- changing the release artifact boundary
- changing Pages deployment behavior
- redesigning version format
- adding a separate tag-only release model

## Acceptance Criteria
- `REL-AUTO-001` The release workflow triggers on `push` to `main`.
- `REL-AUTO-002` Manual dispatch support remains coherent if retained.
- `REL-AUTO-003` Documentation reflects that GitHub release automation runs on every `main` push.
- `REL-AUTO-004` The workflow file remains syntactically valid and the repo build/release docs stay consistent.

## Tests and Evidence
- inspect `.github/workflows/release.yml`
- inspect `docs/release-artifact-and-test-prep.md`
- verify workflow visibility with `gh workflow view release.yml --repo governance-foundation/vibegov.io`

## Documentation Impact
- add `.governance/specs/main-push-release-automation.md`
- update `.github/workflows/release.yml`
- update `docs/release-artifact-and-test-prep.md` if needed

## Verification
Verification is workflow-and-doc driven. Success requires the workflow trigger to include `push` to `main`, any retained manual-dispatch path to remain coherent, and the docs to match the live behavior.
