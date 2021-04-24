import dummy from '../../../src/funcs/dummy';

describe('dummy()', () => {
  test('it should work', () => {
    const value = dummy();

    expect(value).toBeUndefined();
  });
});
