// @ts-expect-error -- Type information is not needed, because test file.
import { rules } from 'eslint-plugin-react-hooks';
import { reactHooksRules } from '../../../src/configs/reactHooks';
import type { Rules } from '../../../src/types/rules';

describe('react-hooks', () => {
  test('exist outdated rules', () => {
    const existedRules = new Set(Object.keys(rules as Rules).map((rule) => `react-hooks/${rule}`));
    const definedRules = Object.keys(reactHooksRules).filter((rule) => rule.startsWith('react-hooks/'));

    const diffRules = definedRules.filter((rule) => !existedRules.has(rule));

    expect(diffRules).toEqual([]);
  });

  test('exist new rules', () => {
    const existedRules = Object.keys(rules as Rules).map((rule) => `react-hooks/${rule}`);
    const definedRules = new Set(Object.keys(reactHooksRules).filter((rule) => rule.startsWith('react-hooks/')));

    const diffRules = existedRules.filter((rule) => !definedRules.has(rule));

    expect(diffRules).toEqual([]);
  });
});
