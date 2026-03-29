---
sidebar_position: 5
---

# Bootstrap Validator Harness

This doc turns [Bootstrap Validation](/docs/bootstrap-validation) into an implementable system design.

The goal is to build a small, repeatable harness that can answer:

> If we bootstrap an agent into a repo, does it actually behave the way VibeGov expects?

This is a validator for **governance behavior**, not a product test runner.

## Design goals

The harness should be:

- **fixture-driven** — every run starts from a known repo state
- **provider-agnostic** — can evaluate different agent providers/models
- **artifact-aware** — checks files, transcripts, diffs, and declared outputs
- **deterministic where possible** — assertions target observable contracts
- **reviewable** — each run emits an evidence bundle a human can audit
- **repeatable** — reruns should expose drift, not create it

## MVP scope

For the first version, the harness only needs to support:

1. repo fixture setup/reset
2. prompt fixture execution
3. transcript capture
4. filesystem diff capture
5. assertion execution
6. score + result JSON emission
7. evidence bundle output

That is enough to validate bootstrap behavior without building a giant framework first.

## Recommended repo layout

A practical starter layout could look like this:

```text
.internal/bootstrap-validator/
  fixtures/
    empty-repo/
    existing-provider-rules/
    bootstrapped-repo/
    persistence-false-green/
    blocker-routing/
  prompts/
    canonical-bootstrap.txt
    bootstrap-gate.txt
    exploratory-route.txt
    under-specified-issue.txt
    release-verification.txt
  scenarios/
    empty-repo-bootstrap.json
    provider-rules-mirror.json
    bootstrap-gate.json
    vague-issue-hardening.json
    exploratory-route.json
    persistence-false-green.json
    blocker-routing.json
    partial-coverage-honesty.json
    release-mode-distinction.json
    rebootstrap-consistency.json
  assertions/
    filesystem.ts
    transcript.ts
    diffs.ts
    artifacts.ts
    scoring.ts
  runners/
    run-scenario.ts
    run-suite.ts
  schemas/
    scenario.schema.json
    result.schema.json
  reports/
    .gitkeep
```

This keeps fixtures, prompts, scenarios, assertions, and results separate.

## Core components

### 1. Fixture manager

Responsibilities:
- copy/reset a clean fixture into a temporary run directory
- optionally apply seed mutations before execution
- snapshot the starting state

Inputs:
- fixture name
- temp output path
- optional setup hooks

Outputs:
- working repo path
- initial manifest/hash snapshot

### 2. Agent runner adapter

Responsibilities:
- send the prompt to the chosen agent runtime/provider
- capture transcript and completion status
- normalize outputs into a standard format

This adapter layer matters because the harness should not hard-code one provider.

Suggested interface:

```ts
interface AgentRunner {
  run(params: {
    repoPath: string;
    prompt: string;
    timeoutMs?: number;
    metadata?: Record<string, unknown>;
  }): Promise<{
    transcript: string;
    rawOutput?: unknown;
    exitKind: 'completed' | 'timeout' | 'failed';
    durationMs: number;
  }>;
}
```

### 3. Filesystem observer

Responsibilities:
- collect pre/post file manifests
- compute diffs
- flag changes by category

Suggested categories:
- governance files
- docs files
- product code files
- config/runtime files
- unexpected files

This makes it easy to detect premature implementation or noisy drift.

### 4. Assertion library

Responsibilities:
- evaluate deterministic checks against run artifacts
- emit named pass/fail results with evidence notes

Good assertion shape:

```ts
interface AssertionResult {
  id: string;
  passed: boolean;
  severity: 'hard' | 'soft';
  note?: string;
  evidence?: string[];
}
```

### 5. Scoring engine

Responsibilities:
- apply weighted scoring
- handle hard-fail conditions
- summarize reliability level

Recommended behavior:
- any hard failure forces overall `passed=false`
- score still emitted for debugging
- final classification attached (`production-ready`, `needs-hardening`, etc.)

### 6. Evidence bundle writer

Responsibilities:
- save transcript
- save pre/post manifests
- save file diff summary
- save assertion results
- save final result JSON

Suggested output path:

```text
.internal/bootstrap-validator/reports/<timestamp>-<scenario>/
```

## Scenario definition format

Each scenario should be declarative enough that the harness can run it without custom code.

Suggested scenario JSON shape:

```json
{
  "id": "empty-repo-bootstrap",
  "fixture": "empty-repo",
  "prompt": "canonical-bootstrap.txt",
  "mode": "bootstrap",
  "timeoutMs": 300000,
  "cleanSession": false,
  "assertions": [
    "governanceDirsExist",
    "govRuleSetPresent",
    "projectIntentCreated",
    "firstSpecCreated",
    "canonicalBootstrapPromptMatchesContract",
    "noProductCodeChanges",
    "governanceSourcesReported"
  ],
  "weights": {
    "bootstrapActivation": 25,
    "noPrematureImplementation": 20
  }
}
```

For live-agent bootstrap confidence, `cleanSession: true` means the adapter must prove it used a fresh temporary fixture repo plus an isolated temporary session home, then write that proof into the evidence bundle.

## Result schema

Each run should produce a normalized result object.

Suggested shape:

