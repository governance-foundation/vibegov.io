## Why `.governance/` Exists

`.governance/` keeps delivery guidance isolated from product code.

This prevents governance files from being mixed into app folders and makes adoption simple: copy one folder, then sync rules into `<provider-rules-path>/` for IDE loading.

## Folder Roles

- `.governance/rules/`: Cross-project rules (`gov-*.mdc`) that define delivery behavior defaults.
- `.governance/project/`: Project-level intent (`PROJECT_TEMPLATE.md`) for system purpose, constraints, and non-negotiables.
- `.governance/specs/`: Application feature/change specs (`SPEC_TEMPLATE.md`) for scoped behavior, acceptance, and verification.

## Governance vs Project

VibeGov separates guidance into two complementary layers: **governance** and **project**.

This separation exists to keep delivery knowledge reusable, while allowing each project to remain grounded in its own context.

---

### Governance

**Governance describes how software delivery behaves when it is done well.**

It captures guidance that applies **across projects**, regardless of technology, domain, or team.

Governance covers things like:
- how intent is preserved over time
- what “done” usually includes
- how ambiguity should be surfaced
- how changes are planned, verified, and released
- how delivery supports long-term change, not just short-term output

Governance is:
- stable
- opinionated
- slow to change
- shaped by repeated experience and failure modes

It is not a checklist or a workflow.  
It provides **direction**, not enforcement.

Think of governance as:

> *“The delivery instincts an experienced developer brings to any project.”*

---

### Project

**Project guidance describes what matters for this specific system.**

It captures context that is:
- domain-specific
- system-specific
- expected to evolve as the project evolves

Project guidance may include:
- the purpose of the system
- key features and behaviours
- important trade-offs or constraints
- decisions and assumptions
- areas that are risky, sensitive, or likely to change

Project guidance is:
- contextual
- expected to change
- owned by the people building the system
- where intent for this system lives

Think of project guidance as:

> *“What someone new would need to understand why this system exists and how it should behave.”*

---

### Specs

**Spec guidance describes intent for one feature/change area.**

It is used when a feature/change needs explicit scope, acceptance criteria, and delivery notes without bloating the project-level file.

Spec guidance is:
- scoped
- short-lived or iterated
- linked to project intent
- used to reduce ambiguity before implementation

---

### How They Work Together

Governance provides **direction**.  
Project guidance provides **context**.

Governance answers:

> *“How do we usually deliver software well?”*

Project guidance answers:

> *“What matters here?”*

Both are needed.

Without governance, projects reinvent delivery through trial and error.  
Without project context, delivery becomes generic and detached from intent.

VibeGov exists to keep these two concerns **separate but connected**.

---

### A Simple Rule of Thumb

If guidance would apply to *most* projects → it belongs in **governance**.  
If guidance only makes sense *for this system* → it belongs in **project**.


