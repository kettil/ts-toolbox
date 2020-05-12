import * as array from './array';
import * as is from './is';
import * as sort from './sort';
import * as tools from '.';

describe('main index', () => {
  test('it should create object with all tools', () => {
    const expected = { ...sort, ...is, ...array };

    expect(tools).toEqual(expected);
  });
});
