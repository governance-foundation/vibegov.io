# Quick Start Bootstrap Contract Alignment

## Intent
Keep `docs/quickstart.md` as a fast operator entry point without letting it drift into a weaker or older bootstrap contract. This matters because Quick Start is one of the most likely first-read pages, and outdated contract details there can teach obsolete governance expectations before the reader reaches the canonical Bootstrap page.

## Scope
In scope:
- align `docs/quickstart.md` with the current canonical bootstrap contract in `docs/bootstrap.md`
- keep Quick Start compressed and operator-friendly while removing stale contract details
- make Quick Start explicitly describe itself as a fast path into the canonical contract rather than a separate contract variant
- ensure required early artifacts, continuity expectations, GOV range, and reconciliation/reporting expectations are not misstated or omitted

Out of scope:
- rewriting the canonical bootstrap contract itself
- broad bootstrap information-architecture work beyond what Quick Start needs to remain aligned
- changing substantive GOV/bootstrap policy outside this alignment fix

## Acceptance Criteria
- `QS-ALIGN-001` `docs/quickstart.md` does not teach an obsolete GOV range.
- `QS-ALIGN-002` `docs/quickstart.md` no longer omits required early bootstrap artifacts such as `INIT-TODO.md`.
- `QS-ALIGN-003` `docs/quickstart.md` reflects continuity/bootstrap expectations and current reporting/reconciliation expectations at a fast-path level.
- `QS-ALIGN-004` Quick Start is clearly framed as a compressed path into the canonical Bootstrap contract, not a divergent contract.
- `QS-ALIGN-005` `npm run build` succeeds after the update.

## Tests and Evidence
- inspect `docs/quickstart.md`
- inspect `docs/bootstrap.md`
- run `npm run build`

## Documentation Impact
- update `docs/quickstart.md`
