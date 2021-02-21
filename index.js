/* eslint-disable no-template-curly-in-string */

const configuration = {
  branches: [
    '+([0-9])?(.{+([0-9]),x}).x',
    'master',
    'main',
    { name: 'beta', prerelease: true },
    { name: 'alpha', prerelease: true },
  ],

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
