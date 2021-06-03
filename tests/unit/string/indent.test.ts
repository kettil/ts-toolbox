import { indent } from '../../../src/string/indent';

describe('indent()', () => {
  test('it should work', () => {
    const result = indent('lorem');

    expect(result).toBe('  lorem');
  });

  test('it should work with multilines', () => {
    const result = indent('lorem\nipsum\nfoo');

    expect(result).toBe('  lorem\n  ipsum\n  foo');
  });

  test('it should work with empty string', () => {
    const result = indent('');

    expect(result).toBe('  ');
  });

  test('it should work with indent string', () => {
    const result = indent('- lorem\n  ipsum');

    expect(result).toBe('  - lorem\n    ipsum');
  });

  test('it should work with multilines and special chars', () => {
    const result = indent('lorem\nipsum\nfoo', '> ');

    expect(result).toBe('> lorem\n> ipsum\n> foo');
  });

  test('it should work with multilines and repeat special chars', () => {
    const result = indent('lorem\nipsum\nfoo', 2, '> ');

    expect(result).toBe('> > lorem\n> > ipsum\n> > foo');
  });
});
