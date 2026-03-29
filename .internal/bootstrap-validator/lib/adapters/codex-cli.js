const fs = require('fs');
const path = require('path');
const os = require('os');
const { randomUUID } = require('crypto');
const { spawnSync } = require('child_process');
const { ensureDir, copyDir, removeDir, writeText } = require('../fs-utils');

function toPosix(filePath) {
  return filePath.replace(/\\/g, '/');
}

function loadPrompt(validatorDir, promptFile) {
  const promptPath = path.join(validatorDir, 'prompts', promptFile);
  return fs.readFileSync(promptPath, 'utf8').trim();
}

function buildPrompt({ rootDir, validatorDir, scenario }) {
  const scenarioSpecific = `${scenario.id}-codex.txt`;
  const promptDir = path.join(validatorDir, 'prompts');
  const selectedFile = fs.existsSync(path.join(promptDir, scenarioSpecific)) ? scenarioSpecific : scenario.prompt;
  const base = loadPrompt(validatorDir, selectedFile);
  const governancePath = path.join(rootDir, '.governance');
  const governancePathPosix = toPosix(governancePath);
  const rulesPath = toPosix(path.join(governancePath, 'rules'));
  const projectTemplatePath = toPosix(path.join(governancePath, 'project', 'PROJECT_TEMPLATE.md'));
  const specTemplatePath = toPosix(path.join(governancePath, 'specs', 'SPEC_TEMPLATE.md'));
  const bootstrapConstraints = scenario.mode === 'bootstrap'
    ? [
        'Create at least one non-template spec file under .governance/specs/ (for example: bootstrap-governance-setup.md).',
      ].join('\n')
    : '';
  const scenarioSpecificConstraints = scenario.id === 'bootstrap-gate'
    ? [
        'For this bootstrap-gate scenario, your final report must include the exact sentence: Stopping before product implementation.',
        'Your final report must also include one line that starts exactly with: Active governance sources:',
      ].join('\n')
    : '';
  return `${base}

Local VibeGov source available for reference at: ${governancePathPosix}
Local VibeGov rules directory: ${rulesPath}
Local project template path: ${projectTemplatePath}
Local spec template path: ${specTemplatePath}
Read governance/templates from those local source paths instead of using remote URLs when possible.

Validator constraints:
- You are running inside a temporary fixture repo used only for bootstrap validation.
- Follow the prompt literally.
- If the scenario is bootstrap-only, stop before product implementation.
- At the end, explicitly report the active governance sources you used.
- Do not emit markdown fences unless needed.
- If your runtime cannot execute tools directly, emit one JSON object with name set to shell and arguments.commands set to an ordered array of the exact file-system commands needed, then include the required plain-text report.
${bootstrapConstraints}
${scenarioSpecificConstraints}
`;
}

function readText(filePath) {
  if (!filePath || !fs.existsSync(filePath)) return '';
  return fs.readFileSync(filePath, 'utf8');
}

function readLastMessage(lastMessagePath) {
  return readText(lastMessagePath).trim();
}

function hasBootstrapStopDeclaration(text) {
  return /stopping before product implementation|stopped before product-code implementation/i.test(text);
}

function hasGovernanceSourceReport(text) {
  return /Active governance sources:/i.test(text);
}

function canTreatLastMessageAsComplete({ scenario, text }) {
  if (!text) return false;
  if (scenario.mode !== 'bootstrap') return false;
  return hasBootstrapStopDeclaration(text)
    && (scenario.id !== 'bootstrap-gate' || hasGovernanceSourceReport(text));
}

function tokenizeShellCommand(command) {
  const tokens = [];
  let current = '';
  let quote = null;
  for (const char of command) {
    if (quote) {
      if (char === quote) {
        quote = null;
      } else {
        current += char;
      }
      continue;
    }

    if (char === '\'' || char === '"') {
      quote = char;
      continue;
    }

    if (/\s/.test(char)) {
      if (current) {
        tokens.push(current);
        current = '';
      }
      continue;
    }

    current += char;
  }

  if (current) tokens.push(current);
  return tokens;
}

