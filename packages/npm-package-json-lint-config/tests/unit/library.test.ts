import { config } from '../../src/library';

describe('config - library', () => {
  test('return config object', () => {
    expect(config).toMatchSnapshot();
  });
});
