// @ts-expect-error -- Type information is not needed, because test file.
import { rules } from 'eslint-plugin-eslint-comments';
import { eslintCommentsRules } from '../../../src/configs/eslintComments';
import type { Rules } from '../../../src/types/rules';

describe('eslint-comments', () => {
  test('exist outdated rules', () => {
    const existedRules = new Set(Object.keys(rules as Rules).map((rule) => `eslint-comments/${rule}`));
    const definedRules = Object.keys(eslintCommentsRules).filter((rule) => rule.startsWith('eslint-comments/'));

    const diffRules = definedRules.filter((rule) => !existedRules.has(rule));

    expect(diffRules).toEqual([]);
  });

  test('exist new rules', () => {
    const existedRules = Object.keys(rules as Rules).map((rule) => `eslint-comments/${rule}`);
    const definedRules = new Set(
      Object.keys(eslintCommentsRules).filter((rule) => rule.startsWith('eslint-comments/')),
    );

    const diffRules = existedRules.filter((rule) => !definedRules.has(rule));

    expect(diffRules).toEqual([]);
  });
});
