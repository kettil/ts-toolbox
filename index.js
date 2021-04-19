/* eslint-disable no-template-curly-in-string */

// @semantic-release/changelog
const changelogFile = 'CHANGELOG.md';
const changelogTitle = '# Changelog';
// @semantic-release/git
const assets = [changelogFile, 'package.json', 'package-lock.json'];

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
    ['@semantic-release/git', { assets }],
    '@semantic-release/github',
  ],

  tagFormat: '${version}',
};

module.exports = configuration;
