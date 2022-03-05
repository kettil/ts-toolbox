// @ts-expect-error -- Type information is not needed, because test file
import { rules } from 'eslint-plugin-regexp';
import { regexpRules } from '../../../src/configs/regexp';
import type { Rules } from '../../../src/types/rules';

describe('regexp', () => {
  test('exist outdated rules', () => {
    const existedRules = new Set(Object.keys(rules as Rules).map((rule) => `regexp/${rule}`));
    const definedRules = Object.keys(regexpRules).filter((rule) => rule.startsWith('regexp/'));

    const diffRules = definedRules.filter((rule) => !existedRules.has(rule));

    expect(diffRules).toEqual([]);
  });

  test('exist new rules', () => {
    const existedRules = Object.keys(rules as Rules).map((rule) => `regexp/${rule}`);
    const definedRules = new Set(Object.keys(regexpRules).filter((rule) => rule.startsWith('regexp/')));

    const diffRules = existedRules.filter((rule) => !definedRules.has(rule));

    expect(diffRules).toEqual([]);
  });
});
