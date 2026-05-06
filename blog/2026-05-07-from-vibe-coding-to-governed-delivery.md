---
slug: from-vibe-coding-to-governed-delivery
title: From Vibe Coding to Governed Delivery
authors: [VibeGov_team]
tags: [governance, ai-agents, execution, backlog, specs, delivery]
---

AI coding agents are getting good enough that the old question, "Can they write code?", is becoming less interesting.

The harder question is whether they can participate in a real delivery system without turning the repo into a mess.

Once agents can read issues, modify files, run tests, create branches, and merge work, the risk changes. The problem is no longer capability. The problem is control.

More agents do not automatically create more delivery. Without an operating model, they create duplicated work, unclear ownership, long-lived branches, hidden feature flags, broken integration, and a growing gap between what the system appears to be doing and what is actually safe to ship.

That is the problem VibeGov is designed to address.

## The mistake is treating agents like clever freelancers

A repo does not need a crowd of clever freelancers.

It needs a governed delivery system.

In many AI-assisted workflows, each agent is given a task, a prompt, and access to the repo. That can work for a small change. It does not scale into reliable delivery.

The moment multiple agents are involved, the system needs answers to basic governance questions:

- Who decides what the issue means?
- Who decides whether the issue is ready to build?
- Who owns the architecture boundary?
- Who owns delivery into the integration branch?
- Who owns the user experience and design-system contract?
- Who verifies the outcome independently?
- Who watches for stale work, broken state, and follow-through?
- Who is allowed to block unsafe change?

If those answers are not explicit, agents will fill the gaps with assumptions.

And assumptions are where delivery drift begins.

## Prompts are not governance

Agent instructions matter, but prompts alone are not enough.

A prompt can say:

> Do not expand scope.

But the delivery system still needs a place where scope is defined, reviewed, and enforced.

A prompt can say:

> Keep the repo clean.

But the workflow still needs branch rules, validation gates, issue evidence, and a clear definition of done.

A prompt can say:

> Follow the architecture.

But the project still needs someone or something accountable for defining that architecture, maintaining ADRs, and deciding when a change crosses a boundary.

VibeGov starts from a simple assumption:

> Agents should be autonomous inside clear boundaries, not free outside accountability.

## The issue is the work contract

In AI-assisted delivery, the issue becomes more important, not less.

A weak issue gives the agent room to guess. A strong issue gives the agent a contract to execute.

That contract should define:

- the intended outcome
- why it matters
- scope and non-goals
- OpenSpec binding or `SPEC_GAP`
- acceptance criteria
- verification expectations
- risk level
- any required research, exploration, design, security, or architecture input

This is why a one-line issue should not move straight into development.

Fast capture is fine. Fast execution from unclear intent is not.

The work can start as:

> Fix login weirdness.

But it should not reach implementation until the issue explains what is weird, what correct behaviour looks like, how it binds to the spec, and how the result will be verified.

Intake can be loose. Execution should not be.

## The board is the operating system

The project board is not just a reporting tool. It is the operational state machine.

A simple board is enough:

- No status
- Backlog
- Ready
- In Progress - In Dev
- In Review - In Test
- Done
- Blocked
- Parking Lot

The important part is not the labels. It is what they mean.

`Ready` means the issue is buildable and releasable.

`In Progress - In Dev` means the Developer agent is actively delivering it.

`In Review - In Test` means the change is being validated through automation, verifier activity, or release confidence checks.

`Done` means the work has landed cleanly and the integration branch is healthy.

`Blocked` means progress needs an explicit unblocker, not silent waiting.

`Parking Lot` means the idea is acknowledged but intentionally outside the current path.

This gives agents a shared operating surface. They do not need to invent side queues, hidden TODOs, or chat-based promises.

The board is where state lives.

## Ready means releasable

One of the most important rules in an agent delivery system is this:

> Ready means releasable.

An issue should not enter `Ready` unless the work can safely land on the integration branch and move toward release.

That does not mean every issue must deliver a large user-facing feature. It means the increment should be coherent, integrated, and safe.

Bad ready work looks like:

- build half a feature and hide it
- create a parallel implementation path
- start a migration with no cutover plan
- add a feature toggle with no owner or removal condition
- implement speculative code for a future product decision

Good ready work looks like:

- deliver a complete behaviour change
- add a tested internal capability with a clear future use
- implement a paid feature as an explicit entitlement
- add an operational toggle with defined enabled and disabled behaviour
- create a migration step that leaves the system stable

Agents move quickly. That makes issue slicing more important.

If the work is not safe to land, it is not ready for Dev.

## Done means green integration state

Code written is not done.

Tests passing locally is not done.

A branch that looks good is not done.

Done means the work has made it to the integration branch and that integration state is still green.

This matters because agent delivery can create a false sense of progress. The agent can produce code, explain the change, and sound confident. But until the work is integrated, validated, and traceable to the issue, it has not improved the product.

