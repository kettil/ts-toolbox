import { assert, _ } from '../../../src/assert';
import type { Addition } from '../../../src/math/addition';

type TypeWithFourAndSix = Addition<4, 6>;

assert(_ as TypeWithFourAndSix, _ as 10);
// @ts-expect-error -- only "10" is defined
assert(_ as TypeWithFourAndSix, _ as number);
// @ts-expect-error -- only "10" is defined
assert(_ as TypeWithFourAndSix, _ as 13);
