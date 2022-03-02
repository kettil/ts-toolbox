// @ts-expect-error -- Type information is not needed, because test file.
import { rules } from 'eslint-plugin-jest';
import { jestRules } from '../../../src/configs/jest';
import type { Rules } from '../../../src/types/rules';

describe('jest', () => {
  test('exist outdated rules', () => {
    const existedRules = new Set(Object.keys(rules as Rules).map((rule) => `jest/${rule}`));
    const definedRules = Object.keys(jestRules).filter((rule) => rule.startsWith('jest/'));

    const diffRules = definedRules.filter((rule) => !existedRules.has(rule));

    expect(diffRules).toEqual([]);
  });

  test('exist new rules', () => {
    const existedRules = Object.keys(rules as Rules).map((rule) => `jest/${rule}`);
    const definedRules = new Set(Object.keys(jestRules).filter((rule) => rule.startsWith('jest/')));

    const diffRules = existedRules.filter((rule) => !definedRules.has(rule));

    expect(diffRules).toEqual([]);
  });
});
