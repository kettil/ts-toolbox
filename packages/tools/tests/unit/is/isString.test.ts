import { isString } from '../../../src/is/isString';

describe('isString()', () => {
  describe('without empty string test', () => {
    test('return true if called with "foo"', () => {
      const isTrue = isString('foo');

      expect(isTrue).toBeTruthy();
    });

    test('return true if called with empty string', () => {
      const isTrue = isString('');

      expect(isTrue).toBeTruthy();
    });
  });

  describe('with other types', () => {
    test.each([[null], [undefined], [13n], [42], [[]], [{}], [() => {}]])(
      'return false if called with "%p"',
      (value) => {
        const isTrue = isString(value);

        expect(isTrue).toBeFalsy();
      },
    );
  });
});
