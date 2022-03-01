/* eslint-disable @typescript-eslint/naming-convention -- external definition */
import { defaultObject } from '../lib/defaultObject';
import { hasLibrary } from '../lib/hasLibrary';
import { DefaultObject } from '../types/defaultObject';
import { Rules } from '../types/rules';

const rules: Rules = {
  'react/boolean-prop-naming': [
    'off',
    { propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'], rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+', message: '' },
  ],
  'react/button-has-type': ['error', { button: true, submit: true, reset: false }],
  'react/default-props-match-prop-types': ['error', { allowRequiredDefaults: false }],
  'react/destructuring-assignment': ['error', 'always'],
  'react/display-name': ['error', { ignoreTranspilerName: false }],
  'react/forbid-component-props': ['off', { forbid: [] }],
  'react/forbid-dom-props': ['off', { forbid: [] }],
  'react/forbid-elements': ['off', { forbid: [] }],
  'react/forbid-foreign-prop-types': ['warn', { allowInPropTypes: true }],
  'react/forbid-prop-types': [
    'error',
    { forbid: ['any', 'array', 'object'], checkContextTypes: true, checkChildContextTypes: true },
  ],
  'react/function-component-definition': [
    'off',
    { namedComponents: 'function-expression', unnamedComponents: 'function-expression' },
  ],
  'react/jsx-boolean-value': ['error', 'never'],
  'react/jsx-child-element-spacing': ['off'],
  'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
  'react/jsx-closing-tag-location': ['error'],
  'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
  'react/jsx-curly-newline': ['error', { multiline: 'consistent', singleline: 'consistent' }],
  'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],
  'react/jsx-equals-spacing': ['error', 'never'],
  'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
  'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
  'react/jsx-fragments': ['error', 'syntax'],
  'react/jsx-handler-names': ['off', { eventHandlerPrefix: 'handle', eventHandlerPropPrefix: 'on' }],
  'react/jsx-indent': ['error', 2],
  'react/jsx-indent-props': ['error', 2],
  'react/jsx-key': ['error'],
  'react/jsx-max-depth': ['off'],
  'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
  'react/jsx-new-line': ['error', { prevent: false }],
  'react/jsx-no-bind': [
    'error',
    {
      ignoreRefs: true,
      allowArrowFunctions: true,
      allowFunctions: false,
      allowBind: false,
      ignoreDOMComponents: true,
    },
  ],
  'react/jsx-no-comment-textnodes': ['error'],
  'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
  'react/jsx-no-literals': ['off', { noStrings: true }],
  'react/jsx-no-script-url': ['off', [{ name: 'Link', props: ['to'] }]],
  'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],
  'react/jsx-no-undef': ['error'],
  'react/jsx-no-useless-fragment': ['off'],
  'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
  'react/jsx-pascal-case': ['error', { allowAllCaps: true, ignore: [] }],
  'react/jsx-props-no-multi-spaces': ['error'],
  'react/jsx-props-no-spreading': ['off', { html: 'enforce', custom: 'enforce', exceptions: [] }],
  'react/jsx-sort-default-props': ['off', { ignoreCase: true }],
  'react/jsx-sort-prop-types': ['off'],
  'react/jsx-sort-props': [
    'off',
    {
      ignoreCase: true,
      callbacksLast: false,
      shorthandFirst: false,
      shorthandLast: false,
      noSortAlphabetically: false,
      reservedFirst: true,
    },
  ],
  'react/jsx-space-before-closing': ['off', 'always'],
  'react/jsx-tag-spacing': [
    'error',
    { closingSlash: 'never', beforeSelfClosing: 'always', afterOpening: 'never', beforeClosing: 'never' },
  ],
  'react/jsx-uses-react': ['error'],
  'react/jsx-uses-vars': ['error'],
  'react/jsx-wrap-multilines': [
    'error',
    {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
    },
  ],
  'react/no-access-state-in-setstate': ['error'],
  'react/no-adjacent-inline-elements': ['off'],
  'react/no-array-index-key': ['error'],
  'react/no-children-prop': ['error'],
  'react/no-danger': ['warn'],
  'react/no-danger-with-children': ['error'],
  'react/no-deprecated': ['error'],
  'react/no-did-mount-set-state': ['off'],
  'react/no-did-update-set-state': ['error'],
  'react/no-direct-mutation-state': ['error'],
  'react/no-find-dom-node': ['error'],
  'react/no-is-mounted': ['error'],
  'react/no-multi-comp': ['off'],
  'react/no-namespace': ['error'],
  'react/no-redundant-should-component-update': ['error'],
  'react/no-render-return-value': ['error'],
  'react/no-set-state': ['off'],
  'react/no-string-refs': ['error'],
  'react/no-this-in-sfc': ['error'],
  'react/no-typos': ['error'],
  'react/no-unescaped-entities': ['error'],
  'react/no-unknown-property': ['error'],
  'react/no-unsafe': ['error', { checkAliases: true }],
  'react/no-unstable-nested-components': ['error', { allowAsProps: false }],
  'react/no-unused-prop-types': ['error', { customValidators: [], skipShapeProps: true }],
  'react/no-unused-state': ['error'],
  'react/no-will-update-set-state': ['error'],
  'react/prefer-es6-class': ['error', 'always'],
  'react/prefer-exact-props': ['error'],
  'react/prefer-read-only-props': ['off'],
  'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
  'react/prop-types': ['off', { ignore: [], customValidators: [], skipUndeclared: false }],
  'react/react-in-jsx-scope': ['error'],
  'react/require-default-props': ['error', { forbidDefaultForRequired: true }],
  'react/require-optimization': ['off', { allowDecorators: [] }],
  'react/require-render-return': ['error'],
  'react/self-closing-comp': ['error'],
  'react/sort-comp': [
    'error',
    {
      order: [
        'static-variables',
        'static-methods',
        'instance-variables',
        'lifecycle',
        '/^on.+$/',
        'getters',
        'setters',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'instance-methods',
        'everything-else',
        'rendering',
      ],
      groups: {
        lifecycle: [
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'defaultProps',
          'constructor',
          'getDefaultProps',
          'getInitialState',
          'state',
          'getChildContext',
          'getDerivedStateFromProps',
          'componentWillMount',
          'UNSAFE_componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'UNSAFE_componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'UNSAFE_componentWillUpdate',
          'getSnapshotBeforeUpdate',
          'componentDidUpdate',
          'componentDidCatch',
          'componentWillUnmount',
        ],
        rendering: ['/^render.+$/', 'render'],
      },
    },
  ],
  'react/sort-prop-types': [
    'off',
    { ignoreCase: true, callbacksLast: false, requiredFirst: false, sortShapeProp: true },
  ],
  'react/state-in-constructor': ['error', 'always'],
  'react/static-property-placement': ['error', 'property assignment'],
  'react/style-prop-object': ['error'],
  'react/void-dom-elements-no-children': ['error'],
};

const createReactConfig = (): DefaultObject => {
  const config = { ...defaultObject };

  if (hasLibrary('react')) {
    config.parserOptions = { ecmaFeatures: { jsx: true } };

    config.settings = {
      react: { version: 'detect' },
      'import/extensions': ['.jsx'],
      'import/resolver': { node: { extensions: ['.jsx'] } },
    };

    config.plugins = ['react'];
    config.rules = rules;
  }

  return config;
};

export { createReactConfig };
