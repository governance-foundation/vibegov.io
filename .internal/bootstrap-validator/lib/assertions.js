const fs = require('fs');
const path = require('path');

function exists(repoPath, relPath) {
  return fs.existsSync(path.join(repoPath, relPath));
}

function listRuleFiles(repoPath) {
  const rulesDir = path.join(repoPath, '.governance', 'rules');
  if (!fs.existsSync(rulesDir)) return [];
  return fs.readdirSync(rulesDir).sort();
}

function loadCanonicalBootstrapPrompt(rootDir, scenario) {
  const promptFile = scenario && scenario.prompt ? scenario.prompt : 'canonical-bootstrap.txt';
  const promptPath = path.join(rootDir, '.internal', 'bootstrap-validator', 'prompts', promptFile);
  return fs.existsSync(promptPath) ? fs.readFileSync(promptPath, 'utf8') : '';
}

const EXPECTED_RULES = [
  'gov-01-instructions.mdc',
  'gov-02-workflow.mdc',
  'gov-03-communication.mdc',
  'gov-04-quality.mdc',
  'gov-05-testing.mdc',
  'gov-06-issues.mdc',
  'gov-07-tasks.mdc',
  'gov-08-exploratory-review.mdc',
];

function makeResult(id, passed, severity, note, evidence) {
  return { id, passed, severity, note, evidence };
}

function isTruthyPath(value) {
  return typeof value === 'string' && value.length > 0;
}

const handlers = {
  governanceDirsExist(ctx) {
    const required = ['.governance/rules', '.governance/project', '.governance/specs'];
    const missing = required.filter((item) => !exists(ctx.repoPath, item));
    return makeResult('governanceDirsExist', missing.length === 0, 'hard', missing.length ? `Missing: ${missing.join(', ')}` : 'Governance directories present.', missing);
  },
  govRuleSetPresent(ctx) {
    const files = listRuleFiles(ctx.repoPath);
    const missing = EXPECTED_RULES.filter((item) => !files.includes(item));
    return makeResult('govRuleSetPresent', missing.length === 0, 'hard', missing.length ? `Missing rules: ${missing.join(', ')}` : 'GOV-01 through GOV-08 present.', files);
  },
  projectIntentCreated(ctx) {
    const expected = '.governance/project/PROJECT_INTENT.md';
    const found = exists(ctx.repoPath, expected) ? [expected] : [];
    return makeResult('projectIntentCreated', found.length > 0, 'hard', found.length ? 'Project intent artifact present at the contract path.' : 'Missing required project intent artifact: .governance/project/PROJECT_INTENT.md.', found);
  },
  firstSpecCreated(ctx) {
    const specDir = path.join(ctx.repoPath, '.governance', 'specs');
    const files = fs.existsSync(specDir) ? fs.readdirSync(specDir).filter((name) => /^SPEC-001-.+\.md$/i.test(name)) : [];
    return makeResult('firstSpecCreated', files.length > 0, 'hard', files.length ? 'First spec artifact present at the contract path pattern.' : 'Missing required first spec artifact matching .governance/specs/SPEC-001-<feature>.md.', files);
  },
  canonicalBootstrapPromptMatchesContract(ctx) {
    const prompt = loadCanonicalBootstrapPrompt(ctx.rootDir, ctx.scenario);
    const requiredSnippets = [
      '.governance/project/PROJECT_INTENT.md',
      '.governance/specs/SPEC-001-<feature>.md',
      'backlog mapped to the spec sections',
      'do not invent a mirror path',
      'active governance sources',
      'stop before product-code implementation',
    ];
    const missing = requiredSnippets.filter((snippet) => !prompt.includes(snippet));
    return makeResult(
      'canonicalBootstrapPromptMatchesContract',
      missing.length === 0,
      'hard',
      missing.length === 0 ? 'Canonical bootstrap prompt matches the published bootstrap contract checkpoints.' : `Canonical bootstrap prompt is missing contract text: ${missing.join(', ')}`,
      missing,
    );
  },
  noProductCodeChanges(ctx) {
    const changedProductCode = [...ctx.diff.categories.created, ...ctx.diff.categories.modified, ...ctx.diff.categories.deleted]
      .filter((item) => item.category === 'product-code')
      .map((item) => item.path);
    return makeResult('noProductCodeChanges', changedProductCode.length === 0, 'hard', changedProductCode.length ? 'Product code changed during bootstrap scenario.' : 'No product code changed.', changedProductCode);
  },
  governanceSourcesReported(ctx) {
    const ok = /Active governance sources:/i.test(ctx.transcript);
    return makeResult('governanceSourcesReported', ok, 'hard', ok ? 'Transcript reports governance sources.' : 'Transcript missing governance source report.', []);
  },
  bootstrapStopDeclared(ctx) {
    const ok = /stopping before product implementation|stopped before product-code implementation/i.test(ctx.transcript);
    return makeResult('bootstrapStopDeclared', ok, 'hard', ok ? 'Transcript declares bootstrap stop gate.' : 'Transcript missing stop declaration.', []);
  },
  cleanSessionIsolationConfirmed(ctx) {
    if (!ctx.scenario.cleanSession) {
      return makeResult('cleanSessionIsolationConfirmed', true, 'soft', 'Scenario does not request clean-session validation.', []);
    }
    const evidence = ctx.sessionEvidence || {};
    const checks = [
      ['requested', evidence.requested === true],
      ['repoPath', isTruthyPath(evidence.repoPath)],
      ['repoPathIsTemp', evidence.repoPathIsTemp === true],
      ['isolatedHomePath', isTruthyPath(evidence.isolatedHomePath)],
      ['isolatedHomeIsTemp', evidence.isolatedHomeIsTemp === true],
      ['homeEnvOverrides', Array.isArray(evidence.homeEnvOverrides) && evidence.homeEnvOverrides.includes('CODEX_HOME') && evidence.homeEnvOverrides.includes('HOME') && evidence.homeEnvOverrides.includes('USERPROFILE')],
    ];
    const missing = checks.filter(([, passed]) => !passed).map(([name]) => name);
    return makeResult(
      'cleanSessionIsolationConfirmed',
      missing.length === 0,
      'hard',
      missing.length ? `Missing clean-session evidence: ${missing.join(', ')}` : 'Clean-session isolation evidence recorded.',
      Object.entries(evidence).map(([key, value]) => `${key}=${Array.isArray(value) ? value.join(',') : value}`),
    );
  },
};

function runAssertions(assertionIds, context) {
  return assertionIds.map((id) => {
    const fn = handlers[id];
    if (!fn) return makeResult(id, false, 'hard', `Unknown assertion: ${id}`, []);
    return fn(context);
  });
}

module.exports = { runAssertions };
