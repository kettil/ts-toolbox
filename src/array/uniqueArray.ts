const uniqueArray = <T>(values: readonly T[]): readonly T[] => [...new Set(values)];

export default uniqueArray;
