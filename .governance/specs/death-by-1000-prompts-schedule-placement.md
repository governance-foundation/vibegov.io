# Spec: Death by 1000 Prompts Schedule Placement

## Intent

Add the newly published VibeGov article `How to avoid Death by 1000 prompts` to the canonical editorial scheduling artifacts.

## Requirements

- `DB1KS-001` The narrative schedule must place the article explicitly in the ordered sequence.
- `DB1KS-002` The daily posting queue must include the article with canonical URL and suggested Governance Foundation / Max repost copy.
- `DB1KS-003` The insertion should preserve narrative coherence rather than appending blindly.
- `DB1KS-004` Once this article is scheduled, it should no longer remain listed as a missing net-new bridge article.

## Acceptance Criteria

- AC-001: `.governance/project/LINKEDIN_ARTICLE_NARRATIVE_SCHEDULE.md` is updated with the article as a scheduled existing piece.
- AC-002: `.governance/project/LINKEDIN_DAILY_POSTING_QUEUE.md` contains a queue entry for the article.
- AC-003: the remaining bridge-article list no longer treats this article as missing.

## Evidence

- file inspection

## Related Issue

- #145 Add death by 1000 prompts article to VibeGov LinkedIn schedule
