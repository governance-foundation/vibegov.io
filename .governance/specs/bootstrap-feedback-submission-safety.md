# Bootstrap Feedback Submission Safety

## Intent
Make the bootstrap feedback flow complete and safe by explicitly directing users to raise a GitHub issue and to scrub or obfuscate PII, secrets, and sensitive environment data before sharing.

## Scope
In scope:
- bootstrap feedback doc wording
- contribution-page feedback wording
- homepage wording if needed to reinforce the flow

Out of scope:
- broader privacy policy work
- automated PII detection tooling

## Acceptance Criteria
- `FB-001` Bootstrap feedback guidance explicitly tells users to raise a GitHub issue with the resulting feedback.
- `FB-002` Bootstrap feedback guidance explicitly tells users to remove or obfuscate PII, secrets, tokens, emails, usernames, IDs, URLs, and environment-specific sensitive data before sharing.
- `FB-003` Contribute-page wording aligns with the feedback flow.
- `FB-004` Published site/docs changes still pass `npm run build`.
