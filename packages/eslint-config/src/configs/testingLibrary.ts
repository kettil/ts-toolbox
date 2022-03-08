/* eslint-disable @typescript-eslint/naming-convention -- The naming convention is given by eslint */
import { defaultObject } from '../lib/defaultObject';
import { hasLibrary } from '../lib/hasLibrary';
import type { DefaultObject } from '../types/defaultObject';
import type { Rules } from '../types/rules';

const rules: Rules = {
  'testing-library/await-async-query': ['error'],
  'testing-library/await-async-utils': ['error'],
  'testing-library/await-fire-event': ['off'],
  'testing-library/consistent-data-testid': ['error'],
  'testing-library/no-await-sync-events': ['off'],
  'testing-library/no-await-sync-query': ['error'],
  'testing-library/no-container': ['error'],
  'testing-library/no-debugging-utils': ['off'],
  'testing-library/no-dom-import': ['off'],
  'testing-library/no-manual-cleanup': ['error'],
  'testing-library/no-node-access': ['error'],
  'testing-library/no-promise-in-fire-event': ['off'],
  'testing-library/no-render-in-setup': ['error'],
  'testing-library/no-unnecessary-act': ['off'],
  'testing-library/no-wait-for-empty-callback': ['error'],
  'testing-library/no-wait-for-multiple-assertions': ['error'],
  'testing-library/no-wait-for-side-effects': ['error'],
  'testing-library/no-wait-for-snapshot': ['error'],
  'testing-library/prefer-explicit-assert': ['off'],
  'testing-library/prefer-find-by': ['off'],
  'testing-library/prefer-presence-queries': ['off'],
  'testing-library/prefer-query-by-disappearance': ['off'],
  'testing-library/prefer-screen-queries': ['error'],
  'testing-library/prefer-user-event': ['off'],
  'testing-library/prefer-wait-for': ['error'],
  'testing-library/render-result-naming-convention': ['error'],
};

const reactRules: Rules = {
  'testing-library/no-debugging-utils': ['error'],
  'testing-library/no-dom-import': ['error', 'react'],
};

const createTestingLibraryConfig = (): DefaultObject => {
  const config = { ...defaultObject };

  if (hasLibrary('@testing-library/react') || hasLibrary('@testing-library/react-hooks')) {
    config.plugins = ['testing-library'];

    config.rules = {
      ...rules,
      ...(hasLibrary('react') ? reactRules : {}),
    };
  }

  return config;
};

export { createTestingLibraryConfig, rules as testingLibraryRules };
