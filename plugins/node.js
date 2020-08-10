const defaultObject = require('../lib/defaultObject');

const globals = {
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

const rules = {
  'node/callback-return': ['off'],
  'node/file-extension-in-import': ['error', 'always', { '.js': 'never', '.ts': 'never', '.tsx': 'never' }],
  'node/global-require': ['error'],
  'node/handle-callback-err': ['off'],
  'node/no-deprecated-api': ['error'],
  'node/no-extraneous-import': ['error'],
  'node/no-extraneous-require': ['error'],
  'node/no-exports-assign': ['error'],
  'node/no-new-require': ['error'],
  'node/no-missing-import': ['error', { tryExtensions: ['.js', '.jsx', '.json'] }],
  'node/no-missing-require': ['error'],
  'node/no-mixed-requires': ['off'],
  'node/no-path-concat': ['error'],
  'node/no-process-env': ['off'],
  'node/no-process-exit': ['error'],
  'node/no-sync': ['error'],
  'node/no-unpublished-bin': ['error'],
  'node/no-unpublished-import': ['error'],
  'node/no-unpublished-require': ['error'],
  'node/no-unsupported-features/es-builtins': ['error'],
  'node/no-unsupported-features/es-syntax': ['error', { ignores: ['modules'] }],
  'node/no-unsupported-features/node-builtins': ['error'],
  'node/prefer-global/buffer': ['error', 'always'],
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

const overrides = [
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
];

module.exports = {
  ...defaultObject,

  globals,
  plugins: ['node'],
  parserOptions: {
    ecmaFeatures: { globalReturn: false },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules,
  overrides,
};
