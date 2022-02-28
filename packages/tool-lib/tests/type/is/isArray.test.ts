import { isArray } from '../../../src/is/isArray';
import type { Expect } from '../../../src/types/expect';

// isArray

const isArray1Value = [] as unknown;
const isArray1Result = isArray(isArray1Value) ? isArray1Value : ('dummy' as const);

export type IsArray1Test = Expect<typeof isArray1Result, unknown[] | 'dummy', true>;

const isArray2Value = [] as string[] | string;
const isArray2Result = isArray(isArray2Value) ? isArray2Value : ('dummy' as const);

export type IsArray2Test = Expect<typeof isArray2Result, string[] | 'dummy', true>;

const isArray3Value = [] as number[] | string[] | number | string;
const isArray3Result = isArray(isArray3Value) ? isArray3Value : ('dummy' as const);

export type IsArray3Test = Expect<typeof isArray3Result, number[] | string[] | 'dummy', true>;
