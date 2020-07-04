/* eslint-disable unicorn/no-null, @typescript-eslint/no-empty-function */
import isArray from './isArray';

describe('isArray()', () => {
  test('it should work with return value true', () => {
    const isTrue = isArray([]);

    expect(isTrue).toBeTruthy();
  });

  test.each([[null], ['string'], [Number.NaN], [13], [{}], [() => {}]])(
    'it should work with return value false (%p)',
    (value) => {
      const isTrue = isArray(value);

      expect(isTrue).toBeFalsy();
    },
  );
});
