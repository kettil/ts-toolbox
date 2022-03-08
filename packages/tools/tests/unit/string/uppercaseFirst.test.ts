import { uppercaseFirst } from '../../../src/string/uppercaseFirst';

describe('uppercaseFirst()', () => {
  test('it should work', () => {
    const result = uppercaseFirst('Lorem');

    expect(result).toBe('Lorem');
  });

  test('it should work with empty string', () => {
    const result = uppercaseFirst('');

    expect(result).toBe('');
  });

  test('it should work with upper chars', () => {
    const result = uppercaseFirst('LOREM');

    expect(result).toBe('LOREM');
  });

  test('it should work with lower chars', () => {
    const result = uppercaseFirst('lorem');

    expect(result).toBe('Lorem');
  });

  test('it should work with lowercase option', () => {
    const result = uppercaseFirst('loremFoo', true);

    expect(result).toBe('Loremfoo');
  });
});
