import { assert, _ } from '@kettil/types';
import { objectMap } from '../../../src/object/objectMap';

const objectMap1 = objectMap({ a: 13, b: 42 }, (k, v) => [k, v * 2]);

assert(_ as typeof objectMap1, _ as { a: number } & { b: number });

const objectMap2 = objectMap({ a: 13, b: 42 } as const, (k, v) => [k, v]);

assert(_ as typeof objectMap2, _ as { a: 13 | 42 } & { b: 13 | 42 });
