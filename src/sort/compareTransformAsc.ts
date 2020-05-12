import compareAsc from './compareAsc';
import { SortTransform } from './types';

const compareTransformAsc = <T>(callback: SortTransform<T>) => (a: T, b: T) => compareAsc(callback(a), callback(b));

export default compareTransformAsc;
