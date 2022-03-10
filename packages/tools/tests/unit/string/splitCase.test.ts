import { splitCase } from '../../../src/string/splitCase';

describe('splitCase()', () => {
  test.each([
    ['', ['']],
    ['lorem', ['lorem']],
    ['loremIpsum', ['lorem', 'ipsum']],
    ['lorem-ipsum', ['lorem', 'ipsum']],
    ['lorem.ipsum', ['lorem', 'ipsum']],
    ['lorem_ipsum', ['lorem', 'ipsum']],
    ['lorem-ipsum_', ['lorem', 'ipsum']],
    ['lorem.#.ipsum', ['lorem', 'ipsum']],
    ['lorem.*', ['lorem']],
  ])('it should work with "%s"', (value, expected) => {
    const result = splitCase(value);

    expect(result).toEqual(expected);
  });
});
