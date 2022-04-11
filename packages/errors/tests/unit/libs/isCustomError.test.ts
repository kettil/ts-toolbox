/* eslint-disable max-classes-per-file -- test file */
import { customError } from '../../../src/lib/customError';
import { GenericAggregateError } from '../../../src/lib/defaultErrors/genericAggregateError';
import { isCustomError } from '../../../src/lib/isCustomError';

describe('isCustomError()', () => {
  test('return true if called with customError instance', () => {
    class ErrorClass extends customError({ code: 'TestError' }) {}

    const parameter1 = new ErrorClass('message');

    const isTruthy = isCustomError(parameter1);

    expect(isTruthy).toBeTruthy();
  });

  test('return true if called with customError instance and same type', () => {
    class ErrorClass extends customError({ code: 'TestError' }) {}

    const parameter1 = new ErrorClass('message');

    const isTruthy = isCustomError(parameter1, ErrorClass);

    expect(isTruthy).toBeTruthy();
  });

  test('return true if called with customError instance and not same type', () => {
    class ErrorClassType extends customError({ code: 'TypeError' }) {}
    class ErrorClass extends customError({ code: 'TestError' }) {}

    const parameter1 = new ErrorClass('message');

    const isTruthy = isCustomError(parameter1, ErrorClassType);

    expect(isTruthy).toBeFalsy();
  });

  test('return false if called with "CustomAggregateError" instance', () => {
    const parameter1 = new GenericAggregateError([]);

    const isTruthy = isCustomError(parameter1);

    expect(isTruthy).toBeFalsy();
  });

  test.each([
    ['Error', Error],
    ['EvalError', EvalError],
    ['RangeError', RangeError],
    ['ReferenceError', ReferenceError],
    ['SyntaxError', SyntaxError],
    ['TypeError', TypeError],
    ['URIError', URIError],
  ])('return false if called with %p instance', (_, ErrorClass) => {
    const parameter1 = new ErrorClass('message');

    const isTruthy = isCustomError(parameter1);

    expect(isTruthy).toBeFalsy();
  });

  test('return false if called with "AggregateError" instance', () => {
    const parameter1 = new AggregateError([], 'message');

    const isTruthy = isCustomError(parameter1);

    expect(isTruthy).toBeFalsy();
  });

  test.each([['foo'], [13], [{ a: 1 }], [[1]], [false], [true], [null], [undefined]])(
    'return false if called with value %p',
    (value) => {
      const isTruthy = isCustomError(value);

      expect(isTruthy).toBeFalsy();
    },
  );
});
