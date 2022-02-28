import { Expect } from '../../../../src/types/expect';
import { ObjectClean } from '../../../../src/types/object/objectClean';

type ObjectClean1Value = ObjectClean<{ a: null; b: undefined; c: string; d: number }>;
export type ObjectClean1Test = Expect<ObjectClean1Value, { c: string; d: number }, true>;
