/* eslint-disable @typescript-eslint/no-unsafe-assignment -- test file */

import { GenericError } from '../../../src/lib/defaultErrors/genericError';
import { normalizeErrorInstance } from '../../../src/lib/normalizeErrorInstance';

describe('normalizeErrorInstance()', () => {
  test('return json object', () => {
    const json = normalizeErrorInstance(new Error('Error message.'));

    expect(json).toEqual({
      code: 'Error',
      message: 'Error message.',
      stack: expect.any(Array),
    });
  });

  test('return json object with error cause', () => {
    const instance = new GenericError({
      message: 'Baz.',
      statusCode: 404,
      cause: new Error('Sub error.'),
    });

    expect(instance.toJSON()).toEqual({
      code: 'Generic',
      message: 'Baz.',
      stack: expect.any(Array),
      cause: {
        code: 'Error',
        message: 'Sub error.',
        stack: expect.any(Array),
      },
    });
  });

  test('return json object with custom error cause', () => {
    const instance = new GenericError({
      message: 'Baz.',
      statusCode: 404,
      cause: new GenericError({
        message: 'Sub foo.',
        statusCode: 500,
        data: { baz: 13 },
      }),
    });

    expect(instance.toJSON()).toEqual({
      code: 'Generic',
      message: 'Baz.',
      stack: expect.any(Array),
      cause: {
        code: 'Generic',
        data: { baz: 13 },
        message: 'Sub foo.',
        stack: expect.any(Array),
      },
    });
  });
});
