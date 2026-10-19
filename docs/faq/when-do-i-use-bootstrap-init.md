---
sidebar_position: 7
homepage: true
question: When do I use bootstrap init?
homepage_summary: Use bootstrap init for a repo that does not have VibeGov installed yet.
image: /img/heroes/docs/when-do-i-use-bootstrap-init-hero.jpg
---

# When do I use bootstrap init?

<img className="page-hero" src="/img/heroes/docs/when-do-i-use-bootstrap-init-hero.jpg" srcSet="/img/heroes/docs/when-do-i-use-bootstrap-init-hero-640.webp 640w, /img/heroes/docs/when-do-i-use-bootstrap-init-hero-1280.webp 1280w" sizes="(max-width: 640px) 100vw, (max-width: 996px) 90vw, 960px" width="1280" height="720" alt={"an empty shallow metal foundation tray receiving its first precisely fitted cyan glass cornerstone, clean initialization"} decoding="async" />

Use **bootstrap init** when a repo does not have VibeGov installed yet.

This is the canonical bootstrap contract run in **`init` mode**.
It creates missing bootstrap state using the same pass gate used by `update` and `review`.
If the agent is working inside a normal folder where `git` is available but the repo has not been initialized yet, `init` should initialize git early and preserve/report the pre-init local state before broader bootstrap work continues.

Canonical doc:
- [Bootstrap](/docs/bootstrap)
