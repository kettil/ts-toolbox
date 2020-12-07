export type ObjectType<Props = unknown> = Record<string | number, Props>;

export type ObjectClean<T> = Omit<
  T,
  {
    [P in keyof T]: T[P] extends never ? P : T[P] extends null ? P : T[P] extends undefined ? P : never;
  }[keyof T]
>;

type ObjectNormalizeRecursive<T> = T extends readonly [infer I, ...infer U]
  ? readonly [ObjectNormalizeRecursive<I>, ...ObjectNormalizeRecursive<U>]
  : T extends ObjectType
    ? ObjectNormalize<T>
    : T;

export type ObjectNormalize<T extends ObjectType> = ObjectClean<
  { readonly [K in keyof T as undefined extends T[K] ? K : never]+?: ObjectNormalizeRecursive<T[K]> } &
  { readonly [K in keyof T as undefined extends T[K] ? never : K]-?: ObjectNormalizeRecursive<T[K]> }
>;
