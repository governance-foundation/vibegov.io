# Spec: agent-consumable release packaging

## Summary
Define the VibeGov GitHub release boundary around the main files agents actually use, and automate packaging + GitHub release publication with canonical versioning.

## Intent
Release the real VibeGov consumable surface rather than the built docs site. Keep Pages deployment as a separate concern.

## Requirements
- `REL-PKG-001` GitHub release packaging must target the agent-consumable VibeGov surface rather than the Docusaurus build output.
- `REL-PKG-002` Canonical release version format is `yyyy.m.d-<shortsha>`.
- `REL-PKG-003` The release bundle must include `agent.txt` and `bootstrap.json` from the canonical static sources.
- `REL-PKG-004` The release bundle must include canonical `.governance/rules/`.
- `REL-PKG-005` The release bundle must include the canonical bootstrap/use docs that define the real install/use path.
- `REL-PKG-006` GitHub Pages deploy automation remains separate from GitHub release packaging.
- `REL-PKG-007` The repo provides a local packaging script that creates the versioned release bundle.
- `REL-PKG-008` The repo provides a GitHub Actions workflow that creates a GitHub release and uploads the packaged bundle.
- `REL-PKG-009` Release metadata included in the bundle must stay minimal and directly useful to consumers.

## Done when
- local release packaging produces the versioned agent-consumable bundle
- GitHub release automation publishes that bundle using the canonical version
- Pages deployment still uses the docs-site build path rather than the release bundle path
