#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const cp = require('child_process');
const {
  REPO_ROOT,
  RELEASE_FILE_MAP,
  RELEASE_TIMEZONE,
  SOURCE_REPO,
  getGitMetadata,
  getReleaseVersion,
} = require('./release-utils');

const artifactsRoot = path.join(REPO_ROOT, 'artifacts', 'release');

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function removeDir(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

function copyEntry(sourceRelative, targetRelative, bundleDir) {
  const sourcePath = path.join(REPO_ROOT, sourceRelative);
  const targetPath = path.join(bundleDir, targetRelative);

  if (!fs.existsSync(sourcePath)) {
    throw new Error(`Missing release source: ${sourceRelative}`);
  }

  ensureDir(path.dirname(targetPath));
  fs.cpSync(sourcePath, targetPath, { recursive: true, force: true });
}

function createZip(bundleDir, zipPath) {
  if (fs.existsSync(zipPath)) {
    fs.rmSync(zipPath, { force: true });
  }

  if (process.platform === 'win32') {
    cp.execFileSync(
      'pwsh',
      [
        '-NoLogo',
        '-NoProfile',
        '-Command',
        `Compress-Archive -Path '${bundleDir.replace(/'/g, "''")}\\*' -DestinationPath '${zipPath.replace(/'/g, "''")}' -Force`,
      ],
      { cwd: REPO_ROOT, stdio: 'inherit' }
    );
    return;
  }

  const pythonZip = [
    'import os, sys, zipfile',
    'bundle_dir = sys.argv[1]',
    'zip_path = sys.argv[2]',
    'root_name = os.path.basename(bundle_dir)',
    'with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as zf:',
    '    for current_root, _, files in os.walk(bundle_dir):',
    '        for file_name in files:',
    '            full_path = os.path.join(current_root, file_name)',
    '            rel_path = os.path.relpath(full_path, os.path.dirname(bundle_dir))',
    '            zf.write(full_path, rel_path)',
  ].join('; ');

  cp.execFileSync('python3', ['-c', pythonZip, bundleDir, zipPath], {
    cwd: REPO_ROOT,
    stdio: 'inherit',
  });
}

function main() {
  const version = getReleaseVersion();
  const { commitSha, shortSha, branch } = getGitMetadata();
  const createdAt = new Date().toISOString();
  const releaseDir = path.join(artifactsRoot, version);
  const bundleName = `vibegov-${version}`;
  const bundleDir = path.join(releaseDir, bundleName);
  const zipPath = path.join(releaseDir, `${bundleName}.zip`);

  removeDir(releaseDir);
  ensureDir(bundleDir);

  for (const entry of RELEASE_FILE_MAP) {
    copyEntry(entry.source, entry.target, bundleDir);
  }

  const versionFile = [
    `version=${version}`,
    `commit=${commitSha}`,
    `shortSha=${shortSha}`,
    `branch=${branch}`,
    `sourceRepo=${SOURCE_REPO}`,
    `createdAt=${createdAt}`,
    `timeZone=${RELEASE_TIMEZONE}`,
    '',
  ].join('\n');
  fs.writeFileSync(path.join(bundleDir, 'VERSION.txt'), versionFile);

  const releaseInfo = {
    kind: 'vibegov-agent-release',
    version,
    bundleName,
    bundleDir,
    zipPath,
    createdAt,
    branch,
    commitSha,
    shortSha,
    sourceRepo: SOURCE_REPO,
    includedPaths: RELEASE_FILE_MAP.map((entry) => entry.target.replace(/\\/g, '/')).concat('VERSION.txt'),
  };
  fs.writeFileSync(path.join(releaseDir, 'release-info.json'), JSON.stringify(releaseInfo, null, 2));

  createZip(bundleDir, zipPath);

  console.log(`Created VibeGov release bundle: ${zipPath}`);
}

main();
