type CreateArray = {
  (n: number): unknown[];
  <T>(n: number, map: (i: number) => T): T[];
};

const createArray: CreateArray = <T>(n: number, map?: (i: number) => T): unknown[] | T[] => {
  const length = Math.max(0, Math.floor(n));
  const data = Array.from({ length });

  if (map) {
    return data.map<T>((_, i) => map(i));
  }

  return data;
};

export default createArray;
