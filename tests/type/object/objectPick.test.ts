import { objectPick } from '../../../src/object/objectPick';
import { Expect } from '../../../src/types/expect';

// objectPick

const objectPick1Value = objectPick({ a: 13, b: 42 }, ['a']);

export type ObjectPick1Test = Expect<typeof objectPick1Value, { a: number }, true>;

const objectPick2Value = objectPick({ a: 13, b: '42' } as const, ['b']);

export type ObjectPick2Test = Expect<typeof objectPick2Value, { readonly b: '42' }, true>;

const objectPick3Value = objectPick({ a: 13, b: '42', c: true, d: { e: 'A' } } as const, ['b', 'c', 'd']);

export type ObjectPick3Test = Expect<
  typeof objectPick3Value,
  { readonly b: '42'; readonly c: true; readonly d: { readonly e: 'A' } },
  true
>;
