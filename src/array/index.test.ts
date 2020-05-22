import createArray from './createArray';
import uniqueArray from './uniqueArray';
import * as array from '.';

describe('"array" tools', () => {
  test('it should create object with all "array" tools', () => {
    const expected = { createArray, uniqueArray };

    expect(array).toEqual(expected);
  });
});
