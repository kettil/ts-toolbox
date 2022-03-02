// @ts-expect-error -- Type information is not needed, because test file.
import { rules } from 'eslint-plugin-jsx-a11y';
import { jsxA11yRules } from '../../../src/configs/jsxA11y';
import type { Rules } from '../../../src/types/rules';

describe('jsx-a11y', () => {
  test('exist outdated rules', () => {
    const existedRules = new Set(Object.keys(rules as Rules).map((rule) => `jsx-a11y/${rule}`));
    const definedRules = Object.keys(jsxA11yRules).filter((rule) => rule.startsWith('jsx-a11y/'));

    const diffRules = definedRules.filter((rule) => !existedRules.has(rule));

    expect(diffRules).toEqual([]);
  });

  test('exist new rules', () => {
    const existedRules = Object.keys(rules as Rules).map((rule) => `jsx-a11y/${rule}`);
    const definedRules = new Set(Object.keys(jsxA11yRules).filter((rule) => rule.startsWith('jsx-a11y/')));

    const diffRules = existedRules.filter((rule) => !definedRules.has(rule));

    expect(diffRules).toEqual([]);
  });
});
