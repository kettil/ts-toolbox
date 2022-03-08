import { lowercaseFirst } from '../../../src/string/lowercaseFirst';

describe('lowercaseFirst()', () => {
  test('it should work', () => {
    const result = lowercaseFirst('Lorem');

    expect(result).toBe('lorem');
  });

  test('it should work with empty string', () => {
    const result = lowercaseFirst('');

    expect(result).toBe('');
  });

  test('it should work with upper chars', () => {
    const result = lowercaseFirst('LOREM');

    expect(result).toBe('lOREM');
  });

  test('it should work with lower chars', () => {
    const result = lowercaseFirst('lorem');

    expect(result).toBe('lorem');
  });
});
