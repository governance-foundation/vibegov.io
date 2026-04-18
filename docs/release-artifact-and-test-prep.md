---
sidebar_position: 10
---

# Release Artifact and Test Prep

VibeGov now separates two concerns clearly:

1. **GitHub Pages deployment** builds the docs site
2. **GitHub release packaging** bundles the main VibeGov files agents actually use

The release bundle is not the built static site.
It is the agent-consumable VibeGov surface.

## Release packaging

### Build release bundle

```bash
npm run release:build
```

This script creates a versioned release bundle using the canonical format:

```text
yyyy.m.d-<shortsha>
```

Example:

```text
2026.4.19-55b47ec
```

### What the release bundle contains

The bundle is intentionally narrow.
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
      vibegov-<version>.zip
      release-info.json
```

Notes:
- `vibegov-<version>.zip` is the GitHub release asset.
- `release-info.json` is local build metadata used by automation.
- the Docusaurus `build/` output is for Pages deployment, not the GitHub release asset.

## Test prep

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
- **GitHub release** should run `npm run release:build` and upload the versioned VibeGov bundle zip.

Do not treat those as the same artifact boundary.

## Related docs

- [Bootstrap](/docs/bootstrap)
- [GitHub Project Bootstrap](/docs/github-project-bootstrap)
- [INIT-TODO.md](/docs/init-todo)
- [Test Execution Expectations](/docs/test-execution-expectations)
- [Quality Scaffolding and Completeness Rubric](/docs/quality-scaffolding-and-completeness-rubric)
