import type { ObjectType, UnionToTuple } from '@kettil/types';

type ObjectEntries<T> = number | string extends keyof T
  ? ReadonlyArray<readonly [number | string, T[keyof T]]>
  : number extends keyof T
    ? ReadonlyArray<readonly [number, T[keyof T]]>
    : string extends keyof T
      ? ReadonlyArray<readonly [string, T[keyof T]]>
      : UnionToTuple<{ [K in keyof T]: readonly [K, T[K]] }[keyof T]>;

const objectEntries = <T extends ObjectType>(value: T): ObjectEntries<T> =>
  Object.entries(value) as unknown as ObjectEntries<T>;

export type { ObjectEntries };
export { objectEntries };
