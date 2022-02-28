const objectKeys = <T extends number | string>(object: Record<T, unknown>): readonly T[] => Object.keys(object) as T[];

export { objectKeys };
