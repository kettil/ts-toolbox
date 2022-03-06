import type { UnionToIntersection } from './unionToIntersection';

// @see https://fettblog.eu/typescript-union-to-intersection/
type UnionToFunction<U> = UnionToIntersection<U extends unknown ? (f: U) => void : never>;

export type { UnionToFunction };
