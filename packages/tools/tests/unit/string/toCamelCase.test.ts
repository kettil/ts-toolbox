import { toCamelCase } from '../../../src/string/toCamelCase';

describe('toCamelCase()', () => {
  test('it should work', () => {
    const result = toCamelCase('lorem');

    expect(result).toBe('lorem');
  });

  test.each([
    ['lorem ipsum'],
    ['LoremIpsum'],
    ['lorem-ipsum'],
    ['lorem_ipsum'],
    ['lorem,ipsum'],
    ['lorem.ipsum'],
    ['lorem__ipsum'],
  ])('it should work with %p', (value) => {
    const result = toCamelCase(value);

    expect(result).toBe('loremIpsum');
  });

  test('it should work with empty string', () => {
    const result = toCamelCase('');

    expect(result).toBe('');
  });

  test('it should work with one char', () => {
    const result = toCamelCase('a');

    expect(result).toBe('a');
  });
});
