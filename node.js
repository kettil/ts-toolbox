/* eslint-disable import/max-dependencies -- brings all rules together */
const deepMerge = require('./src/lib/deepEqual');
const defaultObject = require('./src/lib/defaultObject');

/* eslint-disable node/global-require -- order is important */
const plugins = [
  require('./src/plugins/eslint'),
  require('./src/plugins/node'),
  require('./src/plugins/typescript'),

  // common
  require('./src/plugins/formatjs'),
  require('./src/plugins/import'),
  require('./src/plugins/unicorn'),
  require('./src/plugins/eslintComments'),
  require('./src/plugins/sonarjs'),
  require('./src/plugins/regexp'),

  // react
  require('./src/plugins/react'),
  require('./src/plugins/reactHooks'),
  require('./src/plugins/jsxA11y'),

  // testing
  require('./src/plugins/jest'),
  require('./src/plugins/testingLibrary'),
  require('./src/plugins/testingLibraryJestDom'),
];
/* eslint-enable node/global-require -- order is important */

module.exports = plugins.reduce(
  (config, plugin) => ({
    env: deepMerge(config.env, plugin.env, ['env']),
    rules: { ...config.rules, ...plugin.rules },
    globals: deepMerge(config.globals, plugin.globals, ['globals']),
    settings: deepMerge(config.settings, plugin.settings, ['settings']),
    parserOptions: deepMerge(config.parserOptions, plugin.parserOptions, ['parserOptions']),
    parser: deepMerge(config.parser, plugin.parser, ['parser']),
    plugins: deepMerge(config.plugins, plugin.plugins, ['plugins']),
    overrides: deepMerge(config.overrides, plugin.overrides, ['overrides']),
  }),
  defaultObject,
);
/* eslint-enable import/max-dependencies -- brings all rules together */
