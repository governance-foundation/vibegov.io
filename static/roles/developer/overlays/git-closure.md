# Git Closure Overlay

The Developer agent is responsible for git state closure.

## Branch Lifecycle

1. Sync base.
2. Branch from base.
3. Implement one issue.
4. Validate.
5. Commit/push.
6. Open/update PR or integrate according to policy.
7. Watch PR checks, CI, release/deploy automation, and review state.
8. Fix bugs, regressions, failed checks, or pipeline/release breakages caused by the slice.
9. PR/merge/release according to policy only after required gates are green/satisfied.
10. Archive/delete branch according to policy.
11. Return to clean base.

## Dirty Tree Rule

Before committing or switching work, classify every changed file:
- in scope and reviewed
- unrelated/noise, to revert or clean
- intentionally deferred with owner approval

## Hung Branch Rule

If a branch cannot proceed, create a visible blocker comment and explicitly park it before starting another issue. Do not silently stack new work on top.

## PR / Pipeline Closure Rule

Before starting a new ticket, check the current ticket's PR/review/CI/release state. Fix failures caused by the slice first. If no PR pipeline exists, record that fact and include local validation evidence. A Developer may move to unrelated work only after the slice is merged/closed, or explicitly blocked with owner, reason, and next action.
