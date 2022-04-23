/* eslint-disable-next-line import/no-extraneous-dependencies -- is a dev file */
const { createJestConfig, createJestProject } = require('carna');

module.exports = createJestConfig(__dirname, {
  projects: [
    // => colors: red green yellow blue magenta cyan gray

    createJestProject({ color: 'yellow', testFolder: 'unit', workspaceFolder: 'commitlint-config', customeConfig: {} }),

    createJestProject({
      color: 'blue',
      testFolder: 'integration',
      workspaceFolder: 'eslint-config',
      customeConfig: {},
    }),

    createJestProject({
      color: 'yellow',
      testFolder: 'unit',
      workspaceFolder: 'errors',
      customeConfig: {},
    }),

    createJestProject({
      color: 'yellow',
      testFolder: 'unit',
      workspaceFolder: 'npm-package-json-lint-config',
      customeConfig: {},
    }),

    createJestProject({
      color: 'yellow',
      testFolder: 'unit',
      workspaceFolder: 'semantic-release-config',
      customeConfig: {},
    }),

    createJestProject({
      color: 'yellow',
      testFolder: 'unit',
      workspaceFolder: 'tools',
      customeConfig: {},
    }),
  ],
});
