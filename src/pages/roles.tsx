import React, {useState} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import clsx from 'clsx';

import styles from './roles.module.css';

type RoleCatalogItem = {
  id: string;
  name: string;
  summary: string;
  version: string;
  entrypoint: string;
  manifest: string;
  roleContract: string;
  humanManifest: string;
  common: string[];
  overlays: string[];
};

const roles: RoleCatalogItem[] = [
  {
    "id": "developer",
    "name": "Developer",
    "summary": "Developer agent role pack for GitHub-source-of-truth issue execution, coding, testing, git hygiene, and release closure.",
    "version": "2026.5.6-local",
    "entrypoint": "/roles/developer/BOOTSTRAP.md",
    "manifest": "/roles/developer/developer.manifest.json",
    "roleContract": "/roles/developer/ROLE.md",
    "humanManifest": "/roles/developer/MANIFEST.md",
    "common": [
      "/roles/_common/BOOTSTRAP-CHECKLIST.md",
      "/roles/_common/source-of-truth-policy.md",
      "/roles/_common/authority-and-escalation.md",
      "/roles/_common/heartbeat-orchestration.md",
      "/roles/_common/INSTALL-CHECKLIST.md",
      "/roles/_common/squad-operating-model.md"
    ],
    "overlays": [
      "/roles/developer/overlays/existing-repo-init.md",
      "/roles/developer/overlays/fresh-bootstrap.md",
      "/roles/developer/overlays/recovery-update.md",
      "/roles/developer/overlays/github-source-of-truth.md",
      "/roles/developer/overlays/git-closure.md"
    ]
  },
  {
    "id": "planner",
    "name": "Planner",
    "summary": "Planner agent role pack for GitHub-source-of-truth intake, issue quality, prioritisation, backlog hygiene, and Developer handoff.",
    "version": "2026.5.6-local",
    "entrypoint": "/roles/planner/BOOTSTRAP.md",
    "manifest": "/roles/planner/planner.manifest.json",
    "roleContract": "/roles/planner/ROLE.md",
    "humanManifest": "/roles/planner/MANIFEST.md",
    "common": [
      "/roles/_common/BOOTSTRAP-CHECKLIST.md",
      "/roles/_common/source-of-truth-policy.md",
      "/roles/_common/authority-and-escalation.md",
      "/roles/_common/heartbeat-orchestration.md",
      "/roles/_common/INSTALL-CHECKLIST.md",
      "/roles/_common/squad-operating-model.md"
    ],
    "overlays": [
      "/roles/planner/overlays/existing-repo-init.md",
      "/roles/planner/overlays/fresh-bootstrap.md",
      "/roles/planner/overlays/recovery-update.md",
      "/roles/planner/overlays/github-source-of-truth.md",
      "/roles/planner/overlays/developer-handoff.md"
    ]
  },
  {
    "id": "researcher",
    "name": "Researcher",
    "summary": "Researcher agent role pack for evidence gathering, source evaluation, cited synthesis, research artifacts, and Planner/Developer handoff.",
    "version": "2026.5.6-local",
    "entrypoint": "/roles/researcher/BOOTSTRAP.md",
    "manifest": "/roles/researcher/researcher.manifest.json",
    "roleContract": "/roles/researcher/ROLE.md",
    "humanManifest": "/roles/researcher/MANIFEST.md",
    "common": [
      "/roles/_common/BOOTSTRAP-CHECKLIST.md",
      "/roles/_common/source-of-truth-policy.md",
      "/roles/_common/authority-and-escalation.md",
      "/roles/_common/heartbeat-orchestration.md",
      "/roles/_common/INSTALL-CHECKLIST.md",
      "/roles/_common/squad-operating-model.md"
    ],
    "overlays": [
      "/roles/researcher/overlays/existing-repo-init.md",
      "/roles/researcher/overlays/fresh-bootstrap.md",
      "/roles/researcher/overlays/recovery-update.md",
      "/roles/researcher/overlays/evidence-and-citations.md",
      "/roles/researcher/overlays/planner-developer-handoff.md"
    ]
  },
  {
    "id": "explorer",
    "name": "Explorer",
    "summary": "Explorer agent role pack for product/repo/UI/API exploration, evidence capture, finding triage, spec gaps, and GitHub issue follow-up.",
    "version": "2026.5.6-local",
    "entrypoint": "/roles/explorer/BOOTSTRAP.md",
    "manifest": "/roles/explorer/explorer.manifest.json",
    "roleContract": "/roles/explorer/ROLE.md",
    "humanManifest": "/roles/explorer/MANIFEST.md",
    "common": [
      "/roles/_common/BOOTSTRAP-CHECKLIST.md",
      "/roles/_common/source-of-truth-policy.md",
      "/roles/_common/authority-and-escalation.md",
      "/roles/_common/heartbeat-orchestration.md",
      "/roles/_common/INSTALL-CHECKLIST.md",
      "/roles/_common/squad-operating-model.md"
    ],
    "overlays": [
      "/roles/explorer/overlays/existing-repo-init.md",
      "/roles/explorer/overlays/fresh-bootstrap.md",
      "/roles/explorer/overlays/recovery-update.md",
      "/roles/explorer/overlays/ui-route-exploration.md",
      "/roles/explorer/overlays/api-contract-exploration.md",
      "/roles/explorer/overlays/github-findings.md"
    ]
  },
  {
    "id": "designer",
    "name": "Designer",
    "summary": "Designer / UX role pack for UI intent, Design Language System stewardship, flows, component patterns, accessibility-by-design, and design acceptance criteria.",
    "version": "2026.5.6-local",
    "entrypoint": "/roles/designer/BOOTSTRAP.md",
    "manifest": "/roles/designer/designer.manifest.json",
    "roleContract": "/roles/designer/ROLE.md",
    "humanManifest": "/roles/designer/MANIFEST.md",
    "common": [
      "/roles/_common/BOOTSTRAP-CHECKLIST.md",
      "/roles/_common/source-of-truth-policy.md",
      "/roles/_common/authority-and-escalation.md",
      "/roles/_common/heartbeat-orchestration.md",
      "/roles/_common/INSTALL-CHECKLIST.md",
      "/roles/_common/squad-operating-model.md"
    ],
    "overlays": [
      "/roles/designer/overlays/design-language-system.md",
      "/roles/designer/overlays/ui-flow-contracts.md",
      "/roles/designer/overlays/component-patterns.md",
      "/roles/designer/overlays/accessibility-by-design.md",
      "/roles/designer/overlays/design-review.md"
    ]
  },
  {
    "id": "verifier",
    "name": "Verifier",
    "summary": "Verifier / QA agent role pack for independent validation, regression, acceptance evidence, and release confidence.",
    "version": "2026.5.6-local",
    "entrypoint": "/roles/verifier/BOOTSTRAP.md",
    "manifest": "/roles/verifier/verifier.manifest.json",
    "roleContract": "/roles/verifier/ROLE.md",
    "humanManifest": "/roles/verifier/MANIFEST.md",
    "common": [
      "/roles/_common/BOOTSTRAP-CHECKLIST.md",
      "/roles/_common/source-of-truth-policy.md",
      "/roles/_common/authority-and-escalation.md",
      "/roles/_common/heartbeat-orchestration.md",
      "/roles/_common/INSTALL-CHECKLIST.md",
      "/roles/_common/squad-operating-model.md"
    ],
    "overlays": [
      "/roles/verifier/overlays/validation-plan.md",
      "/roles/verifier/overlays/regression-evidence.md",
      "/roles/verifier/overlays/acceptance-gates.md",
      "/roles/verifier/overlays/bug-reporting.md",
      "/roles/verifier/overlays/release-signoff.md"
    ]
  },
  {
    "id": "maintainer",
    "name": "Maintainer",
    "summary": "Maintainer / Release Manager role pack for repo hygiene, branch closure, changelogs, versioning, releases, and deploy readiness.",
    "version": "2026.5.6-local",
    "entrypoint": "/roles/maintainer/BOOTSTRAP.md",
    "manifest": "/roles/maintainer/maintainer.manifest.json",
    "roleContract": "/roles/maintainer/ROLE.md",
    "humanManifest": "/roles/maintainer/MANIFEST.md",
    "common": [
      "/roles/_common/BOOTSTRAP-CHECKLIST.md",
      "/roles/_common/source-of-truth-policy.md",
      "/roles/_common/authority-and-escalation.md",
      "/roles/_common/heartbeat-orchestration.md",
      "/roles/_common/INSTALL-CHECKLIST.md",
      "/roles/_common/squad-operating-model.md"
    ],
    "overlays": [
      "/roles/maintainer/overlays/branch-hygiene.md",
      "/roles/maintainer/overlays/release-readiness.md",
      "/roles/maintainer/overlays/changelog-versioning.md",
      "/roles/maintainer/overlays/dependency-maintenance.md",
      "/roles/maintainer/overlays/stale-work-cleanup.md"
    ]
  },
  {
    "id": "operator",
    "name": "Operator",
    "summary": "Operator / Chief-of-Staff role pack for recurring sweeps, task/state orchestration, reminders, and operational follow-through.",
    "version": "2026.5.6-local",
    "entrypoint": "/roles/operator/BOOTSTRAP.md",
    "manifest": "/roles/operator/operator.manifest.json",
    "roleContract": "/roles/operator/ROLE.md",
    "humanManifest": "/roles/operator/MANIFEST.md",
    "common": [
      "/roles/_common/BOOTSTRAP-CHECKLIST.md",
      "/roles/_common/source-of-truth-policy.md",
      "/roles/_common/authority-and-escalation.md",
      "/roles/_common/heartbeat-orchestration.md",
      "/roles/_common/INSTALL-CHECKLIST.md",
      "/roles/_common/squad-operating-model.md"
    ],
    "overlays": [
      "/roles/operator/overlays/daily-sweep.md",
      "/roles/operator/overlays/task-ledger.md",
      "/roles/operator/overlays/heartbeat-cron.md",
      "/roles/operator/overlays/escalation-routing.md",
      "/roles/operator/overlays/status-reporting.md"
    ]
  },
  {
    "id": "architect",
    "name": "Architect",
    "summary": "Architect role pack for system design, ADRs, boundaries, migrations, technical direction, and implementation handoff constraints.",
    "version": "2026.5.6-local",
    "entrypoint": "/roles/architect/BOOTSTRAP.md",
    "manifest": "/roles/architect/architect.manifest.json",
    "roleContract": "/roles/architect/ROLE.md",
    "humanManifest": "/roles/architect/MANIFEST.md",
    "common": [
      "/roles/_common/BOOTSTRAP-CHECKLIST.md",
      "/roles/_common/source-of-truth-policy.md",
      "/roles/_common/authority-and-escalation.md",
      "/roles/_common/heartbeat-orchestration.md",
      "/roles/_common/INSTALL-CHECKLIST.md",
      "/roles/_common/squad-operating-model.md"
    ],
    "overlays": [
      "/roles/architect/overlays/adr-authoring.md",
      "/roles/architect/overlays/system-boundaries.md",
      "/roles/architect/overlays/migration-planning.md",
      "/roles/architect/overlays/technical-risk.md",
      "/roles/architect/overlays/implementation-handoff.md"
    ]
  },
  {
    "id": "security",
    "name": "Security",
    "summary": "Security / Compliance Reviewer role pack for threat modelling, secrets, auth, privacy, license, dependency, and exposure review.",
    "version": "2026.5.6-local",
    "entrypoint": "/roles/security/BOOTSTRAP.md",
    "manifest": "/roles/security/security.manifest.json",
    "roleContract": "/roles/security/ROLE.md",
    "humanManifest": "/roles/security/MANIFEST.md",
    "common": [
      "/roles/_common/BOOTSTRAP-CHECKLIST.md",
      "/roles/_common/source-of-truth-policy.md",
      "/roles/_common/authority-and-escalation.md",
      "/roles/_common/heartbeat-orchestration.md",
      "/roles/_common/INSTALL-CHECKLIST.md",
      "/roles/_common/squad-operating-model.md"
    ],
    "overlays": [
      "/roles/security/overlays/threat-model.md",
      "/roles/security/overlays/secrets-auth.md",
      "/roles/security/overlays/privacy-logging.md",
      "/roles/security/overlays/dependency-license.md",
      "/roles/security/overlays/exposure-review.md"
    ]
  },
  {
    "id": "documenter",
    "name": "Documenter",
    "summary": "Documenter / Comms role pack for READMEs, install guides, changelogs, user docs, release summaries, and public-facing explanations.",
    "version": "2026.5.6-local",
    "entrypoint": "/roles/documenter/BOOTSTRAP.md",
    "manifest": "/roles/documenter/documenter.manifest.json",
    "roleContract": "/roles/documenter/ROLE.md",
    "humanManifest": "/roles/documenter/MANIFEST.md",
    "common": [
      "/roles/_common/BOOTSTRAP-CHECKLIST.md",
      "/roles/_common/source-of-truth-policy.md",
      "/roles/_common/authority-and-escalation.md",
      "/roles/_common/heartbeat-orchestration.md",
      "/roles/_common/INSTALL-CHECKLIST.md",
      "/roles/_common/squad-operating-model.md"
    ],
    "overlays": [
      "/roles/documenter/overlays/readme-install.md",
      "/roles/documenter/overlays/release-notes.md",
      "/roles/documenter/overlays/api-docs.md",
      "/roles/documenter/overlays/user-guides.md",
      "/roles/documenter/overlays/public-comms.md"
    ]
  }
];

