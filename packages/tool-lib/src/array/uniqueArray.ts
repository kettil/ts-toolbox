const uniqueArray = <T>(values: readonly T[]): T[] => [...new Set(values)];

export { uniqueArray };
