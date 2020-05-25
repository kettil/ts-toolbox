const objectEntries = <K extends string | number, T>(object: Record<K, T>): ReadonlyArray<[K, T]> =>
  Object.entries(object) as Array<[K, T]>;

export default objectEntries;
