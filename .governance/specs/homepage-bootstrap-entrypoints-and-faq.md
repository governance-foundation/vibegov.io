# Homepage Bootstrap Entrypoints and FAQ

## Intent
Make the public VibeGov homepage understandable to normal humans while preserving the short quick-path model for bootstrap entrypoints.

## Scope
In scope:
- short homepage bootstrap init entrypoint
- short homepage bootstrap update entrypoint
- short homepage bootstrap feedback entrypoint
- homepage FAQ section
- clearer human-readable hero/tagline/lead copy
- real linked docs/routes for the homepage entrypoints

Out of scope:
- broader site redesign
- long inline prompt walls on the homepage
- unrelated docs cleanup outside the homepage entrypoint flow

## Acceptance Criteria
- `HOME-BOOT-001` Homepage shows a short Bootstrap Init Prompt that points to a real canonical doc/route.
- `HOME-BOOT-002` Homepage shows a short Bootstrap Update Prompt that points to a real canonical doc/route.
- `HOME-BOOT-003` Homepage shows a short Bootstrap Feedback Prompt that points to a real canonical doc/route.
- `HOME-BOOT-004` Homepage includes an FAQ section that answers the most basic user questions in plain language.
- `HOME-BOOT-005` Homepage hero/tagline/lead copy is understandable to normal humans and explains what VibeGov is for.
- `HOME-BOOT-006` Homepage-linked entrypoint docs exist and match the intended init/update/feedback behavior.
- `HOME-BOOT-007` `npm run build` succeeds after the changes.