function bootstrapPrompt(role: RoleCatalogItem) {
  return `Bootstrap yourself as the ${role.id} agent for <PROJECT_PATH_OR_REPO_URL>.

Fresh-read these live VibeGov role sources first:
- https://vibegov.io/roles/index.json
- https://vibegov.io${role.entrypoint}
- https://vibegov.io${role.manifest}

Follow the role manifest exactly. Inspect the project before writing. Select fresh-bootstrap, existing-repo-init, or recovery-update. Merge role files safely; do not blindly overwrite local memory or project rules. Apply relevant overlays, validate the install, and return a bootstrap report.`;
}

function RoleCard({role}: {role: RoleCatalogItem}) {
  const [copied, setCopied] = useState(false);
  const prompt = bootstrapPrompt(role);

  async function copyPrompt() {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }

  return (
    <article className={styles.card}>
      <div>
        <h2>{role.name}</h2>
        <p className={styles.summary}>{role.summary}</p>
      </div>
      <ul className={styles.meta}>
        <li>{role.version}</li>
        <li>{role.overlays.length} overlays</li>
      </ul>
      <pre className={styles.prompt}>
        <code>{prompt}</code>
      </pre>
      <div className={styles.actions}>
        <button
          type="button"
          className={clsx('button button--primary button--sm')}
          onClick={() => void copyPrompt()}>
          {copied ? 'Copied' : 'Copy bootstrap prompt'}
        </button>
        <Link className="button button--secondary button--sm" to={role.entrypoint}>
          BOOTSTRAP.md
        </Link>
        <Link className="button button--secondary button--sm" to={role.manifest}>
          Manifest JSON
        </Link>
        <Link className="button button--secondary button--sm" to={role.roleContract}>
          Role contract
        </Link>
      </div>
    </article>
  );
}

