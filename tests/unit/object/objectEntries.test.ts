import { objectEntries } from '../../../src/object/objectEntries';

describe('objectEntries()', () => {
  test('it should work', () => {
    const values = objectEntries({ q: 7, b: 13, z: 42 });

    expect(values).toEqual([
      ['q', 7],
      ['b', 13],
      ['z', 42],
    ]);
  });
});
