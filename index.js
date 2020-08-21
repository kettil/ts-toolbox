/* eslint-disable no-template-curly-in-string */

const configuration = {
  branches: ['master', 'main'],

  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git',
  ],

  tagFormat: '${version}',
};

module.exports = configuration;
