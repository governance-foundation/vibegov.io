const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const governanceDir = path.join(repoRoot, ".governance", "rules");
const publishedDir = path.join(repoRoot, "docs", "published");

const files = [
  { file: "gov-01-instructions.mdc", out: "gov-01-instructions.md", pos: 1 },
  { file: "gov-02-workflow.mdc", out: "gov-02-workflow.md", pos: 2 },
  { file: "gov-03-communication.mdc", out: "gov-03-communication.md", pos: 3 },
  { file: "gov-04-quality.mdc", out: "gov-04-quality.md", pos: 4 },
  { file: "gov-05-testing.mdc", out: "gov-05-testing.md", pos: 5 },
  { file: "gov-06-issues.mdc", out: "gov-06-issues.md", pos: 6 },
  { file: "gov-07-tasks.mdc", out: "gov-07-tasks.md", pos: 7 },
  { file: "gov-08-exploratory-review.mdc", out: "gov-08-exploratory-review.md", pos: 8 },
  { file: "gov-09-agent-continuity-bootstrap.mdc", out: "gov-09-agent-continuity-bootstrap.md", pos: 9 },
];

function stripFrontmatter(text) {
  const lines = text.split(/\r?\n/);
  if (lines[0] !== "---") return text;
  const second = lines.indexOf("---", 1);
  if (second === -1) return text;
  return lines.slice(second + 1).join("\n").trim() + "\n";
}

