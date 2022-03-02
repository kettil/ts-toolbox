// @ts-expect-error -- Type information is not needed, because test file.
import { rules } from 'eslint-plugin-node';
import { nodeRules } from '../../../src/configs/node';
import type { Rules } from '../../../src/types/rules';

describe('node', () => {
  test('exist outdated rules', () => {
    const existedRules = new Set(Object.keys(rules as Rules).map((rule) => `node/${rule}`));
    const definedRules = Object.keys(nodeRules).filter((rule) => rule.startsWith('node/'));

    const diffRules = definedRules.filter((rule) => !existedRules.has(rule));

    expect(diffRules).toEqual([]);
  });

  test('exist new rules', () => {
    const existedRules = Object.keys(rules as Rules).map((rule) => `node/${rule}`);
    const definedRules = new Set(Object.keys(nodeRules).filter((rule) => rule.startsWith('node/')));

    const diffRules = existedRules.filter((rule) => !definedRules.has(rule));

    expect(diffRules).toEqual([]);
  });
});
