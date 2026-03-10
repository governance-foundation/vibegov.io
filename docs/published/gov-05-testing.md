---
sidebar_position: 5
---

# GOV 05 TESTING

- Source rule: [gov-05-testing.mdc](https://github.com/governance-foundation/vibegov.io/blob/main/.governance/rules/gov-05-testing.mdc)
- Download raw file: [gov-05-testing.mdc](https://raw.githubusercontent.com/governance-foundation/vibegov.io/main/.governance/rules/gov-05-testing.mdc)

This page embeds the canonical rule text and adds commentary after each section to explain why the section exists.

## Scope / Audience / Update Cadence

- **Scope**: Testing philosophy and expectations for delivery.
- **Audience**: Contributors writing or updating tests.
- **Update Cadence**: Update when testing strategy changes.

> Commentary: Defines ownership and maintenance boundaries to stop rule drift and accidental misuse.

## Governance: Universal Testing Principles

> Commentary: Ensures implementation is validated by evidence, not assumptions.

## Core Testing Philosophy

> Commentary: Ensures implementation is validated by evidence, not assumptions.

### MANDATORY: Test-Driven Development (TDD)

**CRITICAL RULE**: Every code change MUST follow TDD approach with issue creation first.

> Commentary: Marks non-optional behavior to reduce ambiguity during execution.

#### 1. Issue-First TDD Workflow (MANDATORY)

1. **Create GitHub Issue**: Document requirement before any code
2. **E2E Test First**: Create end-to-end test that reflects real user flow (purpose: define acceptance criteria)
3. **Minimal Implementation**: Implement only what makes the E2E test pass (purpose: avoid over-engineering)
4. **Unit Test Coverage**: Add unit tests for reusable logic (purpose: ensure code reliability)
5. **Test Maintenance**: Update existing tests for changed behavior (purpose: maintain test integrity)

> Commentary: Marks non-optional behavior to reduce ambiguity during execution.

#### 2. TDD Enforcement Rules

- **No Code Without Test**: Never write implementation code without a failing test first
- **Red-Green-Refactor**: Follow the classic TDD cycle strictly
- **Test Defines Requirements**: Let tests drive the implementation design
- **Minimal Implementation**: Only implement what's needed to make tests pass

> Commentary: Ensures implementation is validated by evidence, not assumptions.

### Testing Hierarchy

- **E2E Tests**: Validate complete user workflows (MUST be written first)
- **Integration Tests**: Test component interactions
- **Unit Tests**: Test individual functions and methods
- **Regression Tests**: Ensure existing functionality remains intact

> Commentary: Ensures implementation is validated by evidence, not assumptions.

## Test Organization

> Commentary: Ensures implementation is validated by evidence, not assumptions.

### Test Structure

- Use isolated test directories to prevent interference
- Follow consistent naming conventions
- Organize tests by functionality and scope
- Maintain clear test descriptions

> Commentary: Ensures implementation is validated by evidence, not assumptions.

### Test Execution

- Run tests in isolation to prevent side effects
- Use cleanup procedures to maintain clean state
- Execute tests in predictable order
- Capture and report test results consistently

> Commentary: Ensures implementation is validated by evidence, not assumptions.

### Evidence Expectations

- Provide evidence beyond code changes (tests, checks, or demonstrations)
- Prefer verifiable outcomes over implied correctness

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### Test Artifacts

- Generate comprehensive test reports
- Log test execution details
- Preserve test outputs for analysis
- Clean up test artifacts after completion

> Commentary: Ensures implementation is validated by evidence, not assumptions.

## Quality Standards

> Commentary: Defines quality gates to reduce regressions and maintenance risk.

### Test Reliability

- Tests must be deterministic and repeatable
- Avoid flaky tests and race conditions
- Use proper setup and teardown procedures
- Handle external dependencies appropriately

> Commentary: Ensures implementation is validated by evidence, not assumptions.

### Test Coverage

- Aim for comprehensive coverage of critical paths
- Focus on business logic and edge cases
- Test error conditions and failure scenarios
- Validate both positive and negative test cases

> Commentary: Ensures implementation is validated by evidence, not assumptions.

### Test Performance

- Keep tests fast and efficient
- Use parallel execution where appropriate
- Minimize external dependencies
- Cache test data when possible

> Commentary: Ensures implementation is validated by evidence, not assumptions.

## Testing Workflow

> Commentary: Ensures implementation is validated by evidence, not assumptions.

### MANDATORY: TDD Development Process

> Commentary: Marks non-optional behavior to reduce ambiguity during execution.

#### 1. Issue Creation Phase

- Create GitHub issue with detailed requirements
- Define acceptance criteria clearly
- Plan implementation approach

> Commentary: Provides traceability and scope control so changes remain auditable.

#### 2. Test Creation Phase

- Write E2E test that defines user flow
- Ensure test fails initially (red phase)
- Define clear acceptance criteria in test

> Commentary: Ensures implementation is validated by evidence, not assumptions.

#### 3. Implementation Phase

- Write minimal code to make test pass (green phase)
- Focus only on making the test pass
- Avoid over-engineering

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

#### 4. Refactoring Phase

- Clean up code while keeping tests passing
- Improve design without changing behavior
- Add unit tests for reusable logic

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

#### 5. Validation Phase

- Run full test suite to ensure no regressions
- Verify all acceptance criteria are met
- Document any changes made

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### Local Development

1. **Quick Test**: Run individual test files for rapid iteration
2. **Full Test**: Run complete test suite for comprehensive validation
3. **Specific Test**: Use targeted test execution for focused validation
4. **Clean Test**: Use cleanup to ensure clean test environment

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### Continuous Integration

1. **Automated Testing**: Run tests on every code change
2. **Cross-Platform**: Test across different environments
3. **Artifact Collection**: Capture test outputs and reports
4. **Status Reporting**: Provide clear pass/fail indicators

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### Regression Testing

- **Base Tests**: Always run to ensure core functionality remains intact
- **Progressive Testing**: Each new feature adds its tests to the regression suite
- **Full Suite Execution**: Run comprehensive testing for all changes
- **Isolated Testing**: Use specific test execution for targeted validation

> Commentary: Ensures implementation is validated by evidence, not assumptions.

## Test Maintenance

> Commentary: Ensures implementation is validated by evidence, not assumptions.

### Test Updates

- Update tests when functionality changes
- Maintain test relevance and accuracy
- Remove obsolete or redundant tests
- Refactor tests for better maintainability

> Commentary: Ensures implementation is validated by evidence, not assumptions.

### Test Documentation

- Document test purpose and scope
- Explain complex test scenarios
- Provide setup and execution instructions
- Keep test documentation current

> Commentary: Ensures implementation is validated by evidence, not assumptions.

### Test Review

- Review tests for completeness and accuracy
- Validate test coverage and effectiveness
- Ensure tests follow established patterns
- Identify opportunities for improvement

> Commentary: Ensures implementation is validated by evidence, not assumptions.

## TDD Best Practices

> Commentary: Ensures implementation is validated by evidence, not assumptions.

### Test Writing Guidelines

- Write tests that reflect real user behavior
- Focus on behavior, not implementation details
- Keep tests simple and readable
- Use descriptive test names

> Commentary: Ensures implementation is validated by evidence, not assumptions.

### Implementation Guidelines

- Write the simplest code that makes tests pass
- Don't add features not covered by tests
- Refactor frequently to improve design
- Keep implementation focused and minimal

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### Quality Assurance

- Ensure all tests pass before committing
- Run full test suite after any changes
- Maintain test coverage metrics
- Review test quality regularly

> Commentary: Defines quality gates to reduce regressions and maintenance risk.

