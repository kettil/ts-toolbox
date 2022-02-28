const defaultObject = require('../lib/defaultObject');
const hasLibrary = require('../lib/hasLibrary');

const config = { ...defaultObject };
const overrides = [];

const rules = {
  'jest/consistent-test-it': ['error', { fn: 'test', withinDescribe: 'test' }],
  'jest/expect-expect': ['warn'],
  'jest/max-nested-describe': ['error', { max: 5 }],
  'jest/no-alias-methods': ['error'],
  'jest/no-commented-out-tests': ['warn'],
  'jest/no-conditional-expect': ['error'],
  'jest/no-deprecated-functions': ['error'],
  'jest/no-disabled-tests': ['warn'],
  'jest/no-done-callback': ['error'],
  'jest/no-export': ['error'],
  'jest/no-focused-tests': ['error'],
  'jest/no-identical-title': ['error'],
  'jest/no-interpolation-in-snapshots': ['error'],
  'jest/no-jasmine-globals': ['error'],
  'jest/no-jest-import': ['error'],
  'jest/no-mocks-import': ['error'],
  'jest/no-standalone-expect': ['error'],
  'jest/no-test-prefixes': ['error'],
  'jest/prefer-expect-resolves': ['error'],
  'jest/prefer-hooks-on-top': ['error'],
  'jest/prefer-lowercase-title': ['error'],
  'jest/prefer-to-be': ['error'],
  'jest/prefer-to-contain': ['error'],
  'jest/prefer-to-have-length': ['error'],
  'jest/require-hook': ['off'],
  'jest/valid-describe-callback': ['error'],
  'jest/valid-expect-in-promise': ['error'],
  'jest/valid-expect': ['error'],
  'jest/valid-title': ['error'],
};

overrides.push({
  files: [
    '**/tests/*/pre.ts',
    '**/tests/*/post.ts',
    '**/tests/*/setupTests.ts',
    '**/tests/*/pre.js',
    '**/tests/*/post.js',
    '**/tests/*/setupTests.js',
  ],
  rules: { 'no-console': ['off'] },
});

if (hasLibrary('typescript')) {
  overrides.push(
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
  );
}

if (hasLibrary('jest')) {
  config.env = { 'jest/globals': true, jest: true };
  config.plugins = ['jest'];
  config.rules = rules;
  config.overrides = overrides;
}

module.exports = config;
