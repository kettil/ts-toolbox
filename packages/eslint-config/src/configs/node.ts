/* eslint-disable @typescript-eslint/naming-convention -- external definition */
import { defaultObject } from '../lib/defaultObject';
import type { DefaultObject } from '../types/defaultObject';
import type { Globals } from '../types/globals';
import type { Overrides } from '../types/overrides';
import type { Rules } from '../types/rules';

const globals: Globals = {
  // ECMAScript
  ArrayBuffer: 'readonly',
  Atomics: 'readonly',
  BigInt: 'readonly',
  BigInt64Array: 'readonly',
  BigUint64Array: 'readonly',
  DataView: 'readonly',
  Float32Array: 'readonly',
  Float64Array: 'readonly',
  Int16Array: 'readonly',
  Int32Array: 'readonly',
  Int8Array: 'readonly',
  Map: 'readonly',
  Promise: 'readonly',
  Proxy: 'readonly',
  Reflect: 'readonly',
  Set: 'readonly',
  SharedArrayBuffer: 'readonly',
  Symbol: 'readonly',
  Uint16Array: 'readonly',
  Uint32Array: 'readonly',
  Uint8Array: 'readonly',
  Uint8ClampedArray: 'readonly',
  WeakMap: 'readonly',
  WeakSet: 'readonly',

  // ECMAScript (experimental)
  globalThis: 'readonly',

  // ECMA-404
  Intl: 'readonly',

  // Web Standard
  TextDecoder: 'readonly',
  TextEncoder: 'readonly',
  URL: 'readonly',
  URLSearchParams: 'readonly',
  WebAssembly: 'readonly',
  clearInterval: 'readonly',
  clearTimeout: 'readonly',
  console: 'readonly',
  queueMicrotask: 'readonly',
  setInterval: 'readonly',
  setTimeout: 'readonly',

  // Node.js
  Buffer: 'readonly',
  GLOBAL: 'readonly',
  clearImmediate: 'readonly',
  global: 'readonly',
  process: 'readonly',
  root: 'readonly',
  setImmediate: 'readonly',

  __dirname: 'readonly',
  __filename: 'readonly',
  exports: 'writable',
  module: 'readonly',
  require: 'readonly',
};

const rules: Rules = {
  'node/callback-return': ['off'],
  'node/exports-style': ['error', 'exports'],
  'node/file-extension-in-import': ['error', 'always', { '.js': 'never', '.ts': 'never', '.tsx': 'never' }],
  'node/global-require': ['error'],
  'node/handle-callback-err': ['off'],
  'node/no-callback-literal': ['off'],
  'node/no-deprecated-api': ['error'],
  'node/no-exports-assign': ['error'],
  'node/no-extraneous-import': ['error'],
  'node/no-extraneous-require': ['error'],
  'node/no-hide-core-modules': ['off'],
  'node/no-missing-import': ['error', { tryExtensions: ['.js', '.jsx', '.json'] }],
  'node/no-missing-require': ['error'],
  'node/no-mixed-requires': ['off'],
  'node/no-new-require': ['error'],
  'node/no-path-concat': ['error'],
  'node/no-process-env': ['off'],
  'node/no-process-exit': ['error'],
  'node/no-restricted-import': ['off'],
  'node/no-restricted-require': ['off'],
  'node/no-sync': ['error'],
  'node/no-unpublished-bin': ['error'],
  'node/no-unpublished-import': ['error'],
  'node/no-unpublished-require': ['error'],
  'node/no-unsupported-features': ['off'],
  'node/no-unsupported-features/es-builtins': ['error'],
  'node/no-unsupported-features/es-syntax': ['error', { ignores: ['modules'] }],
  'node/no-unsupported-features/node-builtins': ['error'],
  'node/prefer-global/buffer': ['error', 'always'],
  'node/prefer-global/console': ['error'],
  'node/prefer-global/process': ['error'],
  'node/prefer-global/text-decoder': ['error', 'never'],
  'node/prefer-global/text-encoder': ['error', 'never'],
  'node/prefer-global/url-search-params': ['error', 'never'],
  'node/prefer-global/url': ['error', 'never'],
  'node/prefer-promises/dns': ['error'],
  'node/prefer-promises/fs': ['error'],
  'node/process-exit-as-throw': ['error'],
  'node/shebang': [
    'error',
    {
      convertPath: [
        { include: ['src/**/*.ts'], exclude: ['**/*.test.ts'], replace: ['^src/(.+)\\.ts$', 'build/$1.js'] },
        { include: ['src/**/*.tsx'], exclude: ['**/*.test.tsx'], replace: ['^src/(.+)\\.tsx$', 'build/$1.js'] },
      ],
    },
  ],
};

const overrides: Overrides = [
  {
    files: ['*.js'],
    rules: { 'node/exports-style': ['error', 'module.exports'] },
  },
  {
    files: ['*.ts', '*.tsx'],
    globals: {
      exports: 'off',
      module: 'off',
      require: 'off',
    },
    rules: {
      'node/no-missing-import': ['error', { tryExtensions: ['.js', '.jsx', '.json', '.ts', '.tsx'] }],
    },
  },
  {
    files: ['**/src/index.js', '**/src/index.ts'],
    rules: {
      'node/no-sync': ['off'],
    },
  },
];

const createNodeConfig = (): DefaultObject => ({
  ...defaultObject,

  globals,
  plugins: ['node'],
  parserOptions: {
    ecmaFeatures: { globalReturn: false },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules,
  overrides,
});

export { createNodeConfig, rules as nodeRules };
