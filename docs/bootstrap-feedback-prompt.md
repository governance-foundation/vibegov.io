---
sidebar_position: 5
---

# Bootstrap Feedback Prompt

Use this after a fresh bootstrap or bootstrap-update run when you want an agent to tell you what VibeGov still underspecified.

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

Return:
1. a short summary of the biggest problems
2. a bullet list of concrete improvements VibeGov should make
3. any exact prompt/rule wording you recommend
```
