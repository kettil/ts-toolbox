import { join } from 'path';
import { defaultObject } from '../lib/defaultObject';
import { hasLibrary } from '../lib/hasLibrary';
import type { DefaultObject } from '../types/defaultObject';
import type { Overrides } from '../types/overrides';
import type { Rules } from '../types/rules';
import { eslintRules } from './eslint';

const rules: Rules = {
  '@typescript-eslint/adjacent-overload-signatures': ['error'],
  '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
  '@typescript-eslint/await-thenable': ['error'],
  '@typescript-eslint/ban-ts-comment': ['error'],
  '@typescript-eslint/ban-tslint-comment': ['error'],
  '@typescript-eslint/ban-types': ['error', { types: { Object: 'Use {} instead' } }],
  '@typescript-eslint/brace-style': eslintRules['brace-style'],
  '@typescript-eslint/class-literal-property-style': ['off'],
  '@typescript-eslint/comma-dangle': eslintRules['comma-dangle'],
  '@typescript-eslint/comma-spacing': eslintRules['comma-spacing'],
  '@typescript-eslint/consistent-indexed-object-style': ['off'],
  '@typescript-eslint/consistent-type-assertions': ['error'],
  '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
  '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports', disallowTypeAnnotations: true }],
  '@typescript-eslint/default-param-last': ['error'],
  '@typescript-eslint/dot-notation': ['error', { allowKeywords: true, allowPattern: '' }],
  '@typescript-eslint/explicit-function-return-type': ['off'],
  '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
  '@typescript-eslint/explicit-module-boundary-types': ['error'],
  '@typescript-eslint/func-call-spacing': eslintRules['func-call-spacing'],
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
  '@typescript-eslint/init-declarations': eslintRules['init-declarations'],
  '@typescript-eslint/keyword-spacing': eslintRules['keyword-spacing'],
  '@typescript-eslint/lines-between-class-members': eslintRules['lines-between-class-members'],
  '@typescript-eslint/member-delimiter-style': ['error'],
  '@typescript-eslint/member-ordering': ['off'],
  '@typescript-eslint/method-signature-style': ['error', 'method'], // TOD0 tests
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'default',
      format: ['strictCamelCase', 'StrictPascalCase'],
      filter: { regex: '^(_id|toJSON)$', match: false },
    },
    { selector: 'parameter', format: ['strictCamelCase', 'StrictPascalCase'], leadingUnderscore: 'allow' },
    { selector: 'typeLike', format: ['StrictPascalCase'] },
    { selector: 'interface', format: ['PascalCase'], custom: { regex: '^I[A-Z]', match: false } },
    {
      selector: 'variable',
      types: ['boolean'],
      format: ['PascalCase'],
      prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
    },
  ],
  '@typescript-eslint/no-array-constructor': ['error'],
  '@typescript-eslint/no-base-to-string': ['error'],
  '@typescript-eslint/no-confusing-non-null-assertion': ['error'],
  '@typescript-eslint/no-confusing-void-expression': ['error'],
  '@typescript-eslint/no-dupe-class-members': eslintRules['no-dupe-class-members'],
  '@typescript-eslint/no-duplicate-imports': eslintRules['no-duplicate-imports'],
  '@typescript-eslint/no-dynamic-delete': ['off'],
  '@typescript-eslint/no-empty-function': ['error'],
  '@typescript-eslint/no-empty-interface': ['error'],
  '@typescript-eslint/no-explicit-any': ['error'],
  '@typescript-eslint/no-extra-non-null-assertion': ['error'],
  '@typescript-eslint/no-extra-parens': eslintRules['no-extra-parens'],
  '@typescript-eslint/no-extra-semi': eslintRules['no-extra-semi'],
  '@typescript-eslint/no-extraneous-class': ['off'],
  '@typescript-eslint/no-floating-promises': ['error'],
  '@typescript-eslint/no-for-in-array': ['error'],
  '@typescript-eslint/no-implicit-any-catch': ['error', { allowExplicitAny: false }],
  '@typescript-eslint/no-implied-eval': ['error'],
  '@typescript-eslint/no-inferrable-types': ['error'],
  '@typescript-eslint/no-invalid-this': ['off'],
  '@typescript-eslint/no-invalid-void-type': ['off'],
  '@typescript-eslint/no-loop-func': eslintRules['no-loop-func'],
  '@typescript-eslint/no-loss-of-precision': eslintRules['no-loop-func'],
  '@typescript-eslint/no-magic-numbers': ['off'],
  '@typescript-eslint/no-meaningless-void-operator': ['error'],
  '@typescript-eslint/no-misused-new': ['error'],
  '@typescript-eslint/no-misused-promises': ['error'],
  '@typescript-eslint/no-namespace': ['error'],
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': ['error'],
  '@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],
  '@typescript-eslint/no-non-null-assertion': ['warn'],
  '@typescript-eslint/no-parameter-properties': ['off'],
  '@typescript-eslint/no-redeclare': eslintRules['no-redeclare'],
  '@typescript-eslint/no-require-imports': ['error'],
  '@typescript-eslint/no-restricted-imports': ['off'],
  '@typescript-eslint/no-shadow': eslintRules['no-shadow'],
  '@typescript-eslint/no-this-alias': ['error'],
  '@typescript-eslint/no-throw-literal': eslintRules['no-throw-literal'],
  '@typescript-eslint/no-type-alias': ['off'],
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],
  '@typescript-eslint/no-unnecessary-condition': ['error', { allowConstantLoopConditions: true }],
  '@typescript-eslint/no-unnecessary-qualifier': ['error'],
  '@typescript-eslint/no-unnecessary-type-arguments': ['off'],
  '@typescript-eslint/no-unnecessary-type-assertion': ['error'],
  '@typescript-eslint/no-unnecessary-type-constraint': ['error'],
  '@typescript-eslint/no-unsafe-argument': ['error'],
  '@typescript-eslint/no-unsafe-assignment': ['error'],
  '@typescript-eslint/no-unsafe-call': ['error'],
  '@typescript-eslint/no-unsafe-member-access': ['error'],
  '@typescript-eslint/no-unsafe-return': ['error'],
  '@typescript-eslint/no-unused-expressions': eslintRules['no-unused-expressions'],
  '@typescript-eslint/no-unused-vars': ['error'],
  '@typescript-eslint/no-use-before-define': ['error'],
  '@typescript-eslint/no-useless-constructor': eslintRules['no-useless-constructor'],
  '@typescript-eslint/no-var-requires': ['error'],
  '@typescript-eslint/non-nullable-type-assertion-style': ['error'],
  '@typescript-eslint/object-curly-spacing': ['error', 'always'],
  '@typescript-eslint/padding-line-between-statements': eslintRules['padding-line-between-statements'],
  '@typescript-eslint/prefer-as-const': ['error'],
  '@typescript-eslint/prefer-enum-initializers': ['error'],
  '@typescript-eslint/prefer-for-of': ['off'],
  '@typescript-eslint/prefer-function-type': ['error'],
  '@typescript-eslint/prefer-includes': ['error'],
  '@typescript-eslint/prefer-literal-enum-member': ['error'],
  '@typescript-eslint/prefer-namespace-keyword': ['error'],
  '@typescript-eslint/prefer-nullish-coalescing': ['error'],
  '@typescript-eslint/prefer-optional-chain': ['error'],
  '@typescript-eslint/prefer-readonly-parameter-types': ['off'],
  '@typescript-eslint/prefer-readonly': ['off'],
  '@typescript-eslint/prefer-reduce-type-parameter': ['error'],
  '@typescript-eslint/prefer-regexp-exec': ['error'],
  '@typescript-eslint/prefer-return-this-type': ['error'],
  '@typescript-eslint/prefer-string-starts-ends-with': ['error'],
  '@typescript-eslint/prefer-ts-expect-error': ['error'],
  '@typescript-eslint/promise-function-async': ['error'],
  '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],
  '@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],
  '@typescript-eslint/require-await': ['error'],
  '@typescript-eslint/restrict-plus-operands': ['error', { checkCompoundAssignments: true }],
  '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true, allowNullish: true }],
  '@typescript-eslint/return-await': ['error', 'in-try-catch'],
  '@typescript-eslint/semi': eslintRules.semi,
  '@typescript-eslint/sort-type-union-intersection-members': ['error'],
  '@typescript-eslint/space-before-function-paren': eslintRules['space-before-function-paren'],
  '@typescript-eslint/space-infix-ops': eslintRules['space-infix-ops'],
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
  '@typescript-eslint/switch-exhaustiveness-check': ['error'],
  '@typescript-eslint/triple-slash-reference': ['error'],
  '@typescript-eslint/type-annotation-spacing': ['error'],
  '@typescript-eslint/typedef': ['off'],
  '@typescript-eslint/unbound-method': ['error'],
  '@typescript-eslint/unified-signatures': ['off'],

  'brace-style': ['off'], // see @typescript-eslint/brace-style
  'comma-dangle': ['off'], // see @typescript-eslint/comma-dangle
  'comma-spacing': ['off'], // see @typescript-eslint/comma-spacing
  'default-param-last': ['off'], // see @typescript-eslint/default-param-last
  'dot-notation': ['off'], // see @typescript-eslint/dot-notation
  'func-call-spacing': ['off'], // see @typescript-eslint/func-call-spacing
  'init-declarations': ['off'], // see @typescript-eslint/init-declarations
  'keyword-spacing': ['off'], // see @typescript-eslint/keyword-spacing
  'lines-between-class-members': ['off'], // see @typescript-eslint/lines-between-class-members
  'no-array-constructor': ['off'], // see @typescript-eslint/no-array-constructor
  'no-dupe-class-members': ['off'], // see @typescript-eslint/no-dupe-class-members; This is already checked by Typescript.
  'no-duplicate-imports': ['off'], // see @typescript-eslint/no-duplicate-imports
  'no-empty-function': ['off'], // see @typescript-eslint/no-empty-function
  'no-extra-parens': ['off'], // see @typescript-eslint/no-extra-parens
  'no-extra-semi': ['off'], // see @typescript-eslint/no-extra-semi
  'no-implied-eval': ['off'], // see @typescript-eslint/no-implied-eval
  'no-invalid-this': ['off'], // see @typescript-eslint/no-invalid-this
  'no-loop-func': ['off'], // see @typescript-eslint/no-loop-func
  'no-loss-of-precision': ['off'], // see @typescript-eslint/no-loss-of-precision
  'no-redeclare': ['off'], // see @typescript-eslint/no-redeclare
  'no-restricted-imports': ['off'], // see @typescript-eslint/no-restricted-imports
  'no-return-await': ['off'], // see @typescript-eslint/return-await
  'no-shadow': ['off'], // see @typescript-eslint/no-shadow
  'no-throw-literal': ['off'], // see @typescript-eslint/no-throw-literal
  'no-unused-expressions': ['off'], // see @typescript-eslint/no-unused-expressions
  'no-unused-vars': ['off'], // see @typescript-eslint/no-unused-vars
  'no-use-before-define': ['off'], // see @typescript-eslint/no-use-before-define
  'no-useless-constructor': ['off'], // see @typescript-eslint/no-useless-constructor
  'no-var': ['error'],
  'object-curly-spacing': ['off'], // see @typescript-eslint/object-curly-spacing
  'padding-line-between-statements': ['off'], // see @typescript-eslint/padding-line-between-statements
  'prefer-const': ['error'],
  'prefer-rest-params': ['error'],
  'prefer-spread': ['error'],
  'require-await': ['off'], // see @typescript-eslint/require-await
  'space-before-function-paren': ['off'], // @typescript-eslint/space-before-function-paren
  'space-infix-ops': ['off'], // see @typescript-eslint/space-infix-ops
  camelcase: ['off'], // see @typescript-eslint/naming-convention
  indent: ['off'], // see @typescript-eslint/indent
  quotes: ['off'], // see @typescript-eslint/quotes
  semi: ['off'], // see @typescript-eslint/semi

  // Checked by Typescript - ts(2378)
  'getter-return': ['off'],
  // Checked by Typescript - ts(2300)
  'no-dupe-args': ['off'],
  // Checked by Typescript - ts(1117)
  'no-dupe-keys': ['off'],
  // Checked by Typescript - ts(7027)
  'no-unreachable': ['off'],
  // Checked by Typescript - ts(2367)
  'valid-typeof': ['off'],
  // Checked by Typescript - ts(2588)
  'no-const-assign': ['off'],
  // Checked by Typescript - ts(2588)
  'no-new-symbol': ['off'],
  // Checked by Typescript - ts(2376)
  'no-this-before-super': ['off'],
  // This is checked by Typescript using the option `strictNullChecks`.
  'no-undef': ['off'],
};

const overrides: Overrides = [
  {
    files: ['*.ts', '*.tsx'],
    rules: {
      ...rules,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: { project: join('.', 'tsconfig.json') },
  },
  {
    files: ['**/tests/**/*.test.js', '**/tests/**/*.test.ts', '**/tests/**/*.test.tsx'],
    rules: {
      '@typescript-eslint/no-empty-function': ['off'],
      '@typescript-eslint/no-misused-promises': ['off'],
    },
  },
];

const createTypescriptConfig = (): DefaultObject => {
  const config = { ...defaultObject };

  if (hasLibrary('typescript')) {
    config.settings = {
      'import/extensions': ['.ts', '.tsx', '.d.ts'],
      'import/external-module-folders': ['node_modules', 'node_modules/@types'],
      'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'] },
      'import/resolver': { node: { extensions: ['.ts', '.tsx', '.d.ts'] } },
    };

    config.parserOptions = { ecmaVersion: 2020, sourceType: 'module' };
    config.plugins = ['@typescript-eslint'];
    config.overrides = overrides;
  }

  return config;
};

export { createTypescriptConfig };