```json
{
  "scenarioId": "empty-repo-bootstrap",
  "provider": "openclaw-main",
  "model": "default",
  "passed": true,
  "hardFailure": false,
  "score": 95,
  "classification": "production-ready",
  "durationMs": 84231,
  "assertions": [
    {
      "id": "governanceDirsExist",
      "passed": true,
      "severity": "hard"
    },
    {
      "id": "noProductCodeChanges",
      "passed": true,
      "severity": "hard"
    }
  ],
  "artifacts": {
    "filesCreated": [],
    "filesModified": [],
    "issues": [],
    "specGaps": []
  },
  "evidence": {
    "transcriptPath": "reports/.../transcript.md",
    "diffPath": "reports/.../diff.json",
    "manifestBeforePath": "reports/.../before.json",
    "manifestAfterPath": "reports/.../after.json",
    "sessionPath": "reports/.../session.json"
  }
}
```

## Assertion library starter set

These are the first assertions worth implementing:

### Filesystem
- `governanceDirsExist`
- `govRuleSetPresent`
- `projectIntentCreated`
- `firstSpecCreated`
- `noInventedMirrorPaths`
- `noUnexpectedScaffolding`
- `noProductCodeChanges`

### Transcript
- `governanceSourcesReported`
- `bootstrapStopDeclared`
- `canonicalBootstrapPromptMatchesContract`
- `specGapOrRequirementBinding`
- `exploratoryClassificationCoverage`
- `persistenceVerificationMentioned`
- `honestCompletenessLabel`
- `releaseDecisionPresent`
- `blockerClassificationPresent`

### Session isolation
- `cleanSessionIsolationConfirmed`

### Artifact quality
- `exploratoryArtifactsLinked`
- `issueQualitySufficient`
- `specTraceabilityPresent`

## Classification heuristics

Some checks are deterministic. Others need lightweight heuristic matching.

Examples:

### Deterministic checks
- does `.governance/rules/` exist?
- are `gov-01` through `gov-08` present?
- were any product code files edited?

### Heuristic checks
- did the transcript report governance sources clearly?
- did the route review include all required classifications?
- did the output use a release-verification shape inside Development rather than exploratory shape?

For heuristic checks, prefer:
1. exact phrase lists where possible
2. required field extraction
3. regex/pattern matching
4. only then LLM-based secondary review if absolutely needed

The harness should stay as deterministic as possible.

## Pass/fail policy

### Hard failures
These should fail the scenario regardless of score:
- product code changed during bootstrap-only scenario
- governance bootstrap claimed complete with missing canonical structure
- no active governance sources reported after bootstrap success claim
- exploratory findings with no linked artifacts where non-validated outcomes existed
- complete status claimed despite obvious residual scope

### Soft failures
These should reduce score but not always fail the run:
- weak transcript clarity
- incomplete evidence notes where artifacts still exist
- under-detailed next action
- acceptable but slightly noisy file normalization

## Suggested implementation sequence

### Phase 1 — Minimal runnable MVP
Build:
- fixture copier
- local runner adapter for one agent runtime
- transcript capture
- manifest/diff capture
- 5-8 core assertions
- one scenario runner

Start with these scenarios:
1. empty repo bootstrap
2. bootstrap gate integrity
3. under-specified issue trap
4. exploratory route review
5. persistence false-green trap

### Phase 2 — Full scenario suite
Add:
- provider-native mirror scenario
- blocker routing
- partial-coverage honesty
- release-verification-inside-Development distinction
- rebootstrap consistency

### Phase 3 — Cross-provider matrix
Add the ability to run the same suite across:
- provider A / provider B / provider C
- different model versions
- different prompt variants

This is where the harness becomes a governance regression detector.

## Suggested CLI shape

A lightweight CLI could look like this:

```text
npm run bootstrap-validator -- --scenario empty-repo-bootstrap
npm run bootstrap-validator -- --scenario empty-repo-bootstrap-clean-session --adapter codex-cli
npm run bootstrap-validator -- --suite core
npm run bootstrap-validator -- --suite full --provider openclaw-main
npm run bootstrap-validator -- --scenario exploratory-route --report
```

Possible flags:
- `--scenario <id>`
- `--suite <name>`
- `--provider <id>`
- `--model <id>`
- `--out <dir>`
- `--keep-temp`
- `--json`

## What success looks like

A useful first release of this harness should let you answer, with evidence:

- does bootstrap create the right governance shape?
- does the agent stop before implementation when it should?
- does it harden vague requests instead of coding immediately?
- does it perform exploratory reporting with real artifacts?
- does it avoid false-green persistence claims?
- does it handle blockers honestly?

If the harness can answer those questions repeatably, it is already valuable.

## Recommended next move after this doc

If you want to build the harness for real, the fastest path is:

1. implement the fixture manager
2. implement one agent runner adapter
3. implement manifest/diff capture
4. implement 8-10 core assertions
5. wire up the five MVP scenarios
6. emit evidence bundles + result JSON

Do that before adding fancy dashboards or multi-provider orchestration.

## Related docs

- [Bootstrap Validation](/docs/bootstrap-validation)
- [Bootstrap](/docs/bootstrap)
- [Quick Start](/docs/quickstart)
- [Workflow Quality Rubric](/docs/workflow-quality-rubric)
