import { config } from '../../src/monorepo';

describe('config - monorepo', () => {
  test('return config object', () => {
    expect(config).toMatchSnapshot();
  });
});
