## Goal

Make bootstrap explicitly initialize git early when working inside a normal folder where git is available but the repo has not yet been initialized. This matters because bootstrap should preserve and classify existing local state before broader governance mutations, not accidentally treat an uninitialized folder like a blank clean-slate repo.

## Requirements

- `BOOT-GITINIT-001` Bootstrap docs must distinguish `git available but repo not initialized yet` from `git unavailable`.
- `BOOT-GITINIT-002` Before broader bootstrap mutation, if the current folder is not yet an initialized git repo and git is available, bootstrap must run a repo-initialization pre-step.
- `BOOT-GITINIT-003` The repo-initialization pre-step must preserve and report pre-init local state (at minimum: folder context plus notable existing files/artifacts relevant to bootstrap) before continuing.
- `BOOT-GITINIT-004` Bootstrap docs must explicitly say that remote setup is not required for this pre-step.
- `BOOT-GITINIT-005` GitHub bootstrap support docs must state that repo-initialization preflight happens before GitHub/board preflight when the repo is not yet initialized.
- `BOOT-GITINIT-006` Short-path bootstrap guidance must include the same expectation, not only the long-form contract.

## Verification

- `docs/bootstrap.md` explicitly covers the git-init pre-step, preservation/reporting expectation, and remote-not-required note.
- `docs/quickstart.md` includes the same rule in the short contract summary.
- `docs/github-project-bootstrap.md` explains repo-initialization preflight before GitHub board preflight.
- `docs/faq/when-do-i-use-bootstrap-init.md` reflects that `init` mode may first initialize git when starting in a plain folder.
