import { EqualType } from '../types/common';
import { ObjectType } from '../types/object';
import { UnionToTuple } from '../types/union';

export type ObjectEntries<T> = EqualType<keyof T, number, false> extends true
  ? ReadonlyArray<readonly [number, T[keyof T]]>
  : EqualType<keyof T, string, false> extends true
    ? ReadonlyArray<readonly [string, T[keyof T]]>
    : EqualType<keyof T, number | string, false> extends true
      ? ReadonlyArray<readonly [number | string, T[keyof T]]>
      : UnionToTuple<{ [K in keyof T]: readonly [K, T[K]] }[keyof T]>;

const objectEntries = <T extends ObjectType>(object: T): ObjectEntries<T> =>
  Object.entries(object) as unknown as ObjectEntries<T>;

export default objectEntries;
