import { assert, _ } from '../../../src/assert';
import type { UnionToFunction } from '../../../src/union/unionToFunction';

type TypeWithNumbers = UnionToFunction<13 | 42>;

assert(_ as TypeWithNumbers, _ as ((f: 13) => void) & ((f: 42) => void));

type TypeWithArrays = UnionToFunction<[1, 2] | [9, 8]>;

assert(_ as TypeWithArrays, _ as ((f: [1, 2]) => void) & ((f: [9, 8]) => void));

type TypeWithObjects = UnionToFunction<{ [x in number]: unknown } | { [x in string]: unknown }>;

assert(_ as TypeWithObjects, _ as ((f: { [x: number]: unknown }) => void) & ((f: { [x: string]: unknown }) => void));
