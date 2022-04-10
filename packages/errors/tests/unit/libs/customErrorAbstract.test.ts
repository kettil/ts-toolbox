/* eslint-disable @typescript-eslint/no-unsafe-assignment -- test file */

import { CustomErrorAbstract } from '../../../src/lib/customErrorAbstract';

class CustomError extends CustomErrorAbstract<string> {}

describe('customErrorAbstract', () => {
  test('create a class based on CustomErrorAbstract', () => {
    const instance = new CustomError({
      code: 'Foo',
      message: 'Baz',
      statusCode: 404,
    });

    expect(instance).toBeInstanceOf(CustomErrorAbstract);
  });

  describe('customErrorAbstract::toJSON()', () => {
    test('return json', () => {
      const instance = new CustomError({
        code: 'Foo',
        message: 'Baz.',
        statusCode: 404,
        data: { foo: 42 },
      });

      expect(instance.toJSON()).toEqual({
        code: 'Foo',
        message: 'Baz.',
        data: { foo: 42 },
        stack: expect.any(Array),
      });
    });

    test('return json with error cause', () => {
      const instance = new CustomError({
        code: 'Foo',
        message: 'Baz.',
        statusCode: 404,
        cause: new Error('Sub error.'),
      });

      expect(instance.toJSON()).toEqual({
        code: 'Foo',
        message: 'Baz.',
        stack: expect.any(Array),
        cause: {
          code: 'Error',
          message: 'Sub error.',
          stack: expect.any(Array),
        },
      });
    });

    test('return json with custom error cause', () => {
      const instance = new CustomError({
        code: 'Foo',
        message: 'Baz.',
        statusCode: 404,
        cause: new CustomError({
          code: 'Baz',
          message: 'Sub foo.',
          statusCode: 500,
          data: { baz: 13 },
        }),
      });

      expect(instance.toJSON()).toEqual({
        code: 'Foo',
        message: 'Baz.',
        stack: expect.any(Array),
        cause: {
          code: 'Baz',
          data: { baz: 13 },
          message: 'Sub foo.',
          stack: expect.any(Array),
        },
      });
    });
  });
});
