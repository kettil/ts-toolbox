import { defaultObject } from '../lib/defaultObject';
import { hasLibrary } from '../lib/hasLibrary';
import type { DefaultObject } from '../types/defaultObject';
import type { Overrides } from '../types/overrides';
import type { Rules } from '../types/rules';

const rules: Rules = {
  'jest/consistent-test-it': ['error', { fn: 'test', withinDescribe: 'test' }],
  'jest/expect-expect': ['warn'],
  'jest/max-nested-describe': ['error', { max: 5 }],
  'jest/no-alias-methods': ['error'],
  'jest/no-commented-out-tests': ['warn'],
  'jest/no-conditional-expect': ['error'],
  'jest/no-conditional-in-test': ['off'],
  'jest/no-deprecated-functions': ['error'],
  'jest/no-disabled-tests': ['warn'],
  'jest/no-done-callback': ['error'],
  'jest/no-duplicate-hooks': ['off'],
  'jest/no-export': ['error'],
  'jest/no-focused-tests': ['error'],
  'jest/no-hooks': ['off'],
  'jest/no-identical-title': ['error'],
  'jest/no-if': ['off'],
  'jest/no-interpolation-in-snapshots': ['error'],
  'jest/no-jasmine-globals': ['error'],
  'jest/no-jest-import': ['error'],
  'jest/no-large-snapshots': ['off'],
  'jest/no-mocks-import': ['error'],
  'jest/no-restricted-matchers': ['off'],
  'jest/no-standalone-expect': ['error'],
  'jest/no-test-prefixes': ['error'],
  'jest/no-test-return-statement': ['error'],
  'jest/prefer-called-with': ['error'],
  'jest/prefer-comparison-matcher': ['error'],
  'jest/prefer-equality-matcher': ['error'],
  'jest/prefer-expect-assertions': ['off'],
  'jest/prefer-expect-resolves': ['error'],
  'jest/prefer-hooks-on-top': ['error'],
  'jest/prefer-lowercase-title': ['error'],
  'jest/prefer-snapshot-hint': ['off'],
  'jest/prefer-spy-on': ['off'],
  'jest/prefer-strict-equal': ['off'],
  'jest/prefer-to-be': ['error'],
  'jest/prefer-to-contain': ['error'],
  'jest/prefer-to-have-length': ['error'],
  'jest/prefer-todo': ['error'],
  'jest/require-hook': ['off'],
  'jest/require-to-throw-message': ['error'],
  'jest/require-top-level-describe': ['error'],
  'jest/unbound-method': ['off'],
  'jest/valid-describe-callback': ['error'],
  'jest/valid-expect-in-promise': ['error'],
  'jest/valid-expect': ['error'],
  'jest/valid-title': ['error'],
};

const overrides: Overrides = [
  {
    files: [
      '**/tests/**/*.js',
      '**/tests/**/*.ts',
      '**/tests/**/*.tsx',
      '**/*.test.js',
      '**/*.test.ts',
      '**/*.test.tsx',
    ],
    rules,
  },
  {
    files: [
      '**/tests/*/pre.ts',
      '**/tests/*/post.ts',
      '**/tests/*/setupTests.ts',
      '**/tests/*/pre.js',
      '**/tests/*/post.js',
      '**/tests/*/setupTests.js',
    ],
    rules: { 'no-console': ['off'] },
  },
];

const typescriptOverrides: Overrides = [
  {
    files: ['**/tests/**/*.ts', '**/tests/**/*.tsx', '**/*.test.ts', '**/*.test.tsx'],
    rules: {
      '@typescript-eslint/unbound-method': ['off'],
      'jest/unbound-method': ['error'],
    },
  },
  {
    files: ['*.test.ts', '*.test.tsx'],
    rules: {
      '@typescript-eslint/no-explicit-any': ['off'],
      '@typescript-eslint/no-floating-promises': ['off'],
    },
  },
  {
    files: [
      '**/tests/**/*.test.js',
      '**/tests/**/*.test.ts',
      '**/tests/**/*.test.tsx',
      '**/tests/*/setupTests.ts',
      '**/tests/*/setupTests.js',
    ],
    rules: {
      '@typescript-eslint/no-explicit-any': ['off'],
      'import/no-unused-modules': ['off'],
      'node/global-require': ['off'],
    },
  },
  {
    files: ['**/tests/shared/__mock__/*.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': ['off'],
      '@typescript-eslint/require-await': ['off'],
      'import/no-anonymous-default-export': ['off'],
      'import/no-import-module-exports': ['off'],
      'import/no-unused-modules': ['off'],
      'import/prefer-default-export': ['off'],
      'jest/no-standalone-expect': ['off'],
    },
  },
];

const createJestConfig = (): DefaultObject => {
  const config = { ...defaultObject };

  if (hasLibrary('jest')) {
    config.env = { 'jest/globals': true, jest: true };
    config.plugins = ['jest'];

    config.overrides = [...overrides, ...(hasLibrary('typescript') ? typescriptOverrides : [])];
  }

  return config;
};

export { createJestConfig, rules as jestRules };
