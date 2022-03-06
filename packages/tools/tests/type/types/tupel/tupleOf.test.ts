import type { Expect } from '../../../../src/types/expect';
import type { TupleOf } from '../../../../src/types/tupel/tupleOf';

type TupleOf1Value = TupleOf<string, 1>;
export type TupleOf1Test = Expect<TupleOf1Value, [string], true>;

type TupleOf2Value = TupleOf<boolean, 3>;
export type TupleOf2Test = Expect<TupleOf2Value, [boolean, boolean, boolean], true>;
