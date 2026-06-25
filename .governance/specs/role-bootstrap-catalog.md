# Spec: role bootstrap catalog

## Summary
Add a public role bootstrap catalog and package role-pack assets so agents can fetch role entrypoints and manifests from stable VibeGov URLs.

## Intent
VibeGov should support role-specific agent bootstrap, not only generic repo bootstrap. A user should be able to choose a role, copy/open a role bootstrap prompt, and point an agent at stable role-pack files.

## Requirements
- `ROLE-CAT-001` The site must expose a public Roles page with a card for each supported role.
- `ROLE-CAT-002` Each role card must show the role mission and a bootstrap prompt suitable for agent copy/paste.
- `ROLE-CAT-003` Each role card must link to the role `BOOTSTRAP.md`, role manifest, and machine-readable role catalog.
- `ROLE-CAT-004` Role-pack files must be available through stable static URLs under `/roles/`.
- `ROLE-CAT-005` The machine-readable role catalog must list each role id, name, summary, stable entrypoint URL, manifest URL, and common role-policy references.
- `ROLE-CAT-009` The role catalog must include a Designer role responsible for UI/UX intent, Design Language System stewardship, component/state patterns, accessibility-by-design, and design acceptance criteria.
- `ROLE-CAT-010` Role packs must include a shared squad operating model covering Ready-as-contract, develop-as-integration-truth, automation-as-gate, neutral routing labels, role taxonomy, and repo-policy-mode flexibility.
- `ROLE-CAT-006` Release packaging must include the role-pack files in the structured bundle.
- `ROLE-CAT-007` Release packaging must include deterministic flat role asset names so agents can consume releases without reconstructing nested paths.
- `ROLE-CAT-008` The canonical bootstrap metadata should advertise role bootstrap sources.

## Done when
- `/roles` renders all supported role cards, including Designer.
- `/roles/index.json` and `/roles/<role>/BOOTSTRAP.md` are served as static assets.
- `npm run build` passes.
- `npm run release:build` includes role assets in bundle and flat release outputs.
