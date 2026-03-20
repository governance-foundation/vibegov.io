---
sidebar_position: 4
---

# The VibeGov SDLC

VibeGov is a governed SDLC for AI-assisted software delivery. It starts by shaping intent before coding, binds work to issues and specs, forces explicit mode selection between Development and Exploration, requires evidence before completion claims, keeps blockers visible, treats delegation as supervised orchestration instead of fire-and-forget, and feeds discoveries back into backlog, specs, traceability, and release decisions so the system keeps getting more reliable instead of more confusing.

## Lifecycle flow

```text
1. Bootstrap governance
   -> install rules
   -> define project intent
   -> create spec / backlog / validation foundations

2. Harden intake into executable work
   -> create or update issue
   -> bind issue to spec requirements
   -> define acceptance criteria and expected evidence

3. Choose execution mode explicitly
   -> Development = change reality and prove it
   -> Exploration = inspect reality and create follow-up work

4. Execute the bounded work unit
   -> implement, review, validate, or delegate clearly
   -> keep scope visible
   -> keep ownership visible

5. Produce mode-appropriate evidence
   -> tests, builds, smoke checks, resulting-state verification
   -> or scenario classifications, issue/spec-gap artifacts, confidence limits

6. Report a real checkpoint
   -> what happened
   -> what passed / failed / remains blocked
   -> what evidence exists
   -> what happens next

7. Feed outcomes back into the system
   -> update issues, specs, traceability, docs, and release status
   -> convert discoveries into tracked backlog work

8. Repeat
   -> next issue
   -> next route
   -> next release gate
```

## The same SDLC as a practical loop

- **Bootstrap** so the repo has governance, intent, and structure.
- **Specify** so the next change has explicit scope and proof expectations.
- **Execute in the right mode** so discovery is not confused with delivery.
- **Validate honestly** so "done" means evidence, not optimism.
- **Communicate clearly** so another human or agent can inspect progress.
- **Hydrate the backlog** so every finding becomes real follow-up work.
- **Ship with visible readiness** so release confidence is earned.
- **Learn and loop** so future work starts from better context instead of lost context.

## VibeGov SDLC vs vague SDLC

### Vague/default SDLC behavior
- request arrives as a one-liner
- implementation starts before intent is hardened
- review and development blur together
- "works on my machine" gets treated like proof
- blockers sit in chat instead of becoming tracked routing events
- exploratory findings remain notes instead of backlog artifacts
- delegated work disappears into silent worker threads
- release confidence is inferred from activity instead of evidence
- the next cycle starts with less context than the previous one

### VibeGov SDLC behavior
- request becomes issue/spec-bound work before implementation
- scope, requirement IDs, and evidence expectations are explicit
- Development and Exploration stay distinct
- completion requires mode-appropriate proof
- blockers become visible artifacts with recovery conditions
- discoveries feed backlog/spec/traceability updates continuously
- delegated work stays under visible parent orchestration
- release readiness is checked as part of Development
- each cycle leaves the repo easier to operate, inspect, and change

## What changes when teams use this model

The main difference is not that VibeGov adds more paperwork. It changes where clarity is forced. Ambiguous requests are hardened before execution. Evidence is demanded before completion claims. Exploration is useful because it creates follow-up artifacts. Delegation stays accountable because parent orchestration remains visible. Over time, the SDLC stops depending on tribal memory and starts leaving durable operational truth in the repo.

## Fast rule of thumb

If you want the shortest possible version:

> Bootstrap governance, turn requests into issue/spec-bound work, choose Development or Exploration explicitly, execute one bounded unit at a time, require evidence, report honestly, feed findings back into backlog/specs/traceability, and repeat.

## Related docs

- [VibeGov](/docs/intro)
- [Bootstrap](/docs/bootstrap)
- [Execution Modes](/docs/execution-modes)
- [Checkpoint Reporting](/docs/checkpoint-reporting)
- [GOV 02 Workflow](/docs/published/gov-02-workflow)
