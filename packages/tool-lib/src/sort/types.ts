type SortValue = number | string;

type SortTransform<T> = (value: T) => SortValue;

type SortCallback<T> = (a: T, b: T) => number;

export type { SortValue, SortTransform, SortCallback };
