const config = require('../../node');

describe('node.js', () => {
  test('it should work', () => {
    expect(config).toMatchSnapshot();
  });
});
