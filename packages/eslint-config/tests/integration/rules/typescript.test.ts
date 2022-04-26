import { rules } from '@typescript-eslint/eslint-plugin';
import { typescriptRules } from '../../../src/configs/typescript';
import type { Rules } from '../../../src/types/rules';

describe('sonarjs', () => {
  test('exist outdated rules', () => {
    const existedRules = new Set(Object.keys(rules as unknown as Rules).map((rule) => `@typescript-eslint/${rule}`));
    const definedRules = Object.keys(typescriptRules).filter((rule) => rule.startsWith('@typescript-eslint/'));

    const diffRules = definedRules.filter((rule) => !existedRules.has(rule));

    expect(diffRules).toEqual([]);
  });

  test('exist new rules', () => {
    const existedRules = Object.keys(rules as unknown as Rules).map((rule) => `@typescript-eslint/${rule}`);
    const definedRules = new Set(Object.keys(typescriptRules).filter((rule) => rule.startsWith('@typescript-eslint/')));

    const diffRules = existedRules.filter((rule) => !definedRules.has(rule));

    expect(diffRules).toEqual([]);
  });
});
