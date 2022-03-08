import { isArray } from './isArray';
import { isNil } from './isNil';

const isObject = (value: unknown): value is Record<number | string, unknown> =>
  typeof value === 'object' && !isNil(value) && !isArray(value);

export { isObject };
