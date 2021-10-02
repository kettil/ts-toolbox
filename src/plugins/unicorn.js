const defaultObject = require('../lib/defaultObject');
const hasLibrary = require('../lib/hasLibrary');

const rules = {
  // the plugin eslint-plugin-regexp takes over the regexp handling
  'unicorn/better-regex': ['off'],
  'unicorn/catch-error-name': ['error'],
  'unicorn/consistent-destructuring': ['error'],
  'unicorn/consistent-function-scoping': ['error'],
  'unicorn/custom-error-definition': ['off'],
  'unicorn/error-message': ['error'],
  'unicorn/escape-case': ['error'],
  'unicorn/expiring-todo-comments': ['error'],
  'unicorn/explicit-length-check': ['error'],
  'unicorn/filename-case': ['error', { case: 'camelCase' }],
  'unicorn/import-index': ['error'],
  'unicorn/new-for-builtins': ['error'],
  'unicorn/no-abusive-eslint-disable': ['error'],
  // for..in/for..of was banned with the rule no-restricted-syntax
  // 'unicorn/no-array-for-each': ['error'],
  'unicorn/no-array-instanceof': ['error'],
  'unicorn/no-array-push-push': ['error'],
  'unicorn/no-console-spaces': ['error'],
  'unicorn/no-document-cookie': ['error'],
  'unicorn/no-fn-reference-in-iterator': ['error'],
  'unicorn/no-for-loop': ['error'],
  'unicorn/no-hex-escape': ['error'],
  'unicorn/no-keyword-prefix': ['off'],
  'unicorn/no-nested-ternary': ['error'],
  'unicorn/no-new-array': ['error'],
  'unicorn/no-new-buffer': ['error'],
  'unicorn/no-null': ['error'],
  'unicorn/no-process-exit': ['error'],
  'unicorn/no-static-only-class': ['error'],
  'unicorn/no-unreadable-array-destructuring': ['error'],
  'unicorn/no-unsafe-regex': ['off'],
  'unicorn/no-unused-properties': ['off'],
  'unicorn/no-useless-fallback-in-spread': ['error'],
  'unicorn/no-zero-fractions': ['error'],
  'unicorn/number-literal-case': ['error'],
  'unicorn/numeric-separators-style': [
    'error',
    {
      onlyIfContainsSeparator: false,
      hexadecimal: { minimumDigits: 0, groupLength: 2 },
      binary: { minimumDigits: 0, groupLength: 4 },
      octal: { minimumDigits: 0, groupLength: 4 },
      // eslint-disable-next-line id-blacklist -- keyword is needed for the configuration
      number: { minimumDigits: 5, groupLength: 3 },
    },
  ],
  'unicorn/prefer-add-event-listener': ['error'],
  'unicorn/prefer-array-index-of': ['error'],
  'unicorn/prefer-array-flat': ['error'],
  'unicorn/prefer-array-flat-map': ['error'],
  'unicorn/prefer-dataset': ['error'],
  'unicorn/prefer-event-key': ['error'],
  'unicorn/prefer-flat-map': ['error'],
  'unicorn/prefer-includes': ['error'],
  'unicorn/prefer-modern-dom-apis': ['error'],
  'unicorn/prefer-negative-index': ['error'],
  'unicorn/prefer-node-append': ['error'],
  'unicorn/prefer-node-remove': ['error'],
  'unicorn/prefer-number-properties': ['error'],
  'unicorn/prefer-object-has-own': ['error'],
  'unicorn/prefer-prototype-methods': ['error'],
  'unicorn/prefer-query-selector': ['error'],
  'unicorn/prefer-reflect-apply': ['error'],
  'unicorn/prefer-regexp-test': ['error'],
  'unicorn/prefer-set-has': ['error'],
  'unicorn/prefer-spread': ['error'],
  'unicorn/prefer-starts-ends-with': ['error'],
  // 'unicorn/prefer-string-replace-all': ['error'],
  'unicorn/prefer-string-slice': ['error'],
  'unicorn/prefer-switch': ['error'],
  'unicorn/prefer-text-content': ['error'],
  'unicorn/prefer-trim-start-end': ['error'],
  'unicorn/prefer-type-error': ['error'],
  'unicorn/prevent-abbreviations': [
    'error',
    {
      allowList: {
        Props: true,
        props: true,
        Params: true,
        params: true,
        Ref: true,
        ref: true,
        args: true,
        cmd: true,
        env: true,
        msg: true,
        i: true,
        n: true,
      },
    },
  ],
  'unicorn/require-array-join-separator': ['error'],
  'unicorn/require-number-to-fixed-digits-argument': ['error'],
  'unicorn/string-content': ['off'],
  'unicorn/throw-new-error': ['error'],
};

const overrides = [
  {
    files: ['*.tsx'],
    excludedFiles: ['index.tsx', 'index.test.tsx', '_app.tsx', '_document.tsx'],
    rules: { 'unicorn/filename-case': ['error', { case: 'pascalCase' }] },
    // "unicorn/filename-case": ["error", { "case": "pascalCase", "ignore": ["^[A-Z][a-zA-Z0-9]*\\.test\\.tsx$"] }]
  },
  {
    files: ['*.tsx'],
    excludedFiles: ['_app.tsx', '_document.tsx'],
    rules: { 'unicorn/no-null': 'off' },
  },
  {
    files: ['**/tests/**/*.test.js', '**/tests/**/*.test.ts', '**/tests/**/*.test.tsx'],
    rules: {
      'unicorn/no-null': ['off'],
    },
  },
];

if (hasLibrary('next')) {
  overrides.push({
    files: ['pages/**/*.tsx'],
    rules: { 'unicorn/filename-case': 'off' },
  });
}

module.exports = {
  ...defaultObject,
  env: { es6: true },
  plugins: ['unicorn'],
  parserOptions: { ecmaVersion: 2020, sourceType: 'module' },
  rules,
  overrides,
};
