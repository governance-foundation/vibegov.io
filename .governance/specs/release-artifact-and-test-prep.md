# Release Artifact and Test Prep

## Intent
Provide a canonical release-artifact build path and a reusable test-prep path so VibeGov can build the same release candidate locally and in CI, then package that candidate into a timestamped/SHA-stamped test-run folder with artifact identity, governance context, and result placeholders.

## Scope
In scope:
- define a canonical release-artifact build script aligned to CI
- define a test-prep script that consumes the release artifact
- define the minimum files copied into the test-run folder
- document how the scripts should be used

Out of scope:
- full deployment orchestration beyond current Pages build/upload behavior
- framework-specific runtime test automation beyond packaging the candidate for execution

## Acceptance Criteria
- `REL-ART-001` A release-artifact script builds the release candidate and packages it under `artifacts/release/<sha>/`.
- `REL-ART-002` The release artifact includes the built artifact, artifact manifest, and checksums.
- `REL-ART-003` A test-prep script creates a timestamp+SHA test-run folder under `artifacts/test-runs/`.
- `REL-ART-004` The test-run folder includes the release artifact plus governance references and execution/result placeholders.
- `REL-ART-005` CI uses the same release-artifact build script instead of duplicating build logic.
- `REL-ART-006` `npm run build` succeeds after the changes.

## Minimum Test Prep Contents
A prepared test-run folder should contain:
- copied release artifact
- `artifact-manifest.json`
- `checksums.txt`
- copied `.governance/specs/`
- copied testing/completeness rubric references
- test execution checklist template
- prior-validation summary placeholder
- result/log/screenshot folders
