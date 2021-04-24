import { Expect } from '../../../src/types/common';
import { ExtractTypeFromTupleArray } from '../../../src/types/extract';

// ExtractTypeFromTupleArray

type ExtractTypeFromTupleArray1Value = ExtractTypeFromTupleArray<[['a', 42], ['b', 13]]>;
export type ExtractTypeFromTupleArray1Test = Expect<ExtractTypeFromTupleArray1Value, 'a' | 'b', true>;

type ExtractTypeFromTupleArray2Value = ExtractTypeFromTupleArray<[['a', 42], ['b', 13]], 0>;
export type ExtractTypeFromTupleArray2Test = Expect<ExtractTypeFromTupleArray2Value, 'a' | 'b', true>;

type ExtractTypeFromTupleArray3Value = ExtractTypeFromTupleArray<[['a', 42], ['b', 13]], 1>;
export type ExtractTypeFromTupleArray3Test = Expect<ExtractTypeFromTupleArray3Value, 13 | 42, true>;
