import { kebabCase } from '../../../src/string/kebabCase';

describe('kebabCase()', () => {
  test('it should work', () => {
    const result = kebabCase('lorem');

    expect(result).toBe('lorem');
  });

  test('it should work with empty string', () => {
    const result = kebabCase('');

    expect(result).toBe('');
  });

  test.each([
    ['lorem', 'lorem'],
    ['loremIpsum', 'lorem-ipsum'],
    ['lorem-ipsum', 'lorem-ipsum'],
    ['lorem.ipsum', 'lorem-ipsum'],
    ['lorem_ipsum', 'lorem-ipsum'],
    ['lorem-ipsum_', 'lorem-ipsum'],
    ['lorem.#.ipsum', 'lorem-ipsum'],
    ['lorem.*', 'lorem'],
  ])('it should work with "%s"', (value, expected) => {
    const result = kebabCase(value);

    expect(result).toBe(expected);
  });
});
