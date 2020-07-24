/* eslint-disable unicorn/no-null, @typescript-eslint/no-empty-function */
import isWeekday, { Weekday } from './isWeekday';

describe('isWeekday()', () => {
  test('it should work', () => {
    const isDay = isWeekday('monday');

    expect(typeof isDay).toBe('boolean');
  });

  test.each<[Weekday, Date]>([
    ['monday', new Date('2020-07-06T00:00:00+02:00')],
    ['tuesday', new Date('2020-07-07T00:00:00+02:00')],
    ['wednesday', new Date('2020-07-08T00:00:00+02:00')],
    ['thursday', new Date('2020-07-09T00:00:00+02:00')],
    ['friday', new Date('2020-07-10T00:00:00+02:00')],
    ['saturday', new Date('2020-07-11T00:00:00+02:00')],
    ['sunday', new Date('2020-07-12T00:00:00+02:00')],
  ])('it should work the correct %s', (weekday, date) => {
    const isDay = isWeekday(weekday, date);

    expect(isDay).toBeTruthy();
  });

  test.each<[Weekday, Date]>([
    ['monday', new Date('2020-07-07T00:00:00+02:00')],
    ['tuesday', new Date('2020-07-08T00:00:00+02:00')],
    ['wednesday', new Date('2020-07-09T00:00:00+02:00')],
    ['thursday', new Date('2020-07-10T00:00:00+02:00')],
    ['friday', new Date('2020-07-11T00:00:00+02:00')],
    ['saturday', new Date('2020-07-12T00:00:00+02:00')],
    ['sunday', new Date('2020-07-13T00:00:00+02:00')],
  ])('it should work with the faulty %s', (weekday, date) => {
    const isDay = isWeekday(weekday, date);

    expect(isDay).toBeFalsy();
  });
});
