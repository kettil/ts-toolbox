const defaultObject = require('../lib/defaultObject');
const hasLibrary = require('../lib/hasLibrary');

const config = { ...defaultObject };

const rules = {
  'testing-library/await-async-query': ['error'],
  'testing-library/await-async-utils': ['error'],
  'testing-library/consistent-data-testid': ['error'],
  'testing-library/no-await-sync-query': ['error'],
  'testing-library/no-container': ['error'],
  'testing-library/no-debugging-utils': ['off'],
  'testing-library/no-manual-cleanup': ['error'],
  'testing-library/no-node-access': ['error'],
  'testing-library/no-render-in-setup': ['error'],
  'testing-library/no-wait-for-empty-callback': ['error'],
  'testing-library/no-wait-for-multiple-assertions': ['error'],
  'testing-library/no-wait-for-side-effects': ['error'],
  'testing-library/no-wait-for-snapshot': ['error'],
  'testing-library/prefer-screen-queries': ['error'],
  'testing-library/prefer-wait-for': ['error'],
  'testing-library/render-result-naming-convention': ['error'],
};

if (hasLibrary('react')) {
  Object.assign(rules, {
    'testing-library/no-debugging-utils': ['error'],
    'testing-library/no-dom-import': ['error', 'react'],
  });
}

if (hasLibrary('@testing-library/react') || hasLibrary('@testing-library/react-hooks')) {
  config.plugins = ['testing-library'];
  config.rules = rules;
}

module.exports = config;
