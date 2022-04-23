/* eslint-disable @typescript-eslint/naming-convention -- external definition */
import { config as defaultConfig } from './common';
import type { DefaultObject } from './types';

const config: DefaultObject = {
  ...defaultConfig,
  rules: {
    ...defaultConfig.rules,

    'require-bin': 'error',
  },
};

export { config };
