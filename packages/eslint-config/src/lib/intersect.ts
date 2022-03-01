const intersect = <A extends readonly unknown[], B extends readonly unknown[]>(
  keysA: A,
  keysB: B,
): ReadonlyArray<Extract<A[number], B[number]>> =>
  keysA.filter((key) => keysB.includes(key)) as ReadonlyArray<Extract<A[number], B[number]>>;

export { intersect };
