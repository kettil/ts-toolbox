/* eslint-disable import/no-extraneous-dependencies */
const { config, createProject } = require('carna/configs/jest.config.js');

module.exports = Object.assign(config, {
  projects: [
    // createProject('<foldername>', '<color>', { /* extend config */})
    // => colors: red green yellow blue magenta cyan gray
    createProject('unit', 'cyan', {}),
  ],

  // extend options for this project
});
