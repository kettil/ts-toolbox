import { Expect } from '../types/common';
import { ObjectFromEntries } from './objectFromEntries';

// ObjectFromEntries

type ObjectFromEntries1Value = ObjectFromEntries<Array<[number | string, unknown]>>;
export type ObjectFromEntries1Test = Expect<
  ObjectFromEntries1Value,
  { [K in number]: unknown } & { [K in string]: unknown },
  true
>;

type ObjectFromEntries2Value = ObjectFromEntries<Array<[number | string, number]>>;
export type ObjectFromEntries2Test = Expect<
  ObjectFromEntries2Value,
  { [K in number]: number } & { [K in string]: number },
  true
>;

type ObjectFromEntries3Value = ObjectFromEntries<Array<[number | string, number]>>;
export type ObjectFromEntries3Test = Expect<ObjectFromEntries3Value, Record<number | string, string>, false>;

type ObjectFromEntries4Value = ObjectFromEntries<Array<[string, number]>>;
export type ObjectFromEntries4Test = Expect<ObjectFromEntries4Value, Record<string, number>, true>;

type ObjectFromEntries5Value = ObjectFromEntries<Array<[number, string]>>;
export type ObjectFromEntries5Test = Expect<ObjectFromEntries5Value, Record<number, string>, true>;

type ObjectFromEntries6Value = ObjectFromEntries<Array<[number, Record<string, number>]>>;
export type ObjectFromEntries6Test = Expect<ObjectFromEntries6Value, Record<number, Record<string, number>>, true>;

type ObjectFromEntries7Value = ObjectFromEntries<[['a', 42], ['b', 13], ['c', 'foo']]>;
export type ObjectFromEntries7Test = Expect<ObjectFromEntries7Value, { a: 42 } & { b: 13 } & { c: 'foo' }, true>;

type ObjectFromEntries8Value = ObjectFromEntries<[['a', number], ['b', string], ['c', string]]>;
export type ObjectFromEntries8Test = Expect<
  ObjectFromEntries8Value,
  { a: number } & { b: string } & { c: string },
  true
>;
