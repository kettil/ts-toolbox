// @ts-expect-error -- Type information is not needed, because test file
import { rules } from 'eslint-plugin-testing-library';
import { testingLibraryRules } from '../../../src/configs/testingLibrary';
import type { Rules } from '../../../src/types/rules';

describe('testing-library', () => {
  test('exist outdated rules', () => {
    const existedRules = new Set(Object.keys(rules as Rules).map((rule) => `testing-library/${rule}`));
    const definedRules = Object.keys(testingLibraryRules).filter((rule) => rule.startsWith('testing-library/'));

    const diffRules = definedRules.filter((rule) => !existedRules.has(rule));

    expect(diffRules).toEqual([]);
  });

  test('exist new rules', () => {
    const existedRules = Object.keys(rules as Rules).map((rule) => `testing-library/${rule}`);
    const definedRules = new Set(
      Object.keys(testingLibraryRules).filter((rule) => rule.startsWith('testing-library/')),
    );

    const diffRules = existedRules.filter((rule) => !definedRules.has(rule));

    expect(diffRules).toEqual([]);
  });
});
