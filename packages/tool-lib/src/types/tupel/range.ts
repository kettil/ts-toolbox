type Range<N extends number, R extends unknown[] = []> = number extends N
  ? never[]
  : R['length'] extends N
    ? R
    : Range<N, [...R, `${R['length']}`]>;

export type { Range };
