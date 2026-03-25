const fs = require('fs');
const path = require('path');

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function scenariosDir(validatorDir) {
  return path.join(validatorDir, 'scenarios');
}

function listFilesByPrefix(dir, prefix) {
  return fs.readdirSync(dir)
    .filter((name) => name.endsWith('.json') && name.startsWith(prefix))
    .map((name) => name.replace(prefix, '').replace(/\.json$/, ''))
    .sort();
}

function listScenarios(validatorDir) {
  return fs.readdirSync(scenariosDir(validatorDir))
    .filter((name) => name.endsWith('.json') && !name.startsWith('suite-'))
    .map((name) => readJson(path.join(scenariosDir(validatorDir), name)).id)
    .sort();
}

function listSuites(validatorDir) {
  return listFilesByPrefix(scenariosDir(validatorDir), 'suite-');
}

function loadScenario(validatorDir, scenarioId) {
  const dir = scenariosDir(validatorDir);
  const file = fs.readdirSync(dir)
    .find((name) => name.endsWith('.json') && !name.startsWith('suite-') && readJson(path.join(dir, name)).id === scenarioId);
  if (!file) throw new Error(`Scenario not found: ${scenarioId}`);
  return readJson(path.join(dir, file));
}

function loadSuite(validatorDir, suiteId) {
  const filePath = path.join(scenariosDir(validatorDir), `suite-${suiteId}.json`);
  if (!fs.existsSync(filePath)) throw new Error(`Suite not found: ${suiteId}`);
  return readJson(filePath);
}

module.exports = { listScenarios, listSuites, loadScenario, loadSuite };