export default function RolesPage() {
  return (
    <Layout
      title="Agent Roles"
      description="Bootstrap VibeGov role-specific agents from stable role-pack entrypoints and manifests.">
      <header className={styles.hero}>
        <div className="container">
          <h1>Agent Roles</h1>
          <p className={styles.lead}>
            Pick a role, copy the bootstrap prompt, and give it to an agent with
            the target project path or repo URL. Each card links to stable
            machine-readable role-pack files under <code>/roles/</code> so agents
            can fresh-read their entrypoint, manifest, common policy, squad
            operating model, templates, and overlays.
          </p>
        </div>
      </header>
      <main>
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2>Bootstrap a role-specific agent</h2>
              <p>
                These roles are designed to be composable. Planner turns intent
                into source-of-truth work, Developer implements, Verifier proves,
                Maintainer keeps release/repo hygiene, Designer owns UI/DLS intent,
                and specialist roles cover research, exploration, architecture,
                security, operations, and docs.
              </p>
            </div>
            <div className={styles.note}>
              Machine catalog:{' '}
              <Link to="/roles/index.json">https://vibegov.io/roles/index.json</Link>
            </div>
            <div className={styles.note}>
              Operating model: <strong>Ready is the contract.</strong> <strong>Develop is the truth.</strong> <strong>Automation is the gate.</strong> No wild forks.
            </div>
            <div className={styles.grid}>
              {roles.map((role) => (
                <RoleCard key={role.id} role={role} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
