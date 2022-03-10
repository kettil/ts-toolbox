import type { Expect } from '../../../src/types/expect';
import type { Unpacked } from '../../../src/types/unpacked';

type Unpacked1Value = Unpacked<string[]>;
export type Unpacked1Test = Expect<Unpacked1Value, string, true>;

type Unpacked2Value = Unpacked<Array<{ a: string; z: number }>>;
export type Unpacked2Test = Expect<Unpacked2Value, { a: string; z: number }, true>;

type Unpacked3Value = Unpacked<Promise<{ a: string; z: number }>>;
export type Unpacked3Test = Expect<Unpacked3Value, { a: string; z: number }, true>;

type Unpacked4Value = Unpacked<Set<{ a: string; z: number }>>;
export type Unpacked4Test = Expect<Unpacked4Value, { a: string; z: number }, true>;
