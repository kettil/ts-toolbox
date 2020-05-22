import compareAsc from './compareAsc';
import compareDesc from './compareDesc';
import compareTransformAsc from './compareTransformAsc';
import compareTransformDesc from './compareTransformDesc';
import * as sort from '.';

describe('"sort" tools', () => {
  test('it should create object with all "sort" tools', () => {
    const expected = { compareAsc, compareDesc, compareTransformAsc, compareTransformDesc };

    expect(sort).toEqual(expected);
  });
});
