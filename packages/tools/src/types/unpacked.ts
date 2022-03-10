type Unpacked<T> = T extends Array<infer U> ? U : T extends Set<infer U> ? U : T extends Promise<infer U> ? U : T;

export type { Unpacked };
