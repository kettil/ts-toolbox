import { customError } from '../../../src/lib/customError';
import { isError } from '../../../src/lib/isError';

describe('isError()', () => {
  test.each([
    ['Error', Error],
    ['EvalError', EvalError],
    ['RangeError', RangeError],
    ['ReferenceError', ReferenceError],
    ['SyntaxError', SyntaxError],
    ['TypeError', TypeError],
    ['URIError', URIError],
  ])('return true if called with %p instance', (_, ErrorClass) => {
    const parameter1 = new ErrorClass('message');

    const isTruthy = isError(parameter1);

    expect(isTruthy).toBeTruthy();
  });

  test('return true if called with "AggregateError" instance', () => {
    const parameter1 = new AggregateError([], 'message');

    const isTruthy = isError(parameter1);

    expect(isTruthy).toBeTruthy();
  });

  test('return true if called with customError instance', () => {
    class ErrorClass extends customError({ code: 'TestError' }) {}

    const parameter1 = new ErrorClass('message');

    const isTruthy = isError(parameter1);

    expect(isTruthy).toBeTruthy();
  });

  test.each([['foo'], [13], [{ a: 1 }], [[1]], [false], [true], [null], [undefined]])(
    'return false if called with value %p',
    (value) => {
      const isTruthy = isError(value);

      expect(isTruthy).toBeFalsy();
    },
  );
});
