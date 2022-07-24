/* eslint-disable jest/max-expects -- error testing */
/* eslint-disable jest/no-conditional-expect -- error testing */
/* eslint-disable max-classes-per-file -- test file */
import { customAggregateError } from '../../../src/lib/customAggregateError';
import { CustomAggregateErrorAbstract } from '../../../src/lib/customAggregateErrorAbstract';
import { CustomErrorAbstract } from '../../../src/lib/customErrorAbstract';

describe('customAggregateError()', () => {
  describe('create a simple custom aggregate error', () => {
    test('throw the error with a error array parameter', () => {
      class CustomAggregateError extends customAggregateError({ code: 'Bar' }) {}

      const result = new CustomAggregateError([new Error('error1')]);

      expect(result).toBeInstanceOf(CustomAggregateErrorAbstract);

      expect(result.code).toBe('Bar');
      expect(result.name).toBe('AggregateError');
      expect(result.message).toBe('Bar.');
      expect(result.data).toBeUndefined();
      expect(result.statusCode).toBe(500);
      expect(result.stack).toEqual(expect.any(String));
      expect(result.errors).toEqual([new Error('error1')]);
    });

    test('throw the error with a simple object', () => {
      class CustomAggregateError extends customAggregateError({ code: 'Foo' }) {}

      const result = new CustomAggregateError({ errors: [new Error('error2')] });

      expect(result).toBeInstanceOf(CustomAggregateErrorAbstract);

      expect(result.code).toBe('Foo');
      expect(result.name).toBe('AggregateError');
      expect(result.message).toBe('Foo.');
      expect(result.data).toBeUndefined();
      expect(result.statusCode).toBe(500);
      expect(result.stack).toEqual(expect.any(String));
      expect(result.errors).toEqual([new Error('error2')]);
    });

    test('throw the error with an object', () => {
      class CustomAggregateError extends customAggregateError({ code: 'Bar' }) {}

      const result = new CustomAggregateError({
        message: 'Baz message.',
        errors: [new Error('error3')],
        data: { foo: 42 },
      });

      expect(result).toBeInstanceOf(CustomAggregateErrorAbstract);

      expect(result.code).toBe('Bar');
      expect(result.name).toBe('AggregateError');
      expect(result.message).toBe('Baz message.');
      expect(result.data).toEqual({ foo: 42 });
      expect(result.statusCode).toBe(500);
      expect(result.stack).toEqual(expect.any(String));
      expect(result.errors).toEqual([new Error('error3')]);
    });
  });

  describe('create a completely custom aggregate error', () => {
    test('throw a internal error because the error was throw with a error array', () => {
      class CustomAggregateError extends customAggregateError({
        code: 'Bar',
        requiredDataKeys: ['baz'],
        defaultMessage: 'Bar message.',
        statusCode: 501,
      }) {}

      try {
        // @ts-expect-error -- CustomAggregateError expects object parameter
        throw new CustomAggregateError([new Error('error')]);

        // eslint-disable-next-line @typescript-eslint/no-implicit-any-catch -- error type is tested
      } catch (error: any) {
        expect(error).toBeInstanceOf(CustomErrorAbstract);

        /* eslint-disable @typescript-eslint/no-unsafe-member-access -- error type is tested */
        expect(error.code).toBe('InternalCustomError');
        expect(error.name).toBe('Error');
        expect(error.message).toBe('An object must be passed because the data field is required.');
        expect(error.data).toEqual({ requiredDataKeys: ['baz'] });
        expect(error.statusCode).toBe(500);
        expect(error.stack).toEqual(expect.any(String));
        expect(error.cause).toBeInstanceOf(CustomAggregateError);

        expect(error.cause.code).toBe('Bar');
        expect(error.cause.name).toBe('AggregateError');
        expect(error.cause.message).toBe('Bar message.');
        expect(error.cause.data).toBeUndefined();
        expect(error.cause.statusCode).toBe(501);
        expect(error.cause.stack).toEqual(expect.any(String));
        expect(error.cause.errors).toEqual([new Error('error')]);
        /* eslint-enable @typescript-eslint/no-unsafe-member-access -- error type is tested */
      }
    });

    test('throw the error with an object', () => {
      class CustomAggregateError extends customAggregateError({
        code: 'Bar',
        requiredDataKeys: ['baz'],
        defaultMessage: 'Foo message.',
        statusCode: 403,
      }) {}

      const result = new CustomAggregateError({
        message: 'Baz message.',
        errors: [new Error('error42')],
        data: { foo: 42, baz: 13 },
      });

      expect(result).toBeInstanceOf(CustomAggregateErrorAbstract);

      expect(result.code).toBe('Bar');
      expect(result.name).toBe('AggregateError');
      expect(result.message).toBe('Baz message.');
      expect(result.data).toEqual({ foo: 42, baz: 13 });
      expect(result.statusCode).toBe(403);
      expect(result.stack).toEqual(expect.any(String));
      expect(result.errors).toEqual([new Error('error42')]);
    });
  });
});
