/* eslint-disable unicorn/no-null, @typescript-eslint/no-empty-function */
import isArray from './isArray';

describe('isArray()', () => {
  test('it should work with return value true', () => {
    const result = isArray([]);

    expect(result).toBeTruthy();
  });

  test.each([[null], ['string'], [Number.NaN], [13], [{}], [() => {}]])(
    'it should work with return value false (%p)',
    (value) => {
      const result = isArray(value);

      expect(result).toBeFalsy();
    },
  );
});
