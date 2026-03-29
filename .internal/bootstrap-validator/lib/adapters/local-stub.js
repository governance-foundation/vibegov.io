const fs = require('fs');
const path = require('path');
const os = require('os');
const { ensureDir, writeText } = require('../fs-utils');

function copyFile(src, dest) {
  ensureDir(path.dirname(dest));
  fs.copyFileSync(src, dest);
}

function installGovernance(rootDir, repoPath) {
  const governanceSrc = path.join(rootDir, '.governance');
  const rulesSrc = path.join(governanceSrc, 'rules');
  const rulesDest = path.join(repoPath, '.governance', 'rules');
  ensureDir(rulesDest);
  for (const file of fs.readdirSync(rulesSrc)) {
    copyFile(path.join(rulesSrc, file), path.join(rulesDest, file));
  }
  ensureDir(path.join(repoPath, '.governance', 'project'));
  ensureDir(path.join(repoPath, '.governance', 'specs'));
  writeText(path.join(repoPath, '.governance', 'project', 'PROJECT_INTENT.md'), '# Project Intent\n\nCreated by local-stub bootstrap validator.\n');
  writeText(path.join(repoPath, '.governance', 'specs', 'SPEC-001-bootstrap.md'), '# First Spec\n\nCreated by local-stub bootstrap validator.\n');
}

function buildTranscript(scenarioId) {
  const lines = [];
  lines.push('Bootstrap validator local-stub run');
  lines.push(`Scenario: ${scenarioId}`);
  lines.push('Created .governance/rules/, .governance/project/, and .governance/specs/.');
  lines.push('Installed GOV-01 through GOV-08.');
  lines.push('Created .governance/project/PROJECT_INTENT.md and .governance/specs/SPEC-001-bootstrap.md.');
  lines.push('Active governance sources: .governance/rules/*.mdc (canonical); no provider-native mirror path present.');
  if (scenarioId === 'bootstrap-gate') {
    lines.push('Bootstrap gate satisfied. Stopping before product implementation.');
    lines.push('Next step: begin implementation from a spec-bound issue only after review/confirmation.');
  } else {
    lines.push('Stopped before product-code implementation.');
  }
  return `${lines.join('\n')}\n`;
}

async function run({ rootDir, repoPath, scenario }) {
  if (!['empty-repo-bootstrap', 'bootstrap-gate', 'empty-repo-bootstrap-clean-session'].includes(scenario.id)) {
    throw new Error(`local-stub adapter does not support scenario: ${scenario.id}`);
  }
  installGovernance(rootDir, repoPath);
  const sessionEvidence = scenario.cleanSession
    ? {
        requested: true,
        adapter: 'local-stub',
        repoPath,
        repoPathIsTemp: repoPath.startsWith(os.tmpdir()),
        isolatedHomePath: path.join(os.tmpdir(), 'local-stub-clean-session'),
        isolatedHomeIsTemp: true,
        homeEnvOverrides: ['CODEX_HOME', 'HOME', 'USERPROFILE'],
        note: 'local-stub models clean-session evidence deterministically for harness coverage.',
      }
    : null;
  return {
    transcript: buildTranscript(scenario.id),
    rawOutput: { adapter: 'local-stub', scenarioId: scenario.id },
    exitKind: 'completed',
    durationMs: 25,
    sessionEvidence,
  };
}

module.exports = { run };
