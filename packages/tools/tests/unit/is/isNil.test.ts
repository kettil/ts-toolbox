import { isNil } from '../../../src/is/isNil';

describe('isNil()', () => {
  test('it should work with "null"', () => {
    const isTrue = isNil(null);

    expect(isTrue).toBeTruthy();
  });

  test('it should work with "undefined"', () => {
    // eslint-disable-next-line unicorn/no-useless-undefined -- is needed for the test
    const isTrue = isNil(undefined);

    expect(isTrue).toBeTruthy();
  });

  test.each([[[]], ['string'], [Number.NaN], [13], [{}], [() => {}]])(
    'it should work with return value false (%p)',
    (value) => {
      const isTrue = isNil(value);

      expect(isTrue).toBeFalsy();
    },
  );
});
