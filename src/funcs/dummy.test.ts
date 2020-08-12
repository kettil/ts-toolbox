import dummy from './dummy';

describe('dummy()', () => {
  test('it should work', () => {
    const value = dummy();

    expect(value).toBeUndefined();
  });
});
