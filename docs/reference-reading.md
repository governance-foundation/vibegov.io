---
sidebar_position: 1
---

# Reference Reading

This page collects external reading that materially shaped or sharpened VibeGov thinking.

These are **references, not canonical rules**.
The VibeGov canon remains the governance docs and published GOV pages in this repo.

Use this page for three things:
- track important outside ideas worth revisiting,
- record what is genuinely useful,
- make clear what VibeGov should borrow, adapt, or reject.

## How to use this page

Do not treat this page as a second canon.
Use it as a translation layer between influential outside writing and the actual VibeGov rules/docs.

A practical reading order is:
1. read the external source,
2. note the useful idea,
3. map that idea into the VibeGov docs where it actually landed,
4. prefer the VibeGov rule/doc when making decisions.

## Where these ideas landed in VibeGov

| External pressure | Where it shows up in VibeGov |
| --- | --- |
| loop-based operating model | [Build Loop, Exploratory Loop, Human Feedback Loop, and Scoped Blocking](/docs/build-exploratory-human-feedback-loops), [Published GOV 02 Workflow](/docs/published/gov-02-workflow) |
| exploration vs evaluation separation | [Execution Modes](/docs/execution-modes), [Evaluation Pattern](/docs/evaluation-pattern), [Mode Selection and Evidence Closing](/docs/mode-selection-and-evidence-closing) |
| in-repo truth, harness engineering, drift control | [Published GOV 10 Agent State Closure and Git Hygiene](/docs/published/gov-10-agent-state-closure-git-hygiene), [Published GOV 11 Agent Legibility and In-Repo Truth](/docs/published/gov-11-agent-legibility-in-repo-truth), [Published GOV 12 Drift Control and Garbage Collection](/docs/published/gov-12-drift-control-garbage-collection) |
| human feedback as a first-class loop | [Feedback Assimilation Pattern](/docs/feedback-assimilation-pattern), [Build Loop, Exploratory Loop, Human Feedback Loop, and Scoped Blocking](/docs/build-exploratory-human-feedback-loops) |
| bounded skeptical judgment | [Evaluation Pattern](/docs/evaluation-pattern), [Published GOV 13 Review Loops and Completion Discipline](/docs/published/gov-13-review-loops-completion-discipline) |

## Current reading set

