#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { REPO_ROOT } = require('./release-utils');

const releaseRoot = path.join(REPO_ROOT, 'artifacts', 'release');
const testRoot = path.join(REPO_ROOT, 'artifacts', 'test-runs');

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
  const releaseDir = process.argv[2] ? path.resolve(REPO_ROOT, process.argv[2]) : latestReleaseDir();
  const releaseInfoPath = path.join(releaseDir, 'release-info.json');

  if (!fs.existsSync(releaseInfoPath)) {
    throw new Error(`Missing release-info.json in release dir: ${releaseDir}`);
  }

  const releaseInfo = JSON.parse(fs.readFileSync(releaseInfoPath, 'utf8'));
  const ts = new Date().toISOString().replace(/[:]/g, '-').replace(/\..+$/, '');
  const runDirName = `${ts}_${releaseInfo.shortSha}`;
  const runDir = path.join(testRoot, runDirName);

  ensureDir(path.join(runDir, 'release'));
  ensureDir(path.join(runDir, 'evidence', 'prior-validation'));
  ensureDir(path.join(runDir, 'execution', 'results'));
  ensureDir(path.join(runDir, 'execution', 'logs'));
  ensureDir(path.join(runDir, 'execution', 'screenshots'));

  copyIfExists(path.join(releaseDir, releaseInfo.bundleName), path.join(runDir, 'release', releaseInfo.bundleName));
  copyIfExists(releaseInfo.zipPath, path.join(runDir, 'release', path.basename(releaseInfo.zipPath)));
  copyIfExists(releaseInfoPath, path.join(runDir, 'release', 'release-info.json'));

  const changeSummary = [
    '# Release Test Run Summary',
    '',
    `- Source repo: ${releaseInfo.sourceRepo}`,
    `- Version: ${releaseInfo.version}`,
    `- Commit SHA: ${releaseInfo.commitSha}`,
    `- Short SHA: ${releaseInfo.shortSha}`,
    `- Branch: ${releaseInfo.branch}`,
    `- Release bundle source: ${releaseInfo.zipPath}`,
    '',
    '## Testing focus',
    '- Verify that the packaged agent-consumable files are present and readable.',
    '- Verify that the release bundle matches the intended VibeGov bootstrap/governance surface.',
    '- Record any missing, stale, or contradictory release contents as tracked follow-up work.',
    '',
  ].join('\n');

  const checklist = [
    '# Release Test Execution Checklist',
    '',
    '- Version under test:',
    '- Expected release files present:',
    '- bootstrap entrypoints readable:',
    '- governance rules included:',
    '- bootstrap docs included:',
    '- Missing or stale files:',
    '- Result classification (Verified / Invalidated / Blocked / Deferred / Not applicable):',
    '- Residual risks / unverified items:',
    '- Follow-up artifact(s) created:',
    '',
  ].join('\n');

  const validationSummary = [
    '# Prior Validation Summary',
    '',
    '- Copy any existing validation/build/release evidence into this folder if you want it bundled with the run.',
    '',
  ].join('\n');

  fs.writeFileSync(path.join(runDir, 'change-summary.md'), changeSummary);
  fs.writeFileSync(path.join(runDir, 'evidence', 'prior-validation', 'validation-summary.md'), validationSummary);
  fs.writeFileSync(path.join(runDir, 'execution', 'test-execution-checklist.md'), checklist);

  const metadata = {
    kind: 'vibegov-release-test-run',
    createdAt: new Date().toISOString(),
    version: releaseInfo.version,
    commitSha: releaseInfo.commitSha,
    shortSha: releaseInfo.shortSha,
    branch: releaseInfo.branch,
    releaseDir,
    runDir,
  };
  fs.writeFileSync(path.join(runDir, 'run-manifest.json'), JSON.stringify(metadata, null, 2));

  console.log(`Prepared test run folder: ${runDir}`);
}

main();
