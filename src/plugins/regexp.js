const defaultObject = require('../lib/defaultObject');

const rules = {
  'regexp/control-character-escape': ['error'],
  'regexp/letter-case': [
    'error',
    {
      caseInsensitive: 'lowercase',
      unicodeEscape: 'uppercase',
      hexadecimalEscape: 'uppercase',
      controlEscape: 'uppercase',
    },
  ],
  'regexp/match-any': ['error'],
  'regexp/negation': ['error'],
  'regexp/no-assertion-capturing-group': ['error'], //  This rule will be marked as deprecated.
  'regexp/no-dupe-characters-character-class': ['error'],
  'regexp/no-empty-alternative': ['error'],
  // 'regexp/no-empty-capturing-group': ['error'], // This rule is not been released yet.
  'regexp/no-empty-group': ['error'],
  'regexp/no-empty-lookarounds-assertion': ['error'],
  'regexp/no-escape-backspace': ['error'],
  'regexp/no-invisible-character': ['error'],
  'regexp/no-octal': ['error'],
  'regexp/no-potentially-useless-backreference': ['error'],
  'regexp/no-useless-assertions': ['error'],
  'regexp/no-useless-backreference': ['error'],
  'regexp/no-useless-character-class': ['error'],
  'regexp/no-useless-dollar-replacements': ['error'],
  'regexp/no-useless-escape': ['error'],
  'regexp/no-useless-exactly-quantifier': ['error'],
  'regexp/no-useless-lazy': ['error'],
  'regexp/no-useless-non-capturing-group': ['error'],
  'regexp/no-useless-range': ['error'],
  'regexp/no-useless-two-nums-quantifier': ['error'],
  'regexp/optimal-quantifier-concatenation': ['error'],
  'regexp/order-in-character-class': ['error'],
  'regexp/prefer-d': ['error'],
  'regexp/prefer-plus-quantifier': ['error'],
  'regexp/prefer-predefined-assertion': ['error'],
  'regexp/prefer-quantifier': ['error'],
  'regexp/prefer-question-quantifier': ['error'],
  'regexp/prefer-range': ['error'],
  'regexp/prefer-regexp-test': ['error'],
  'regexp/prefer-star-quantifier': ['error'],
  'regexp/prefer-unicode-codepoint-escapes': ['error'],
  'regexp/prefer-t': ['error'],
  'regexp/prefer-w': ['error'],
  'regexp/sort-flags': ['error'],
  // 'regexp/strict': ['error'],
  'regexp/unicode-escape': ['error'],
};

module.exports = { ...defaultObject, plugins: ['regexp'], rules };
