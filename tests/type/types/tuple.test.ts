import { Expect } from '../../../src/types/common';
import { Range, TupleOf, TupelLength } from '../../../src/types/tuple';

// TupelLength

type TupelLength1Value = TupelLength<[1, 2, 3, 4]>;
export type TupelLength1Test = Expect<TupelLength1Value, 4, true>;

// TupleOf

type TupleOf1Value = TupleOf<string, 1>;
export type TupleOf1Test = Expect<TupleOf1Value, [string], true>;

type TupleOf2Value = TupleOf<boolean, 3>;
export type TupleOf2Test = Expect<TupleOf2Value, [boolean, boolean, boolean], true>;

// Range

type Range1Value = Range<4>;
export type Range1Test = Expect<Range1Value, ['0', '1', '2', '3'], true>;
