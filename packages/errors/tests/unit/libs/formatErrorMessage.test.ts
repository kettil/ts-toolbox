import { formatErrorMessage } from '../../../src/lib/formatErrorMessage';

describe('formatErrorMessage()', () => {
  test('return a sentence', () => {
    const result = formatErrorMessage({ code: 'FooBarBaz' });

    expect(result).toBe('Foo bar baz.');
  });

  test('return a sentence with number', () => {
    const result = formatErrorMessage({ code: 'FooBar10Baz' });

    expect(result).toBe('Foo bar 10 baz.');
  });
});
