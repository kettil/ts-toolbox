import sortCompareAsc from './compareAsc';
import sortCompareDesc from './compareDesc';
import sortCompareTransformAsc from './compareTransformAsc';
import sortCompareTransformDesc from './compareTransformDesc';
import * as sort from '.';

describe('"sort" tools', () => {
  test('it should create object with all "sort" tools', () => {
    const expected = { sortCompareAsc, sortCompareDesc, sortCompareTransformAsc, sortCompareTransformDesc };

    expect(sort).toEqual(expected);
  });
});
