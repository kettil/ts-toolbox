import { objectPick } from '../../../src/object/objectPick';

describe('objectPick()', () => {
  test('it should work', () => {
    const values = objectPick({ q: 7, b: 13, z: 42 } as const, ['q', 'z']);

    expect(values).toEqual({ q: 7, z: 42 });
  });
});
