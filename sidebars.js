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
    'intro',
    'start-here',
    'bootstrap',
    'bootstrap-update',
    'bootstrap-review',
    'quickstart',
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
        'faq/when-do-i-use-bootstrap-init',
        'faq/when-do-i-use-bootstrap-update',
        'faq/when-do-i-use-the-feedback-prompt',
        'faq/when-do-i-use-bootstrap-review',
      ],
    },
    'branch-protection-checklist',
    'vibegov-sdlc',
    'agent-continuity-bootstrap',
    'contribute',
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
        'harness-profile-minimal-claude',
        'harness-profile-codex',
        'codex-prompting-through-vibegov',
        'harness-builder-checklist',
        'minimal-vibegov-execution-profile-snippet',
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
