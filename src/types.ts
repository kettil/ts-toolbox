export type EqualType<T, S> = [T] extends [S] ? ([S] extends [T] ? true : never) : never;
