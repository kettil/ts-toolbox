// @ts-expect-error -- Type information is not needed, because test file
import { rules } from 'eslint-plugin-unicorn';
import { unicornRules } from '../../../src/configs/unicorn';
import type { Rules } from '../../../src/types/rules';

describe('unicorn', () => {
  test('exist outdated rules', () => {
    const existedRules = new Set(Object.keys(rules as Rules).map((rule) => `unicorn/${rule}`));
    const definedRules = Object.keys(unicornRules).filter((rule) => rule.startsWith('unicorn/'));

    const diffRules = definedRules.filter((rule) => !existedRules.has(rule));

    expect(diffRules).toEqual([]);
  });

  test('exist new rules', () => {
    const deprecatedRules = new Set([
      'unicorn/no-array-instanceof',
      'unicorn/no-fn-reference-in-iterator',
      'unicorn/no-reduce',
      'unicorn/prefer-dataset',
      'unicorn/prefer-event-key',
      'unicorn/prefer-exponentiation-operator',
      'unicorn/prefer-flat-map',
      'unicorn/prefer-node-append',
      'unicorn/prefer-node-remove',
      'unicorn/prefer-object-has-own',
      'unicorn/prefer-replace-all',
      'unicorn/prefer-starts-ends-with',
      'unicorn/prefer-text-content',
      'unicorn/prefer-trim-start-end',
      'unicorn/regex-shorthand',
    ]);

    const existedRules = Object.keys(rules as Rules)
      .map((rule) => `unicorn/${rule}`)
      .filter((rule) => !deprecatedRules.has(rule));
    const definedRules = new Set(Object.keys(unicornRules).filter((rule) => rule.startsWith('unicorn/')));

    const diffRules = existedRules.filter((rule) => !definedRules.has(rule));

    expect(diffRules).toEqual([]);
  });
});
