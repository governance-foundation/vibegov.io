---
sidebar_position: 14
---

# Bootstrap Feedback Prompt

Use this prompt after an agent has attempted a fresh VibeGov bootstrap or an update/adoption run.

The goal is to get concrete feedback from the agent about what was underspecified, what failed, what was ambiguous, and what VibeGov should tighten for the next repo.

## Copyable prompt

```text
Please review the bootstrap/setup process you just executed for this repo and tell me what VibeGov could do better.

Focus on:
- what was underspecified or ambiguous
- what prerequisites or permissions were missing
- what should have been checked earlier
- what artifacts or files should have been created earlier
- what branch / board / GitHub behavior was unclear
- what assumptions you had to invent
- what should be mandatory next time
- what exact wording or rules would have made bootstrap smoother

If product intent was too vague, say so.
If GitHub auth/scopes were missing, say exactly which scopes or commands were needed.
If patch size, Windows runner behavior, or tool limits caused friction, say how bootstrap should adapt.
If AGENTS.md, INIT-TODO.md, board identity, or commit/PR expectations were missing or unclear, say so explicitly.

Return:
1. a short summary of the biggest problems
2. a bullet list of concrete improvements VibeGov should make
3. any exact prompt/rule wording you recommend
```

## When to use it

Use this after:
- a from-scratch repo bootstrap
- an adoption/update bootstrap in an existing repo
- a bootstrap run that hit tool/runtime limits
- a GitHub project-board setup attempt

## Why this matters

Real bootstrap feedback is one of the fastest ways to harden governance. It turns hidden friction into explicit improvements for:
- prompts
- bootstrap docs
- AGENTS.md guidance
- board setup rules
- prerequisite checks
- branch/PR behavior
- completion contracts

## Related docs

- [Bootstrap](/docs/bootstrap)
- [Bootstrap Prompt Template](/docs/bootstrap-prompt-template)
- [GitHub Project Bootstrap](/docs/github-project-bootstrap)
- [Contributing](/docs/contribute)
