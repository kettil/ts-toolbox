const defaultObject = require('../lib/defaultObject');
const hasLibrary = require('../lib/hasLibrary');

const config = { ...defaultObject };

const rules = {
  'jest-dom/prefer-checked': ['error'],
  'jest-dom/prefer-empty': ['error'],
  'jest-dom/prefer-enabled-disabled': ['error'],
  'jest-dom/prefer-focus': ['error'],
  'jest-dom/prefer-in-document': ['error'],
  'jest-dom/prefer-required': ['error'],
  'jest-dom/prefer-to-have-attribute': ['error'],
  'jest-dom/prefer-to-have-text-content': ['error'],
  'jest-dom/prefer-to-have-value': ['error'],
};

if (hasLibrary('@testing-library/jest-dom')) {
  config.plugins = ['jest-dom'];
  config.rules = rules;
}

module.exports = config;
