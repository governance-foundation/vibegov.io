# Use Case + Journey Spec Template

## Capability
- Name:
- Namespace / ID Prefix:

## Top-Level Use Cases
- UC-001: ...
- UC-002: ...

## Journeys
### JRN-001 <name>
- Related use case(s):
- Scope (features crossed):
- Happy path:
  1) ...
  2) ...
- Failure path(s):
  - FP-001 ...
  - FP-002 ...

## Requirements
### Requirement: <ID> <title>
- MUST ...

#### Scenario: <name>
- GIVEN <concrete actor/state/trigger>
- WHEN <action/event>
- THEN <explicit outcome>
- AND <status/payload/state assertions>

## Acceptance Criteria
- AC-001 (maps to <ID>): ...
- AC-002 (maps to <ID>): ...

## Test Cases
- TC-E2E-001 (AC-001, ID-...): <spec path / test name>
- TC-API-001 (AC-002, ID-...): <test path>

## Sample Data / Fixtures
- Seed profile: ...
- Fixture set: ...
- Edge fixture: ...

## Traceability
| Use Case | Journey | Requirement ID | Test Case | Evidence |
|---|---|---|---|---|
| UC-001 | JRN-001 | ID-001 | TC-E2E-001 | <run/commit> |

## Completion Checklist
- [ ] IDs deterministic and append-only
- [ ] E2E proof present for user-facing requirements
- [ ] Traceability updated
- [ ] `openspec validate --all` passed
