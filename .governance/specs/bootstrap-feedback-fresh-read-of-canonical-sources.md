# Bootstrap Feedback Fresh Read of Canonical Sources

## Intent
Make the bootstrap feedback flow explicitly require a fresh read of the latest live canonical VibeGov bootstrap sources before generating feedback. This matters because feedback against stale cached/copied contract text can create duplicate or already-fixed complaints and weakens the usefulness of adoption feedback.

## Scope
In scope:
- update homepage Bootstrap Feedback prompt wording
- update `docs/bootstrap-feedback-prompt.md`
- make the latest live canonical sources authoritative for the feedback run
- explicitly reject stale cached/copied bootstrap text when it conflicts

Out of scope:
- changing the rest of the bootstrap contract
- adding new bootstrap sources

## Acceptance Criteria
- `BF-FRESH-001` Homepage Bootstrap Feedback prompt explicitly tells the agent to fresh-read the latest canonical bootstrap sources.
- `BF-FRESH-002` `docs/bootstrap-feedback-prompt.md` says the same.
- `BF-FRESH-003` The wording points to `https://vibegov.io/agent.txt`, `https://vibegov.io/bootstrap.json`, and `https://vibegov.io/docs/bootstrap/` as the live authoritative sources for review context.
- `BF-FRESH-004` The wording makes clear that stale cached/bootstrap text is not authoritative if it conflicts.
- `BF-FRESH-005` `npm run build` succeeds after the updates.

## Tests and Evidence
- inspect homepage prompt text in `src/pages/index.tsx`
- inspect `docs/bootstrap-feedback-prompt.md`
- run `npm run build`
