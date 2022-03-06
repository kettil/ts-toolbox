import type { Expect } from '../../../src/types/expect';
import type { UnionToFunction } from '../../../src/types/unionToFunction';

type UnionToFunction1Value = UnionToFunction<13 | 42>;
export type UnionToFunction1Test = Expect<UnionToFunction1Value, ((f: 13) => void) & ((f: 42) => void), true>;

type UnionToFunction2Value = UnionToFunction<[1, 2] | [9, 8]>;
export type UnionToFunction2Test = Expect<UnionToFunction2Value, ((f: [1, 2]) => void) & ((f: [9, 8]) => void), true>;

type UnionToFunction3Value = UnionToFunction<{ [x in number]: unknown } | { [x in string]: unknown }>;
export type UnionToFunction3Test = Expect<
  UnionToFunction3Value,
  ((f: { [x: number]: unknown }) => void) & ((f: { [x: string]: unknown }) => void),
  true
>;
