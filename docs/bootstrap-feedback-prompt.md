---
sidebar_position: 5
---

# Bootstrap Feedback Prompt

Use this after a bootstrap or bootstrap-update run when you want deeper, standalone durable feedback.

Shorthand ref:
- `BF` = bootstrap feedback

Note: bootstrap init and bootstrap update should already emit default feedback artifacts as part of their normal run bundle. This prompt is for an extra dedicated feedback pass when you want more reflection or a cleaner issue-ready writeup.

Before public sharing, remove or obfuscate:
- PII
- secrets/tokens/keys
- emails, usernames, IDs, chat handles, personal URLs
- internal hostnames, private repo URLs, tenant IDs, environment-specific sensitive details

```text
Before reviewing bootstrap feedback, fresh-read the latest live canonical bootstrap sources:
- https://vibegov.io/agent.txt
- https://vibegov.io/bootstrap.json
- https://vibegov.io/docs/bootstrap/

Treat those live sources as authoritative for this feedback run.
Do not rely on previously cached bootstrap text, earlier chat summaries, or older copied instructions if they differ.

Please review the bootstrap/setup process you just executed for this repo and tell me what VibeGov could do better.

Focus on:
- what was underspecified or ambiguous
- what prerequisites or permissions were missing
- what should have been checked earlier
- what artifacts or files should have been created earlier
- what branch / board / GitHub behavior was unclear
- what assumptions you had to invent
- what should be mandatory next time
- what exact wording or rules would have made bootstrap smoother

Before finalizing:
- scrub sensitive details (PII/secrets/tokens/IDs/URLs/environment-specific details)
- keep the feedback useful for a public issue

Then produce BOTH:
1) a local feedback artifact at `.governance/project/bootstrap-runs/<timestamp>-feedback.md`
   - optional stable top-level summary/pointer: `.governance/project/BOOTSTRAP_FEEDBACK.md`
2) a companion local analysis artifact at `.governance/project/bootstrap-runs/<timestamp>-analysis.md`
   - optional stable top-level summary/pointer: `.governance/project/BOOTSTRAP_ANALYSIS.md`
3) a GitHub issue-ready payload:
   - title
   - body
   - suggested issue type/labels

If issue filing is explicitly requested:
- file to `governance-foundation/vibegov.io`
- return the created issue URL
```

## What to do next

1. Run the prompt.
2. Review the generated timestamped local feedback artifact.
3. Open/file the GitHub issue using the scrubbed title/body.
4. Link affected page/rule/prompt sections.
