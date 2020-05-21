import * as array from './array';
import * as is from './is';
import * as node from './node';
import * as sort from './sort';
import * as tools from '.';

describe('main index', () => {
  test('it should create object with all tools', () => {
    const expected = { ...sort, ...is, ...array, ...node };

    expect(tools).toEqual(expected);
  });
});
