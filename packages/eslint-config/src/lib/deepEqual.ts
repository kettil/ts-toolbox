import { intersect } from './intersect';
import { isArray } from './isArray';
import { isObject } from './isObject';

const deepMerge = <A = unknown, B = unknown, C = unknown>(a: A, b: B, keys: string[]): C => {
  if (isObject(a) && isObject(b)) {
    return intersect(Object.keys(a), Object.keys(b)).reduce(
      (c, key) => Object.assign(c, { [key]: deepMerge(a[key], b[key], [...keys, key]) }),
      { ...a, ...b },
    ) as C;
  }

  if (isArray(a) && isArray(b)) {
    return [...new Set([...a, ...b])] as unknown as C;
  }

  if (isObject(a) || isObject(b) || isArray(a) || isArray(b)) {
    throw new Error(`The types of path "${keys.join('.')}" are different`);
  }

  if (a === undefined) {
    return b as unknown as C;
  }

  return a as unknown as C;
};

export { deepMerge };
