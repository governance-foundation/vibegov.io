# Heartbeat Orchestration Policy

Purpose: keep proactive role behavior useful without stuffing all workflow logic into `HEARTBEAT.md`.

## Core Rule

Heartbeat is an orchestrator. Role files own detailed workflow logic.

A good role heartbeat should:
- name the role loop to run
- point to source-of-truth files
- state when to report
- stay silent when nothing material changed

It should not duplicate the full role contract.

## Reporting Triggers

Report when there is a material state change:
- issue created/updated/handed off
- implementation started/validated/merged/released
- research finding published
- exploration finding filed
- blocker requiring human decision
- stale/hung work recovered

Stay quiet when:
- no source-of-truth state changed
- the check only confirms nothing new
- reporting would create noise

## Cron / Background Guidance

For recurring role jobs:
- prefer short prompts that say which role/skill/loop to run
- keep detailed procedure in role files
- set delivery to none for noisy internal checks
- announce only meaningful summaries or blockers
- use explicit session targets for long-running project roles

## Same-Turn State Rule

Before any proactive report, ensure the source of truth is updated. The report should summarize durable state, not be the only record of it.
