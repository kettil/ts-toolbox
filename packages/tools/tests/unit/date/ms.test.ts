import { ms } from '../../../src/date/ms';

describe('ms()', () => {
  test('it should work with empty object', () => {
    const values = ms({});

    expect(values).toBe(0);
  });

  test.each([
    [{ days: 1 }, 86_400_000],
    [{ hours: 1 }, 3_600_000],
    [{ minutes: 1 }, 60_000],
    [{ seconds: 1 }, 1000],
    [{ weeks: 1 }, 604_800_000],
    [{ years: 1 }, 31_557_600_000],
  ])('it should work with value %p', (value, expected) => {
    const values = ms(value);

    expect(values).toBe(expected);
  });

  test('it should work where all values are 0', () => {
    const values = ms({ days: 0, minutes: 0, hours: 0, seconds: 0, weeks: 0, years: 0 });

    expect(values).toBe(0);
  });

  test('it should work where all values are 1', () => {
    const values = ms({ days: 1, minutes: 1, hours: 1, seconds: 1, weeks: 1, years: 1 });

    expect(values).toBe(32_252_461_000);
  });
});
