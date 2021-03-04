import { Expect } from './common';
import { UnionToFunction, UnionToIntersection, UnionToTuple } from './union';

// UnionToIntersection

type UnionToIntersection1Value = UnionToIntersection<((a: string) => void) | ((b: number) => void)>;
export type UnionToIntersection1Test = Expect<
  UnionToIntersection1Value,
  ((a: string) => void) & ((b: number) => void),
  true
>;

// UnionToFunction

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

// UnionToTuple

type UnionToTuple1Value = UnionToTuple<13 | 42>;
export type UnionToTuple1Test = Expect<UnionToTuple1Value, readonly [13, 42], true>;

type UnionToTuple2Value = UnionToTuple<[1, 2] | [9, 8]>;
export type UnionToTuple2Test = Expect<UnionToTuple2Value, readonly [[1, 2], [9, 8]], true>;
