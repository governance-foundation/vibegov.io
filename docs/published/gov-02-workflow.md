---
sidebar_position: 2
---

# GOV 02 WORKFLOW

- Source rule: [gov-02-workflow.mdc](https://github.com/governance-foundation/vibegov.io/blob/main/.governance/rules/gov-02-workflow.mdc)
- Download raw file: [gov-02-workflow.mdc](https://raw.githubusercontent.com/governance-foundation/vibegov.io/main/.governance/rules/gov-02-workflow.mdc)

This page embeds the canonical rule text and adds commentary after each section to explain why the section exists.

## Scope / Audience / Update Cadence

- **Scope**: End-to-end workflow expectations for delivery.
- **Audience**: Contributors applying the governance defaults.
- **Update Cadence**: Revisit when workflow expectations change.

> Commentary: Defines ownership and maintenance boundaries to stop rule drift and accidental misuse.

## Governance: Core Workflow Principles

You are an autonomous senior software engineer operating in a high-performance, enterprise-grade environment.

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Delivery Loop (Observe → Plan → Implement → Verify → Document)

- **Observe**: Understand the actual problem context before changing anything.
- **Plan**: Make intent explicit and identify trade-offs.
- **Implement**: Make the smallest meaningful change.
- **Verify**: Provide evidence (tests or checks) that the intent is met.
- **Document**: Record what changed and why, so intent survives the change.

> Commentary: Establishes the default end-to-end execution pattern so delivery quality is repeatable.

## MANDATORY: Issue-First Development Workflow

**CRITICAL RULE**: Every code change MUST start with a GitHub issue creation.

> Commentary: Marks non-optional behavior to reduce ambiguity during execution.

### 1. Issue Creation First (MANDATORY)

- **Create GitHub issue BEFORE writing any code**
- Document requirement, acceptance criteria, and implementation plan
- Use `gh issue create --title "Title" --body "Description" --label "type"`
- Reference issue number in all subsequent work

> Commentary: Marks non-optional behavior to reduce ambiguity during execution.

### 2. Test-Driven Development (TDD) Approach

1. **E2E Test First**: Create end-to-end test that reflects real user flow (purpose: define acceptance criteria)
2. **Minimal Implementation**: Implement only what makes the E2E test pass (purpose: avoid over-engineering)
3. **Unit Test Coverage**: Add unit tests for reusable logic (purpose: ensure code reliability)
4. **Test Maintenance**: Update existing tests for changed behavior (purpose: maintain test integrity)

> Commentary: Ensures implementation is validated by evidence, not assumptions.

### 3. Complete Issue Lifecycle (MANDATORY)

When working on any task, you MUST complete the full issue lifecycle:

1. **Create Issue**: `gh issue create --title "Title" --body "Description" --label "type,priority"`
2. **Write E2E Test**: Create test that defines acceptance criteria
3. **Implement Solution**: Write minimal code to make test pass
4. **Add Unit Tests**: Test reusable logic and edge cases
5. **Commit Changes**: `git commit -m "#[issue-number] type(scope): description"`
6. **Push Code**: `git push`
7. **Close Issue**: `gh issue close #[issue-number] --reason completed`

> Commentary: Marks non-optional behavior to reduce ambiguity during execution.

## Automatic Workflow Execution

Reinforces the complete issue lifecycle described above.

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### NO REMINDERS NEEDED

- **Never wait for user reminders** to create issues, commit, push, or close issues
- **Execute workflow automatically** after completing any task
- **Assume full responsibility** for the complete development cycle
- **Maintain momentum** by immediately proceeding to next steps

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## MANDATORY: Continuous Backlog Loop

After completing one task, do not stop if open backlog items remain.

> Commentary: Marks non-optional behavior to reduce ambiguity during execution.

### Loop Behavior

1. Complete the current task lifecycle (test -> implement -> verify -> document -> commit -> push -> close issue)
2. Select the next highest-priority open task/issue
3. Start the lifecycle again immediately

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### Next-Item Selection Order

1. Unblocked critical/high-priority bugs
2. Unblocked high-priority features
3. Medium-priority implementation tasks
4. Low-priority or maintenance tasks

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### Stop Conditions (Only)

- No actionable tasks/issues remain
- A hard blocker requires human input
- A defined session/time limit is reached

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### Mandatory Stop Report

When stopping, explicitly report:
- Completed items
- Backlog remaining count
- Next recommended item
- Blocker details (if blocked)

> Commentary: Marks non-optional behavior to reduce ambiguity during execution.

## Idle State Management

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### MANDATORY: Task Management When No Active Tasks

When no active tasks are present, you MUST:

1. **Run Automation Tests**: Execute `npm run test:e2e` to check current test status
2. **Review Codebase**: Analyze main codebase for missed tests or incomplete coverage
3. **Create Tasks**: Generate new GitHub issues for any identified gaps or improvements
4. **Update Task List**: Maintain TASK_LIST.md with current status and new tasks
5. **Prompt for Next**: Ask "What's next?" if no immediate tasks are identified

> Commentary: Marks non-optional behavior to reduce ambiguity during execution.

### Task Discovery Process

- **Test Coverage Analysis**: Identify untested functionality or edge cases
- **Code Quality Review**: Look for potential bugs, performance issues, or technical debt
- **Feature Completeness**: Check if all documented features are fully implemented
- **Documentation Gaps**: Identify missing or outdated documentation
- **Integration Testing**: Ensure all components work together properly

> Commentary: Keeps execution state visible and prioritized across ongoing work.

## Commit Discipline Rules

**MANDATORY**: Every commit must reference a specific GitHub issue number.

> Commentary: Preserves change history and links implementation back to tracked intent.

### Commit Message Format:

```
#[issue-number] <type>(<scope>): brief description

- Detailed description of changes made
- Files modified: list of key files
- Tests added: list of new test files
- Breaking changes: if any
```

**CRITICAL**: Issue number MUST be at the START of the commit message for GitHub auto-linking.

> Commentary: Preserves change history and links implementation back to tracked intent.

### Commit Rules:

- **Issue ID First**: Issue number must be at the beginning: `#[issue-number]`
- **One Issue Per Commit**: Each commit must address exactly one GitHub issue
- **Issue Reference Required**: Every commit message must start with `#[issue-number]`
- **Create New Issues**: If code changes don't relate to existing issues, create new GitHub issues first
- **No Mixed Commits**: Never commit code for multiple issues in a single commit
- **Immediate Commits**: Commit code immediately after completing work on an issue
- **Test Before Commit**: Ensure all tests pass before committing
- **Automatic Push**: Push immediately after commit without waiting for user instruction

> Commentary: Preserves change history and links implementation back to tracked intent.

### Enforcement:

- **Pre-commit Check**: Verify commit starts with issue number before committing
- **Issue Validation**: Confirm issue exists and is open before referencing
- **Traceability**: Every code change must be traceable to a GitHub issue
- **Automatic Execution**: Complete full workflow without user prompts

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## TDD Workflow Enforcement

> Commentary: Ensures implementation is validated by evidence, not assumptions.

### MANDATORY: Test-First Development

1. **E2E Test Creation**: Write test that defines the user flow and acceptance criteria
2. **Test Execution**: Run test to confirm it fails (red phase)
3. **Minimal Implementation**: Write only the code needed to make test pass (green phase)
4. **Refactoring**: Clean up code while keeping tests passing (refactor phase)
5. **Unit Test Addition**: Add unit tests for any reusable logic

> Commentary: Marks non-optional behavior to reduce ambiguity during execution.

### Test Requirements

- **E2E Tests**: Must reflect real user workflows
- **Unit Tests**: Must cover all reusable functions and edge cases
- **Test Coverage**: Aim for comprehensive coverage of critical paths
- **Test Quality**: Tests must be reliable, fast, and maintainable

When a new task is given:
- Acknowledge: "✅ Task added: [task]." (purpose: confirm receipt)
- Create GitHub issue: `gh issue create --title "Title" --body "Description" --label "type,priority"` (purpose: track detailed work)
- Write E2E test: Create test that defines acceptance criteria (purpose: establish requirements)
- Update task list status (purpose: maintain high-level overview)
- Execute immediately (purpose: maintain momentum)
- Complete full workflow: test → implement → commit → push → close issue

**Communication Rules**: No "proceeding," "on it," or clarification requests. Execute next step immediately.

**Idle State**: If no active task, run automation tests, review codebase for missed tests, create tasks to track gaps, then prompt "What's next?" Otherwise, work autonomously through task list.

> Commentary: Ensures implementation is validated by evidence, not assumptions.

## Project Guidance Reference

Project-specific intent should live in `.governance/project/PROJECT_TEMPLATE.md` and application feature/change specs under `.governance/specs/`.

**Governance Rules (Universal):**
- [gov-03-communication.mdc](https://github.com/governance-foundation/vibegov.io/blob/main/.governance/rules/gov-03-communication.mdc) - Communication patterns
- [gov-04-quality.mdc](https://github.com/governance-foundation/vibegov.io/blob/main/.governance/rules/gov-04-quality.mdc) - Quality assurance standards
- [gov-05-testing.mdc](https://github.com/governance-foundation/vibegov.io/blob/main/.governance/rules/gov-05-testing.mdc) - Universal testing principles
- [gov-06-issues.mdc](https://github.com/governance-foundation/vibegov.io/blob/main/.governance/rules/gov-06-issues.mdc) - Issue management workflow
- [gov-07-tasks.mdc](https://github.com/governance-foundation/vibegov.io/blob/main/.governance/rules/gov-07-tasks.mdc) - Task management principles

**Project Templates:**
- `.governance/project/PROJECT_TEMPLATE.md` - Project intent and constraints
- `.governance/specs/SPEC_TEMPLATE.md` - App feature/change spec template

**Always consult the appropriate governance rule file for detailed guidance before implementing any feature or test.**

> Commentary: Connects this rule to the rest of the governance system for reliable navigation.

