import * as errors from '../../src';

describe('index', () => {
  test('return the public endpoints', () => {
    const expected = [
      'customAggregateError',
      'customError',
      'defaultAggregateErrors',
      'defaultErrors',
      'isCustomAggregateError',
      'isCustomError',
      'isError',
    ];

    expect(Object.keys(errors)).toEqual(expected);
  });
});
