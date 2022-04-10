/* eslint-disable max-classes-per-file -- test file */
import { customError } from '../../../src/lib/customError';
import { CustomErrorAbstract } from '../../../src/lib/customErrorAbstract';

describe('customError()', () => {
  test('create a custom error', () => {
    class CustomError extends customError({ code: 'Foo' }) {}

    const result = new CustomError();

    expect(CustomError.code).toBe('Foo');
    expect(result).toBeInstanceOf(CustomErrorAbstract);
  });

  test('create a custom error a', () => {
    class CustomError extends customError({ code: 'Bar' }) {}

    const result = new CustomError('Baz message.');

    expect(result).toBeInstanceOf(CustomErrorAbstract);
  });
});
