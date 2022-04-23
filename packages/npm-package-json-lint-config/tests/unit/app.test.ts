import { config } from '../../src/app';

describe('config - app', () => {
  test('return config object', () => {
    expect(config).toMatchSnapshot();
  });
});
