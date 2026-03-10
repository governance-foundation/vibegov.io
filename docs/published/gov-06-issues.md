---
sidebar_position: 6
---

# GOV 06 ISSUES

- Source rule: [gov-06-issues.mdc](https://github.com/governance-foundation/vibegov.io/blob/main/.governance/rules/gov-06-issues.mdc)
- Download raw file: [gov-06-issues.mdc](https://raw.githubusercontent.com/governance-foundation/vibegov.io/main/.governance/rules/gov-06-issues.mdc)

This page embeds the canonical rule text and adds commentary after each section to explain why the section exists.

## Scope / Audience / Update Cadence

- **Scope**: Issue management workflow and templates.
- **Audience**: Contributors creating or updating issues.
- **Update Cadence**: Revisit when issue process changes.

> Commentary: Defines ownership and maintenance boundaries to stop rule drift and accidental misuse.

## Governance: Issue Management Workflow

> Commentary: Provides traceability and scope control so changes remain auditable.

## Issue Management Strategy

> Commentary: Provides traceability and scope control so changes remain auditable.

### MANDATORY: Ticket Scope Review Process

**CRITICAL RULE**: Before creating any new issue, you MUST review existing tickets for scope overlap.

> Commentary: Marks non-optional behavior to reduce ambiguity during execution.

#### 1. Scope Review Process (MANDATORY)

When receiving a request:
1. **Review Current Work**: Check what you're currently working on
2. **Identify Ticket Scope**: Determine if request fits within existing GitHub issue
3. **Add to Existing Ticket**: If related, add new detail to existing issue
4. **Create New Ticket**: If no existing ticket covers the scope, create new one

> Commentary: Marks non-optional behavior to reduce ambiguity during execution.

#### 2. Scope Management Rules

- **Related Work**: Group related functionality in same ticket
- **Different Scope**: Create separate tickets for different functionality areas
- **No Duplicates**: Avoid creating multiple tickets for same scope
- **Complete Tracking**: Ensure all work is properly documented

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

#### 3. Scope Identification Criteria

- **Feature Area**: Same feature or component
- **Functionality**: Related functionality or behavior
- **Dependencies**: Work that depends on each other
- **Timeline**: Work that should be completed together

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### Issue Creation Process

- Use GitHub CLI (`gh`) for issue management
- Create issues for all bugs, features, and development tasks
- Use appropriate labels and assignees
- Reference existing issues when creating related ones

> Commentary: Provides traceability and scope control so changes remain auditable.

### Issue Categories

- **Bug Reports**: Issues with existing functionality
- **Feature Requests**: New functionality or improvements
- **Development Tasks**: Technical debt, refactoring, testing
- **Documentation**: README updates, code comments, guides

> Commentary: Provides traceability and scope control so changes remain auditable.

### GitHub CLI Commands

```bash

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Create issue with body from file

gh issue create --title "Title" --body-file issue_body.txt --label "bug,high-priority"

> Commentary: Provides traceability and scope control so changes remain auditable.

## Create issue with inline body

gh issue create --title "Title" --body "Description" --label "feature"

> Commentary: Provides traceability and scope control so changes remain auditable.

## List issues

gh issue list --state open --label "bug"

> Commentary: Provides traceability and scope control so changes remain auditable.

## Update issue

gh issue edit 123 --body "Updated description"
```

> Commentary: Provides traceability and scope control so changes remain auditable.

## Issue Templates

> Commentary: Provides traceability and scope control so changes remain auditable.

### Bug Report Template

```markdown

> Commentary: Standardizes input quality so future work starts from clear structure.

## Bug Description

Brief description of the issue

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Steps to Reproduce

1. Step 1
2. Step 2
3. Step 3

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Expected Behavior

What should happen

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Actual Behavior

What actually happens

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Environment

- OS: Windows/Linux/macOS
- Version: X.X.X

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Additional Context

Any other relevant information
```

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### Feature Request Template

```markdown

> Commentary: Standardizes input quality so future work starts from clear structure.

## Feature Description

Brief description of the requested feature

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Use Case

Why this feature is needed

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Proposed Implementation

How this could be implemented

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Acceptance Criteria

- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Additional Context

Any other relevant information
```

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Issue Tracking Integration

> Commentary: Provides traceability and scope control so changes remain auditable.

### Task List Integration

- Task list tracks high-level project status
- GitHub issues track specific implementation details
- Keep task list focused on project milestones
- Move detailed development tasks to GitHub issues

> Commentary: Keeps execution state visible and prioritized across ongoing work.

### Label Strategy

- **Priority**: `high-priority`, `medium-priority`, `low-priority`
- **Type**: `bug`, `feature`, `enhancement`, `documentation`
- **Component**: `core`, `testing`, `pipeline`, `api`
- **Status**: `ready`, `in-progress`, `blocked`, `needs-review`

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Workflow Integration

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### Development Workflow

1. Review existing tickets for scope overlap
2. Add to existing ticket or create new one
3. Reference issue in commit messages
4. Update issue status as work progresses
5. Close issue when complete

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### Testing Integration

- Create issues for test failures
- Reference test files in issue descriptions
- Track test improvements as separate issues

> Commentary: Ensures implementation is validated by evidence, not assumptions.

### Pipeline Integration

- Monitor CI/CD for failures
- Create issues for pipeline problems
- Track deployment and release issues

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Issue Maintenance

> Commentary: Provides traceability and scope control so changes remain auditable.

### Regular Reviews

- Review open issues weekly
- Update stale issues
- Close completed issues
- Merge duplicate issues

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### Issue Cleanup

- Remove outdated labels
- Update issue templates
- Archive resolved issues
- Maintain issue searchability

> Commentary: Provides traceability and scope control so changes remain auditable.

### Scope Management

- Group related issues together
- Avoid scope creep in individual issues
- Split large issues into smaller, focused ones
- Maintain clear scope boundaries

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

