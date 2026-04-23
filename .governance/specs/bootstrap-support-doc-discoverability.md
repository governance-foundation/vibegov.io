# Bootstrap Support Document Discoverability

## Intent
Make the bootstrap support documents easy to find from the main bootstrap reader path. This matters because the canonical bootstrap contract now relies on support concepts such as GitHub board preflight/normalization and `INIT-TODO.md`, but readers entering through Bootstrap or Quick Start can miss the deeper support guidance entirely.

## Scope
In scope:
- improve discoverability of `docs/github-project-bootstrap.md` and `docs/init-todo.md`
- strengthen the main bootstrap path with explicit links from Bootstrap, Quick Start, Bootstrap Update, and Bootstrap Review where support concepts first appear
- expose bootstrap support docs clearly in the docs sidebar/navigation
- ensure support docs link back into the main bootstrap path

Out of scope:
- changing the canonical bootstrap contract itself
- rewriting the substantive GitHub bootstrap or INIT-TODO guidance
- broad Quick Start contract repair beyond discoverability/routing

## Acceptance Criteria
- `BOOT-DISC-001` Readers entering through `docs/bootstrap.md` can clearly discover `docs/github-project-bootstrap.md` and `docs/init-todo.md` when those concepts are first mentioned.
- `BOOT-DISC-002` `docs/quickstart.md`, `docs/bootstrap-update.md`, and `docs/bootstrap-review.md` provide discoverable paths into the relevant support docs.
- `BOOT-DISC-003` The sidebar exposes bootstrap support docs as part of the bootstrap path instead of leaving them effectively orphaned.
- `BOOT-DISC-004` `docs/github-project-bootstrap.md` and `docs/init-todo.md` link back to the main bootstrap flow.
- `BOOT-DISC-005` `npm run build` succeeds after the navigation/doc updates.

## Tests and Evidence
- inspect `docs/bootstrap.md`
- inspect `docs/quickstart.md`
- inspect `docs/bootstrap-update.md`
- inspect `docs/bootstrap-review.md`
- inspect `docs/github-project-bootstrap.md`
- inspect `docs/init-todo.md`
- inspect `sidebars.js`
- run `npm run build`

## Documentation Impact
- update `docs/bootstrap.md`
- update `docs/quickstart.md`
- update `docs/bootstrap-update.md`
- update `docs/bootstrap-review.md`
- update `docs/github-project-bootstrap.md`
- update `docs/init-todo.md`
- update `sidebars.js`
