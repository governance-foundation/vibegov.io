---
sidebar_position: 4
---

# Release Cadence (One Rule Per Day)

vibegov is intentionally released in small, daily slices so teams can adopt governance without overload.

## Cadence Model

- **Day 1-7:** publish one governance rule per day (`gov-01` to `gov-07`)
- **Weekly recap:** summarize what shipped, adoption feedback, and clarifications
- **Iteration loop:** refine language based on issue feedback before adding new rule sets

## Daily Release Package

Each day should include:

1. **Rule page** (canonical guidance)
2. **Short blog post** (what changed + why it matters)
3. **Practical example** (how to apply the rule this week)
4. **Feedback CTA** (link to issue template)

## Suggested Daily Post Template

- **Title:** `GOV-0X: <Rule Name>`
- **Problem:** what delivery failure this rule prevents
- **Default:** the opinionated behavior vibegov recommends
- **Example:** one concrete before/after scenario
- **Adoption step:** one thing to implement today
- **Feedback:** issue link

## Why this works

- Keeps cognitive load low
- Encourages immediate adoption instead of “read later” backlog
- Produces cleaner feedback per rule
- Makes governance feel practical, not bureaucratic

## 7-Day Sequence

1. **GOV-01 Instructions** — how rules are loaded and resolved
2. **GOV-02 Workflow** — observe → plan → implement → verify → document
3. **GOV-03 Communication** — decision-quality updates and escalation
4. **GOV-04 Quality** — definition-of-done and quality gates
5. **GOV-05 Testing** — tests as proof of claims
6. **GOV-06 Issues** — intent/decision traceability lifecycle
7. **GOV-07 Tasks** — decomposition and backlog hygiene

## After Week 1

Use a stable rhythm:

- **Weekly:** one deep-dive explainer or case study
- **Biweekly:** refinement release for ambiguous rules
- **Monthly:** “adoption patterns” post from user feedback

This keeps vibegov alive as a learning system, not a static policy dump.
