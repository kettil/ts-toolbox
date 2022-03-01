import { createConfig } from '../../src';

describe('createConfig()', () => {
  test('it should work', () => {
    const config = createConfig();

    expect(config).toMatchSnapshot();
  });
});
