---
sidebar_position: 10
---

# Release Artifact and Test Prep

When this page pushes you into deeper test-review or completeness-review questions, continue with:
- [Test Execution Expectations](/docs/test-execution-expectations)
- [Quality Scaffolding and Completeness Rubric](/docs/quality-scaffolding-and-completeness-rubric)

VibeGov now separates two concerns clearly:

1. **GitHub Pages deployment** builds the docs site
2. **GitHub release packaging** prepares the main VibeGov files agents actually use

The release bundle is not the built static site.
It is the agent-consumable VibeGov surface.

## Release packaging

### Build release bundle

```bash
npm run release:build
```

This script creates a versioned release package using the canonical format:

```text
yyyy.m.d-<shortsha>
```

Example:

```text
2026.4.19-55b47ec
```

Why this format:
- keeps the label human-readable by date,
- keeps it traceable to an exact commit,
- avoids ambiguous split schemes by default,
- and gives one canonical build/release label shape unless a project explicitly chooses otherwise.

Default rule:
- do **not** invent separate date-only "stable" labels and date+SHA prerelease labels unless the project has explicitly chosen that distinction.
- use the same canonical format for build/release labels by default.

### What the release package contains

The package is intentionally narrow.
It includes the main files agents/runtime actually use:

- `agent.txt`
- `bootstrap.json`
- canonical `.governance/rules/`
- canonical bootstrap/use docs:
  - `docs/bootstrap.md`
  - `docs/quickstart.md`
  - `docs/bootstrap-update.md`
  - `docs/bootstrap-review.md`
  - `docs/bootstrap-feedback-prompt.md`
  - `docs/github-project-bootstrap.md`
  - `docs/init-todo.md`
- `VERSION.txt`

### Release output

```text
artifacts/
  release/
    <version>/
      vibegov-<version>/
        agent.txt
        bootstrap.json
        .governance/
          rules/
        docs/
          bootstrap.md
          quickstart.md
          bootstrap-update.md
          bootstrap-review.md
          bootstrap-feedback-prompt.md
          github-project-bootstrap.md
          init-todo.md
        VERSION.txt
      flat/
        agent.txt
        bootstrap.json
        gov-01-instructions.mdc
        ...
        gov-13-review-loops-completion-discipline.mdc
        bootstrap.md
        quickstart.md
        bootstrap-update.md
        bootstrap-review.md
        bootstrap-feedback-prompt.md
        github-project-bootstrap.md
        init-todo.md
        VERSION.txt
      vibegov-<version>.zip
      release-info.json
```

Notes:
- `vibegov-<version>.zip` remains available as a convenience bundle.
- `flat/` contains the upload-ready individual GitHub release assets.
- `release-info.json` is local build metadata used by automation.
- the Docusaurus `build/` output is for Pages deployment, not the GitHub release assets.

## GitHub release behavior

The GitHub release workflow should run on **every `main` push** and may also be run manually when needed.

The release workflow uploads **both**:
- the zip bundle
- the flat individual files as separate release assets

That means agents can either:
- fetch the exact files directly from the release, or
- download the zip bundle if that is easier for transport.

## Test prep

For an example of a release-readiness checkpoint that names the candidate, covered scope, checks, decision, and known risk, see [Evidence Examples](/docs/evidence-examples).

### Prepare a release test run

```bash
npm run test:prepare
```

This script:
- locates the latest packaged release bundle
- creates a timestamp + SHA folder under `artifacts/test-runs/`
- copies the release folder and zip asset into the test run
- creates execution/evidence scaffolding for validating the release contents

### Test-run output

```text
artifacts/
  test-runs/
    <timestamp>_<short-sha>/
      release/
        vibegov-<version>/
        vibegov-<version>.zip
        release-info.json
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

## CI alignment

- **Pages deploy** should run `npm run build` and publish the built docs site.
- **GitHub release** should run `npm run release:build` and upload both the versioned zip and flat VibeGov files.

Do not treat those as the same artifact boundary.

## Related docs

- [Bootstrap](/docs/bootstrap)
- [GitHub Project Bootstrap](/docs/github-project-bootstrap)
- [INIT-TODO.md](/docs/init-todo)
- [Workflow Quality Rubric](/docs/workflow-quality-rubric)
- [Test Execution Expectations](/docs/test-execution-expectations)
- [Quality Scaffolding and Completeness Rubric](/docs/quality-scaffolding-and-completeness-rubric)
