import { lowerCaseFirst } from '../../../src/string/lowerCaseFirst';

describe('lowercaseFirst()', () => {
  test('it should work', () => {
    const result = lowerCaseFirst('Lorem');

    expect(result).toBe('lorem');
  });

  test('it should work with empty string', () => {
    const result = lowerCaseFirst('');

    expect(result).toBe('');
  });

  test('it should work with upper chars', () => {
    const result = lowerCaseFirst('LOREM');

    expect(result).toBe('lOREM');
  });

  test('it should work with lower chars', () => {
    const result = lowerCaseFirst('lorem');

    expect(result).toBe('lorem');
  });
});
