import { defaultObject } from '../lib/defaultObject';
import { hasLibrary } from '../lib/hasLibrary';
import type { DefaultObject } from '../types/defaultObject';
import type { Rules } from '../types/rules';

const rules: Rules = {
  'react-hooks/exhaustive-deps': ['warn'],
  'react-hooks/rules-of-hooks': ['error'],
};

const createReactHooksConfig = (): DefaultObject => {
  const config = { ...defaultObject };

  if (hasLibrary('react')) {
    config.plugins = ['react-hooks'];
    config.rules = rules;
  }

  return config;
};

export { createReactHooksConfig, rules as reactHooksRules };
