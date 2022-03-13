/* eslint-disable @typescript-eslint/naming-convention -- The naming convention is given by eslint */
import { defaultObject } from '../lib/defaultObject';
import { hasLibrary } from '../lib/hasLibrary';
import type { DefaultObject } from '../types/defaultObject';
import type { Overrides } from '../types/overrides';
import type { Rules } from '../types/rules';

const rules: Rules = {
  // the plugin eslint-plugin-regexp takes over the regexp handling
  'unicorn/better-regex': ['off'],
  'unicorn/catch-error-name': ['error'],
  'unicorn/consistent-destructuring': ['error'],
  'unicorn/consistent-function-scoping': ['error'],
  'unicorn/custom-error-definition': ['off'],
  'unicorn/empty-brace-spaces': ['error'],
  'unicorn/error-message': ['error'],
  'unicorn/escape-case': ['error'],
  'unicorn/expiring-todo-comments': ['error'],
  'unicorn/explicit-length-check': ['error'],
  'unicorn/filename-case': ['error', { case: 'camelCase' }],
  'unicorn/import-index': ['error'],
  'unicorn/import-style': ['error', { styles: { path: { named: true }, chalk: false } }],
  'unicorn/new-for-builtins': ['error'],
  'unicorn/no-abusive-eslint-disable': ['error'],
  'unicorn/no-array-callback-reference': ['error'],
  'unicorn/no-array-for-each': ['off'],
  'unicorn/no-array-method-this-argument': ['error'],
  'unicorn/no-array-push-push': ['error'],
  'unicorn/no-array-reduce': ['off'],
  'unicorn/no-await-expression-member': ['error'],
  'unicorn/no-console-spaces': ['error'],
  'unicorn/no-document-cookie': ['error'],
  'unicorn/no-empty-file': ['error'],
  'unicorn/no-for-loop': ['error'],
  'unicorn/no-hex-escape': ['error'],
  'unicorn/no-instanceof-array': ['error'],
  'unicorn/no-invalid-remove-event-listener': ['error'],
  'unicorn/no-keyword-prefix': ['off'],
  'unicorn/no-lonely-if': ['error'],
  'unicorn/no-nested-ternary': ['error'],
  'unicorn/no-new-array': ['error'],
  'unicorn/no-new-buffer': ['error'],
  'unicorn/no-null': ['error'],
  'unicorn/no-object-as-default-parameter': ['off'],
  'unicorn/no-process-exit': ['error'],
  'unicorn/no-static-only-class': ['error'],
  'unicorn/no-thenable': ['error'],
  'unicorn/no-this-assignment': ['error'],
  'unicorn/no-unreadable-array-destructuring': ['error'],
  'unicorn/no-unsafe-regex': ['off'],
  'unicorn/no-unused-properties': ['off'],
  'unicorn/no-useless-fallback-in-spread': ['error'],
  'unicorn/no-useless-length-check': ['error'],
  'unicorn/no-useless-promise-resolve-reject': ['error'],
  'unicorn/no-useless-spread': ['error'],
  'unicorn/no-useless-undefined': ['error'],
  'unicorn/no-zero-fractions': ['error'],
  'unicorn/number-literal-case': ['error'],
  'unicorn/numeric-separators-style': [
    'error',
    {
      onlyIfContainsSeparator: false,
      hexadecimal: { minimumDigits: 0, groupLength: 2 },
      binary: { minimumDigits: 0, groupLength: 4 },
      octal: { minimumDigits: 0, groupLength: 4 },
      // eslint-disable-next-line id-denylist -- keyword is needed for the configuration
      number: { minimumDigits: 5, groupLength: 3 },
    },
  ],
  'unicorn/prefer-add-event-listener': ['error'],
  'unicorn/prefer-array-find': ['error'],
  'unicorn/prefer-array-flat-map': ['error'],
  'unicorn/prefer-array-flat': ['error'],
  'unicorn/prefer-array-index-of': ['error'],
  'unicorn/prefer-array-some': ['error'],
  'unicorn/prefer-at': ['error', { checkAllIndexAccess: true }],
  'unicorn/prefer-code-point': ['error'],
  'unicorn/prefer-date-now': ['error'],
  'unicorn/prefer-default-parameters': ['error'],
  'unicorn/prefer-dom-node-append': ['error'],
  'unicorn/prefer-dom-node-dataset': ['error'],
  'unicorn/prefer-dom-node-remove': ['error'],
  'unicorn/prefer-dom-node-text-content': ['error'],
  'unicorn/prefer-export-from': ['error', { ignoreUsedVariables: true }],
  'unicorn/prefer-includes': ['error'],
  'unicorn/prefer-json-parse-buffer': ['error'],
  'unicorn/prefer-keyboard-event-key': ['error'],
  'unicorn/prefer-math-trunc': ['error'],
  'unicorn/prefer-modern-dom-apis': ['error'],
  'unicorn/prefer-module': ['off'],
  'unicorn/prefer-negative-index': ['error'],
  'unicorn/prefer-node-protocol': ['off'],
  'unicorn/prefer-number-properties': ['error'],
  'unicorn/prefer-object-from-entries': ['error'],
  'unicorn/prefer-optional-catch-binding': ['error'],
  'unicorn/prefer-prototype-methods': ['error'],
  'unicorn/prefer-query-selector': ['error'],
  'unicorn/prefer-reflect-apply': ['error'],
  'unicorn/prefer-regexp-test': ['error'],
  'unicorn/prefer-set-has': ['error'],
  'unicorn/prefer-spread': ['error'],
  'unicorn/prefer-string-replace-all': ['error'],
  'unicorn/prefer-string-slice': ['error'],
  'unicorn/prefer-string-starts-ends-with': ['error'],
  'unicorn/prefer-string-trim-start-end': ['error'],
  'unicorn/prefer-switch': ['error'],
  'unicorn/prefer-ternary': ['error', 'only-single-line'],
  'unicorn/prefer-top-level-await': ['off'],
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
  'unicorn/relative-url-style': ['error'],
  'unicorn/require-array-join-separator': ['error'],
  'unicorn/require-number-to-fixed-digits-argument': ['error'],
  'unicorn/require-post-message-target-origin': ['off'],
  'unicorn/string-content': ['off'],
  'unicorn/template-indent': ['off'],
  'unicorn/text-encoding-identifier-case': ['error'],
  'unicorn/throw-new-error': ['error'],
};

