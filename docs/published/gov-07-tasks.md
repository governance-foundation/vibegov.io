---
sidebar_position: 7
---

# GOV 07 TASKS

- Source rule: [gov-07-tasks.mdc](https://github.com/governance-foundation/vibegov.io/blob/main/.governance/rules/gov-07-tasks.mdc)
- Download raw file: [gov-07-tasks.mdc](https://raw.githubusercontent.com/governance-foundation/vibegov.io/main/.governance/rules/gov-07-tasks.mdc)

This page embeds the canonical rule text and adds commentary after each section to explain why the section exists.

## Scope / Audience / Update Cadence

- **Scope**: Task list usage and status management.
- **Audience**: Contributors maintaining project tasks.
- **Update Cadence**: Update when task management practices change.

> Commentary: Defines ownership and maintenance boundaries to stop rule drift and accidental misuse.

## Governance: Task Management Principles

> Commentary: Keeps execution state visible and prioritized across ongoing work.

## Task Management Structure

> Commentary: Keeps execution state visible and prioritized across ongoing work.

### Core Components

- Task List - Main project task tracking
- GitHub Issues - Detailed implementation tracking
- Project milestones and high-level planning

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### Task Organization

- **Project Status**: Overall project health and progress
- **Critical Issues**: High-priority bugs and blockers
- **Development Tasks**: Feature development and improvements
- **Testing Tasks**: Test suite maintenance and expansion
- **Documentation Tasks**: Documentation updates and improvements

> Commentary: Keeps execution state visible and prioritized across ongoing work.

## Task List vs GitHub Issues

> Commentary: Provides traceability and scope control so changes remain auditable.

### Task List Responsibilities

- High-level project milestones
- Overall project status tracking
- Critical blocker identification
- Release planning and coordination
- Cross-cutting concerns

> Commentary: Keeps execution state visible and prioritized across ongoing work.

### GitHub Issues Responsibilities

- Specific bug reports
- Detailed feature implementation
- Individual development tasks
- Test case creation
- Code review requests

> Commentary: Provides traceability and scope control so changes remain auditable.

## Task Management Workflow

> Commentary: Keeps execution state visible and prioritized across ongoing work.

### Task Creation

1. Create GitHub issue for detailed task
2. Add high-level task to task list if needed
3. Reference GitHub issue in task list
4. Update task status as issue progresses
5. Remove task when issue is closed

> Commentary: Keeps execution state visible and prioritized across ongoing work.

### Task Prioritization

- **Critical**: Blocking project progress
- **High**: Important for next release
- **Medium**: Nice to have features
- **Low**: Future enhancements

> Commentary: Keeps execution state visible and prioritized across ongoing work.

### Priority Factors

- Impact on project goals
- User value and demand
- Technical complexity
- Dependencies and blockers
- Resource availability

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Task Status Tracking

> Commentary: Keeps execution state visible and prioritized across ongoing work.

### Status Categories

- **Pending**: Not yet started
- **In Progress**: Currently being worked on
- **Blocked**: Waiting for dependencies
- **Done**: Completed successfully

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### Status Updates

- Update task status weekly
- Remove completed tasks
- Add new critical issues
- Review and prioritize tasks

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Task List Patterns

> Commentary: Keeps execution state visible and prioritized across ongoing work.

### Task Entry Format

```markdown

> Commentary: Keeps execution state visible and prioritized across ongoing work.

## Task Category

> Commentary: Keeps execution state visible and prioritized across ongoing work.

### Task Title

- **Status**: Pending/In Progress/Blocked/Done
- **Priority**: High/Medium/Low
- **GitHub Issue**: #[issue-number] (if applicable)
- **Description**: Brief description of the task
- **Acceptance Criteria**: What constitutes completion
```

> Commentary: Keeps execution state visible and prioritized across ongoing work.

### Status Updates

```markdown
- **Status**: In Progress → Done
- **Updated**: 2024-01-15
- **Notes**: Completed with PR #[pr-number]
```

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Integration Patterns

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### Development Workflow Integration

- Link tasks to GitHub issues
- Reference tasks in commit messages
- Update task status based on issue progress
- Coordinate task dependencies

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### Release Planning

- Use task list for release milestone planning
- Track critical path items
- Monitor blocker resolution
- Coordinate cross-team dependencies

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### Project Health Monitoring

- Track overall project status
- Identify critical blockers
- Monitor progress against milestones
- Flag areas needing attention

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Task List Best Practices

> Commentary: Keeps execution state visible and prioritized across ongoing work.

### Content Management

- Keep task list concise and focused
- Avoid duplicating GitHub issue details
- Use clear, actionable language
- Regular cleanup and maintenance

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### Communication

- Use task list for stakeholder updates
- Reference in project meetings
- Include in status reports
- Share with team members

> Commentary: Makes delivery communication actionable, concise, and consistent.

### Automation

- Consider automated status updates
- Link with CI/CD pipeline status
- Integrate with project management tools
- Generate reports from task list

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Task List Templates

> Commentary: Keeps execution state visible and prioritized across ongoing work.

### Project Status Template

```markdown

> Commentary: Standardizes input quality so future work starts from clear structure.

## Project Status

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### Overall Health

- **Status**: Green/Yellow/Red
- **Last Updated**: YYYY-MM-DD
- **Next Milestone**: [Milestone Name]
- **Target Date**: YYYY-MM-DD

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### Critical Blockers

- [ ] Blocker 1 - Description
- [ ] Blocker 2 - Description

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### Recent Progress

- Completed: [Task/Feature]
- In Progress: [Task/Feature]
- Upcoming: [Task/Feature]
```

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### Release Planning Template

```markdown

> Commentary: Standardizes input quality so future work starts from clear structure.

## Release [Version]

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### Target Date

YYYY-MM-DD

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### Critical Path

- [ ] Critical item 1
- [ ] Critical item 2
- [ ] Critical item 3

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### Dependencies

- External dependency 1
- External dependency 2

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### Risk Assessment

- High/Medium/Low risk items
- Mitigation strategies
```

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

