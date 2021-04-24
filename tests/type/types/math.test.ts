import { Expect } from '../../../src/types/common';
import { Addition, Subtract } from '../../../src/types/math';

// Addition

type Addition1Value = Addition<4, 6>;
export type Addition1Test = Expect<Addition1Value, 10, true>;

// Subtract

type Subtract1Value = Subtract<6, 4>;
export type Subtract1Test = Expect<Subtract1Value, 2, true>;
