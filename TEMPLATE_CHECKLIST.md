# Template Checklist

Use this checklist when creating a new project from this template.

## Copy and Rename
- Copy the template repository into the new project.
- Rename the project in `README.md`.
- Update any repository-specific references in `INDEX.md`.
- Ensure `.governance/` exists with `rules/`, `project/`, and `specs/`.
- Place governance assets under `.governance/` to keep them isolated from product folders.
- Sync active governance rules from `.governance/rules/gov-*.mdc` into `.cursor/rules/` for IDE rule loading.
- Add a root `AGENTS.md` that points to `.cursor/rules/*.mdc` as active rule sources for agents that read `AGENTS.md`.

## Project Guidance
- Create a project file from `.governance/project/PROJECT_TEMPLATE.md`.
- Remove or archive any example project-specific `.mdc` files.

## Spec Guidance
- Create app feature/change specs from `.governance/specs/SPEC_TEMPLATE.md` as needed.
- Confirm that each spec has intent, scope, and verification.

## Governance Guidance
- Review `.governance/rules/gov-*.mdc` and decide if any need tailoring for the new project.
- Keep governance guidance stable unless a documented exception is needed.

## Maintenance
- Add the first entry to `CHANGELOG.md`.
- Confirm onboarding path in `README.md` is accurate.
