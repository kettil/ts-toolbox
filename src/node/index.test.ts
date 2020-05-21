/* eslint-disable unicorn/prevent-abbreviations */
import env from './env';
import * as node from '.';

describe('"node" tools', () => {
  test('it should create object with all "node" tools', () => {
    const expected = { env };

    expect(node).toEqual(expected);
  });
});
