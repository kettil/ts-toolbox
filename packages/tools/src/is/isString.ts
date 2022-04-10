const isString = (value: unknown, withoutEmptyString = false): value is string =>
  typeof value === 'string' && (!withoutEmptyString || value.trim() !== '');

export { isString };
