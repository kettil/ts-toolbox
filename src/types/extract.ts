import { TupleOf } from './tuple';

export type ExtractTypeFromTupleArray<T, Position extends number = 0> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [K in keyof T]: T[K] extends readonly [...TupleOf<unknown, Position>, infer R, ...infer _] ? R : never;
}[keyof T extends number ? keyof T : never];
