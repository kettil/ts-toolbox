/* eslint-disable global-require, import/order */

const deepMerge = require('./lib/deepEqual');
const defaultObject = require('./lib/defaultObject');

const plugins = [
  require('./plugins/eslint'),
  require('./plugins/typescript'),

  // common
  require('./plugins/formatjs'),
  require('./plugins/import'),
  require('./plugins/unicorn'),

  // react
  require('./plugins/react'),
  require('./plugins/reactHooks'),
  require('./plugins/jsxA11y'),

  // testing
  require('./plugins/jest'),
  require('./plugins/testingLibrary'),
  require('./plugins/testingLibraryJestDom'),
];

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
