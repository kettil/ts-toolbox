import isArray from './isArray';
import isObject from './isObject';
import * as is from '.';

describe('"is" tools', () => {
  test('it should create object with all "is" tools', () => {
    const expected = { isArray, isObject };

    expect(is).toEqual(expected);
  });
});
