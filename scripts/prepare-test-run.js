#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const cp = require('child_process');

const repoRoot = path.resolve(__dirname, '..');
const releaseRoot = path.join(repoRoot, 'artifacts', 'release');
const testRoot = path.join(repoRoot, 'artifacts', 'test-runs');

function capture(command, args, fallback = '') {
  try {
    return cp.execFileSync(command, args, {
      cwd: repoRoot,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
      shell: process.platform === 'win32',
    }).trim();
  } catch {
    return fallback;
  }
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function copyIfExists(src, dest) {
  if (!fs.existsSync(src)) return false;
  ensureDir(path.dirname(dest));
  fs.cpSync(src, dest, { recursive: true, force: true });
  return true;
}

function latestReleaseDir() {
  if (!fs.existsSync(releaseRoot)) {
    throw new Error('No release artifacts found. Run npm run release:build first.');
  }
  const dirs = fs.readdirSync(releaseRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => ({
      name: entry.name,
      fullPath: path.join(releaseRoot, entry.name),
      mtimeMs: fs.statSync(path.join(releaseRoot, entry.name)).mtimeMs,
    }))
    .sort((a, b) => b.mtimeMs - a.mtimeMs);

  if (!dirs.length) {
    throw new Error('No release artifact directories found. Run npm run release:build first.');
  }
  return dirs[0].fullPath;
}

function main() {
  const releaseDir = process.argv[2] ? path.resolve(repoRoot, process.argv[2]) : latestReleaseDir();
  const manifestPath = path.join(releaseDir, 'artifact-manifest.json');

  if (!fs.existsSync(manifestPath)) {
    throw new Error(`Missing artifact-manifest.json in release dir: ${releaseDir}`);
  }

  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const ts = new Date().toISOString().replace(/[:]/g, '-').replace(/\..+$/, '');
  const runDirName = `${ts}_${manifest.shortSha}`;
  const runDir = path.join(testRoot, runDirName);

  ensureDir(runDir);
  ensureDir(path.join(runDir, 'artifact'));
  ensureDir(path.join(runDir, 'governance', 'specs'));
  ensureDir(path.join(runDir, 'evidence', 'prior-validation'));
  ensureDir(path.join(runDir, 'execution', 'results'));
  ensureDir(path.join(runDir, 'execution', 'logs'));
  ensureDir(path.join(runDir, 'execution', 'screenshots'));

  copyIfExists(path.join(releaseDir, 'artifact'), path.join(runDir, 'artifact'));
  copyIfExists(path.join(releaseDir, 'artifact-manifest.json'), path.join(runDir, 'governance', 'artifact-manifest.json'));
  copyIfExists(path.join(releaseDir, 'checksums.txt'), path.join(runDir, 'governance', 'checksums.txt'));
  copyIfExists(path.join(repoRoot, '.governance', 'specs'), path.join(runDir, 'governance', 'specs'));
  copyIfExists(path.join(repoRoot, 'docs', 'test-execution-expectations.md'), path.join(runDir, 'governance', 'test-execution-expectations.md'));
  copyIfExists(path.join(repoRoot, 'docs', 'quality-scaffolding-and-completeness-rubric.md'), path.join(runDir, 'governance', 'quality-scaffolding-and-completeness-rubric.md'));

  const issueSummary = [
    '# Test Run Summary',
    '',
    `- Source repo: governance-foundation/vibegov.io`,
    `- Commit SHA: ${manifest.commitSha}`,
    `- Short SHA: ${manifest.shortSha}`,
    `- Branch: ${manifest.branch}`,
    `- Release artifact source: ${releaseDir}`,
    '',
    '## Testing focus',
    '- Verify the candidate against the intended change set and relevant governance/spec expectations.',
    '- Record verified, invalidated, blocked, deferred, and not-applicable results explicitly.',
    '- Convert missing completeness into tracked follow-up work instead of leaving it invisible.',
    '',
  ].join('\n');

  const checklist = [
    '# Test Execution Checklist',
    '',
    '- Claim under test:',
    '- Requirement / acceptance criterion:',
    '- Scenario classes exercised:',
    '- Scenario classes blocked / deferred / not applicable:',
    '- Evidence type:',
    '- Result classification (Verified / Invalidated / Blocked / Deferred / Not applicable):',
    '- Proof strength (direct / partial / surrogate-only):',
    '- Persistence / post-action checks:',
    '- Residual risks / unverified items:',
    '- Follow-up artifact(s) created:',
    '',
  ].join('\n');

  const validationSummary = [
    '# Prior Validation Summary',
    '',
    `- Build command: ${manifest.buildCommand}`,
    '- Copy any existing test/build/bootstrap validation evidence into this folder if you want it bundled with the run.',
    '',
  ].join('\n');

  fs.writeFileSync(path.join(runDir, 'governance', 'change-summary.md'), issueSummary);
  fs.writeFileSync(path.join(runDir, 'evidence', 'prior-validation', 'validation-summary.md'), validationSummary);
  fs.writeFileSync(path.join(runDir, 'execution', 'test-execution-checklist.md'), checklist);

  const metadata = {
    kind: 'vibegov-test-run',
    createdAt: new Date().toISOString(),
    commitSha: manifest.commitSha,
    shortSha: manifest.shortSha,
    branch: manifest.branch,
    releaseDir,
    runDir,
  };
  fs.writeFileSync(path.join(runDir, 'run-manifest.json'), JSON.stringify(metadata, null, 2));

  console.log(`Prepared test run folder: ${runDir}`);
}

main();
