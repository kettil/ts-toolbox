/* e1slint-disable @typescript-eslint/no-unused-vars */
import { compareAsc } from './compareAsc';
import { SortTransform, SortCallback } from './types';

const compareTransformAsc =
  <T>(callback: SortTransform<T>): SortCallback<T> =>
    (a: T, b: T) =>
      compareAsc(callback(a), callback(b));

export { compareTransformAsc };
