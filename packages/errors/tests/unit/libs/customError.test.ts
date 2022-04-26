/* eslint-disable jest/no-conditional-expect -- error testing */
/* eslint-disable max-classes-per-file -- test file */
import { customError } from '../../../src/lib/customError';
import { CustomErrorAbstract } from '../../../src/lib/customErrorAbstract';

describe('customError()', () => {
  describe('create a simple custom error', () => {
    test('throw the error without parameters', () => {
      class CustomError extends customError({ code: 'Foo' }) {}

      const result = new CustomError();

      expect(CustomError.code).toBe('Foo');
      expect(result).toBeInstanceOf(CustomErrorAbstract);
    });

    test('throw the error with a string parameter', () => {
      class CustomError extends customError({ code: 'Bar' }) {}

      const result = new CustomError('Baz message.');

      expect(result).toBeInstanceOf(CustomErrorAbstract);

      expect(result.code).toBe('Bar');
      expect(result.name).toBe('Error');
      expect(result.message).toBe('Baz message.');
      expect(result.data).toBeUndefined();
      expect(result.statusCode).toBe(500);
      expect(result.stack).toEqual(expect.any(String));
      expect(result.cause).toBeUndefined();
    });

    test('throw the error with a empty object', () => {
      class CustomError extends customError({ code: 'Bar' }) {}

      const result = new CustomError({});

      expect(result).toBeInstanceOf(CustomErrorAbstract);

      expect(result.code).toBe('Bar');
      expect(result.name).toBe('Error');
      expect(result.message).toBe('Bar.');
      expect(result.data).toBeUndefined();
      expect(result.statusCode).toBe(500);
      expect(result.stack).toEqual(expect.any(String));
      expect(result.cause).toBeUndefined();
    });

    test('throw the error with an object', () => {
      class CustomError extends customError({ code: 'Bar' }) {}

      const result = new CustomError({
        message: 'Baz message.',
        cause: new Error('cause'),
        data: { foo: 42 },
      });

      expect(result).toBeInstanceOf(CustomErrorAbstract);

      expect(result.code).toBe('Bar');
      expect(result.name).toBe('Error');
      expect(result.message).toBe('Baz message.');
      expect(result.data).toEqual({ foo: 42 });
      expect(result.statusCode).toBe(500);
      expect(result.stack).toEqual(expect.any(String));
      expect(result.cause).toBeInstanceOf(Error);
    });
  });

  describe('create a completely custom error', () => {
    test('throw a internal error because the error was throw without parameters', () => {
      class CustomError extends customError({
        code: 'Foo',
        requiredDataKeys: ['baz'],
        defaultMessage: 'Foo message.',
        statusCode: 404,
      }) {}

      try {
        // @ts-expect-error -- CustomError expects object parameter
        throw new CustomError();

        // eslint-disable-next-line @typescript-eslint/no-implicit-any-catch -- error type is tested
      } catch (error: any) {
        expect(error).toBeInstanceOf(CustomErrorAbstract);

        /* eslint-disable @typescript-eslint/no-unsafe-member-access -- error type is tested */
        expect(error.code).toBe('InternalCustomError');
        expect(error.name).toBe('Error');
        expect(error.message).toBe('Not all required data keys were defined.');
        expect(error.data).toEqual({ requiredDataKeys: ['baz'] });
        expect(error.statusCode).toBe(500);
        expect(error.stack).toEqual(expect.any(String));
        expect(error.cause).toBeInstanceOf(CustomError);

        expect(error.cause.code).toBe('Foo');
        expect(error.cause.name).toBe('Error');
        expect(error.cause.message).toBe('Foo message.');
        expect(error.cause.data).toBeUndefined();
        expect(error.cause.statusCode).toBe(404);
        expect(error.cause.stack).toEqual(expect.any(String));
        expect(error.cause.cause).toBeUndefined();
        /* eslint-enable @typescript-eslint/no-unsafe-member-access -- error type is tested */
      }
    });

    test('throw a internal error because the error was throw with a string parameter', () => {
      class CustomError extends customError({
        code: 'Bar',
        requiredDataKeys: ['baz'],
        defaultMessage: 'Bar message.',
        statusCode: 501,
      }) {}

      try {
        // @ts-expect-error -- CustomError expects object parameter
        throw new CustomError('Baz message.');

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
        expect(error.cause).toBeInstanceOf(CustomError);

        expect(error.cause.code).toBe('Bar');
        expect(error.cause.name).toBe('Error');
        expect(error.cause.message).toBe('Baz message.');
        expect(error.cause.data).toBeUndefined();
        expect(error.cause.statusCode).toBe(501);
        expect(error.cause.stack).toEqual(expect.any(String));
        expect(error.cause.cause).toBeUndefined();
        /* eslint-enable @typescript-eslint/no-unsafe-member-access -- error type is tested */
      }
    });

    test('throw a internal error because the error was throw with a empty object', () => {
      class CustomError extends customError({
        code: 'Bar',
        requiredDataKeys: ['baz'],
        defaultMessage: 'Foo message.',
        statusCode: 401,
      }) {}

      try {
        // @ts-expect-error -- CustomError expects object parameter
        throw new CustomError({});

        // eslint-disable-next-line @typescript-eslint/no-implicit-any-catch -- error type is tested
      } catch (error: any) {
        expect(error).toBeInstanceOf(CustomErrorAbstract);

        /* eslint-disable @typescript-eslint/no-unsafe-member-access -- error type is tested */
        expect(error.code).toBe('InternalCustomError');
        expect(error.name).toBe('Error');
        expect(error.message).toBe('Not all required data keys were defined.');
        expect(error.data).toEqual({ requiredDataKeys: ['baz'] });
        expect(error.statusCode).toBe(500);
        expect(error.stack).toEqual(expect.any(String));
        expect(error.cause).toBeInstanceOf(CustomError);

        expect(error.cause.code).toBe('Bar');
        expect(error.cause.name).toBe('Error');
        expect(error.cause.message).toBe('Foo message.');
        expect(error.cause.data).toBeUndefined();
        expect(error.cause.statusCode).toBe(401);
        expect(error.cause.stack).toEqual(expect.any(String));
        expect(error.cause.cause).toBeUndefined();
        /* eslint-enable @typescript-eslint/no-unsafe-member-access -- error type is tested */
      }
    });

    test('throw the error with an object', () => {
      class CustomError extends customError({
        code: 'Bar',
        requiredDataKeys: ['baz'],
        defaultMessage: 'Foo message.',
        statusCode: 403,
      }) {}

      const result = new CustomError({
        message: 'Baz message.',
        cause: new Error('cause'),
        data: { foo: 42, baz: 13 },
      });

      expect(result).toBeInstanceOf(CustomErrorAbstract);

      expect(result.code).toBe('Bar');
      expect(result.name).toBe('Error');
      expect(result.message).toBe('Baz message.');
      expect(result.data).toEqual({ foo: 42, baz: 13 });
      expect(result.statusCode).toBe(403);
      expect(result.stack).toEqual(expect.any(String));
      expect(result.cause).toBeInstanceOf(Error);
    });
  });
});
