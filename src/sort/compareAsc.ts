import { SortValue } from './types';

const compareAsc = <T extends SortValue>(a: T, b: T) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  }

  return a.toString().localeCompare(b.toString());
};

export default compareAsc;
