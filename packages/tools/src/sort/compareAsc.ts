import type { SortValue } from './types';

const compareAsc = <T extends SortValue>(a: T, b: T): number => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  }

  return a.toString().localeCompare(b.toString());
};

export { compareAsc };
