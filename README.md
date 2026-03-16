# VibeGov

Governed delivery bootstrap for AI-assisted teams.

VibeGov helps teams move fast **without faking done**.

It gives humans and agents a shared delivery model built around two operating modes:
- **Development** — build, validate, and ship reality
- **Exploration** — discover reality

Release verification is part of Development's delivery path, not a third peer mode.

The core idea is simple:
- bind work to intent before implementation
- require mode-appropriate evidence before completion claims
- keep backlog hydration inside the delivery system
- make blockers visible without freezing everything

> **Put some governance into your vibing.**

> **Software fails more often from forgotten intent than from bad code.**

---

## Start here

If you are new to VibeGov, use this order:

1. `QUICKSTART.md`
2. `INDEX.md`
3. `.governance/rules/gov-01-instructions.mdc`
4. `.governance/rules/gov-02-workflow.mdc`
5. `.governance/rules/gov-08-exploratory-review.mdc`

Then review the operational docs on the site:
- `docs/execution-modes.md`
- `docs/exploratory-review-mode.md`
- `docs/checkpoint-reporting.md`
- `docs/blocker-escalation.md`
- `docs/workflow-quality-rubric.md`

---

## What VibeGov is for

VibeGov is for teams using AI agents for real software delivery who want:
- faster execution without losing traceability
- better issue/spec/test discipline
- clearer completion standards
- less shallow review and less fake confidence
- a portable governance layer that works across tools and providers

## What it is not for

VibeGov is probably overkill for:
- throwaway one-off scripts with no maintenance horizon
- teams unwilling to require evidence for completion claims
- projects that do not care about traceability, backlog quality, or long-term change safety

---

## Why VibeGov exists

AI-assisted development makes code generation cheap.

What stays expensive is delivery judgement:
- knowing when intent is still unclear
- knowing when a page was merely rendered instead of validated
- knowing when a success toast is not proof that persistence worked
- knowing when a blocker should redirect work instead of stalling the whole system
- knowing when a review is partial instead of complete

VibeGov exists to make that judgement more explicit, reusable, and portable.

Not to remove human judgement.
To support it.

---

## The VibeGov operating model

### 1. Development
Use Development when the goal is to change behavior and carry that change through release readiness and shipping.

Typical outputs:
- issue-to-spec binding
- scoped implementation
- validation evidence
- release-readiness and shipping evidence where applicable
- traceability updates
- commits or release artifacts

Development also owns the machinery that proves a candidate artifact is safe to release: build checks, startup/bootstrap validation, smoke coverage, deployment checks, and release gating.

### 2. Exploration
Use Exploration when the goal is discovery, review, audit, or backlog hydration.

Typical outputs:
- scenario classifications
- focused issues for failures or uncovered contracts
- spec links or `SPEC_GAP`
- planned traceability/test follow-up
- honest completeness label

The delivery loop does not disappear.
The proof model changes with the mode.

---

## What changes when VibeGov is present

- intent is shaped before coding
- completion depends on evidence, not confidence
- exploratory review becomes structured backlog hydration
- blockers become routed work, not hidden stalls
- issues, specs, tests, and delivery updates stay connected
- future changes become safer because context survives

---

## How VibeGov is used

Recommended target layout inside a project:

```text
.governance/
  rules/gov-*.mdc
  project/PROJECT_TEMPLATE.md
  specs/SPEC_TEMPLATE.md
```

Canonical-source model:
- `.governance/` is the single source of truth for governance.
- Different agents/providers can share the same rules and link them through their native mechanism.
- If a provider-native rules directory already exists, mirror active rules into it.
- If none exists, do not invent one; keep `.governance/rules/` canonical and declare active governance through `AGENTS.md` or equivalent.

---

## Why this is different from skills or frameworks

- **Skills** tell an agent how to perform a task.
- **Frameworks** often help structure feature construction.
- **VibeGov** governs how delivery behaves over time.

It is about:
- issue quality
- spec quality
- evidence quality
- checkpoint quality
- blocker handling
- exploratory rigor
- release confidence

In short:

> **Frameworks help build features.**  
> **VibeGov helps the whole delivery behave professionally.**

---

## Direction, not enforcement

VibeGov is intentionally directional, not authoritarian.

It does not replace engineering judgement.
It does not require a specific toolchain.
It does not assume every repo should behave identically.

It provides strong defaults so humans and agents are less likely to drift into:
- shallow fixes
- weak issue quality
- fake completion claims
- undocumented decisions
- review theater

---

## Evolution

VibeGov is expected to evolve.

As new failure modes appear, the guidance should become clearer, sharper, and harder to game.

The anchor principle stays the same:

> **Intent should outlive implementation.**
