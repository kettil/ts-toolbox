import { objectFromEntries } from '../../../src/object/objectFromEntries';

describe('objectFromEntries()', () => {
  test('it should work', () => {
    const values = objectFromEntries([
      ['a', 7],
      ['b', 13],
      ['c', 42],
    ]);

    expect(values).toEqual({ a: 7, b: 13, c: 42 });
  });
});
