import { UnionToIntersection } from '../types/union';

export type ObjectFromEntries<T extends ReadonlyArray<readonly [number | string, unknown]>> = UnionToIntersection<
  {
    // eslint-disable-next-line @typescript-eslint/ban-types
    [K in keyof T]: T[K] extends readonly [infer A, infer B] ? (A extends number | string ? { [K1 in A]: B } : {}) : {};
  }[number]
>;

const objectFromEntries = <T extends ReadonlyArray<readonly [number | string, unknown]>>(
  tuples: T,
): ObjectFromEntries<T> => Object.fromEntries(tuples) as ObjectFromEntries<T>;

export default objectFromEntries;
