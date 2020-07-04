export type SortValue = string | number;

export type SortTransform<T> = (value: T) => SortValue;

export type SortCallback<T> = (a: T, b: T) => number;
