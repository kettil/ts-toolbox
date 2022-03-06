import type { Expect } from '../../../src/types/expect';
import type { UnionToIntersection } from '../../../src/types/unionToIntersection';

type UnionToIntersection1Value = UnionToIntersection<((a: string) => void) | ((b: number) => void)>;
export type UnionToIntersection1Test = Expect<
  UnionToIntersection1Value,
  ((a: string) => void) & ((b: number) => void),
  true
>;

type UnionToIntersection2Value = UnionToIntersection<{ a: 42 } | { b: 13 }>;
export type UnionToIntersection2Test = Expect<UnionToIntersection2Value, { a: 42 } & { b: 13 }, true>;
