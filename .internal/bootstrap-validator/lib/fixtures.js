const path = require('path');
const { copyDir, ensureDir, makeTempRunDir, writeText } = require('./fs-utils');

function fixtureDir(validatorDir, fixtureName) {
  return path.join(validatorDir, 'fixtures', fixtureName);
}

function seedFixtureIfNeeded(fixtureName, workingDir) {
  if (fixtureName === 'empty-repo') {
    ensureDir(path.join(workingDir, 'src'));
    writeText(path.join(workingDir, 'src', 'app.js'), "console.log('fixture app');\n");
    writeText(path.join(workingDir, 'README.md'), '# Empty Repo Fixture\n');
  }
}

function prepareFixture(validatorDir, fixtureName) {
  const sourceDir = fixtureDir(validatorDir, fixtureName);
  const runDir = makeTempRunDir(`vibegov-${fixtureName}`);
  copyDir(sourceDir, runDir);
  seedFixtureIfNeeded(fixtureName, runDir);
  return runDir;
}

module.exports = { prepareFixture };
