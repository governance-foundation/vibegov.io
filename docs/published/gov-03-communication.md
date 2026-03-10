---
sidebar_position: 3
---

# GOV 03 COMMUNICATION

- Source rule: [gov-03-communication.mdc](https://github.com/governance-foundation/vibegov.io/blob/main/.governance/rules/gov-03-communication.mdc)
- Download raw file: [gov-03-communication.mdc](https://raw.githubusercontent.com/governance-foundation/vibegov.io/main/.governance/rules/gov-03-communication.mdc)

This page embeds the canonical rule text and adds commentary after each section to explain why the section exists.

## Scope / Audience / Update Cadence

- **Scope**: Communication defaults and required responses during delivery.
- **Audience**: Contributors and agents communicating during work.
- **Update Cadence**: Update when communication expectations change.

> Commentary: Defines ownership and maintenance boundaries to stop rule drift and accidental misuse.

## Governance: Communication Rules

> Commentary: Makes delivery communication actionable, concise, and consistent.

## Core Communication Principles

> Commentary: Makes delivery communication actionable, concise, and consistent.

### Autonomous Execution

- **No Clarification Requests**: Do not ask for clarification unless critically blocked
- **No Status Updates**: Do not say "proceeding," "on it," or similar phrases; brief required acknowledgments are allowed
- **Immediate Execution**: Execute the next step immediately without waiting
- **Self-Directed**: Work autonomously through task list without prompting
- **Complete Workflow**: Always finish the full issue lifecycle (create → implement → commit → push → close)

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### MANDATORY: Ticket Scope Review Communication

**CRITICAL RULE**: When receiving a request, communicate the scope review process.

> Commentary: Marks non-optional behavior to reduce ambiguity during execution.

#### Scope Review Communication Pattern

When a request is made:
1. **Acknowledge**: "✅ Task added: [task]." (purpose: confirm receipt)
2. **Review Scope**: Check existing tickets for overlap
3. **Communicate Decision**: 
   - "Adding to existing ticket #[X] - scope matches"
   - "Creating new ticket - different scope"
4. **Execute**: Proceed with appropriate action

> Commentary: Makes delivery communication actionable, concise, and consistent.

### Task Acknowledgment

When a new task is given:
- Acknowledge: "✅ Task added: [task]." (purpose: confirm receipt)
- Review existing tickets for scope overlap
- Create GitHub issue or add to existing: `gh issue create --title "Title" --body "Description" --label "type,priority"` (purpose: track detailed work)
- Update task list status (purpose: maintain high-level overview)
- Execute immediately (purpose: maintain momentum)
- Complete full workflow automatically (purpose: maintain development momentum)

> Commentary: Keeps execution state visible and prioritized across ongoing work.

### Idle State Management

- **If no active task**: Prompt "What's next?"
- **If working on tasks**: Continue autonomously through task list
- **If blocked**: Clearly state the blocker and what's needed to proceed

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Automatic Workflow Communication

> Commentary: Makes delivery communication actionable, concise, and consistent.

### MANDATORY: No Reminder Communication

- **Never ask** "should I commit this?" or "should I push?"
- **Never ask** "should I close the issue?" or "should I create an issue?"
- **Never wait** for user confirmation of standard workflow steps
- **Always execute** the complete workflow automatically

> Commentary: Marks non-optional behavior to reduce ambiguity during execution.

### Workflow Completion Communication

- **Report completion**: "✅ [Task] completed and issue #[X] closed"
- **Report next steps**: "Moving to next task: [task description]"
- **Report blockers**: "Blocked on [issue] - need [requirement]"
- **Report backlog state**: "Backlog remaining: [N]"
- **Report next selection**: "Next selected item: #[X] [title]"

> Commentary: Makes delivery communication actionable, concise, and consistent.

### MANDATORY: Continuous Loop Reporting

After each completed task:
1. Report completion evidence
2. Report backlog remaining count
3. Report next selected task/issue
4. Continue execution without waiting for a prompt

> Commentary: Marks non-optional behavior to reduce ambiguity during execution.

## Communication Patterns

> Commentary: Makes delivery communication actionable, concise, and consistent.

### Issue Management Communication

- Use clear, actionable language in issue descriptions
- Reference related issues and pull requests
- Provide context for technical decisions
- Use appropriate labels and assignees

> Commentary: Provides traceability and scope control so changes remain auditable.

### Scope Review Communication

- Clearly communicate scope overlap decisions
- Explain why work is grouped or separated
- Maintain transparency in ticket management
- Document scope boundaries clearly

> Commentary: Makes delivery communication actionable, concise, and consistent.

### Code Review Communication

- Be constructive and specific in feedback
- Reference relevant documentation and patterns
- Explain the reasoning behind suggestions
- Focus on code quality and maintainability

> Commentary: Makes delivery communication actionable, concise, and consistent.

### Documentation Communication

- Write clear, concise documentation
- Use consistent terminology and formatting
- Include examples and use cases
- Keep documentation current with code changes

> Commentary: Makes delivery communication actionable, concise, and consistent.

## Professional Standards

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### Language and Tone

- Use professional, respectful language
- Be direct and concise
- Avoid jargon unless necessary
- Maintain positive, solution-focused approach

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### Response Patterns

- Acknowledge requests promptly
- Provide clear, actionable responses
- Follow up on commitments
- Escalate issues when appropriate

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### Collaboration Guidelines

- Respect team members' time and expertise
- Share knowledge and best practices
- Support continuous improvement
- Maintain open, transparent communication

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

