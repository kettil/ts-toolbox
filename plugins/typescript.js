const path = require('path');
const defaultObject = require('../lib/defaultObject');
const hasLibrary = require('../lib/hasLibrary');

const rules = {};

const overrides = [
  {
    files: ['*.ts', '*.tsx'],
    rules: {
      '@typescript-eslint/adjacent-overload-signatures': ['error'],
      '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
      '@typescript-eslint/await-thenable': ['error'],
      '@typescript-eslint/ban-ts-comment': ['error'],
      '@typescript-eslint/ban-types': ['error', { types: { Object: 'Use {} instead' } }],
      '@typescript-eslint/consistent-type-assertions': ['error'],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/explicit-function-return-type': ['off'],
      '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
      '@typescript-eslint/explicit-module-boundary-types': ['error'],
      indent: ['off'],
      '@typescript-eslint/indent': [
        'error',
        2,
        {
          SwitchCase: 1,
          FunctionDeclaration: { parameters: 'first' },
          ignoredNodes: ['TSTypeParameterInstantiation', 'TSTypeReference'],
          flatTernaryExpressions: false,
          ignoreComments: false,
        },
      ],
      camelcase: 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'default',
          format: ['strictCamelCase', 'StrictPascalCase'],
          filter: { regex: '^(_id|toJSON)$', match: false },
        },
        { selector: 'parameter', format: ['strictCamelCase', 'StrictPascalCase'], leadingUnderscore: 'allow' },
        { selector: 'typeLike', format: ['StrictPascalCase'] },
        {
          selector: 'interface',
          format: ['PascalCase'],
          custom: {
            regex: '^I[A-Z]',
            match: false,
          },
        },
        {
          selector: 'variable',
          types: ['boolean'],
          format: ['PascalCase'],
          prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
        },
      ],
      '@typescript-eslint/member-delimiter-style': ['error'],
      'no-array-constructor': 'off',
      '@typescript-eslint/no-array-constructor': ['error'],
      'no-empty-function': 'off',
      '@typescript-eslint/no-empty-function': ['error'],
      '@typescript-eslint/no-empty-interface': ['error'],
      '@typescript-eslint/no-explicit-any': ['error'],
      '@typescript-eslint/no-floating-promises': ['error'],
      '@typescript-eslint/no-for-in-array': ['error'],
      '@typescript-eslint/no-inferrable-types': ['error'],
      '@typescript-eslint/no-misused-new': ['error'],
      '@typescript-eslint/no-misused-promises': ['error'],
      '@typescript-eslint/no-namespace': ['error'],
      '@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],
      '@typescript-eslint/no-non-null-assertion': ['warn'],
      '@typescript-eslint/no-this-alias': ['error'],
      '@typescript-eslint/no-unnecessary-condition': ['error'],
      '@typescript-eslint/no-unnecessary-type-assertion': ['error'],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
      '@typescript-eslint/no-var-requires': ['error'],
      'object-curly-spacing': 'off',
      '@typescript-eslint/object-curly-spacing': ['error', 'always'],
      '@typescript-eslint/prefer-includes': ['error'],
      '@typescript-eslint/prefer-namespace-keyword': ['error'],
      '@typescript-eslint/prefer-nullish-coalescing': ['error'],
      '@typescript-eslint/prefer-regexp-exec': ['error'],
      '@typescript-eslint/prefer-string-starts-ends-with': ['error'],
      quotes: ['off'],
      '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],
      'require-await': ['off'],
      '@typescript-eslint/require-await': ['error'],
      'no-return-await': ['off'],
      '@typescript-eslint/return-await': ['error', 'in-try-catch'],
      '@typescript-eslint/sort-type-union-intersection-members': ['error'],
      '@typescript-eslint/strict-boolean-expressions': [
        'error',
        {
          allowString: false,
          allowNumber: false,
          allowNullableObject: true,
          allowNullableBoolean: true,
          allowNullableString: false,
          allowNullableNumber: false,
          allowAny: false,
        },
      ],
      '@typescript-eslint/triple-slash-reference': ['error'],
      '@typescript-eslint/type-annotation-spacing': ['error'],
      '@typescript-eslint/unbound-method': ['error'],
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',

      // Checked by Typescript - ts(2378)
      'getter-return': 'off',
      // Checked by Typescript - ts(2300)
      'no-dupe-args': 'off',
      // Checked by Typescript - ts(1117)
      'no-dupe-keys': 'off',
      // Checked by Typescript - ts(7027)
      'no-unreachable': 'off',
      // Checked by Typescript - ts(2367)
      'valid-typeof': 'off',
      // Checked by Typescript - ts(2588)
      'no-const-assign': 'off',
      // Checked by Typescript - ts(2588)
      'no-new-symbol': 'off',
      // Checked by Typescript - ts(2376)
      'no-this-before-super': 'off',
      // This is checked by Typescript using the option `strictNullChecks`.
      'no-undef': 'off',
      // This is already checked by Typescript.
      'no-dupe-class-members': 'off',
      // This is already checked by Typescript.
      'no-redeclare': 'off',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: { project: path.join('.', 'tsconfig.json') },
  },
  {
    files: ['*.test.ts', '*.test.tsx'],
    rules: {
      '@typescript-eslint/no-floating-promises': 'off',
    },
  },
];

if (hasLibrary('typescript')) {
  module.exports = {
    ...defaultObject,
    settings: {
      'import/extensions': ['.ts', '.tsx', '.d.ts'],
      'import/external-module-folders': ['node_modules', 'node_modules/@types'],
      'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'] },
      'import/resolver': { node: { extensions: ['.ts', '.tsx', '.d.ts'] } },
    },
    parserOptions: { ecmaVersion: 2020, sourceType: 'module' },
    plugins: ['@typescript-eslint'],
    rules,
    overrides,
  };
} else {
  module.exports = defaultObject;
}
