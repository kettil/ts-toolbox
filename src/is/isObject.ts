import isArray from './isArray';

const isObject = (value: unknown): value is Record<number | string, unknown> =>
  typeof value === 'object' && value !== null && !isArray(value);

export default isObject;
