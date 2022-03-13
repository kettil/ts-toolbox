import type { TupleOf } from '../tupel/tupleOf';

type ExtractTypeFromTupleArray<T, Position extends number = 0> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- by "_" the tuple size is dynamic
  [K in keyof T]: T[K] extends readonly [...TupleOf<unknown, Position>, infer Value, ...infer _] ? Value : never;
}[keyof T extends number ? keyof T : never];

export type { ExtractTypeFromTupleArray };
