/* eslint-disable @typescript-eslint/naming-convention -- The naming convention is given by eslint */
import { defaultObject } from '../lib/defaultObject';
import { hasLibrary } from '../lib/hasLibrary';
import type { DefaultObject } from '../types/defaultObject';
import type { Rules } from '../types/rules';

const rules: Rules = {
  'jest-dom/prefer-checked': ['error'],
  'jest-dom/prefer-empty': ['error'],
  'jest-dom/prefer-enabled-disabled': ['error'],
  'jest-dom/prefer-focus': ['error'],
  'jest-dom/prefer-in-document': ['error'],
  'jest-dom/prefer-required': ['error'],
  'jest-dom/prefer-to-have-attribute': ['error'],
  'jest-dom/prefer-to-have-class': ['error'],
  'jest-dom/prefer-to-have-style': ['error'],
  'jest-dom/prefer-to-have-text-content': ['error'],
  'jest-dom/prefer-to-have-value': ['error'],
};

const createJestDomConfig = (): DefaultObject => {
  const config = { ...defaultObject };

  if (hasLibrary('@testing-library/jest-dom')) {
    config.plugins = ['jest-dom'];
    config.rules = rules;
  }

  return config;
};

export { createJestDomConfig, rules as jestDomRules };
