// @ts-expect-error -- Type information is not needed, because test file.
import { rules } from 'eslint-plugin-jest-dom';
import { jestDomRules } from '../../../src/configs/jestDom';
import type { Rules } from '../../../src/types/rules';

describe('jest-dom', () => {
  test('exist outdated rules', () => {
    const existedRules = new Set(Object.keys(rules as Rules).map((rule) => `jest-dom/${rule}`));
    const definedRules = Object.keys(jestDomRules).filter((rule) => rule.startsWith('jest-dom/'));

    const diffRules = definedRules.filter((rule) => !existedRules.has(rule));

    expect(diffRules).toEqual([]);
  });

  test('exist new rules', () => {
    const existedRules = Object.keys(rules as Rules).map((rule) => `jest-dom/${rule}`);
    const definedRules = new Set(Object.keys(jestDomRules).filter((rule) => rule.startsWith('jest-dom/')));

    const diffRules = existedRules.filter((rule) => !definedRules.has(rule));

    expect(diffRules).toEqual([]);
  });
});
