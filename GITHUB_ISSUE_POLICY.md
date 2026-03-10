# GitHub Issue Policy (Mandatory)

Use this policy when running VibeGov in autonomous or assisted delivery.

## 1) GitHub issue backlog is mandatory (single source of team alignment)
- Maintain an explicit GitHub issue backlog for all planned and partial requirements.
- Every delivery cycle starts from an open GitHub Issue.
- If no issue exists, create one before coding.
- Requirement IDs in specs/traceability MUST map to issue(s) so all agents/humans share the same execution queue.

## 2) Spec binding required
- Link each issue to exact OpenSpec requirement IDs (`openspec/specs/*`).
- If behavior is missing/outdated in spec, update spec first (append-only IDs).

## 2.1) Issue body quality is mandatory
Issue descriptions must be implementation-grade and follow `ISSUE_BODY_TEMPLATE.md`.

Minimum required sections:
- Outcome
- Why
- Scope
- OpenSpec Binding (IDs + spec paths)
- Acceptance Criteria
- Test Evidence Required
- Deliverables

Do not start implementation from vague or one-line issue bodies.

## 3) Commit discipline
- At least one real commit per completed cycle.
- Commit message must reference the issue (example: `feat: improve provider sync (#312)`).

## 4) No commit/push = not done
- A cycle cannot be marked `done` without committed and pushed code.
- If not pushed, report `blocker`.

## 5) Evidence comment on issue
Post a progress/update comment containing:
- commands run
- test results
- requirement IDs affected
- traceability updates
- commit hash

## 5.1) Blocker must be recorded on the same GitHub issue
If work is blocked, record it on that issue before moving on.

Required blocker comment fields:
- first actionable error line
- exact fix target (file/endpoint/spec path)
- what was attempted
- unblock condition

Blocked issue handling:
- keep issue open
- apply/update blocker label/status
- emit blocker outbox payload
- immediately pick the next open issue

## 6) Close criteria
Close an issue only when all are true:
- executable test proof passes (E2E for user-facing work)
- `openspec validate --all` passes
- `openspec/traceability.md` is updated truthfully
- commit is pushed and linked

## 7) Branch/PR hygiene
- Use issue-linked branch names (example: `issue-312-provider-sync`).
- Follow repo PR/main rules; if PR-first, do not bypass with direct main push.

## 8) Continuous loop behavior
- Do not stop after one issue cycle.
- `done` means issue complete; immediately continue with next open issue.
- Stop only on explicit `stop` instruction.
- If no issues are available, sleep/recheck and keep loop alive.

## 9) Required outbox fields
- `issueNumber`
- `status` (`done` or `blocker`)
- `branchName`
- `commitHash`
- `pushed`
- `commandsRun[]`
- `keyResults[]`
- `blockers[]`

