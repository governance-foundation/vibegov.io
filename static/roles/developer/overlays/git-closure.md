# Git Closure Overlay

The Developer agent is responsible for git state closure.

## Branch Lifecycle

1. Sync base.
2. Branch from base.
3. Implement one issue.
4. Validate.
5. Commit/push.
6. PR/merge/release according to policy.
7. Archive/delete branch according to policy.
8. Return to clean base.

## Dirty Tree Rule

Before committing or switching work, classify every changed file:
- in scope and reviewed
- unrelated/noise, to revert or clean
- intentionally deferred with owner approval

## Hung Branch Rule

If a branch cannot proceed, create a visible blocker comment and explicitly park it before starting another issue. Do not silently stack new work on top.
