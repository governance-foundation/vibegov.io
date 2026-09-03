/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'start-here',
    'intro',
    'quickstart',
    'bootstrap',
    'choose-your-path',
    'glossary',
    'content-status-model',
    'vibegov-vs-agent-rules',
    'bootstrap-update',
    'bootstrap-review',
    'bootstrap-feedback-prompt',
    {
      type: 'category',
      label: 'Bootstrap Support',
      items: [
        'github-project-bootstrap',
        'init-todo',
        'agents-template',
      ],
    },
    {
      type: 'category',
      label: 'FAQ',
      items: [
        'faq/what-is-vibegov',
        'faq/is-vibegov-a-tool-or-framework',
        'faq/how-is-vibegov-different-from-agent-rules',
        'faq/do-i-need-a-specific-ai-provider',
        'faq/can-i-use-vibegov-in-an-existing-repo',
        'faq/what-is-the-smallest-useful-adoption-step',
        'faq/when-do-i-use-bootstrap-init',
        'faq/when-do-i-use-bootstrap-update',
        'faq/when-do-i-use-the-feedback-prompt',
        'faq/when-do-i-use-bootstrap-review',
      ],
    },
    'branch-protection-checklist',
    'vibegov-sdlc',
    'governed-delivery-example',
    'agent-continuity-bootstrap',
    'contribute',
    'content-style-guide',
    {
      type: 'category',
      label: 'Operational Guides',
      items: [
        'execution-modes',
        'build-exploratory-human-feedback-loops',
        'feedback-intake',
        'quick-decisions',
        'mode-selection-and-evidence-closing',
        'evidence-examples',
        'simplicity-first',
        'output-quality-and-anti-slop',
        'feedback-assimilation-pattern',
        'evaluation-pattern',
        'exploratory-review-mode',
        'checkpoint-reporting',
        'blocker-escalation',
        'workflow-quality-rubric',
        'bootstrap-validation',
        'release-artifact-and-test-prep',
      ],
    },
    {
      type: 'category',
      label: 'Testing and Completeness',
      items: [
        'test-execution-expectations',
        'quality-scaffolding-and-completeness-rubric',
      ],
    },
    {
      type: 'category',
      label: 'Runtime and Harness Profiles',
      items: [
        'runtime-and-harness-profiles',
        'minimal-vibegov-execution-profile-snippet',
        'harness-profile-codex',
        'harness-profile-minimal-claude',
        'harness-builder-checklist',
        'codex-prompting-through-vibegov',
      ],
    },
    {
      type: 'category',
      label: 'Reference Reading',
      items: [
        'reference-reading',
      ],
    },
    {
      type: 'category',
      label: 'Published Governance Pages',
      items: [
        'published/gov-01-instructions',
        'published/gov-02-workflow',
        'published/gov-03-communication',
        'published/gov-04-quality',
        'published/gov-05-testing',
        'published/gov-06-issues',
        'published/gov-07-tasks',
        'published/gov-08-exploratory-review',
        'published/gov-09-agent-continuity-bootstrap',
        'published/gov-10-agent-state-closure-git-hygiene',
        'published/gov-11-agent-legibility-in-repo-truth',
        'published/gov-12-drift-control-garbage-collection',
        'published/gov-13-review-loops-completion-discipline',
      ],
    },
  ],
};

module.exports = sidebars;