function findShellPlanCandidates(text) {
  const candidates = [];
  for (const match of text.matchAll(/```(?:json)?\s*([\s\S]*?)```/ig)) {
    candidates.push(match[1].trim());
  }

  const firstBrace = text.indexOf('{');
  if (firstBrace !== -1) {
    let depth = 0;
    let inString = false;
    let escaped = false;
    for (let index = firstBrace; index < text.length; index += 1) {
      const char = text[index];
      if (escaped) {
        escaped = false;
        continue;
      }
      if (char === '\\') {
        escaped = true;
        continue;
      }
      if (char === '"') {
        inString = !inString;
        continue;
      }
      if (inString) continue;
      if (char === '{') depth += 1;
      if (char === '}') depth -= 1;
      if (depth === 0) {
        candidates.push(text.slice(firstBrace, index + 1).trim());
        break;
      }
    }
  }

  return candidates;
}

function extractShellPlan(text) {
  for (const candidate of findShellPlanCandidates(text)) {
    try {
      const parsed = JSON.parse(candidate);
      if (parsed && parsed.name === 'shell' && parsed.arguments && Array.isArray(parsed.arguments.commands)) {
        return parsed.arguments.commands;
      }
    } catch {}
  }
  return null;
}

function isAbsolutePathToken(token) {
  return /^[A-Za-z]:[\\/]/.test(token) || token.startsWith('\\\\');
}

