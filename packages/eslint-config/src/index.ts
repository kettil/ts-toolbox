import { createEslintConfig } from './configs/eslint';
import { createEslintCommentsConfig } from './configs/eslintComments';
import { createFormatjsConfig } from './configs/formatjs';
import { createImportConfig } from './configs/import';
import { createJestConfig } from './configs/jest';
import { createJsxA11yConfig } from './configs/jsxA11y';
import { createNodeConfig } from './configs/node';
import { createReactConfig } from './configs/react';
import { createReactHooksConfig } from './configs/reactHooks';
import { createRegexpConfig } from './configs/regexp';
import { createSonarjsConfig } from './configs/sonarjs';
import { createTestingLibraryConfig } from './configs/testingLibrary';
import { createTestingLibraryJestDomConfig } from './configs/testingLibraryJestDom';
import { createTypescriptConfig } from './configs/typescript';
import { createUnicornConfig } from './configs/unicorn';
import { deepMerge } from './lib/deepEqual';
import { defaultObject } from './lib/defaultObject';
import type { DefaultObject } from './types/defaultObject';

const createConfig = (): Readonly<DefaultObject> => {
  const plugins: readonly DefaultObject[] = [
    createEslintConfig(),
    createNodeConfig(),
    createTypescriptConfig(),

    // common
    createFormatjsConfig(),
    createImportConfig(),
    createUnicornConfig(),
    createEslintCommentsConfig(),
    createSonarjsConfig(),
    createRegexpConfig(),

    // react
    createReactConfig(),
    createReactHooksConfig(),
    createJsxA11yConfig(),

    // testing
    createJestConfig(),
    createTestingLibraryConfig(),
    createTestingLibraryJestDomConfig(),
  ];

  return plugins.reduce<DefaultObject>(
    (previousConfig, plugin) => ({
      env: deepMerge(previousConfig.env, plugin.env, ['env']),
      rules: { ...previousConfig.rules, ...plugin.rules },
      globals: deepMerge(previousConfig.globals, plugin.globals, ['globals']),
      settings: deepMerge(previousConfig.settings, plugin.settings, ['settings']),
      parserOptions: deepMerge(previousConfig.parserOptions, plugin.parserOptions, ['parserOptions']),
      parser: deepMerge(previousConfig.parser, plugin.parser, ['parser']),
      plugins: deepMerge(previousConfig.plugins, plugin.plugins, ['plugins']),
      overrides: deepMerge(previousConfig.overrides, plugin.overrides, ['overrides']),
    }),
    defaultObject,
  );
};

export { createConfig };
