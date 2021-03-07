import { TupelLength, TupleOf } from './tuple';

export type Addition<A extends number, B extends number> = TupelLength<[...TupleOf<0, A>, ...TupleOf<0, B>]>;

export type Subtract<A extends number, B extends number> = TupleOf<0, A> extends [...infer U, ...TupleOf<0, B>]
  ? TupelLength<U>
  : never;
