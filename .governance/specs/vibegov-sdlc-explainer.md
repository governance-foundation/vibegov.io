# VibeGov SDLC Explainer

## Intent
Create a public-facing explanation of the VibeGov SDLC that makes the operating model easy to understand quickly. The explainer should give readers a high-level summary, a readable lifecycle flow, and a direct comparison against vague default SDLC behavior.

## Scope
In scope:
- add a public docs page describing the VibeGov SDLC
- include a one-paragraph website summary
- include a clean lifecycle/flow representation
- include a comparison between VibeGov SDLC and vague/default SDLC behavior
- add a blog post that explains the same concept in a more narrative voice
- update navigation and entrypoint docs so the explainer is discoverable

Out of scope:
- changing the core governance rules beyond references or framing
- runtime/tooling implementation changes
- adding new operational requirements not already grounded in existing VibeGov guidance

## Acceptance Criteria
- `VG-SDLC-001` A public doc exists that explains the VibeGov SDLC in a concise website-friendly paragraph.
- `VG-SDLC-002` The same doc includes a clear lifecycle/flow view that shows how work moves from intake to feedback and repetition.
- `VG-SDLC-003` The same doc includes a comparison section that contrasts VibeGov SDLC behavior with a vague/default SDLC pattern.
- `VG-SDLC-004` A public blog post exists that explains why the VibeGov SDLC shape matters without simply duplicating the doc page.
- `VG-SDLC-005` The new explainer is linked from docs navigation and at least one repo/docs entrypoint.
- `VG-SDLC-006` `npm run build` succeeds after the documentation changes.

## Tests and Evidence
- inspect `docs/vibegov-sdlc.md`
- inspect `blog/2026-03-20-vibegov-sdlc.md`
- inspect `sidebars.js`, `docs/intro.md`, `INDEX.md`, and `README.md` for discoverability updates
- run `npm run build`

## Documentation Impact
- add `docs/vibegov-sdlc.md`
- add `blog/2026-03-20-vibegov-sdlc.md`
- update `sidebars.js`
- update `docs/intro.md`
- update `INDEX.md`
- update `README.md`

## Verification
Verification is documentation-driven. Success requires the explainer page, blog post, and discoverability surfaces to align on the same SDLC model and for the site build to complete successfully.

## Change Notes
- Keep the explainer grounded in existing VibeGov concepts: bootstrap, issue/spec binding, explicit mode selection, evidence, backlog hydration, visible blockers, supervised delegation, release readiness, and feedback loops.
- Prefer a readable flow over abstract process jargon.
- The comparison section should make the value obvious to teams evaluating VibeGov for the first time.