const overrides: Overrides = [
  {
    files: ['*.ts', '*.tsx'],
    rules: {
      // makes the "Type Guard" function useless, because the corresponding type is not taken over
      'unicorn/no-array-callback-reference': ['off'],
    },
  },
  {
    files: ['*.tsx'],
    excludedFiles: ['index.tsx', 'index.test.tsx', '_app.tsx', '_document.tsx'],
    rules: { 'unicorn/filename-case': ['error', { case: 'pascalCase' }] },
    // "unicorn/filename-case": ["error", { "case": "pascalCase", "ignore": ["^[A-Z][a-zA-Z0-9]*\\.test\\.tsx$"] }]
  },
  {
    files: ['*.tsx'],
    excludedFiles: ['_app.tsx', '_document.tsx'],
    rules: { 'unicorn/no-null': ['off'] },
  },
  {
    files: ['**/tests/**/*.test.js', '**/tests/**/*.test.ts', '**/tests/**/*.test.tsx'],
    rules: {
      'unicorn/no-null': ['off'],
    },
  },
];

const nextOverrides: Overrides = [
  {
    files: ['pages/**/*.tsx'],
    rules: { 'unicorn/filename-case': ['off'] },
  },
];

const createUnicornConfig = (): DefaultObject => ({
  ...defaultObject,
  env: { es2022: true },
  plugins: ['unicorn'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  rules,
  overrides: [...overrides, ...(hasLibrary('next') ? nextOverrides : [])],
});

export { createUnicornConfig };
