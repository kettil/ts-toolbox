import { Expect } from '../types/common';
import { ObjectType } from '../types/object';
import { ObjectEntries } from './objectEntries';

// ObjectEntries

type ObjectEntries1Value = ObjectEntries<ObjectType>;
export type ObjectEntries1Test = Expect<ObjectEntries1Value, ReadonlyArray<readonly [number | string, unknown]>, true>;

type ObjectEntries2Value = ObjectEntries<Record<number | string, number>>;
export type ObjectEntries2Test = Expect<ObjectEntries2Value, ReadonlyArray<readonly [number | string, number]>, true>;

type ObjectEntries3Value = ObjectEntries<Record<string, number>>;
export type ObjectEntries3Test = Expect<ObjectEntries3Value, ReadonlyArray<readonly [string, number]>, true>;

type ObjectEntries4Value = ObjectEntries<Record<number, string>>;
export type ObjectEntries4Test = Expect<ObjectEntries4Value, ReadonlyArray<readonly [number, string]>, true>;

type ObjectEntries5Value = ObjectEntries<Record<number, Record<string, number>>>;
export type ObjectEntries5Test = Expect<
  ObjectEntries5Value,
  ReadonlyArray<readonly [number, Record<string, number>]>,
  true
>;

type ObjectEntries6Value = ObjectEntries<{ a: 42; b: 13; c: 'foo' }>;
export type ObjectEntries6Test = Expect<
  ObjectEntries6Value,
  readonly [readonly ['a', 42], readonly ['b', 13], readonly ['c', 'foo']],
  true
>;

type ObjectEntries7Value = ObjectEntries<{ readonly a: number; readonly b: string; readonly c: string }>;
export type ObjectEntries7Test = Expect<
  ObjectEntries7Value,
  readonly [readonly ['a', number], readonly ['b', string], readonly ['c', string]],
  true
>;