function normalizeHeading(line) {
  // Convert top-level heading to second-level inside docs page.
  return line.replace(/^#\s+/, "## ");
}

function commentaryKey(sourceName, heading) {
  const base = sourceName.replace(".mdc", "");
  const normalizedHeading = heading
    .replace(/^#+\s+/, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
  return `${base}:${normalizedHeading}`;
}

const commentaryBySection = new Map([
  ["gov-01-instructions:governance: instructions entrypoint", "Frames GOV-01 as the index that tells agents where rule authority starts."],
  ["gov-01-instructions:rule loading order", "Makes the rule stack explicit so agents load workflow, quality, and continuity guidance in a predictable sequence."],
  ["gov-01-instructions:source-of-truth layout", "Separates canonical rule, project, and spec locations so teams do not scatter governance across hidden files."],
  ["gov-01-instructions:instruction precedence", "Defines how to resolve conflicts when human requests, specs, rules, and tool defaults disagree."],
  ["gov-01-instructions:operating principle", "Keeps the rule set anchored on intent, traceability, and reviewable decisions instead of raw output volume."],

  ["gov-02-workflow:governance: core workflow", "Positions GOV-02 as the delivery spine that turns governed intent into verified change."],
  ["gov-02-workflow:delivery loop", "Establishes the Observe-to-Document path so implementation starts from context and ends with evidence."],
  ["gov-02-workflow:1) observe", "Requires problem, scope, constraints, and mode to be known before the work accelerates."],
  ["gov-02-workflow:2) plan", "Forces acceptance criteria, requirement coverage, and evidence expectations into view before editing begins."],
  ["gov-02-workflow:3) implement", "Constrains implementation to the smallest coherent change that matches the declared mode."],
  ["gov-02-workflow:4) verify", "Makes proof of intent satisfaction part of the delivery loop instead of a late confidence claim."],
  ["gov-02-workflow:5) document", "Preserves decisions, learnings, evidence, and follow-up state for the next contributor."],
  ["gov-02-workflow:branch and pull request workflow", "Defines protected branch behavior so governed changes remain reviewable from branch creation through promotion."],
  ["gov-02-workflow:explicit orchestration and bounded work units", "Keeps multi-agent or delegated work visible, owned, and recoverable."],
  ["gov-02-workflow:execution modes and parallel loops", "Separates Development, Exploration, and human feedback so each loop uses the right evidence standard."],
  ["gov-02-workflow:exploration mode", "Defines discovery work as backlog-hydrating review rather than unstructured browsing."],
  ["gov-02-workflow:development mode", "Defines delivery work as scoped change plus verification, traceability, and residual-risk reporting."],
  ["gov-02-workflow:release verification within development", "Treats release confidence as part of Development so promotion cannot bypass delivery evidence."],
  ["gov-02-workflow:mode discipline", "Prevents silent mode changes that blur discovery notes, implementation proof, and release readiness."],
  ["gov-02-workflow:backlog hydration", "Requires discovered gaps to become tracked work instead of disappearing into transient observations."],
  ["gov-02-workflow:scoped blocking, blocker escalation, and move-on behavior", "Turns blockers into bounded decisions so one stuck item does not freeze unrelated work."],
  ["gov-02-workflow:scope discipline", "Protects the agreed work boundary from quiet expansion and unrelated cleanup."],
  ["gov-02-workflow:typical issue pickup flow", "Shows the default lifecycle from queued issue to PR review, completion, or blocked state."],
  ["gov-02-workflow:completion standard", "Defines completion as satisfied intent plus captured evidence, traceability, and known residual risk."],
  ["gov-02-workflow:backlog continuity", "Explains when to continue through the queue and what to report when the loop stops."],

  ["gov-03-communication:governance: communication", "Positions communication as delivery control rather than decorative status chatter."],
  ["gov-03-communication:default style", "Sets the tone for short, evidence-oriented updates that help people act."],
  ["gov-03-communication:required communication events", "Identifies the moments when silence would hide decisions, risk, or completion claims."],
  ["gov-03-communication:good update format", "Gives updates a repeatable shape around state, evidence, blockers, and next action."],
  ["gov-03-communication:escalation communication", "Ensures blockers include proof, impact, and the exact help needed."],
  ["gov-03-communication:anti-patterns to avoid", "Names the update habits that make agent work harder to trust or review."],
  ["gov-03-communication:documentation communication", "Moves durable delivery context into repo artifacts instead of leaving it in chat."],

  ["gov-04-quality:governance: quality", "Frames quality as a governed delivery outcome, not subjective polish."],
  ["gov-04-quality:quality gate principle", "Requires every meaningful change to pass the checks that fit its risk and surface."],
  ["gov-04-quality:quality scaffolding principle", "Requires missing safety rails to be added before high-risk changes depend on them."],
  ["gov-04-quality:minimum quality checklist", "Defines the baseline review lens for scope, behavior, tests, docs, and maintainability."],
  ["gov-04-quality:change hygiene", "Keeps diffs small, readable, and tied to the tracked reason for change."],
  ["gov-04-quality:verification expectations", "Links validation strength to the surfaces and risks touched by the change."],
  ["gov-04-quality:anti-fake-completion principle", "Blocks completion claims that rely on happy-path confidence or missing evidence."],
  ["gov-04-quality:definition of done (quality view)", "Converts quality from a vague approval feeling into concrete done criteria."],

  ["gov-05-testing:governance: testing", "Frames testing as the proof system for governed implementation."],
  ["gov-05-testing:core testing principle", "Requires tests to answer whether the intended behavior actually works."],
  ["gov-05-testing:test design standards", "Keeps tests focused on meaningful behavior, failure modes, and regression risk."],
  ["gov-05-testing:testing layers (use what fits scope)", "Lets teams choose the right validation layer without pretending every change needs the same test shape."],
  ["gov-05-testing:unit-test expectations", "Defines when small focused tests should pin logic and edge-case behavior."],
  ["gov-05-testing:test-to-intent traceability", "Connects tests back to requirements so passing checks prove the right thing."],
  ["gov-05-testing:test execution expectations", "Requires test results to be captured honestly, including failures and skipped checks."],
  ["gov-05-testing:scenario coverage expectations", "Pushes validation beyond the happy path into states users actually encounter."],
  ["gov-05-testing:result classification", "Makes validation outcomes explicit enough for a reviewer to trust or challenge."],
  ["gov-05-testing:proof strength", "Ranks evidence quality so weak signals are not reported as strong proof."],
  ["gov-05-testing:persistence and post-action proof", "Requires checks that state survives the action paths users rely on."],
  ["gov-05-testing:execution expectations", "Defines how test runs should be invoked, recorded, and explained during delivery."],
  ["gov-05-testing:test quality anti-patterns", "Calls out tests that inflate confidence without covering real behavior."],

  ["gov-06-issues:governance: issues", "Frames issues as the traceability anchor for governed delivery."],
  ["gov-06-issues:purpose", "Explains why issue records need enough context to survive beyond the initiating chat."],
  ["gov-06-issues:when to use an issue", "Clarifies which work deserves a tracked issue instead of a transient note."],
  ["gov-06-issues:minimum issue quality", "Defines the information needed before an issue is safe to execute."],
  ["gov-06-issues:one-liner issue handling (mandatory)", "Prevents vague one-line requests from entering delivery without clarification."],
  ["gov-06-issues:lifecycle expectations", "Keeps issue state aligned with real work state from intake through closure."],
  ["gov-06-issues:active work visibility (mandatory)", "Requires current branch, PR, blocker, and evidence state to stay visible."],
  ["gov-06-issues:closure standard", "Stops issues from closing before acceptance criteria and evidence are recorded."],
  ["gov-06-issues:anti-patterns", "Names the issue habits that break traceability and make follow-up unreliable."],

  ["gov-07-tasks:governance: tasks", "Frames tasks as the execution-level breakdown under governed issues and specs."],
  ["gov-07-tasks:task principle", "Keeps tasks small enough to complete, verify, and hand off cleanly."],
  ["gov-07-tasks:good task characteristics", "Defines what makes a task executable instead of merely descriptive."],
  ["gov-07-tasks:decomposition guidance", "Shows how to split work without losing ownership or acceptance criteria."],
  ["gov-07-tasks:backlog hygiene", "Keeps task lists ordered, current, and useful for the next worker."],
  ["gov-07-tasks:execution discipline", "Prevents task churn by tying action to scope, evidence, and status."],
  ["gov-07-tasks:task completion evidence", "Requires each task to leave proof that its intended slice actually finished."],

  ["gov-08-exploratory-review:gov-08 — exploratory review", "Frames GOV-08 as the rule for turning exploratory review into usable delivery input."],
  ["gov-08-exploratory-review:purpose", "Explains why exploration must create evidence and backlog signal, not just impressions."],
  ["gov-08-exploratory-review:execution constraints", "Sets boundaries so exploratory review does not mutate product state or drift into coding."],
  ["gov-08-exploratory-review:operating model", "Defines how exploratory passes are scoped, observed, and translated into findings."],
  ["gov-08-exploratory-review:review anti-patterns to prevent", "Calls out browsing and opinion patterns that produce weak discovery evidence."],
  ["gov-08-exploratory-review:review posture", "Shifts exploratory work from surface browsing to goal-driven operational review."],
  ["gov-08-exploratory-review:scenario-matrix review (mandatory)", "Requires explicit scenario coverage so reviewers know what was and was not exercised."],
  ["gov-08-exploratory-review:persistence and mutation verification rule", "Checks whether changes survive reloads, transitions, and follow-up actions when persistence matters."],
  ["gov-08-exploratory-review:classification rules", "Standardizes finding outcomes so triage can distinguish validated behavior, gaps, and blockers."],
  ["gov-08-exploratory-review:surface and state coverage (mandatory)", "Expands review beyond default screens into empty, loading, error, permission, and post-action states."],
  ["gov-08-exploratory-review:required follow-up artifacts", "Turns discovered issues into tracked artifacts with enough context for delivery."],
  ["gov-08-exploratory-review:blocker severity model", "Separates hard blockers from lower-severity findings so escalation matches impact."],
  ["gov-08-exploratory-review:route-order heuristic", "Prioritizes review paths by user value and risk instead of arbitrary navigation order."],
  ["gov-08-exploratory-review:required exploratory output (per review unit)", "Defines the report fields needed for exploration to feed planning and delivery."],
  ["gov-08-exploratory-review:artifact completeness rule", "Blocks ceremonial reports by requiring each finding to link to usable follow-up state."],
  ["gov-08-exploratory-review:review completeness rubric", "Gives reviewers a quality bar for judging whether the exploration was deep enough."],
  ["gov-08-exploratory-review:done criteria", "Defines when an exploratory slice has enough evidence, findings, and follow-up to stop."],
  ["gov-08-exploratory-review:self-check before claiming completion", "Forces a final coverage and evidence review before exploration is reported as complete."],

  ["gov-09-agent-continuity-bootstrap:governance: agent continuity bootstrap", "Frames continuity as bootstrap infrastructure rather than optional memory hygiene."],
  ["gov-09-agent-continuity-bootstrap:continuity layers", "Defines the layers that preserve project context across sessions, tools, and agents."],
  ["gov-09-agent-continuity-bootstrap:checkpoint triggers", "Names the moments when a checkpoint should be written before context disappears."],
  ["gov-09-agent-continuity-bootstrap:session diaries and promotion", "Separates short-lived diary notes from durable repo truth that future runs should inherit."],
  ["gov-09-agent-continuity-bootstrap:bootstrap expectations", "Requires continuity structure to exist before teams rely on long-running agent work."],
  ["gov-09-agent-continuity-bootstrap:anti-patterns", "Calls out the memory and handoff habits that make resumed agent work fragile."],
]);

function commentaryFor(sourceName, heading) {
  return commentaryBySection.get(commentaryKey(sourceName, heading)) || null;
}

function toPublishedDoc(sourceName, content, sidebarPosition) {
  const base = sourceName.replace(".mdc", "");
  const title = base.toUpperCase().replace(/-/g, " ");
  const blobUrl = `https://github.com/governance-foundation/vibegov.io/blob/main/.governance/rules/${sourceName}`;
  const rawUrl = `https://raw.githubusercontent.com/governance-foundation/vibegov.io/main/.governance/rules/${sourceName}`;

  const stripped = stripFrontmatter(content).replace(
    /\(mdc:\.governance\/rules\/([^)]+)\)/g,
    "(https://github.com/governance-foundation/vibegov.io/blob/main/.governance/rules/$1)"
  );
  const lines = stripped.split(/\r?\n/);

  const out = [];
  out.push("---");
  out.push(`sidebar_position: ${sidebarPosition}`);
  out.push("---");
  out.push("");
  out.push(`# ${title}`);
  out.push("");
  out.push(`- Source rule: [${sourceName}](${blobUrl})`);
  out.push(`- Download raw file: [${sourceName}](${rawUrl})`);
  out.push("");
  out.push("This page embeds the canonical rule text and adds rule-specific commentary to explain why each section exists.");
  out.push("");

  let sectionBuffer = [];
  let sectionHeading = null;

  function flushSection() {
    if (!sectionHeading && sectionBuffer.length === 0) return;
    const headingText = (sectionHeading || "rule text").replace(/^#+\s+/, "");
    if (/^todo:\s*review$/i.test(headingText.trim())) {
      return;
    }
    if (sectionHeading) {
      out.push(normalizeHeading(sectionHeading));
    } else {
      out.push("## Rule Text");
    }
    out.push("");
    if (sectionBuffer.length > 0) {
      out.push(...sectionBuffer);
      out.push("");
    }
    const commentary = commentaryFor(sourceName, headingText);
    if (commentary) {
      out.push(`> Commentary: ${commentary}`);
      out.push("");
    }
  }

  for (const line of lines) {
    if (/^#{1,4}\s+/.test(line)) {
      flushSection();
      sectionHeading = line;
      sectionBuffer = [];
    } else {
      sectionBuffer.push(line);
    }
  }
  flushSection();

  return out.join("\n").replace(/\n{3,}/g, "\n\n");
}

for (const item of files) {
  const srcPath = path.join(governanceDir, item.file);
  const dstPath = path.join(publishedDir, item.out);
  const src = fs.readFileSync(srcPath, "utf8");
  const built = toPublishedDoc(item.file, src, item.pos);
  fs.writeFileSync(dstPath, built, "utf8");
}

console.log("Published governance docs regenerated from canonical .mdc files.");
