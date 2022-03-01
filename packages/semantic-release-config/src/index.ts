type CreateConfig = () => {
  repositoryUrl?: string;
  tagFormat: string;
  branches: ReadonlyArray<string | { name: string; prerelease?: boolean }>;
  plugins: ReadonlyArray<readonly [string, Record<string, unknown>] | readonly [string]>;
};

// @semantic-release/changelog
const changelogFile = 'CHANGELOG.md';
const changelogTitle = '# Changelog';
// @semantic-release/git
const assets = [changelogFile, 'package.json', 'package-lock.json'];

const createConfig: CreateConfig = () => ({
  branches: [
    '+([0-9])?(.{+([0-9]),x}).x',
    'master',
    'main',
    { name: 'beta', prerelease: true },
    { name: 'alpha', prerelease: true },
  ],

  plugins: [
    ['@semantic-release/commit-analyzer'],
    ['@semantic-release/release-notes-generator'],
    ['@semantic-release/changelog', { changelogFile, changelogTitle }],
    ['@semantic-release/npm'],
    ['@semantic-release/git', { assets }],
    ['@semantic-release/github'],
  ],
  // eslint-disable-next-line no-template-curly-in-string -- @SR requires the notation
  tagFormat: '${version}',
});

export { createConfig };
