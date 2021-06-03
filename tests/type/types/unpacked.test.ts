import { Expect } from '../../../src/types/expect';
import { Unpacked } from '../../../src/types/unpacked';

type Unpacked1Value = Unpacked<string[]>;
export type Unpacked1Test = Expect<Unpacked1Value, string, true>;

type Unpacked2Value = Unpacked<Array<{ a: string; z: number }>>;
export type Unpacked2Test = Expect<Unpacked2Value, { a: string; z: number }, true>;
