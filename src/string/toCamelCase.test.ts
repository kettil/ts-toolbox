/* eslint-disable unicorn/no-null, @typescript-eslint/no-empty-function */
import toCamelCase from './toCamelCase';

describe('toCamelCase()', () => {
  test('it should work', () => {
    const result = toCamelCase('lorem');

    expect(result).toBe('lorem');
  });

  test.each([['lorem ipsum'], ['LoremIpsum'], ['lorem-ipsum'], ['lorem_ipsum'], ['lorem,ipsum'], ['lorem.ipsum']])(
    'it should work with %p',
    (value) => {
      const result = toCamelCase(value);

      expect(result).toBe('loremIpsum');
    },
  );
});
