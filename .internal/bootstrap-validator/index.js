#!/usr/bin/env node
const path = require('path');
const { runScenarioById, runSuiteById } = require('./lib/runner');

function parseArgs(argv) {
  const args = { adapter: 'local-stub' };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--scenario') args.scenario = argv[++i];
    else if (arg === '--suite') args.suite = argv[++i];
    else if (arg === '--adapter') args.adapter = argv[++i];
    else if (arg === '--list') args.list = true;
    else if (arg === '--help' || arg === '-h') args.help = true;
  }
  return args;
}

function printHelp() {
  console.log(`VibeGov Bootstrap Validator\n\nUsage:\n  npm run bootstrap-validator -- --scenario <id> [--adapter local-stub|codex-cli]\n  npm run bootstrap-validator -- --suite <id> [--adapter local-stub|codex-cli]\n  npm run bootstrap-validator -- --list\n\nExamples:\n  npm run bootstrap-validator -- --scenario empty-repo-bootstrap\n  npm run bootstrap-validator -- --scenario empty-repo-bootstrap-clean-session\n  npm run bootstrap-validator -- --scenario bootstrap-gate\n  npm run bootstrap-validator -- --scenario empty-repo-bootstrap-clean-session --adapter codex-cli\n  npm run bootstrap-validator -- --suite phase1\n`);
}

async function main() {
  const rootDir = path.resolve(__dirname, '..', '..');
  const validatorDir = __dirname;
  const args = parseArgs(process.argv.slice(2));

  if (args.help || (!args.list && !args.scenario && !args.suite)) {
    printHelp();
    process.exit(args.help ? 0 : 1);
  }

  if (args.list) {
    const { listScenarios, listSuites } = require('./lib/scenarios');
    console.log('Scenarios:');
    for (const item of listScenarios(validatorDir)) console.log(`- ${item}`);
    console.log('Suites:');
    for (const item of listSuites(validatorDir)) console.log(`- ${item}`);
    return;
  }

  if (args.scenario) {
    const result = await runScenarioById({ validatorDir, rootDir, scenarioId: args.scenario, adapterId: args.adapter });
    console.log(JSON.stringify({ scenarioId: result.scenarioId, passed: result.passed, score: result.score, reportDir: result.reportDir }, null, 2));
    process.exit(result.passed ? 0 : 2);
  }

  const result = await runSuiteById({ validatorDir, rootDir, suiteId: args.suite, adapterId: args.adapter });
  console.log(JSON.stringify(result, null, 2));
  process.exit(result.failed > 0 ? 2 : 0);
}

main().catch((error) => {
  console.error(error.stack || String(error));
  process.exit(1);
});
