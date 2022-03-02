// @ts-expect-error -- Type information is not needed, because test file.
import { rules } from 'eslint-plugin-import';
import { importRules } from '../../../src/configs/import';
import type { Rules } from '../../../src/types/rules';

describe('import', () => {
  test('exist outdated rules', () => {
    const existedRules = new Set(Object.keys(rules as Rules).map((rule) => `import/${rule}`));
    const definedRules = Object.keys(importRules).filter((rule) => rule.startsWith('import/'));

    const diffRules = definedRules.filter((rule) => !existedRules.has(rule));

    expect(diffRules).toEqual([]);
  });

  test('exist new rules', () => {
    const existedRules = Object.keys(rules as Rules).map((rule) => `import/${rule}`);
    const definedRules = new Set(Object.keys(importRules).filter((rule) => rule.startsWith('import/')));

    const diffRules = existedRules.filter((rule) => !definedRules.has(rule));

    expect(diffRules).toEqual([]);
  });
});
