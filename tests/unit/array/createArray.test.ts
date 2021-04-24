import createArray from '../../../src/array/createArray';

describe('createArray()', () => {
  test('it should work and return an array', () => {
    const values = createArray(2);

    expect(Array.isArray(values)).toBe(true);
  });

  test('it should work without callback', () => {
    const values = createArray(2);

    expect(values).toEqual([undefined, undefined]);
  });

  test('it should work with callback', () => {
    const values = createArray(3, (i) => ({ i }));

    expect(values).toEqual([{ i: 0 }, { i: 1 }, { i: 2 }]);
  });
});
