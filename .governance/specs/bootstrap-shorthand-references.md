# Bootstrap Shorthand References

## Intent
Define the shorthand references used in conversation and docs for the three bootstrap entrypoints so they are unambiguous and documented in the canonical VibeGov docs.

## Scope
In scope:
- define `BI` as bootstrap init
- define `BU` as bootstrap update
- define `BF` as bootstrap feedback
- update the relevant docs and homepage quick-path wording
- record the shorthand in daily memory

Out of scope:
- changing bootstrap behavior
- adding new bootstrap modes

## Acceptance Criteria
- `BOOT-REF-001` `docs/bootstrap.md` defines `BI`, `BU`, and `BF`.
- `BOOT-REF-002` `docs/bootstrap-update.md` defines `BU` explicitly.
- `BOOT-REF-003` `docs/bootstrap-feedback-prompt.md` defines `BF` explicitly.
- `BOOT-REF-004` homepage quick-path wording reflects the shorthand where useful.
- `BOOT-REF-005` `npm run build` succeeds.

## Tests and Evidence
- inspect `docs/bootstrap.md`
- inspect `docs/bootstrap-update.md`
- inspect `docs/bootstrap-feedback-prompt.md`
- inspect `src/pages/index.tsx`
- run `npm run build`
