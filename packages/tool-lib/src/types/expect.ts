import { EqualType } from './equalType';

type Expect<Value, Expected, Result extends EqualType<Value, Expected, false>> = Result;

export type { Expect };
