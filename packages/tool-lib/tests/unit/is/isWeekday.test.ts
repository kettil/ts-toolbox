import { isWeekday, Weekday } from '../../../src/is/isWeekday';

const getDayMock = jest.fn();

let date: Date;

beforeEach(() => {
  getDayMock.mockReturnValue(1);

  date = new Date();

  date.getDay = getDayMock;
});

describe('isWeekday()', () => {
  test.each<[Weekday, boolean]>([
    ['monday', true],
    ['tuesday', false],
    ['wednesday', false],
    ['thursday', false],
    ['friday', false],
    ['saturday', false],
    ['sunday', false],
  ])('it should work (%s)', (weekday, expected) => {
    const isDay = isWeekday(weekday, date);

    expect(isDay).toBe(expected);
    expect(getDayMock).toHaveBeenCalled();
  });
});
