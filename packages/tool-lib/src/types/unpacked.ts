type Unpacked<T> = T extends Array<infer U> ? U : T;

export type { Unpacked };