function normalizeRelativeBootstrapPath(token) {
  const normalized = token.replace(/\\/g, '/');
  const repoStripped = normalized
    .replace(/^(?:\.\/)?tmp\/bootstrap-repo\//i, '')
    .replace(/^(?:\.\/)?bootstrap-repo\//i, '');
  if (/^(?:\.\/)?tmp\/bootstrap-repo$/i.test(normalized) || /^(?:\.\/)?bootstrap-repo$/i.test(normalized)) return '.';
  if (repoStripped === 'PROJECT_TEMPLATE.md') return '.governance/project/PROJECT_TEMPLATE.md';
  if (repoStripped === 'SPEC_TEMPLATE.md') return '.governance/specs/SPEC_TEMPLATE.md';
  return repoStripped;
}

function resolveRepoPath(repoPath, token) {
  const normalized = normalizeRelativeBootstrapPath(token).replace(/\\/g, '/');
  if (normalized === '.') return repoPath;
  if (isAbsolutePathToken(normalized)) return path.resolve(normalized);
  return path.join(repoPath, normalized);
}

function ensureProjectIntentPath(repoPath, token) {
  if (token.replace(/\\/g, '/').endsWith('/INTENT.md')) {
    return path.join(repoPath, '.governance', 'project', 'PROJECT.md');
  }
  return resolveRepoPath(repoPath, token);
}

function expandCopySources(repoPath, sourceToken) {
  const normalized = normalizeRelativeBootstrapPath(sourceToken).replace(/\\/g, '/');
  if (normalized.endsWith('/*')) {
    const baseDir = resolveRepoPath(repoPath, normalized.slice(0, -2));
    if (!fs.existsSync(baseDir)) return [];
    return fs.readdirSync(baseDir).map((name) => path.join(baseDir, name));
  }
  return [resolveRepoPath(repoPath, normalized)];
}

function copyEntry(sourcePath, destPath, recursive) {
  const stat = fs.statSync(sourcePath);
  const destLooksDirectory = destPath === '.'
    || /[\\/]$/.test(destPath)
    || (fs.existsSync(destPath) && fs.statSync(destPath).isDirectory());

  if (stat.isDirectory()) {
    if (!recursive) throw new Error(`copy requires -r for directory source: ${sourcePath}`);
    const finalDest = destLooksDirectory ? path.join(destPath, path.basename(sourcePath)) : destPath;
    copyDir(sourcePath, finalDest);
    return finalDest;
  }

  const finalDest = destLooksDirectory ? path.join(destPath, path.basename(sourcePath)) : destPath;
  ensureDir(path.dirname(finalDest));
  fs.copyFileSync(sourcePath, finalDest);
  return finalDest;
}

function executeShellPlanCommand({ command, repoPath }) {
  const tokens = tokenizeShellCommand(command);
  if (!tokens.length) return `Skipped empty command.`;

  if (tokens[0] === 'mkdir') {
    const paths = tokens.filter((token, index) => index > 0 && token !== '-p');
    for (const dirToken of paths) {
      ensureDir(resolveRepoPath(repoPath, dirToken));
    }
    return `Created directories: ${paths.join(', ')}`;
  }

  if (tokens[0] === 'cp') {
    const recursive = tokens.includes('-r');
    const args = tokens.filter((token, index) => !(index === 0 || token === '-r'));
    if (args.length < 2) throw new Error(`Unsupported copy command: ${command}`);
    const destToken = args[args.length - 1];
    const sourceTokens = args.slice(0, -1);
    const destPath = ensureProjectIntentPath(repoPath, destToken);
    const copied = [];
    for (const sourceToken of sourceTokens) {
      const sources = expandCopySources(repoPath, sourceToken);
      if (!sources.length) throw new Error(`Copy source not found for command: ${command}`);
      for (const sourcePath of sources) {
        copied.push(copyEntry(sourcePath, destPath, recursive));
      }
    }
    return `Copied ${sourceTokens.join(', ')} to ${toPosix(destPath)} (${copied.length} item(s)).`;
  }

  if (tokens[0] === 'echo') {
    const redirectIndex = tokens.findIndex((token) => token === '>' || token === '>>');
    if (redirectIndex === -1 || redirectIndex === tokens.length - 1) {
      throw new Error(`Unsupported echo command: ${command}`);
    }
    const message = tokens.slice(1, redirectIndex).join(' ');
    const operator = tokens[redirectIndex];
    const destPath = resolveRepoPath(repoPath, tokens[redirectIndex + 1]);
    ensureDir(path.dirname(destPath));
    const existing = operator === '>>' ? readText(destPath) : '';
    const next = `${existing}${message}\n`;
    writeText(destPath, next);
    return `${operator === '>>' ? 'Appended to' : 'Wrote'} ${toPosix(destPath)}.`;
  }

  throw new Error(`Unsupported shell-plan command: ${command}`);
}

function applyShellPlan({ repoPath, commands }) {
  const notes = [];
  for (const command of commands) {
    notes.push(`$ ${command}`);
    notes.push(executeShellPlanCommand({ command, repoPath }));
  }
  return notes.join('\n');
}

function findExecutableOnPath(name) {
  const locator = process.platform === 'win32' ? 'where' : 'which';
  const result = spawnSync(locator, [name], { encoding: 'utf8' });
  if (result.status !== 0) return null;
  return result.stdout.split(/\r?\n/).map((line) => line.trim()).find(Boolean) || null;
}

function candidateCodexHomes() {
  const homes = new Set();
  const addHome = (candidate) => {
    if (!candidate) return;
    const resolved = path.resolve(candidate);
    if (fs.existsSync(resolved)) homes.add(resolved);
  };

  addHome(process.env.VIBEGOV_CODEX_HOME);
  addHome(process.env.CODEX_HOME);

  const envHomes = [process.env.HOME, process.env.USERPROFILE, process.env.HOMEDRIVE && process.env.HOMEPATH ? `${process.env.HOMEDRIVE}${process.env.HOMEPATH}` : null]
    .filter(Boolean)
    .map((value) => path.join(value, '.codex'));
  envHomes.forEach(addHome);

  for (const entry of (process.env.PATH || '').split(path.delimiter).filter(Boolean)) {
    let current = path.resolve(entry);
    while (current && current !== path.dirname(current)) {
      if (path.basename(current).toLowerCase() === '.codex') {
        addHome(current);
        break;
      }
      current = path.dirname(current);
    }
  }

  return [...homes];
}

function resolveCodexRuntime() {
  const explicitPath = process.env.VIBEGOV_CODEX_CLI_PATH;
  if (explicitPath && fs.existsSync(explicitPath)) {
    return {
      executable: explicitPath,
      codexHome: path.dirname(path.dirname(explicitPath)),
    };
  }

  const pathExecutable = findExecutableOnPath('codex');
  if (pathExecutable) {
    return {
      executable: pathExecutable,
      codexHome: candidateCodexHomes()[0] || null,
    };
  }

  for (const codexHome of candidateCodexHomes()) {
    const executable = path.join(codexHome, '.sandbox-bin', process.platform === 'win32' ? 'codex.exe' : 'codex');
    if (fs.existsSync(executable)) {
      return { executable, codexHome };
    }
  }

  return { executable: process.platform === 'win32' ? 'codex.exe' : 'codex', codexHome: null };
}

function createIsolatedCodexHome(sourceHome) {
  const isolatedHome = path.join(os.tmpdir(), `vibegov-codex-home-${randomUUID()}`);
  ensureDir(isolatedHome);
  const copiedFiles = [];
  if (!sourceHome || !fs.existsSync(sourceHome)) return { isolatedHome, copiedFiles };

  for (const fileName of ['config.toml', 'auth.json']) {
    const sourceFile = path.join(sourceHome, fileName);
    if (fs.existsSync(sourceFile)) {
      fs.copyFileSync(sourceFile, path.join(isolatedHome, fileName));
      copiedFiles.push(fileName);
    }
  }

  return { isolatedHome, copiedFiles };
}

function hasAuth(sourceHome) {
  return Boolean(sourceHome && fs.existsSync(path.join(sourceHome, 'auth.json')));
}

function selectOllamaModel() {
  return process.env.VIBEGOV_CODEX_OLLAMA_MODEL || 'qwen2.5-coder:14b';
}

function buildAttempts(runtime) {
  const attempts = [];
  if (hasAuth(runtime.codexHome)) {
    attempts.push({
      id: 'default',
      label: 'default-provider',
      args: [],
      env: {},
      provider: 'openai-codex',
      model: 'gpt-5.4',
    });
  }

  const ollamaModel = selectOllamaModel();
  if (ollamaModel) {
    attempts.push({
      id: 'ollama',
      label: `ollama:${ollamaModel}`,
      args: ['--oss', '--local-provider', 'ollama', '-m', ollamaModel],
      env: { OLLAMA_HOST: process.env.VIBEGOV_OLLAMA_HOST || 'http://127.0.0.1:11434' },
      provider: 'ollama',
      model: ollamaModel,
    });
  }

  if (!attempts.length) {
    attempts.push({
      id: 'default',
      label: 'default-provider',
      args: [],
      env: {},
      provider: 'openai-codex',
      model: 'gpt-5.4',
    });
  }

  return attempts;
}

function hasBootstrapArtifacts(repoPath) {
  return fs.existsSync(path.join(repoPath, '.governance', 'rules'))
    && fs.existsSync(path.join(repoPath, '.governance', 'project'))
    && fs.existsSync(path.join(repoPath, '.governance', 'specs'));
}

async function runCodexAttempt({ runtime, prompt, rootDir, repoPath, scenario, attempt, timeoutMs }) {
  const { isolatedHome, copiedFiles } = createIsolatedCodexHome(runtime.codexHome);
  const lastMessagePath = path.join(os.tmpdir(), `vibegov-codex-${randomUUID()}-last-message.txt`);
  const promptPath = path.join(os.tmpdir(), `vibegov-codex-${randomUUID()}-prompt.txt`);
  const scriptPath = path.join(os.tmpdir(), `vibegov-codex-${randomUUID()}-runner.ps1`);
  const stdoutPath = path.join(os.tmpdir(), `vibegov-codex-${randomUUID()}-stdout.txt`);
  const stderrPath = path.join(os.tmpdir(), `vibegov-codex-${randomUUID()}-stderr.txt`);
  const metaPath = path.join(os.tmpdir(), `vibegov-codex-${randomUUID()}-meta.json`);
  const env = {
    ...process.env,
    CI: '1',
    CODEX_HOME: isolatedHome,
    HOME: isolatedHome,
    USERPROFILE: isolatedHome,
    ...attempt.env,
  };

  let stdout = '';
  let stderr = '';
  let killedForTimeout = false;
  let completedFromLastMessage = false;
  const startedAt = Date.now();

  try {
    writeText(promptPath, prompt);

    const escapePs = (value) => `'${String(value).replace(/'/g, "''")}'`;
    const extraArgsLiteral = attempt.args.map((value) => escapePs(value)).join(', ');
    const envAssignments = Object.entries({
      CODEX_HOME: isolatedHome,
      HOME: isolatedHome,
      USERPROFILE: isolatedHome,
      ...attempt.env,
    }).map(([key, value]) => `$env:${key} = ${escapePs(value)}`).join('\n');

    writeText(scriptPath, [
      "param([string]$CodexPath, [string]$PromptPath, [string]$RootDir, [string]$RepoPath, [string]$LastMessagePath, [string]$StdoutPath, [string]$StderrPath, [string]$MetaPath)",
      "$ErrorActionPreference = 'Stop'",
      envAssignments,
      `$extraArgs = @(${extraArgsLiteral})`,
      "$argList = @('exec', '--full-auto', '--add-dir', $RootDir, '-o', $LastMessagePath, '--cd', $RepoPath) + $extraArgs + @('-')",
      "$process = Start-Process -FilePath $CodexPath -ArgumentList $argList -WorkingDirectory $RepoPath -NoNewWindow -PassThru -RedirectStandardInput $PromptPath -RedirectStandardOutput $StdoutPath -RedirectStandardError $StderrPath",
      "$completedFromLastMessage = $false",
      "$killedForTimeout = $false",
      "$lastMessageStableSince = $null",
      `$timeoutAt = (Get-Date).AddMilliseconds(${timeoutMs})`,
      `$requiresBootstrapStop = ${scenario.mode === 'bootstrap' ? '$true' : '$false'}`,
      `$requiresGovernanceSource = ${scenario.id === 'bootstrap-gate' ? '$true' : '$false'}`,
      "while (-not $process.HasExited) {",
      "  $lastMessage = if (Test-Path $LastMessagePath) { Get-Content -Raw -Path $LastMessagePath } else { '' }",
      "  $canComplete = $false",
      "  if ($requiresBootstrapStop) {",
      "    $hasStop = [regex]::IsMatch($lastMessage, 'stopping before product implementation|stopped before product-code implementation', 'IgnoreCase')",
      "    $hasGov = [regex]::IsMatch($lastMessage, 'Active governance sources:', 'IgnoreCase')",
      "    $canComplete = $hasStop -and ((-not $requiresGovernanceSource) -or $hasGov)",
      "  }",
      "  if ($canComplete) {",
      "    if (-not $lastMessageStableSince) {",
      "      $lastMessageStableSince = Get-Date",
      "    } elseif (((Get-Date) - $lastMessageStableSince).TotalMilliseconds -ge 1500) {",
      "      $completedFromLastMessage = $true",
      "      try { Stop-Process -Id $process.Id -Force } catch {}",
      "    }",
      "  } else {",
      "    $lastMessageStableSince = $null",
      "  }",
      "  if ((Get-Date) -ge $timeoutAt) {",
      "    $killedForTimeout = $true",
      "    try { Stop-Process -Id $process.Id -Force } catch {}",
      "    break",
      "  }",
      "  Start-Sleep -Milliseconds 500",
      "  $process.Refresh()",
      "}",
      "try { $process.WaitForExit() } catch {}",
      "$exitCode = if ($completedFromLastMessage) { 0 } elseif ($process.HasExited) { $process.ExitCode } else { 1 }",
      "$meta = @{ exitCode = $exitCode; killedForTimeout = $killedForTimeout; completedFromLastMessage = $completedFromLastMessage } | ConvertTo-Json -Compress",
      "Set-Content -Path $MetaPath -Value $meta",
      "if ($killedForTimeout) { exit 124 }",
      "exit $exitCode",
    ].join('\n'));

    const shell = process.env.ComSpec || 'C:\\Windows\\System32\\cmd.exe';
    const shellArgs = ['/d', '/s', '/c', 'powershell.exe', '-NoLogo', '-NoProfile', '-File', scriptPath, runtime.executable, promptPath, rootDir, repoPath, lastMessagePath, stdoutPath, stderrPath, metaPath];
    const shellResult = spawnSync(shell, shellArgs, { cwd: repoPath, env, stdio: 'ignore' });
    stdout = readText(stdoutPath);
    stderr = readText(stderrPath);
    const meta = readText(metaPath).trim() ? JSON.parse(readText(metaPath)) : {};
    killedForTimeout = Boolean(meta.killedForTimeout);
    completedFromLastMessage = Boolean(meta.completedFromLastMessage);
    const exitInfo = {
      exitCode: typeof meta.exitCode === 'number' ? meta.exitCode : (typeof shellResult.status === 'number' ? shellResult.status : 1),
      signal: shellResult.signal || null,
      spawnError: shellResult.error ? shellResult.error.message : null,
    };

    const lastMessage = readLastMessage(lastMessagePath);
    const planCommands = extractShellPlan(lastMessage || stdout || stderr);
    let shellPlanTranscript = '';
    let shellPlanApplied = false;
    if (Array.isArray(planCommands) && planCommands.length) {
      shellPlanTranscript = applyShellPlan({ repoPath, commands: planCommands });
      shellPlanApplied = true;
    }

    const transcriptSections = [
      `--- attempt ${attempt.label} ---`,
      stdout.trim(),
      stderr.trim() ? `--- stderr ---\n${stderr.trim()}` : '',
      lastMessage ? `--- last message ---\n${lastMessage}` : '',
      shellPlanApplied ? `--- adapter shell-plan execution ---\n${shellPlanTranscript}` : '',
    ].filter(Boolean);
    const transcript = transcriptSections.join('\n\n');
    const completed = completedFromLastMessage || exitInfo.exitCode === 0 || shellPlanApplied;

    return {
      transcript,
      shellPlanApplied,
      hasBootstrapArtifacts: hasBootstrapArtifacts(repoPath),
      sessionEvidence: {
        requested: Boolean(scenario.cleanSession),
        adapter: 'codex-cli',
        repoPath,
        repoPathIsTemp: repoPath.startsWith(os.tmpdir()),
        isolatedHomePath: isolatedHome,
        isolatedHomeIsTemp: isolatedHome.startsWith(os.tmpdir()),
        sourceCodexHome: runtime.codexHome || null,
        copiedFiles,
        homeEnvOverrides: ['CODEX_HOME', 'HOME', 'USERPROFILE'],
      },
      rawOutput: {
        attemptId: attempt.id,
        status: exitInfo.exitCode,
        signal: exitInfo.signal,
        error: killedForTimeout ? `Timed out after ${timeoutMs}ms` : exitInfo.spawnError,
        completedFromLastMessage,
        shellPlanApplied,
      },
      exitKind: killedForTimeout ? 'timeout' : (completed ? 'completed' : 'failed'),
      provider: attempt.provider,
      model: attempt.model,
      durationMs: Date.now() - startedAt,
    };
  } finally {
    removeDir(isolatedHome);
    try {
      if (promptPath && fs.existsSync(promptPath)) fs.unlinkSync(promptPath);
    } catch {}
    try {
      if (scriptPath && fs.existsSync(scriptPath)) fs.unlinkSync(scriptPath);
    } catch {}
    try {
      if (stdoutPath && fs.existsSync(stdoutPath)) fs.unlinkSync(stdoutPath);
    } catch {}
    try {
      if (stderrPath && fs.existsSync(stderrPath)) fs.unlinkSync(stderrPath);
    } catch {}
    try {
      if (metaPath && fs.existsSync(metaPath)) fs.unlinkSync(metaPath);
    } catch {}
    try {
      if (lastMessagePath && fs.existsSync(lastMessagePath)) fs.unlinkSync(lastMessagePath);
    } catch {}
  }
}

function shouldAcceptAttempt({ scenario, attemptResult }) {
  if (attemptResult.exitKind === 'timeout') return false;
  if (!attemptResult.hasBootstrapArtifacts) return false;
  if (scenario.id === 'bootstrap-gate' && !hasBootstrapStopDeclaration(attemptResult.transcript)) return false;
  if (!hasGovernanceSourceReport(attemptResult.transcript)) return false;
  return true;
}

async function run({ rootDir, validatorDir, repoPath, scenario }) {
  const prompt = buildPrompt({ rootDir, validatorDir, scenario });
  const timeoutMs = scenario.timeoutMs || 300000;
  const runtime = resolveCodexRuntime();
  const attempts = buildAttempts(runtime);
  const attemptResults = [];
  const attemptSummaries = [];

  for (const attempt of attempts) {
    const result = await runCodexAttempt({ runtime, prompt, rootDir, repoPath, scenario, attempt, timeoutMs });
    attemptResults.push(result);
    attemptSummaries.push({
      id: attempt.id,
      provider: result.provider,
      model: result.model,
      exitKind: result.exitKind,
      rawOutput: result.rawOutput,
    });
    if (shouldAcceptAttempt({ scenario, attemptResult: result })) {
      return {
        transcript: `${result.transcript}\n\n--- adapter attempts summary ---\n${JSON.stringify(attemptSummaries, null, 2)}`,
        rawOutput: { attempts: attemptSummaries },
        exitKind: result.exitKind,
        durationMs: result.durationMs,
        adapterId: 'codex-cli',
        provider: result.provider,
        model: result.model,
        sessionEvidence: result.sessionEvidence,
      };
    }
  }

  const fallback = attemptSummaries[attemptSummaries.length - 1] || { provider: 'openai-codex', model: 'gpt-5.4', exitKind: 'failed' };
  const finalTranscript = attemptResults.length
    ? attemptResults.map((item) => item.transcript).filter(Boolean).join('\n\n') + `\n\n--- adapter attempts summary ---\n${JSON.stringify(attemptSummaries, null, 2)}`
    : 'No codex-cli attempts were executed.';

  return {
    transcript: finalTranscript,
    rawOutput: { attempts: attemptSummaries },
    exitKind: fallback.exitKind,
    durationMs: timeoutMs,
    adapterId: 'codex-cli',
    provider: fallback.provider,
    model: fallback.model,
    sessionEvidence: attemptResults[attemptResults.length - 1]?.sessionEvidence || null,
  };
}

module.exports = { run };
