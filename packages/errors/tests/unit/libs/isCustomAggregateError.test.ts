/* eslint-disable max-classes-per-file -- test file */
import { customAggregateError } from '../../../src/lib/customAggregateError';
import { isCustomAggregateError } from '../../../src/lib/isCustomAggregateError';

describe('isCustomAggregateError()', () => {
  test('return true if called with customError instance', () => {
    class ErrorAggregateClass extends customAggregateError({ code: 'TestError' }) {}

    const parameter1 = new ErrorAggregateClass([]);

    const isTruthy = isCustomAggregateError(parameter1);

    expect(isTruthy).toBeTruthy();
  });

  test('return true if called with customError instance and same type', () => {
    class ErrorAggregateClass extends customAggregateError({ code: 'TestError' }) {}

    const parameter1 = new ErrorAggregateClass([]);

    const isTruthy = isCustomAggregateError(parameter1, ErrorAggregateClass);

    expect(isTruthy).toBeTruthy();
  });

  test('return true if called with customError instance and not same type', () => {
    class ErrorClassType extends customAggregateError({ code: 'TypeError' }) {}
    class ErrorAggregateClass extends customAggregateError({ code: 'TestError' }) {}

    const parameter1 = new ErrorAggregateClass([]);

    const isTruthy = isCustomAggregateError(parameter1, ErrorClassType);

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
  ])('return false if called with %p instance', (_, ErrorAggregateClass) => {
    const parameter1 = new ErrorAggregateClass('message');

    const isTruthy = isCustomAggregateError(parameter1);

    expect(isTruthy).toBeFalsy();
  });

  test('return false if called with "AggregateError" instance', () => {
    const parameter1 = new AggregateError([], 'message');

    const isTruthy = isCustomAggregateError(parameter1);

    expect(isTruthy).toBeFalsy();
  });

  test.each([['foo'], [13], [{ a: 1 }], [[1]], [false], [true], [null], [undefined]])(
    'return false if called with value %p',
    (value) => {
      const isTruthy = isCustomAggregateError(value);

      expect(isTruthy).toBeFalsy();
    },
  );
});
