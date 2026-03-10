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
    'bootstrap',
    'quickstart',
    'release-cadence',
    'contribute',
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
      ],
    },
  ],
};

module.exports = sidebars;



