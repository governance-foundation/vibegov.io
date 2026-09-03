---
sidebar_position: 5
title: Governed Delivery Example
description: See how VibeGov turns a vague implementation request into intent, spec, issue, evidence, verification, and traceable delivery state.
---

# Governed Delivery Example

This example shows the practical difference VibeGov is designed to create.

## Before VibeGov

Request:

```text
Add Google login.
```

Without governance, an agent can start implementation too early. The work may
skip or blur:

- why the team wants Google login
- which users and flows are in scope
- security and privacy constraints
- acceptance criteria
- the GitHub issue or spec that owns the change
- the validation evidence required before claiming completion
- traceability updates for future maintainers

That can produce visible code while leaving the delivery state unclear.

## After VibeGov

The same request becomes a governed delivery path:

1. **Capture intent.** Clarify the user, business, and delivery reason for the
   login change before implementation starts.
2. **Create or update a spec.** Bind the change to the relevant requirements,
   constraints, and non-goals under `.governance/specs/`.
3. **Create or update the GitHub issue.** Keep scope, acceptance criteria,
   evidence expectations, and blocker state visible in the backlog.
4. **Choose the execution mode.** Use Development when changing reality, or
   Exploration when the next useful output is discovery and follow-up work.
5. **Implement against the spec.** Keep the work bounded to the issue and the
   agreed acceptance criteria.
6. **Attach evidence.** Run the tests, builds, smoke checks, screenshots, or
   resulting-state verification that directly support the completion claim.
7. **Report a real checkpoint.** State what changed, what passed, what failed,
   what remains blocked, and where the evidence lives.
8. **Update traceability.** Feed outcomes back into issues, specs, docs, release
   state, or follow-up backlog items so the next cycle starts with better
   context.

VibeGov does not promise that every decision is automated. It makes the delivery
judgement explicit before coding, then requires evidence and traceability before
work is treated as complete.

## Related Docs

- [The VibeGov SDLC](/docs/vibegov-sdlc)
- [Bootstrap](/docs/bootstrap)
- [Mode Selection and Evidence Closing](/docs/mode-selection-and-evidence-closing)
- [Checkpoint Reporting](/docs/checkpoint-reporting)
