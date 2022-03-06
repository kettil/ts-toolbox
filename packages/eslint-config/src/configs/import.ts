import { defaultObject } from '../lib/defaultObject';
import { hasLibrary } from '../lib/hasLibrary';
import type { DefaultObject } from '../types/defaultObject';
import type { Overrides } from '../types/overrides';
import type { Rules } from '../types/rules';

const rules: Rules = {
  'import/default': ['error'],
  'import/dynamic-import-chunkname': ['off', { importFunctions: [], webpackChunknameFormat: '[0-9a-zA-Z-_/.]+' }],
  'import/export': ['error'],
  'import/exports-last': ['off'],
  'import/extensions': [
    'error',
    'always',
    { ignorePackages: true, pattern: { js: 'never', ts: 'never', tsx: 'never' } },
  ],
  'import/first': ['error'],
  'import/group-exports': ['error'],
  'import/imports-first': ['off'],
  'import/max-dependencies': ['error', { max: 15 }],
  'import/named': ['error'],
  'import/namespace': ['error'],
  'import/newline-after-import': ['error'],
  'import/no-absolute-path': ['error'],
  'import/no-amd': ['error'],
  'import/no-anonymous-default-export': [
    'error',
    {
      allowArray: false,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowLiteral: false,
      allowObject: false,
    },
  ],
  'import/no-commonjs': ['off'],
  'import/no-cycle': ['error'],
  'import/no-default-export': ['error'],
  'import/no-deprecated': ['off'],
  'import/no-duplicates': ['warn'],
  'import/no-dynamic-require': ['error'],
  'import/no-extraneous-dependencies': [
    'error',
    { devDependencies: ['**/*.test.js', '**/*.test.ts', '**/*.test.tsx', '**/tests/shared/**/*'] },
  ],
  'import/no-import-module-exports': ['error'],
  'import/no-internal-modules': ['off', { allow: [] }],
  'import/no-mutable-exports': ['error'],
  'import/no-named-as-default': ['warn'],
  'import/no-named-as-default-member': ['warn'],
  'import/no-named-default': ['error'],
  'import/no-named-export': ['off'],
  'import/no-namespace': ['off'],
  'import/no-nodejs-modules': ['off'],
  'import/no-relative-packages': ['error'],
  'import/no-relative-parent-imports': ['off'],
  'import/no-restricted-paths': ['off'],
  'import/no-self-import': ['error'],
  'import/no-unassigned-import': ['off'],
  'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
  'import/no-unused-modules': ['error', { unusedExports: true, missingExports: true }],
  'import/no-useless-path-segments': ['error', { commonjs: true }],
  'import/no-webpack-loader-syntax': ['error'],
  'import/order': [
    'error',
    {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'unknown'],
      alphabetize: { order: 'asc', caseInsensitive: true },
      pathGroups: [{ pattern: '#*/**', group: 'internal' }],
    },
  ],
  'import/prefer-default-export': ['off'],
  'import/unambiguous': ['off'],
};

const overrides: Overrides = [
  {
    files: ['babel.config.js', 'jest.config.js'],
    rules: { 'import/extensions': ['off'] },
  },
  {
    files: ['**/src/index.js', '**/src/index.ts', '**/src/bin/**/*'],
    rules: {
      'import/no-unused-modules': ['off'],
    },
  },
  {
    files: ['**/index.js', '**/index.ts'],
    rules: {
      'import/max-dependencies': ['error', { max: 30 }],
    },
  },
  {
    files: ['*.js'],
    rules: { 'import/no-unused-modules': ['off'] },
  },
];

const typescriptOverrides: Overrides = [
  {
    files: ['*.ts', '*.tsx'],
    rules: { 'import/named': ['off'] },
  },
];

const nextOverrides: Overrides = [
  {
    files: ['pages/**/*.tsx'],
    rules: {
      'import/no-unused-modules': ['error', { unusedExports: false, missingExports: true }],
      'import/prefer-default-export': ['error'],
      'import/no-default-export': ['off'],
    },
  },
];

const reduxOverrides: Overrides = [
  {
    files: [
      '**/src/modules/**/actions/**/*.js',
      '**/src/modules/**/actions/**/*.ts',
      '**/src/modules/**/reducers/**/*.js',
      '**/src/modules/**/reducers/**/*.ts',
    ],
    rules: { 'import/no-cycle': ['off'] },
  },
];

const jestOverrides: Overrides = [
  {
    files: ['*.test.js', '*.test.ts', '*.test.tsx'],
    rules: {
      'import/no-unused-modules': ['error', { unusedExports: true, missingExports: false }],
    },
  },
  {
    files: ['**/tests/type/**/*.test.ts', '**/tests/type/**/*.test.tsx'],
    rules: { 'import/no-unused-modules': ['error', { unusedExports: true, missingExports: false }] },
  },
  {
    files: ['**/tests/*/pre.ts', '**/tests/*/post.ts', '**/tests/*/pre.js', '**/tests/*/post.js'],
    rules: { 'import/no-unused-modules': ['error', { unusedExports: true, missingExports: false }] },
  },
  {
    files: ['**/tests/shared/__mock__/*'],
    rules: {
      'import/group-exports': ['off'],
      'import/no-default-export': ['off'],
    },
  },
  {
    files: ['**/tests/type/**/*.test.ts'],
    rules: { 'import/group-exports': ['off'] },
  },
];

const createImportConfig = (): DefaultObject => ({
  ...defaultObject,
  parserOptions: { sourceType: 'module', ecmaVersion: 'latest' },
  plugins: ['import'],
  rules,
  overrides: [
    ...overrides,
    ...(hasLibrary('typescript') ? typescriptOverrides : []),
    ...(hasLibrary('next') ? nextOverrides : []),
    ...(hasLibrary('redux') ? reduxOverrides : []),
    ...(hasLibrary('jest') ? jestOverrides : []),
  ],
});

export { createImportConfig, rules as importRules };
