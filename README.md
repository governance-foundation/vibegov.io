# vibegov

Governed delivery bootstrap for AI-assisted teams.

VibeGov uses a typical stage-based delivery flow.
We also recommend running an **Exploratory Review** flow in parallel to audit outputs for gaps, create backlog items, and reduce tech debt before release.

## Start in 10 minutes
1. Read `QUICKSTART.md`
2. Create/normalize GitHub issue backlog from planned/partial requirements
3. Choose **OpenSpec-first** mode
4. Apply `OPENSPEC_RULES.md`
5. Run your first governed task with traceable evidence

## Who this is for
- Teams using AI agents for real software delivery
- Projects needing faster output without losing quality controls

## Who this is not for
- One-off throwaway scripts with no need for traceability
- Teams unwilling to enforce testing/evidence gates


> **Put some governance into your vibing.**

> **Software fails more often from forgotten intent than from bad code.**

**vibegov** describes an opinionated approach to AI-assisted software delivery that helps people and AI agents work with professional judgement — even when working informally, iteratively, or without deep technical or process knowledge.

You can vibe.  
The delivery still behaves like a pro.

---

## New Here? Start Here.

You don’t need to know how to code to build software anymore.

Expected onboarding path:
- **Start here**: `README.md`
- **Governance**: `.governance/rules/gov-01-instructions.mdc` and the other `.governance/rules/gov-*.mdc` files
- **Project**: `.governance/project/PROJECT_TEMPLATE.md`
- **Specs**: `.governance/specs/SPEC_TEMPLATE.md`
- **Index**: `INDEX.md` for when to use each file

What you *do* need is a way to make sure what gets built:
- actually works
- can be changed later
- doesn’t quietly fall apart as things move fast

When working with AI, it’s easy to get something that *looks* finished:
- code exists
- features appear
- progress feels fast

But without guidance, important things are often skipped:
- problems aren’t fully understood before being “fixed”
- changes aren’t checked properly
- nothing explains *why* decisions were made
- future updates become harder than they should be

**vibegov** helps by giving your AI the kind of **delivery instinct** experienced developers build over years — so you don’t need to know the process to get the benefit of it.

You focus on *what you want*.  
vibegov helps the work happen in a way that’s more reliable, explainable, and easier to evolve.

---

## Why vibegov Exists

Modern AI-assisted development makes it easy to produce code quickly.

What’s harder — for both people and agents — is preserving *why* software is built, not just *what* is built, across design, delivery, change, and maintenance.

Much of what makes software sustainable lives as tacit knowledge:
- when to stop and clarify
- what “done” usually includes
- how to avoid shallow fixes
- how to support change over time

Experienced developers apply this instinctively.  
Less experienced developers — and AI agents — often don’t.

vibegov exists to make that accumulated understanding **explicit, reusable, and discussable**, so intent is less likely to be lost as work moves fast.

Not to remove judgement —  
but to support it.

---

## Direction, Not Enforcement

vibegov is intentionally **directional**, not prescriptive.

It does not:
- enforce compliance
- lock you into workflows
- assume every project is the same

Instead, it offers **professional defaults** — guidance shaped by decades of software delivery experience — that people and agents can choose to follow, adapt, or deliberately diverge from.

Humans remain in the loop.  
Deviation is expected.  
Repetition is a signal to evolve the guidance.

The boring parts of software delivery don’t disappear —  
they move into the system, where they support creative work instead of competing with it.

---

## VibeGov vs Skills

A common question is: "Why not just create skills?"

Skills and vibegov solve different problems:

- **Skills** are task capabilities (how to do a specific action).
- **vibegov** is delivery governance (how the whole system should behave over time).

Skills help execute tasks faster.
vibegov ensures those tasks stay aligned with intent, quality, traceability, and long-term maintainability.

In practice:
- skills = tactical execution units
- vibegov = operating model for end-to-end delivery

You can run many skills inside a vibegov-governed project.
But skills alone do not provide full delivery governance.

## Why Not Just Use a Framework?

You might ask:

> “Why not use an existing framework or tool?  
> They already do specs, planning, and tasks.”

That’s a fair question.

There are excellent frameworks and tools that focus on:
- writing better specifications
- structuring agent workflows
- generating plans, tasks, and artefacts
- improving prompting and consistency

These approaches are valuable, and vibegov assumes you may use them.

However, most frameworks focus on **how to build features**, not on **how software delivery behaves over time**.

They typically:
- optimise for feature construction
- operate inside a single project
- rely on tooling, commands, or workflow engines
- stop once code is produced

vibegov operates at a different level.

It focuses on **end-to-end delivery**, including:
- issue validation and triage
- capturing intent before implementation
- planning with awareness of trade-offs
- implementation with proof, not just output
- tests, documentation, and showcases as part of “done”
- deployment, verification, and release
- change, maintenance, and long-term evolution

In short:

> **Frameworks help you build features.  
> vibegov helps the whole delivery behave professionally.**

vibegov is intentionally **tool-free** so it can:
- outlive specific technologies
- be shared across projects
- evolve as lessons are learned
- guide both humans and AI without locking either in

---

## What vibegov Is

vibegov is:

- A **normative guide** for AI-assisted software delivery
- A **codification of SDLC knowledge** accumulated through decades of practice
- A **living body of delivery guidance** that evolves as new lessons are learned
- A **reference implementation of how to think**, not what to run

The guidance here is opinionated by design.  
It encodes what software delivery has already learned so that it does not need to be rediscovered through failure.

---

## What vibegov Is Not

vibegov is not:
- a tool
- a framework
- a CLI
- a workflow engine
- a replacement for engineering judgement

It does not run code.  
It does not generate artefacts on its own.

It provides **shared understanding**, not automation.

---

## How vibegov Is Used

vibegov can be:
- cloned into a project to stay up to date, or
- downloaded as a release and used as a stable snapshot

Recommended target layout inside a project:

```
.governance/
  rules/gov-*.mdc
  project/PROJECT_TEMPLATE.md
  specs/SPEC_TEMPLATE.md
```

Why this layout:
- `.governance/` keeps governance assets separated from product code.
- `rules/` holds cross-project delivery rules.
- `project/` holds system-level intent for this specific project.
- `specs/` holds application feature/change specs.

Canonical-source model:
- `.governance/` is the single source of truth for governance.
- Different agents/providers can share the same rules and link them through their native mechanism (for example `AGENTS.md` or a provider-native rules directory).

For any agent/IDE with its own rules location, sync active governance rules into that provider-native rules path.

It becomes a **default reference** for both humans and AI agents — without special prompts or tooling.

For agents that prioritize `AGENTS.md` (for example Codex-style agents), add a root `AGENTS.md` that declares `<provider-rules-path>/*.mdc` as active instructions and defines precedence.

---

## Evolution

vibegov is expected to evolve.

New guidance may emerge as new failure modes appear.  
Existing guidance may be refined as understanding deepens.  
Guidance may be retired when its intent is preserved elsewhere.

All evolution remains anchored to a single principle:

> **Intent should outlive implementation.**

---

## Authority

vibegov is intended to be **informative and directional**, not absolute.

In cases of ambiguity, it offers a considered point of reference — one that teams and agents can choose to follow, adapt, or consciously diverge from, with awareness of the trade-offs involved.

