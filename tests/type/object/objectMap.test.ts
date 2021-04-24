import objectMap from '../../../src/object/objectMap';
import { Expect } from '../../../src/types/common';

// objectMap

const objectMap1Value = objectMap({ a: 13, b: 42 }, (k, v) => [k, v * 2]);

export type ObjectMap1Test = Expect<typeof objectMap1Value, { a: number } & { b: number }, true>;

const objectMap2Value = objectMap({ a: 13, b: 42 } as const, (k, v) => [k, v]);

export type ObjectMap2Test = Expect<typeof objectMap2Value, { a: 13 | 42 } & { b: 13 | 42 }, true>;
