import { Expect } from '../../../src/types/expect';
import { UnionToTuple } from '../../../src/types/unionToTuple';

type UnionToTuple1Value = UnionToTuple<13 | 42>;
export type UnionToTuple1Test = Expect<UnionToTuple1Value, readonly [13, 42], true>;

type UnionToTuple2Value = UnionToTuple<[1, 2] | [9, 8]>;
export type UnionToTuple2Test = Expect<UnionToTuple2Value, readonly [[1, 2], [9, 8]], true>;
