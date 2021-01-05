const objectEntries = <K extends number | string, T>(object: Record<K, T>): ReadonlyArray<[K, T]> =>
  Object.entries(object) as Array<[K, T]>;

export default objectEntries;
