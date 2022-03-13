import * as tools from '../../src';

describe('main index', () => {
  test('it should return all tools', () => {
    const expected = [
      'createArray',
      'intersectArray',
      'uniqueArray',
      'ms',
      'noop',
      'isArray',
      'isFunction',
      'isNil',
      'isNumber',
      'isObject',
      'isString',
      'isWeekday',
      'delay',
      'env',
      'objectEntries',
      'objectFromEntries',
      'objectKeys',
      'objectMap',
      'objectPick',
      'allSettledSequence',
      'compareAsc',
      'compareDesc',
      'compareTransformAsc',
      'compareTransformDesc',
      'camelCase',
      'dotCase',
      'indent',
      'kebabCase',
      'lowerCaseFirst',
      'upperCaseFirst',
    ];

    expect(Object.keys(tools)).toEqual(expected);
  });

  test.each(Object.keys(tools).map((k) => [k]))('it should be that %p is a function', (name) => {
    expect(typeof (tools as Record<string, unknown>)[name]).toBe('function');
  });
});
