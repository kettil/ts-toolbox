const defaultObject = require('../lib/defaultObject');
const hasLibrary = require('../lib/hasLibrary');

if (hasLibrary('react-intl')) {
  const rules = {
    'formatjs/enforce-description': ['off'],
    'formatjs/enforce-placeholders': ['error'],
    'formatjs/enforce-plural-rules': ['error'],
    'formatjs/no-complex-selectors': ['error', { limit: 3 }],
    'formatjs/no-emoji': ['error'],
    'formatjs/no-offset': ['error'],
  };

  module.exports = { ...defaultObject, plugins: ['formatjs'], rules };
} else {
  module.exports = defaultObject;
}
