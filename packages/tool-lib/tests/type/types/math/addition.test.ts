import { Expect } from '../../../../src/types/expect';
import { Addition } from '../../../../src/types/math/addition';

type Addition1Value = Addition<4, 6>;
export type Addition1Test = Expect<Addition1Value, 10, true>;
