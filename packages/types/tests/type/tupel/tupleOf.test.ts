import { assert, _ } from '../../../src/assert';
import type { TupleOf } from '../../../src/tupel/tupleOf';

type TypeWithArrayLengthOne = TupleOf<string, 1>;

assert(_ as TypeWithArrayLengthOne, _ as [string]);
// @ts-expect-error -- tupel is too large
assert(_ as TypeWithArrayLengthOne, _ as [string, string]);

type TypeWithArrayLengthThree = TupleOf<boolean, 3>;

assert(_ as TypeWithArrayLengthThree, _ as [boolean, boolean, boolean]);
// @ts-expect-error -- tupel is too small
assert(_ as TypeWithArrayLengthThree, _ as [boolean, boolean]);
