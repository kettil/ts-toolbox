import { intersectArray } from '../../../src/array/intersectArray';

describe('intersectArray()', () => {
  test('it should work', () => {
    const values = intersectArray([1, 2, 3, 4], [3, 4, 5, 6]);

    expect(values).toEqual([3, 4]);
  });

  test('it should work and return empty array', () => {
    const values = intersectArray([1, 2], [8, 9]);

    expect(values).toEqual([]);
  });
});
