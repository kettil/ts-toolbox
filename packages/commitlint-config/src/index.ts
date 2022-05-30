
import type { ConfigObject } from './types/configObject';

const createConfig = (): ConfigObject => {
  const types = ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test'];

  return {
    extends: ['@commitlint/config-lerna-scopes'],
    rules: {
      'body-leading-blank': [2, 'always'],
      'body-max-line-length': [2, 'always', 120],
      'footer-leading-blank': [2, 'always'],
      'footer-max-line-length': [2, 'always', 160],
      'header-max-length': [2, 'always', 104],
      'scope-case': [2, 'always', 'lower-case'],
      'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
      'subject-empty': [2, 'never'],
      'subject-full-stop': [2, 'never', '.'],
      'type-case': [2, 'always', 'lower-case'],
      'type-empty': [2, 'never'],
      'type-enum': [2, 'always', types],
    },
  };
};

export { createConfig };
