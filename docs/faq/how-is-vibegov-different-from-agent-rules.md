---
sidebar_position: 3
homepage: true
question: "How is VibeGov different from AGENTS.md, Cursor rules, Claude skills, or a prompt library?"
homepage_summary: "Agent rules tell a tool how to behave; VibeGov gives the repo a fuller delivery contract with issues, specs, evidence, and review loops."
---

# How is VibeGov different from AGENTS.md, Cursor rules, Claude skills, or a prompt library?

Agent rules and prompt libraries usually shape one assistant's behavior.

VibeGov gives the repo a broader operating model:
- what work mode the agent is in
- where intent and specs live
- what counts as evidence
- how blockers are reported
- how review and completion claims stay honest

VibeGov can still publish into provider-native files like `AGENTS.md` or rules directories. The difference is that those files are projections of a shared governance source, not the whole system.

Deeper docs:
- [Execution Modes](/docs/execution-modes)
- [Mode Selection and Evidence Closing](/docs/mode-selection-and-evidence-closing)
- [Checkpoint Reporting](/docs/checkpoint-reporting)
