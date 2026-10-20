# Homepage: simple next actions

Development mode. Governing issue: [#235](https://github.com/governance-foundation/vibegov.io/issues/235).

## Intent
The owner explicitly requires Hero → Quick paths → FAQ. Lead with outcomes and simple next actions; hide the boring governance machinery until visitors ask for it. Preserve useful detail on a linked subpage rather than removing access to it.

## Requirements
- HOME-PATH-001: After the shared header, show a concise hero, Quick paths, then a brief FAQ; no other homepage sections intervene.
- HOME-PATH-002: Quick paths offers understandable init/update/feedback actions, functional guide links and copy controls; retain the canonical prompts behind accessible native disclosures.
- HOME-PATH-003: Move all installation categories, useful paths, outcomes, audience guidance and worked-example material from the homepage to a clearly linked documentation page. Use stacked headings and scrollable path blocks, avoiding orphaned cards and mid-word path wrapping.
- HOME-PATH-004: Desktop and mobile (1440/390px) have contained layouts, visible actions and working navigation/reload. Preserve header/footer, artwork, blog content and canonical prompt contracts.
- HOME-PATH-005: Build/typecheck, all105 existing hero checks, full smoke suite plus responsive homepage coverage, screenshots and independent review precede delivery as a draft PR. Merge and deployment require separate explicit owner authorisation for this homepage change.

## Existing acceptance changes
HOME-BOOT-001..007 remain applicable. User clarification supersedes homepage-specific visibility for detailed audience/example content: smoke tests must verify it at its new linked location. Short action labels replace technical BI/BU/BF headings; the same canonical prompt contents must be shown after opening their disclosures. This explicitly authorised change to protected evidence must receive independent review. Existing non-homepage and hero assertions remain intact.

## Delivery and evidence
Baseline: clean develop2e625a2f501b0029510bdb8ffa29eb24932f50c3; feature/235-homepage-quick-paths-first. No authentication changes. Canonical specs are `.governance/specs`; no openspec tree exists. Issue/PR comments are the available workflow record. Validation and live evidence will be recorded there as work progresses.
