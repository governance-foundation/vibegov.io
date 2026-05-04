# Spec: How to avoid Death by 1000 prompts

## Intent

Publish a VibeGov article explaining why prompt accumulation is a governance failure and how teams should replace repeated prompt patching with durable rules, specs, memory, workflow, and closure behavior.

## Requirements

- `DB1K-001` The article must explain that the core failure mode is not one bad prompt but repeated prompt accumulation.
- `DB1K-002` The article must frame prompt accumulation as operational debt caused by missing governance.
- `DB1K-003` The article must distinguish prompts from durable controls such as rules, specs, memory, workflow, and governance.
- `DB1K-004` The article must give practical replacement patterns for recurring prompt patching.
- `DB1K-005` The article must tie the solution back to existing VibeGov concepts such as workflow, continuity, closure, and anti-slop discipline.

## Acceptance Criteria

- AC-001: a new blog post exists in VibeGov blog format for the topic
- AC-002: the article is aligned with VibeGov tone and concepts
- AC-003: related VibeGov docs are linked where useful
- AC-004: `npm run build` passes

## Evidence

- blog file inspection
- `npm run build`

## Related Issue

- #143 How to avoid Death by 1000 prompts
