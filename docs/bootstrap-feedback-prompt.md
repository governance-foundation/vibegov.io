---
sidebar_position: 5
---

# Bootstrap Feedback Prompt

Use this after a fresh bootstrap or bootstrap-update run when you want an agent to tell you what VibeGov still underspecified.

After you get the result, raise a GitHub issue with the feedback so it becomes durable, reviewable, and actionable.

Before sharing anything publicly, remove or obfuscate:
- PII
- secrets/tokens/keys
- emails, usernames, IDs, chat handles, and personal URLs
- internal hostnames, private repo URLs, tenant IDs, or environment-specific sensitive details
- any customer/user/project data that should not be public

```text
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

Before returning the feedback:
- remove or obfuscate any PII, secrets, tokens, keys, emails, usernames, IDs, URLs, and environment-specific sensitive details
- keep the feedback useful, but make it safe to share in a public GitHub issue

Return:
1. a short summary of the biggest problems
2. a bullet list of concrete improvements VibeGov should make
3. any exact prompt/rule wording you recommend
4. a short suggested GitHub issue title the user can use when filing the feedback
```

## What to do next

1. Run the prompt.
2. Review the result for anything sensitive the agent missed.
3. Open a GitHub issue and paste the scrubbed feedback there.
4. Link the affected page, prompt, or rule if you know it.
