const isNil = (value: unknown): value is null | undefined => typeof value === 'undefined' || value === null;

export { isNil };
