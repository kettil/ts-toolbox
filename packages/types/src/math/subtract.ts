import type { TupelLength } from '../tupel/tupelLength';
import type { TupleOf } from '../tupel/tupleOf';

type Subtract<A extends number, B extends number> = TupleOf<0, A> extends [...infer U, ...TupleOf<0, B>]
  ? TupelLength<U>
  : never;

export type { Subtract };
