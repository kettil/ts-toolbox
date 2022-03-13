import { assert, _ } from '../../../src/assert';
import type { Subtract } from '../../../src/math/subtract';

type TypeWithSixAndFour = Subtract<6, 4>;

assert(_ as TypeWithSixAndFour, _ as 2);
// @ts-expect-error -- only "2" is defined
assert(_ as TypeWithSixAndFour, _ as number);
// @ts-expect-error -- only "2" is defined
assert(_ as TypeWithSixAndFour, _ as 4);

type TypeWithFourAndSix = Subtract<4, 6>;

assert(_ as TypeWithFourAndSix, _ as never);
// @ts-expect-error -- only "never" is defined
assert(_ as TypeWithFourAndSix, _ as number);
// @ts-expect-error -- only "never" is defined
assert(_ as TypeWithFourAndSix, _ as 13);
