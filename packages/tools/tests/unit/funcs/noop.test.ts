import { noop } from '../../../src/funcs/noop';

describe('noop()', () => {
  test('it should work', () => {
    const value = noop();

    expect(value).toBeUndefined();
  });
});
