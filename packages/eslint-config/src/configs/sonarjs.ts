import { defaultObject } from '../lib/defaultObject';
import type { DefaultObject } from '../types/defaultObject';
import type { Overrides } from '../types/overrides';
import type { Rules } from '../types/rules';
import { eslintRules } from './eslint';

const rules: Rules = {
  'sonarjs/cognitive-complexity': eslintRules.complexity,
  'sonarjs/max-switch-cases': ['error'],
  'sonarjs/no-all-duplicated-branches': ['error'],
  'sonarjs/no-collapsible-if': ['error'],
  'sonarjs/no-collection-size-mischeck': ['error'],
  'sonarjs/no-duplicate-string': ['error', 10],
  'sonarjs/no-duplicated-branches': ['error'],
  'sonarjs/no-element-overwrite': ['error'],
  'sonarjs/no-extra-arguments': ['error'],
  'sonarjs/no-gratuitous-expressions': ['error'],
  'sonarjs/no-identical-conditions': ['error'],
  'sonarjs/no-identical-functions': ['error'],
  'sonarjs/no-identical-expressions': ['error'],
  'sonarjs/no-ignored-return': ['error'],
  'sonarjs/no-inverted-boolean-check': ['error'],
  'sonarjs/no-nested-switch': ['error'],
  'sonarjs/no-nested-template-literals': ['error'],
  'sonarjs/no-one-iteration-loop': ['error'],
  'sonarjs/no-redundant-boolean': ['error'],
  'sonarjs/no-redundant-jump': ['error'],
  'sonarjs/no-same-line-conditional': ['error'],
  'sonarjs/no-small-switch': ['error'],
  'sonarjs/no-unused-collection': ['error'],
  'sonarjs/no-use-of-empty-return-value': ['error'],
  'sonarjs/no-useless-catch': ['error'],
  'sonarjs/non-existent-operator': ['error'],
  'sonarjs/prefer-immediate-return': ['error'],
  'sonarjs/prefer-object-literal': ['error'],
  'sonarjs/prefer-single-boolean-return': ['error'],
  'sonarjs/prefer-while': ['error'],
};

const overrides: Overrides = [
  {
    files: ['*.test.js', '*.test.ts', '*.test.tsx'],
    rules: {
      'sonarjs/no-identical-functions': ['off'],
    },
  },
];

const createSonarjsConfig = (): DefaultObject => ({ ...defaultObject, plugins: ['sonarjs'], rules, overrides });

export { createSonarjsConfig };
