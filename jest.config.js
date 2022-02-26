/* eslint-disable-next-line import/no-extraneous-dependencies -- is a dev file */
const { createJestConfig } = require('carna');

module.exports = createJestConfig(__dirname, {
  projects: [
    // => colors: red green yellow blue magenta cyan gray
    // createJestProject({ color: 'yellow', testFolder: 'unit', workspaceFolder: 'package-lib', customeConfig: {} }),
    // createJestProject({
    //   color: 'yellow',
    //   testFolder: 'integration',
    //   workspaceFolder: 'package-lib',
    //   customeConfig: {},
    // }),
    // createJestProject({ color: 'yellow', testFolder: 'e2e', workspaceFolder: 'package-lib', customeConfig: {} }),
  ],

  // extend options for this project

  // ...
});
