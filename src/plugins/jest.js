const defaultObject = require('../lib/defaultObject');
const hasLibrary = require('../lib/hasLibrary');

const rules = {
  'jest/consistent-test-it': ['error', { fn: 'test', withinDescribe: 'test' }],
  'jest/expect-expect': ['warn'],
  'jest/lowercase-name': ['error'],
  'jest/no-alias-methods': ['error'],
  'jest/no-commented-out-tests': ['warn'],
  'jest/no-conditional-expect': ['error'],
  'jest/no-deprecated-functions': ['error'],
  'jest/no-disabled-tests': ['warn'],
  'jest/no-export': ['error'],
  'jest/no-focused-tests': ['error'],
  'jest/no-identical-title': ['error'],
  'jest/no-interpolation-in-snapshots': ['error'],
  'jest/no-jasmine-globals': ['error'],
  'jest/no-jest-import': ['error'],
  'jest/no-mocks-import': ['error'],
  'jest/no-standalone-expect': ['error'],
  'jest/no-done-callback': ['error'],
  'jest/no-test-prefixes': ['error'],
  'jest/no-try-expect': ['error'],
  'jest/prefer-hooks-on-top': ['error'],
  'jest/prefer-to-be-null': ['error'],
  'jest/prefer-to-be-undefined': ['error'],
  'jest/prefer-to-contain': ['error'],
  'jest/prefer-to-have-length': ['error'],
  'jest/valid-describe': ['error'],
  'jest/valid-expect': ['error'],
  'jest/valid-expect-in-promise': ['error'],
  'jest/valid-title': ['error'],
};

if (hasLibrary('jest')) {
  const overrides = [];

  if (hasLibrary('typescript')) {
    overrides.push(
      {
        files: ['tests/**/*.ts', 'tests/**/*.tsx', '**/*.test.ts', '**/*.test.tsx'],
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
        files: ['tests/**/*.test.ts', 'tests/**/*.test.tsx'],
        rules: { 'node/global-require': ['off'] },
      },
      {
        files: ['tests/shared/__mock__/*.ts'],
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

  module.exports = { ...defaultObject, env: { 'jest/globals': true, jest: true }, plugins: ['jest'], rules, overrides };
} else {
  module.exports = defaultObject;
}
