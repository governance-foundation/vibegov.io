# VibeGov Guide

This guide explains the operating model VibeGov is trying to install into a project.

The short version:

> VibeGov is not mainly about generating code faster.  
> It is about making delivery harder to execute badly.

That means making intent, evidence, reporting, backlog hydration, and blocker handling explicit enough that both humans and AI agents can work quickly **without drifting into fake confidence**.

---

## The two operating modes

### 1. Development
Development changes reality.

Use it when the goal is to:
- build
- fix
- refactor
- close an issue with proof
- validate release readiness
- ship a candidate safely

Development expects:
- issue-to-spec binding
- scoped implementation
- validation evidence
- traceability updates
- commit/release artifacts
- release-readiness evidence when shipping is in scope

Development also includes the machinery that proves a candidate is releasable: build checks, packaging, startup/bootstrap validation, smoke checks, deployment checks, and shipping gates.

### 2. Exploration
Exploration discovers reality.

Use it when the goal is to:
- review live behavior
- audit routes or feature slices
- find drift between product and intent
- hydrate backlog with tracked follow-up work

Exploration expects:
- scenario matrix
- per-scenario classification
- issue/spec/traceability artifacts for every non-validated finding
- honest completeness label

---

## The workflow VibeGov wants

The generic loop is:

`Observe -> Plan -> Execute in the right mode -> Verify -> Document`

The important part is not just the sequence.
It is choosing the **right mode** and using the **right proof model**.

A lot of bad delivery happens because teams blur these together:
- exploratory notes get reported like development proof
- development gets reported like it was automatically shippable without release-readiness evidence
- partial review gets reported like completed review

VibeGov exists to stop that blur.

---

## Intent before action

Everything starts with intent.

Before meaningful implementation begins, the system should know:
- what problem is being solved
- what success looks like
- what is out of scope
- what constraints matter
- what trade-offs are being accepted

If intent is not written down, work should not quietly proceed as if it were clear.

---

## Specification as the center of gravity

Specs are not paperwork around code.
They are the stable reference point that explains why the code should exist and how success should be judged.

A useful spec should make clear:
- purpose
- scope
- inputs and outputs
- constraints
- assumptions and risks
- non-goals
- verification expectations

Code implements the spec.
The spec should not be reverse-engineered from the code after the fact.

---

## Evidence before completion

VibeGov treats "done" as an evidence claim, not a mood.

### Development evidence
- requirement IDs
- changed scope
- commands/checks/tests run
- pass/fail result
- commit/artifact link
- release-readiness or shipping evidence when applicable

### Exploratory evidence
- review unit purpose
- preconditions
- elements and revealed surfaces exercised
- scenario classifications
- expected vs actual notes
- backlog/spec/traceability artifacts created
- completeness label

If the evidence does not match the mode, the work is not done.

---

## Exploration is structured backlog hydration

Exploration is not "poke around and report vibes."

A useful exploratory pass should:
1. define the review unit
2. define the user/operator goal
3. record preconditions and confidence limits
4. inventory elements and revealed surfaces
5. execute a scenario matrix
6. classify scenarios
7. create durable artifacts for every invalidated, blocked, or uncovered item
8. assign an honest completeness label

This is how backlog quality improves instead of decaying.

---

## Persistence matters more than UI confirmation

One of the most common delivery failures is mistaking visible UI reaction for real success.

A toast, redirect, or green state is not proof that a mutation worked.

Whenever work claims to save, mutate, delete, sync, import, connect, or reconfigure something, review should verify the resulting state:
- does it survive refresh?
- is the downstream surface changed?
- is the source-of-truth changed?
- is the deleted thing actually gone?

This rule matters in both Development and Exploration.

---

## Blockers should redirect work, not freeze it

A blocker should not become a black hole.

VibeGov wants blockers to be:
- confirmed with reasonable effort
- recorded with confidence limits
- turned into durable artifacts
- classified by impact
- routed so unaffected work can continue

The system should become more truthful when blocked, not less active.

---

## Reporting is part of governance

Weak updates create false confidence.

Good reporting should make clear:
- what mode the work was in
- what was actually exercised or changed
- what evidence exists
- what remains blocked or uncertain
- what happens next

This is why VibeGov cares about checkpoint shape, cadence, and examples.

---

## What VibeGov is teaching

At the deepest level, VibeGov teaches this:

- AI increases the need for governance
- speed without intent is liability
- output without traceability is risk
- exploration without artifacts is theater
- completion without evidence is fiction

The goal is not bureaucracy.
The goal is professional delivery behavior that survives speed.

---

## Recommended next reads

- `README.md`
- `INDEX.md`
- `.governance/rules/gov-01-instructions.mdc`
- `.governance/rules/gov-02-workflow.mdc`
- `.governance/rules/gov-08-exploratory-review.mdc`
- `.governance/rules/gov-09-agent-continuity-bootstrap.mdc`
- `docs/execution-modes.md`
- `docs/checkpoint-reporting.md`
- `docs/workflow-quality-rubric.md`
