// eslint-disable-next-line import/no-extraneous-dependencies -- is ok, because config file
const { createJestConfig, createJestProject } = require('carna');

module.exports = createJestConfig(__dirname, {
  projects: [
    // => colors: red green yellow blue magenta cyan gray
    createJestProject({ testFolder: 'unit', color: 'cyan', customeConfig: {} }),
  ],

  // extend options for this project
});
