const defaultObject = require('../lib/defaultObject');
const hasLibrary = require('../lib/hasLibrary');

const rules = {
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
  'import/group-exports': ['off'],
  'import/imports-first': ['off'],
  'import/max-dependencies': ['off', { max: 10 }],
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
  'import/no-default-export': ['off'],
  'import/no-deprecated': ['off'],
  'import/no-duplicates': ['warn'],
  'import/no-dynamic-require': ['error'],
  'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.test.ts', '**/*.test.tsx'] }],
  'import/no-internal-modules': ['off', { allow: [] }],
  'import/no-mutable-exports': ['error'],
  'import/no-named-as-default': ['warn'],
  'import/no-named-as-default-member': ['warn'],
  'import/no-named-default': ['error'],
  'import/no-named-export': ['off'],
  'import/no-namespace': ['off'],
  'import/no-nodejs-modules': ['off'],
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
  'import/prefer-default-export': ['error'],
  'import/unambiguous': ['off'],
};

const overrides = [
  {
    files: ['babel.config.js', 'jest.config.js'],
    rules: { 'import/extensions': ['off'] },
  },
  {
    files: ['**/src/index.js', '**/src/index.ts', '**/src/bin/**/*'],
    rules: { 'import/no-unused-modules': ['off'] },
  },
  {
    files: ['*.js'],
    rules: { 'import/no-unused-modules': ['off'] },
  },
];

if (hasLibrary('typescript')) {
  overrides.push(
    {
      files: ['**/src/**/types.ts'],
      rules: {
        'import/no-unused-modules': ['error', { unusedExports: true, missingExports: false }],
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: { 'import/named': 'off' },
    },
  );
}

if (hasLibrary('next')) {
  overrides.push({
    files: ['pages/**/*.jsx', 'pages/**/*.tsx'],
    rules: { 'import/no-unused-modules': ['off'] },
  });
}

if (hasLibrary('redux')) {
  overrides.push(
    {
      files: [
        '**/src/modules/**/actions/**/*.js',
        '**/src/modules/**/actions/**/*.ts',
        '**/src/modules/**/selectors/**/*.js',
        '**/src/modules/**/selectors/**/*.ts',
        '**/src/modules/**/schemas/**/*.js',
        '**/src/modules/**/schemas/**/*.ts',
      ],
      rules: {
        'import/default': ['off'],
        'import/no-default-export': ['error'],
        'import/no-unused-modules': ['error', { unusedExports: true, missingExports: false }],
        'import/prefer-default-export': ['off'],
      },
    },
    {
      files: [
        '**/src/modules/**/actions/**/*.js',
        '**/src/modules/**/actions/**/*.ts',
        '**/src/modules/**/reducers/**/*.js',
        '**/src/modules/**/reducers/**/*.ts',
      ],
      rules: { 'import/no-cycle': 'off' },
    },
  );
}

if (hasLibrary('jest')) {
  overrides.push(
    {
      files: ['**/src/__jest__/*', '*.test.js', '*.test.ts', '*.test.jsx', '*.test.tsx'],
      rules: {
        'import/default': 'off',
        'import/no-unused-modules': ['error', { unusedExports: true, missingExports: false }],
      },
    },
    {
      files: ['tests/type/**/*.test.ts', 'tests/type/**/*.test.tsx'],
      rules: { 'import/no-unused-modules': ['off'] },
    },
    {
      files: ['tests/*/pre.ts', 'tests/*/post.ts', 'tests/*/pre.js', 'tests/*/post.js'],
      rules: { 'import/no-unused-modules': ['off'] },
    },
  );
}

module.exports = {
  ...defaultObject,
  parserOptions: { sourceType: 'module', ecmaVersion: 2020 },
  plugins: ['import'],
  rules,
  overrides,
};
