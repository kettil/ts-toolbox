import type { TupelLength } from '../tupel/tupelLength';
import type { TupleOf } from '../tupel/tupleOf';

type Addition<A extends number, B extends number> = TupelLength<[...TupleOf<0, A>, ...TupleOf<0, B>]>;

export type { Addition };
