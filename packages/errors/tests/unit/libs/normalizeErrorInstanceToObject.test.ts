/* eslint-disable @typescript-eslint/no-unsafe-assignment -- test file */

import { GenericError } from '../../../src/lib/defaultErrors/genericError';
import { normalizeErrorInstanceToObject } from '../../../src/lib/normalizeErrorInstanceToObject';

describe('normalizeErrorInstanceToObject()', () => {
  test('return json object', () => {
    const json = normalizeErrorInstanceToObject(new Error('Error message.'));

    expect(json).toEqual({
      code: 'Error',
      message: 'Error message.',
      stack: expect.any(Array),
    });
  });

  test('return json object with error cause', () => {
    const instance = new GenericError({
      message: 'Baz.',
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
      cause: new GenericError({
        message: 'Sub foo.',
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
