import { EqualType, Expect, Range, TupleOf } from './common';

// EqualType

type EqualType1Value = EqualType<[string], [string], false>;
export type EqualType1Test = Expect<EqualType1Value, true, true>;

type EqualType2Value = EqualType<{ a: number }, { a: number }, false>;
export type EqualType2Test = Expect<EqualType2Value, true, true>;

type EqualType3Value = EqualType<{ a: number }, { a: string }, false>;
export type EqualType3Test = Expect<EqualType3Value, true, false>;

// TupleOf

type TupleOf1Value = TupleOf<string, 1>;
export type TupleOf1Test = Expect<TupleOf1Value, [string], true>;

type TupleOf2Value = TupleOf<boolean, 3>;
export type TupleOf2Test = Expect<TupleOf2Value, [boolean, boolean, boolean], true>;

// Range

type Range1Value = Range<4>;
export type Range1Test = Expect<Range1Value, ['3', '2', '1', '0'], true>;
