import { isFunction } from '../../../src/is/isFunction';

describe('isFunction()', () => {
  test('it should work', () => {
    const isTrue = isFunction(() => {});

    expect(isTrue).toBeTruthy();
  });

  test.each([[null], [undefined], ['string'], [Number.NaN], [13], [{}]])(
    'it should work with return value false (%p)',
    (value) => {
      const isTrue = isFunction(value);

      expect(isTrue).toBeFalsy();
    },
  );
});
