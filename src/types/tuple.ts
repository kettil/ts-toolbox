export type TupelLength<T extends unknown[]> = T extends { length: infer L } ? L : never;

export type TupleOf<T, L extends number, R extends unknown[] = []> = R extends { length: L }
  ? R
  : TupleOf<T, L, [...R, T]>;

export type Range<N extends number, R extends unknown[] = []> = number extends N
  ? never[]
  : R['length'] extends N
    ? R
    : Range<N, [...R, `${R['length']}`]>;
