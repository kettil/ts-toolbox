import { assert, _ } from '@kettil/types';
import type { ObjectFromEntries } from '../../../src/object/objectFromEntries';

type TypeWithObjectFromEntries1 = ObjectFromEntries<Array<[number | string, unknown]>>;

assert(_ as TypeWithObjectFromEntries1, _ as { [K in number]: unknown } & { [K in string]: unknown });

type TypeWithObjectFromEntries2 = ObjectFromEntries<Array<[number | string, number]>>;

assert(_ as TypeWithObjectFromEntries2, _ as { [K in number]: number } & { [K in string]: number });

type TypeWithObjectFromEntries3 = ObjectFromEntries<Array<[string, number]>>;

assert(_ as TypeWithObjectFromEntries3, _ as Record<string, number>);

type TypeWithObjectFromEntries4 = ObjectFromEntries<Array<[number, string]>>;

assert(_ as TypeWithObjectFromEntries4, _ as Record<number, string>);

type TypeWithObjectFromEntries5 = ObjectFromEntries<Array<[number, Record<string, number>]>>;

assert(_ as TypeWithObjectFromEntries5, _ as Record<number, Record<string, number>>);

type TypeWithObjectFromEntries6 = ObjectFromEntries<[['a', 42], ['b', 13], ['c', 'foo']]>;

assert(_ as TypeWithObjectFromEntries6, _ as { a: 42 } & { b: 13 } & { c: 'foo' });

type TypeWithObjectFromEntries7 = ObjectFromEntries<[['a', number], ['b', string], ['c', string]]>;

assert(_ as TypeWithObjectFromEntries7, _ as { a: number } & { b: string } & { c: string });
