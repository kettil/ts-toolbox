// eslint-disable-next-line import/no-extraneous-dependencies -- is ok, because config file
const { config, createProject } = require('carna/configs/jest.config.js');

module.exports = Object.assign(config, {
  projects: [
    // createProject('<foldername>', '<color>', { /* extend config */})
    // => colors: red green yellow blue magenta cyan gray
    createProject('unit', 'cyan', {}),
  ],

  // extend options for this project

  coverageThreshold: {
    global: {
      statements: 50,
      branches: 50,
      functions: 50,
      lines: 50,
    },
  },
});
