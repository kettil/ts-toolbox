const objectKeys = <T extends string | number>(object: Record<T, unknown>): readonly T[] => Object.keys(object) as T[];

export default objectKeys;
