// @ts-expect-error -- Type information is not needed, because test file
import rules from 'eslint/lib/rules';
import { eslintRules } from '../../../src/configs/eslint';

describe('eslint', () => {
  test('exist outdated rules', () => {
    const existedRules = new Set((rules as Map<string, unknown>).keys());
    const definedRules = Object.keys(eslintRules);

    const diffRules = definedRules.filter((rule) => !existedRules.has(rule));

    expect(diffRules).toEqual([]);
  });

  test('exist new rules', () => {
    const existedRules = [...(rules as Map<string, unknown>).keys()];
    const definedRules = new Set(Object.keys(eslintRules));

    const diffRules = existedRules.filter((rule) => !definedRules.has(rule));

    expect(diffRules).toEqual([]);
  });
});
