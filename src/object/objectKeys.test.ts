import objectKeys from './objectKeys';

describe('objectKeys()', () => {
  test('it should work', () => {
    const values = objectKeys({ q: 7, b: 13, z: 42 });

    expect(values).toEqual(['q', 'b', 'z']);
  });
});
