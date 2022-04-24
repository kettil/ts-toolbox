/* eslint-disable @typescript-eslint/naming-convention -- external definition */
import { config as defaultConfig } from './common';
import type { DefaultObject } from './types';

const config: DefaultObject = {
  ...defaultConfig,
  rules: {
    ...defaultConfig.rules,

    'require-dependencies': 'off',
    'require-homepage': 'off',
    'require-keywords': 'off',
    'require-publishConfig': 'off',
    'require-repository': 'off',

    'valid-values-private': ['error', [true]],
  },
};

export { config };