The Developer agent should own the path from ready issue to green integration state:

1. start from a clean integration branch
2. implement the issue
3. update tests, docs, and config where required
4. validate locally
5. refresh from the current integration branch
6. integrate the change according to repo policy
7. watch automation
8. fix immediately if the pipeline fails
9. close the issue only when evidence is complete

This is not bureaucracy. It is delivery closure.

## No wild forks

Branches are useful as temporary implementation workspaces.

They are not product states.

Long-lived branches, hidden futures, and parallel product lines create exactly the kind of ambiguity AI delivery should avoid.

The rule should be blunt:

> All development must converge.

If a feature is worth building, it should be shaped into a releasable increment. If it is not ready to be released, it should remain in Backlog, Parking Lot, research, design, or architecture analysis.

Do not let the repo become a museum of abandoned futures.

## Feature toggles are configuration, not hiding places

Feature toggles are not bad.

Undisciplined toggles are bad.

A feature toggle should be an explicit product, operational, or release control. It should not be a way to merge unfinished code and decide later what it means.

Good toggle use includes:

- paid feature entitlement
- tenant or customer-specific enablement
- environment-specific behaviour
- staged rollout
- operational kill switch
- time-bound experiment

For every toggle, define:

- name
- purpose
- owner
- configuration location
- default state
- enabled behaviour
- disabled behaviour
- tests for both states
- removal condition if temporary

The key rule is simple:

> No feature should require code edits to enable after development.

If a feature is optional, paid, staged, or tenant-specific, build it that way from the start.

Toggles are configuration and product controls, not hiding places for incomplete work.

## Separate roles are useful when they create real control

The goal is not to create an agent circus.

Separate roles are useful when they create clearer accountability.

A practical operating model can include:

- `planner` for intake, prioritisation, backlog hygiene, and developer handoff
- `architect` for system design, ADRs, boundaries, migrations, developer-experience architecture, and technical direction
- `designer` for UI/UX intent, Design Language System stewardship, user flows, component states, and accessibility-by-design
- `developer` for issue execution, coding, testing, git hygiene, and integration
- `researcher` for external evidence gathering, source evaluation, and cited synthesis
- `explorer` for repo, UI, and API exploration, evidence capture, finding triage, and spec gaps
- `verifier` for independent QA, regression checks, acceptance evidence, and release confidence
- `security` for threat modelling, secrets, auth, privacy, dependency, licensing, and exposure review
- `documenter` for READMEs, install guides, changelogs, user docs, and public comms
- `maintainer` for repo hygiene, branch closure, changelogs, versioning, and release readiness
- `operator` for recurring sweeps, task/state orchestration, reminders, and follow-through

Not every issue should pass through every role.

That would kill delivery speed.

Instead, route work by need.

Researcher and Explorer feed evidence. Designer shapes experience intent. Security blocks unsafe change. Architect protects direction. Planner protects readiness. Developer ships. Verifier proves. Documenter keeps the written surface aligned. Maintainer keeps release and repo hygiene clean. Operator keeps the system moving.

The model is not many agents doing whatever they want.

It is governed autonomy.

## Specialists should feed the spec, not bypass it

A clean pattern is:

```text
Raw idea
 ↓
Planner triage
 ↓
Research / exploration / design / security input as needed
 ↓
Architect or Planner creates the build-ready issue
 ↓
Developer delivers
 ↓
Automation and Verifier validate
 ↓
Integration remains green
```

Specialist work is independent of code. A Researcher can answer a question. An Explorer can inspect the repo. A Designer can define the user flow. Security can identify controls.

But those outputs should flow back into the issue or OpenSpec before development starts.

Research and design should not bypass the accountable delivery contract.

## Automation proves mechanics; governance preserves meaning

Automation is essential, but it cannot do the whole job.

Automation can prove:

- tests pass
- build succeeds
- lint and type checks pass
- secrets are not detected
- dependency checks are clean
- pipeline triggered
- artifact was produced

But automation cannot fully decide:

- whether the issue meant the right thing
- whether the architecture direction is sound
- whether the user experience is coherent
- whether the trade-off is acceptable
- whether the feature should exist
- whether scope was silently expanded
- whether the disabled state of a paid feature makes product sense

That is why governance still matters.

Automation is the proof layer. It does not replace accountability.

## The real unlock is governed autonomy

The next phase of AI software delivery will not be won by giving agents unlimited freedom.

It will be won by teams that can give agents enough autonomy to move fast and enough governance to keep the system coherent.

That means:

- issues are treated as execution contracts
- OpenSpec captures requirement truth
- the project board carries operational state
- the integration branch remains the integration truth
- the release branch remains release truth
- agents act within role authority
- automation validates the mechanics
- security and verification provide independent confidence
- operators keep the loop moving

Vibe coding showed how quickly software can be produced when humans and AI work fluidly together.

The next step is making that flow reliable enough for serious delivery.

That is the shift from vibe coding to governed delivery.
