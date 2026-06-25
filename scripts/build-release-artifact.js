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

function copyEntry(sourceRelative, targetRelative, destinationRoot) {
  const sourcePath = path.join(REPO_ROOT, sourceRelative);
  const targetPath = path.join(destinationRoot, targetRelative);

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
    'with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as zf:',
    '    for current_root, _, files in os.walk(bundle_dir):',
    '        for file_name in files:',
    '            full_path = os.path.join(current_root, file_name)',
    '            rel_path = os.path.relpath(full_path, os.path.dirname(bundle_dir))',
    '            zf.write(full_path, rel_path)',
  ].join('\n');

  cp.execFileSync('python3', ['-c', pythonZip, bundleDir, zipPath], {
    cwd: REPO_ROOT,
    stdio: 'inherit',
  });
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

function flattenAssetName(targetPath, fileRelativePath = '') {
  const normalizedTarget = targetPath.replace(/\\/g, '/');
  if (normalizedTarget === 'agent.txt' || normalizedTarget === 'bootstrap.json') return normalizedTarget;
  if (normalizedTarget === 'roles') return `roles-${fileRelativePath.replace(/[\\/]/g, '-')}`;
  if (normalizedTarget === '.governance/rules') return path.posix.basename(fileRelativePath);
  if (normalizedTarget.startsWith('docs/')) return path.posix.basename(normalizedTarget);
  return normalizedTarget.replace(/[\\/]/g, '-');
}

function writeFlatAssets(flatDir) {
  const seen = new Set();

  for (const entry of RELEASE_FILE_MAP) {
    const sourcePath = path.join(REPO_ROOT, entry.source);
    const stat = fs.statSync(sourcePath);

    if (stat.isDirectory()) {
      for (const file of walkFiles(sourcePath)) {
        const flatName = flattenAssetName(entry.target, file.relativePath);
        if (seen.has(flatName)) {
          throw new Error(`Duplicate flat asset name generated: ${flatName}`);
        }
        seen.add(flatName);
        fs.copyFileSync(file.fullPath, path.join(flatDir, flatName));
      }
      continue;
    }

    const flatName = flattenAssetName(entry.target);
    if (seen.has(flatName)) {
      throw new Error(`Duplicate flat asset name generated: ${flatName}`);
    }
    seen.add(flatName);
    fs.copyFileSync(sourcePath, path.join(flatDir, flatName));
  }
}

function main() {
  const version = getReleaseVersion();
  const { commitSha, shortSha, branch } = getGitMetadata();
  const createdAt = new Date().toISOString();
  const releaseDir = path.join(artifactsRoot, version);
  const bundleName = `vibegov-${version}`;
  const bundleDir = path.join(releaseDir, bundleName);
  const flatDir = path.join(releaseDir, 'flat');
  const zipPath = path.join(releaseDir, `${bundleName}.zip`);

  removeDir(releaseDir);
  ensureDir(bundleDir);
  ensureDir(flatDir);

  for (const entry of RELEASE_FILE_MAP) {
    copyEntry(entry.source, entry.target, bundleDir);
  }

  writeFlatAssets(flatDir);

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
  fs.writeFileSync(path.join(flatDir, 'VERSION.txt'), versionFile);

  const flatAssets = fs.readdirSync(flatDir).sort();

  const releaseInfo = {
    kind: 'vibegov-agent-release',
    version,
    bundleName,
    bundleDir,
    flatDir,
    zipPath,
    createdAt,
    branch,
    commitSha,
    shortSha,
    sourceRepo: SOURCE_REPO,
    includedPaths: RELEASE_FILE_MAP.map((entry) => entry.target.replace(/\\/g, '/')).concat('VERSION.txt'),
    flatAssets,
  };
  fs.writeFileSync(path.join(releaseDir, 'release-info.json'), JSON.stringify(releaseInfo, null, 2));

  createZip(bundleDir, zipPath);

  console.log(`Created VibeGov release bundle: ${zipPath}`);
  console.log(`Prepared flat release assets: ${flatDir}`);
}

main();
