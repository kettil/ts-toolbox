const isArray = <T extends unknown>(value: T): value is T extends unknown[] ? T : never => Array.isArray(value);

export { isArray };
