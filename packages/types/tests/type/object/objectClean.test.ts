import { assert, _ } from '../../../src/assert';
import type { ObjectClean } from '../../../src/object/objectClean';

type TypeWithSimpleObject = ObjectClean<{ a: null; b: undefined; c: string; d: number; e: never }>;

assert(_ as TypeWithSimpleObject, _ as { c: string; d: number });
// @ts-expect-error -- object is too large
assert(_ as TypeWithSimpleObject, _ as { a: null; b: undefined; c: string; d: number; e: never });
// @ts-expect-error -- key "e" is not defined
assert(_ as TypeWithSimpleObject, _ as { c: string; d: number; e: boolean });
