const path = require('path');
const { ensureDir, writeJson, writeText } = require('./fs-utils');

function nowStamp() {
  return new Date().toISOString().replace(/[:.]/g, '-');
}

function classify(score) {
  if (score >= 90) return 'production-ready';
  if (score >= 75) return 'needs-hardening';
  if (score >= 50) return 'inconsistent';
  return 'untrusted';
}

function computeScore(assertions) {
  if (!assertions.length) return 0;
  const passed = assertions.filter((item) => item.passed).length;
  return Math.round((passed / assertions.length) * 100);
}

function writeReport({ validatorDir, scenarioId, transcript, manifestBefore, manifestAfter, diff, assertions, artifacts, durationMs }) {
  const reportDir = path.join(validatorDir, 'reports', `${nowStamp()}-${scenarioId}`);
  ensureDir(reportDir);
  const score = computeScore(assertions);
  const hardFailure = assertions.some((item) => item.severity === 'hard' && !item.passed);
  const result = {
    scenarioId,
    provider: 'local-stub',
    model: 'n/a',
    passed: !hardFailure,
    hardFailure,
    score,
    classification: classify(score),
    durationMs,
    assertions,
    artifacts,
    evidence: {
      transcriptPath: path.join(reportDir, 'transcript.md'),
      manifestBeforePath: path.join(reportDir, 'manifest-before.json'),
      manifestAfterPath: path.join(reportDir, 'manifest-after.json'),
      diffPath: path.join(reportDir, 'diff.json'),
    },
    reportDir,
  };
  writeText(path.join(reportDir, 'transcript.md'), transcript);
  writeJson(path.join(reportDir, 'manifest-before.json'), manifestBefore);
  writeJson(path.join(reportDir, 'manifest-after.json'), manifestAfter);
  writeJson(path.join(reportDir, 'diff.json'), diff);
  writeJson(path.join(reportDir, 'result.json'), result);
  return result;
}

module.exports = { writeReport };
