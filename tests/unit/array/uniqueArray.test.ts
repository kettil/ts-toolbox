import uniqueArray from '../../../src/array/uniqueArray';

describe('uniqueArray()', () => {
  test('it should work', () => {
    const values = uniqueArray([1, 5, 2, 1, 7, 2]);

    expect(values).toEqual([1, 5, 2, 7]);
  });
});
