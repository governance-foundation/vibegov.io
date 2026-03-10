const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..", "..");
const websiteRoot = path.resolve(__dirname, "..");
const governanceDir = path.join(repoRoot, ".governance", "rules");
const publishedDir = path.join(websiteRoot, "docs", "published");

const files = [
  { file: "gov-01-instructions.mdc", out: "gov-01-instructions.md", pos: 1 },
  { file: "gov-02-workflow.mdc", out: "gov-02-workflow.md", pos: 2 },
  { file: "gov-03-communication.mdc", out: "gov-03-communication.md", pos: 3 },
  { file: "gov-04-quality.mdc", out: "gov-04-quality.md", pos: 4 },
  { file: "gov-05-testing.mdc", out: "gov-05-testing.md", pos: 5 },
  { file: "gov-06-issues.mdc", out: "gov-06-issues.md", pos: 6 },
  { file: "gov-07-tasks.mdc", out: "gov-07-tasks.md", pos: 7 },
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

function commentaryFor(heading) {
  const h = heading.toLowerCase();
  if (h.includes("todo: review")) return "Keeps unresolved policy questions visible so governance wording is improved intentionally.";
  if (h.includes("scope / audience / update cadence")) return "Defines ownership and maintenance boundaries to stop rule drift and accidental misuse.";
  if (h.includes("mandatory")) return "Marks non-optional behavior to reduce ambiguity during execution.";
  if (h.includes("delivery loop")) return "Establishes the default end-to-end execution pattern so delivery quality is repeatable.";
  if (h.includes("issue")) return "Provides traceability and scope control so changes remain auditable.";
  if (h.includes("tdd") || h.includes("test")) return "Ensures implementation is validated by evidence, not assumptions.";
  if (h.includes("commit")) return "Preserves change history and links implementation back to tracked intent.";
  if (h.includes("quality")) return "Defines quality gates to reduce regressions and maintenance risk.";
  if (h.includes("communication")) return "Makes delivery communication actionable, concise, and consistent.";
  if (h.includes("task")) return "Keeps execution state visible and prioritized across ongoing work.";
  if (h.includes("template")) return "Standardizes input quality so future work starts from clear structure.";
  if (h.includes("reference")) return "Connects this rule to the rest of the governance system for reliable navigation.";
  return "Captures a specific delivery control so contributors and agents apply this rule consistently.";
}

function toPublishedDoc(sourceName, content, sidebarPosition) {
  const base = sourceName.replace(".mdc", "");
  const title = base.toUpperCase().replace(/-/g, " ");
  const blobUrl = `https://github.com/governance-foundation/vibegov/blob/main/.governance/rules/${sourceName}`;
  const rawUrl = `https://raw.githubusercontent.com/governance-foundation/vibegov/main/.governance/rules/${sourceName}`;

  const stripped = stripFrontmatter(content).replace(
    /\(mdc:\.governance\/rules\/([^)]+)\)/g,
    "(https://github.com/governance-foundation/vibegov/blob/main/.governance/rules/$1)"
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
  out.push("This page embeds the canonical rule text and adds commentary after each section to explain why the section exists.");
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
    out.push(`> Commentary: ${commentaryFor(headingText)}`);
    out.push("");
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
