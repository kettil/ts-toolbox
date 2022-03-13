import { _, assert } from '@kettil/types';
import { isArray } from '../../../src/is/isArray';

// isArray

const isArray1Value = [] as unknown;
const isArray1Result = isArray(isArray1Value) ? isArray1Value : ('dummy' as const);

assert(_ as typeof isArray1Result, _ as unknown[] | 'dummy');

const isArray2Value = [] as string[] | string;
const isArray2Result = isArray(isArray2Value) ? isArray2Value : ('dummy' as const);

assert(_ as typeof isArray2Result, _ as string[] | 'dummy');

const isArray3Value = [] as number[] | string[] | number | string;
const isArray3Result = isArray(isArray3Value) ? isArray3Value : ('dummy' as const);

assert(_ as typeof isArray3Result, _ as number[] | string[] | 'dummy');
