// @ts-expect-error -- Type information is not needed, because test file.
import { rules } from 'eslint-plugin-react';
import { reactRules } from '../../../src/configs/react';
import type { Rules } from '../../../src/types/rules';

describe('react', () => {
  test('exist outdated rules', () => {
    const existedRules = new Set(Object.keys(rules as Rules).map((rule) => `react/${rule}`));
    const definedRules = Object.keys(reactRules).filter((rule) => rule.startsWith('react/'));

    const diffRules = definedRules.filter((rule) => !existedRules.has(rule));

    expect(diffRules).toEqual([]);
  });

  test('exist new rules', () => {
    const existedRules = Object.keys(rules as Rules).map((rule) => `react/${rule}`);
    const definedRules = new Set(Object.keys(reactRules).filter((rule) => rule.startsWith('react/')));

    const diffRules = existedRules.filter((rule) => !definedRules.has(rule));

    expect(diffRules).toEqual([]);
  });
});
