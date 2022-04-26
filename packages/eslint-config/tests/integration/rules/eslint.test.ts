import { Linter } from 'eslint';
import { eslintRules } from '../../../src/configs/eslint';

describe('eslint', () => {
  test('exist outdated rules', () => {
    const linter = new Linter();

    const existedRules = new Set(linter.getRules().keys());
    const definedRules = Object.keys(eslintRules);

    const diffRules = definedRules.filter((rule) => !existedRules.has(rule));

    expect(diffRules).toEqual([]);
  });

  test('exist new rules', () => {
    const linter = new Linter();

    const existedRules = [...linter.getRules().keys()];
    const definedRules = new Set(Object.keys(eslintRules));

    const diffRules = existedRules.filter((rule) => !definedRules.has(rule));

    expect(diffRules).toEqual([]);
  });
});
