import { dotCase } from '../../../src/string/dotCase';

describe('dotCase()', () => {
  test('it should work', () => {
    const result = dotCase('lorem');

    expect(result).toBe('lorem');
  });

  test('it should work with empty string', () => {
    const result = dotCase('');

    expect(result).toBe('');
  });

  test.each([
    ['lorem', 'lorem'],
    ['loremIpsum', 'lorem.ipsum'],
    ['lorem-ipsum', 'lorem.ipsum'],
    ['lorem.ipsum', 'lorem.ipsum'],
    ['lorem_ipsum', 'lorem.ipsum'],
    ['lorem-ipsum_', 'lorem.ipsum'],
    ['lorem.#.ipsum', 'lorem.ipsum'],
    ['lorem.*', 'lorem'],
  ])('it should work with "%s"', (value, expected) => {
    const result = dotCase(value);

    expect(result).toBe(expected);
  });
});
