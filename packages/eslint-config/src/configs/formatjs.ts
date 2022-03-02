import { defaultObject } from '../lib/defaultObject';
import { hasLibrary } from '../lib/hasLibrary';
import type { DefaultObject } from '../types/defaultObject';
import type { Rules } from '../types/rules';

const rules: Rules = {
  'formatjs/blocklist-elements': ['off'],
  'formatjs/enforce-default-message': ['off'],
  'formatjs/enforce-description': ['off'],
  'formatjs/enforce-id': ['off'],
  'formatjs/enforce-placeholders': ['error'],
  'formatjs/enforce-plural-rules': ['error'],
  'formatjs/no-camel-case': ['error'],
  'formatjs/no-complex-selectors': ['error', { limit: 3 }],
  'formatjs/no-emoji': ['error'],
  'formatjs/no-id': ['off'],
  'formatjs/no-multiple-plurals': ['off'],
  'formatjs/no-multiple-whitespaces': ['off'],
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

export { createFormatjsConfig, rules as formatjsRules };
