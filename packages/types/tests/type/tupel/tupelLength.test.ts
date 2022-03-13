import { assert, _ } from '../../../src/assert';
import type { TupelLength } from '../../../src/tupel/tupelLength';

type TypeWithArrayLength = TupelLength<[1, 2, 3, 4]>;

assert(_ as TypeWithArrayLength, _ as 4);
// @ts-expect-error -- count is too large
assert(_ as TypeWithArrayLength, _ as 5);
