import { ObjectType } from '../types/object/objectType';
import { UnionToIntersection } from '../types/unionToIntersection';

type ObjectFromEntries<T extends ReadonlyArray<readonly [number | string, unknown]>> = UnionToIntersection<
  {
    [K in keyof T]: T[K] extends readonly [infer A, infer B]
      ? A extends number | string
        ? { [K1 in A]: B }
        : ObjectType
      : ObjectType;
  }[number]
>;

const objectFromEntries = <T extends ReadonlyArray<readonly [number | string, unknown]>>(
  tuples: T,
): ObjectFromEntries<T> => Object.fromEntries(tuples) as ObjectFromEntries<T>;

export type { ObjectFromEntries };
export { objectFromEntries };
