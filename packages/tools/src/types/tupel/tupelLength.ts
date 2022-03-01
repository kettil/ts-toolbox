type TupelLength<T extends unknown[]> = T extends { length: infer L } ? L : never;

export type { TupelLength };
