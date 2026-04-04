---
sidebar_position: 10
---

# Release Artifact and Test Prep

VibeGov now uses two linked scripts for release validation:

1. **build the release artifact**
2. **prepare a governed test-run folder from that artifact**

The goal is simple: the candidate you test locally should come from the same build path used by CI, and the test run should start with enough context to be trustworthy and repeatable.

## Scripts

### Build release artifact

```bash
npm run release:build
```

This script:
- runs the site build
- packages the built artifact under `artifacts/release/<short-sha>/artifact/`
- generates `artifact-manifest.json`
- generates `checksums.txt`

### Prepare test run

```bash
npm run test:prepare
```

This script:
- locates the latest release artifact (or accepts an explicit one)
- creates a timestamp + SHA folder under `artifacts/test-runs/`
- copies the release artifact into that folder
- copies governance references and checklists
- creates result/log/screenshot placeholders for the run

## Output structure

### Release artifact output

```text
artifacts/
  release/
    <short-sha>/
      artifact/
      artifact-manifest.json
      checksums.txt
```

### Test run output

```text
artifacts/
  test-runs/
    <timestamp>_<short-sha>/
      artifact/
      governance/
        artifact-manifest.json
        checksums.txt
        specs/
        test-execution-expectations.md
        quality-scaffolding-and-completeness-rubric.md
        change-summary.md
      evidence/
        prior-validation/
          validation-summary.md
      execution/
        test-execution-checklist.md
        results/
        logs/
        screenshots/
      run-manifest.json
```

## What gets copied into the test folder

The prepared folder copies:
- the built release artifact
- artifact identity metadata
- checksums
- `.governance/specs/`
- testing expectations reference
- quality/completeness rubric reference
- a test execution checklist template
- prior validation summary placeholder
- empty result/log/screenshot folders

This gives the test runner four immediate answers:
1. what exact candidate is being tested
2. what it is supposed to do
3. what governance/testing context applies
4. where to record the test run

## CI alignment

The GitHub Pages workflow should call the same release-artifact build script rather than duplicating build logic. That keeps local and CI candidates aligned.

## Related docs

- [Bootstrap](/docs/bootstrap)
- [Test Execution Expectations](/docs/test-execution-expectations)
- [Quality Scaffolding and Completeness Rubric](/docs/quality-scaffolding-and-completeness-rubric)
