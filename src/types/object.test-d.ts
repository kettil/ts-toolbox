import { Expect } from './common';
import { ObjectClean, ObjectNormalize, ObjectType } from './object';

// ObjectType

type ObjectType1Value = ObjectType;
export type ObjectType1Test = Expect<ObjectType1Value, Record<number | string, unknown>, true>;

// ObjectClean

type ObjectClean1Value = ObjectClean<{ a: null; b: undefined; c: string; d: number }>;
export type ObjectClean1Test = Expect<ObjectClean1Value, { c: string; d: number }, true>;

// ObjectNormalize

type ObjectNormalize1Value = ObjectNormalize<{
  a: string;
  b: undefined | { c: string | undefined; d?: number };
  e: [number, number, string];
  f: boolean[] | undefined;
}>;
export type ObjectNormalize1Test = Expect<
  ObjectNormalize1Value,
  {
    readonly a: string;
    readonly b?: {
      readonly c?: string | undefined;
      readonly d?: number | undefined;
    };
    readonly e: readonly [number, number, string];
    readonly f?: boolean[] | undefined;
  },
  true
>;
