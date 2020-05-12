import isArray from './array';

const isObject = (value: unknown): value is Record<string | number, unknown> =>
  typeof value === 'object' && value !== null && !isArray(value);

export default isObject;
