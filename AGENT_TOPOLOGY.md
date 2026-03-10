# AGENT_TOPOLOGY.md

## Goal
A practical default for running multiple AI agents across multiple projects without chaos.

## Recommended Shape

- **1 Orchestrator session** (human-facing)
  - Owns prioritization, approvals, and final quality bar
  - Dispatches work to project agents
- **1 Persistent agent per project**
  - `agent-cabinet`
  - `agent-scheduling-assistant`
  - `agent-vibegov`
- **Optional specialist run-agents** (ephemeral)
  - `spec-hardener`
  - `contract-tester`
  - `release-checker`

## Boundaries per project agent

Each project agent gets explicit boundaries:

- repository path (single repo)
- branch naming convention
- allowed directories
- required validation commands
- required handoff files

## Required Handoff Contract

Every autonomous run must produce:

1. `openspec/migration/<run>-summary.json`
2. `openspec/migration/<run>-changed-files.txt`
3. `openspec/migration/<run>-review-notes.md`
4. final message with:
   - commit hash
   - validation outputs
   - unresolved risks/TODOs

## Suggested Daily Loop

1. Orchestrator sets queue (3-5 tasks max active)
2. Project agent executes autonomously within scope
3. Project agent writes handoff artifacts
4. Orchestrator reviews + accepts/rejects
5. Merge or send remediation

## Governance Rules to Enforce Everywhere

1. Requirements must be executable
2. IDs are deterministic and append-only
3. Traceability must map requirement IDs to tests
4. No out-of-scope edits without explicit approval

## Escalation Rules

Agents must stop and escalate when:

- out-of-scope file changes are detected
- validation fails repeatedly
- requirement intent conflicts
- security-sensitive behavior is unclear

## Why this works

- Keeps context small and stable
- Makes ownership obvious
- Preserves reviewability under heavy automation
- Lets humans focus on decisions, not busywork
