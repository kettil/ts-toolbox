const config = require('../../src');

describe('...()', () => {
  test('it should work', () => {
    expect(config).toMatchSnapshot();
  });
});
