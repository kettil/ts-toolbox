import { config as defaultConfig } from './common';
import type { DefaultObject } from './types';

const config: DefaultObject = {
  ...defaultConfig,
  rules: {
    ...defaultConfig.rules,

    'require-main': 'error',
    'require-types': 'error',
  },
};

export { config };
