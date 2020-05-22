/* eslint-disable unicorn/prevent-abbreviations */
import delay from './delay';
import env from './env';
import * as node from '.';

describe('"node" tools', () => {
  test('it should create object with all "node" tools', () => {
    const expected = { delay, env };

    expect(node).toEqual(expected);
  });
});
