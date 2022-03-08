import { isNumber } from '../../../src/is/isNumber';

describe('isNumber()', () => {
  test('it should work with number', () => {
    const isTrue = isNumber(42);

    expect(isTrue).toBeTruthy();
  });

  test.each([
    [null],
    [13n],
    ['string'],
    [Number.NaN],
    [Number.POSITIVE_INFINITY],
    [Number.NEGATIVE_INFINITY],
    [[]],
    [{}],
    [() => {}],
  ])('it should work with return value false (%p)', (value) => {
    const isTrue = isNumber(value);

    expect(isTrue).toBeFalsy();
  });
});
