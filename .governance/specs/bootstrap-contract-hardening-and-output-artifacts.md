# Bootstrap Contract Hardening and Output Artifacts

## Intent
Harden the VibeGov bootstrap contract so GitHub-hosted repositories get a consistent, reviewable, stateful bootstrap package instead of a thin file scaffold. The bootstrap flow should use one aligned pass gate across machine-readable and human-readable sources, support empty or underdefined repos without forcing invented product direction, classify pre-existing repo state before changing files, and leave behind durable local output artifacts even when commits are intentionally withheld.

## Scope
In scope:
- align the machine-readable bootstrap sources (`agent.txt`, `bootstrap.json`) with the public bootstrap docs
- define explicit GitHub preflight/capability outcomes before board mutation
- define a stronger expected bootstrap package for GitHub-hosted repos
- define empty-repo fallback behavior that allows a bootstrap-focused first spec instead of forcing a product feature spec
- define bootstrap commit-policy semantics and dirty-tree handling
- require durable bootstrap status/feedback artifacts for reviewable no-commit runs
- update bootstrap, bootstrap-update, feedback, quickstart, GitHub board, and FAQ docs accordingly
- update canonical rules/public rule pages where the bootstrap contract is governed there

Out of scope:
- implementing repository ruleset automation against GitHub itself
- changing non-bootstrap product delivery semantics outside the affected bootstrap contract
- adding automated PII detection beyond documenting the feedback flow

## Acceptance Criteria
- `BOOT-HARDEN-001` `static/agent.txt`, `static/bootstrap.json`, and `docs/bootstrap.md` describe the same bootstrap completion bar.
- `BOOT-HARDEN-002` Canonical machine-readable bootstrap URLs are `https://vibegov.io/agent.txt` and `https://vibegov.io/bootstrap.json`.
- `BOOT-HARDEN-003` Empty or underdefined repos may use a bootstrap/governance setup spec as `SPEC-001` instead of forcing inferred product scope.
- `BOOT-HARDEN-004` Bootstrap defines explicit GitHub capability checks and named outcomes before project-board mutation.
- `BOOT-HARDEN-005` GitHub-hosted bootstrap completion requires the stronger operational package unless explicitly blocked: workflow artifacts, board status/reporting artifacts, documented issue-pickup flow, and final live-state reconciliation.
- `BOOT-HARDEN-006` Bootstrap defines explicit commit-policy modes and required dirty-tree handling.
- `BOOT-HARDEN-007` Bootstrap requires durable local output artifacts such as bootstrap status and feedback files even when commits are forbidden.
- `BOOT-HARDEN-008` Bootstrap feedback guidance tells the agent to write scrubbed feedback to a local file before or alongside public issue filing.
- `BOOT-HARDEN-009` Public bootstrap/update/quickstart/GitHub-project docs and published governance pages reflect the same contract.
- `BOOT-HARDEN-010` `npm run build` succeeds after the documentation/rule/spec updates.

## Tests and Evidence
- inspect `static/agent.txt`
- inspect `static/bootstrap.json`
- inspect `docs/bootstrap.md`
- inspect `docs/bootstrap-update.md`
- inspect `docs/bootstrap-feedback-prompt.md`
- inspect `docs/github-project-bootstrap.md`
- inspect `docs/quickstart.md`
- inspect relevant FAQ pages
- inspect `.governance/rules/gov-01-instructions.mdc`
- inspect `.governance/rules/gov-02-workflow.mdc`
- inspect published docs for GOV-01 and GOV-02
- run `npm run build`

## Documentation Impact
- update `static/agent.txt`
- update `static/bootstrap.json`
- update `docs/bootstrap.md`
- update `docs/bootstrap-update.md`
- update `docs/bootstrap-feedback-prompt.md`
- update `docs/github-project-bootstrap.md`
- update `docs/quickstart.md`
- update `docs/contribute.md` if needed for the new feedback-file flow
- update FAQ pages related to bootstrap init/update/feedback
- update `.governance/rules/gov-01-instructions.mdc`
- update `.governance/rules/gov-02-workflow.mdc`
- update `docs/published/gov-01-instructions.md`
- update `docs/published/gov-02-workflow.md`

## Verification
Verification is documentation-driven. Success requires the machine-readable bootstrap sources, public bootstrap docs, update/remediation docs, GitHub board docs, feedback docs, FAQs, and published governance pages to describe the same stronger bootstrap contract, plus a successful site build.

## Change Notes
- Prefer a bootstrap-spec fallback over inferring product direction from the repository name.
- Treat scaffold-only bootstrap output as incomplete for GitHub-hosted repos unless the missing operational pieces are explicitly blocked and reported.
- Make reviewable local output artifacts part of the bootstrap contract so no-commit runs still leave durable evidence.
