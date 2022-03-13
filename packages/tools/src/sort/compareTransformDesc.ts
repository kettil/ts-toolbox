import { compareAsc } from './compareAsc';
import type { SortTransform, SortCallback } from './types';

const compareTransformDesc =
  <T>(callback: SortTransform<T>): SortCallback<T> =>
    (a: T, b: T) =>
      compareAsc(callback(b), callback(a));

export { compareTransformDesc };
