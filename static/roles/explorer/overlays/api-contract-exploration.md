# API Contract Exploration Overlay

Use this for API, CLI, data, or integration contract exploration.

## Contract Prep

- Identify endpoint/command/workflow.
- Identify expected contract from docs/spec/code.
- Verify environment/config/test data.
- Avoid destructive calls unless explicitly authorized.

## Exploration Method

- Test happy path, missing/invalid inputs, auth/permission boundaries, empty states, error states, and idempotency where relevant.
- Capture request/response or command/output evidence with secrets redacted.
- Compare actual behavior to spec/docs and user expectations.

## Contract Report

Include:
- target contract
- expected behavior
- actual behavior
- evidence
- risks/impact
- issue/spec gap links
