const intersectArray = <T1, T2>(array1: readonly T1[], array2: readonly T2[]): Array<Extract<T1, T2>> =>
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  array1.filter((key) => array2.includes(key as any)) as Array<Extract<T1, T2>>;

export default intersectArray;
