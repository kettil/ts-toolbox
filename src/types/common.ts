export type EqualType<T, S, R extends never | false = never> = [T] extends [S] ? ([S] extends [T] ? true : R) : R;

export type Expect<Value, Expected, Result extends EqualType<Value, Expected, false>> = Result;

export type TupleOf<T, N extends number, R extends unknown[] = []> = number extends N
  ? T[]
  : R['length'] extends N
    ? R
    : TupleOf<T, N, [T, ...R]>;

export type Range<N extends number, R extends unknown[] = []> = number extends N
  ? never[]
  : R['length'] extends N
    ? R
    : Range<N, [`${R['length']}`, ...R]>;
