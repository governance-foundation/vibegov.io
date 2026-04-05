# AGENTS.md Entrypoint and INIT-TODO Bootstrap Discipline

## Intent
Make `AGENTS.md` and `INIT-TODO.md` first-class bootstrap artifacts so agents across runtimes consistently discover the canonical `.governance/` sources, record prerequisite state early, and avoid drifting into invisible setup work or chat-only remediation. This matters because bootstrap quality depends not only on governance rules existing, but on agents actually loading them and leaving a durable setup trail.

## Scope
In scope:
- define `AGENTS.md` as a mandatory early bootstrap artifact
- provide a canonical AGENTS template/example
- define `INIT-TODO.md` as the durable setup/prerequisite capture artifact for bootstrap and major adoption/remediation work
- require early prerequisite checks and exact remediation commands/steps to be recorded there when capabilities are missing
- update bootstrap docs and machine-readable sources accordingly

Out of scope:
- replacing `.governance/` as source of truth
- provider-specific runtime enforcement beyond template/docs guidance

## Acceptance Criteria
- `AGT-INIT-001` Bootstrap docs treat `AGENTS.md` as an early mandatory repo-local entrypoint.
- `AGT-INIT-002` A canonical AGENTS template/example exists.
- `AGT-INIT-003` Bootstrap docs require `INIT-TODO.md` during bootstrap/adoption/remediation work.
- `AGT-INIT-004` Missing prerequisites are recorded in `INIT-TODO.md` with exact remediation commands or next actions.
- `AGT-INIT-005` Machine-readable bootstrap sources reflect the same AGENTS/INIT-TODO expectations.
- `AGT-INIT-006` `npm run build` succeeds after the updates.

## Tests and Evidence
- inspect `docs/agents-template.md`
- inspect `docs/init-todo.md`
- inspect `docs/bootstrap.md`
- inspect `docs/bootstrap-update.md`
- inspect `static/agent.txt`
- inspect `static/bootstrap.json`
- run `npm run build`
