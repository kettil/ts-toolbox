/* eslint-disable @typescript-eslint/naming-convention -- external definition */
import { config as defaultConfig } from './common';
import type { DefaultObject } from './types';

const config: DefaultObject = {
  ...defaultConfig,
  rules: {
    ...defaultConfig.rules,

    'require-publishConfig': 'off',

    'repository-type': 'off',
    'homepage-type': 'off',
    'keywords-type': 'off',

    'valid-values-private': ['error', [true]],
  },
};

export { config };
