## The Development Flow You’re Guiding

### 1. **Intent Before Action**

Everything starts with _why_ and _what_, never _how_.

- A task must exist **because of a real problem or outcome**
    
- No coding, prompting, or tooling until intent is explicit
    
- AI is not allowed to “discover” requirements
    

> _If intent isn’t written down, the work is not allowed to start._

---

### 2. **Specification as the Primary Artifact**

Specs are the centre of gravity — not code.

A spec must clearly define:

- Purpose and scope
    
- Inputs, outputs, constraints
    
- Non-goals and exclusions
    
- Success conditions
    
- Assumptions and risks
    

The spec is:

- Written for humans first
    
- Stable enough to audit
    
- The reference point for _all_ later decisions
    

> _Code is an implementation of the spec — never the other way around._

---

### 3. **Task Decomposition (Human-Owned)**

Work is broken down _before_ execution.

- Tasks are explicit, bounded, and reviewable
    
- Ownership is clear (human accountability is preserved)
    
- Tasks are sized to allow verification, not heroics
    

AI may **assist**, but:

- It cannot decide task boundaries
    
- It cannot invent tasks
    
- It cannot silently merge concerns
    

---

### 4. **Controlled AI Engagement**

AI is treated as a **tool under instruction**, not an agent.

Rules include:

- AI only works from provided specs and context
    
- No autonomous refactoring
    
- No “best practice” injection unless requested
    
- No scope expansion
    

Prompts are:

- Deterministic
    
- Context-bounded
    
- Reproducible
    

> _AI accelerates execution — it does not replace judgement._

---

### 5. **Implementation With Traceability**

All output must be traceable back to intent.

- Every code change maps to:
    
    - a spec section
        
    - a task
        
    - an explicit decision
        
- “Looks right” is not sufficient
    
- Convenience changes are rejected unless justified
    

This preserves:

- Legal defensibility
    
- Technical accountability
    
- Organisational memory
    

---

### 6. **Built-In Quality Gates**

Quality is not deferred to “later”.

Your flow enforces:

- Clear acceptance criteria
    
- Structural correctness (not just “it works”)
    
- Alignment with constraints and non-goals
    

Quality checks answer:

- Did we build _the right thing_?
    
- Did we build it _the agreed way_?
    
- Can someone else safely maintain this?
    

---

### 7. **Explicit Testing as Proof, Not Hope**

Testing exists to **prove claims**, not to feel safe.

- Tests map back to spec statements
    
- Edge cases are intentional, not accidental
    
- Failure modes are documented, not ignored
    

Importantly:

- AI-generated tests are reviewed like production code
    
- Coverage without intent is considered a failure
    

---

### 8. **Issue Handling Without Blame or Drift**

When things go wrong:

- Issues are logged as _system facts_, not personal failures
    
- Root cause > quick fix
    
- Spec updates are allowed — silent behaviour changes are not
    

This prevents:

- Spec rot
    
- “AI hallucination creep”
    
- Post-hoc rationalisation
    

---

### 9. **Communication as a First-Class System**

Communication is governed, not informal.

- Decisions are written down
    
- Changes are announced, not implied
    
- Ambiguity is resolved explicitly
    

This makes the system:

- Scalable across people
    
- Defensible in disputes
    
- Resilient to personnel changes
    

---

### 10. **Continuous Loop, Not a Waterfall**

The flow is cyclical but disciplined:

`Intent   → Specification     → Tasks       → AI-assisted Execution         → Quality & Testing           → Review             → Learnings → Spec Update (if needed)`

Crucially:

- The loop only moves forward with human sign-off
    
- Nothing auto-promotes itself
    

---

## The Big Idea (What You’re Actually Teaching)

You’re guiding people to understand that:

> **AI does not reduce the need for governance — it increases it.**

And more sharply:

- Speed without intent is liability
    
- Output without ownership is risk
    
- Intelligence without structure is chaos
    

What you’ve built is effectively a **modern SDLC designed for the age of AI**, where:

- Humans remain accountable
    
- AI remains powerful but constrained
    
- Systems remain explainable, auditable, and defensible
    

This is the delivery posture vibegov aims to bootstrap by default.