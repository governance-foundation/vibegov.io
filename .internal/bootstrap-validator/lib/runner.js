const fs = require('fs');
const path = require('path');
const { loadScenario, loadSuite } = require('./scenarios');
const { prepareFixture } = require('./fixtures');
const { createManifest, diffManifests, removeDir } = require('./fs-utils');
const { runAssertions } = require('./assertions');
const { writeReport } = require('./report');

function getAdapter(adapterId) {
  if (adapterId === 'local-stub') return require('./adapters/local-stub');
  throw new Error(`Unsupported adapter: ${adapterId}`);
}

function collectArtifacts(repoPath, diff) {
  const filesCreated = diff.created;
  const filesModified = diff.modified;
  const issues = [];
  const specGaps = [];
  return { filesCreated, filesModified, issues, specGaps, repoPath };
}

async function executeScenario({ validatorDir, rootDir, scenario, adapterId }) {
  const repoPath = prepareFixture(validatorDir, scenario.fixture);
  const manifestBefore = createManifest(repoPath);
  const startedAt = Date.now();
  let transcript = '';
  try {
    const adapter = getAdapter(adapterId);
    const runResult = await adapter.run({ rootDir, repoPath, scenario });
    transcript = runResult.transcript || '';
    const manifestAfter = createManifest(repoPath);
    const diff = diffManifests(manifestBefore, manifestAfter);
    const assertions = runAssertions(scenario.assertions, {
      repoPath,
      transcript,
      manifestBefore,
      manifestAfter,
      diff,
      scenario,
    });
    return writeReport({
      validatorDir,
      scenarioId: scenario.id,
      transcript,
      manifestBefore,
      manifestAfter,
      diff,
      assertions,
      artifacts: collectArtifacts(repoPath, diff),
      durationMs: Date.now() - startedAt,
    });
  } finally {
    removeDir(repoPath);
  }
}

async function runScenarioById({ validatorDir, rootDir, scenarioId, adapterId }) {
  const scenario = loadScenario(validatorDir, scenarioId);
  return executeScenario({ validatorDir, rootDir, scenario, adapterId });
}

async function runSuiteById({ validatorDir, rootDir, suiteId, adapterId }) {
  const suite = loadSuite(validatorDir, suiteId);
  const results = [];
  for (const scenarioId of suite.scenarios) {
    results.push(await runScenarioById({ validatorDir, rootDir, scenarioId, adapterId }));
  }
  return {
    suiteId: suite.id,
    total: results.length,
    passed: results.filter((item) => item.passed).length,
    failed: results.filter((item) => !item.passed).length,
    reportDirs: results.map((item) => item.reportDir),
    results: results.map((item) => ({ scenarioId: item.scenarioId, passed: item.passed, score: item.score, reportDir: item.reportDir })),
  };
}

module.exports = { runScenarioById, runSuiteById };
