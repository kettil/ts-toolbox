import { EqualType } from '../../../src/types/equalType';
import { Expect } from '../../../src/types/expect';

type EqualType1Value = EqualType<[string], [string], false>;
export type EqualType1Test = Expect<EqualType1Value, true, true>;

type EqualType2Value = EqualType<{ a: number }, { a: number }, false>;
export type EqualType2Test = Expect<EqualType2Value, true, true>;

type EqualType3Value = EqualType<{ a: number }, { a: string }, false>;
export type EqualType3Test = Expect<EqualType3Value, true, false>;
