import { defaultObject } from '../lib/defaultObject';
import { hasLibrary } from '../lib/hasLibrary';
import { DefaultObject } from '../types/defaultObject';
import { Rules } from '../types/rules';

const rules: Rules = {
  'formatjs/enforce-description': ['off'],
  'formatjs/enforce-placeholders': ['error'],
  'formatjs/enforce-plural-rules': ['error'],
  'formatjs/no-complex-selectors': ['error', { limit: 3 }],
  'formatjs/no-emoji': ['error'],
  'formatjs/no-offset': ['error'],
};

const createFormatjsConfig = (): DefaultObject => {
  const config = {
    ...defaultObject,
  };

  if (hasLibrary('react-intl')) {
    config.plugins = ['formatjs'];
    config.rules = rules;
  }

  return config;
};

export { createFormatjsConfig };
