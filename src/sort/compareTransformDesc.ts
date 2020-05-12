import compareAsc from './compareAsc';
import { SortTransform } from './types';

const transformAsc = <T>(callback: SortTransform<T>) => (a: T, b: T) => compareAsc(callback(b), callback(a));

export default transformAsc;
