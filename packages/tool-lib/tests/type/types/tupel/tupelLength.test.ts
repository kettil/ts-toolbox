import { Expect } from '../../../../src/types/expect';
import { TupelLength } from '../../../../src/types/tupel/tupelLength';

type TupelLength1Value = TupelLength<[1, 2, 3, 4]>;
export type TupelLength1Test = Expect<TupelLength1Value, 4, true>;
