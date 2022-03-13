import type { ObjectType } from '@kettil/types';
import { assert, _ } from '@kettil/types';
import type { ObjectEntries } from '../../../src/object/objectEntries';

type TypeWithObjectEntries1 = ObjectEntries<ObjectType>;

assert(_ as TypeWithObjectEntries1, _ as ReadonlyArray<readonly [number | string, unknown]>);

type TypeWithObjectEntries2 = ObjectEntries<ObjectType<number>>;

assert(_ as TypeWithObjectEntries2, _ as ReadonlyArray<readonly [number | string, number]>);

type TypeWithObjectEntries3 = ObjectEntries<Record<string, number>>;

assert(_ as TypeWithObjectEntries3, _ as ReadonlyArray<readonly [string, number]>);

type TypeWithObjectEntries4 = ObjectEntries<Record<number, string>>;

assert(_ as TypeWithObjectEntries4, _ as ReadonlyArray<readonly [number, string]>);

type TypeWithObjectEntries5 = ObjectEntries<Record<number, Record<string, number>>>;

assert(_ as TypeWithObjectEntries5, _ as ReadonlyArray<readonly [number, Record<string, number>]>);

type TypeWithObjectEntries6 = ObjectEntries<{ a: 42; b: 13; c: 'foo' }>;

assert(_ as TypeWithObjectEntries6, _ as readonly [readonly ['a', 42], readonly ['b', 13], readonly ['c', 'foo']]);

type TypeWithObjectEntries7 = ObjectEntries<{ readonly a: number; readonly b: string; readonly c: string }>;

assert(
  _ as TypeWithObjectEntries7,
  _ as readonly [readonly ['a', number], readonly ['b', string], readonly ['c', string]],
);
