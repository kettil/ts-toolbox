import { indent } from '../../../src/string/indent';

describe('indent()', () => {
  test('it should work', () => {
    const result = indent('lorem');

    expect(result).toBe('  lorem');
  });

  test('it should work with multilines', () => {
    const result = indent(`lorem
ipsum
foo`);

    expect(result).toBe(`  lorem
  ipsum
  foo`);
  });

  test('it should work with empty string', () => {
    const result = indent('');

    expect(result).toBe('  ');
  });

  test('it should work with indent string', () => {
    const result = indent(`- lorem
  ipsum`);

    expect(result).toBe(`  - lorem
    ipsum`);
  });

  test('it should work with multilines and special chars', () => {
    const result = indent(
      `lorem
ipsum
foo`,
      '> ',
    );

    expect(result).toBe(`> lorem
> ipsum
> foo`);
  });

  test('it should work with multilines and repeat special chars', () => {
    const result = indent(
      `lorem
ipsum
foo`,
      2,
      '> ',
    );

    expect(result).toBe(`> > lorem
> > ipsum
> > foo`);
  });
});
