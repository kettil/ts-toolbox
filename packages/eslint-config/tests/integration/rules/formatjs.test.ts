// @ts-expect-error -- Type information is not needed, because test file.
import { rules } from 'eslint-plugin-formatjs';
import { formatjsRules } from '../../../src/configs/formatjs';
import type { Rules } from '../../../src/types/rules';

describe('formatjs', () => {
  test('exist outdated rules', () => {
    const existedRules = new Set(Object.keys(rules as Rules).map((rule) => `formatjs/${rule}`));
    const definedRules = Object.keys(formatjsRules).filter((rule) => rule.startsWith('formatjs/'));

    const diffRules = definedRules.filter((rule) => !existedRules.has(rule));

    expect(diffRules).toEqual([]);
  });

  test('exist new rules', () => {
    const existedRules = Object.keys(rules as Rules).map((rule) => `formatjs/${rule}`);
    const definedRules = new Set(Object.keys(formatjsRules).filter((rule) => rule.startsWith('formatjs/')));

    const diffRules = existedRules.filter((rule) => !definedRules.has(rule));

    expect(diffRules).toEqual([]);
  });
});
