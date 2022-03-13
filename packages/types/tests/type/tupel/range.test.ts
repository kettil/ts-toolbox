import { assert, _ } from '../../../src/assert';
import type { Range } from '../../../src/tupel/range';

type TypeWithArray = Range<4>;

assert(_ as TypeWithArray, _ as ['0', '1', '2', '3']);
// @ts-expect-error -- only a tupel with 4 elements
assert(_ as TypeWithArray, _ as number[]);
