#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const cp = require('child_process');

const repoRoot = path.resolve(__dirname, '..');
const buildDir = path.join(repoRoot, 'build');
const artifactsRoot = path.join(repoRoot, 'artifacts', 'release');

function run(command, args, options = {}) {
  cp.execFileSync(command, args, {
    cwd: repoRoot,
    stdio: 'inherit',
    shell: process.platform === 'win32',
    ...options,
  });
}

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

function removeDir(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

function copyDir(src, dest) {
  ensureDir(dest);
  fs.cpSync(src, dest, { recursive: true, force: true });
}

function sha256File(filePath) {
  const hash = crypto.createHash('sha256');
  hash.update(fs.readFileSync(filePath));
  return hash.digest('hex');
}

function walkFiles(dir, baseDir = dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkFiles(fullPath, baseDir));
    } else {
      files.push({
        fullPath,
        relativePath: path.relative(baseDir, fullPath).replace(/\\/g, '/'),
      });
    }
  }
  return files;
}

function checksumDirectory(dir) {
  return walkFiles(dir).map(({ fullPath, relativePath }) => ({
    path: relativePath,
    sha256: sha256File(fullPath),
    bytes: fs.statSync(fullPath).size,
  }));
}

function main() {
  const commitSha = capture('git', ['rev-parse', 'HEAD'], 'unknown');
  const shortSha = capture('git', ['rev-parse', '--short', 'HEAD'], 'unknown');
  const branch = capture('git', ['rev-parse', '--abbrev-ref', 'HEAD'], 'unknown');
  const timestamp = new Date().toISOString();

  run('npm', ['run', 'build']);

  if (!fs.existsSync(buildDir)) {
    throw new Error('Expected build/ directory was not produced by npm run build.');
  }

  const releaseDir = path.join(artifactsRoot, shortSha);
  const artifactDir = path.join(releaseDir, 'artifact');
  removeDir(releaseDir);
  ensureDir(releaseDir);
  copyDir(buildDir, artifactDir);

  const checksums = checksumDirectory(artifactDir);
  const manifest = {
    kind: 'vibegov-release-artifact',
    createdAt: timestamp,
    sourceRepo: 'governance-foundation/vibegov.io',
    branch,
    commitSha,
    shortSha,
    buildCommand: 'npm run build',
    artifactRoot: 'artifact',
    artifactType: 'docusaurus-static-site',
    artifactFileCount: checksums.length,
    artifactFiles: checksums,
  };

  fs.writeFileSync(path.join(releaseDir, 'artifact-manifest.json'), JSON.stringify(manifest, null, 2));
  fs.writeFileSync(
    path.join(releaseDir, 'checksums.txt'),
    checksums.map((item) => `${item.sha256}  artifact/${item.path}`).join('\n') + '\n'
  );

  console.log(`Release artifact created: ${releaseDir}`);
}

main();
