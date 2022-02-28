import { isArray } from '../../../src/is/isArray';

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
