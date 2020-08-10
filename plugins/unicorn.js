const defaultObject = require('../lib/defaultObject');
const hasLibrary = require('../lib/hasLibrary');

const rules = {
  'unicorn/better-regex': ['error'],
  'unicorn/catch-error-name': ['error'],
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
  'unicorn/no-array-instanceof': ['error'],
  'unicorn/no-console-spaces': ['error'],
  'unicorn/no-fn-reference-in-iterator': ['error'],
  'unicorn/no-for-loop': ['error'],
  'unicorn/no-hex-escape': ['error'],
  'unicorn/no-keyword-prefix': ['off'],
  'unicorn/no-nested-ternary': ['error'],
  'unicorn/no-new-buffer': ['error'],
  'unicorn/no-null': ['error'],
  'unicorn/no-process-exit': ['error'],
  'unicorn/no-unreadable-array-destructuring': ['error'],
  'unicorn/no-unsafe-regex': ['off'],
  'unicorn/no-unused-properties': ['off'],
  'unicorn/no-zero-fractions': ['error'],
  'unicorn/number-literal-case': ['error'],
  'unicorn/prefer-add-event-listener': ['error'],
  'unicorn/prefer-dataset': ['error'],
  'unicorn/prefer-event-key': ['error'],
  'unicorn/prefer-flat-map': ['error'],
  'unicorn/prefer-includes': ['error'],
  'unicorn/prefer-modern-dom-apis': ['error'],
  'unicorn/prefer-negative-index': ['error'],
  'unicorn/prefer-node-append': ['error'],
  'unicorn/prefer-node-remove': ['error'],
  'unicorn/prefer-number-properties': ['error'],
  'unicorn/prefer-query-selector': ['error'],
  'unicorn/prefer-reflect-apply': ['error'],
  'unicorn/prefer-replace-all': ['off'],
  'unicorn/prefer-set-has': ['error'],
  'unicorn/prefer-spread': ['error'],
  'unicorn/prefer-starts-ends-with': ['error'],
  'unicorn/prefer-string-slice': ['error'],
  'unicorn/prefer-text-content': ['error'],
  'unicorn/prefer-trim-start-end': ['error'],
  'unicorn/prefer-type-error': ['error'],
  'unicorn/prevent-abbreviations': [
    'error',
    {
      whitelist: {
        Props: true,
        props: true,
        Ref: true,
        ref: true,
        args: true,
        cmd: true,
        env: true,
        msg: true,
      },
    },
  ],
  'unicorn/string-content': ['off'],
  'unicorn/throw-new-error': ['error'],
};

const overrides = [
  {
    files: ['*.jsx', '*.tsx'],
    excludedFiles: ['index.tsx', 'index.jsx', 'index.test.tsx', 'index.test.jsx', '_app.tsx', '_document.tsx'],
    rules: { 'unicorn/filename-case': ['error', { case: 'pascalCase' }] },
    // "unicorn/filename-case": ["error", { "case": "pascalCase", "ignore": ["^[A-Z][a-zA-Z0-9]*\\.test\\.tsx$"] }]
  },
  {
    files: ['*.jsx', '*.tsx'],
    excludedFiles: ['_app.tsx', '_document.tsx'],
    rules: { 'unicorn/no-null': 'off' },
  },
];

if (hasLibrary('next')) {
  overrides.push({
    files: ['pages/**/*.jsx', 'pages/**/*.tsx'],
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
