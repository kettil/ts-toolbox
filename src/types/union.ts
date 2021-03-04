export type UnionToIntersection<T> = (T extends unknown ? (x: T) => unknown : never) extends (x: infer R) => unknown
  ? R
  : never;

export type UnionToFunction<U> = UnionToIntersection<U extends unknown ? (f: U) => void : never>;

export type UnionToTuple<U> = UnionToFunction<U> extends (a: infer A) => void
  ? readonly [...UnionToTuple<Exclude<U, A>>, A]
  : readonly [];
