import { assert, _ } from '../../../src/assert';
import type { UnionToTuple } from '../../../src/union/unionToTuple';

type TypeWithNumbers = UnionToTuple<13 | 42>;

assert(_ as TypeWithNumbers, _ as readonly [13, 42]);

type TypeWithArrays = UnionToTuple<[1, 2] | [9, 8]>;

assert(_ as TypeWithArrays, _ as readonly [[1, 2], [9, 8]]);
