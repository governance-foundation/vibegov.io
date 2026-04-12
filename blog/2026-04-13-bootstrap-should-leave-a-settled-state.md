---
slug: bootstrap-should-leave-a-settled-state
title: "Bootstrap Should Leave a Repo in a Settled State"
authors: [VibeGov_team]
tags: [bootstrap, governance, delivery, operations]
---

Bootstrap is often treated like setup theater.
A repo gets some folders, a few templates, maybe a checklist, and everyone moves on as if the system is now ready.

That is not a strong operating model.

If a bootstrap run leaves the repo in an ambiguous half-configured state, the work did not really finish.
It just moved uncertainty forward.

Recent VibeGov bootstrap updates push against that pattern in a few concrete ways:

- `bootstrap update` is not a weaker mode, it uses the same canonical contract as bootstrap init
- update should repair the repo to **operational completion**, not stop at superficial normalization
- runs should emit explicit **status**, **analysis**, and **feedback** artifacts instead of relying only on chat output
- the end state should be classified clearly, for example `committed/pushed`, `pending-review`, or `blocked`
- shorthand references like `BI`, `BU`, and `BF` should stay consistent with the canonical bootstrap contract rather than drift into informal aliases

## The real problem is ambiguous completion

A lot of bootstrap and remediation work fails in a very specific way.
The repo looks more organized than before, but nobody can answer the simple operational question:

> is this actually done, reviewable, or still blocked?

That ambiguity is expensive.

It causes teams to:
- assume gaps were fixed when they were only documented
- reopen the same setup questions later
- confuse historical findings with current repo state
- trust chat summaries more than durable artifacts
- carry quiet operational risk into the next implementation phase

A governed bootstrap flow should remove that ambiguity, not normalize it.

## Update mode should repair, not shrug

`bootstrap update` matters because most real repos are not greenfield.
They already contain some mix of:
- valid artifacts
- stale artifacts
- contradictory docs
- missing operational files
- partially adopted governance

That means update mode cannot just say "close enough" after preserving a few files.
It has to preserve what is already valid **and** repair what is weak, stale, or contradictory until the same bootstrap contract is satisfied, or explicitly report why that could not be completed.

That is a much stronger expectation than cosmetic setup maintenance.
It treats bootstrap as operational work.

## Artifact-emitting runs are easier to trust

Another key change is forcing bootstrap runs to leave durable output artifacts.

That matters because bootstrap work often spans:
- local repo inspection
- GitHub capability checks
- board/project normalization
- rule/spec/doc reconciliation
- blockers that may not be solvable in one pass

Without artifacts, the only narrative of the run lives in chat or memory.
That is fragile.

Explicit status, analysis, and feedback artifacts make the run legible afterward:
- **status** says what state the repo ended in
- **analysis** explains what was found and why the result is what it is
- **feedback** captures what the bootstrap system itself should improve next
- **blockers** make remaining gaps explicit when completion was not possible

That is much more useful than a vague "bootstrap update done" claim.

## Bootstrap should classify the end state

One of the most important operating improvements is requiring a settled classification.

A run should end with something like:
- `committed/pushed`
- `pending-review`
- `blocked`

That sounds simple, but it closes a common governance hole.

Too many agent or tooling flows stop with a locally changed repo and a confident summary, while the actual operational state is unresolved.
Maybe changes were not committed.
Maybe GitHub access was missing.
Maybe branch protection could not be verified.
Maybe a key bootstrap artifact is still absent.

Classification forces the system to say what state it actually reached.
That makes handoff, follow-through, and recovery much cleaner.

## Small shorthand should still be governed

The BI / BU / BF shorthand cleanup might look minor compared with the rest.
It is not.

Small naming drift is how operating systems get fuzzy over time.
If teams start using shorthand references that no longer map cleanly back to the canonical bootstrap contract, they slowly create parallel meanings and weaker expectations.

Keeping shorthand aligned is a small control that protects a much bigger thing: a shared operational language.

## The broader point

Bootstrap should not be judged by whether it created files.
It should be judged by whether it left the repo in a governed, legible, operationally honest state.

That means:
- one canonical contract across modes
- repair instead of cosmetic preservation
- explicit artifacts instead of chat-only reporting
- settled end-state classification instead of ambiguous drift

If a repo is still uncertain after bootstrap, then bootstrap is not finished yet.

## Related reading

- [Bootstrap](/docs/bootstrap)
- [Bootstrap Update](/docs/bootstrap-update)
- [Bootstrap Feedback Prompt](/docs/bootstrap-feedback-prompt)
