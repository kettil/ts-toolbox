type TupleOf<T, L extends number, R extends unknown[] = []> = R extends { length: L } ? R : TupleOf<T, L, [...R, T]>;

export type { TupleOf };