| Source | Main contribution | Best VibeGov use |
| --- | --- | --- |
| [Geoffrey Huntley, *Ralph*](https://ghuntley.com/ralph/) | memorable articulation of looped agentic execution and the surrounding discussion that pushed these patterns into wider view | origin point and comparison baseline for loop-centered agent operating models |
| [Mitchell Hashimoto, *My AI Adoption Journey*](https://mitchellh.com/writing/my-ai-adoption-journey#step-6-always-have-an-agent-running) | practical adoption path from chatbot use to harnessed background agents | useful operator framing for continuous delegated work |
| [OpenAI, *Harness engineering: leveraging Codex in an agent-first world*](https://openai.com/index/harness-engineering/) | repo-first, harness-first delivery system for agent software work | strong evidence for in-repo truth, custom tooling, drift control, and agent legibility |
| [Anthropic, *Effective harnesses for long-running agents*](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) | initializer/coding-agent pattern for multi-context-window progress | useful baseline pattern for long-running bounded progress |
| [Anthropic, *Harness design for long-running application development*](https://www.anthropic.com/engineering/harness-design-long-running-apps) | planner/generator/evaluator harness with explicit grading and sprint contracts | strongest external articulation of separate generation and skeptical evaluation |

## Reading notes

## 1) Geoffrey Huntley, *Ralph*

Source:
- <https://ghuntley.com/ralph/>

### Why it should sit at the top

This is the right origin point for the current reading stack.
It is the piece that most directly crystallized the modern loop-heavy framing around long-running coding agents and made it a thing other people started reacting to, adopting, refining, or arguing against.

### What it contributes

- a strong, memorable articulation of continuous agent loops,
- a sharper public reference point for "let the agent keep going",
- a useful forcing function for thinking about autonomy, orchestration, and review pressure,
- and a useful contrast case for what VibeGov wants to keep, tighten, or reject.

### Why it matters to VibeGov

VibeGov should treat *Ralph* as an important catalyst, but not as the finished governance model.

What it gets right:
- looped execution can create real leverage,
- waiting for one-shot perfection is the wrong mental model,
- iteration pressure and repeated review matter,
- long-running work changes the operating model.

What VibeGov should sharpen:
- loops need bounded work units,
- loop outputs need governed sinks,
- skeptical evaluation should be structurally explicit,
- human feedback should be a first-class loop rather than an occasional interruption,
- and build should not recursively self-source new work from its own emissions.

### Best VibeGov use

Use *Ralph* as the origin reference for loop-based agent work, then read the later pieces as increasingly specific attempts to stabilize, instrument, evaluate, and govern that instinct.

## 2) Mitchell Hashimoto, *My AI Adoption Journey*

Source:
- <https://mitchellh.com/writing/my-ai-adoption-journey#step-6-always-have-an-agent-running>

### What it argues

Hashimoto describes a staged shift from weak chatbot usage toward stronger agent usage:
- stop expecting chat UIs to do serious engineering work well,
- use real agents with tools,
- learn by making agents reproduce real work,
- let agents run in background/end-of-day windows,
- invest in harness improvements when they fail,
- aim to keep an agent usefully running as often as possible.

### Strongest ideas

- **Adoption is a journey, not a switch.** The article is good at describing how competence forms through repeated real use rather than hype-driven instant transformation.
- **Reproduce your own work first.** This is a practical way to calibrate where agents are genuinely useful versus merely impressive.
- **Harness engineering emerges from pain.** Bad recurring behaviors should turn into better instructions, better scripts, or better checks.
- **Background work matters.** The "end-of-day agents" pattern is a realistic bridge between occasional prompting and real delegated work.
- **Continuous delegation depends on work quality, not just model quality.** "Always have an agent running" only works if there is a steady stream of bounded tasks worth delegating.

### What VibeGov should borrow

- the practical progression from ad hoc use to governed delegation,
- the idea that repeated agent failure should become harness improvement,
- the emphasis on bounded, verifiable background tasks,
- the insight that human attention is the scarce resource.

### What VibeGov should sharpen or reject

- **"Always have an agent running" is directionally useful, but incomplete.** VibeGov should not treat constant activity as a virtue by itself.
- The article is operator-strong but governance-light. It focuses on usefulness more than on canonical sources, backlog discipline, traceability, or completion semantics.
- VibeGov should sharpen the model into explicit loops:
  - **build loop** consumes repo/issues and writes clear outputs back,
  - **exploratory loop** discovers new governed work,
  - **human feedback loop** injects review, correction, and reprioritisation.
- VibeGov should explicitly separate **work sourcing** from **work execution**. A build loop should not recursively self-expand from its own outputs.

### Best VibeGov takeaway

This article is a strong practical argument for why there should often be delegated work in motion, but VibeGov should govern that with source boundaries, evidence requirements, and loop separation.

## 3) OpenAI, *Harness engineering: leveraging Codex in an agent-first world*

Source:
- <https://openai.com/index/harness-engineering/>

### What it argues

OpenAI describes building a real internal product with humans steering and Codex doing the writing. The central thesis is that once agents become primary executors, engineering effort shifts toward:
- repository structure,
- agent legibility,
- internal tools,
- custom lints and quality gates,
- environment design,
- and continuous cleanup/drift control.

### Strongest ideas

- **Humans steer, agents execute.** This is a strong abstraction shift.
- **The repo becomes the operating environment.** If the agent cannot discover it in-repo, it effectively does not exist.
- **AGENTS.md should be a map, not an encyclopedia.** This aligns strongly with progressive disclosure and discoverable truth.
- **Mechanical enforcement beats advisory preference.** Custom linters, structural checks, and tool-visible boundaries multiply reliability.
- **Agent-first architecture changes what "good engineering" looks like.** Rigid layering and explicit dependency rules become leverage, not bureaucracy.
- **Drift control should be continuous.** Their recurring cleanup/refactoring loop is essentially a form of garbage collection.

### Where it most strongly aligns with VibeGov

This piece strongly reinforces existing VibeGov directions around:
- **in-repo truth**,
- **agent legibility**,
- **drift control and garbage collection**,
- **feedback loops as engineering work**,
- **structured workflow and bounded execution**.

This is probably the clearest external support for GOV-10, GOV-11, GOV-12, and GOV-13 style controls.

### What VibeGov should borrow

- shorter map-style top-level agent instructions with deeper linked sources,
- stronger repo-local knowledge architecture,
- recurring doc-gardening and cleanup loops,
- mechanical boundary enforcement over loose conventions,
- quality/error messages designed to be legible to agents,
- treating observability and UI inspection as first-class agent inputs.

### What VibeGov should challenge

- The article leans very far toward **agent-to-agent review and minimal merge gating**. That can work in a high-investment internal environment, but VibeGov should be careful not to generalize that as universally safe.
- It is very strong on execution scaffolding, but weaker than VibeGov should be on **portable governance**, **human-visible accountability**, and **comparable completion semantics across teams**.
- "Humans steer" is good, but VibeGov should make the **human feedback loop** more explicit rather than leaving it implicit in steering behavior.

### Best VibeGov takeaway

The biggest win here is confirmation that harness engineering is not just prompts. It is repo design, knowledge architecture, boundary enforcement, observability access, and recurring cleanup encoded into the system.

## 4) Anthropic, *Effective harnesses for long-running agents*

Source:
- <https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents>

### What it argues

Anthropic presents a baseline long-running harness pattern for agents that must work across many context windows. The key move is a two-part structure:
- an **initializer agent** that sets up the environment and durable artifacts,
- a **coding agent** that makes bounded incremental progress and leaves clean handoff state.

Key supporting artifacts include:
- a feature list,
- progress notes,
- git commits,
- an init script,
- and explicit instructions to work one feature at a time.

### Strongest ideas

- **Long-running work needs durable session handoff artifacts.** This is the core contribution.
- **Incremental progress beats one-shot ambition.** Asking the agent to do one feature at a time is a direct answer to common failure modes.
- **Clean-state endings matter.** A session should end in a state a new session can resume from without archaeology.
- **Feature status should be structured.** The JSON feature-list idea is a practical anti-drift move.
- **Start each session by regaining bearings and testing the current state.** This is simple, but important.

### Where it aligns with VibeGov

This article aligns with VibeGov on:
- durable state,
- bounded work units,
- handoff artifacts,
- explicit recovery from context loss,
- progress continuity as a design concern, not an afterthought.

### What VibeGov should borrow

- clearer handoff artifacts for long-running work,
- explicit start-of-session reorientation steps,
- stronger clean-state requirements at session boundaries,
- structured feature/backlog state where freeform notes are too lossy,
- the idea that context resets can be a feature, not only a failure.

### What VibeGov should sharpen or reject

- This pattern is excellent for **multi-window continuity**, but it is still mostly a **single production lane** pattern.
- VibeGov should add stronger distinction between:
  - **build execution**,
  - **exploratory backlog hydration**,
  - **human feedback / approval / reprioritisation**.
- The article is lighter on issue visibility, traceability discipline, and broader governance semantics than VibeGov should be.

### Best VibeGov takeaway

This is a strong foundational reference for continuity and incrementalism. VibeGov should treat it as a baseline harness pattern, then add stricter governance and multi-loop separation on top.

## 5) Anthropic, *Harness design for long-running application development*

Source:
- <https://www.anthropic.com/engineering/harness-design-long-running-apps>

### What it argues

This article extends Anthropic's earlier long-running harness into a richer multi-agent system. The main additions are:
- explicit concern about **self-evaluation failure**,
- a **planner / generator / evaluator** structure,
- graded evaluation criteria,
- evaluator skepticism as a tuned role,
- sprint contracts negotiated before implementation,
- and iterative quality improvement over long runs.

The frontend-design section is especially important because it shows how subjective quality can be made more gradable by converting taste into criteria.

### Strongest ideas

- **Separate generation from skeptical evaluation.** This is the single strongest idea in the piece.
- **Self-evaluation is weak by default.** Agents praise their own work too easily, especially on subjective tasks.
- **Criteria make subjective judgment more usable.** Not perfectly objective, but much more gradable.
- **Sprint contracts are a useful bridge between high-level product intent and concrete verification.**
- **Context resets versus compaction is a real design choice.** The article usefully distinguishes fresh-slate resets from summarized continuity.

### Where it aligns with VibeGov

This article strongly supports VibeGov positions on:
- evaluation as a bounded control pattern,
- skeptical review as structurally separate from generation,
- explicit contract-before-build behavior,
- quality criteria as reusable governance artifacts,
- long-running work as orchestrated, not just prompted.

It is probably the clearest external support for VibeGov's distinction between **evaluation** and **exploration**.

### What VibeGov should borrow

- clearer evaluator-role guidance,
- explicit anti-self-grading rules,
- more contract-shaped handoff artifacts between planning, implementation, and review,
- criteria libraries for subjective but important dimensions like product quality, communication quality, and design quality,
- clearer separation between generator output and evaluator verdict.

### What VibeGov should sharpen or reject

- The planner/generator/evaluator pattern is powerful, but VibeGov should not let it collapse all work into one internal harness worldview.
- Exploration should remain broader than bounded evaluator judgment. Exploration discovers across a surface; evaluation judges a bounded unit.
- Human feedback should remain first-class. Even with strong evaluator loops, human taste, approval, and reprioritisation still matter.
- VibeGov should also keep repo/issues as the build-loop source of truth, so internal harness chatter does not become the primary backlog system.

### Best VibeGov takeaway

This article gives the strongest external argument for treating **evaluation as a distinct control pattern** and for separating skeptical review from generation pressure.

## Cross-reading synthesis

Taken together, these five pieces suggest a clearer operating model:

- **Geoffrey Huntley** strengthens the case for loop-based agent execution as a real operating model rather than a one-shot prompting pattern.
- **Mitchell Hashimoto** strengthens the case for continuous useful delegated work.
- **OpenAI** strengthens the case for harness engineering as repo design, tooling, boundaries, and cleanup, not just prompting.
- **Anthropic (effective harnesses)** strengthens the case for durable handoffs, initializer/setup logic, and bounded incremental progress.
- **Anthropic (harness design)** strengthens the case for separate evaluator roles, contract-based sprints, and graded skepticism.

## What VibeGov should do with this reading set

These references support a stronger VibeGov framing built around:

1. **Build loop**
   - source: repo + repo issues/backlog
   - job: consume bounded scoped work and write clear outputs back
   - should not recursively self-expand from its own outputs

2. **Exploratory loop**
   - source: real product/repo behavior under review
   - job: discover gaps, drift, uncovered contracts, and hydrate backlog/spec work

3. **Human feedback loop**
   - source: user, reviewer, stakeholder, operator judgment
   - job: inject approval, correction, taste, reprioritisation, and new scope
   - should be asynchronous and scoped, not a global stop-the-world gate

4. **Evaluation pattern inside loops**
   - bounded skeptical judgment against explicit criteria
   - useful inside build, exploration, or release verification
   - not the same thing as broad exploratory review

## Related VibeGov pages

- [Build Loop, Exploratory Loop, Human Feedback Loop, and Scoped Blocking](/docs/build-exploratory-human-feedback-loops)
- [Execution Modes](/docs/execution-modes)
- [Mode Selection and Evidence Closing](/docs/mode-selection-and-evidence-closing)
- [Harness Engineering and What VibeGov Does With It](/blog/harness-engineering-what-we-do-with-it)
- [Governance from Harness Engineering and Beyond](/blog/governance-from-harness-engineering-and-beyond)
- [Exploratory Review Mode](/docs/exploratory-review-mode)
- [Evaluation Pattern](/docs/evaluation-pattern)
- [Feedback Assimilation Pattern](/docs/feedback-assimilation-pattern)
- [Published GOV 08 Exploratory Review](/docs/published/gov-08-exploratory-review)
- [Published GOV 10 Agent State Closure and Git Hygiene](/docs/published/gov-10-agent-state-closure-git-hygiene)
- [Published GOV 11 Agent Legibility and In-Repo Truth](/docs/published/gov-11-agent-legibility-in-repo-truth)
- [Published GOV 12 Drift Control and Garbage Collection](/docs/published/gov-12-drift-control-garbage-collection)
- [Published GOV 13 Review Loops and Completion Discipline](/docs/published/gov-13-review-loops-completion-discipline)
