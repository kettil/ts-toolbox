/* eslint-disable unicorn/no-null, @typescript-eslint/no-empty-function */
import isObject from './object';

describe('isObject()', () => {
  test('it should work with return value true', () => {
    const result = isObject({});

    expect(result).toBeTruthy();
  });

  test.each([[null], ['string'], [Number.NaN], [13], [[]], [() => {}]])(
    'it should work with return value false (%p)',
    (value) => {
      const result = isObject(value);

      expect(result).toBeFalsy();
    },
  );
});
