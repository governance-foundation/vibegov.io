const assert = require("assert");
const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const bootstrapPath = path.join(repoRoot, "static", "bootstrap.json");
const bootstrap = JSON.parse(fs.readFileSync(bootstrapPath, "utf8"));
const board = bootstrap.github_hosted_bootstrap?.board;

assert.ok(board, "static/bootstrap.json must define github_hosted_bootstrap.board");

assert.deepStrictEqual(
  board.requiredFields?.["Project Priority"],
  ["P0", "P1", "P2", "P3", "P4"],
  "Project Priority must use the canonical P0-P4 options"
);
assert.strictEqual(board.requiredFields?.Order, "number", "Order must be a number field");
assert.deepStrictEqual(
  board.requiredFields?.Priority,
  ["Urgent", "High", "Medium", "Low"],
  "Priority must remain the human urgency field"
);
assert.deepStrictEqual(
  board.defaultTableView?.visibleColumns,
  ["Title", "Assignees", "Status", "Project Priority", "Order", "Priority", "Repository"],
  "The default table view columns or their order do not match the canonical contract"
);
assert.strictEqual(board.defaultTableView?.layout, "table", "The canonical default view must use table layout");
assert.strictEqual(
  board.defaultTableView?.columnOrderMustMatch,
  true,
  "The canonical default view must enforce column order"
);
assert.strictEqual(
  board.defaultTableView?.normalizeOnAdopt,
  true,
  "Adopted boards must normalize the canonical default view"
);
assert.ok(
  board.allowedActions?.includes("copy_template"),
  "New-board setup must support copying a configured canonical template"
);
assert.strictEqual(
  board.automationOrdering?.projectPriorityHighest,
  "P0",
  "Project Priority automation must start at P0"
);
assert.strictEqual(
  board.automationOrdering?.projectPriorityLowest,
  "P4",
  "Project Priority automation must end at P4"
);

console.log("GitHub Project bootstrap contract is valid.");
