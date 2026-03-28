# AI Throughput and Governance Series

## Intent
Create a public-facing content series that explains how AI-native delivery should be measured and governed. The anchor piece should define a practical model that separates token usage from throughput and delivered value, and the follow-up pieces should extend that model into budgeting, governance, organizational control, and risk.

## Scope
In scope:
- add the anchor essay for the series
- define tokens as an input/fuel metric rather than a standalone productivity metric
- define governance movement as the throughput signal for AI-native delivery
- distinguish throughput from delivered value
- ground the model in concrete delivery artifacts such as issues, specs, validation, PRs, blockers, release-readiness, and traceability
- leave room for follow-up posts on budgets, org-governed runtime, progress-over-perfection, and unmanaged AI capacity

Out of scope:
- detailed legal analysis of IP/employment law
- provider-specific pricing or vendor comparisons
- converting the essay into a policy template for every organization
- implementing telemetry/analytics systems inside VibeGov itself

## Acceptance Criteria
- `AI-TG-001` A publishable anchor blog post exists that explains why token usage alone is not a sufficient AI productivity metric.
- `AI-TG-002` The same post defines a three-layer model: effort/input, throughput/progress, and delivered value.
- `AI-TG-003` The same post explains governance movement using concrete artifacts such as issue clarification, spec binding, validation, PR movement, blocker handling, and release-readiness checks.
- `AI-TG-004` The post explicitly frames progress over perfection as a more useful operating principle than activity theater or false precision.
- `AI-TG-005` The tone stays thoughtful, strategic, and governance-centered rather than hype-driven or anti-AI.
- `AI-TG-006` `npm run build` succeeds after the content changes.

## Tests and Evidence
- inspect `.governance/specs/ai-throughput-governance-series.md`
- inspect the new anchor blog post
- run `npm run build`

## Documentation Impact
- add `.governance/specs/ai-throughput-governance-series.md`
- add a new blog post for the anchor essay

## Verification
Verification is content-and-build driven. Success requires the anchor post to present a coherent measurement model for AI-native delivery, tie that model back to governed delivery artifacts, and compile successfully in the site build.

## Change Notes
- Keep the argument strong but careful: tokens matter, but mostly as fuel/input, cost, and efficiency signals rather than direct proof of value.
- The piece should be accessible to founders, engineering leaders, operators, and governance-minded practitioners.
- Prefer concrete workflow examples over abstract AI rhetoric.
