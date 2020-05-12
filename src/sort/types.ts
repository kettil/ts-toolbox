export type SortValue = string | number;

export type SortTransform<T> = (value: T) => SortValue;
