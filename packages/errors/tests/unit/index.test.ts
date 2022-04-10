import * as errors from '../../src';

describe('index', () => {
  test('return the public endpoints', () => {
    const expected = ['customError', 'defaultErrors', 'isCustomError', 'isError'];

    expect(Object.keys(errors)).toEqual(expected);
  });
});
