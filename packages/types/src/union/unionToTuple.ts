import type { UnionToFunction } from './unionToFunction';

// @see https://fettblog.eu/typescript-union-to-intersection/
type UnionToTuple<U> = UnionToFunction<U> extends (a: infer A) => void
  ? readonly [...UnionToTuple<Exclude<U, A>>, A]
  : readonly [];

export type { UnionToTuple };
