/* eslint-disable no-template-curly-in-string */

const changelogFile = 'CHANGELOG.md';
const changelogTitle = '# Changelog';

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
    ['@semantic-release/changelog', { changelogFile, changelogTitle }],
    '@semantic-release/npm',
    ['@semantic-release/git', { assets: [changelogFile, 'package.json', 'package-lock.json'] }],
  ],

  tagFormat: '${version}',
};

module.exports = configuration;
