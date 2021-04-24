import { Unpacked } from '../../../src/types/array';
import { Expect } from '../../../src/types/common';

// Unpacked

type Unpacked1Value = Unpacked<string[]>;
export type Unpacked1Test = Expect<Unpacked1Value, string, true>;

type Unpacked2Value = Unpacked<Array<{ a: string; z: number }>>;
export type Unpacked2Test = Expect<Unpacked2Value, { a: string; z: number }, true>;
