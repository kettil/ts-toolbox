const defaultObject = require('../lib/defaultObject');
const hasLibrary = require('../lib/hasLibrary');

const rules = {
  'testing-library/await-async-query': ['error'],
  'testing-library/await-async-utils': ['error'],
  'testing-library/consistent-data-testid': ['error'],
  'testing-library/no-await-sync-query': ['error'],
  'testing-library/no-container': ['error'],
  'testing-library/no-manual-cleanup': ['error'],
};

if (hasLibrary('react')) {
  Object.assign(rules, {
    'testing-library/no-debug': ['error'],
    'testing-library/no-dom-import': ['error', 'react'],
  });
}

if (hasLibrary('@testing-library/react') || hasLibrary('@testing-library/react-hooks')) {
  module.exports = { ...defaultObject, plugins: ['testing-library'], rules };
} else {
  module.exports = defaultObject;
}
