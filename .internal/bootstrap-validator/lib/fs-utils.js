const fs = require('fs');
const path = require('path');
const os = require('os');
const crypto = require('crypto');

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function copyDir(src, dest) {
  ensureDir(dest);
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(srcPath, destPath);
    else fs.copyFileSync(srcPath, destPath);
  }
}

function removeDir(dirPath) {
  if (fs.existsSync(dirPath)) fs.rmSync(dirPath, { recursive: true, force: true });
}

function hashFile(filePath) {
  const data = fs.readFileSync(filePath);
  return crypto.createHash('sha1').update(data).digest('hex');
}

function createManifest(rootDir) {
  const manifest = {};
  function walk(currentDir) {
    for (const entry of fs.readdirSync(currentDir, { withFileTypes: true })) {
      const fullPath = path.join(currentDir, entry.name);
      const relPath = path.relative(rootDir, fullPath).replace(/\\/g, '/');
      if (entry.isDirectory()) {
        walk(fullPath);
      } else {
        manifest[relPath] = {
          size: fs.statSync(fullPath).size,
          hash: hashFile(fullPath),
        };
      }
    }
  }
  walk(rootDir);
  return manifest;
}

function categorizePath(relPath) {
  const normalized = relPath.replace(/\\/g, '/');
  if (normalized.startsWith('.governance/')) return 'governance';
  if (normalized.startsWith('.internal/')) return 'internal';
  if (/^(src|app|components|pages|api|domain)\//.test(normalized)) return 'product-code';
  if (/^(README|docs\/|blog\/)/.test(normalized)) return 'docs';
  return 'other';
}

function diffManifests(before, after) {
  const created = [];
  const modified = [];
  const deleted = [];
  const allPaths = new Set([...Object.keys(before), ...Object.keys(after)]);
  for (const relPath of [...allPaths].sort()) {
    if (!before[relPath]) created.push(relPath);
    else if (!after[relPath]) deleted.push(relPath);
    else if (before[relPath].hash !== after[relPath].hash) modified.push(relPath);
  }
  return {
    created,
    modified,
    deleted,
    categories: {
      created: created.map((p) => ({ path: p, category: categorizePath(p) })),
      modified: modified.map((p) => ({ path: p, category: categorizePath(p) })),
      deleted: deleted.map((p) => ({ path: p, category: categorizePath(p) })),
    },
  };
}

function makeTempRunDir(prefix) {
  return fs.mkdtempSync(path.join(os.tmpdir(), `${prefix}-`));
}

function writeJson(filePath, value) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

function writeText(filePath, value) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, value, 'utf8');
}

module.exports = { ensureDir, copyDir, removeDir, createManifest, diffManifests, makeTempRunDir, writeJson, writeText, categorizePath };
