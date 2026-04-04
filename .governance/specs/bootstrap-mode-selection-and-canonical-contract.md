# Bootstrap Mode Selection and Canonical Contract

## Intent
Prevent contract drift between bootstrap init, bootstrap update, and bootstrap review by defining one canonical bootstrap contract with explicit mode selection. All bootstrap modes should share the same completion bar, artifact expectations, GitHub preflight behavior, board normalization rules, output artifact rules, and final live-state reconciliation rules. Modes should differ only in how they act on the repo state.

## Scope
In scope:
- define explicit bootstrap modes: `init`, `update`, `review`
- establish one canonical bootstrap contract shared by all modes
- update machine-readable bootstrap sources to expose mode selection
- update public bootstrap docs so `bootstrap.md` becomes the canonical contract surface
- reduce `bootstrap-update.md` to mode-specific guidance pointing back to the canonical contract
- add a review/audit mode doc or equivalent mode guidance without forking the contract
- update FAQs and related adoption docs to reflect mode selection

Out of scope:
- changing non-bootstrap product delivery semantics
- adding a separate alternate review checklist that forks the bootstrap contract
- implementing repo automation beyond documented bootstrap behavior

## Acceptance Criteria
- `BOOT-MODE-001` VibeGov defines explicit bootstrap modes `init`, `update`, and `review`.
- `BOOT-MODE-002` `docs/bootstrap.md` is the canonical bootstrap contract surface for all modes.
- `BOOT-MODE-003` `docs/bootstrap-update.md` refers back to the canonical bootstrap contract instead of defining a divergent completion bar.
- `BOOT-MODE-004` Review/audit guidance uses the same contract and differs only in audit behavior, not in pass gate requirements.
- `BOOT-MODE-005` `static/agent.txt` and `static/bootstrap.json` expose the same mode model.
- `BOOT-MODE-006` Public docs make clear that mode differences are behavioral only:
  - `init` creates missing bootstrap state
  - `update` repairs/normalizes existing bootstrap state
  - `review` audits/reports gaps without claiming missing work was completed
- `BOOT-MODE-007` `npm run build` succeeds after the docs/spec/source updates.

## Tests and Evidence
- inspect `static/agent.txt`
- inspect `static/bootstrap.json`
- inspect `docs/bootstrap.md`
- inspect `docs/bootstrap-update.md`
- inspect the review-mode doc/guidance
- inspect bootstrap-related FAQ pages
- run `npm run build`

## Documentation Impact
- update `static/agent.txt`
- update `static/bootstrap.json`
- update `docs/bootstrap.md`
- update `docs/bootstrap-update.md`
- add or update review-mode bootstrap guidance
- update relevant FAQ pages

## Verification
Verification is documentation-driven. Success requires machine-readable and public docs to describe one canonical bootstrap contract with explicit mode selection and no divergent completion bar between init, update, and review, plus a successful site build.

## Change Notes
- Prefer one contract + mode selection over multiple bootstrap prompts with similar but drifting requirements.
- Do not create a standalone review checklist that becomes a second contract surface.
