const config = require('../../src');

describe('index', () => {
  test('it should work', () => {
    expect(config).toMatchSnapshot();
  });
});
