import objectMap from './objectMap';

describe('objectMap()', () => {
  test('it should work', () => {
    const values = objectMap({ q: 7, b: 13, z: 42 } as const, (k, v) => [k + k, v * 2]);

    expect(values).toEqual({ qq: 14, bb: 26, zz: 84 });
  });
});
