import type { ObjectClean } from './objectClean';
import type { ObjectType } from './objectType';

type ObjectNormalizeRecursive<T> = T extends readonly [infer I, ...infer U]
  ? readonly [ObjectNormalizeRecursive<I>, ...ObjectNormalizeRecursive<U>]
  : T extends ObjectType
    ? ObjectNormalize<T>
    : T;

type ObjectNormalize<T extends ObjectType> = ObjectClean<
  {
    readonly [K in keyof T as undefined extends T[K] ? never : K]-?: ObjectNormalizeRecursive<T[K]>;
  } & { readonly [K in keyof T as undefined extends T[K] ? K : never]+?: ObjectNormalizeRecursive<T[K]> }
>;

export type { ObjectNormalize };
