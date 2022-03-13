import { _, assert } from '../../../src/assert';
import type { ExtractTypeFromTupleArray } from '../../../src/common/extractTypeFromTupleArray';

type TypeWithoutPosition = ExtractTypeFromTupleArray<[['a', 42], ['b', 13]]>;

assert(_ as TypeWithoutPosition, _ as 'a' | 'b');
// @ts-expect-error -- type "c" is too much
assert(_ as TypeWithoutPosition, _ as 'a' | 'b' | 'c');

type TypeWithPositionZero = ExtractTypeFromTupleArray<[['a', 42], ['b', 13]], 0>;

assert(_ as TypeWithPositionZero, _ as 'a' | 'b');
// @ts-expect-error -- type "c" is too much
assert(_ as TypeWithPositionZero, _ as 'a' | 'b' | 'c');

type TypeWithPositionOne = ExtractTypeFromTupleArray<[['a', 42], ['b', 13]], 1>;

assert(_ as TypeWithPositionOne, _ as 13 | 42);
// @ts-expect-error -- type "7" is too much
assert(_ as TypeWithPositionOne, _ as 7 | 13 | 42);
