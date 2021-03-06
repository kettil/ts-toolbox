/* eslint-disable @typescript-eslint/naming-convention -- The naming convention is given by eslint */
import { defaultObject } from '../lib/defaultObject';
import type { DefaultObject } from '../types/defaultObject';
import type { Rules } from '../types/rules';

const rules: Rules = {
  'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
  'eslint-comments/no-aggregating-enable': ['error'],
  'eslint-comments/no-duplicate-disable': ['error'],
  'eslint-comments/no-restricted-disable': ['off'],
  'eslint-comments/no-unlimited-disable': ['error'],
  'eslint-comments/no-unused-disable': ['error'],
  'eslint-comments/no-unused-enable': ['error'],
  'eslint-comments/no-use': ['off'],
  'eslint-comments/require-description': ['error'],
};

const createEslintCommentsConfig = (): DefaultObject => ({ ...defaultObject, plugins: ['eslint-comments'], rules });

export { createEslintCommentsConfig, rules as eslintCommentsRules };
