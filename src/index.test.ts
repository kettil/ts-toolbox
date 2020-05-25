import * as tools from '.';

describe('main index', () => {
  test('it should return all tools', () => {
    const expected = [
      'createArray',
      'uniqueArray',
      'isArray',
      'isObject',
      'delay',
      'env',
      'objectEntries',
      'objectKeys',
      'compareAsc',
      'compareDesc',
      'compareTransformAsc',
      'compareTransformDesc',
    ];

    expect(Object.keys(tools)).toEqual(expected);
  });

  test.each(Object.keys(tools).map((k) => [k]))('It should be that %p is a function', (name) => {
    expect(typeof (tools as Record<string, unknown>)[name]).toBe('function');
  });
});
