import { camelCase } from '../../../src/string/camelCase';

describe('camelCase()', () => {
  test('it should work', () => {
    const result = camelCase('lorem');

    expect(result).toBe('lorem');
  });

  test.each([
    ['LoremIpsum', 'loremIpsum'],
    ['lorem ipsum', 'loremIpsum'],
    ['lorem-ipsum', 'loremIpsum'],
    ['lorem_ipsum', 'loremIpsum'],
    ['lorem_ipsum_', 'loremIpsum'],
    ['lorem,ipsum', 'loremIpsum'],
    ['lorem.ipsum', 'loremIpsum'],
    ['lorem__ipsum', 'loremIpsum'],
    ['lorem.#.ipsum', 'loremIpsum'],
    ['lorem.*', 'lorem'],
  ])('it should work with %p', (value, expected) => {
    const result = camelCase(value);

    expect(result).toBe(expected);
  });

  test('it should work with empty string', () => {
    const result = camelCase('');

    expect(result).toBe('');
  });

  test('it should work with one char', () => {
    const result = camelCase('a');

    expect(result).toBe('a');
  });
});
