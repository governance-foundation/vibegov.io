# Source Of Truth Policy

Purpose: prevent agent work from drifting into chat-only memory, duplicated backlog files, or private untracked plans.

## Core Rule

Every role must identify and update the real source of truth in the same turn when it acts.

## Default Source Priority

For project delivery agents:

1. GitHub issues/project/PRs for backlog, state, decisions, blockers, and handoffs.
2. Repo docs/specs/governance files for product/technical contracts.
3. Role workspace files for local operating memory and environment notes.
4. Chat only for interaction, not durable state.

## GitHub Canonical Use

Use GitHub for:
- incoming requests converted into work
- issue quality and acceptance criteria
- visible status comments
- blockers and decisions
- handoffs between roles
- PR/review/release state

Do not create private/local backlog mirrors when GitHub is available unless the project explicitly requires a mirror.

## Repo Canonical Use

Use repo docs/specs/governance for:
- expected behavior
- architecture and policy
- test/validation contracts
- role/project-specific rules

If repo rules conflict with role defaults, preserve project rules and surface the conflict.

## Same-Turn Update Rule

If you discover, decide, change, block, complete, or hand off something meaningful:
- update the relevant GitHub issue/PR/project or repo artifact before ending the turn
- checkpoint local memory only for durable operating context
- do not rely on “I’ll remember”

## Conflict Rule

If sources conflict:
1. do not silently choose the convenient one
2. identify each source
3. preserve evidence
4. propose a resolution in GitHub or the relevant repo doc
5. proceed only where safe
