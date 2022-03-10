import { upperCaseFirst } from '../../../src/string/upperCaseFirst';

describe('uppercaseFirst()', () => {
  test('it should work', () => {
    const result = upperCaseFirst('Lorem');

    expect(result).toBe('Lorem');
  });

  test('it should work with empty string', () => {
    const result = upperCaseFirst('');

    expect(result).toBe('');
  });

  test('it should work with upper chars', () => {
    const result = upperCaseFirst('LOREM');

    expect(result).toBe('LOREM');
  });

  test('it should work with lower chars', () => {
    const result = upperCaseFirst('lorem');

    expect(result).toBe('Lorem');
  });
});
