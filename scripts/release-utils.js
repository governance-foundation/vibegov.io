#!/usr/bin/env node
const cp = require('child_process');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..');
const RELEASE_TIMEZONE = process.env.RELEASE_TIMEZONE || 'Australia/Sydney';
const SOURCE_REPO = 'governance-foundation/vibegov.io';

const RELEASE_FILE_MAP = [
  { source: path.join('static', 'agent.txt'), target: 'agent.txt' },
  { source: path.join('static', 'bootstrap.json'), target: 'bootstrap.json' },
  { source: path.join('static', 'roles'), target: 'roles' },
  { source: path.join('.governance', 'rules'), target: path.join('.governance', 'rules') },
  { source: path.join('docs', 'bootstrap.md'), target: path.join('docs', 'bootstrap.md') },
  { source: path.join('docs', 'quickstart.md'), target: path.join('docs', 'quickstart.md') },
  { source: path.join('docs', 'bootstrap-update.md'), target: path.join('docs', 'bootstrap-update.md') },
  { source: path.join('docs', 'bootstrap-review.md'), target: path.join('docs', 'bootstrap-review.md') },
  { source: path.join('docs', 'bootstrap-feedback-prompt.md'), target: path.join('docs', 'bootstrap-feedback-prompt.md') },
  { source: path.join('docs', 'github-project-bootstrap.md'), target: path.join('docs', 'github-project-bootstrap.md') },
  { source: path.join('docs', 'init-todo.md'), target: path.join('docs', 'init-todo.md') },
];

function capture(command, args, fallback = '') {
  try {
    return cp.execFileSync(command, args, {
      cwd: REPO_ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
      shell: process.platform === 'win32',
    }).trim();
  } catch {
    return fallback;
  }
}

function getReleaseDateParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-AU', {
    timeZone: RELEASE_TIMEZONE,
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).formatToParts(date);

  const lookup = Object.fromEntries(parts.filter((part) => part.type !== 'literal').map((part) => [part.type, part.value]));
  return {
    year: lookup.year,
    month: String(Number(lookup.month)),
    day: String(Number(lookup.day)),
  };
}

function getGitMetadata() {
  return {
    commitSha: capture('git', ['rev-parse', 'HEAD'], 'unknown'),
    shortSha: capture('git', ['rev-parse', '--short', 'HEAD'], 'unknown'),
    branch: capture('git', ['rev-parse', '--abbrev-ref', 'HEAD'], 'unknown'),
  };
}

function getReleaseVersion(date = new Date()) {
  const { year, month, day } = getReleaseDateParts(date);
  const { shortSha } = getGitMetadata();
  return `${year}.${month}.${day}-${shortSha}`;
}

module.exports = {
  REPO_ROOT,
  RELEASE_FILE_MAP,
  RELEASE_TIMEZONE,
  SOURCE_REPO,
  capture,
  getGitMetadata,
  getReleaseDateParts,
  getReleaseVersion,
};
