/* eslint-disable-next-line import/no-extraneous-dependencies -- is a dev file */
const { createJestConfig, createJestProject } = require('carna');

module.exports = createJestConfig(__dirname, {
  projects: [
    // => colors: red green yellow blue magenta cyan gray
    createJestProject({ color: 'cyan', testFolder: 'unit', customeConfig: {} }),
  ],
});
