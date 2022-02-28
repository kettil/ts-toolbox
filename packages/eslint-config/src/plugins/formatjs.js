const defaultObject = require('../lib/defaultObject');
const hasLibrary = require('../lib/hasLibrary');

const config = { ...defaultObject };

const rules = {
  'formatjs/enforce-description': ['off'],
  'formatjs/enforce-placeholders': ['error'],
  'formatjs/enforce-plural-rules': ['error'],
  'formatjs/no-complex-selectors': ['error', { limit: 3 }],
  'formatjs/no-emoji': ['error'],
  'formatjs/no-offset': ['error'],
};

if (hasLibrary('react-intl')) {
  config.plugins = ['formatjs'];
  config.rules = rules;
}

module.exports = config;
