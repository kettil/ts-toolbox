const defaultObject = require('../lib/defaultObject');
const hasLibrary = require('../lib/hasLibrary');

const config = { ...defaultObject };

const rules = {
  'react-hooks/exhaustive-deps': ['warn'],
  'react-hooks/rules-of-hooks': ['error'],
};

if (hasLibrary('react')) {
  config.plugins = ['react-hooks'];
  config.rules = rules;
}

module.exports = config;
