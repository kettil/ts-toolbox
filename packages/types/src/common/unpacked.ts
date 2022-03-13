type UnpackedArray<T> = T extends Array<infer U> ? U : T;
type UnpackedPromise<T> = T extends Promise<infer U> ? U : T;
type UnpackedSet<T> = T extends Set<infer U> ? U : T;

type Unpacked<T> = UnpackedArray<UnpackedPromise<UnpackedSet<T>>>;

export type { Unpacked };
