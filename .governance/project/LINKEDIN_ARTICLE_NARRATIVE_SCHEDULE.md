# VibeGov LinkedIn Article Narrative Schedule

Issue: #136
Status: draft canonical planning artifact
Purpose: define a coherent article sequence that starts with the original VibeGov foundations and builds forward into the current continuity, harness, exploratory, and execution-sharpness work.

## Working assumptions

- This is an internal editorial plan, not a public page.
- The narrative should explain **why VibeGov exists**, then **what rules it introduced**, then **how those rules matured under real agent work**.
- Prefer adapting already-published VibeGov blog posts first, then fill obvious bridge gaps with a small number of net-new articles.
- Default cadence: **1 LinkedIn post per week**. Faster posting is possible, but the sequence is designed to read well even if someone discovers it later as a thread of ideas.

## Narrative phases

1. **Foundation** — why governed AI delivery needs explicit rules at all
2. **Operating model** — the basic execution loop: workflow, communication, quality, testing, issues, tasks
3. **Execution hardening** — what breaks in practice and how governed delivery responds
4. **AI runtime economics and accountability** — budget, throughput, standards of done, completeness
5. **Continuity and settled-state delivery** — continuity, bootstrap, and resumability
6. **Harness and oversight maturity** — harness engineering, evaluation, human feedback, blocking, closure
7. **Current edge** — execution sharpness, operational resumability, and canonical-truth-vs-handover thinking

## Ordered article schedule

| Order | Theme | Source status | Canonical source | LinkedIn angle |
|---|---|---|---|---|
| 1 | Why VibeGov exists: AI work needs governance, not just prompts | **Proposed new** | New article needed | Start with the core problem: uncontrolled AI work creates invisible state, vague completion, and unowned risk |
| 2 | GOV-01: instructions are part of the product | Existing article | `blog/2026-02-23-launch-gov-01.md` | Explain that execution quality starts with explicit operational rules |
| 3 | GOV-02: workflow must be explicit | Existing article | `blog/2026-02-24-gov-02-workflow.md` | Show that governed work needs a visible sequence, not ad-hoc motion |
| 4 | GOV-03: communication is execution infrastructure | Existing article | `blog/2026-02-25-gov-03-communication.md` | Good communication is not softness; it is traceability and recovery infrastructure |
| 5 | GOV-04 + GOV-05: quality and testing are part of done | Existing article | `blog/2026-02-26-gov-04-quality.md`, `blog/2026-02-27-gov-05-testing.md` | Pair quality and testing into one practical post about evidence-based delivery |
| 6 | GOV-06 + GOV-07: issues and tasks are how work stays legible | Existing article | `blog/2026-02-28-gov-06-issues.md`, `blog/2026-03-01-gov-07-tasks-and-week-1.md` | Show how governed backlog/task structures prevent work from disappearing into chat |
| 7 | Build/validate loops beat vague “agent progress” | Existing article | `blog/2026-03-04-multi-agent-build-validate-loop.md` | Move from rules to practical execution pattern |
| 8 | Exploratory review is for backlog hydration, not passive observation | Existing article | `blog/2026-03-10-exploratory-review-mode.md` | Introduce exploration as a disciplined discovery mode |
| 9 | One-liner issues are not ready work | Existing article | `blog/2026-03-10-handling-one-liner-issues.md` | Clarify issue quality and why vague tickets produce weak execution |
| 10 | Blockers should redirect work, not freeze it | Existing article | `blog/2026-03-11-blockers-should-redirect-work.md` | Show recovery behavior when ideal execution is blocked |
| 11 | Artifact completeness and review completeness | Existing article | `blog/2026-03-12-artifact-completeness.md`, `blog/2026-03-12-review-completeness.md` | Explain that partial evidence is not completion |
| 12 | Explicit orchestration and bounded work units | Existing article | `blog/2026-03-18-explicit-orchestration-bounded-work.md` | Transition into multi-agent/runtime governance |
| 13 | Parent supervision and visible orchestration | Existing article | `blog/2026-03-19-acp-setup-needs-parent-supervision.md` | Make the parent/child oversight model concrete |
| 14 | VibeGov SDLC: the governed delivery spine | Existing article | `blog/2026-03-20-vibegov-sdlc.md` | Consolidate the earlier rules into one operating picture |
| 15 | Strict bootstrap and branch/PR hygiene | Existing article | `blog/2026-03-26-strict-branch-pr-bootstrap.md` | Show how repo state and branching discipline become operational controls |
| 16 | AI runtime economics: budget, capacity, throughput | Existing cluster | `blog/2026-03-28-ai-budget-delivery-infrastructure.md`, `blog/2026-03-28-company-governed-ai-runtime.md`, `blog/2026-03-28-progress-over-perfection-ai-delivery.md`, `blog/2026-03-28-token-burn-governed-throughput.md`, `blog/2026-03-28-unbudgeted-ai-unmanaged-production-capacity.md` | Convert the March 28 cluster into a short series on why AI delivery is an operational budget problem |
| 17 | AI should raise the standard for done | Existing article | `blog/2026-03-29-ai-should-raise-the-standard-for-done.md` | Natural follow-on from runtime economics into delivery expectations |
| 18 | AI should increase completeness, not just speed | Existing article | `blog/2026-04-05-ai-should-increase-completeness-not-just-speed.md` | Reinforce that acceleration without closure is not value |
| 19 | Agent continuity is part of delivery | Existing article | `blog/2026-04-13-agent-continuity-is-part-of-delivery.md` | Start the continuity/resumability arc |
| 20 | Bootstrap should leave a settled state | Existing article | `blog/2026-04-13-bootstrap-should-leave-a-settled-state.md` | Extend continuity into bootstrap/update expectations |
| 21 | Harness engineering: what we take and what we add | Existing article | `blog/2026-04-17-harness-engineering-what-we-do-with-it.md` | Introduce harness thinking without losing governance scope |
| 22 | Governance from harness engineering and beyond | Existing article | `blog/2026-04-17-governance-from-harness-engineering-and-beyond.md` | Show where VibeGov goes past harness patterns |
| 23 | Build, exploratory human feedback, and scoped blocking | Existing article | `blog/2026-04-22-build-exploratory-human-feedback-and-scoped-blocking.md` | Show how real-world feedback enters the governed loop |
| 24 | Execution sharpness and governed closure | Existing article | `blog/2026-04-24-execution-sharpness-and-governed-closure.md` | Current capstone on sharp execution and closure discipline |
| 25 | Canonical truth vs transient handover state | **Proposed new** | New article needed | Capture the latest working insight: repos should be operationally resumable from canonical truth, with issue-scoped transient state and no long-lived shadow handover canon |

