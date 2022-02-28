import { Expect } from '../../../../src/types/expect';
import { Range } from '../../../../src/types/tupel/range';

type Range1Value = Range<4>;
export type Range1Test = Expect<Range1Value, ['0', '1', '2', '3'], true>;
