import { config } from '../../src/cli';

describe('config - cli', () => {
  test('return config object', () => {
    expect(config).toMatchSnapshot();
  });
});
