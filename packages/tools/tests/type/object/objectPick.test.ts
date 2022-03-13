import { assert, _ } from '@kettil/types';
import { objectPick } from '../../../src/object/objectPick';

const objectPick1 = objectPick({ a: 13, b: 42 }, ['a']);

assert(_ as typeof objectPick1, _ as { a: number });

const objectPick2 = objectPick({ a: 13, b: '42' } as const, ['b']);

assert(_ as typeof objectPick2, _ as { readonly b: '42' });

const objectPick3 = objectPick({ a: 13, b: '42', c: true, d: { e: 'A' } } as const, ['b', 'c', 'd']);

assert(_ as typeof objectPick3, _ as { readonly b: '42'; readonly c: true; readonly d: { readonly e: 'A' } });
