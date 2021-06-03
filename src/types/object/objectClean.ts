type ObjectClean<T> = Omit<
  T,
  {
    [P in keyof T]: T[P] extends never ? P : T[P] extends null ? P : T[P] extends undefined ? P : never;
  }[keyof T]
>;

export type { ObjectClean };
