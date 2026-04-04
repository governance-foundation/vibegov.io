# Site Theme Detection and Precedence

## Intent
Make VibeGov respect the user's existing OS/browser light-dark preference on first load while preserving explicit site-level theme choice as the stronger authority for later visits.

## Scope
In scope:
- initial theme defaulting when no VibeGov theme override has been stored
- explicit precedence rules between stored site choice and OS/browser preference
- using Docusaurus theme behavior that applies the correct theme as early as practical

Out of scope:
- redesigning theme visuals
- replacing Docusaurus theme switching UX
- adding new theme variants beyond light and dark

## Acceptance Criteria
- `THEME-001` Initial site theme follows the user's OS/browser preference when no VibeGov-specific override is stored.
- `THEME-002` A stored explicit VibeGov theme choice remains authoritative on later visits.
- `THEME-003` Theme precedence/defaulting behavior is documented clearly enough to implement and verify.
- `THEME-004` The implementation applies the initial theme early enough to minimize flash-of-wrong-theme behavior.
- `THEME-005` `npm run build` succeeds after the configuration change.

## Tests and Evidence
- inspect the site config to confirm color-mode preference detection is enabled
- verify the Docusaurus build succeeds
- verify generated output still includes normal color-mode support without removing manual switching

## Documentation Impact
- add this OpenSpec file for the theme precedence rules

## Verification
- manual verification with OS/browser preference set to light and dark when no stored VibeGov theme override exists
- verification with an explicit stored theme override to confirm it wins over OS/browser preference
- regression check that the existing manual theme switch still works

## Change Notes
- Use built-in Docusaurus color-mode precedence rather than custom theme bootstrap code.
- Prefer configuration-driven no-flash behavior over bespoke client-side scripts unless a later issue proves the built-in path is insufficient.