## Recommended rollout shape

### Phase A — establish the foundations
Publish items 1-6 first.
Goal: make the audience understand that VibeGov is not a random collection of rules; it starts from a clear diagnosis of why AI delivery goes wrong.

### Phase B — show the practical execution model
Publish items 7-15.
Goal: move from principles into a practical governed delivery loop: issue quality, exploration, blockers, completeness, orchestration, SDLC, and repo hygiene.

### Phase C — connect governance to AI runtime economics
Publish items 16-18.
Goal: explain why this is not only about process taste; it is about cost, capacity, and what “done” means when AI effort is part of production.

### Phase D — bring in continuity and harness maturity
Publish items 19-24.
Goal: show how the framework matured under actual agent work: continuity, settled state, harness thinking, human feedback, and hard closure.

### Phase E — publish the current edge
Publish item 25 after the continuity/harness arc.
Goal: crystallize the strongest current insight emerging from practice: canonical repo truth should carry resumability, while transient operational state should be small, issue-scoped, and disposable.

## Proposed net-new bridge articles

These are the only net-new posts currently recommended as high-value gaps:

1. **Why VibeGov exists: AI work needs governance, not just prompts**
   - Opens the narrative cleanly for LinkedIn readers who were not present for the earliest repo/rule work.
2. **Canonical truth vs transient handover state**
   - Captures the newest insight from continuity, resumability, and issue-scoped execution discipline.

## Editorial notes for adaptation

- Most existing blog posts are longer and more complete than a LinkedIn post needs to be.
- For LinkedIn, each post should usually do three things:
  1. name one delivery failure pattern,
  2. state the governing rule/response,
  3. point to the fuller VibeGov article/site artifact.
- The March 28 runtime-economics cluster may work better as either:
  - a 3-part micro-series, or
  - one larger article plus 2-3 supporting LinkedIn posts.

## Maintenance rule

- When a new major VibeGov article lands, do not just append it blindly.
- Re-check whether it belongs in an existing phase, creates a new phase, or replaces a weaker planned bridge article.
- If LinkedIn publishing begins, add a `Published` column with actual dates and URLs rather than creating a separate shadow schedule.
