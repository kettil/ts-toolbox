import arrayUnique from './unique';

describe('arrayUnique()', () => {
  test('it should work', () => {
    const values = arrayUnique([1, 5, 2, 1, 7, 2]);

    expect(values).toEqual([1, 5, 2, 7]);
  });
});
