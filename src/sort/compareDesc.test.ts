import compareDesc from './compareDesc';

describe('compareDesc()', () => {
  test.each([
    [4, 9, 5],
    [6, 2, -4],
    [2, 2, 0],
  ])('it should work with two numbers (%p, %p)', (a, b, expected) => {
    const value = compareDesc(a, b);

    expect(value).toBe(expected);
  });

  test.each([
    ['hello', 'bye', -1],
    ['bye', 'hello', 1],
    ['bye', 'bye', 0],
  ])('it should work with two strings (%p, %p)', (a, b, expected) => {
    const value = compareDesc(a, b);

    expect(value).toBe(expected);
  });

  test.each([
    [42, 'TS', 1],
    ['JS', 13, -1],
  ])('it should work with string and number (%p, %p)', (a, b, expected) => {
    const value = compareDesc(a, b);

    expect(value).toBe(expected);
  });

  test('it should work with array.sort()', () => {
    const values = ['g', 876, 'Mr', 5, 'L', 1, 'a', 9, 'I', 4, 'mz', 7, 'Q', 14, 'ma'].sort(compareDesc);

    expect(values).toEqual(['Q', 'mz', 'Mr', 'ma', 'L', 'I', 'g', 'a', 876, 14, 9, 7, 5, 4, 1]);
  });
});
