const path = require('path');
const { execFileSync } = require('child_process');
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

function initGitRepo(runDir) {
  execFileSync('git', ['init', '-b', 'main'], { cwd: runDir, stdio: 'ignore' });
  execFileSync('git', ['config', 'user.name', 'VibeGov Validator'], { cwd: runDir, stdio: 'ignore' });
  execFileSync('git', ['config', 'user.email', 'validator@example.invalid'], { cwd: runDir, stdio: 'ignore' });
}

function prepareFixture(validatorDir, fixtureName) {
  const sourceDir = fixtureDir(validatorDir, fixtureName);
  const runDir = makeTempRunDir(`vibegov-${fixtureName}`);
  copyDir(sourceDir, runDir);
  seedFixtureIfNeeded(fixtureName, runDir);
  initGitRepo(runDir);
  return runDir;
}

module.exports = { prepareFixture };
