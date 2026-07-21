---
sidebar_position: 2
homepage: true
question: When do I use bootstrap init?
homepage_summary: Use bootstrap init for a repo that does not have VibeGov installed yet.
---

# When do I use bootstrap init?

Use **bootstrap init** when a repo does not have VibeGov installed yet.

This is the canonical bootstrap contract run in **`init` mode**.
It creates missing bootstrap state using the same pass gate used by `update` and `review`.
If the agent is working inside a normal folder where `git` is available but the repo has not been initialized yet, `init` should initialize git early and preserve/report the pre-init local state before broader bootstrap work continues.

Canonical doc:
- [Bootstrap](/docs/bootstrap)
