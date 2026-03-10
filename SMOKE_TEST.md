# Vibegov Smoke Test (Plain User)

Use this to demonstrate and validate a typical vibegov workflow on any target repo.

## What it checks
1. OpenSpec structure exists (`openspec/specs`, `openspec/traceability.md`)
2. Planned/partial IDs can be parsed from traceability
3. GitHub CLI is authenticated
4. Open issue backlog mapping exists for planned/partial IDs
5. Optional: create missing issue backlog entries automatically
6. Writes a report to `openspec/migration/vibegov-smoke-report.md`

## Script
- `scripts/smoke-vibegov.ps1`

## Run examples

### 1) Audit only (safe)
```powershell
pwsh .\scripts\smoke-vibegov.ps1 -RepoPath "C:\projects\softlystudio\scheduling-assistant"
```

### 2) Dry-run creation preview
```powershell
pwsh .\scripts\smoke-vibegov.ps1 -RepoPath "C:\projects\softlystudio\scheduling-assistant" -CreateDemoIssues -DryRun
```

### 3) Create missing backlog issues
```powershell
pwsh .\scripts\smoke-vibegov.ps1 -RepoPath "C:\projects\softlystudio\scheduling-assistant" -CreateDemoIssues
```

## Typical demo flow
1. Run audit only.
2. Show mapped vs unmapped counts.
3. Run with `-CreateDemoIssues -DryRun` and show what would be created.
4. Run with `-CreateDemoIssues` to normalize backlog.
5. Open generated report in target repo:
   - `openspec/migration/vibegov-smoke-report.md`

This makes backlog normalization visible, repeatable, and easy to verify.
