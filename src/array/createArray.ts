const createArray = <T>(i: number, map?: (i: number) => T) => {
  const length = Math.max(0, Math.floor(i));
  const data = Array.from({ length });

  if (map) {
    return data.map<T>((_, n) => map(n));
  }

  return data;
};

export default createArray;
