---
sidebar_position: 4
---

# GOV 04 QUALITY

- Source rule: [gov-04-quality.mdc](https://github.com/governance-foundation/vibegov.io/blob/main/.governance/rules/gov-04-quality.mdc)
- Download raw file: [gov-04-quality.mdc](https://raw.githubusercontent.com/governance-foundation/vibegov.io/main/.governance/rules/gov-04-quality.mdc)

This page embeds the canonical rule text and adds commentary after each section to explain why the section exists.

## Scope / Audience / Update Cadence

- **Scope**: Quality gates and documentation expectations for delivery.
- **Audience**: Contributors responsible for quality checks.
- **Update Cadence**: Revisit when QA expectations change.

> Commentary: Defines ownership and maintenance boundaries to stop rule drift and accidental misuse.

## Governance: Quality Assurance Standards

> Commentary: Defines quality gates to reduce regressions and maintenance risk.

## Quality Assurance Checklist

> Commentary: Defines quality gates to reduce regressions and maintenance risk.

### For Each Task:

1. **Review Files**: Examine all related files before making changes
2. **Run Current Tests**: Execute existing test suite to establish baseline
3. **Implement Feature**: Make changes following TDD approach
4. **Run New Tests**: Execute the specific test file for the feature
5. **Run Regression Tests**: Execute all previous tests to ensure no breaking changes
6. **Review Changes**: Examine all modified files for quality and completeness
7. **Commit Changes**: Use descriptive commit messages with issue ID at start
8. **Document Updates**: Update relevant documentation and README files

> Commentary: Keeps execution state visible and prioritized across ongoing work.

### Regression Test Strategy:

- **Base Tests**: Always run to ensure core functionality remains intact
- **Progressive Testing**: Each new feature adds its tests to the regression suite
- **Full Suite Execution**: Run comprehensive testing for all changes
- **Isolated Testing**: Use specific test execution for targeted validation
- **Clean Environment**: Use cleanup to ensure clean test environment

> Commentary: Ensures implementation is validated by evidence, not assumptions.

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

### Commit Discipline Requirements:

- **Issue ID First**: Issue number must be at the beginning: `#[issue-number]`
- **One Issue Per Commit**: Each commit must address exactly one GitHub issue
- **Pre-commit Validation**: Verify all tests pass before committing
- **Traceability**: Every code change must be traceable to a GitHub issue
- **Immediate Commits**: Commit code immediately after completing work on an issue

> Commentary: Preserves change history and links implementation back to tracked intent.

### Quality Assurance Checklist:

- [ ] All existing tests pass
- [ ] New feature tests pass
- [ ] No random files created outside test directories
- [ ] Code follows existing patterns and conventions
- [ ] Documentation updated
- [ ] README.md reflects new functionality
- [ ] Commit message starts with issue number: `#[issue-number]`
- [ ] All modified files reviewed for quality
- [ ] GitHub issue referenced at start of commit message

> Commentary: Defines quality gates to reduce regressions and maintenance risk.

## Code Quality Standards

> Commentary: Defines quality gates to reduce regressions and maintenance risk.

### General Principles

- Follow established patterns and conventions
- Implement proper error handling
- Use consistent naming conventions
- Add comprehensive comments and documentation
- Maintain backward compatibility when possible

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### Separation of Concerns

- Keep rendering or presentation layers minimal and declarative
- Move logic, defaults, and decisions into the appropriate model or service layer

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### Naming and Structure Stability

- Prefer stable names and predictable structure over cleverness
- Keep patterns consistent so future changes are lower risk

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

### Testing Requirements

- All new features must have corresponding tests
- Tests must be isolated and not interfere with each other
- Test coverage should be comprehensive
- Tests should be fast and reliable

> Commentary: Ensures implementation is validated by evidence, not assumptions.

### Documentation Standards

- Update README files for functional changes
- Maintain inline code documentation
- Keep API documentation current
- Document breaking changes clearly

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Simplicity and Analysis Rule

- Always analyze the code and its context before making any changes.
- Never replace simple, efficient code (such as direct Map lookups) with more complex or less efficient alternatives (like unnecessary loops or property matching) unless there is a clear, justified need.
- Simplicity, clarity, and performance must be prioritized.
- Only introduce complexity if it is absolutely required and justified by the use case.

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

## Frontmatter Preservation Rule

- Always preserve the frontmatter (the section between --- at the top) in .mdc files.
- Never remove or modify it unless specifically updating metadata.
- All rule and documentation edits must be made below the frontmatter.

> Commentary: Captures a specific delivery control so contributors and agents apply this rule consistently.

