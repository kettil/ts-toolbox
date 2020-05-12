import isArray from './array';
import isObject from './object';
import * as is from '.';

describe('"is" tools', () => {
  test('it should create object with all "is" tools', () => {
    const expected = { isArray, isObject };

    expect(is).toEqual(expected);
  });
});
