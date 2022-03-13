import { assert, _ } from '../../../src/assert';
import type { UnionToIntersection } from '../../../src/union/unionToIntersection';

type TypeWithFunctions = UnionToIntersection<((a: string) => void) | ((b: number) => void)>;

assert(_ as TypeWithFunctions, _ as ((a: string) => void) & ((b: number) => void));

type TypeWithObjects = UnionToIntersection<{ a: 42 } | { b: 13 }>;

assert(_ as TypeWithObjects, _ as { a: 42 } & { b: 13 });
