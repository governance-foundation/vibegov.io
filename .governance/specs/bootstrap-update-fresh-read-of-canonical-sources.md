# Bootstrap Update Fresh Read of Canonical Sources

## Intent
Make `bootstrap update` explicitly require a fresh read of the latest canonical VibeGov bootstrap sources before acting. This matters because agents can otherwise reuse stale prompt text, cached instructions, or earlier chat summaries and end up applying an outdated bootstrap contract.

## Scope
In scope:
- update the homepage Bootstrap Update prompt wording
- update `docs/bootstrap-update.md`
- make clear that the live canonical sources are authoritative for the run
- explicitly reject stale cached/copied bootstrap text when it conflicts

Out of scope:
- changing non-update bootstrap mode semantics
- adding new bootstrap sources

## Acceptance Criteria
- `BU-FRESH-001` Homepage Bootstrap Update prompt explicitly tells the agent to fresh-read the latest canonical bootstrap sources.
- `BU-FRESH-002` `docs/bootstrap-update.md` says the same.
- `BU-FRESH-003` The wording points to `https://vibegov.io/agent.txt`, `https://vibegov.io/bootstrap.json`, and `https://vibegov.io/docs/bootstrap/` as the live authoritative sources.
- `BU-FRESH-004` The wording makes clear that stale cached/bootstrap text is not authoritative if it conflicts.
- `BU-FRESH-005` `npm run build` succeeds after the updates.

## Tests and Evidence
- inspect homepage prompt text in `src/pages/index.tsx`
- inspect `docs/bootstrap-update.md`
- run `npm run build`
