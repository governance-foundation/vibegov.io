# FAQ Pages, Homepage Surfacing, and Prompt Copy

## Intent
Make FAQ content first-class and reusable while improving the homepage bootstrap entrypoints with one-click copy.

## Scope
In scope:
- FAQ as separate docs pages
- homepage surfacing for selected FAQ items via frontmatter/tagging
- copy buttons for homepage bootstrap prompt cards

Out of scope:
- full site redesign
- complex CMS/search/filtering work

## Acceptance Criteria
- `FAQ-001` FAQ items exist as separate docs pages.
- `FAQ-002` FAQ docs can opt into homepage surfacing via simple frontmatter/tagging.
- `FAQ-003` Homepage automatically renders selected FAQ items from the tagged docs.
- `FAQ-004` Homepage prompt cards provide a one-click copy action.
- `FAQ-005` `npm run build` succeeds after the changes.
